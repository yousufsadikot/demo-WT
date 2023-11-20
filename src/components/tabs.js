import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function BwTabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="Information"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Information" title="Client Information">
          Tab content for Home
        </Tab>
        <Tab eventKey="advisor" title="Advisory Team">
          Tab content for Profile
        </Tab>
        <Tab eventKey="assets" title="Assets">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="opportunity" title="Opportunity Identified">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  );
}

export default BwTabs;
