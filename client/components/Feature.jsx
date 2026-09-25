import { Link } from "react-router-dom";
import Sketch from "./Sketch.jsx";

export default function Feature({ label, name, image, description, to }) {
  const content = (
    <>
      <div className="picture-frame">
        <Sketch name={image} label={`${name} sketch`} />
      </div>
      <div className="feature-caption">
        <h3>{name}</h3>
        {to && <span aria-hidden="true">↗</span>}
      </div>
    </>
  );
  return (
    <section className="feature">
      <h2>{label}</h2>
      {to ? (
        <Link className="feature-link" to={to}>
          {content}
        </Link>
      ) : (
        content
      )}
      <p className="feature-description">{description}</p>
    </section>
  );
}
