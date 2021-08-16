<template>
  <div class="overflow-x-hidden">
    <Header />
    <section class="">
      <Sidenav
        :class="{ navShow: showNav, navHide: !showNav }"
        class="sidenav"
      />

      <main :class="{ mainShift: showNav, mainFull: !showNav }" class="">
        <Leftside
          id="leftSide"
          class="w-0"
          :class="{ open: showLeftSide, close: !showLeftSide }"
        />
        <Map class="" />
        <Rightside
          v-if="rightNavStat"
          id="rightSide"
          class="w-0"
          :class="{ open: showRightSide, close: !showRightSide }"
        />
      </main>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      admin: "Solomon",
      rightNavStat: true,
    }
  },
  computed: {
    ...mapState(["showNav", "showLeftSide", "showRightSide"]),
  },

  watch: {
    showNav(val) {
      if (val) {
        this.rightNavStat = false
        setTimeout(() => {
          this.rightNavStat = true
        }, 400)
      }
    },
  },
}
</script>

<style scoped>
section {
  max-width: 100vw;
  height: 100vh;
  position: relative;
}

.sidenav {
  height: 100%;
  width: 0;
  position: absolute;
  z-index: 27;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: 0.5s;
}

main {
  position: relative;
  width: 100%;
  transition: margin-left 0.4s ease-in-out;
}

.navShow {
  width: 250px;
}

.navHide {
  width: 0;
}

.mainShift {
  margin-left: 250px;
  width: calc(100% - 250px);
}

.mainFull {
  margin-left: 0;
}

#leftSide,
#rightSide {
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#leftSide.open,
#rightSide.open {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

#leftSide.close {
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}

#rightSide.close {
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}
</style>
