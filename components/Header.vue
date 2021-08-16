<template>
  <header class="sticky top-0 border-b-2 bg-white">
    <div class="flex py-3 px-2 justify-between z-30">
      <NuxtLink
        class="
          w-4/12
          md:w-2/12
          focus:outline-none
          hover:outline-none
          ml-0
          md:ml-4
        "
        to="/"
      >
        <img class="w-28 md:w-36" src="/logo.png" alt="youverify logo" />
      </NuxtLink>

      <div class="flex space-x-2 w-4/12 md:w-7/12">
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
          @click="toogleShowNav"
        >
          <img :src="`icons/${arrow}-arrow.svg`" alt="icon" />
        </button>

        <!-- search and search toggle button -->
        <PageSearch
          bg="bg-gray-100"
          :showSelect="true"
          class="hidden md:flex w-full"
        />
      </div>

      <div class="flex justify-end space-x-2 w-4/12 md:w-3/12 md:space-x-4">
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

          <div class="relative pt-2">
            <button
              class="
                focus:outline-none
                hover:outline-none
                flex
                items-center
                justify-center
              "
              @click="showUserMenu()"
            >
              <span
                class="text-sm hidden md:block text-astronaut mx-3 self-center"
              >
                Solomon
              </span>
              <img src="icons/angle-down.svg" alt="icons" />
            </button>

            <!-- user menu -->
            <transition name="fade">
              <div
                v-if="showUser"
                class="absolute top-14 right-0 rounded-md shadow-lg w-48"
              >
                <div
                  class="
                    px-2
                    py-2
                    bg-white
                    rounded-md
                    shadow
                    dark-mode:bg-gray-800
                  "
                >
                  <p
                    class="
                      text-sm
                      block
                      md:hidden
                      text-astronaut
                      mx-3
                      self-center
                    "
                  >
                    Solomon
                  </p>
                  <a class="block px-4 py-2 mt-2" href="#">Profile</a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- search and search toggle button -->
    <PageSearch class="block md:hidden w-100" />
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      showUser: false,
    }
  },
  computed: {
    ...mapState(["showNav"]),

    arrow() {
      return this.showNav ? "right" : "left"
    },
  },

  methods: {
    ...mapMutations(["toogleShowNav"]),

    showUserMenu() {
      this.showUser = !this.showUser
    },
  },
}
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
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
