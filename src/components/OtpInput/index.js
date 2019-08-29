import React, { Component } from "react";
import styles from "./style.module.css";
import clsx from "clsx";

class OtpInput extends Component {
  state = {
    values: [],
    active: false
  };

  toggleFocus = () => {
    this.setState({
      active: !this.state.active
    });
  };

  getValidOTPValues = value => {
    return value.split("").map(v => (!isNaN(parseInt(v, 10)) ? v : ""));
  };

  handleOtpChange = ({ target: { value } }) => {
    const { onChange } = this.props;

    const values = this.getValidOTPValues(value);
    const otp = values.join("");

    this.setState({ values }, onChange(otp));
  };

  render() {
    const { length = 6, error = false } = this.props;
    const { values, active } = this.state;
    const nodes = [];

    for (let i = 0; i < length; i++) {
      nodes.push(
        <div
          className={clsx(styles.partition)}
          style={{ borderColor: values[i] ? "white" : "black" }}
        >
          {values[i]}
        </div>
      );
    }
    return (
      <div
        className={clsx(styles.wrapper, {
          [styles.active]: active,
          [styles.error]: error
        })}
      >
        {nodes}
        <input
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          maxLength={length}
          value={this.state.values.join("")}
          onChange={this.handleOtpChange}
          onKeyPress={this.handleKeyPress}
          style={{ width: `${16 * length + 80}px` }}
          className={styles.hiddenInput}
        />
      </div>
    );
  }
}

export default OtpInput;
