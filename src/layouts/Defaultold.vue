<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">Gridsome</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
img {
  max-width: 100%;
}
</style>
