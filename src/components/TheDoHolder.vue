<template>
  <div id="todoHolder">
    <to-do-item />
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem';
export default {
  components: { ToDoItem },
};
</script>

<style>
div #todoHolder {
  min-width: 100%;
  border-radius: 1%;
  color: #fff;
  height: auto;
  padding: 0.5rem;
  
  background: linear-gradient(
    90deg,
    rgba(246, 70, 76, 1) 50%,
    rgba(248, 116, 85, 1) 100%
  );
  box-shadow: 0 0 4rem 1px rgba(0, 0, 0, 0.2);
}
</style>
