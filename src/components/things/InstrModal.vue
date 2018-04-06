<template>
  <b-modal ref="instruction" hide-footer centered :title="title">
    <div class="text-center">
      <h3><slot>Some instructions would be helpful right now</slot></h3>
    </div>
    <b-btn variant="outline-info" block @click="hideModal">Got it</b-btn>
  </b-modal>
</template>

<script>
export default {
  props: ['title', 'show'],
  methods: {
    showModal () {
      this.$refs.instruction.show()
    },
    hideModal () {
      this.$refs.instruction.hide()
    }
  },
  mounted () {
    this.show ? this.showModal() : this.hideModal()
  }
}
</script>

<style scoped>
</style>