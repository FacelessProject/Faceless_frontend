<script setup lang="ts">
import { ref } from "vue";
import { MPhone } from "@/components/platform/create";
import { AccountList, AccountItem, AddHRIPlatform } from "@/components/wallet";

let currentBusinessComponent = ref("AccountList");

const walletBusinessComponents: any = {
  AccountList,
  AccountItem,
  AddHRIPlatform,
  MPhone,
};

interface LoadOtherComponentParams {
  name: string;
}

const loadOtherComponent = ({ name }: LoadOtherComponentParams) => {
  currentBusinessComponent.value = name;
};
</script>

<template>
  <div id="wallet">
    <transition appear mode="out-in" name="view">
      <component
        :is="walletBusinessComponents[currentBusinessComponent]"
        @loadOtherComponent="loadOtherComponent"
      />
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
