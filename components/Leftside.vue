<template>
  <aside :class="showLeftSide ? 'open' : 'close'" class="bg-white">
    <div class="overflow-y-scroll">
      <div class="h-10 bg-pelorous">
        <h3 class="text-white pt-2 pl-3">Task</h3>
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
        @click="toogleLeftSide"
      >
        <img :src="`/icons/angle-${arrow}.svg`" alt="icon" />
      </button>
    </div>

    <div class="h-11 border-b flex justify-between text-xm">
      <h4 class="py-2 px-2 active">24 Unassigned</h4>
      <h4 class="py-2 px-2 text-gray-300">12 Assigned</h4>
      <h4 class="py-2 px-2 text-gray-300">30 Completed</h4>
    </div>

    <Task v-for="i in 7" :key="i" />
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      showAside: false,
    }
  },
  computed: {
    ...mapState(["showLeftSide"]),

    arrow() {
      return this.showLeftSide ? "left" : "right"
    },
  },
  methods: {
    ...mapMutations(["toogleLeftSide"]),
  },
}
</script>

<style scoped>
aside {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  z-index: 25;
}
aside.open {
  -webkit-transform: translateX(240px);
  -ms-transform: translateX(240px);
  transform: translateX(240px);
}
aside.close {
  -webkit-transform: translateX(-60px);
  -ms-transform: translateX(-60px);
  transform: translateX(-60px);
}
.btn-arrow {
  position: absolute;
  top: 0;
  right: -2.5rem;
}
.text-xm {
  font-size: 0.8rem;
}
h4.active {
  color: #115766;
  border-bottom: 1px solid #115766;
}
</style>
