const lightbulb = {
  data() {
    return { 
      title: "Light Bulb"
    }
  },

  methods: {
    changeLight:function() {
      const button = document.getElementById('tap')
      const changeState = document.getElementById('img')

      if(button.innerHTML==='Turn on the light') {
          changeState.src='img/pic_bulbon.gif'
          button.innerHTML = 'Turn off the light'

      } else {
         changeState.src='img/pic_bulboff.gif'
         button.innerHTML = 'Turn on the light'
      }
    }
  }
} 

Vue.createApp(lightbulb).mount('#app')