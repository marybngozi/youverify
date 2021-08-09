<template>
  <div>
    <Header />
    <section class="flex">
      <Sidenav class="hidden md:block md:w-2/12" />
      <Leftside class="hidden w-10/12 md:block md:w-auto" />
      <Map class="w-12/12 md:w-4/12" />
      <Rightside class="hidden w-10/12 md:block md:w-3/12" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: "Solomon",
    }
  },
}
</script>

<style scoped></style>
