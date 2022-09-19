<script setup lang="ts">
import { ref } from "vue";
import { AccountList } from "@/components/wallet";
import { HRIPlatform } from "@/components/common";

let back = ref(false);

let currentBusinessComponent = ref("AccountList");

const walletBusinessComponents: any = {
  AccountList,
  HRIPlatform,
};

interface LoadNextComponentParams {
  name: string;
  loadBack: boolean;
}

const loadNextComponent = ({ name, loadBack }: LoadNextComponentParams) => {
  currentBusinessComponent.value = name;
  back.value = loadBack;
};
</script>

<template>
  <div id="wallet">
    <transition appear mode="out-in" name="view">
      <component
        :loadBack="back"
        :is="walletBusinessComponents[currentBusinessComponent]"
        @loadNextComponent="loadNextComponent"
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
