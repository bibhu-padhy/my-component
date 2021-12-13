<template>
  <div class="my-component__text">
    Hello, World! {{name}}
    <Button  title="signup"/>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props:{
    name
  }
}
</script>
