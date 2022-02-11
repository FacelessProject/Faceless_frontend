<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit", "login"]);

const submit = () => emit("submit");

const login = () => emit("login");

let look = ref(false);

const generator = () => (look.value = true);
</script>

<template>
  <div id="signup">
    <span class="title"> Register Your Suterusu Account </span>

    <span class="hint">
      Please use our key generator or use a key that is as random as
      your Metamask wallet private key as the Suter account private
      key, and copy it on paper for safekeeping.Never share your
      private key with others.
    </span>

    <transition appear mode="out-in" name="key">
      <div class="key" v-if="look">
        <span class="value">
          4e55e09ec478b0df903b5ffc3f83a81df141970e875b4dc4b4502fd1396130e7b4502fd1396130e7
        </span>

        <img src="@/assets/images/visibility_off_black.svg" />
      </div>
    </transition>

    <span class="generator" @click="generator"> KEY GENERATOR </span>

    <span class="or"> or </span>

    <span class="pick" @click="submit"> PICK YOUR OWN KEY </span>

    <div class="cut">
      Already have an account?
      <span class="login" @click="login"> Login </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#signup {
  flex: 1;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
  }

  .hint {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 20px;
    text-align: center;

    margin-bottom: 40px;

    margin-top: 28px;
  }

  .key {
    border-radius: 8px;
    background: #1e1e2c;
    border: 1px solid rgba(255, 255, 255, 0.5);

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;

    .value {
      flex: 1;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
      word-break: break-all;
    }

    img {
      width: 24px;
      height: 24px;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .generator {
    height: 60px;
    border-radius: 8px;
    background: #958efc;

    font-size: 16px;
    color: #ffffff;
    line-height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .or {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 16px;
    text-align: center;

    margin: 12px 0px;
  }

  .pick {
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

    .login {
      color: #958efc;
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>
