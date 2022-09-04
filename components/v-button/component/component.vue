<template>
  <component
    :class="b()"
    :is="getComponent"
    :params="params"
    @click="handleClick"
  />
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
