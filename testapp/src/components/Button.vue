<template>
  <div class="text-center">
    <v-btn
      rounded
      color="#0099ff"
      width="80%"
      dark
      v-on:click="onClickBottomBtn()"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    title: String,
    method: Function,
  },
  methods: {
    onClickBottomBtn() {
      console.log(this.$props.title);
      this.$props.method();
    },
  },
});
</script>
