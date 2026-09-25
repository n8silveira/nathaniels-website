import Page from "../components/Page.jsx";
import Collection from "../components/Collection.jsx";
import { projects } from "../data/collections.js";

export default function Projects() {
  return (
    <Page
      id="projects"
      title="Projects"
      intro="Things I’m building, exploring, and bringing to life."
      portrait={[1549, 155, 130, 134]}
      className="browse-grid"
    >
      <Collection
        items={projects}
        type="project"
        latest={{
          name: "OneSource app",
          image: "phone",
          detail: "A space for the latest project and its story.",
        }}
      />
    </Page>
  );
}
