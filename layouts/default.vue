<template>
  <div :class="b()">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  name: "default",
})
export default class Default extends Vue {}
</script>

<style lang="scss" src="./default.scss"></style>
