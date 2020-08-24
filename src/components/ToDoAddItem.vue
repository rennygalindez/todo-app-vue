<template >
  <div>
    <div id="add-container">
      <to-do-add-item-modal />
    </div>
  </div>
</template>


<script>
import ToDoAddItemModal from "@/components/ToDoAddItemModal";
export default {
  components: {
    ToDoAddItemModal
  }
};
</script>


<style>
#add-container {
  padding-top: 1rem;
}
</style>