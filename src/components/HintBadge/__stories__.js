import React from "react";
import { storiesOf } from "@storybook/react";

import HintBadge from ".";

storiesOf("Components", module).add("Hint badge", () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 65px)",
        columnGap: "30px"
      }}
    >
      <div style={{ gridColumn: "1 / span 12" }}>
        <HintBadge />
      </div>
    </div>
  );
});
