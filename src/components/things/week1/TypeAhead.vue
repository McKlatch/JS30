<template>
  <b-container fluid class="typeahead">
    <b-row>
      <b-col>
        <form class="search-form">
          <input type="text" class="search" placeholder="City or State" v-model="input">
          <ul class="suggestions">
            <template v-if="input === ''">
              <li>Filter for a city</li>
              <li>or a state</li>
            </template>
            <template v-if="suggestions.length >= 1">
              <li v-for="s in suggestions">
                <span class="name">{{ s.cityName}}, {{ s.stateName}}</span>
                <span class="population">{{ s.population | comma }}</span>
              </li>
            </template>
            <template v-if="suggestions.length < 1 && input !== ''">
              <li>None Found</li>
              <li>😞</li>
            </template>
          </ul>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      endPoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
      cities: [],
      input: '',
      suggestions: []
    }
  },
  watch: {
    input () {
      this.input === '' ? this.suggestions = [] : this.displayMatches()
    }
  },
  methods: {
    fetchCities () {
      this.$axios.get(this.endPoint)
        .then(blob => this.cities.push(...blob.data))
    },
    findMatches () {
      return this.cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(this.input, 'gi')
        return place.city.match(regex) || place.state.match(regex)
      })
    },
    displayMatches () {
      this.suggestions = []
      const matchArray = this.findMatches()
      matchArray.map(place => {
        const cityName = place.city
        const stateName = place.state
        const population = place.population
        this.suggestions.push({ cityName, stateName, population })
      })
    }
  },
  filters: {
    comma (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  mounted () {
    this.fetchCities()
  }
}
</script>

<style scoped>
    .typeahead {
      box-sizing: border-box;
      background: #ffc600;
      font-family: 'helvetica neue';
      font-size: 20px;
      font-weight: 200;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    input {
      width: 100%;
      padding:20px;
    }

    .search-form {
      max-width:400px;
      margin:50px auto;
    }

    input.search {
      margin: 0;
      text-align: center;
      outline:0;
      border: 10px solid #F7F7F7;
      width: 120%;
      left: -10%;
      position: relative;
      top: 10px;
      z-index: 2;
      border-radius: 5px;
      font-size: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
    }


    .suggestions {
      margin: 0;
      padding: 0;
      position: relative;
      /*perspective:20px;*/
    }
    .suggestions li {
      background:white;
      list-style: none;
      border-bottom: 1px solid #D8D8D8;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
      margin:0;
      padding:20px;
      transition:background 0.2s;
      display:flex;
      justify-content:space-between;
      text-transform: capitalize;
    }

    .suggestions li:nth-child(even) {
      transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
      background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
    }
    .suggestions li:nth-child(odd) {
      transform: perspective(100px) rotateX(-3deg) translateY(3px);
      background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
    }

    span.population {
      font-size: 15px;
    }


    .details {
      text-align: center;
      font-size: 15px;
    }

    .hl {
      background:#ffc600;
    }

    .love {
      text-align: center;
    }

    a {
      color:black;
      background:rgba(0,0,0,0.1);
      text-decoration: none;
    }
</style>
