<template>
  <div class="custom-select">
    <div class="custom-select__head">
      <div class="custom-select__head-info">
        <p>
          Выберите <br />
          объём аппарата:
        </p>
        <p class="custom-select__head-indicator">
          <span>{{ orderState.value }}</span> L
        </p>
      </div>
      <div
        class="custom-select__head-btn"
        v-bind:class="{
          'custom-select__head-btn_active': selectShow,
        }"
        v-on:click="toShowSelect"
      >
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L14 14L27 1" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>
    <transition
      name="accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      style="transition: height 0.6s"
    >
      <ul class="custom-select__list" v-show="selectShow">
        <li
          v-for="(item, index) in allMainProducts"
          :key="index"
          @click="
            selectMainProduct({
              id: item.id,
              value: item.value,
              price: item.price,
              discont: item.discont,
            })
          "
        >
          {{ item.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Select",
  computed: mapGetters([
    "oneProduct",
    "oneId",
    "orderState",
    "allMainProducts",
  ]),
  data() {
    return {
      selectShow: false,
      selectedValue: 15,
    };
  },
  methods: {
    ...mapMutations(["selectMain"]),
    selectMainProduct(product) {
      this.selectMain(product);
      this.toShowSelect();
    },
    toShowSelect() {
      this.selectShow = !this.selectShow;
    },
    //Открытие селекта
    beforeEnter: function (el) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 20 + 15 + "px";
      el.style.paddingTop = "20px";
      el.style.paddingBottom = "15px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + 20 + 15 + "px";
      el.style.paddingTop = "20px";
      el.style.paddingBottom = "15px";
    },
    leave: function (el) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    },
  },
};
</script>

<style lang="scss"></style>
