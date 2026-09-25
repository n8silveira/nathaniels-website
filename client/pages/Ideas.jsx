import { useState } from "react";
import Page from "../components/Page.jsx";
import Feature from "../components/Feature.jsx";

const storageKey = "nathaniel-video-ideas-v1";
function readRequests() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(stored)
      ? stored
          .filter((item) => typeof item === "string" && item.length <= 500)
          .slice(0, 50)
      : [];
  } catch {
    return [];
  }
}

export default function Ideas() {
  const [requests, setRequests] = useState(readRequests);
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState("");

  function save(next, success, failure) {
    setRequests(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setStatus(success);
    } catch {
      setStatus(failure);
    }
  }

  function addIdea(event) {
    event.preventDefault();
    const field = event.currentTarget.elements.request;
    if (!idea.trim()) {
      field.setCustomValidity("Write a short idea first.");
      field.reportValidity();
      return;
    }
    save(
      [idea.trim(), ...requests].slice(0, 50),
      "Idea saved in this browser. It has not been sent to Nathaniel.",
      "Idea added for this visit. Browser storage is unavailable.",
    );
    setIdea("");
  }

  return (
    <Page
      id="ideas"
      title="Ideas"
      intro="A little room for what comes next."
      portrait={[540, 573, 132, 145]}
      className="ideas-grid"
    >
      <Feature
        label="On the drawing board"
        name="The next video idea"
        image="note"
        description="A space for notes, questions, and future studies."
      />
      <section className="requests">
        <h2>Video requests</h2>
        <p className="request-intro">What would you like to explore?</p>
        <form onSubmit={addIdea}>
          <label htmlFor="request">Your idea</label>
          <textarea
            id="request"
            name="request"
            placeholder="A question, a passage, a topic…"
            required
            maxLength={500}
            rows={3}
            value={idea}
            onChange={(event) => {
              event.target.setCustomValidity("");
              setIdea(event.target.value);
            }}
          />
          <div className="form-bottom">
            <span>Local demo · only saved in this browser</span>
            <button className="submit-button" type="submit">
              Add idea <span aria-hidden="true">+</span>
            </button>
          </div>
        </form>
        <p id="request-status" role="status">
          {status}
        </p>
        <ul id="requests-list" aria-label="Your video ideas">
          {!requests.length && (
            <li className="empty">Your ideas will appear here.</li>
          )}
          {requests.map((text, index) => (
            <li key={`${index}-${text}`}>
              <span className="request-author">Your idea</span>
              <p>{text}</p>
              <button
                type="button"
                className="remove-request"
                aria-label={`Remove idea: ${text}`}
                onClick={() =>
                  save(
                    requests.filter((_, i) => i !== index),
                    "Idea removed.",
                    "Removed for this visit. Browser storage is unavailable.",
                  )
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
