<template>
  <div :class="b()" v-click-outside="handleUiSelectClose">
    <VButton
      :params="UiButton"
      :active="UiSelectIsShow"
      @click="handleUiSelectIsShow"
    />
    <VSelect
      :class="b('select', { show })"
      :params="UiSelect"
      :data="UiSelectData"
    >
      button
    </VSelect>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
