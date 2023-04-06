<template>
  <section id="comparison">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">
          Чем <span>домашние напитки лучше</span> покупных?
        </h3>
      </div>
      <div class="row">
        <div class="comparison-swiper">
          <div class="lists-box swiper-wrapper">
            <div class="lists-box__item swiper-slide">
              <div class="lists-box__img-wrap">
                <picture>
                  <source
                     data-srcset="
                      new-site-vue/build/images/comparison/comparison-1.webp
                    "
                    type="image/webp"
                  />
                  <img
                  class="lazy"
                     data-src="new-site-vue/build/comparison/comparison-1.png"
                    alt="Сравнение напитков"
                  />
                </picture>
              </div>
              <div class="lists-box__content-wrap">
                <h4 class="lists-box__item-title">Домашние напитки</h4>
                <ul class="lists-box__item-list">
                  <li v-for="(i, id) in homemade" :key="id">
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="lists-box__item swiper-slide">
              <div class="lists-box__img-wrap">
                <picture>
                  <source
                     data-srcset="
                      new-site-vue/build/images/comparison/comparison-2.webp
                    "
                    type="image/webp"
                  />
                  <img
                  class="lazy"
                     data-src="new-site-vue/build/images/comparison/comparison-2.png"
                    alt="Сравнение напитков"
                  />
                </picture>
              </div>
              <div class="lists-box__content-wrap">
                <h4 class="lists-box__item-title lists-box__item-title_gray">
                  Покупные напитки
                </h4>
                <ul class="lists-box__item-list lists-box__item-list_purchased">
                  <li v-for="(i, id) in purchased" :key="id">
                    {{ i }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="comparison-pagination"></div>
          <div class="comparison-navigation">
            <div class="comparison-btn_prev comparison-btn"></div>
            <div class="comparison-btn_next comparison-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Comparison",
  data() {
    return {
      homemade: [
        "Безупречный состав",
        "Беспохмельный напиток",
        "Вековые традиции",
        "Экономия и выгода",
        "Душевные застолья",
      ],
      purchased: [
        "Низкое качество",
        "Жуткое похмелье",
        "Риск контрафакта",
        "Наценки и переплаты",
        "Напиток без Души",
      ],
    };
  },
  mounted() {
    const comparisonSwiperbreakpoint = window.matchMedia("(max-width:575px)");
    let myComparisonSwiper;
    const comparisonSwiper = function () {
      myComparisonSwiper = new Swiper(".comparison-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".comparison-btn_next",
          prevEl: ".comparison-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".comparison-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (comparisonSwiperbreakpoint.matches) {
        return comparisonSwiper();
      } else {
        if (myComparisonSwiper) {
          return myComparisonSwiper.destroy(true, true);
        }
      }
    };

    comparisonSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#comparison {
  padding: 150px 0;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 42px 0 36px;
  }

  .row {
    max-width: 1450px;
    width: 100%;
    overflow: hidden;
  }

  .title-box {
    width: 100%;
    margin-bottom: 46px;

    @media (max-width: 575px) {
      margin-bottom: 20px;
    }

    &__title {
      @media (max-width: 575px) {
        max-width: 320px;
        margin: 0 auto;
        line-height: 24px;
        letter-spacing: 0.01em;
      }

      span {
        color: $primary-color;
      }
    }
  }

  .comparison-swiper {
    position: relative;
    width: 100%;

    @media (max-width: 575px) {
      padding: 0 5px;
    }

    .lists-box {
      @media (min-width: 576px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        column-gap: 32px;
      }

      @media (max-width: 1023px) and (min-width: 576px) {
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 50px;
      }

      &__item {
        @media (min-width: 576px) {
          display: flex;
          align-items: flex-start;
          width: auto;
          max-width: calc(50% - 16px);
        }

        @media (max-width: 1023px) and (min-width: 576px) {
          max-width: 100%;

          &:nth-child(2) {
            flex-direction: row-reverse;
          }
        }
      }

      &__img-wrap {
        display: flex;
        justify-content: flex-start;
        max-width: 322px;
        width: 322px;

        @media (max-width: 575px) {
          max-width: 100%;
          width: 46.25vw;
          margin: 0 auto;
        }

        img {
          max-width: 100%;

          @media (max-width: 575px) {
            aspect-ratio: 299/439;
          }
        }
      }

      &__content-wrap {
        padding-top: 52px;

        @media (max-width: 575px) {
          padding-top: 5px;
          width: max-content;
          max-width: 100%;
          margin: 0 auto;
        }
      }

      &__item-title {
        margin-bottom: 18px;
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
        color: $primary-color;

        @media (max-width: 575px) {
          margin-bottom: 13px;
          font-weight: 500;
          font-size: 22px;
          line-height: 27px;
        }

        &_gray {
          color: $text-black-gray;
        }
      }

      &__item-list {
        li {
          position: relative;
          margin-bottom: 19px;
          padding-left: 32px;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: $text-black-gray;

          @media (max-width: 575px) {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 20px;
          }

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            background-image: url("../images/global/check-circle.svg");
            background-position: center;
            background-repeat: no-repeat;
          }
        }

        &_purchased {
          li {
            &::before {
              background-image: url("../images/modal/modal-close-btn.svg");
            }
          }
        }
      }
    }

    .comparison-pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: 100%;
      z-index: 2;

      @media (min-width: 576px) {
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

    .comparison-navigation {
      position: absolute;
      left: 50%;
      top: 30vw;
      transform: translateX(-50%);
      z-index: 2;
      width: calc(100% - 10px);
      padding: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      @media (min-width: 576px) {
        display: none;
      }

      .comparison-btn {
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

      .comparison-btn_next {
        background-image: url("../images/global/slider-next.svg");
      }
      .comparison-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
