<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-flex xs12 sm12 md12 lg12>
          <v-badge right>
            <template v-slot:badge>
              <span>{{projects.length}}</span>
            </template>
            <h2 class="grey--text text--darken-1">All Projects</h2>
          </v-badge>
        </v-flex>
      </v-layout>

      <!-- Create buttons for sorting -->
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small flat color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`${project.status} pa-3 project`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due Date</div>
            <div>{{project.dueDate | mdate}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  data() {
    return {
      projects: [
        {
          title: "Build a Dam",
          status: "ongoing",
          person: "Newbster",
          dueDate: 1563595200000,
          content: "We have to stop these incredible floods, soon."
        }
      ]
    };
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>

