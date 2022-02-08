<script setup lang="ts">
import Input from "./input.vue";
</script>

<template>
  <div id="transfer">
    <Input>
      <template #default>
        <div class="unit">1 Unit BNB = 0.01 BNB</div>

        <div class="adr">
          <div class="adr_hander">
            <span class="adr_hander_name"> Recipient Address </span>

            <span class="adr_hander_look">
              My Suter Account Address
            </span>
          </div>

          <textarea rows="5" />
        </div>
      </template>
    </Input>
  </div>
</template>

<style lang="scss" scoped>
#transfer {
  display: flex;
  flex-direction: column;

  .unit {
    font-size: 14px;
    color: #ffffff;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
  }

  .adr {
    display: flex;
    flex-direction: column;

    margin-top: 48px;

    .adr_hander {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .adr_hander_name {
        font-size: 14px;
        line-height: 14px;
        color: rgba(255, 255, 255, 0.8);
      }

      .adr_hander_look {
        font-size: 14px;
        color: #958efc;
        line-height: 14px;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    textarea {
      border: none;
      outline: none;
      font-style: normal;
      background-color: transparent;

      border-radius: 8px;
      background: rgba(29, 29, 34, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.5);

      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
      color: rgba(255, 255, 255, 0.8);

      margin-top: 12px;

      padding: 20px;
    }
  }
}
</style>
