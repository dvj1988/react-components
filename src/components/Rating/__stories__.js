import React from "react";
import { storiesOf } from "@storybook/react";

import Rating from ".";

storiesOf("Components/Rating", module)
  .add("1 Star", () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 65px)",
          columnGap: "30px"
        }}
      >
        <div style={{ gridColumn: "1 / span 12" }}>
          <Rating total={5} value={1} />
        </div>
      </div>
    );
  })
  .add("1.5 Star", () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 65px)",
          columnGap: "30px"
        }}
      >
        <div style={{ gridColumn: "1 / span 12" }}>
          <Rating total={5} value={1.5} />
        </div>
      </div>
    );
  })
  .add("5 Star", () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 65px)",
          columnGap: "30px"
        }}
      >
        <div style={{ gridColumn: "1 / span 12" }}>
          <Rating total={5} value={5} />
        </div>
      </div>
    );
  });
