<template>
  <div id="container-header">
    <p id="title">Still to do</p>
    <p id="count">{{todoPedding}}</p>
  </div>
</template>


<script>
export default {
  computed: {
    todoPedding() {
      return this.$store.state.todos.all.filter(todo => todo.done === false)
        .length;
    }
  }
};
</script>



<style scoped>
p {
  font-weight: bold;
  font-family: Poppins;
  font-size: 2rem;
}
#title {
  float: left;
}
#count {
  float: right;
}

#container-header {
  overflow: hidden;
  padding: 2rem;
}
</style>