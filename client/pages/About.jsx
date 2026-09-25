import Page from "../components/Page.jsx";

export default function About() {
  return (
    <Page
      id="about"
      title="About"
      documentTitle="ABOUT"
      intro="The person behind the collection."
      portrait={[1187, 588, 137, 142]}
      className="about-content"
    >
      <a className="contact" href="mailto:nathaniel.silveira10@gmail.com">
        nathaniel.silveira10@gmail.com
      </a>
      <div className="about-copy">
        <h2>Hi, I’m Nathaniel.</h2>
        <p>
          I teach Bible studies and make things. This is a place to bring that
          work together: the series I teach, the projects I build, and the ideas
          I’m still exploring.
        </p>
        <p className="muted">More of the story coming soon.</p>
      </div>
    </Page>
  );
}
