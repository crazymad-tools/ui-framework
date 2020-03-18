import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../packages/button";
import Wave from "../packages/wave";
import DropPanel from "../packages/drop-panel";

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
            onClick={e => setButtonSize("sm")}>
            sm
          </Button>
          <Button
            width="50px"
            type={buttonSize === "md" ? "primary" : "normal"}
            onClick={e => setButtonSize("md")}>
            md
          </Button>
          <Button
            width="50px"
            type={buttonSize === "lg" ? "primary" : "normal"}
            onClick={e => setButtonSize("lg")}>
            lg
          </Button>
        </Button.ButtonGroup>
      </div>

      <Button
        type="primary"
        style={{ marginRight: "10px" }}
        size={buttonSize}
        onClick={e => console.log("hello world")}>
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

      <DropPanel style={{ width: "300px" }}>
        <DropPanelHeader>折叠面板标题</DropPanelHeader>
        <DropPanelContent>折叠面板内容</DropPanelContent>
      </DropPanel>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
