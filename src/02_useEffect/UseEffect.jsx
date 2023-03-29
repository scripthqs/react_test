import React, { PureComponent } from "react";
import EffectClass from "./EffectClass";
import EffectHook from "./EffectHook";
import ClearEffect from "./ClearEffect";
import ManyEffect from "./manyEffect";

export class UseEffect extends PureComponent {
  render() {
    return (
      <div>
        <h2>UseEffect</h2>
        <ManyEffect></ManyEffect>
        <hr />
        <ClearEffect></ClearEffect>
        <hr />
        <EffectClass></EffectClass>
        <hr />
        <EffectHook></EffectHook>
      </div>
    );
  }
}

export default UseEffect;
