import React from "react";
import Customer from "@/components/common/Customer";
import { Construktor } from "@/components/common/construktor";
import Child from "@/components/common/Child";
import { Data } from "@/components/common/Data";
import Lifecyle from "@/components/common/LifecyleA";

function Brend() {
  return (
    <div>
      <Customer />
      <Construktor />
      <Data />
      <Child />/
      <Lifecyle />
    </div>
  );
}

export default Brend;
