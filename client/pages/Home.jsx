import Page from "../components/Page.jsx";
import Feature from "../components/Feature.jsx";

export default function Home() {
  return (
    <Page
      id="home"
      title="Nathaniel Silveira"
      intro="Studies, projects, and things along the way."
      portrait={[209, 170, 130, 142]}
      className="home-grid"
    >
      <Feature
        label="Latest video"
        name="A new study, coming soon"
        image="video"
        description="Room for the next video in the collection."
        to="/bible-studies/"
      />
      <Feature
        label="Latest project"
        name="Meetitude"
        image="meetitude"
        description="A glimpse of what I’m working on."
        to="/projects/"
      />
    </Page>
  );
}
