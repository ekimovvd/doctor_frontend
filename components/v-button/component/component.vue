<template>
  <component
    :class="b()"
    :is="getComponent"
    :params="params"
    :active="active"
    :disabled="disabled"
    @click="handleClick"
  />
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
