import React from "react";
import Vue from "vue";
import VueApp, { style } from "./VueApp";
import styled from "styled-components";

const Div = styled.div`
  ${style};
`;
class VueComponent extends React.Component {
  state = {
    name: "Biola"
  };
  componentDidMount() {
    this.vm = new Vue({
      el: this.node,
      components: { VueApp },
      template: "<VueApp />",
      data: {
        name: this.state.name
      }
    });
  }
  componentWillUnmount() {
    this.vm.$destroy();
  }

  render() {
    return (
      <Div>
        <div ref={node => (this.node = node)} />;
      </Div>
    );
  }
}

export default VueComponent;
