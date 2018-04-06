<template>
  <div :class="{ solved: success }">
	 <h1 class="display-2 text-center">Key Detection</h1>
   <h3 class="text-muted text-center" v-if="!success">Listening to keyboard input while this window is in focus</h3>
   <h1 class="display-1 text-center">{{ listening }}</h1>
   <h3 class="text-muted text-center" v-if="!success">{{ hint }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pressed: [],
      secretCode: 'mcklatch',
      success: false,
      listening: '❎',
      hint: 'Try and guess the secret word'
    }
  },
  watch: {
    pressed () {
      this.listening = '🔎'
      setTimeout(() => {
        this.success ? this.listening = '✅' : this.listening = '❎'
      }, 1500)
      setTimeout(() => {
        this.hint = 'Try typing my nickname!'
      }, 60000)
    }
  },
  methods: {
    checkSuccess () {
      if (this.pressed.join('').includes(this.secretCode)) {
        console.log('DING DING!')
        this.success = true
      }
    }
  },
  created () {
    window.addEventListener('keyup', (e) => {
      console.log(e.key)
      this.pressed.push(e.key)
      this.pressed.splice(-this.secretCode.length - 1, this.pressed.length - this.secretCode.length)
      this.checkSuccess()
      console.log(this.pressed)
    })
  }
}
</script>

<style scoped>
.solved {
  background: #6ea9fb;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
