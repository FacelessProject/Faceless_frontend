<script setup lang="ts">
import { ref } from "vue";
import { AccountList } from "@/components/wallet";
import { HRIPlatform } from "@/components/common";
import MPhone from "@/components/RHRIPlatform/phone/index.vue";

let back = ref(false);

let currentBusinessComponent = ref("AccountList");

const walletBusinessComponents: any = {
  AccountList,
  HRIPlatform,
  MPhone,
};

interface LoadOtherComponentParams {
  name: string;
  loadBack: boolean;
}

const loadOtherComponent = ({ name, loadBack }: LoadOtherComponentParams) => {
  currentBusinessComponent.value = name;
  back.value = loadBack;
};

const userSelectedHRIPlatform = ({ name, loadBack }: LoadOtherComponentParams) => {
  currentBusinessComponent.value = name;
  back.value = loadBack;
};
</script>

<template>
  <div id="wallet">
    <transition appear mode="out-in" name="view">
      <component
        :loadBack="back"
        @userSelectedHRIPlatform="userSelectedHRIPlatform"
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
