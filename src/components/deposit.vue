<script setup lang="ts">
import Input from "./input.vue";
</script>

<template>
  <div id="deposit">
    <Input>
      <template #default>
        <div class="unit">1 Unit BNB = 0.01 BNB</div>
      </template>
    </Input>
  </div>
</template>

<style lang="scss" scoped>
#deposit {
  display: flex;
  flex-direction: column;

  .unit {
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
  }
}
</style>
