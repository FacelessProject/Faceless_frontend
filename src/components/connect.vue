<script setup lang="ts">
import { ref } from "vue";
import Login from "@/components/login.vue";
import Signup from "@/components/signup.vue";
import Submit from "@/components/submit.vue";

const component: any = {
  Login,
  Signup,
  Submit,
};

let kind = ref("Login");

const emit = defineEmits(["back"]);

const login = () => (kind.value = "Login");

const signup = () => (kind.value = "Signup");

const submit = () => (kind.value = "Submit");

const back = () => {
  switch (kind.value) {
    case "Signup":
      kind.value = "Login";
      break;

    case "Submit":
      kind.value = "Signup";
      break;

    default:
      emit("back");
      break;
  }
};
</script>

<template>
  <div id="connect">
    <div class="back" @click="back">
      <img src="@/assets/images/arrow.svg" />
      <span class="name"> Back </span>
    </div>

    <div class="container">
      <transition appear mode="out-in" :name="kind">
        <component
          @login="login"
          @submit="submit"
          @signup="signup"
          :is="component[kind]"
        />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#connect {
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 35px;

  .back {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      transition: all 0.3s;
    }

    .name {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      line-height: 16px;
      margin-left: 5px;
    }

    &:hover img {
      transform: translateX(-5px);
    }
  }

  .container {
    display: flex;
    flex-direction: column;

    margin-top: 42px;
  }
}
</style>
