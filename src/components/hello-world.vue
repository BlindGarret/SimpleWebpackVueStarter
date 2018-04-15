<template>
  <div>
    <p>{{ message }}</p>
    <button @click="reverse()">reverse</button>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 3rem;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "hello-world",
  computed: {
    ...mapGetters('helloMessage', {
      message: 'message'
    })
  },
  methods: {
    reverse() {
      this.$store.dispatch("helloMessage/reverse");
    }
  }
};
</script>


