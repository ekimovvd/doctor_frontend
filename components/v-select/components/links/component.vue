<template>
  <ul :class="b()">
    <li :class="b('item')" v-for="item in data" :key="item.to">
      <nuxt-link :class="b('link')" :to="item.to">
        <div :class="b('icon-block')">
          <i :class="[b('icon'), item.icon]"></i>
        </div>
        <p :class="b('label')">{{ item.label }}</p>
      </nuxt-link>
    </li>
    <slot></slot>
  </ul>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
