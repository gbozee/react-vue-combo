import Vue from "vue"
import {css} from "styled-components"

export default Vue.component("VueApp",{
  template: `
    <div id="app">
    <p>This is a vue component rendered in a react component.</p>
  </div>`
  
})

export const style = css`
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
`
{/* <script>
export default {
  name: "VueApp"
};
</script> */}

