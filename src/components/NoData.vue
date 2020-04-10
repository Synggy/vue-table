<template>
  <div class="outter">
    <div style="color:#DBE5E8">{{message}}</div>
  </div>
</template>
<script>
export default {
  props:["message"]
}
</script>
<style lang="scss" scoped>
.outter {
  height: 100%;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
}
</style>