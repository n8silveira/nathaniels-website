import { useEffect } from "react";
import Sketch from "./Sketch.jsx";

export default function Page({
  id,
  title,
  intro,
  portrait,
  documentTitle,
  className,
  children,
}) {
  useEffect(() => {
    document.title =
      documentTitle || `${id === "home" ? "Home" : title} — Nathaniel`;
    document.querySelector('meta[name="description"]').content = intro;
    document.body.dataset.page = id;
    window.scrollTo(0, 0);
    return () => {
      delete document.body.dataset.page;
    };
  }, [id, title, intro, documentTitle]);

  return (
    <main id="main" className="shell page">
      <section className="hero" aria-labelledby="page-title">
        <Sketch
          crop={portrait}
          className="portrait"
          label="Nathaniel’s hand-drawn character"
        />
        <div className="hero-title">
          <h1 id="page-title">{title}</h1>
          <p id="intro">{intro}</p>
        </div>
      </section>
      <div id="content" className={className}>
        {children}
      </div>
      {id !== "about" && (
        <p className="template-note">
          An early outline of the collection. Titles and previews are from the
          sketch; full studies and projects are coming soon.
        </p>
      )}
    </main>
  );
}
