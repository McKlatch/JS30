<template>
  <div>
    <h3>Array of People:</h3>
    <p>{{ JSON.stringify(this.people) }}</p>
    <h3>Check at least one is over {{ age }} (<span @click="chAge" style="cursor: pointer">🠻</span><span @click="chAge('up')" style="cursor: pointer">🠹</span>) using .some()</h3>
    <p>{{ isAdult }}</p>
    <h3>Check all are over {{ age }} (<span @click="chAge" style="cursor: pointer">🠻</span><span @click="chAge('up')" style="cursor: pointer">🠹</span>) using .every()</h3>
    <p>{{ allAdults }}</p>
    <hr>
    <h3>Array of Comments:</h3>
    <p>{{ JSON.stringify(this.comments) }}</p>
    <h3>comment with the ID of {{ id }} (<span @click="chCommentID" style="cursor: pointer">🠺</span>) using .find()</h3>
    <p>{{ comment }}</p>
    <h3>Remove comment by id using .findIndex() and .slice()</h3>
    <p>{{ JSON.stringify(this.newComments) }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ],
      comments: [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ],
      age: 19,
      id: 823423
    }
  },
  computed: {
    isAdult () {
      return this.people.some(person => ((new Date()).getFullYear()) - person.year >= this.age)
    },
    allAdults () {
      return this.people.every(person => ((new Date()).getFullYear()) - person.year >= this.age)
    },
    comment () {
      return this.comments.find(comment => comment.id === this.id)
    },
    newComments () {
      const index = this.comments.findIndex(comment => comment.id === this.id)
      return [
        ...this.comments.slice(0, index),
        ...this.comments.slice(index + 1)
      ]
    }
  },
  methods: {
    chAge (dir) {
      dir === 'up' ? this.age += 1 : this.age -= 1
      if (this.age === 51) this.age = 1
      if (this.age === 0) this.age = 50
    },
    chCommentID () {
      const array = this.comments.map(comment => comment.id)
      const index = array.indexOf(this.id)
      index >= 0 && index < array.length - 1 ? this.id = array[index + 1] : this.id = array[0]
    }
  }
}
</script>

<style scoped>

</style>