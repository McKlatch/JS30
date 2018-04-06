<template>
  <div class="cssvars">
    <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

    <div class="controls">
      <label for="spacing">Spacing:</label>
      <input id="spacing" type="range" name="spacing" min="10" max="200" v-model.number="spacing">

      <label for="blur">Blur:</label>
      <input id="blur" type="range" name="blur" min="0" max="25" v-model.number="blur">

      <label for="base">Base Color</label>
      <input id="base" type="color" name="base" v-model="base">
    </div>

    <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
  </div>
</template>

<script>
export default {
  data () {
    return {
      spacing: 10,
      blur: 10,
      base: '#ffc600'
    }
  },
  watch: {
    spacing () {
      this.handleUpdate('spacing', this.spacing, 'px')
    },
    blur () {
      this.handleUpdate('blur', this.blur, 'px')
    },
    base () {
      this.handleUpdate('base', this.base)
    }
  },
  methods: {
    handleUpdate (name, value, suffix = '') {
      document.documentElement.style.setProperty(`--${name}`, value + suffix)
    }
  },
  mounted () {
    this.handleUpdate('spacing', this.spacing, 'px')
    this.handleUpdate('blur', this.blur, 'px')
    this.handleUpdate('base', this.base)
  }
}
</script>

<style scoped>
  :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
  }

  img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
  }

  .hl {
    color: var(--base);
  }

    /*
      misc styles, nothing to do with CSS variables
    */

  .cssvars {
    text-align: center;
    background: #193549;
    color: white;
    font-family: 'helvetica neue', sans-serif;
    font-weight: 100;
    font-size: 50px;
  }

  .controls {
    margin-bottom: 50px;
  }

  input {
    width:100px;
  }
</style>
