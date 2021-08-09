<template>
  <div>
    <Header />
    <section class="block">
      <Sidenav class="w-0" />
      <main class="relative">
        <Leftside class="w-0" />
        <Map class="w-12/12" />
        <Rightside class="w-0" />
      </main>
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
