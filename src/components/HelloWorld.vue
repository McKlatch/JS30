<template>
  <b-container fluid class="purple">
    <b-row class="text-center top-buffer">
      <b-col>
        <h1>McKlatch &nbsp<small>vs.</small> #JS30</h1><hr>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <p>
          <b-link href="https://javascript30.com/" rel="noopener noreferrer" target="_blank" class="yellow">30 Day Vanilla JS Coding  Challenge</b-link> completed by David McClatchey<br>
          30 things built in 30 days<br>
          No Compilers, No Libraries, No Boilerplate
          <hr>
        </p><p>
          Later translated into VueJS2 for this presentation.
        </p>
      </b-col>
    </b-row>
    <b-row class="text-center mid-buffer">
      <b-col>
        <b-btn variant="warning" to="/drums">Start at Day 1 - Drumkit</b-btn>
        <b-btn variant="outline-warning" @click="randomPage">Random</b-btn>
        <hr>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col>
        <small>Made by <b-link href="https://mcklatch.com/hi" rel="noopener noreferrer" target="_blank" class="yellow">McKlatch</b-link> - see more at <b-link href="https://dev.mcklatch.com" rel="noopener noreferrer" target="_blank" class="yellow">dev.mcklatch.com</b-link></small>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { things } from './mixins/things'

export default {
  mixins: [things]
}
</script>

<style scoped>
@font-face {
  font-family: 'againts';
  src: url('/static/againts.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.purple {
  height: 100%;
  position: absolute;
  background-color: #4800FF;
  background: url(/static/sky--purple-kracked.jpg);
  background-size: cover;
}

h1 {
  color: #ffc600;
  font-size: 90px;
  font-family: 'againts'
}

small {
  color: #fff;
}

p {
  color: #fff;
}

.yellow {
  color: #ffc600;
}

.top-buffer {
  margin-top: 120px;
}

.mid-buffer {
  margin-top: 30px;
}
</style>
