<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld title="Cpu" />
  </div>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Cpu",
  components: {
    HelloWorld,
  },
  methods: {
    onClickBottomBtn(event: any) {
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
        route: "/",
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
