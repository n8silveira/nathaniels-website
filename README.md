# Nathaniel Silveira’s Website

A React portfolio using Vite, based on the supplied website sketch.

## Work locally in VS Code

Open this repository folder, then run in the integrated terminal:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. Save a JSX or CSS file to see updates automatically through Vite and React Fast Refresh. No manual rebuild, BrowserSync, or Python server is needed during development.

## Structure

```text
client/
  index.html             # The only HTML source document
  main.jsx               # Mounts React and imports the shared CSS
  App.jsx                # Shared header, navigation, routes, and footer
  styles.css             # Styles shared by every page
  pages/
    Home.jsx
    BibleStudies.jsx
    Projects.jsx
    Ideas.jsx
    About.jsx
  components/            # Shared Page, Sketch, Feature, and Collection
  data/collections.js    # Study series and project entries
  assets/                # Original drawings and supplied sketch
vite.config.js           # Uses client as the root; generates build/
package.json
```

Edit `client/pages/About.jsx` to change the About page. JSX components return page content; they do not include `html`, `head`, or `body` tags. Shared layout lives in `App.jsx` and `components/Page.jsx`. Titles, descriptions, and portraits are set by each page.

The local About edits (`ABOUT` browser title and `AAAAA` active navigation label) were retained. The navigation label is in `client/App.jsx`.

## Build and preview

```sh
npm run build
npm run preview
```

The optimized site is generated in ignored `build/`; do not edit generated files. Preview is at http://127.0.0.1:4174. Production hosting must serve `build/index.html` for page routes such as `/about/` and `/bible-studies/` (SPA fallback). Vite handles this automatically in local development and preview. Hosting configuration points to `build/`.

## Existing behavior

All five routes keep their drawings and responsive layout. Study/project search and selection remain interactive. Ideas are a local-only demo stored under the same browser-storage key; changing the server port means a different browser-storage origin. No shared submissions, actual video playback, or study detail pages are implemented yet.

Development branch: `codex/portfolio-template`. Merging into `main` is reserved for the repository owner.