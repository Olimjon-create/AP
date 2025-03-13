import React from "react";
import Child from "@/components/common/Child";

class OtaKompanent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "bu ota komponent malumotlari",
    };
  }

  render() {
    return <Child text={this.state.message} />;
  }
}

export default OtaKompanent;
