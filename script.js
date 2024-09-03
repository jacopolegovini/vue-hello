const {createApp} = Vue

createApp({
    data() {
      return {
        message: 'Hello World',
        img: ''
      }
    },

    methods: {
        getImage() {
            return this.img
        }
    }
  }).mount('#app')