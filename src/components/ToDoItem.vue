<template>
  <div>
    <ul>
      <li v-for="(todo, index) of todos" :key="index">
        <p id="description" :class="[{ done: todo.done }]">
          {{
          todo.name.length > 20 ? `${todo.name.slice(0, 20)} ...` : todo.name
          }}
        </p>
        <font-awesome-icon :icon="['far','trash-alt']" size="2x" :class="['icon', 'trash-icon']" />
        <font-awesome-icon
          @click="makeDidIt(index)"
          :icon="['far', todo.done ? 'check-square' : 'square']"
          size="2x"
          :class="['icon']"
        />
        <transition name="fade-translate">
          <p class="great" v-show="todo.done">Great</p>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos.all;
    },
    shortDescription() {
      return this.$store.state.todos.all.map(
        todo => `${todo.name.slice(0, 20)}...`
      );
    }
  },
  methods: {
    makeDidIt(todoIndex) {
      this.$store.dispatch("todos/didIt", todoIndex);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  position: relative;
  font-weight: bold;
  font-family: Poppins;
  border-top: 0.1rem rgba(255, 255, 255, 0.2) solid;
  height: 5rem;
  padding: 1rem 0;
  overflow: auto;
}

#description {
  position: relative;
  float: left;
  width: 60%;
  max-height: 4rem;
  font-size: 1rem;
  padding: 1rem 0;
}

.great {
  float: left;
  margin: 1rem 0;
  display: block;
}

.icon {
  float: right;
  margin: 0.5rem;
}
.done {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
}

.fade-translate-enter,
.fade-translate-leave-to {
  transform: translateX(-2rem);
  opacity: 0;
}
.fade-translate-enter-active,
.fade-translate-leave-active {
  transition: all 0.5s ease;
}
</style>
