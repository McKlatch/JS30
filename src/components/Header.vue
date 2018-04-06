<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/">MvJS30</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-button-group>
        <b-button v-if="!isHome && !isFirst" @click="firstPage"><<</b-button>
        <b-button v-else disabled><<</b-button>
        <b-button v-if="!isHome && !isFirst" @click="prevPage"><</b-button>
        <b-button v-else disabled><</b-button>
        <b-dropdown v-for="(week, index) in weeks" :key="index" :text="index">
          <div role="group">
            <b-dropdown-item v-for="thing in week" :key="thing" :to="{ name: thing }">{{ thing }}</b-dropdown-item>
          </div>
        </b-dropdown>
        <b-button @click="randomPage">Random</b-button>
        <b-button v-if="!isHome && !isLast" @click="nextPage">></b-button>
        <b-button v-else disabled>></b-button>
        <b-button v-if="!isHome && !isLast" @click="lastPage">>></b-button>
        <b-button v-else disabled>>></b-button>
      </b-button-group>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
import { things } from './mixins/things'

export default {
  mixins: [things]
}
</script>

<style>
</style>
