<template>
  <div>
    <v-layout my-3>
      <v-flex xs6 offset-sm3>
        <v-tabs v-model="active" color="cyan" dark slider-color="red">
          <v-tab v-for="n in 3" :key="n" ripple>Item {{ n }}</v-tab>
          <v-tab-item v-for="n in 3" :key="n">
            <v-card class="elevation-17">
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>

    <v-layout row wrap my-5>
      <E4 name="SrA Jayruse"></E4>
      <E4 name="Cory"></E4>
      <E4 name="Matt"></E4>
      <E4 name="Ayn Rand"></E4>
      <E4 name="Elon Musk"></E4>
    </v-layout>
  </div>
</template>

<script>
import E4 from "@/components/E4";

export default {
  components: { E4 },
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
};
</script>

<style>
</style>
