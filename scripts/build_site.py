#!/usr/bin/env python3
"""Build a premium, offline-first German Microsoft 365 Support Knowledge Base.

Source of truth: docs/*.md. The generated site works directly from file://
without a web server, account, dependency install or a Microsoft tenant.
"""
from __future__ import annotations
import csv
import html
import json
import re
from pathlib import Path
import mistune
import yaml

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / 'docs'
SITE = ROOT / 'site'
MD = mistune.create_markdown(escape=True, plugins=['table', 'task_lists', 'strikethrough'])

def articles():
    result=[]
    # Only numbered KB articles are published; ordinary documentation, such as
    # PORTFOLIO_CASE_STUDY.md, must not be parsed as a YAML-front-matter article.
    for p in sorted(DOCS.glob('[0-9][0-9][0-9]-*.md')):
        text=p.read_text(encoding='utf-8')
        match=re.match(r'\A---\s*\n(.*?)\n---\s*\n(.*)\Z',text,re.S)
        if match is None:
            raise ValueError(f'Invalid article front matter: {p.name}')
        header,body=match.groups()
        meta=yaml.safe_load(header)
        article_html=MD(body)
        # Cross-document references are client routes: work offline and on GitHub Pages.
        article_html=re.sub(r'href="([0-9]{3}-[A-Za-z0-9-]+)\.md(#[^"]*)?"',lambda m:f'href="#/artikel/{m.group(1)}{m.group(2) or ""}"',article_html)
        # Enable the demo checklists; JS saves their state locally per article.
        article_html=re.sub(r'(<input\b[^>]*?)\s+disabled(?:="[^"]*")?',r'\1',article_html)
        result.append({
            'id':meta['id'],'slug':p.stem,'title':meta['title'],
            'category':meta['category'],'level':meta['level'],
            'description':meta['description'],'tags':meta.get('tags',[]),
            'updated':str(meta.get('updated','2026-10-20')),
            'html':article_html,'plain':re.sub(r'\s+',' ',body)[:20000]
        })
    return result

def cases():
    out=[]
    with (ROOT/'examples'/'demo-tickets.csv').open(encoding='utf-8-sig',newline='') as f:
        r=csv.DictReader(f,delimiter=';')
        for row in r:out.append(row)
    return out

def main():
    docs=articles(); demos=cases()
    data=json.dumps({'articles':docs,'cases':demos},ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    tpl=(ROOT/'scripts'/'template.html').read_text(encoding='utf-8')
    page=tpl.replace('<!-- INJECT_DOCUMENT_DATA -->',f'<script type="application/json" id="kb-data">{data}</script>')
    SITE.mkdir(parents=True,exist_ok=True)
    (SITE/'index.html').write_text(page,encoding='utf-8')
    for article in docs:
        link='index.html#/artikel/'+article['slug']
        redirect=f'<!doctype html><html lang="de"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url={link}"><title>{html.escape(article["title"])}</title></head><body><a href="{link}">Artikel öffnen</a></body></html>'
        (SITE/(article['slug']+'.html')).write_text(redirect,encoding='utf-8')
    (SITE/'.nojekyll').write_text('',encoding='utf-8')
    print(f'Generated premium offline app with {len(docs)} articles and {len(demos)} demo tickets at {SITE}')

if __name__=='__main__':main()
