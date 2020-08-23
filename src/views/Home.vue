<template>
  <div class="home">
    <the-do-holder />
  </div>
</template>

<script>
import TheDoHolder from '@/components/TheDoHolder';
export default {
  name: 'Home',
  components: { TheDoHolder },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
