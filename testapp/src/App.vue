<template>
  <v-app style="height: 100vh; overflow: hidden">
    <v-main>
      <div style="overflow: auto; height: 94vh">
        <router-view></router-view>
      </div>

      <v-bottom-navigation
        :value="value"
        color="white"
        background-color="#0099ff"
        grow
        height="6vh"
      >
        <v-btn id="0" v-on:click="onClickBottomBtn(0, $event)">
          <span>btn1</span>

          <v-icon>mdi-sword-cross</v-icon>
        </v-btn>

        <v-btn id="1" v-on:click="onClickBottomBtn(1, $event)">
          <span>btn2</span>

          <v-icon>mdi-cube-outline</v-icon>
        </v-btn>

        <v-btn id="2" v-on:click="onClickBottomBtn(2, $event)">
          <span>btn3</span>

          <v-icon>mdi-cellphone</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<style>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #0099ff !important;
}
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0 !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 6vh !important;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  methods: {
    onClickBottomBtn(id: number, event: any) {
      //console.log(event.currentTarget.id);
      //console.log(this.$router.currentRoute);
      let targetId: number = id;
      if (this.index != targetId) {
        this.index = targetId;
        this.$router.push(this.tabs[this.index].route);
      }
    },
  },
  created() {
    const position = this.tabs.findIndex(
      (element) => element.route == this.$router.currentRoute.path
    );
    this.value = position;
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
