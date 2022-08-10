import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./plugins/i18n";
import naive from "./plugins/naive";
import { createPinia } from "pinia";

import "normalize.css";
import "./assets/style/reset.scss";
import "./assets/font/poppins.scss";
import "./assets/style/global.scss";
import "./assets/style/animation.scss";

import "./assets/js/TweenMax.min.js";
import "./assets/js/SplitText.min.js";

createApp(App).use(i18n).use(naive).use(router).use(createPinia()).mount("#app");
