import { useState } from "react";
import Feature from "./Feature.jsx";

export default function Collection({ items, type, latest }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const isStudies = type === "series";
  const searchLabel = `Search ${isStudies ? "Bible studies" : "projects"}`;
  const matched = items.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const preview = selected || latest;

  return (
    <>
      <section
        className="library"
        aria-label={isStudies ? "Study series" : "Projects"}
      >
        <label className="search-box">
          <span aria-hidden="true" className="search-icon" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`${searchLabel}…`}
            aria-label={searchLabel}
          />
        </label>
        <div className="item-list">
          {matched.map((item) => (
            <button
              key={item.name}
              type="button"
              className="list-item"
              aria-pressed={selected === item}
              onClick={() => setSelected(item)}
            >
              <span className={`item-icon ${item.color}`} aria-hidden="true">
                {item.glyph}
              </span>
              <span>{item.name}</span>
            </button>
          ))}
          {!matched.length && (
            <p className="empty">No matches. Try another search.</p>
          )}
        </div>
        <p className="search-status" role="status" aria-live="polite">
          {query
            ? `${matched.length} ${matched.length === 1 ? "match" : "matches"}`
            : `${items.length} ${isStudies ? "series" : "projects"} in the collection`}
        </p>
      </section>
      <div aria-live="polite">
        <Feature
          label={`${selected ? "Selected" : "Latest"} ${type}`}
          name={preview.name}
          image={preview.image}
          description={preview.detail}
        />
        <p className="sample-label">Preview · content coming soon</p>
      </div>
    </>
  );
}
