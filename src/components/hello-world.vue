<template>
    <p>{{ message }}</p>
</template>

<style lang="scss" scoped>
p {
  font-size: 3rem;
}
</style>

<script>
export default {
  name: "hello-world",
  data: function() {
    return {
      message: "Hello World!"
    };
  }
};
</script>


