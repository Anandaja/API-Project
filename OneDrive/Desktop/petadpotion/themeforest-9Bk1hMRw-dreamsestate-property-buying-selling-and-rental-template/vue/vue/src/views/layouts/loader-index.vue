<template>
  <!-- Loader -->
  <div class="page-loader" ref="pageLoader">
    <div class="page-loader-inner">
      <img src="@/assets/img/icons/loader.svg" alt="Loader" />
      <label><i class="fa-solid fa-circle"></i></label>
      <label><i class="fa-solid fa-circle"></i></label>
      <label><i class="fa-solid fa-circle"></i></label>
    </div>
  </div>
  <!-- /Loader -->
</template>
  
<script>
import { ref, onMounted, nextTick } from 'vue';

export default {
  setup() {
    const pageLoader = ref(null);

    onMounted(async () => {
      await nextTick(); // Wait for DOM to update
      setTimeout(() => {
        if (pageLoader.value) {
          pageLoader.value.style.opacity = '0';
          setTimeout(() => {
            if (pageLoader.value) {
              pageLoader.value.style.display = 'none';
            }
          }, 500);
        }
      }, 2000);
    });
    return {
      pageLoader
    };
  }
};
</script>

