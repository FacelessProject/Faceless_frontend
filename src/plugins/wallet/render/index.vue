<script setup lang="ts">
import { build } from "../interface";
</script>

<template>
  <div id="wallet">
    <div class="chain">
      <div class="chain_item">
        <img :src="build.icon" />
        <span class="chain_item_name">
          {{ build.name }}
        </span>
      </div>
    </div>

    <div class="app">
      <div class="app_item" v-for="it in build.include">
        <img :src="it.icon" />
        <span class="app_item_name">
          {{ it.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#wallet {
  display: flex;
  flex-direction: column;

  .chain {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .chain_item {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;
      background: rgba(228, 228, 228, 0.1);

      padding: 10px 15px;

      img {
        width: 24px;
        height: 24px;
        border-radius: 100%;
      }

      .chain_item_name {
        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
        line-height: 12px;
        margin-left: 5px;
      }
    }
  }

  .app {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-top: 2px solid #808191;
    padding-top: 20px;
    margin-top: 20px;

    .app_item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      transition: all 0.5s ease-in-out;

      width: 100px;
      height: 100px;
      border-radius: 8px;
      margin: 0px 20px 20px 0px;

      img {
        width: 55px;
        height: 55px;
        border-radius: 100%;
      }

      .app_item_name {
        font-size: 12px;
        font-weight: 400;
        margin-top: 10px;
        line-height: 12px;
        color: #ffffff80;
        transition: all 0.5s ease-in-out;
      }

      &:hover {
        cursor: pointer;
        background: rgba(228, 228, 228, 0.1);

        .app_item_name {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
