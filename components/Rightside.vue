<template>
  <aside class="bg-white">
    <div>
      <div class="h-10 bg-pelorous flex justify-between pl-3">
        <h3 class="text-white pt-2">Agents</h3>

        <transition name="fade">
          <PageSearch
            v-show="viewSearch"
            pholder="Search Agents"
            textColor="placeholder-gray-200"
            bg="bg-ice"
            :showSelect="false"
            class="hidden md:flex w-full ml-2"
          />
        </transition>

        <button class="px-3" @click="toogleSearch()">
          <img src="icons/search.svg" alt="icons" />
        </button>
      </div>

      <button
        class="
          bg-haiti
          flex
          items-center
          justify-center
          h-10
          w-10
          z-20
          btn-arrow
        "
        @click="toogleRightSide"
      >
        <img :src="`/icons/angle-${arrow}.svg`" alt="icon" />
      </button>
    </div>

    <div class="h-11 border-b flex justify-between text-sm">
      <button class="w-4/12 py-2 px-3 active">All</button>

      <button
        class="
          w-4/12
          py-2
          px-3
          text-gray-300
          flex
          justify-center
          space-x-2
          items-center
        "
      >
        <div class="h-2.5 w-2.5 rounded-full bg-green-600"></div>
        <span>Online</span>
      </button>

      <button
        class="
          w-4/12
          py-2
          px-3
          text-gray-300
          flex
          justify-center
          space-x-2
          items-center
        "
      >
        <div class="h-2.5 w-2.5 bg-red-600 rounded-full"></div>
        <span>Offline</span>
      </button>
    </div>

    <div class="overflow-y-scroll task-view">
      <Agent v-for="i in 7" :key="i" />
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      viewSearch: false,
    }
  },

  computed: {
    ...mapState(["showRightSide"]),

    arrow() {
      return this.showRightSide ? "right" : "left"
    },
  },

  methods: {
    ...mapMutations(["toogleRightSide"]),

    toogleSearch() {
      this.viewSearch = !this.viewSearch
    },
  },
}
</script>

<style scoped>
aside {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 310px;
  z-index: 25;
}
.btn-arrow {
  position: absolute;
  top: 0;
  left: -2.5rem;
}
.task-view {
  height: 76vh;
}
.active {
  color: #115766;
  border-bottom: 1px solid #115766;
}
.online {
  height: 4px;
  width: 4px;
  background: #115766;
  min-height: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
