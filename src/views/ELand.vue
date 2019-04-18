<template>
  <div>
    <E1></E1>

    <v-flex xs6 sm4 ma-3>
      <v-card class="elevation-10">
        <v-card-title primary-title>ELand.received</v-card-title>
        <v-card-text>
          <div>
            <h3 class="headline mb-0">This Card sits on ELand and shows contents of E1.received</h3>
            <ul>
              <li v-for="(item,index) in received" :key="index">{{item}}</li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-snackbar v-model="snackbar" :top="true" :right="true" :timeout="timeout" color="primary">
      {{ text }}
      <v-btn color="info" flat @click="snackbar=false">X</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import E1 from "@/components/E1";

// Import the eventHub, then use lifecycle hooks of this component to setup and tear down listeners.
import { eventHub } from "@/eventHub.js";

export default {
  components: { E1 },
  data() {
    return {
      received: [],
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "Hello, I'm a snackbar"
    };
  },
  created: function() {
    eventHub.$on("cevent", this.processCEvent);
  },
  // It's good to clean up event listeners before
  // a component is destroyed.
  beforeDestroy: function() {
    eventHub.$off("cevent", this.processCEvent);
  },
  methods: {
    processCEvent: function(r) {
      this.received.push(r);
      this.text = `cevent received by ELand component.  Event:  ${r}`;
      this.snackbar = true;
    }
  }
};
</script>

<style>
</style>
