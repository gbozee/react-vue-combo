import React from "react";
import Vue from "vue";
import VueApp from "./VueApp.vue";

class VueComponent extends React.Component {
  componentDidMount() {
    this.vm = new Vue({
      el: this.node,
      components: { VueApp },
      template: "<VueApp />"
    });
  }
  componentWillUnmount() {
    this.vm.$destroy();
  }

  render() {
    return <div ref={node => (this.node = node)}  />;
  }
}

export default VueComponent;
