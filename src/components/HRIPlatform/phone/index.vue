<script setup lang="ts">
import { ref } from "vue";
import { EnterPhoneNumber, EnterCode } from "./process";

let back = ref(false);

let currentBusinessComponent = ref("EnterPhoneNumber");

const emits = defineEmits(["loadOtherComponent"]);

const phoneBusinessComponents: any = {
  EnterPhoneNumber,
  EnterCode,
};

interface LoadOtherComponentParams {
  name: string;
  loadBack: boolean;
}

const loadOtherComponent = ({ name, loadBack }: LoadOtherComponentParams) => {
  currentBusinessComponent.value = name;
  back.value = loadBack;
};

const backParentComponent = (params: LoadOtherComponentParams) => {
  emits("loadOtherComponent", params);
};
</script>

<template>
  <div id="phone">
    <transition mode="out-in" name="view">
      <component
        :loadBack="back"
        @backParentComponent="backParentComponent"
        :is="phoneBusinessComponents[currentBusinessComponent]"
        @loadOtherComponent="loadOtherComponent"
      />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#phone {
  flex: 0;
  display: flex;
  flex-direction: column;
}
</style>
