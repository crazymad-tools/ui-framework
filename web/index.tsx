import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../packages/button";
import Wave from "../packages/wave";
import DropPanel from "../packages/drop-panel";
import DropDown from "../packages/drop-down";
import Icon from "../packages/icon";
import Pagination from "../packages/pagination";

import "./index.scss";

const { DropPanelContent, DropPanelHeader } = DropPanel;

const App = () => {
  const [buttonSize, setButtonSize] = useState("md");

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Button.ButtonGroup>
          <Button
            width="50px"
            type={buttonSize === "sm" ? "primary" : "normal"}
            onClick={e => setButtonSize("sm")}
          >
            sm
          </Button>
          <Button
            width="50px"
            type={buttonSize === "md" ? "primary" : "normal"}
            onClick={e => setButtonSize("md")}
          >
            md
          </Button>
          <Button
            width="50px"
            type={buttonSize === "lg" ? "primary" : "normal"}
            onClick={e => setButtonSize("lg")}
          >
            lg
          </Button>
        </Button.ButtonGroup>
      </div>

      <Button
        type="primary"
        style={{ marginRight: "10px" }}
        size={buttonSize}
        onClick={e => console.log("hello world")}
      >
        按钮A
      </Button>
      <Button style={{ marginRight: "10px" }} size={buttonSize}>
        按钮B
      </Button>
      <Button size={buttonSize}>按钮C</Button>

      <Wave>
        <div
          style={{
            width: "100px",
            height: "32px",
            background: "#aaa",
            marginTop: "10px"
          }}
        />
      </Wave>
      <Wave color="rgba(0, 100, 0, 0.2)">
        <div
          style={{
            width: "200px",
            height: "32px",
            background: "#0e6",
            marginTop: "10px"
          }}
        />
      </Wave>

      <Wave>
        <span style={{ display: "inline-block", padding: "20px" }}>
          hello world
        </span>
      </Wave>

      <DropPanel.DropPanelGroup style={{ width: "300px" }} single={true}>
        <DropPanel style={{ width: "300px" }}>
          <DropPanelHeader>折叠面板标题A</DropPanelHeader>
          <DropPanelContent>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
            </ul>
          </DropPanelContent>
        </DropPanel>
        <DropPanel style={{ width: "300px" }}>
          <DropPanelHeader>折叠面板标题B</DropPanelHeader>
          <DropPanelContent>
            <p>啦啦啦啦</p>
          </DropPanelContent>
        </DropPanel>
        <DropPanel>
          <DropPanelHeader>折叠面板标题C</DropPanelHeader>
          <DropPanelContent>
            <p>大大撒旦</p>
          </DropPanelContent>
        </DropPanel>
      </DropPanel.DropPanelGroup>

      <DropPanel style={{ width: "400px", marginTop: "20px" }}>
        <DropPanelHeader>单个drop panel</DropPanelHeader>
        <DropPanelContent>
          <div style={{ height: "100px" }}>单个drop panel的content</div>
        </DropPanelContent>
      </DropPanel>

      <DropDown
        trigger={["click"]}
        overlay={
          <div>
            <ul>
              <li>h1</li>
              <li>h2</li>
            </ul>
          </div>
        }
      >
        <Button style={{ marginTop: "10px" }}>DropDown</Button>
      </DropDown>

      <br />
      <br />

      <Pagination />

      <br />

      <Pagination total={10} pageSize={5} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
