<template>
  <button :class="b('', { view })" :disabled="disabled" @click="handleClick">
    {{ params.label }}
  </button>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
