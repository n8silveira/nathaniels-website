# Nathaniel’s website

A dependency-free HTML, CSS, and JavaScript portfolio based on the supplied website sketch.

## Preview locally

Run `npm run build`, then `python3 -m http.server 4173 --directory dist` and open http://localhost:4173.

## Pages and interactions

- Home: illustrated name, latest video, and latest project.
- Bible studies and Projects: searchable collections, keyboard-accessible selection, and a featured preview.
- Ideas: future video preview and a local request demo. Requests remain in this browser, can be removed, and are never submitted to a server. Storage failures show an explicit message.
- About: illustrated title, contact email from the reference, and a short introduction.

Titles and artwork are provisional and come from the user’s reference. No actual video playback, study sessions, project detail pages, or shared comment backend is included.

## Edit the collection

- `dist/app.js`: page text, collection entries, selection behavior, and local request demo.
- `dist/styles.css`: shared styling and responsive layouts.
- `dist/index.html`: shared page structure and navigation.
- `dist/assets/website-sketch.png`: supplied reference, reused through CSS background positioning for illustrations. The crop coordinates in `dist/app.js` use the reference’s 2048×1028 display coordinate system.

After editing shared HTML, run `npm run build` to regenerate all page entry points. Run `npm run check` for JavaScript syntax. Deploy `dist/` to a static host at the root of a domain.

Development branch: `codex/portfolio-template`. Merging into `main` is reserved for the repository owner.
