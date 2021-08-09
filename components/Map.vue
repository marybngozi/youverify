<template>
  <main>
    <GMap
      ref="gMap"
      language="en"
      :center="mapCord"
      :options="mapOptions"
      :zoom="8"
      class="z-10 h-screen"
    >
    </GMap>

    <!-- <div class="btn-nav">
      <div class="flex justify-between">
        <button
          class="bg-black flex items-center justify-center h-11 w-11 z-20"
        >
          <img src="/icons/angle-right.svg" alt="icon" />
        </button>
        <button
          class="bg-black flex items-center justify-center h-11 w-11 z-20"
        >
          <img src="/icons/angle-left.svg" alt="icon" />
        </button>
      </div>
    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      mapCord: {
        lat: 8.992459,
        lng: 7.4678353,
      },
      mapOptions: {
        mapTypeId: "roadmap",
        mapTypeControl: false,
        fullscreenControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: true,
        rotateControl: true,
      },
      // apiKey: "AIzaSyBg4ewkblnPho2Ae3GuGroqRt2G0Z2ohnE",
    }
  },
}
</script>

<style scoped>
/* main {
  position: relative;
}

div.btn-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
} */
.GMap__Wrapper {
  height: 100vh !important;
  z-index: 10;
}
</style>
