<template>
  <section id="instant">
    <div class="content-container">
      <div class="grid-box">
        <div class="title-box">
          <h3 class="title-box__title">Начните гнать самогон сразу</h3>
          <p class="title-box__subtitle">
            Все 7 режимов доступны уже в базовой комплектации
          </p>
        </div>
        <TransitionGroup name="fade" tag="div" class="instant__img-wrap">
          <div
            v-for="(el, id) in allMainProducts"
            :key="id"
            v-show="el.value == selectedModel.value"
            class="instant__img-box"
          >
            <picture>
              <source
                :srcset="`new-site-vue/build/images/instant/f-${el.value}.webp`"
                type="image/webp"
              />
              <img
                :src="`new-site-vue/build/images/instant/f-${el.value}.png`"
                alt="Финляндия Экстра"
              />
            </picture>
          </div>
        </TransitionGroup>

        <div class="instant__product-wrap">
          <div class="instant__product-togglers">
            <div
              v-for="(el, id) in allMainProducts"
              :key="id"
              @click="selectModel(el)"
              :class="{
                'instant__product-toggler_active':
                  el.value == selectedModel.value,
              }"
              class="instant__product-toggler"
            >
              {{ el.value }} л
            </div>
          </div>
          <div class="instant__product-info">
            <div class="instant__oldprice-wrap">
              <div class="instant__discont">
                <span>-{{ selectedModel.discont }}%</span>
              </div>
              <p class="instant__oldprice">{{ selectedModel.oldPrice }} руб.</p>
            </div>
            <p class="instant__price">{{ selectedModel.price }} руб.</p>
            <div class="instant__present-wrap">
              <div class="instant__present-img">
                <img
                  src="new-site-vue/build/images/instant/gift.svg"
                  alt="Финляндия Экстра"
                />
              </div>
              <div class="instant__present-context">
                <p class="instant__present-title">7 Подарков!</p>
                <p class="instant__present-text">осталось: 12 наборов</p>
              </div>
            </div>
            <a
              @click="selectMain(selectedModel)"
              href="#order-modal"
              class="btn-red instant__btn"
              data-fancybox
            >
              Оформить заказ
            </a>
          </div>
        </div>

        <div class="instant__cards-wrap">
          <p class="instant__cards-title">В комплекте:</p>
          <div class="instant-swiper">
            <div class="instant__cards-box swiper-wrapper">
              <div
                v-for="(card, i) in cards"
                :key="i"
                class="instant__card swiper-slide"
              >
                <div class="instant__card-img">
                  <picture>
                    <source
                      :srcset="`new-site-vue/build/images/instant/element-${
                        i + 1
                      }.webp`"
                      type="image/webp"
                    />
                    <img
                      :src="`new-site-vue/build/images/instant/element-${
                        i + 1
                      }.png`"
                      alt="Элементы Финляндии Экстра"
                    />
                  </picture>
                </div>
                <p class="instant__card-text" v-html="card"></p>
              </div>
            </div>
            <div class="instant-pagination"></div>
            <div class="instant-navigation">
              <div class="instant-btn_prev instant-btn"></div>
              <div class="instant-btn_next instant-btn"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Instant",
  computed: mapGetters(["oneProduct", "allMainProducts"]),
  data() {
    return {
      selectedModel: {
        id: 0,
        value: 0,
        price: 0,
        oldPrice: 0,
        discont: 0,
      },
      cards: [
        "Конусный<br/>бак",
        "Термометр",
        "Усиленный кламп<br/>на 1,5 дюйма",
        "Дистиллятор<br/>тройной очистки",
        "Силиконовые<br/>шланги",
        "Инструкция",
      ],
    };
  },
  methods: {
    ...mapMutations(["selectMain"]),
    selectModel(item) {
      this.selectedModel.id = item.id;
      this.selectedModel.value = item.value;
      this.selectedModel.price = item.price;
      this.selectedModel.oldPrice = item.oldPrice;
      this.selectedModel.discont = item.discont;
    },
  },
  beforeMount() {
    this.selectedModel.id = this.allMainProducts[0].id;
    this.selectedModel.value = this.allMainProducts[0].value;
    this.selectedModel.price = this.allMainProducts[0].price;
    this.selectedModel.oldPrice = this.allMainProducts[0].oldPrice;
    this.selectedModel.discont = this.allMainProducts[0].discont;
  },
  mounted() {
    const instantSwiperbreakpoint = window.matchMedia("(max-width:767px)");
    let myInstantSwiper;
    const instantSwiper = function () {
      myInstantSwiper = new Swiper(".instant-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".instant-btn_next",
          prevEl: ".instant-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".instant-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (instantSwiperbreakpoint.matches) {
        return instantSwiper();
      } else {
        if (myInstantSwiper) {
          return myInstantSwiper.destroy(true, true);
        }
      }
    };

    instantSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#instant {
  padding: 75px 0 102px;
  background: #f3f3f3;

  @media (max-width: 767px) {
    padding: 70px 0 70px;
  }

  @media (max-width: 575px) {
    padding: 20px 0 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0 !important;
  }

  .grid-box {
    display: grid;
    grid-template-columns: 350px 460px 1fr;
    grid-template-rows: auto;
    width: 100%;
    align-items: start;

    @media (max-width: 1199px) {
      grid-template-columns: 350px 460px;
      justify-content: center;
    }

    @media (max-width: 991px) {
      grid-template-columns: 350px 1fr;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .title-box {
    position: relative;
    z-index: 2;
    grid-column: 1/-1;
    grid-row: 1/2;
    margin-bottom: 40px;

    @media (max-width: 767px) {
      grid-column: 1/-1;
      grid-row: 2/3;
      margin-bottom: 0;
      padding-top: 25px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 1px;
        background: rgba(0, 0, 0, 0.25);
      }
    }
  }

  .instant__img-wrap {
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 1/2;
    grid-row: 2/3;
    margin-top: -40px;

    @media (max-width: 1599px) {
      position: sticky;
      top: 120px;
    }

    @media (max-width: 1199px) {
      position: static;
    }

    @media (max-width: 767px) {
      grid-column: 1/-1;
      grid-row: 3/4;
      margin-top: 0;
      margin-bottom: 3px;
    }

    .instant__img-box {
      grid-row: 1/2;
      grid-column: 1/2;
      position: relative;
      min-height: 625px;
      width: 100%;
      flex-shrink: 0;

      @media (max-width: 767px) {
        min-height: auto;
        height: 520px;
      }

      @media (max-width: 575px) {
        height: 375px;
      }

      img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        max-height: 100%;
        object-fit: contain;

        @media (max-width: 767px) {
          width: auto;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  .instant__product-wrap {
    grid-column: 2/3;
    grid-row: 2/3;
    min-height: 585px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20px;

    @media (max-width: 1599px) {
      position: sticky;
      top: 160px;
    }

    @media (max-width: 1199px) {
      position: static;
    }

    @media (max-width: 767px) {
      grid-column: 1/-1;
      grid-row: 4/5;
      min-height: auto;
      padding-bottom: 0;
    }

    @media (max-width: 575px) {
      margin: 0 -20px;
    }

    .instant__product-togglers {
      position: relative;
      display: flex;
      align-items: stretch;
      justify-content: flex-end;
      column-gap: 5px;
      width: 100%;
      padding-right: 20px;

      @media (max-width: 575px) {
        justify-content: center;
        padding-right: 0;
      }
    }

    .instant__product-toggler {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 73px;
      min-height: 54px;
      border-radius: 5px 5px 0px 0px;
      background: rgba(255, 255, 255, 0.5);
      color: #828282;
      font-weight: 700;
      font-family: "Inter", sans-serif;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition: 0.3s all;
      @media (min-width: 992px) {
        &:hover {
          background: #ffffff;
        }
      }

      @media (max-width: 575px) {
        width: 70px;
      }

      &_active {
        background: #ffffff;
        color: $btnred;
      }
    }

    .instant__product-info {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 16px 30px 26px 24px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);

      @media (max-width: 575px) {
        padding: 40px 16px 30px;
        border-radius: 0;
      }
    }

    .instant__oldprice-wrap {
      display: flex;
      justify-content: start;
      align-items: center;
      column-gap: 12px;
      margin-bottom: 20px;

      @media (max-width: 575px) {
        column-gap: 4;
      }
    }

    .instant__discont {
      position: relative;
      padding: 0 6px;

      @media (max-width: 575px) {
        padding: 0 28px 0 10px;
      }

      span {
        position: relative;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -25px;
        width: 100%;
        height: 61px;
        background: url("../images/instant/rectangle.svg");
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        @media (max-width: 991px) {
          top: -17px;
          height: 55px;
        }

        @media (max-width: 575px) {
          left: -16px;
          top: 50%;
          transform: translateY(-50%);
          width: 95px;
          height: 55px;
          background: url("../images/instant/rectangle-mobil.svg");
          background-position: left center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }

    .instant__oldprice {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-decoration-line: line-through;
      color: $text-black-gray;
    }

    .instant__price {
      margin-bottom: 15px;
      font-weight: 800;
      font-size: 40px;
      line-height: 49px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        margin-bottom: 10px;
      }
    }

    .instant__present-wrap {
      display: flex;
      align-items: center;
      column-gap: 9px;
      margin-bottom: 26px;

      @media (max-width: 575px) {
        margin-bottom: 14px;
      }
    }

    .instant__present-img {
      max-width: 43px;
    }

    .instant__present-title {
      margin-bottom: 1px;
      font-weight: 800;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $btnred;
    }

    .instant__present-text {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: $text-black-gray;
    }

    .instant__btn {
      width: 100%;
      min-height: 64px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.01em;

      @media (max-width: 575px) {
        border-radius: 10px;
      }
    }
  }

  .instant__cards-wrap {
    grid-column: 3/-1;
    grid-row: 2/3;
    padding-left: 42px;
    margin-bottom: 20px;

    @media (max-width: 1199px) {
      grid-column: 1/-1;
      grid-row: 3/4;
      padding-left: 0;
      padding-top: 40px;
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      grid-column: 1/-1;
      grid-row: 1/2;
      width: 100%;
      overflow: hidden;
      padding-top: 0;
      margin-bottom: 34px;
    }

    .instant__cards-title {
      margin-bottom: 22px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      letter-spacing: 0.01em;
      color: $text-black-gray;

      @media (min-width: 767px) {
        margin-bottom: 19px;
      }
    }

    .instant-swiper {
      width: 100%;

      @media (max-width: 767px) {
        max-width: 450px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
      }
    }

    .instant-pagination {
      display: flex;
      justify-content: center;
      margin-top: 27px;
      padding-bottom: 4px;
      padding-left: 30px;
      padding-right: 30px;
      width: 100%;
      z-index: 2;

      @media (min-width: 767px) {
        display: none;
      }

      span {
        width: 20px;
        height: 20px;
        margin: 0 6px;
        background-color: #bdbdbd;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background-color: $primary-color;
        }
      }
    }

    .instant-navigation {
      position: absolute;
      bottom: 0;
      z-index: 2;
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      @media (min-width: 767px) {
        display: none;
      }

      .instant-btn {
        position: relative;
        width: 28px;
        height: 28px;
        background-position: center;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        cursor: pointer;
        pointer-events: all;
        transition: 0.3s all;
      }

      .instant-btn_next {
        background-image: url("../images/global/slider-next.svg");
      }
      .instant-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }

    .instant__cards-box {
      @media (min-width: 768px) {
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-wrap: wrap;
        row-gap: 28px;
        column-gap: 30px;
      }
    }

    .instant__card {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% / 3 - 20px);
      min-height: 240px;
      padding: 37px 20px 20px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px;

      @media (max-width: 1599px) {
        width: calc(50% - 15px);
      }

      @media (max-width: 1399px) {
        width: 100%;
      }

      @media (max-width: 1199px) {
        width: calc(100% / 3 - 20px);
      }
    }

    .instant__card-img {
      width: 150px;
      height: 136px;
    }

    .instant__card-text {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      color: $text-black-gray;
    }
  }
}
</style>
