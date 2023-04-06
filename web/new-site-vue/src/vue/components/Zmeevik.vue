<template>
  <section id="zmeevik">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Холодильник со змеевиком на 15 витков</h3>
        <p class="title-box__subtitle">Получите дистиллят лучшего качества</p>
      </div>
      <div class="row">
        <div class="zmeevik__features zmeevik-swiper">
          <div class="zmeevik__features-wrapper swiper-wrapper">
            <div
              class="zmeevik__features-item swiper-slide"
              v-for="(i, id) in features"
              :key="id"
              :class="{ 'zmeevik__features-item_special': i.special }"
            >
              <div class="zmeevik__features-img-wrap">
                <picture>
                  <source
                    :data-srcset="`new-site-vue/build/images/zmeevik/feature-${
                      id + 1
                    }.webp`"
                    type="image/webp"
                  />
                  <img
                   class="lazy"
                    :data-src="`new-site-vue/build/images/zmeevik/feature-${
                      id + 1
                    }.png`"
                    :alt="i.title"
                  />
                </picture>
              </div>
              <div class="zmeevik__features-text-wrap">
                <p class="zmeevik__features-title" v-html="i.title"></p>
                <p class="zmeevik__features-text" v-html="i.text"></p>
              </div>
            </div>
          </div>
          <div class="zmeevik-pagination"></div>
          <div class="zmeevik-navigation">
            <div class="zmeevik-btn_prev zmeevik-btn"></div>
            <div class="zmeevik-btn_next zmeevik-btn"></div>
          </div>
        </div>

        <div class="zmeevik__img-wrap">
          <picture>
            <source
              data-srcset="new-site-vue/build/images/zmeevik/zmeevik.webp"
              type="image/webp"
            />
            <img
             class="lazy"
              data-src="new-site-vue/build/images/zmeevik/zmeevik.png"
              alt="Холодильник со змеевиком на 15 витков"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Zmeevik",
  data() {
    return {
      features: [
        {
          title: "Повышенный на 20% КПД",
          text: "Площадь охлаждения<br/> — 84 604 мм²",
          special: true,
        },
        {
          title: "Патрубки для воды с проточкой",
          text: "Шланги держатся надёжно<br/> и не соскальзывают",
          special: false,
        },
        {
          title: "Удлинённая царга ",
          text: "Для одновременной очистки двумя РПН и СПН — благодаря удобной засыпке",
          special: false,
        },
        {
          title: "Сухопарник с кламповым соединением (2&nbsp;дюйма)",
          text: "Удобная фиксация",
          special: false,
        },
        {
          title: "15 витков  змеевика",
          text: "Скорость охлаждения — до 6 л/час",
          special: false,
        },
        {
          title: "Заострённый кран-носик бака",
          text: "Капли будут соскальзывать и<br/> падать равномерно",
          special: false,
        },
      ],
    };
  },
  mounted() {
    const zmeevikSwiperbreakpoint = window.matchMedia("(max-width:767px)");
    let myZmeevikSwiper;
    const zmeevikSwiper = function () {
      myZmeevikSwiper = new Swiper(".zmeevik-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".zmeevik-btn_next",
          prevEl: ".zmeevik-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".zmeevik-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (zmeevikSwiperbreakpoint.matches) {
        return zmeevikSwiper();
      } else {
        if (myZmeevikSwiper) {
          return myZmeevikSwiper.destroy(true, true);
        }
      }
    };

    zmeevikSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#zmeevik {
  padding: 148px 0 160px;
  background: #ffffff;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0 70px;
  }

  @media (max-width: 575px) {
    padding: 58px 0 5px;
  }

  .title-box {
    margin-bottom: 43px;

    @media (max-width: 575px) {
      margin-bottom: 22px;
    }
  }

  .row {
    display: flex;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  .zmeevik__features {
    position: relative;
    overflow: hidden;
    font-family: "Inter", sans-serif;

    @media (max-width: 1399px) {
      width: 60%;
    }
    @media (max-width: 1199px) {
      width: 50%;
    }

    @media (max-width: 767px) {
      width: 100%;
      max-width: 490px;
    }

    &-wrapper {
      width: 100%;
      @media (min-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1.035fr;
        grid-template-rows: auto;
        column-gap: 32px;
        row-gap: 56px;
      }

      @media (max-width: 1199px) {
        grid-template-columns: 1fr;
      }

      @media (max-width: 991px) {
        row-gap: 32px;
      }
    }

    &-item {
      display: flex;
      align-items: flex-start;
      width: 100%;

      &_special {
        padding: 26px;
        background: #f3f3f3;
        border-radius: 10px;
        max-width: 471px;

        @media (max-width: 991px) {
          padding: 16px;
        }

        @media (max-width: 767px) {
          max-width: 490px;
        }

        @media (max-width: 575px) {
          align-items: center;
          padding: 16px 16px 20px 25px;
        }
        @media (min-width: 1200px) {
          + .zmeevik__features-item {
            height: max-content;
            align-self: center;
          }
        }
      }
    }

    &-img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      max-width: 105px;
      margin-right: 22px;
      padding-top: 3px;

      @media (max-width: 575px) {
        min-width: 85px;
        margin-right: 15px;
        justify-content: flex-start;
      }
    }

    &-text-wrap {
      flex-grow: 1;
    }

    &-title {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: $primary-color;
    }

    &-text {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }

    .zmeevik-pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;
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

    .zmeevik-navigation {
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

      .zmeevik-btn {
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

      .zmeevik-btn_next {
        background-image: url("../images/global/slider-next.svg");
      }
      .zmeevik-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }
  }

  .zmeevik__img-wrap {
    @media (max-width: 1399px) {
      position: sticky;
      top: 150px;
      width: 40%;

      img {
        width: 100%;
      }
    }

    @media (max-width: 1199px) {
      width: 50%;
    }

    @media (max-width: 767px) {
      position: static;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 30px;
      img {
        width: auto;
        max-width: 100%;
      }
    }
  }
}
</style>
