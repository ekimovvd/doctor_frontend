<template>
  <ul :class="b()">
    <li
      :class="[b('item'), handleItemIsActive(item)]"
      v-for="item in data"
      :key="item.value"
    >
      <button
        :class="b('button')"
        :disabled="handleButtonIsDisabled(item)"
        @click="handleItem(item)"
      >
        <p :class="b('label')">{{ item.label }}</p>
        <i
          :class="[b('icon'), item.iconSelected, handleIconIsActive(item)]"
        ></i>
      </button>
    </li>
  </ul>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
