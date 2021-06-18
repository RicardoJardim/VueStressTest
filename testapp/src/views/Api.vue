<template>
  <div class="home">
    <div class="btns" v-for="(item, index) in buttons" :key="index">
      <Button v-bind:title="item.name" :method="item.func" v-bind:key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 10vh;
  margin: auto;
  background-color: green;
  height: 100%;
}
.btns {
  margin-top: 3vh;
}
</style>
<script lang="ts">
import Vue from "vue";
import Button from "../components/Button.vue";
export default Vue.extend({
  name: "Api",
  components: {
    Button,
  },
  methods: {
    onClickBottomBtn() {
      console.log("ola");
    },
    con() {
      console.log("hele");
    },
  },
  data: () => ({
    location: null,
    buttons: [
      {
        name: "Camera",
        func: () => {
          console.log("ola");
        },
      },
      {
        name: "Gallery",
        func: () => {
          console.log("ola");
        },
      },
      {
        name: "GPS",
        func: () => {
          if (!("geolocation" in navigator)) {
            console.log("Geolocation is not available.");
            return;
          }
          // get position
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              console.log(pos);
            },
            (err) => {
              console.log(err.message);
            }
          );
        },
      },
      {
        name: "Calendar",
        func: () => {
          console.log("ola");
        },
      },
      {
        name: "Contacts",
        func: () => {
          console.log("ola");
        },
      },
    ],
  }),
});
</script>
