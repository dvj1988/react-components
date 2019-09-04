import React from "react";
import { storiesOf } from "@storybook/react";

import Favorite from ".";

storiesOf("Components/Favorite", module)
  .add("true", () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 65px)",
          columnGap: "30px"
        }}
      >
        <div style={{ gridColumn: "1 / span 12" }}>
          <Favorite isFavorite={true} />
        </div>
      </div>
    );
  })
  .add("false", () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 65px)",
          columnGap: "30px"
        }}
      >
        <div style={{ gridColumn: "1 / span 12" }}>
          <Favorite isFavorite={false} />
        </div>
      </div>
    );
  });
