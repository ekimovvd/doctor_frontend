<template>
  <div :class="b()">
    <VButton
      :params="UiButton"
      :active="UiSelectIsShow"
      @click.stop="handleUiSelectIsShow"
    />
    <VSelect
      :class="b('select', { show })"
      v-click-outside="handleUiSelectClose"
      :params="UiSelect"
      :data="UiSelectData"
      :value="language"
      @select="handleLanguage"
    />
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
