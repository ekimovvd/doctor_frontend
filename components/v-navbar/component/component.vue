<template>
  <div :class="b()">
    <div :class="b('container')" class="container container--min">
      <VNavbarLogo />
      <div :class="b('group')">
        <VNavbarProfile />
        <VNavbarTheme />
        <VNavbarLanguage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
