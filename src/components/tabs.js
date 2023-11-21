import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableDesign from "./formats/table-desing";
import NumbersInput from "./formats/number-desing";
import ChartDesign from "./formats/chart-design";

function BwTabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="Information"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Information" title="Table Format">
          <TableDesign />
        </Tab>
        <Tab eventKey="numbers" title="Play">
          <NumbersInput />
        </Tab>
        <Tab eventKey="assets" title="Assets">
          <ChartDesign />
        </Tab>
        <Tab eventKey="opportunity" title="Opportunity Identified">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  );
}

export default BwTabs;
