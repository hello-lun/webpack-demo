import Vue from "vue";
import skeleton1 from "./skeleton.vue";

export default new Vue({
  components: {
    skeleton1
  },
  template: `
        <div>
            <skeleton1 id="skeleton1" style="display:none"/>
            <skeleton1 id="skeleton2" style="display:none"/>
        </div>
    `
});

