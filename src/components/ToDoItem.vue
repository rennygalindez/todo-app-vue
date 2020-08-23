<template>
  <div>
    <ul>
      <li v-for="(todo, index) of todos" :key="index">
        <p id="description" :class="[{ done: todo.done }, 'vertical-align']">
          {{ todo.name }}
        </p>
        <transition name="fade-translate">
          <span class="great vertical-align" v-show="todo.done">Great</span>
        </transition>
        <font-awesome-icon
          @click="makeDidIt(index)"
          :icon="['far', todo.done ? 'check-square' : 'square']"
          size="2x"
          :class="['order']"
        />
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
  },
  methods: {
    makeDidIt(todoIndex) {
      this.$store.dispatch('todos/didIt', todoIndex);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem rgba(255, 255, 255, 0.2) solid;
  font-weight: bold;
  font-family: Poppins;
  height: 5rem;
}

#description {
  padding-left: 1rem;
  width: 70%;
  max-height: 4rem;
  font-size: 1rem;
  overflow-x: hidden;
  overflow-x: visible;

}

#check {
  padding-right: 1rem;
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
