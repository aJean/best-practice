<template>
  <div>
    <h3>hahaha</h3>
    <div>
      <qy-card data="111" :list="list"></qy-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "./card.ts";

Vue.config.ignoredElements = ["qy-card"];

export default {
  name: "HelloWorld",

  data() {
    return {
      list: [1, 2, 3, 5],
    };
  },

  components: {},
};
</script>