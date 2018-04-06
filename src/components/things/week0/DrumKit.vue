<template>
  <b-container class="drums" fluid>
    <app-instr title="Drumkit" show="true">Tap the keys on your keyboard to play sounds</app-instr>
    <b-row class="keys">
  	  <b-col data-key="65" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>A</kbd>
  	    <span class="sound">clap</span>
  	  </b-col>
  	  <b-col data-key="83" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>S</kbd>
  	    <span class="sound">hihat</span>
  	  </b-col>
  	  <b-col data-key="68" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>D</kbd>
  	    <span class="sound">kick</span>
  	  </b-col>
  	  <b-col data-key="70" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>F</kbd>
  	    <span class="sound">openhat</span>
  	  </b-col>
  	  <b-col data-key="71" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>G</kbd>
  	    <span class="sound">boom</span>
  	  </b-col>
  	  <b-col data-key="72" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>H</kbd>
  	    <span class="sound">ride</span>
  	  </b-col>
  	  <b-col data-key="74" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>J</kbd>
  	    <span class="sound">snare</span>
  	  </b-col>
  	  <b-col data-key="75" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>K</kbd>
  	    <span class="sound">tom</span>
  	  </b-col>
  	  <b-col data-key="76" class="key" @click="playSound" @transitionend="removeTransition">
  	    <kbd>L</kbd>
  	    <span class="sound">tink</span>
  	  </b-col>
  	</b-row>
	
  	<audio data-key="65" src="/static/sounds/clap.wav"></audio>
  	<audio data-key="83" src="/static/sounds/hihat.wav"></audio>
  	<audio data-key="68" src="/static/sounds/kick.wav"></audio>
  	<audio data-key="70" src="/static/sounds/openhat.wav"></audio>
  	<audio data-key="71" src="/static/sounds/boom.wav"></audio>
  	<audio data-key="72" src="/static/sounds/ride.wav"></audio>
  	<audio data-key="74" src="/static/sounds/snare.wav"></audio>
  	<audio data-key="75" src="/static/sounds/tom.wav"></audio>
  	<audio data-key="76" src="/static/sounds/tink.wav"></audio>
  </b-container>
</template>

<script>
import appInstr from '../InstrModal.vue'

export default {
  methods: {
    removeTransition (e) {
      if (e.propertyName !== 'transform') return
      e.target.classList.remove('playing')
    },
    playSound (e) {
      const keyCode = e.keyCode || e.currentTarget.dataset.key
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
      const key = document.querySelector(`div[data-key="${keyCode}"]`)
      if (!audio) return

      key.classList.add('playing')
      audio.currentTime = 0
      audio.play()
    }
  },
  created () {
    window.addEventListener('keydown', this.playSound)
  },
  components: {
    appInstr
  }
}
</script>

<style scoped>
.drums {
  font-size: 10px;
  background: url(http://i.imgur.com/mPMmwbB.png) bottom center;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: #e67e22;
  text-shadow: 0 0 .3rem black;
}

.playing {
  transform: scale(1.2);
  background: #d35400;
  box-shadow: 0 0 1rem #e67e22;
}

kbd {
  display: block;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 4rem;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
}
</style>
