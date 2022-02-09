<script setup lang="ts">
import { ref } from "vue";
import Deposit from "@/components/deposit.vue";
import Transfer from "@/components/transfer.vue";
import Assets from "@/components/assets.vue";

let kind = ref("Deposit");

const component: any = {
  Deposit,
  Transfer,
  Assets,
};

const name: any = {
  Deposit: "Deposit",
  Transfer: "Transfer",
  Assets: "My Assets",
};
</script>

<template>
  <div id="operate">
    <div class="tab">
      <span class="kind" @click="kind = 'Deposit'"> Deposit </span>

      <span class="kind" @click="kind = 'Transfer'"> Transfer </span>

      <span class="kind" @click="kind = 'Assets'"> My Assets </span>

      <span :class="{ bar: true, [kind]: true }">
        {{ name[kind] }}
      </span>
    </div>

    <div class="content">
      <transition appear mode="out-in" :name="kind">
        <component :is="component[kind]" />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#operate {
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 95px;

  .tab {
    width: 300px;
    height: 44px;
    border-radius: 8px;
    background: #1e1e2c;

    display: flex;
    justify-content: space-between;
    position: relative;

    .kind {
      flex: 1;
      font-size: 14px;
      color: #85858d;
      line-height: 14px;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .bar {
      top: 0;
      left: 0;
      bottom: 0;
      position: absolute;

      width: 33.33%;
      font-size: 14px;
      color: #1a1a1b;
      line-height: 14px;
      border-radius: 8px;
      background: #ffffff;
      transition: all 0.5s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .Deposit {
      left: 0;
    }

    .Transfer {
      left: 33.33%;
    }

    .Assets {
      left: 66.66%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
}
</style>
