<template>
  <aside class="bg-white">
    <div>
      <div class="h-10 bg-pelorous flex justify-between px-3">
        <h3 class="text-white pt-2">Agents</h3>
        <button>
          <img src="icons/search.svg" alt="icons" />
        </button>
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
      <h4 class="w-3/12 py-2 px-3 active">All</h4>
      <h4 class="w-3/12 py-2 px-3 text-gray-300">
        <span class="h-3 w-3 text-green-600 rounded-full"></span>
        <span>Online</span>
      </h4>
      <h4 class="w-3/12 py-2 px-3 text-gray-300">
        <span class="h-3 w-3 text-red-600 rounded-full"></span>
        <span>Offline</span>
      </h4>
    </div>

    <Agent v-for="i in 7" :key="i" />
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
      return this.showAside ? "right" : "left"
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
  left: -2.5rem;
}
h4.active {
  color: #115766;
  border-bottom: 1px solid #115766;
}
</style>
