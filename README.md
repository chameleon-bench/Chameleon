# Chameleon Benchmark Website

This is the official website for the **Chameleon** benchmark, a large-scale benchmark for SQL dialect translation via divergence-driven end-to-end LLM synthesis.

## Structure

```
web/
├── index.html      # Main page (Hero, Overview, Features, Statistics, Leaderboard, Download, Citation)
├── css/
│   └── style.css   # All styles (responsive, Chameleon-themed green palette)
└── js/
    └── main.js     # Leaderboard rendering, metric toggle, navigation, citation copy
```

## Local Preview

No build step required. Simply open `index.html` in a browser, or run a local server:

```bash
cd web
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment (GitHub Pages)

The website is deployed automatically via GitHub Actions (see `.github/workflows/deploy-web.yml`).

### Setup Steps

1. Push the repository to GitHub.
2. Go to **Repository Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Any push to `main` that modifies files under `web/` will trigger a redeployment.
5. The site will be available at `https://<account>.github.io/<repository>/`.

### Manual Deployment

You can also trigger deployment manually from the **Actions** tab → **Deploy Chameleon Website** → **Run workflow**.

## Content Overview

| Section | Description |
|---------|-------------|
| Hero | Project name, tagline, key statistics |
| Overview | What Chameleon is + the 4-step synthesis framework |
| Features | Six key advantages over existing benchmarks |
| Statistics | Benchmark numbers + comparison table with PARROT / DLBENCH |
| Leaderboard | Test split results with ES/EM metric toggle |
| Download | Dataset, evaluation toolkit, documentation links |
| Citation | BibTeX entry (anonymous, copy-to-clipboard) |

## Anonymization

This website is prepared for anonymous submission. All author names, emails, and repository links are placeholdered. Update the following before public release:

- `index.html`: Download links and alert messages
- `index.html`: Footer copyright text
- `js/main.js`: Leaderboard data (currently reflects paper test-split results)
- `index.html`: Citation BibTeX entry

## Updating the Leaderboard

Edit the `leaderboardData` array in `js/main.js`. Each entry requires:

```javascript
{
    method: "Model Name",
    thinking: true,  // or false
    directions: {
        "mysql_pg":     { es: 0.xxx, em: 0.xxx },
        "pg_mysql":     { es: 0.xxx, em: 0.xxx },
        "mysql_oracle": { es: 0.xxx, em: 0.xxx },
        "oracle_mysql": { es: 0.xxx, em: 0.xxx },
        "pg_oracle":    { es: 0.xxx, em: 0.xxx },
        "oracle_pg":    { es: 0.xxx, em: 0.xxx }
    },
    overall: { es: 0.xxx, em: 0.xxx }
}
```

The table auto-sorts by the selected metric (EM or ES).
