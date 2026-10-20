/* m365.desk — Offline Knowledge Base. All app logic is local; no server or API calls. */
(() => {
  'use strict';
  const dataElement = document.getElementById('kb-data');
  if (!dataElement) return;
  const DB = JSON.parse(dataElement.textContent);
  const ARTICLES = DB.articles;
  const csvCases = DB.cases || [];
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const ICONS = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-7h6v7"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    layers:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 9h8M8 13h8M8 17h4"/>',
    ticket:'<path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a3 3 0 0 0 0 6v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a3 3 0 0 0 0-6Z"/><path d="M13 5v2M13 11v2M13 17v2"/>',
    bookmark:'<path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    cloud:'<path d="M20 16.5a4.5 4.5 0 0 0-3.2-7.7 6 6 0 0 0-11.5 2A4.5 4.5 0 0 0 7.5 20H18a4 4 0 0 0 2-3.5Z"/>',
    monitor:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    spark:'<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7Z"/><path d="m19 17 .7 1.3L21 19l-1.3.7L19 21l-.7-1.3L17 19l1.3-.7Z"/>',
    arrow:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    printer:'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    check:'<path d="m5 12 4 4 10-10"/>',
    alert:'<circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16.5v.5"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    key:'<circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 9-9L22 4l-3 3 2 2-3 3-2-2-2 2"/>',
    refresh:'<path d="M20 11a8 8 0 0 0-14-5L3 9m0-5v5h5M4 13a8 8 0 0 0 14 5l3-3m0 5v-5h-5"/>'
  };
  function icon(name, cls='') {return `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.book}</svg>`;}
  function esc(s) {return String(s ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function safeGet(k, fallback) {try {const v=localStorage.getItem('m365desk-'+k);return v===null?fallback:JSON.parse(v);}catch{return fallback;}}
  function safeSet(k,v) {try {localStorage.setItem('m365desk-'+k,JSON.stringify(v));}catch{}}
  const categories=[...new Set(ARTICLES.map(a=>a.category))];
  const categoryIcons={'Grundlagen':'book','Benutzer & Zugriff':'users','Messaging & E-Mail':'mail','Kollaboration':'cloud','Service Desk':'ticket','Outlook & Exchange':'mail','Teams & Zusammenarbeit':'users','Identität & Sicherheit':'shield','E-Mail & Zusammenarbeit':'mail'};
  const state={theme:safeGet('theme','light'),favorites:new Set(safeGet('favorites',[])),mode:0,articleQuery:'',articleCategory:'Alle',workflowTab:'onboarding',checklist:safeGet('onboarding',[]),diagnostic:'anmeldung',ticketOutput:''};
  const onboardingSteps=[
    'HR-Auftrag, Eintrittsdatum und Genehmigung der zuständigen Führungskraft prüfen',
    'Benötigte Arbeitsmittel, Gerätekategorie und Inventarnummer erfassen',
    'Benutzername, Anzeigename, Standort und Microsoft-365-Konto nach Richtlinie anlegen',
    'Lizenzverfügbarkeit und passende Dienste kontrollieren',
    'Gruppen, Teams und Berechtigungen nur mit dokumentierter Freigabe zuweisen',
    'Gerät aktualisieren, Verschlüsselung und Sicherheitsstatus kontrollieren',
    'Genehmigte Standard- und Fachanwendungen installieren',
    'Zugangsdaten ausschließlich über einen sicheren Kanal übergeben',
    'Erstanmeldung gemeinsam mit dem neuen Mitarbeitenden durchführen',
    'MFA-Methode durch die Person selbst registrieren lassen',
    'Outlook: Test-Mail versenden und empfangen',
    'Teams: Anmeldung, Chat und Testmeeting prüfen',
    'OneDrive: Testdatei erstellen und Synchronisierung prüfen',
    'Übergabeprotokoll, Schulung und abschließenden Ticketstatus dokumentieren'
  ];
  const diagnosticMap={
    anmeldung:{title:'Anmeldung oder MFA',desc:'Zuerst betroffene Konten, exakten Fehlertext und den Zeitpunkt prüfen. Keine Codes oder Kennwörter im Ticket speichern.',ids:['050-anmeldung-mfa','060-passwort','140-service-health']},
    outlook:{title:'Outlook / E-Mail',desc:'Webmail gegen Desktop abgleichen, Netzwerk und Lizenz kontrollieren; bei mehreren betroffenen Personen den Servicestatus prüfen.',ids:['070-outlook','120-mailfluss','080-shared-mailbox']},
    teams:{title:'Microsoft Teams',desc:'Web- und Desktop-Client vergleichen. Aktuelle Anwendungsversion, Richtlinien, Dienststatus und Testanruf prüfen.',ids:['090-teams','140-service-health']},
    onedrive:{title:'OneDrive / SharePoint',desc:'Dateien im Browser prüfen, lokale Synchronisierung eingrenzen, vor Client-Zurücksetzung ungesicherte Daten schützen.',ids:['100-onedrive','110-sharepoint']},
    lizenz:{title:'Konto / Lizenz',desc:'Freigabe, Rolle, Lizenzbestand, Serviceplan und erforderliche Berechtigung abgleichen.',ids:['030-benutzeranlage','040-lizenzen-rollen','150-datenschutz']}
  };
  let toastTimer;
  function toast(msg) {const el=$('#toast');el.textContent=msg;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2600);}
  function link(slug) {return '#/artikel/'+slug;}
  function getArticle(slug) {return ARTICLES.find(a=>a.slug===slug);}
  function title(s) {document.title=`${s} — m365.desk` ;}
  function applyTheme() {document.body.classList.toggle('dark',state.theme==='dark');$('#theme-light').classList.toggle('selected',state.theme==='light');$('#theme-dark').classList.toggle('selected',state.theme==='dark');safeSet('theme',state.theme);}
  function fillIcons(){ $$('[data-icon]').forEach(n=>{n.innerHTML=icon(n.dataset.icon);}); }
  function updateFavoriteCounter(){$('#saved-count').textContent=String(state.favorites.size);}
  function bookmarkButton(article){let saved=state.favorites.has(article.slug);return `<button class="save-control ${saved?'saved':''}" title="${saved?'Aus Merkliste entfernen':'Zur Merkliste hinzufügen'}" aria-label="${saved?'Aus Merkliste entfernen':'Zur Merkliste hinzufügen'}" aria-pressed="${saved}" data-save="${esc(article.slug)}">${icon('bookmark')}</button>`;}
  function renderTile(a){return `<div class="article-tile"><div class="tile-top"><span class="tile-id">${esc(a.id)}</span><span class="tile-tag">${esc(a.level)}</span></div><a href="${link(a.slug)}"><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p></a><div class="tile-bottom"><span>${esc(a.category)}</span>${bookmarkButton(a)}</div></div>`;}
  function setCrumb(s){$('#breadcrumb-current').textContent=s;}
  function setNav(nav){$$('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===nav));$$('[data-cat]').forEach(el=>el.classList.toggle('active',nav==='articles'&&state.articleCategory===el.dataset.cat));}
  function scaffold(headline,desc,micro='WISSENSDATENBANK / 2026'){return `<header class="page-head"><div class="micro-label"><span class="slash">✳</span>${esc(micro)}</div><h1 class="page-title">${esc(headline)}</h1>${desc?`<p class="page-desc">${esc(desc)}</p>`:''}</header>`;}
  function sectionHeader(micro,heading,href,label='Alle anzeigen'){return `<div class="section-header"><div><div class="micro-label"><span class="slash">✳</span>${esc(micro)}</div><h2 class="section-heading">${esc(heading)}</h2></div><a class="text-link" href="${href}">${esc(label)} ${icon('arrow')}</a></div>`;}
  function metric(v,l,ic){return `<div class="metric"><div class="metric-number">${v}</div><div class="metric-sub"><span>${l}</span><span class="metric-symbol">${icon(ic)}</span></div></div>`;}
  const modes=[
    {title:'Onboarding',sub:'Mitarbeitende vorbereiten',icon:'users',desc:'Von der Benutzeranlage bis zum ersten Login: dokumentierte Prozesse und sichere Übergaben.',href:'#/workflows?tab=onboarding',action:'Checkliste öffnen'},
    {title:'Troubleshooting',sub:'Probleme systematisch lösen',icon:'target',desc:'Fehler gezielt eingrenzen, die passende Anleitung finden und jeden Schritt nachvollziehbar dokumentieren.',href:'#/workflows?tab=diagnose',action:'Diagnose starten'},
    {title:'Security',sub:'Zugriffe kontrollieren',icon:'shield',desc:'Weniger Berechtigungen, sichere MFA-Verfahren und saubere Dokumentation für den IT-Support.',href:'#/artikel/150-datenschutz',action:'Sicherheitsleitfaden'}
  ];
  function home(){title('Übersicht');setCrumb('Übersicht');setNav('home');const mode=modes[state.mode];$('#app').innerHTML=`
    <section class="hero">
      <div class="hero-copy"><div class="micro-label"><span class="slash">✳</span>MICROSOFT 365 / SUPPORT SYSTEM</div><h1 class="hero-title">Wissen, das<br><em>weiterhilft.</em></h1><p class="hero-description" id="hero-desc">${mode.desc}</p><div class="hero-actions"><a class="action-main" id="hero-cta" href="${mode.href}">${mode.action} ${icon('arrow')}</a><a class="action-secondary" href="#/artikel">Alle Artikel ${icon('arrow')}</a></div></div>
      <div class="hero-object"><div class="hero-aura"></div><div class="glass-plinth" role="group" aria-label="Supportbereich auswählen">${modes.map((m,i)=>`<button class="glass-pill ${state.mode===i?'active':''}" data-mode="${i}" aria-pressed="${state.mode===i}"><span class="glass-symbol">${icon(m.icon)}</span><span class="glass-pill-text">${m.title}<small>${m.sub}</small></span><span class="glass-ellipsis" aria-hidden="true"><i></i><i></i><i></i></span></button>`).join('')}</div></div>
    </section>
    <section class="metric-row" aria-label="Projektstatistik">${metric('17','Deutschsprachige Artikel','book')}${metric('04','Fiktive Praxisfälle','ticket')}${metric('100%','Lokal & ohne Cloudkonto','shield')}</section>
    <section>${sectionHeader('01 / DIREKT LOSLEGEN','Häufige Aufgaben','#/workflows','Workflows ansehen')}<div class="quick-grid">
      ${[['users','01','Neuer Mitarbeitender','Benutzer, Lizenz und Gerät strukturiert vorbereiten.','#/workflows?tab=onboarding','Zur Checkliste'],['target','02','Problem analysieren','Outlook, Teams, OneDrive und MFA gezielt prüfen.','#/workflows?tab=diagnose','Zur Diagnose'],['ticket','03','Ticket dokumentieren','Eine strukturierte Supportnotiz für den Helpdesk erstellen.','#/workflows?tab=ticket','Vorlage öffnen']].map(x=>`<a class="quick-card" href="${x[4]}"><span class="quick-index">${x[1]} / 03</span><span class="quick-icon">${icon(x[0])}</span><h3>${x[2]}</h3><p>${x[3]}</p><span class="quick-bottom">${x[5]} ${icon('arrow')}</span></a>`).join('')}
    </div></section>
    <section class="featured-section">${sectionHeader('02 / KURATIERTES WISSEN','Schnell nachschlagen','#/artikel')}<div class="featured-grid">${['020-onboarding','050-anmeldung-mfa','090-teams','100-onedrive','070-outlook','040-lizenzen-rollen'].map(id=>getArticle(id)).filter(Boolean).map(renderTile).join('')}</div></section>
    <p class="collection-footnote">✳ Unabhängige Demo-Dokumentation. Alle administrativen Änderungen erfordern geeignete Rollen, Genehmigungen und die aktuellen Microsoft-Richtlinien.</p>`;}
  function filterArticles(){const q=normalize(state.articleQuery),cat=state.articleCategory;return ARTICLES.filter(a=>(cat==='Alle'||a.category===cat)&&(q===''||normalize([a.title,a.description,a.category,a.tags.join(' '),a.plain].join(' ')).includes(q)));}
  function normalize(s){return String(s||'').toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  function repaintArticleGrid(){const filtered=filterArticles(),target=$('#article-grid');if(!target)return;target.innerHTML=filtered.length?filtered.map(renderTile).join(''):`<div class="empty-state">${icon('search')}<strong>Keine passenden Artikel gefunden.</strong><p>Andere Stichwörter oder einen anderen Filter ausprobieren.</p><button class="soft-btn" data-reset-filter>Filter zurücksetzen</button></div>`;$('#article-count').textContent=filtered.length+' Artikel';$$('.filter-pill').forEach(el=>{el.classList.toggle('active',el.dataset.filter===state.articleCategory);el.setAttribute('aria-pressed',String(el.dataset.filter===state.articleCategory));});setNav('articles');}
  function articlesPage(){title('Wissensartikel');setCrumb('Wissensartikel');setNav('articles');$('#app').innerHTML=`${scaffold('Wissensartikel.','Praktische Anleitungen für Benutzerverwaltung, Outlook, Teams, OneDrive, Sicherheit und den Service Desk.','BIBLIOTHEK / 17 ARTIKEL')}
    <div class="articles-toolbar"><label class="search-input">${icon('search')}<input id="article-filter-input" placeholder="Stichwort suchen — z. B. MFA, Lizenz, Outlook …" value="${esc(state.articleQuery)}" autocomplete="off" aria-label="Wissensartikel durchsuchen"><span class="small-kbd">⌘ K</span></label><span class="view-count" id="article-count"></span></div>
    <div class="filter-tabs" role="group" aria-label="Artikel nach Themen filtern">${['Alle',...categories].map(c=>`<button data-filter="${esc(c)}" class="filter-pill ${state.articleCategory===c?'active':''}" aria-pressed="${state.articleCategory===c}">${esc(c)}</button>`).join('')}</div>
    <div class="article-grid" id="article-grid"></div><p class="collection-footnote">17 Artikel · Stand Oktober 2026 · Die aktuellen Menüs, Lizenzen und Rollen vor produktiven Eingriffen anhand der Microsoft-Dokumentation prüfen.</p>`;repaintArticleGrid();}
  function detailsPage(slug){const a=getArticle(slug);if(!a){notFound();return;}title(a.title);setCrumb(a.id);setNav('articles');const i=ARTICLES.indexOf(a);const headings=[...a.html.matchAll(/<h2>(.*?)<\/h2>/g)].map(m=>m[1].replace(/<[^>]*>/g,''));
    const htmlWithIds=a.html.replace(/<h2>/g,(str,idx)=>str); // section anchors are added after the body is inserted
    $('#app').innerHTML=`<header class="page-head"><div class="micro-label"><span class="slash">✳</span>${esc(a.category)} / ${esc(a.id)}</div><div class="page-head-with-action"><div><h1 class="page-title">${esc(a.title)}</h1><p class="page-desc">${esc(a.description)}</p></div><div class="head-actions"><button class="soft-btn" id="article-print">${icon('printer')} Drucken</button><button class="soft-btn" id="article-bookmark">${icon('bookmark')} ${state.favorites.has(a.slug)?'Gespeichert':'Merken'}</button></div></div><div class="article-meta-row"><span class="detail-badge">${esc(a.id)}</span><span class="detail-badge">${esc(a.level)}</span><span class="detail-meta">Stand: ${esc(a.updated.split('-').reverse().join('.'))}</span>${a.tags.map(t=>`<span class="detail-meta">#${esc(t)}</span>`).join('')}</div></header>
    <div class="article-layout"><div><article class="article-body" id="article-body">${htmlWithIds}</article><div class="article-nav-row">${i>0?`<a class="article-nav-btn" href="${link(ARTICLES[i-1].slug)}">← <div><span>VORHERIGER ARTIKEL</span><strong>${esc(ARTICLES[i-1].title)}</strong></div></a>`:''}${i<ARTICLES.length-1?`<a class="article-nav-btn next" href="${link(ARTICLES[i+1].slug)}"><div><span>NÄCHSTER ARTIKEL</span><strong>${esc(ARTICLES[i+1].title)}</strong></div>→</a>`:''}</div></div>
    <aside class="article-side"><section class="side-module"><span class="side-label">IN DIESEM ARTIKEL</span><nav class="side-outline" id="toc"></nav></section><section class="side-module"><span class="side-label">WISSEN ANWENDEN</span><h4>Dokumentation statt Vermutung.</h4><p>Voraussetzungen prüfen, Fehler eingrenzen und die durchgeführten Schritte im Ticket dokumentieren.</p><a class="side-cta" href="#/workflows?tab=ticket">Supportnotiz erstellen →</a></section></aside></div>`;
    const toc=$('#toc');$$('.article-body h2').forEach((h,j)=>{h.id='abschnitt-'+(j+1);const item=document.createElement('a');item.href='#'+h.id;item.textContent=h.textContent;item.addEventListener('click',e=>{e.preventDefault();h.scrollIntoView({behavior:'smooth',block:'start'});});toc.append(item);});
    const checks=$$('.article-body input[type=checkbox]');const stored=safeGet('article-check-'+a.slug,[]);checks.forEach((c,index)=>{c.checked=!!stored[index];c.disabled=false;c.setAttribute('aria-label','Checklistenpunkt '+(index+1));c.addEventListener('change',()=>{safeSet('article-check-'+a.slug,checks.map(c=>c.checked));toast('Checkliste lokal gespeichert');});});
    $('#article-print').addEventListener('click',()=>window.print());$('#article-bookmark').addEventListener('click',()=>{toggleBookmark(slug);const b=$('#article-bookmark');b.innerHTML=icon('bookmark')+' '+(state.favorites.has(slug)?'Gespeichert':'Merken');});
  }
  function toggleBookmark(slug){
    if(state.favorites.has(slug)){state.favorites.delete(slug);toast('Aus Merkliste entfernt');}
    else{state.favorites.add(slug);toast('Zur Merkliste hinzugefügt');}
    safeSet('favorites',[...state.favorites]);updateFavoriteCounter();
    $$(`[data-save="${slug}"]`).forEach(b=>{const yes=state.favorites.has(slug);b.classList.toggle('saved',yes);b.setAttribute('aria-pressed',String(yes));b.setAttribute('aria-label',yes?'Aus Merkliste entfernen':'Zur Merkliste hinzufügen');});
  }
  function favoritesPage(){
    title('Merkliste');setCrumb('Merkliste');setNav('favorites');
    const saved=ARTICLES.filter(a=>state.favorites.has(a.slug));
    $('#app').innerHTML=`${scaffold('Meine Merkliste.','Markierte Artikel bleiben auf diesem Gerät gespeichert. Es werden keine Daten an einen Server gesendet.','PERSÖNLICHE AUSWAHL / LOKAL')}<div class="article-grid">${saved.length?saved.map(renderTile).join(''):`<div class="empty-state">${icon('bookmark')}<strong>Noch keine Artikel gespeichert.</strong><p>Auf einem Artikel das Lesezeichen-Symbol auswählen.</p><a class="soft-btn" href="#/artikel">Artikel entdecken ${icon('arrow')}</a></div>`}</div>`;
  }
  function progress(){return Math.round(state.checklist.filter(Boolean).length/onboardingSteps.length*100);}
  function workflowOnboarding(){
    const p=progress();
    return `<div class="workflow-panel"><div class="workflow-intro"><div><span class="micro-label">JOINER WORKFLOW / 14 SCHRITTE</span><h2>Onboarding-Checkliste</h2><p>Eine praxisnahe Demo vom freigegebenen Auftrag bis zum Abschluss des Supporttickets. Der Fortschritt bleibt lokal im Browser gespeichert.</p></div><div class="progress-ring" style="--progress:${p}%" aria-label="${p} Prozent abgeschlossen"><strong>${p}%</strong></div></div>
    <div class="checklist">${onboardingSteps.map((step,i)=>`<label class="checklist-row ${state.checklist[i]?'done':''}"><input type="checkbox" class="check-box" data-check="${i}" ${state.checklist[i]?'checked':''}><span>${esc(step)}</span></label>`).join('')}</div>
    <div class="workflow-actions"><button class="soft-btn primary" id="download-checklist">${icon('download')} Checkliste exportieren</button><button class="soft-btn" id="reset-checklist">${icon('refresh')} Zurücksetzen</button></div><p class="workflow-note">Hinweis: Kein echtes Konto wird erstellt oder verändert. Benutzerdaten, Passwörter und MFA-Codes gehören nicht in Checklisten oder Tickets.</p>
    <div class="mini-article-links"><h3>Passende Dokumentation</h3><div class="mini-link-list"><a class="mini-link" href="#/artikel/020-onboarding">Onboarding-Leitfaden ↗</a><a class="mini-link" href="#/artikel/030-benutzeranlage">Benutzeranlage ↗</a><a class="mini-link" href="#/artikel/040-lizenzen-rollen">Lizenzierung ↗</a></div></div></div>`;
  }
  function diagnosticContent(){const d=diagnosticMap[state.diagnostic];return `<div class="diagnostic-result"><span class="side-label">EMPFOHLENER ERSTER SCHRITT</span><h3>${esc(d.title)}</h3><p>${esc(d.desc)}</p><div class="mini-link-list">${d.ids.map(slug=>{const a=getArticle(slug);return a?`<a class="mini-link" href="${link(a.slug)}">${esc(a.id)} · ${esc(a.title)} ↗</a>`:'';}).join('')}</div></div>`;}
  function workflowDiagnostic(){return `<div class="workflow-panel"><div class="workflow-intro"><div><span class="micro-label">SERVICE DESK / ERSTDIAGNOSE</span><h2>Problem eingrenzen</h2><p>Betroffenen Dienst auswählen. Die Anwendung zeigt sichere Erstprüfungen und passende Artikel. Keine Verbindung zu einem Microsoft-Tenant.</p></div>${icon('target')}</div><div class="diagnostic-panel" style="margin-top:26px"><div class="field"><label for="diagnostic-service">BETROFFENER DIENST</label><select id="diagnostic-service">${Object.entries(diagnosticMap).map(([k,d])=>`<option value="${k}" ${k===state.diagnostic?'selected':''}>${esc(d.title)}</option>`).join('')}</select><p class="workflow-note">Vor einer Änderung immer Identität, Freigabe, Auswirkungen und Service Health kontrollieren. Für Eskalationen das interne Team hinzuziehen.</p></div><div id="diagnostic-content">${diagnosticContent()}</div></div></div>`;}
  function workflowTicket(){return `<div class="workflow-panel"><div class="workflow-intro"><div><span class="micro-label">HELPDESK / DOKUMENTATION</span><h2>Support-Ticket vorbereiten</h2><p>Eine saubere, kopierbare Ticketnotiz erstellen. Die Eingaben verlassen den Browser nicht und werden nicht in der Wissensdatenbank gespeichert.</p></div>${icon('ticket')}</div>
    <form id="ticket-form" style="margin-top:25px"><div class="form-grid"><div class="field"><label for="ticket-id">TICKET-NUMMER (BEISPIEL)</label><input id="ticket-id" placeholder="DEMO-005" maxlength="60" value="DEMO-005"></div><div class="field"><label for="ticket-priority">PRIORITÄT</label><select id="ticket-priority"><option>P4 – Niedrig</option><option selected>P3 – Normal</option><option>P2 – Hoch</option><option>P1 – Kritisch</option></select></div>
      <div class="field wide"><label for="ticket-subject">KURZBESCHREIBUNG</label><input id="ticket-subject" required maxlength="150" placeholder="z. B. Teams-Anmeldung im Desktop-Client nicht möglich"></div>
      <div class="field wide"><label for="ticket-symptom">FEHLERBILD / AUSWIRKUNG</label><textarea id="ticket-symptom" required placeholder="Was ist betroffen? Seit wann? Welche Meldung? Keine Passwörter oder Codes."></textarea></div>
      <div class="field wide"><label for="ticket-steps">DIAGNOSE / BISHERIGE MASSNAHMEN</label><textarea id="ticket-steps" placeholder="Prüfschritte, Ergebnisse, Änderungen und Genehmigungen …"></textarea></div>
      <div class="field wide"><label for="ticket-test">FUNKTIONSTEST / NÄCHSTER SCHRITT</label><textarea id="ticket-test" placeholder="Wie wurde geprüft? Ist eine Eskalation erforderlich?"></textarea></div></div><div class="ticket-actions"><button class="soft-btn primary" type="submit">${icon('check')} Ticketnotiz erstellen</button><button class="soft-btn" type="reset">${icon('refresh')} Eingaben löschen</button></div></form>
    <div id="ticket-generated" hidden><pre class="ticket-output" id="ticket-output"></pre><div class="ticket-actions"><button class="soft-btn primary" id="copy-ticket">${icon('copy')} Notiz kopieren</button><button class="soft-btn" id="download-ticket">${icon('download')} Als Textdatei</button></div></div><p class="workflow-note">Nicht als reales Ticketsystem gedacht. Keine Benutzerkonten, E-Mails oder Servicetickets werden im Unternehmen angelegt.</p></div>`;}
  function workflowsPage(){
    title('Workflows');setCrumb('Workflows');setNav('workflows');
    const tabs=[['onboarding','users','Onboarding'],['diagnose','target','Fehlerdiagnose'],['ticket','ticket','Ticket-Vorlage']];
    $('#app').innerHTML=`${scaffold('Klarer Ablauf.','Mit strukturierten Arbeitsabläufen schneller und sicherer zu einer nachvollziehbaren Lösung.','PRAKTISCHE WERKZEUGE / OFFLINE')}<div class="workflow-tabs" role="tablist" aria-label="Workflow auswählen">${tabs.map(([id,ic,name])=>`<button role="tab" aria-selected="${state.workflowTab===id}" class="workflow-tab ${state.workflowTab===id?'active':''}" data-workflow="${id}">${icon(ic)} ${name}</button>`).join('')}</div><div id="workflow-content">${workflowContent()}</div>`;
    wireWorkflow();
  }
  function workflowContent(){return state.workflowTab==='onboarding'?workflowOnboarding():state.workflowTab==='diagnose'?workflowDiagnostic():workflowTicket();}
  function wireWorkflow(){
    const node=$('#workflow-content');
    if(state.workflowTab==='onboarding'){
      node.addEventListener('change',e=>{if(!e.target.matches('[data-check]'))return;const i=Number(e.target.dataset.check);state.checklist[i]=e.target.checked;safeSet('onboarding',state.checklist);e.target.closest('.checklist-row').classList.toggle('done',e.target.checked);const p=progress();$('.progress-ring',node).style.setProperty('--progress',p+'%');$('.progress-ring strong',node).textContent=p+'%';});
      $('#reset-checklist').addEventListener('click',()=>{if(!confirm('Den gesamten Onboarding-Fortschritt zurücksetzen?'))return;state.checklist=[];safeSet('onboarding',[]);workflowsPage();toast('Checkliste zurückgesetzt');});
      $('#download-checklist').addEventListener('click',()=>{const txt='M365.DESK · ONBOARDING-CHECKLISTE (DEMO)\nStand: '+new Date().toLocaleDateString('de-DE')+'\nFortschritt: '+progress()+'%\n\n'+onboardingSteps.map((s,i)=>(state.checklist[i]?'[x] ':'[ ] ')+s).join('\n')+'\n\nKeine echten Personendaten oder Kennwörter erfassen.';downloadText(txt,'onboarding-checkliste-demo.txt');});
    }
    if(state.workflowTab==='diagnose')$('#diagnostic-service').addEventListener('change',e=>{state.diagnostic=e.target.value;$('#diagnostic-content').innerHTML=diagnosticContent();});
    if(state.workflowTab==='ticket'){
      $('#ticket-form').addEventListener('submit',e=>{e.preventDefault();const id=$('#ticket-id').value.trim()||'DEMO';const pri=$('#ticket-priority').value;const subj=$('#ticket-subject').value.trim();const sym=$('#ticket-symptom').value.trim();const acts=$('#ticket-steps').value.trim()||'Noch nicht dokumentiert';const test=$('#ticket-test').value.trim()||'Offen';state.ticketOutput=`IT SUPPORT · TICKETNOTIZ (VORLAGE / DEMO)\nTicket: ${id}\nPriorität: ${pri}\nBetreff: ${subj}\n\nFEHLERBILD / AUSWIRKUNG\n${sym}\n\nDIAGNOSE / MASSNAHMEN\n${acts}\n\nFUNKTIONSTEST / NÄCHSTER SCHRITT\n${test}\n\nSICHERHEIT: Keine Passwörter, MFA-Codes oder sensiblen Personendaten speichern.\nHinweis: Fiktive Dokumentation, kein echtes Supportticket.`;$('#ticket-output').textContent=state.ticketOutput;$('#ticket-generated').hidden=false;$('#ticket-generated').scrollIntoView({behavior:'smooth',block:'nearest'});toast('Ticketvorlage erstellt');});
      $('#ticket-form').addEventListener('reset',()=>{$('#ticket-generated').hidden=true;state.ticketOutput='';});
      $('#copy-ticket').addEventListener('click',()=>copyText(state.ticketOutput));
      $('#download-ticket').addEventListener('click',()=>downloadText(state.ticketOutput,'support-ticket-demo.txt'));
    }
  }
  function casesPage(){
    title('Praxisfälle');setCrumb('Praxisfälle');setNav('cases');
    $('#app').innerHTML=`${scaffold('Praxisfälle.','Vier vollständig fiktive Support-Szenarien mit Problem, Ursachenanalyse, durchgeführtem Schritt und Funktionstest.','SIMULIERTE TICKETS / 04')}<div class="cases-grid">${csvCases.map((c,i)=>{
      const id=c['Ticket-ID']||`DEMO-${String(i+1).padStart(3,'0')}`;
      return `<section class="case-card"><div class="case-top"><span class="case-id">${esc(id)} / ${esc(c['Priorität'])}</span><span class="case-status">● SIMULIERT</span></div><div><h3>${esc(c['Symptom/Request'])}</h3><p class="case-summary">${esc(c.Service)} · ${esc(c.Typ)}</p></div><div class="case-details"><div class="case-detail"><strong>Diagnose</strong><span>${esc(c.Diagnose)}</span></div><div class="case-detail"><strong>Maßnahme</strong><span>${esc(c['Maßnahme'])}</span></div><div class="case-detail"><strong>Test</strong><span>${esc(c.Test)}</span></div></div><a class="soft-btn" href="#/workflows?tab=ticket&demo=${encodeURIComponent(id)}">${icon('ticket')} Als Ticketvorlage öffnen</a><span class="case-message">Frei erfunden · Keine echten Kundendaten</span></section>`;
    }).join('')}</div><p class="collection-footnote">Die gleichen Fälle stehen im Projektordner <code>examples/demo-tickets.csv</code> für das GitHub-Portfolio bereit.</p>`;
  }
  function prefillDemo(id){
    const c=csvCases.find(x=>x['Ticket-ID']===id);
    if(!c||state.workflowTab!=='ticket')return;
    $('#ticket-id').value=c['Ticket-ID'];
    $('#ticket-priority').value=($$('#ticket-priority option').find(o=>o.textContent.startsWith(c['Priorität']))||{}).value||'P3 – Normal';
    $('#ticket-subject').value=c['Symptom/Request'];
    $('#ticket-symptom').value=c.Service+' — '+c['Symptom/Request'];
    $('#ticket-steps').value='Diagnose: '+c.Diagnose+'\nMaßnahme: '+c['Maßnahme'];
    $('#ticket-test').value=c.Test+' (simuliert)';
    toast(id+' als Beispiel geladen');
  }
  function notFound(){setCrumb('Nicht gefunden');$('#app').innerHTML=`${scaffold('Seite nicht gefunden.','Der angeforderte Inhalt ist nicht vorhanden.')}<a class="soft-btn primary" href="#/">${icon('home')} Zur Übersicht</a>`;}
  function downloadText(content,filename){const blob=new Blob(['\ufeff'+content],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);toast('Textdatei vorbereitet');}
  function copyText(text){if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(()=>toast('In Zwischenablage kopiert')).catch(()=>fallbackCopy(text));}else fallbackCopy(text);}
  function fallbackCopy(text){const area=document.createElement('textarea');area.value=text;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();try{document.execCommand('copy');toast('In Zwischenablage kopiert');}catch{toast('Text bitte markieren und kopieren');}area.remove();}
  function closeMenu(){const nav=$('#sidebar');nav.classList.remove('open');$('#mobile-backdrop').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');}
  function pageFromHash(){
    const raw=location.hash.slice(1)||'/';const [encodedPath,query='']=raw.split('?');const path=decodeURIComponent(encodedPath);const params=new URLSearchParams(query);
    closeMenu();
    if(path==='/'){home();}
    else if(path==='/artikel'){state.articleCategory=params.has('cat')?params.get('cat'):'Alle';state.articleQuery=params.has('q')?params.get('q'):'';articlesPage();}
    else if(path.startsWith('/artikel/')){detailsPage(path.slice('/artikel/'.length));}
    else if(path==='/workflows'){if(['onboarding','diagnose','ticket'].includes(params.get('tab')))state.workflowTab=params.get('tab');workflowsPage();if(params.has('demo'))prefillDemo(params.get('demo'));}
    else if(path==='/faelle'){casesPage();}
    else if(path==='/favoriten'){favoritesPage();}
    else{notFound();}
    window.scrollTo({top:0,behavior:'auto'});
  }
  function categoryMenu(){
    $('#category-nav').innerHTML=categories.map(c=>`<a class="cat-item" href="#/artikel?cat=${encodeURIComponent(c)}" data-cat="${esc(c)}"><span class="nav-icon">${icon(categoryIcons[c]||'layers')}</span><span>${esc(c)}</span></a>`).join('');
  }
  function searchDialog(){return $('#search-dialog');}
  function renderModalResults(q){
    const normalized=normalize(q);const matches=ARTICLES.filter(a=>!normalized||normalize([a.title,a.description,a.tags.join(' '),a.plain].join(' ')).includes(normalized)).slice(0,7);
    $('#modal-results').innerHTML=matches.length?matches.map(a=>`<a class="modal-item" href="${link(a.slug)}"><span>${esc(a.title)}<br><small>${esc(a.id)} · ${esc(a.category)}</small></span>${icon('arrow')}</a>`).join(''):'<div class="modal-empty">Keine passenden Ergebnisse. Anderen Suchbegriff versuchen.</div>';
  }
  function openSearch(){const d=searchDialog();if(!d.open)d.showModal();$('#modal-search').value='';renderModalResults('');$('#modal-search').focus();}
  function routeEvents(){
    document.addEventListener('click',e=>{
      const mode=e.target.closest('[data-mode]');
      if(mode){state.mode=Number(mode.dataset.mode);const m=modes[state.mode];$$('[data-mode]').forEach(el=>{const yes=Number(el.dataset.mode)===state.mode;el.classList.toggle('active',yes);el.setAttribute('aria-pressed',String(yes));});$('#hero-desc').textContent=m.desc;$('#hero-cta').href=m.href;$('#hero-cta').innerHTML=m.action+' '+icon('arrow');}
      const save=e.target.closest('[data-save]');if(save){e.preventDefault();toggleBookmark(save.dataset.save);if(location.hash.startsWith('#/favoriten'))favoritesPage();}
      const f=e.target.closest('[data-filter]');if(f){state.articleCategory=f.dataset.filter;repaintArticleGrid();}
      const reset=e.target.closest('[data-reset-filter]');if(reset){state.articleCategory='Alle';state.articleQuery='';const input=$('#article-filter-input');if(input)input.value='';repaintArticleGrid();}
      const tab=e.target.closest('[data-workflow]');if(tab){const next=tab.dataset.workflow;const dest='#/workflows?tab='+next;if(location.hash===dest){state.workflowTab=next;workflowsPage();}else location.hash=dest;}
      const modalLink=e.target.closest('.modal-item');if(modalLink)searchDialog().close();
    });
    document.addEventListener('input',e=>{if(e.target.id==='article-filter-input'){state.articleQuery=e.target.value;repaintArticleGrid();}});
    $('#theme-light').addEventListener('click',()=>{state.theme='light';applyTheme();});
    $('#theme-dark').addEventListener('click',()=>{state.theme='dark';applyTheme();});
    $('#menu-toggle').addEventListener('click',()=>{const nav=$('#sidebar');const yes=!nav.classList.contains('open');nav.classList.toggle('open',yes);$('#mobile-backdrop').classList.toggle('open',yes);$('#menu-toggle').setAttribute('aria-expanded',String(yes));});
    $('#mobile-backdrop').addEventListener('click',closeMenu);
    $('#global-search-btn').addEventListener('click',openSearch);
    $('#close-search').addEventListener('click',()=>searchDialog().close());
    $('#modal-search').addEventListener('input',e=>renderModalResults(e.target.value));
    $('#modal-search').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#modal-results .modal-item')?.click();}});
    document.addEventListener('keydown',e=>{
      if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}
      if(e.key==='/'&&!e.metaKey&&!e.ctrlKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!searchDialog().open){e.preventDefault();openSearch();}
    });
    window.addEventListener('hashchange',pageFromHash);
  }
  fillIcons();categoryMenu();updateFavoriteCounter();applyTheme();routeEvents();pageFromHash();
})();
