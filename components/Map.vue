<template>
  <section>
    <GMap
      ref="gMap"
      language="en"
      :center="mapCord"
      :options="mapOptions"
      :zoom="8"
      class="z-10"
    >
    </GMap>
  </section>
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
    }
  },
}
</script>

<style scoped></style>
