<script setup lang="ts">
import Typer from "typed.js";
import { ref, onMounted } from "vue";
import Deposit from "@/components/deposit.vue";
import Transfer from "@/components/transfer.vue";

let kind = ref("Deposit");

const component: any = {
  Deposit,
  Transfer,
};

const init = () => {
  new Typer("#typer", {
    loop: true,
    shuffle: true,
    backSpeed: 50,
    typeSpeed: 130,
    backDelay: 1500,
    cursorChar: "_",
    smartBackspace: true,
    stringsElement: undefined,
    strings: ["BNB", "BUSD", "LINK", "SHIB", "UNI"],
  });
};

onMounted(init);
</script>

<template>
  <div id="index">
    <div class="banner">
      <video src="@/assets/images/bg.mp4" autoplay muted loop />

      <div class="mask" />

      <div class="center">
        <div class="title">
          <span class="hint"> Privately transfer </span>

          <div class="hint">your <span id="typer" /></div>

          <span class="hint"> via Sutershield </span>
        </div>
      </div>

      <img src="@/assets/images/logo.svg" class="logo" />
    </div>

    <div class="hander">
      <div class="container">
        <div class="header">Connect wallet</div>

        <div class="tab">
          <span class="kind" @click="kind = 'Deposit'">
            Deposit
          </span>

          <span class="kind" @click="kind = 'Transfer'">
            Transfer
          </span>

          <span :class="{ bar: true, [kind]: true }">
            {{ kind }}
          </span>
        </div>

        <div class="content">
          <transition appear mode="out-in" :name="kind">
            <component :is="component[kind]" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#index {
  flex: 1;
  display: flex;
  justify-content: space-between;

  .banner {
    width: 55%;
    background: #d8d8d8;

    display: flex;
    flex-direction: column;

    position: relative;

    video {
      flex: 1;
      object-fit: cover;
    }

    .mask {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      background-image: url("@/assets/images/mask.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .center {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        display: flex;
        flex-direction: column;

        .hint {
          font-size: 60px;
          font-weight: 600;
          color: #ffffff;
          line-height: 60px;
          font-family: Poppins-SemiBold, Poppins;

          display: flex;
          align-items: center;

          margin: 20px 0px;

          #typer {
            color: #e85c37;
            margin-left: 20px;
          }
        }
      }
    }

    .logo {
      top: 30px;
      left: 100px;
      width: 150px;
      position: absolute;
    }
  }

  .hander {
    width: 45%;
    background: #10111e;

    display: flex;
    justify-content: center;

    .container {
      width: 70%;
      padding: 30px 0px;

      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        color: #958efc;
      }

      .tab {
        width: 200px;
        height: 44px;
        border-radius: 8px;
        background: #1e1e2c;

        display: flex;
        justify-content: space-between;
        position: relative;

        margin-top: 95px;

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

          width: 50%;
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
          left: 50%;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
      }
    }
  }
}
</style>
