import React from "react";
import {
  Center,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
const WorkExperience = () => {
  return (
    <section
      id="work"
      className="bg-gray-400 shadow-md"
      //   style={{ border: "2px yellow solid" }}
    >
      {" "}
      <Tabs isFitted variant="enclosed" orientation="vertical">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      WorkExperience
    </section>
  );
};

export default WorkExperience;
