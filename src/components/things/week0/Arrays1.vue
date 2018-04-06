<template>
  <div>
    <h3>Array of Inventors:</h3>
    <p>{{ JSON.stringify(this.inventors) }}</p>
    <h3>Born in {{ century }}'s (<span @click="chCentury" style="cursor: pointer">🠻</span><span @click="chCentury('up')" style="cursor: pointer">🠹</span>) using .filter()</h3>
    <p>{{ JSON.stringify(this.inventors1500) }}</p>
    <h3>Fullnames using .map()</h3>
    <p>{{ JSON.stringify(this.inventorNames) }}</p>
    <h3>Birthyear using .sort()</h3>
    <p>{{ JSON.stringify(this.inventorsOrd) }}</p>
    <h3>Total years using .reduce()</h3>
    <p>{{ inventorsYears }}</p>
    <h3>By age using .sort()</h3>
    <p>{{ JSON.stringify(this.inventorsAge) }}</p>
    <hr>
    <h3>Array of Boulevards in Paris:</h3>
    <p>{{ JSON.stringify(this.boulevards) }}</p>
    <h3>Boulevards containing 'de' using .filter()</h3>
    <p>{{ JSON.stringify(this.boulevardsDe) }}</p>
    <hr>
    <h3>Array of People:</h3>
    <p>{{ JSON.stringify(this.people) }}</p>
    <h3>Alphabetical using .sort() and .split()</h3>
    <p>{{ JSON.stringify(this.peopleSurname) }}</p>
    <hr>
    <h3>Array of transportation modes:</h3>
    <p>{{ JSON.stringify(this.transport) }}</p>
    <h3>Sum of each mode using .reduce()</h3>
    <p>{{ transportCount }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inventors: [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ],
      boulevards: [
        'Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', 'Haussmann\'s renovation of Paris', 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', 'Boulevard de l\'Amiral-Bruix', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', 'Boulevard Haussmann', 'Boulevard de l\'Hôpital', 'Boulevard des Italiens', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard de Rochechouart', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'
      ],
      people: [
        'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
      ],
      transport: [
        'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'
      ],
      century: 1500
    }
  },
  computed: {
    inventors1500 () {
      return this.inventors.filter(inventor => (inventor.year >= this.century && inventor.year < this.century + 100))
    },
    inventorNames () {
      return this.inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    },
    inventorsOrd () {
      return [...this.inventors].sort((a, b) => a.year > b.year ? 1 : -1)
    },
    inventorsYears () {
      return this.inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year)
      }, 0)
    },
    inventorsAge () {
      return [...this.inventors].sort((a, b) => {
        const lastInventor = a.passed - a.year
        const nextInventor = b.passed - b.year
        return lastInventor > nextInventor ? -1 : 1
      })
    },
    boulevardsDe () {
      return this.boulevards.filter(streetName => streetName.includes('de'))
    },
    peopleSurname () {
      return [...this.people].sort((lastOne, nextOne) => {
        const aLast = lastOne.split(', ')[0]
        const bLast = nextOne.split(', ')[0]
        return aLast > bLast ? 1 : -1
      })
    },
    transportCount () {
      return this.transport.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0
        }
        obj[item]++
        return obj
      }, {})
    }
  },
  methods: {
    chCentury (dir) {
      dir === 'up' ? this.century += 100 : this.century -= 100
      if (this.century === 2000) this.century = 1400
      if (this.century === 1300) this.century = 1900
    }
  }
}
</script>

<style scoped>
</style>
