<script setup lang="ts">
import { computed } from "vue";
import { darkTheme } from "naive-ui";
import darkConfig from "@/assets/style/overrides/dark.json";

const _ = (n: any) => (document.documentElement.className = n);
const kind = computed(() => "theme-dark");
_(kind.value);
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="darkConfig">
    <n-notification-provider>
      <n-loading-bar-provider>
        <n-message-provider>
          <div id="app">
            <router-view v-slot="{ Component }">
              <transition appear mode="out-in" name="view">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </n-message-provider>
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  min-width: auto;
  min-height: 100vh;
  flex-direction: column;
}
</style>
