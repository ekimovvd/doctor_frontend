<template>
  <component
    :class="b()"
    :is="getComponent"
    :data="data"
    :value="value"
    @select="handleSelect"
  />
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
