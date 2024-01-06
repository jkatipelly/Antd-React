import React from "react";
import { Radio, RadioChangeEvent, Tabs } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

function renderContent(tab: number) {
  switch (tab) {
    case 1:
      return <div>Content 1</div>;
    case 2:
      return <div>Content 2</div>;
    case 3:
      return <div>Content 3</div>;
  }
}

export const Home = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio.Button value={1}>Tab 1</Radio.Button>
        <Radio.Button value={2}>Tab 2</Radio.Button>
        <Radio.Button value={3}>Tab 3</Radio.Button>
      </Radio.Group>
      <div>{renderContent(value)}</div>
    </>
  );
};
