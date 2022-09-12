<template>
  <div :class="b()">
    <VButton :params="getUiButton" @click="handleTheme" />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
