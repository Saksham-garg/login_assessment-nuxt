<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <nav class="bg-white border-b shadow-sm">
        <div class="container mx-auto flex items-center justify-between p-4">
          <div class="text-2xl font-bold text-gray-800">Brand</div>
          <div class="flex items-center space-x-6">
            <MyNavLink
              to="/"
              activeClass="text-gray-600 hover:text-blue-500 transition"
              >Home</MyNavLink
            >
            <MyNavLink
              to="/about"
              class="text-gray-600 hover:text-blue-500 transition"
              >About</MyNavLink
            >
            <Button
              class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style scoped></style>
