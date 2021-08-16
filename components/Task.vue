<template>
  <div class="flex justify-between items-center pt-4 pb-3 px-3 border-b">
    <div>
      <img :src="`icons/${taskImage}.svg`" alt="icons" class="mb-2" />
      <p class="text-xs text-gray-500" v-html="taskText"></p>
    </div>

    <div class="">
      <h5 class="text-xm">Abiodun Olawale Solomon</h5>
      <p class="text-sxm text-gray-400">12b Emmanuel Hign street, Sur...</p>
      <p class="flex space-x-2">
        <img src="icons/location.svg" alt="icons" />
        <span class="text-sxm text-gray-400">Sterling Bank PLC</span>
      </p>
      <p class="text-xm mt-3 text-blue-600">A Day Ago</p>
    </div>

    <div>
      <img src="icons/angle-right-color.svg" alt="icons" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskType: {
      type: String,
      default: "unassigned",
    },
  },
  computed: {
    taskImage() {
      if (this.taskType === "unassigned") return "plus"
      if (this.taskType === "assigned") return "minus"
      if (this.taskType === "complete") return "finish"
    },
    taskText() {
      if (this.taskType === "unassigned") return "Assign <br /> Agent"
      if (this.taskType === "assigned") return "Unassign <br /> Agent"
      if (this.taskType === "complete") return "Agent <br /> Done"
    },
  },
}
</script>

<style scoped>
.text-xm {
  font-size: 0.8rem;
}
.text-sxm {
  font-size: 0.71rem;
}
</style>
