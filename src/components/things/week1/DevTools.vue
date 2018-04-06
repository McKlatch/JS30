<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <h1>Open the console and see what these buttons do!</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-alert :show="consoleInstr" dismissible>
          <b-badge>Ctrl</b-badge> + <b-badge>Shift</b-badge> + <b-badge>K</b-badge> <small>( mac: <b-badge>Cmd</b-badge> + <b-badge>Opt</b-badge> + <b-badge>K</b-badge></small> ) &nbsp&nbsp&nbsp&nbsp&nbsp
        </b-alert>
      </b-col>
    </b-row>

    <b-row align-h="end" class="sticky-top">
      <b-col cols="auto">
        <p>
          Clear the console anytime: <b-button @click="clear" variant="primary" size="lg">.clear()</b-button>
        </p>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="auto">
        <p>console.log() and variations:</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-button @click="regularLog">.log(string)</b-button>
        <b-button @click="interpolatedLog">.log(interpolated string)</b-button>
        <b-button @click="styledLog">.log(styled string)</b-button>
        <hr>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <p>Other console messages:</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-button @click="warn">.warn(string)</b-button>
        <b-button @click="error">.error(string)</b-button>
        <b-button @click="info">.info(string)</b-button>
        <b-button @click="assert">.assert(bool, string)</b-button>
        <hr>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="auto">
        <p>Regarding a specific element:</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <p id="breakDown" class="text-center">×BREAK×DOWN×</p>
      </b-col>
      <b-col>
        <b-button @click="domLog">.log(DOM element)</b-button>
        <b-button @click="domDir">.dir(DOM element)</b-button>
        <b-button @click="makeGreen">Make it green!</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp</p>
        <hr>
      </b-col>
    </b-row>
    
    <b-row align-h="center">
      <b-col cols="auto">
        <p>Regarding an array:</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col>
        <p class="text-center">{{ JSON.stringify(this.dogs) }}</p>
      </b-col>
      <b-col>
        <b-button @click="group">.groupCollapsed() & .groupEnd()</b-button>
        <b-button @click="table">.table(array)</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp</p>
        <hr>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="auto">
        <p>Counting repeated strings and timing an instruction:</p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="auto">
        <b-button @click="count">.count(string)</b-button>
        <b-button @click="timing">.time() & .timeEnd()</b-button>
      </b-col>
    </b-row>  
    <b-row align-h="center">
      <b-col cols="auto">
        <p>&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      consoleInstr: true,
      dogs: [
        { name: 'Snickers', age: 2 },
        { name: 'hugo', age: 8 }
      ]
    }
  },
  methods: {
    makeGreen () {
      const p = document.querySelector('#breakDown')
      p.style.color = '#BADA55'
      p.style.fontSize = '20px'
    },
    regularLog () {
      console.log('hello')
    },
    interpolatedLog () {
      console.log('Hello I am a %s string!', '😎')
    },
    styledLog () {
      console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
    },
    warn () {
      console.warn('OH NOOO')
    },
    error () {
      console.error('this is bad:')
    },
    info () {
      console.info('Crocodiles eat 3-4 people per year')
    },
    assert () {
      const p = document.querySelector('#breakDown')
      console.assert(p.classList.contains('ouch'), 'That is wrong!')
    },
    clear () {
      console.clear()
    },
    domLog () {
      const p = document.querySelector('#breakDown')
      console.log(p)
    },
    domDir () {
      const p = document.querySelector('#breakDown')
      console.dir(p)
    },
    group () {
      this.dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`)
        console.log(`This is ${dog.name}`)
        console.log(`${dog.name} is ${dog.age} years old`)
        console.log(`${dog.name} is ${dog.age * 7} dog years old`)
        console.groupEnd(`${dog.name}`)
      })
    },
    count () {
      console.count('Wes')
      console.count('Wes')
      console.count('Steve')
      console.count('Steve')
      console.count('Wes')
      console.count('Steve')
      console.count('Wes')
      console.count('Steve')
      console.count('Steve')
      console.count('Steve')
      console.count('Steve')
      console.count('Steve')
    },
    timing () {
      console.time('fetching data')
      fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
          console.timeEnd('fetching data')
          console.log(data)
        })
    },
    table () {
      console.table(JSON.parse(JSON.stringify(this.dogs)))
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyK') this.consoleInstr = false
    })
  }
}
</script>

<style scoped>

</style>
