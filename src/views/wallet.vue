<script setup lang="ts">
import { ref } from "vue";
import { AccountList } from "@/components/wallet";

let currentBusinessComponent = ref("AccountList");

const walletBusinessComponents: any = {
  AccountList,
};
</script>

<template>
  <div id="wallet">
    <transition appear mode="out-in" name="view">
      <component :is="walletBusinessComponents[currentBusinessComponent]" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#wallet {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
