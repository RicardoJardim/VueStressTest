<template>
  <div class="home">
    <h2>{{ title + value }}</h2>

    <Button title="Start" :method="onClickBottomBtn" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 40vh;
  margin: auto;
  text-align: center;
  background-color: yellow;
  height: 100%;

  h2 {
    padding-bottom: 50px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Button from "../components/Button.vue";

export default Vue.extend({
  name: "Cpu",
  components: {
    Button,
  },
  methods: {
    onClickBottomBtn() {
      console.log("ola");
      this.value = 0;

      console.log(new Date());
      let result = 0;
      for (let j = 1; j <= 5; j++) {
        for (let k = 1; k <= 100000; k++) {
          result +=
            Math.log2(k) +
            (3 * k) / (2 * j) +
            Math.sqrt(k) +
            Math.pow(k, j - 1);
        }
        console.log(result);
      }
      console.log(new Date());
      this.value = result;
    },
  },
  data: () => ({
    value: 0,
    title: "Result = ",
  }),
});
</script>
