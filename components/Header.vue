<template>
  <header
    class="sticky top-0 border-b-2 flex py-3 px-2 justify-between z-30 bg-white"
  >
    <div>
      <NuxtLink class="focus:outline-none hover:outline-none" to="/">
        <img class="w-28" src="/logo.png" alt="youverify logo" />
      </NuxtLink>
    </div>

    <div class="flex space-x-2">
      <!-- side menu toggle button -->
      <button
        class="
          flex
          items-center
          justify-center
          rounded-full
          shadow
          w-10
          h-10
          focus:outline-none
          hover:outline-none
        "
      >
        <img src="icons/left-arrow.svg" alt="icon" />
      </button>

      <!-- search toggle button -->
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
      >
        <img src="icons/search-black.svg" alt="icon" />
      </button>
    </div>

    <div class="flex space-x-2">
      <button
        class="
          rounded-xl
          w-10
          h-10
          bg-icelight
          focus:outline-none
          hover:outline-none
          notify
          flex
          items-center
          justify-center
        "
      >
        <img src="icons/bell.svg" alt="icons" class="" />
        <div
          id="active"
          class="
            rounded-full
            bg-red-700
            h-2
            w-2
            text-xs text-white
            flex
            items-center
            justify-center
          "
        >
          <span>2</span>
        </div>
      </button>

      <div class="flex">
        <img
          src="~/assets/images/7.png"
          class="rounded-full h-10 w-10"
          alt="user pics"
        />
        <span class="text-sm hidden md:block text-astronaut mx-3 self-center">
          Solomon
        </span>
        <button
          class="
            focus:outline-none
            hover:outline-none
            flex
            items-center
            justify-center
          "
        >
          <img src="icons/angle-down.svg" alt="icons" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  z-index: 100;
}

.notify {
  position: relative;
}
.notify #active {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.7em;
  margin-top: 2px;
  margin-right: 2px;
  /* color: #daf3f8; */
}
</style>
