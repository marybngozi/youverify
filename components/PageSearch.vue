<template>
  <form
    @submit.prevent
    class="bg-gray-100 p-1 items-center flex justify-between"
  >
    <select
      class="
        bg-transparent
        font-thin
        text-gray-400
        w-4/12
        md:w-1/12
        focus:outline-none
        hover:outline-none
        border-r
      "
      name="type"
      id="type"
    >
      <option value="All">All</option>
    </select>
    <input
      v-model="searchParam"
      class="
        inline-block
        w-full
        text-sm
        px-2
        leading-none
        text-astronaut
        bg-transparent
        focus:outline-none
      "
      placeholder="Search for anything here"
    />
    <button
      class="
        flex
        items-center
        justify-center
        w-10
        h-10
        bg-gray-100
        focus:outline-none
        hover:outline-none
      "
      @click.prevent
    >
      <img src="icons/search-black.svg" alt="icon" />
    </button>
  </form>
</template>

<script>
export default {
  name: "PageSearch",
  data() {
    return {
      searchParam: null,
    }
  },
  methods: {
    search() {
      // implement search
    },
  },
}
</script>

<style></style>
