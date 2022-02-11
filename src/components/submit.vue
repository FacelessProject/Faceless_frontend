<script setup lang="ts">
import { useConfig } from "@/store";

const emit = defineEmits(["login"]);

const login = () => emit("login");

const config = useConfig();

const load = () => config.$patch({ load: true });
</script>

<template>
  <div id="submit">
    <span class="title"> Register Your Suterusu Account </span>

    <div class="input">
      <div class="item">
        <span class="name">
          Input Your Suter Shield Private Key
        </span>

        <div class="key">
          <input
            type="text"
            placeholder="Input Your Suter Shield Private Key"
          />

          <img src="@/assets/images/visibility_black.svg" />
        </div>
      </div>

      <div class="item">
        <span class="name">
          Confirm Your Suter Shield Private Key
        </span>

        <div class="key">
          <input
            type="text"
            placeholder="Input Your Suter Shield Private Key"
          />

          <img src="@/assets/images/visibility_black.svg" />
        </div>
      </div>
    </div>

    <div class="security">
      <input type="checkbox" />

      <span class="text">
        I choose a sufficiently random Suter Account private key. I
        will be responsible for its security.
      </span>
    </div>

    <span class="btn" @click="load"> REGISTER </span>

    <div class="cut">
      Already have an account?
      <span class="login" @click="login"> Login </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#submit {
  flex: 1;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
  }

  .input {
    display: flex;
    flex-direction: column;

    margin-top: 80px;

    .item {
      display: flex;
      flex-direction: column;

      margin-bottom: 20px;

      .name {
        font-size: 14px;
        line-height: 14px;
        color: rgba(255, 255, 255, 0.85);

        margin-bottom: 12px;
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
    }
  }

  .security {
    display: flex;
    align-items: center;

    margin-top: 5px;

    input {
      cursor: pointer;
      position: relative;

      &:after {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: 1px solid #958efc;
        overflow: hidden;

        top: -2.5px;
        content: " ";
        position: absolute;
        background-color: #10111e;
      }

      &:checked:after {
        content: "✓";
        font-size: 12px;
        color: #ffffff;
        background-color: #958efc;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .text {
      font-size: 14px;
      line-height: 17px;
      color: rgba(255, 255, 255, 0.7);
      word-break: break-word;
      margin-left: 15px;
    }
  }

  .btn {
    height: 60px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);

    font-size: 16px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 42px;

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

    .login {
      color: #958efc;
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>
