<template>
  <nav class="h-screen bg-chill">
    <div class="bg-elm py-4 px-5 text-ice font-bold">
      <h2 class="text-xl">Cheta And Daughters Limited</h2>
      <p class="font-light">RC123456789</p>
    </div>

    <div class="pt-8">
      <ul>
        <li class="mb-5">
          <NuxtLink
            class="
              active
              flex
              text-white
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/briefcase.svg" alt="icons" />
            <span> Dashboard </span>
          </NuxtLink>
        </li>
        <li class="mb-5">
          <NuxtLink
            class="
              flex
              text-ice
              border-l-3 border-chill
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/people.svg" alt="icons" />
            <span> Agents </span>
          </NuxtLink>
        </li>
        <li class="mb-5">
          <NuxtLink
            class="
              flex
              text-ice
              border-l-3 border-chill
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/tasks.svg" alt="icons" />
            <span> Task </span>
          </NuxtLink>
        </li>
        <li class="mb-5">
          <NuxtLink
            class="
              flex
              text-ice
              border-l-3 border-chill
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/teams.svg" alt="icons" />
            <span> Teams </span>
          </NuxtLink>
        </li>
        <li class="mb-5">
          <NuxtLink
            class="
              flex
              text-ice
              border-l-3 border-chill
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/users.svg" alt="icons" />
            <span> Users </span>
          </NuxtLink>
        </li>
        <li class="mb-5">
          <NuxtLink
            class="
              flex
              text-ice
              border-l-3 border-chill
              px-6
              py-3
              space-x-3
              hover:bg-pelorous hover:text-white
            "
            to="/"
          >
            <img src="icons/settings.svg" alt="icons" />
            <span> Settings </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
li .active {
  background-color: #46b2c8;
  border-left: 3px solid #fff;
}
.border-l-3 {
  border-left: 3px solid #0f808c;
}
</style>
