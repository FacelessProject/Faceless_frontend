<script setup lang="ts">
import Typer from "typed.js";
import { ref, onMounted } from "vue";
import Operate from "@/components/operate.vue";

let kind = ref("Operate");

const component: any = {
  Operate,
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

        <div class="area">
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

      .area {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
