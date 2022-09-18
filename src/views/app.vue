<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ConnectWallet from "@/plugins/wallet/render/index.vue";

let currentRoute = ref("wallet");

const { push } = useRouter();

const toRoute = (route: string) => {
  currentRoute.value = route;
  push(`/${route}`);
};
</script>

<template>
  <div id="app">
    <div class="head">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>

      <div class="swap">
        <div :class="[`swap_content`, currentRoute]">
          <span class="swap_item" @click="toRoute(`wallet`)"> HRI Wallets </span>
          <span class="swap_item" @click="toRoute(`transfer`)"> Transfer </span>
          <span class="piece" />
        </div>
      </div>

      <div class="connect">
        <div class="btn">
          <ConnectWallet />
        </div>
      </div>
    </div>

    <div class="content">
      <router-view v-slot="{ Component }">
        <transition appear mode="out-in" name="view">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  flex: 1;
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    top: 0;
    position: sticky;
    backdrop-filter: blur(7px);
    padding: 16px;
    z-index: 1;

    .logo {
      flex: 1;
      display: flex;
      align-items: center;

      img {
        width: 120px;
      }
    }

    .connect {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn {
        display: flex;
        flex-direction: column;

        width: 210px;
        height: 40px;
      }
    }

    .swap {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .swap_content {
        width: 240px;
        height: 40px;
        background: rgba(120, 120, 128, 0.18);
        border-radius: 50px;

        display: flex;
        position: relative;
        justify-content: space-between;

        overflow: hidden;

        .swap_item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 15px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          font-family: "Ubuntu-Regular";
          line-height: 15px;

          transition: all 0.5s;
          cursor: pointer;
          z-index: 1;
        }

        .piece {
          left: 0px;
          width: 120px;
          height: 40px;
          position: absolute;
          background: #0085ff;
          transition: all 0.5s;
          border-radius: 50px;
        }
      }

      .wallet {
        span:nth-child(1) {
          color: #ffffff;
        }

        span:last-child {
          animation: walletRubberBand 1s forwards;
        }
      }

      .transfer {
        span:nth-child(2) {
          color: #ffffff;
        }

        span:last-child {
          animation: transferRubberBand 1s forwards;
        }
      }
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
}

@keyframes walletRubberBand {
  from {
    left: 120px;
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    left: 0px;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes transferRubberBand {
  from {
    left: 0px;
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    left: 120px;
    transform: scale3d(1, 1, 1);
  }
}
</style>
