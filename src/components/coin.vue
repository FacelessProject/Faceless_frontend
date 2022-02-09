<script setup lang="ts">
const emit = defineEmits(["close"]);

const close = () => emit("close");
</script>

<template>
  <div id="coin">
    <div class="coin_head">
      <span class="coin_head_name"> Sellect a token </span>
      <img src="@/assets/images/close.svg" @click="close" />
    </div>

    <div class="coin_body">
      <div class="search">
        <input
          type="text"
          placeholder="Search by token name or address"
        />
      </div>

      <n-scrollbar style="max-height: 360px">
        <div class="coin_list">
          <div class="item" v-for="i in 20" :key="i">
            <img src="@/assets/images/load.gif" />

            <div class="info">
              <span class="info_name"> BNB </span>
              <span class="info_adr"> 0xe9e……87d56 </span>
            </div>

            <span class="num"> 12.42 </span>
          </div>
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#coin {
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  background: #1e1e2c;

  .coin_head {
    height: 64px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    .coin_head_name {
      font-size: 18px;
      color: #ffffff;
      line-height: 18px;
    }

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  .coin_body {
    display: flex;
    flex-direction: column;

    padding: 15px 20px;

    .search {
      display: flex;
      flex-direction: column;

      margin-bottom: 8px;

      padding: 0px 12px;

      height: 44px;
      border-radius: 8px;
      background: #29293a;

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
    }

    .coin_list {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: all 0.5s ease-in-out;

        padding: 10px;

        img {
          width: 36px;
          height: 36px;
          border-radius: 100%;
        }

        .info {
          flex: 1;
          display: flex;
          flex-direction: column;

          margin-left: 16px;

          .info_name {
            font-size: 16px;
            color: #ffffff;
            line-height: 16px;
            transition: all 0.5s ease-in-out;
          }

          .info_adr {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
            line-height: 14px;

            margin-top: 8px;
          }
        }

        .num {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 14px;
        }

        &:hover {
          cursor: pointer;
          border-radius: 8px;
          background-color: #29293a;

          .info_name {
            color: #958efc;
          }
        }
      }
    }
  }
}
</style>
