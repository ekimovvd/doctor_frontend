<template>
  <router-link :class="b('', { view })" :to="params.to">
    <VImg :params="params.img" />
    <p :class="b('label')">{{ UiLabel }}</p>
  </router-link>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
