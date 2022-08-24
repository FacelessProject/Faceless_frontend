<script setup lang="ts">
import { useRouter } from "vue-router";

const { push } = useRouter();

const home = () => push({ name: "home" });
</script>

<template>
  <div id="error">
    <div class="content">
      <img src="@/assets/images/error.svg" class="icon" />
      <span class="hint"> Oops! This page could not be found. </span>
      <n-button strong secondary round type="warning" @click="home"> Back to Homepage </n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#error {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7f6;

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    .icon {
      width: 400px;
    }

    .hint {
      font-size: 17px;
      color: #0c0e10;
      font-weight: bold;
      line-height: 17px;
      font-family: Didot-Bold;
      margin: 40px 0px;
    }
  }
}
</style>
