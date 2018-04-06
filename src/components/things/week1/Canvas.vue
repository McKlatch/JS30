<template>
  <div>
    <app-instr title="HTML5 Canvas" show="true">Click and drag to make some wierd rainbow slugs</app-instr>
    <canvas id="draw" width="800" height="800" @mousedown="drawing" @mousemove="draw" @mouseup="isDrawing = false" @mouseout="isDrawing = false"/>
  </div>
</template>

<script>
import appInstr from '../InstrModal.vue'

export default {
  data () {
    return {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      hue: 0,
      direction: true
    }
  },
  methods: {
    draw (e) {
      if (!this.isDrawing) return // stop the fn from running when they are not moused down
      console.log(e)
      const canvas = document.querySelector('#draw')
      const ctx = canvas.getContext('2d')
      ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`
      ctx.beginPath()
      // start from
      ctx.moveTo(this.lastX, this.lastY)
      // go to
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()
      this.lastX = e.offsetX
      this.lastY = e.offsetY

      this.hue++
      if (this.hue >= 360) {
        this.hue = 0
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        this.direction = !this.direction
      }

      if (this.direction) {
        ctx.lineWidth++
      } else {
        ctx.lineWidth--
      }
    },
    drawing (e) {
      this.isDrawing = true
      this.lastX = e.offsetX
      this.lastY = e.offsetY
    }
  },
  mounted () {
    const canvas = document.querySelector('#draw')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.strokeStyle = '#BADA55'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 100
  },
  components: {
    appInstr
  }
}
</script>

<style scoped>

</style>
