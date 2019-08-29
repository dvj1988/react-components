import React from "react";
import { storiesOf } from "@storybook/react";
import OtpInput from "./";
import "../../styles/common.css";

storiesOf("Components/OTP Input", module)
  .add("6 numbers", () => {
    return <OtpInput length={6} onChange={() => {}} />;
  })
  .add("4 numbers", () => {
    return <OtpInput length={4} onChange={() => {}} />;
  })
  .add("Error state", () => {
    return <OtpInput length={6} error onChange={() => {}} />;
  });
