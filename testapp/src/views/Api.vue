<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span> API </span>
  </div>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Api",
  components: {},
  methods: {
    onClickBottomBtn(event: any) {
      /*       window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
       */

      let targetId = event.currentTarget.id;
      if (this.index != targetId) {
        this.index = targetId;
        console.log(this.index);
        this.$router.push(this.tabs[this.index].route);
      }
    },
  },
  data: () => ({
    value: 0,
    index: 0,
    tabs: [
      {
        route: "/cpu",
      },
      {
        route: "/server",
      },
      {
        route: "/api",
      },
    ],
  }),
});
</script>
