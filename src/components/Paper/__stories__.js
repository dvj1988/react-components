import React from "react";
import { storiesOf } from "@storybook/react";

import Paper from ".";

storiesOf("Components/Paper", module).add("Paper", () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 6fr 4fr"
      }}
    >
      <Paper style={{ gridColumn: 2 / 1, padding: "10px" }}>
        <p>I am a child</p>
      </Paper>
    </div>
  );
});
