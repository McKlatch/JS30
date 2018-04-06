<template>
  <b-container fluid class="shift">
  	<b-row>
      <b-col class="inbox">
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>This is an inbox layout.</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Check one item</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Hold down your Shift key</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Check a lower item</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Everything inbetween should also be set to checked</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>I made this without any libraries</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Just regular JavaScript</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Have Fun!</p>
        </div>
        <div class="item">
          <input type="checkbox" @click="handleCheck">
          <p>Don't forget to see my other stuff!</p>
        </div>
      </b-col>
	</b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      lastChecked: ''
    }
  },
  methods: {
    handleCheck (e) {
      console.log(e)
      const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
      // Check if they had the shift key down
      // AND check that they are checking it
      let inBetween = false
      if (e.shiftKey && e.target.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
          console.log(checkbox)
          if (checkbox === e.target || checkbox === this.lastChecked) {
            inBetween = !inBetween
            console.log('Starting to check them inbetween!')
          }

          if (inBetween) {
            checkbox.checked = true
          }
        })
      }
      this.lastChecked = e.target
    }
  }
}
</script>

<style scoped>
	.shift {
      font-family: sans-serif;
      background:#ffc600;
    }

    .inbox {
      max-width:400px;
      margin:50px auto;
      background:white;
      border-radius:5px;
      box-shadow:10px 10px 0 rgba(0,0,0,0.1);
    }

    .item {
      display:flex;
      align-items:center;
      border-bottom: 1px solid #F1F1F1;
    }

    .item:last-child {
      border-bottom:0;
    }


    input:checked + p {
      background:#F9F9F9;
      text-decoration: line-through;
    }

    input[type="checkbox"] {
      margin:20px;
    }

    p {
      margin:0;
      padding:20px;
      transition:background 0.2s;
      flex:1;
      font-family:'helvetica neue';
      font-size: 20px;
      font-weight: 200;
      border-left: 1px solid #D1E2FF;
    }

    .details {
      text-align: center;
      font-size: 15px;
    }
</style>
