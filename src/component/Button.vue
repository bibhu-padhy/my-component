<template>
  <div>
      <button class="text-primary" @click="$emit('btnClicked',{clicked:true,title})">{{title}}</button>
  </div>
</template>

<script>
export default {
    name:'Button',
props:{
    title:null
}
}
</script>

<style>

</style>