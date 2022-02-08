<script setup lang="ts"></script>

<template>
  <div id="input">
    <div class="token">
      <div class="coin">
        <span class="coin_name"> Sellect a token </span>
        <img src="@/assets/images/select.svg" />
      </div>

      <div class="balance">
        <span class="balance_name"> Balance: </span>
        <span class="balance_value"> - </span>
      </div>
    </div>

    <div class="money">
      <input type="number" placeholder="0.00" />

      <span class="max"> MAX </span>
    </div>

    <slot name="default" />

    <span class="btn"> SELLECT A TOKEN </span>
  </div>
</template>

<style lang="scss" scoped>
#input {
  display: flex;
  flex-direction: column;

  .token {
    height: 64px;
    border-radius: 8px;
    background: #1e1e2c;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    .coin {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .coin_name {
        font-size: 18px;
        color: #ffffff;
        line-height: 18px;
      }

      img {
        width: 8px;
        margin-left: 10px;
      }
    }

    .balance {
      display: flex;
      align-items: center;
      justify-content: center;

      .balance_name {
        font-size: 14px;
        line-height: 14px;
        color: rgba(255, 255, 255, 0.5);
      }

      .balance_value {
        font-size: 14px;
        line-height: 14px;
        color: rgba(255, 255, 255, 0.5);
        margin-left: 10px;
      }
    }
  }

  .money {
    height: 64px;
    border-radius: 8px;
    background: #1e1e2c;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    margin-top: 12px;

    input {
      flex: 1;
      border: none;
      outline: none;
      font-style: normal;
      background-color: transparent;

      font-size: 36px;
      line-height: 36px;
      color: #ffffff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    .max {
      width: 60px;
      height: 24px;
      background: rgba(255, 255, 255, 0.1);

      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.3);
      line-height: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

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

    margin-top: 48px;

    cursor: default;
  }
}
</style>
