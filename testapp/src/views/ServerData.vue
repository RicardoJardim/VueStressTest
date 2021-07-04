<template>
  <div class="home">
    <div id="show">
      <div
        class="views"
        style="background-color: green"
        v-for="(item, index) in views"
        :key="index"
      ></div>
      <button
        class="views"
        style="background-color: yellow"
        v-for="(item, index) in buttons"
        :key="index"
      >
        click me
      </button>
    </div>

    <div class="btns">
      <Button title="FETCH DATA" :method="onClickBottomBtn" />
    </div>

    <div class="btns">
      <Button title="CREATE VIEWS" :method="onCreateViews" />
    </div>

    <div class="btns">
      <Button title="CREATE BUTTONS" :method="onCreateBtns" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 20vh;
  margin: auto;
  text-align: center;
  background-color: red;
  height: 100%;

  #show {
    width: 70vw;
    height: 30vh;
    margin: auto;
    text-align: center;
    position: relative;
  }
  .views {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
  }
  .btns {
    margin-top: 2vh;
  }
}
</style>
<script lang="ts">
import Vue from "vue";
import Button from "../components/Button.vue";

export default Vue.extend({
  name: "ServerData",
  components: { Button },
  methods: {
    onClickBottomBtn() {
      console.log(new Date());

      this.axios
        .get("http://192.168.1.112:3000/users?size=100")
        .then((response) => {
          console.log(response.data);
          console.log(new Date());
        });
      this.axios
        .get("http://192.168.1.112:3000/banks?size=100")
        .then((response) => {
          console.log(response.data);
          console.log(new Date());
        });
    },
    onCreateViews() {
      this.views = 500;
    },
    onCreateBtns() {
      this.buttons = 500;
    },
  },
  data: () => ({
    views: 0,
    buttons: 0,
  }),
});
</script>
