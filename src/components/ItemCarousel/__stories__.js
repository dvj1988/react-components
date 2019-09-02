import React from "react";
import { storiesOf } from "@storybook/react";

import Carousel from ".";
import imageUrl from "../../mocks/img/bitcoin.jpg";

storiesOf("Components", module).add("Carousel", () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 65px)",
        columnGap: "30px"
      }}
    >
      <div style={{ width: "500px", marginLeft: "20px" }}>
        <Carousel
          onClick={(url, index) => {
            console.log(url, index);
          }}
          imageUrls={[
            imageUrl,
            imageUrl,
            imageUrl,
            imageUrl,
            imageUrl,
            imageUrl
          ]}
        />
      </div>
    </div>
  );
});
