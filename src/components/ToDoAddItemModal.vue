<template >
  <div>
    <font-awesome-icon @click="showModal" id="addicon" :icon="['far','plus-square']" size="4x" />
    <transition>
      <div id="add-item-modal" v-show="show">
        <textarea v-model="description" id="description" cols="50" rows="5" required autofocus></textarea>
        <div class="conatiner-buttons">
          <button @click.prevent="addTodo" class="buttons" id="addButton">Add</button>
          <button @click.prevent="hideModal" class="button-cancel buttons" id="cancelButton">Cancel</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      show: false
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    hideModal() {
      this.show = false;
    },
    addTodo() {
      this.$store.state.todos.all.push({ name: this.description, done: false });
      this.description = "";
      this.show = false;
    }
  }
};
</script>
<style scoped>
#add-item-modal {
  position: absolute;
  width: 80%;
  top: 5%;
  left: 10%;
  border-radius: 1%;
  z-index: 1;
  background-color: #fff;
  padding: 2rem;
}
#description {
  font-size: 1.5rem;
  outline: none;
  max-width: 80%;
  border: dotted;
  display: block;
  border-color: rgba(246, 70, 76, 1);
  color: rgba(246, 70, 76, 1);
  border-radius: 1%;
  margin: auto;
  resize: none;
}

.conatiner-buttons {
  overflow: auto;
  margin: auto;
}
button {
  float: right;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  background-color: #fff;
  border-color: rgba(246, 70, 76, 1);
  outline: none;
  border-radius: 10%;
  appearance: none;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(246, 70, 76);
  transition: all 0.3s ease;
}

#cancelButton.button-cancel {
  color: #fff;
  border-radius: 5%;
  background-color: rgba(246, 70, 76);
}
button:hover {
  box-shadow: 0.4rem 0.4rem 0.4rem rgba(248, 116, 85);
}

#addicon {
  margin: auto;
  display: block;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
@media (min-width: 640px) {
  #add-item-modal {
    width: 100%;
  }

  button {
    padding: 1rem;
    margin: 1rem;
    font-size: 2rem;
  }
  #description {
    font-size: 2rem;
    top: 0;
    right: 0;
  }
}
</style>