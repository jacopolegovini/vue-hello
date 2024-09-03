const {createApp} = Vue

createApp({
    data() {
      return {
        message: 'Hello World',
        img: 'https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg'
      }
    }
  }).mount('#app')