<template>
  <button
    :class="b('', { view, active })"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :class="[b('icon'), params.icon]"></i>
    <p :class="b('label')">{{ params.label }}</p>
  </button>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
