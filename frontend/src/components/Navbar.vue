<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <i class="pi pi-compass text-2xl text-blue-600"></i>
        <span class="text-gray-800 text-xl font-bold">DaniApp</span>
      </div>

      <nav class="hidden md:flex space-x-8">
        <router-link
          to="/"
          class="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all"
        >
          Home
        </router-link>
        <router-link
          to="/table"
          class="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all"
        >
          Tabla random
        </router-link>
        <router-link
          to="/table"
          class="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all"
        >
          Otro enlace
        </router-link>
        <router-link
          to="/table"
          class="text-gray-600 hover:text-blue-600 font-medium text-sm transition-all"
        >
          About us
        </router-link>
      </nav>

      <!-- Sec. derecha -->
      <div class="flex items-center space-x-4">
        <!-- Buscar -->
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="Buscar"
            class="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <i class="pi pi-search absolute left-3 top-1 text-gray-400 text-lg"></i>
        </div>

        <!-- Notificaciones -->
        <button
          class="relative text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <i class="pi pi-bell text-xl"></i>
          <span
            class="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-500 text-white text-xs rounded-full"
          >
            3
          </span>
        </button>

        <!-- Avatar perfil -->
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="Profile"
          class="h-10 w-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
input::placeholder {
  color: #9ca3af; /* Tailwind's gray-400 */
}
</style>
