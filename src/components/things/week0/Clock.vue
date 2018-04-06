<template>
  <div class="wall">
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand" :style="{ transform: secondHand }"></div>
        <div class="hand min-hand" :style="{ transform: minsHand }"></div>
        <div class="hand second-hand" :style="{ transform: hourHand }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: '',
      secondHand: '',
      minsHand: '',
      hourHand: ''
    }
  },
  computed: {
    seconds () {
      return this.now.getSeconds()
    },
    mins () {
      return this.now.getMinutes()
    },
    hour () {
      return this.now.getHours()
    }
  },
  methods: {
    time () {
      this.now = new Date()

      const secondsDegrees = ((this.seconds / 60) * 360) + 90
      this.secondHand = `rotate(${secondsDegrees}deg)`

      const minsDegrees = ((this.mins / 60) * 360) + ((this.seconds / 60) * 6) + 90
      this.minsHand = `rotate(${minsDegrees}deg)`

      const hourDegrees = ((this.hour / 12) * 360) + ((this.mins / 60) * 30) + 90
      this.hourHand = `rotate(${hourDegrees}deg)`
    }
  },
  mounted () {
    this.time()
    this.interval = setInterval(this.time, 1000)
  },
  beforeDestroy () {
    if (this.interval) {
      clearInterval(this.interval)
    }
    this.interval = undefined
  }
}
</script>

<style scoped>
.wall {
  background:#018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
  background-size:cover;
  font-family:'helvetica neue';
  text-align: center;
  font-size: 2rem;
  display:flex;
  flex:1;
  min-height: 100vh;
  align-items: center;
}

.clock {
  width: 30rem;
  height: 30rem;
  border:20px solid white;
  border-radius:50%;
  margin:50px auto;
  position: relative;
  padding:2rem;
  box-shadow:
    0 0 0 4px rgba(0,0,0,0.1),
    inset 0 0 0 3px #EFEFEF,
    inset 0 0 10px black,
    0 0 10px rgba(0,0,0,0.2);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px); /* account for the height of the clock hands */
}

.hand {
  width:50%;
  height:6px;
  background:black;
  position: absolute;
  top:50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
</style>
