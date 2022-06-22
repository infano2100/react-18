import { useState } from "react";
import { Tabs } from "antd";

import "./App.css";
import {
  AutoBranching,
  Transition,
  Memo,
  CallBack,
  SuspenseData,
} from "./components";

const { TabPane } = Tabs;

type tabsType = {
  name: string;
  componentRender: JSX.Element[] | JSX.Element | React.FC<any>;
};

type nameTabs =
  | "AutoBranching"
  | "Transition"
  | "Memo"
  | "CallBack"
  | "Suspense";

const tabs: tabsType[] = [
  {
    name: "Suspense",
    componentRender: <SuspenseData />,
  },
  {
    name: "AutoBranching",
    componentRender: <AutoBranching />,
  },
  {
    name: "Transition",
    componentRender: <Transition />,
  },
  {
    name: "Memo",
    componentRender: <Memo />,
  },
  {
    name: "CallBack",
    componentRender: <CallBack />,
  },
];

const App = () => {
  const [tabActive, setTabActive] = useState<nameTabs>("Suspense");

  return (
    <div className="App">
      <header className="App-header">
        <Tabs
          defaultActiveKey={tabActive}
          destroyInactiveTabPane
          size="large"
          onTabClick={(key: string) => {
            setTabActive(key as nameTabs);
            if (key === "Suspense") {
              window.location.reload();
            }
          }}
        >
          {tabs.map((val: any) => {
            const { name, componentRender } = val;
            return (
              <TabPane forceRender tab={name} key={name}>
                <>{tabActive === name ? componentRender : <></>}</>
              </TabPane>
            );
          })}
        </Tabs>
      </header>
    </div>
  );
};

export default App;
