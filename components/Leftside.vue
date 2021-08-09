<template>
  <aside class="bg-white">
    <div class="">
      <div class="h-10 bg-pelorous">
        <h3 class="text-white pt-2 pl-3">Task</h3>
      </div>

      <button
        class="
          bg-black
          flex
          items-center
          justify-center
          h-10
          w-10
          z-20
          btn-arrow
        "
        @click="toggleBtn"
      >
        <img :src="`/icons/angle-${arrow}.svg`" alt="icon" />
      </button>
    </div>

    <div class="h-11 border-b flex justify-between text-sm">
      <h4 class="py-2 px-2 active">24 Unassigned</h4>
      <h4 class="py-2 px-2 text-gray-300">12 Assigned</h4>
      <h4 class="py-2 px-2 text-gray-300">30 Completed</h4>
    </div>

    <Task v-for="i in 7" :key="i" />
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showAside: true,
    }
  },
  computed: {
    arrow() {
      return this.showAside ? "left" : "right"
    },
  },
  methods: {
    toggleBtn() {
      this.showAside = !this.showAside
    },
  },
}
</script>

<style scoped>
aside {
  position: relative;
  z-index: 30;
}
.btn-arrow {
  position: absolute;
  top: 0;
  right: -2.5rem;
}
h4.active {
  color: #115766;
  border-bottom: 1px solid #115766;
}
</style>
