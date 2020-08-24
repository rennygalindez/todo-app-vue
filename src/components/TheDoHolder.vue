<template>
  <div id="todoHolder">
    <to-do-add-item />
    <to-do-header />
    <to-do-item />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
import ToDoHeader from "@/components/ToDoHeader";
import ToDoAddItem from "@/components/ToDoAddItem";
export default {
  components: { ToDoItem, ToDoHeader, ToDoAddItem }
};
</script>

<style>
div #todoHolder {
  position: relative;
  width: 100%;
  border-radius: 1%;
  color: #fff;
  height: auto;
  padding: 0.5rem;
  min-width: 330px;

  background: linear-gradient(
    90deg,
    rgba(246, 70, 76, 1) 50%,
    rgba(248, 116, 85, 1) 100%
  );
  box-shadow: 0 0 4rem 1px rgba(0, 0, 0, 0.2);
}
@media (min-width: 640px) {
  div #todoHolder {
    margin: auto;
    padding: 1rem;
    max-width: 480px;
  }
}
</style>
