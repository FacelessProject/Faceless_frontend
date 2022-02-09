<script setup lang="ts">
import { ref } from "vue";
import Coin from "./coin.vue";

let look = ref(false);

const open = () => (look.value = true);

const close = () => (look.value = false);
</script>

<template>
  <div id="assets">
    <div class="list">
      <n-scrollbar style="max-height: 300px">
        <div class="item" v-for="i in 20" :key="i">
          <img src="@/assets/images/load.gif" />
          <span class="name"> SBNB </span>

          <div class="info">
            <span class="info_num"> 12.42 </span>
            <span class="info_unit"> =1,242 BNB </span>
          </div>
        </div>
      </n-scrollbar>

      <div class="coin">
        <transition appear mode="out-in" name="coin">
          <Coin add @close="close" v-if="look" />
        </transition>
      </div>
    </div>

    <span class="btn" @click="open"> + ADD ASSETS </span>
  </div>
</template>

<style lang="scss" scoped>
#assets {
  display: flex;
  flex-direction: column;

  .list {
    padding: 10px 0px;
    border-radius: 8px;
    background: #1e1e2c;

    position: relative;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 10px 20px;

      img {
        width: 24px;
        height: 24px;
        border-radius: 100%;
      }

      .name {
        font-size: 18px;
        color: #ffffff;
        line-height: 18px;

        margin-left: 10px;
      }

      .info {
        flex: 1;
        display: flex;
        align-items: flex-end;
        flex-direction: column;

        .info_num {
          font-size: 16px;
          color: #ffffff;
          line-height: 16px;
        }

        .info_unit {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 12px;

          margin-top: 5px;
        }
      }
    }

    .coin {
      top: 0;
      left: 0;
      right: 0;
      position: absolute;

      display: flex;
      flex-direction: column;
    }
  }

  .btn {
    height: 60px;
    border-radius: 8px;
    border: 1px solid #958efc;

    font-size: 16px;
    color: #958efc;
    line-height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;

    cursor: pointer;
  }
}
</style>
