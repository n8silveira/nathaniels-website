# Nathaniel’s website

A lightweight, dependency-free portfolio template with Home, Bible studies, Projects, Ideas, and About pages. Includes responsive navigation, page-specific book illustrations, and clearly labeled sample gallery entries.

## Preview locally

Run `npm run build`, then `python3 -m http.server 4173 --directory dist` and open http://localhost:4173.

## Edit the collection

- `dist/app.js`: page titles, introductions, gallery entries, and illustration selection.
- `dist/styles.css`: shared visual styles and responsive layouts.
- `dist/index.html`: shared page structure and navigation.
- `dist/assets/drawings.png`: original generated book illustration sprite, five panels.

After editing the shared HTML, run `npm run build` to regenerate the four other entry points. Run `npm run check` to check JavaScript syntax. Deploy `dist/` to any static host; all five pages have their own entry point. Paths assume hosting at the root of a domain.

The reference screenshot was unavailable during implementation. The initial visual direction is provisional. Gallery cards are placeholders; no actual study sessions, videos, or project detail pages are included yet.
