<script setup lang="ts">
import { ref, watch } from "vue";
import { useWallet } from "@/store";

let loading = ref(false);

let accountList: any = ref([]);

const wallet = useWallet();

const readUserAccountList = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res([1, 2]);
    }, 3000);
  });
};

const getUserAccountList = async () => {
  loading.value = true;
  accountList.value = await readUserAccountList();
  loading.value = false;
};

watch(
  () => wallet.connect.account,
  adr => {
    if (adr) getUserAccountList();
  },
  { deep: true, immediate: true },
);
</script>

<template>
  <div id="AccountList">
    <span class="title">
      A new era of <br />
      crypto payments
    </span>

    <n-scrollbar trigger="none" style="max-height: 500px">
      <n-spin :show="loading" description="Loading accounts">
        <div class="content">
          <!-- 账号列表 -->
          <XyzTransitionGroup appear-visible xyz="fade small-3 down-25% stagger-1.5">
            <div class="item" v-for="it of accountList" :key="it">
              <span class="type"> Twitter </span>
              <span class="account"> @Hellohuman </span>
              <img src="@/assets/images/twitter.png" />
            </div>
          </XyzTransitionGroup>

          <!-- 无数据 -->
          <div class="noData" v-if="!loading && !accountList.length">
            <n-empty description="No account yet" />
          </div>
        </div>
      </n-spin>
    </n-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
#AccountList {
  flex: 0;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  width: 550px;
  overflow: hidden;
  border-radius: 18px;
  background-color: #1a2736;

  padding: 65px 100px;

  .title {
    font-size: 37px;
    font-weight: 600;
    color: #ffffff;
    line-height: 40px;
    text-align: center;
    font-family: "JosefinSans-Medium";
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    min-height: 200px;

    .item {
      display: flex;
      flex-direction: column;
      position: relative;

      height: 135px;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
      }

      .type {
        font-size: 15px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        line-height: 15px;
        font-family: "JosefinSans-Regular";
        padding: 0px 16px;
        margin-top: 16px;
        z-index: 1;
      }

      .account {
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        line-height: 24px;
        font-family: "Ubuntu-Medium";
        padding: 0px 16px;
        margin-top: 8px;
        z-index: 1;
      }
    }

    .noData {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
