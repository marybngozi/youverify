<template>
  <aside class="bg-white">
    <div class="">
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
      <button
        class="py-2 px-2 text-gray-300"
        @click="setTaskType('unassigned')"
        :class="{ active: taskType === 'unassigned' }"
      >
        24 Unassigned
      </button>
      <button
        class="py-2 px-2 text-gray-300"
        @click="setTaskType('assigned')"
        :class="{ active: taskType === 'assigned' }"
      >
        12 Assigned
      </button>
      <button
        class="py-2 px-2 text-gray-300"
        @click="setTaskType('complete')"
        :class="{ active: taskType === 'complete' }"
      >
        30 Completed
      </button>
    </div>

    <div class="overflow-y-scroll task-view">
      <Task v-for="i in 7" :key="i" :taskType="taskType" />
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      showAside: false,
      taskType: "unassigned",
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

    setTaskType(val) {
      this.taskType = val
    },
  },
}
</script>

<style scoped>
aside {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 310px;
  z-index: 25;
}
.btn-arrow {
  position: absolute;
  top: 0;
  right: -2.5rem;
}
.task-view {
  height: 76vh;
}
.text-xm {
  font-size: 0.8rem;
}
.active {
  color: #115766;
  border-bottom: 1px solid #115766;
}
</style>
