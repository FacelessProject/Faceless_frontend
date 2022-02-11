<script setup lang="ts">
import { useConfig } from "@/store";
import Wallet from "@/plugins/wallet/render/index.vue";

const emit = defineEmits(["signup"]);

const signup = () => emit("signup");

const config = useConfig();

const load = () => config.$patch({ load: true });
</script>

<template>
  <div id="login">
    <span class="step1"> 1-Connect Wallet </span>

    <div class="wallet">
      <Wallet />
    </div>

    <span class="step2"> 2-Suter Shield Account </span>

    <!-- 未登录 -->
    <template v-if="true">
      <div class="key">
        <input
          type="text"
          placeholder="Input Your Suter Shield Private Key"
        />

        <img src="@/assets/images/visibility_black.svg" />
      </div>

      <span class="btn" @click="load"> LOGIN </span>

      <div class="cut">
        Don’t have an account?
        <span class="signup" @click="signup"> Sign up </span>
      </div>
    </template>

    <!-- 已登录 -->
    <template v-else>
      <span class="suter"> My Suter Account Address </span>

      <div class="suter_adr">
        <span class="suter_adr_val">
          0x2d1265b5ca329a29059fafbd7c09946b68059aeb7547ea619c533d8272eb7bb204267c304820a5d8a9fdb2b5ffc2d3ec45f0171585f32d523b42ace6e843c6ab
        </span>

        <img src="@/assets/images/copy.svg" />
      </div>

      <span class="switch"> Switch to another account </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
#login {
  flex: 1;
  display: flex;
  flex-direction: column;

  .step1 {
    font-size: 18px;
    color: #ffffff;
    line-height: 18px;
  }

  .wallet {
    display: flex;
    flex-direction: column;
    margin: 20px 0px 40px 0px;
  }

  .step2 {
    font-size: 18px;
    color: #ffffff;
    line-height: 18px;
  }

  .key {
    height: 64px;
    border-radius: 8px;
    background: #1e1e2c;
    border: 1px solid rgba(255, 255, 255, 0.5);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    margin: 20px 0px;

    input {
      flex: 1;
      border: none;
      outline: none;
      font-style: normal;
      background-color: transparent;

      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 14px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    img {
      width: 24px;
      height: 24px;
      margin-left: 10px;
      cursor: pointer;
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

    cursor: pointer;
  }

  .cut {
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 40px;

    .signup {
      color: #958efc;
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .suter {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 14px;
    margin: 20px 0px 15px 0px;
  }

  .suter_adr {
    border-radius: 8px;
    background: rgba(29, 29, 34, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    .suter_adr_val {
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      color: rgba(255, 255, 255, 0.7);
      word-break: break-all;
    }

    img {
      width: 24px;
      height: 24px;
      margin-left: 20px;
      cursor: pointer;
    }
  }

  .switch {
    font-size: 14px;
    font-weight: 500;
    color: #958efc;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 40px;

    cursor: pointer;
  }
}
</style>
