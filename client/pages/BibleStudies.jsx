import Page from "../components/Page.jsx";
import Collection from "../components/Collection.jsx";
import { studies } from "../data/collections.js";

export default function BibleStudies() {
  return (
    <Page
      id="bible-studies"
      title="Bible Studies"
      intro="A growing collection of studies, one series at a time."
      portrait={[865, 158, 130, 132]}
      className="browse-grid"
    >
      <Collection
        items={studies}
        type="series"
        latest={{
          name: "Kingdom of God",
          image: "kingdom",
          detail: "A space for the next series and its sessions.",
        }}
      />
    </Page>
  );
}
