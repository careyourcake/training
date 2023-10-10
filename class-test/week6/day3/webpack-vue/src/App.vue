<template>
  <h1>{{ msg }}</h1>
</template>
    <script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hello,Webpack",
    };
  },
};
</script>
    <style scoped>
h1 {
  color: red;
}
</style>