<template>
  <form
    @submit.prevent
    :class="formClass"
    class="items-center flex justify-between"
  >
    <select
      v-if="showSelect"
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
      :class="{ textColor }"
      class="
        inline-block
        w-full
        text-sm
        px-2
        leading-none
        bg-transparent
        focus:outline-none
      "
      :placeholder="pholder"
    />

    <button
      v-if="showSelect"
      :class="{ 'bg-pelorous px-1.5': !showSelect }"
      class="
        flex
        items-center
        justify-center
        bg-transparent
        w-10
        h-10
        focus:outline-none
        hover:outline-none
      "
      @click.prevent
    >
      <img :src="`icons/${searchIcon}.svg`" alt="icon" />
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

  computed: {
    searchIcon() {
      return this.showSelect ? "search-black" : "search"
    },

    formClass() {
      return !this.showSelect ? `py-2.5 pl-1.5 ${this.bg}` : this.bg
    },
  },

  props: {
    showSelect: {
      type: Boolean,
      default: true,
    },
    bg: {
      type: String,
      default: "bg-gray-100",
    },
    textColor: {
      type: String,
      default: "text-astronaut",
    },
    pholder: {
      type: String,
      default: "Search for anything here",
    },
  },

  methods: {
    search() {
      // implement search
    },
  },
}
</script>

<style></style>
