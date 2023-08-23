import "./scss/style.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import { createApp } from "vue";
import App from "./vue/App.vue";
import store from "./vue/store";
// import "./js/smoothScroll.js";

createApp(App).use(store).mount("#app");
