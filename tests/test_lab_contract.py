"""Static, offline checks for synthetic lab documentation, not tenant actions."""
import json
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
LABS=ROOT/'labs'
EXPECTED=['01-entra-onboarding.md','02-mfa-recovery.md','03-intune-compliance.md','04-role-review.md']

class DocumentationLabTests(unittest.TestCase):
    def test_all_learning_exercises_exist(self):
        for filename in EXPECTED:
            with self.subTest(filename=filename):
                self.assertTrue((LABS/filename).is_file())
                self.assertIn('Simulation only', (LABS/filename).read_text(encoding='utf-8'))

    def test_fixtures_use_fictional_domains_and_no_secrets(self):
        data=json.loads((LABS/'fixtures/users.json').read_text(encoding='utf-8'))
        self.assertFalse(data['contains_secrets'])
        self.assertIn('SYNTHETIC', data['dataset'])
        for user in data['users']:
            self.assertTrue(user['upn'].endswith('@example.com'))
            self.assertNotIn('password', user)
            self.assertNotIn('token', user)

    def test_kb_has_numbered_articles_and_existing_labs(self):
        numbered=sorted((ROOT/'docs').glob('[0-9][0-9][0-9]-*.md'))
        self.assertEqual(len(numbered),17)
        readme=(LABS/'README.md').read_text(encoding='utf-8')
        for filename in EXPECTED:
            self.assertIn(filename,readme)

if __name__=='__main__':
    unittest.main()
