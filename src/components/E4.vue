<template>
  <v-flex xs6 sm4 ma-3>
    <v-card class="elevation-10">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="4"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="subheader mb-0">This E4 Card is named {{name}}.</h3>
        </div>
      </v-card-title>
      <v-card-text
        class="body-1"
      >This is a deeply embedded component (E4) wanting to emit an event to be handled by ELand (ELand > E1 > E2 > E4). Click 'Send Event'.</v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="emitEventOnHub">Send Event</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>



<script>
// Import the eventHub, then use it to emit events
import { eventHub } from "@/eventHub.js";

export default {
  props: ["name"],
  methods: {
    emitEventOnHub: function(id) {
      eventHub.$emit("cevent", this.name);
    }
  }
};
</script>


<style>
</style>
