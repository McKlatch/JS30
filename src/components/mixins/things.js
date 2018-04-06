export const things = {
  data () {
    return {
      things: ['DrumKit', 'Clock', 'CSSVars', 'Arrays1', 'Flex', 'TypeAhead', 'Arrays2', 'Canvas', 'DevTools', 'Shift'], /*, 'Video', 'KeySequence', 'Slide', 'JSRefs', 'LocalStorage', 'Shadow', 'Sort', 'Reduce', 'CamFun', 'Speak', 'GeoLocation', 'FollowHighlight', 'Speech', 'StickyNav', 'JSEvents', 'FollowNav', 'ClickDrag', 'VideoSpeed', 'CountdownTimer', 'WhackAMole' */
      weeks: {
        Week0: ['DrumKit', 'Clock', 'CSSVars', 'Arrays1', 'Flex'],
        Week1: ['TypeAhead', 'Arrays2', 'Canvas', 'DevTools', 'Shift'] }/* ,
        Week2: ['Video', 'KeySequence', 'Slide', 'JSRefs', 'LocalStorage'],
        Week3: ['Shadow', 'Sort', 'Reduce', 'CamFun', 'Speak'],
        Week4: ['GeoLocation', 'FollowHighlight', 'Speech', 'StickyNav', 'JSEvents'],
        Week5: ['FollowNav', 'ClickDrag', 'VideoSpeed', 'CountdownTimer', 'WhackAMole']
      } */
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'HelloWorld'
    },
    isFirst () {
      return this.$route.name === this.things[0]
    },
    isLast () {
      return this.$route.name === this.things[this.things.length - 1]
    }
  },
  methods: {
    randomPage () {
      const randomThing = this.things[Math.floor(Math.random() * this.things.length)]
      this.$router.push({ name: randomThing })
    },
    prevPage () {
      const currentPageIndex = this.things.indexOf(this.$route.name)
      if (currentPageIndex >= 0 && currentPageIndex < this.things.length) {
        this.$router.push({ name: this.things[currentPageIndex - 1] })
      }
    },
    nextPage () {
      const currentPageIndex = this.things.indexOf(this.$route.name)
      if (currentPageIndex >= 0 && currentPageIndex < this.things.length - 1) {
        this.$router.push({ name: this.things[currentPageIndex + 1] })
      }
    },
    firstPage () {
      this.$router.push({ name: this.things[0] })
    },
    lastPage () {
      this.$router.push({ name: this.things[this.things.length - 1] })
    }
  }
}
