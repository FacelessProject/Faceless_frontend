<script setup lang="ts">
defineProps({ load: { type: Boolean, default: false } });
</script>

<template>
  <transition appear mode="out-in" name="load">
    <div id="load" v-if="load">
      <div class="content">
        <span class="name"> Processing Your Request </span>

        <span class="hint">
          Don’t referesh your page and it might take up to 2-3 minutes
          to complete your request.
        </span>

        <n-spin size="small" />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
#load {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  backdrop-filter: blur(10px);
  background: rgba(16, 17, 30, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 330px;
    border-radius: 20px;
    background: #10111e;
    border: 1px solid #958efc;

    padding: 30px 20px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .name {
      width: 180px;
      font-size: 24px;
      color: #ffffff;
      line-height: 33px;
      text-align: center;
    }

    .hint {
      font-size: 14px;
      line-height: 21px;
      padding: 20px 0px 30px 0px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }
}
</style>
