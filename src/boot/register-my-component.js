import MyComponent from '../component/MyComponent.vue'
import Button from '../component/Button.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.component('my-component', MyComponent),
  app.component('Button',Button)
}
