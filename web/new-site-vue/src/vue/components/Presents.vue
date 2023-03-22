<template>
  <section id="presents">
    <div class="content-container">
      <div class="row">
        <div class="title-col">
          <h4 class="title-col__title">
            <span>Ещё больше</span>
            подарков!
          </h4>
          <p class="title-col__text">
            7 приятных дополнений к&nbsp;выгодной покупке
          </p>
          <a class="title-col__btn btn-red" href="#order-modal" data-fancybox>
            Выбрать аппарат
          </a>
        </div>
        <div class="presents-col">
          <div class="presents-swiper">
            <div class="swiper-wrapper" ref="presents">
              <div
                v-for="(item, id) in presentsOrder"
                :key="id"
                :class="`present-${id + 1}`"
                class="swiper-slide present"
              >
                <div class="present__wrap">
                  <a
                    class="present__link"
                    href="#"
                    :class="`present__link-${id + 1}`"
                    @click.prevent="
                      showPresentNoTippy(item.title, item.description)
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                    >
                      <circle cx="14.3921" cy="13.5" r="13" />
                      <path
                        d="M12.7557 15.0753V14.858C12.76 14.1122 12.826 13.5178 12.9539
                         13.0746C13.086 12.6314 13.2777 12.2734 13.5292 12.0007C13.7806 11.728 14.0831 11.4808 14.4368 11.2592C14.701 11.0888 14.9375 10.9119 15.1464 10.7287C15.3552 10.5455 15.5214 10.343 15.6449 10.1214C15.7685 9.8956 15.8303 9.64418 15.8303 9.36719C15.8303 9.07315 15.76 8.81534 15.6194 8.59375C15.4787 8.37216 15.2891 8.2017 15.0505 8.08239C14.8161 7.96307 14.5562 7.90341 14.2706 7.90341C13.9937 7.90341 13.7316 7.9652 13.4844 8.08878C13.2373 8.2081 13.0348 8.38707 12.8772 8.62571C12.7195 8.86009 12.6343 9.15199 12.6215 9.50142H10.0135C10.0348 8.64915 10.2394 7.94602 10.6272 7.39205C11.015 6.83381 11.5285 6.41832 12.1677 6.1456C12.8069 5.86861 13.5121 5.73011 14.2834 5.73011C15.1314 5.73011 15.8814 5.87074 16.5334 6.15199C17.1854 6.42898 17.6968 6.83168 18.0675 7.36009C18.4383 7.88849 18.6236 8.52557 18.6236 9.27131C18.6236 9.76989 18.5405 10.2131 18.3743 10.6009C18.2124 10.9844 17.9844 11.3253 17.6904 11.6236C17.3964 11.9176 17.0491 12.1839 16.6485 12.4226C16.3118 12.6229 16.0348 12.8317 15.8175 13.049C15.6044 13.2663 15.4446 13.5178 15.3381 13.8033C15.2358 14.0888 15.1826 14.4403 15.1783 14.858V15.0753H12.7557ZM14.0214 19.1662C13.5952 19.1662 13.2309 19.017 12.9283 18.7188C12.63 18.4162 12.483 18.054 12.4873 17.6321C12.483 17.2145 12.63 16.8565 12.9283 16.5582C13.2309 16.2599 13.5952 16.1108 14.0214 16.1108C14.4262 16.1108 14.782 16.2599 15.0888 16.5582C15.3956 16.8565 15.5512 17.2145 15.5554 17.6321C15.5512 17.9134 15.4766 18.1712 15.3317 18.4055C15.1911 18.6357 15.0057 18.821 14.7756 18.9616C14.5455 19.098 14.2941 19.1662 14.0214 19.1662Z"
                      />
                    </svg>
                  </a>
                  <div class="present__img-wrap">
                    <picture>
                      <source
                        :srcset="`new-site-vue/build/images/presents/${item.img}.webp`"
                        type="image/webp"
                      />
                      <img
                        :src="`new-site-vue/build/images//presents/${item.img}.png`"
                        :alt="item.title"
                        :onload="
                          addTippy(`.present__link-${id + 1}`, item.description)
                        "
                      />
                    </picture>
                  </div>
                  <h5
                    class="present__name"
                    v-if="item.title == 'Утеплитель для царги'"
                  >
                    Утеплитель
                  </h5>
                  <h5
                    class="present__name"
                    v-else-if="item.title == 'Купон на 1000 рублей'"
                  >
                    Купон на 1000 р.
                  </h5>
                  <h5 v-else class="present__name" v-html="item.title"></h5>
                  <p class="present__price">
                    <span>{{ item.price }} руб.</span> 0 руб.
                  </p>
                </div>
              </div>
              <div class="swiper-slide present present-end">
                <div class="present__wrap">
                  <h5 class="present__name">Итого:</h5>
                  <p class="present__price">
                    <span
                      >{{
                        presentsOrder.reduce(
                          (acc, value) => acc + value.price,
                          0
                        )
                      }}
                      руб.</span
                    >
                    0 руб.
                  </p>
                </div>
              </div>
            </div>
            <div class="presents-pagination"></div>
            <div class="presents-navigation">
              <div class="presents-btn_prev presents-btn"></div>
              <div class="presents-btn_next presents-btn"></div>
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
import tippy, { followCursor } from "tippy.js";
export default {
  name: "Presents",
  data() {
    return {
      presentsOrder: [
        {
          title: "Дивертор",
        },
        {
          title: "Спиртометр",
        },
        {
          title: "Гидрозатвор",
        },
        {
          title: "Попугай",
        },
        {
          title: "Медная РПН",
        },
        {
          title: "Утеплитель для царги",
        },
        {
          title: "Купон на 1000 рублей",
        },
      ],
    };
  },
  computed: mapGetters(["allPresents"]),
  created() {
    let newArray = [];
    this.presentsOrder.forEach((el) => {
      this.allPresents.forEach((item) => {
        if (el.title === item.title) {
          newArray.push(item);
        }
      });
    });
    this.presentsOrder = newArray;
  },
  mounted() {
    let myPresentsSwiper;
    const presentsSwiper = () => {
      myPresentsSwiper = new Swiper(".presents-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".presents-btn_next",
          prevEl: ".presents-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".presents-pagination",
        },
        modules: [Navigation, Pagination],
      });
    };

    const tippyBreakpoint = window.matchMedia("(min-width: 992px)");
    const tippyBreakpointCheck = () => {
      if (!tippyBreakpoint.matches) {
        setTimeout(() => {
          return this.$refs.presents
            .querySelectorAll(".present__link")
            .forEach((el) => el._tippy.disable());
        }, 1);
      } else if (tippyBreakpoint.matches) {
        setTimeout(() => {
          this.$refs.presents
            .querySelectorAll(".present__link")
            .forEach((el) => el._tippy.enable());
        }, 1);
      }
    };

    tippyBreakpoint.addListener(tippyBreakpointCheck);
    tippyBreakpointCheck();

    const presentsSwiperbreakpoint = window.matchMedia("(min-width: 900px)");
    const breakpointChecker = () => {
      if (!presentsSwiperbreakpoint.matches) {
        return presentsSwiper();
      } else {
        if (myPresentsSwiper) {
          return myPresentsSwiper.destroy(true, true);
        }
      }
    };

    presentsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  methods: {
    ...mapMutations(["openPresentModal"]),
    addTippy(el, content) {
      setTimeout(() => {
        tippy(el.toString(), {
          content: content.toString(),
          theme: "light",
          followCursor: true,
          allowHTML: true,
          delay: 100,
          plugins: [followCursor],
        });
      }, 0);
    },
    showPresentNoTippy(title, description) {
      if (window.innerWidth < 992) {
        this.openPresentModal({
          title: title,
          text: description,
        });
        Fancybox.show([{ src: "#present-modal" }]);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#presents {
  padding: 90px 0;
  background-color: $section-gray-bg;

  @media (max-width: 767px) {
    padding: 30px 0;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 32px;
    width: 100%;

    @media (max-width: 899px) {
      align-items: center;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
    }
  }

  .title-col {
    max-width: 335px;

    @media (max-width: 1399px) {
      position: sticky;
      top: 150px;
    }

    @media (max-width: 899px) {
      position: static;
      max-width: auto;
    }

    @media (max-width: 767px) {
      max-width: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 575px) {
      max-width: 260px;
    }

    &__title {
      margin-bottom: 18px;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 50px;
      line-height: 61px;
      color: $text-black-gray;
      span {
        color: $btnred;
      }

      @media (max-width: 767px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        max-width: 250px;
        margin-bottom: 13px;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.01em;
      }
    }

    &__text {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: $text-black-gray;

      @media (max-width: 767px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }

    &__btn {
      max-width: 260px;
      min-height: 64px;
      margin-top: 29px;
      border-radius: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;

      @media (max-width: 767px) {
        text-align: center;
        width: 260px;
      }

      @media (max-width: 575px) {
        border-radius: 10px;
        margin-top: 19px;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .presents-col {
    padding-top: 10px;
    max-width: 1050px;
    width: 100%;

    @media (max-width: 899px) {
      max-width: 330px;
    }

    @media (max-width: 767px) {
      padding-top: 0;
    }

    @media (max-width: 575px) {
      max-width: 260px;
    }

    .presents-swiper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .swiper-wrapper {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      flex-wrap: wrap;
      row-gap: 32px;
      column-gap: 30px;

      @media (max-width: 899px) {
        flex-wrap: nowrap;
        column-gap: 0;
        row-gap: 0;
      }
    }

    .present {
      display: flex;
      align-items: stretch;
      min-height: 240px;
      width: calc(25% - 90px / 4);
      font-family: "Inter", sans-serif;

      @media (max-width: 1399px) {
        width: calc(100% / 3 - 60px / 3);
      }

      @media (max-width: 1199px) {
        width: calc(100% / 2 - 30px / 2);
      }

      &__wrap {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: auto;
        width: 100%;
        padding: 18px 20px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
      }

      &__link {
        position: absolute;
        right: 13px;
        top: 14px;
        cursor: pointer;

        svg {
          circle {
            stroke: #4f4f4f;
            transition: 0.3s all;
          }

          path {
            fill: #4f4f4f;
            transition: 0.3s all;
          }
        }

        &:hover {
          svg {
            circle {
              stroke: $btnred;
            }
            path {
              fill: $btnred;
            }
          }
        }
      }

      &__img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 135px;
        margin-bottom: 1px;
        img {
          object-fit: contain;
          max-width: 100%;
        }
      }

      &__name {
        margin-bottom: 1px;
        font-family: inherit;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.01em;
        color: $text-black-gray;
      }

      &__price {
        font-family: inherit;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #828282;

        span {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          text-decoration-line: line-through;
        }
      }
    }

    .present-end {
      .present__wrap {
        justify-content: center;
        background: rgba(255, 255, 255, 1);
      }

      .present__name {
        margin-bottom: 6px;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
      }

      .present__price {
        font-family: inherit;
        font-size: 20px;
        line-height: 24px;
        color: $btnred;

        span {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          text-decoration-line: line-through;
        }
      }
    }

    .presents-pagination {
      display: flex;
      justify-content: center;
      margin-top: 16px;
      width: 100%;
      z-index: 2;

      @media (min-width: 900px) {
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

    .presents-navigation {
      position: absolute;
      top: calc(50% - 18px);
      transform: translateY(-50%);
      z-index: 2;
      width: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      pointer-events: none;

      @media (min-width: 900px) {
        display: none;
      }

      .presents-btn {
        position: relative;
        width: 28px;
        height: 28px;
        background-position: center center;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        cursor: pointer;
        pointer-events: all;
        transition: 0.3s all;
      }

      .presents-btn_next {
        background-image: url("../images/global/slider-next.svg");
      }
      .presents-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
