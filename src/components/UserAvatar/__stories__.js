import React from "react";
import { storiesOf } from "@storybook/react";
import imageUrl from "../../mocks/img/face.jpg";
import UserAvatar from ".";

storiesOf("Components/User Avatar", module)
  .add("Small", () => {
    return <UserAvatar imgUrl={imageUrl} size="small" />;
  })
  .add("Large", () => {
    return <UserAvatar imgUrl={imageUrl} size="large" />;
  });
