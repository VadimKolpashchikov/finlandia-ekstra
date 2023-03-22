<template>
  <section id="creation">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Творите, пробуйте, удивляйте!</h3>
        <p class="title-box__subtitle">
          Необычные напитки, которые можно приготовить на самогонном аппарате
        </p>
      </div>
    </div>
    <div class="content-container_special">
      <div class="swiper-box">
        <div class="creation-swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(el, id) in slides"
              :key="id"
              class="swiper-slide slide"
              :class="`slide-${id + 1}`"
            >
              <div class="slide__wrap">
                <div class="slide__img-wrap">
                  <div class="slide__name-absolute">
                    <p class="slide__name" v-html="el.title"></p>
                    <a
                      class="slide__btn btn-blue"
                      @click="
                        openRecipeModal({
                          title: el.title,
                          subtitle: el.subtitle,
                          listLine: el.listLine,
                          comment: el.comment,
                          listStepModal: el.listStepModal,
                        })
                      "
                      href="#recipe-modal"
                      data-fancybox
                      >Открыть рецепт</a
                    >
                  </div>
                  <picture>
                    <source
                      :srcset="`new-site-vue/build/images/creation/creation-${
                        id + 1
                      }.webp`"
                      type="image/webp"
                    />
                    <img
                      :src="`new-site-vue/build/images/creation/creation-${
                        id + 1
                      }.png`"
                      :alt="el.title"
                    />
                  </picture>
                  <div class="slide__price-wrap">
                    <p class="slide__price slide__price_shop">
                      В магазине:<br />
                      <span>{{ el.marketPrice }} руб.</span>
                    </p>
                    <p class="slide__price slide__price_home">
                      У себя дома:<br />
                      <span>{{ el.homePrice }} руб.</span>
                    </p>
                  </div>
                </div>
                <div class="slide__text-wrap">
                  <p class="slide__title" v-html="el.title"></p>
                  <p class="slide__subtitle" v-html="el.subtitle"></p>
                  <template v-if="el.listLine">
                    <ul class="slide__list-line">
                      <li
                        v-for="(li, idx) in el.listLine"
                        :key="idx"
                        v-html="li"
                      ></li>
                    </ul>
                  </template>
                  <template v-if="el.comment">
                    <p class="slide__comment">{{ el.comment }}</p>
                  </template>
                  <ul class="slide__list-step">
                    <li
                      v-for="(step, idx) in el.listStep"
                      :key="idx"
                      v-html="step"
                    ></li>
                  </ul>
                  <template v-if="el.link">
                    <a
                      class="slide__link"
                      @click="
                        openRecipeModal({
                          title: el.title,
                          subtitle: el.subtitle,
                          listLine: el.listLine,
                          comment: el.comment,
                          listStepModal: el.listStepModal,
                        })
                      "
                      href="#recipe-modal"
                      data-fancybox
                      >Весь рецепт</a
                    >
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="creation-pagination"></div>
          <div class="creation-navigation">
            <div class="creation-btn_prev creation-btn"></div>
            <div class="creation-btn_next creation-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Creation",
  data() {
    return {
      slides: [
        {
          title: "Настойка<br/> «Сливовый бархат»",
          subtitle: "На 1 л самогона (40%):",
          homePrice: 160,
          marketPrice: 700,
          listLine: [
            "- 400 г сливы;",
            "- сахарный сироп — по вкусу;",
            "- по 20 г мускатного ореха и корицы;",
            "- вода — до нужной крепости.",
          ],
          listStep: [
            "<span>Шаг 1.</span> Готовим пшеничную или фруктовую брагу. Дважды перегоняем с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Сливу моем, удаляем косточки. Специи измельчаем, помещаем на дно банки.",
            "<span>Шаг 3.</span> В тару закладываем сливу, заливаем самогоном. Оставляем в тёмном, прохладном месте на 30 дней, процеживаем. Добавляем воду до нужной крепости и сироп по вкусу. ",
          ],
          link: false,
          listStepModal: [
            "<span>Шаг 1.</span> Готовим пшеничную или фруктовую брагу. Дважды перегоняем с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Сливу моем, удаляем косточки. Специи измельчаем, помещаем на дно банки.",
            "<span>Шаг 3.</span> В тару закладываем сливу, заливаем самогоном. Оставляем в тёмном, прохладном месте на 30 дней, процеживаем. Добавляем воду до нужной крепости и сироп по вкусу. ",
          ],
        },
        {
          title: "Абсент<br/> «Мятная прохлада»",
          subtitle: "На 1 л самогона (95%):",
          homePrice: 350,
          marketPrice: 1400,
          listLine: [
            "- по 50 г фенхеля и мяты;",
            "- по 25 г полыни (без стеблей) и аниса;",
            "- 20 г лакрицы.",
          ],
          comment: "Для окраски: по 10 г мяты, полыни и мелиссы.",
          listStep: [
            "<span>Шаг 1.</span> Готовим сахарную или пшеничную брагу. Дважды перегоняем с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Травы измельчаем, складываем на дно банки. Заливаем самогоном и настаиваем 2–3 недели. Разбавляем водой до крепости 30%, перегоняем на самогонном аппарате методом дистилляции.",
          ],
          link: true,
          listStepModal: [
            "<span>Шаг 1.</span> Готовим сахарную или пшеничную брагу. Дважды перегоняем с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Травы измельчаем, складываем на дно банки. Заливаем самогоном и настаиваем 2–3 недели. Разбавляем водой до крепости 30%, перегоняем на самогонном аппарате методом дистилляции.",
            "<span>Шаг 3.</span> Мяту, полынь и мелиссу растираем, добавляем к полученному самогону. На несколько минут тару с абсентом опускаем в тёплую воду до появления окраски.",
            "<span>Шаг 4.</span> Процеживаем, разбавляем до нужной крепости (80%), разливаем по бутылкам.",
          ],
        },
        {
          title: "Бренди<br/> «Классика»",
          subtitle:
            "На 1 л самогона — 350 мл дубовых чипсов (или дубовая бочка).",
          homePrice: 380,
          marketPrice: 1800,
          listStep: [
            "<span>Шаг 1.</span> Готовим виноградную брагу. Перегоняем дважды методом дистилляции с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Дубовые чипсы завариваем кипятком, сливаем воду.Самогон разбавляем до крепости 50%.",
            "<span>Шаг 3.</span> В тару выкладываем дубовую щепу на 1/3 объёма, заливаем туда самогон. Настаиваем в тёмном прохладном месте 6–12 мес.",
          ],
          link: false,
          listStepModal: [
            "<span>Шаг 1.</span> Готовим виноградную брагу. Перегоняем дважды методом дистилляции с отделением голов и хвостов.",
            "<span>Шаг 2.</span> Дубовые чипсы завариваем кипятком, сливаем воду.Самогон разбавляем до крепости 50%.",
            "<span>Шаг 3.</span> В тару выкладываем дубовую щепу на 1/3 объёма, заливаем туда самогон. Настаиваем в тёмном прохладном месте 6–12 мес.",
          ],
        },
        {
          title: "Настойка<br/> «Имбирная с перцем»",
          subtitle: "На 1 л самогона:",
          homePrice: 110,
          marketPrice: 770,
          listLine: [
            "- 20 г имбиря;",
            "- 10 г чёрного перца;",
            "- 15 стручкового красного перца;",
            "- 2 ст. л. мёда.",
          ],
          listStep: [
            "<span>Шаг 1.</span> Измельчённые имбирь и чёрный перец заливаем неразбавленным спиртом-ректификатом (подойдёт любой). Красный перец заливаем разбавленным до 50% самогоном. Настаиваем то и другое 10 суток в тёмном, прохладном месте.",
            "<span>Шаг 2.</span> Оба настоя процеживаем и соединяем.",
            "<span>Шаг 3.</span> Мёд растворяем в тёплой воде...",
          ],
          link: true,
          listStepModal: [
            "<span>Шаг 1.</span> Измельчённые имбирь и чёрный перец заливаем неразбавленным спиртом-ректификатом (подойдёт любой). Красный перец заливаем разбавленным до 50% самогоном. Настаиваем то и другое 10 суток в тёмном, прохладном месте.",
            "<span>Шаг 2.</span> Оба настоя процеживаем и соединяем.",
            "<span>Шаг 3.</span> Мёд растворяем в тёплой воде, добавляем в настойку. Разбавляем водой до нужной крепости.",
          ],
        },
      ],
    };
  },
  methods: mapMutations(["openRecipeModal"]),
  mounted() {
    const creationSwiper = new Swiper(".creation-swiper", {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      loopPreventsSliding: false,
      loopedSlides: 1,
      navigation: {
        nextEl: ".creation-btn_next",
        prevEl: ".creation-btn_prev",
      },
      pagination: {
        clickable: true,
        el: ".creation-pagination",
      },
      breakpoints: {
        992: {
          slidesPerView: "auto",
          centeredSlides: true,
          grabCursor: false,
        },
        1200: {
          spaceBetween: 0,
          slidesPerView: 1,
          // loopedSlides: 1,
          grabCursor: false,
          centeredSlides: true,
        },
        1880: {
          slidesPerView: 3,
          // loopedSlides: 1,
          spaceBetween: 0,
          grabCursor: false,
          centeredSlides: true,
          allowTouchMove: false,
        },
      },
      modules: [Navigation, Pagination],
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#creation {
  padding: 150px 0 105px;
  background: $section-gray-bg;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0;
  }

  @media (max-width: 575px) {
    padding: 30px 0 57px;
  }

  .title-box {
    margin-bottom: 66px;
  }

  .content-container {
    &_special {
      max-width: 1860px;
      margin: 0 auto;

      @media (max-width: 1879px) {
        max-width: 1250px;
      }

      @media (max-width: 1199px) {
        max-width: 660px;
      }

      @media (max-width: 991px) {
        max-width: 580px;
      }
    }
  }

  .swiper-box {
    position: relative;
    width: 100%;
    padding: 0 100px;
    overflow: hidden;

    @media (max-width: 1199px) {
      padding: 0 30px;
    }

    @media (max-width: 991px) {
      padding: 0 50px;
    }

    @media (max-width: 575px) {
      padding: 0;
    }

    .creation-swiper {
      overflow: hidden;
    }

    .swiper-wrapper {
      @media (min-width: 1880px) {
        flex-direction: row-reverse;
        transform: translate3d(13.45%, 0px, 0px) !important;
      }
    }

    .slide.slide-1.swiper-slide-active ~ .slide.slide-4,
    .slide.slide-2.swiper-slide-active ~ .slide.slide-1,
    .slide.slide-3.swiper-slide-active ~ .slide.slide-2,
    .slide.slide-4.swiper-slide-active ~ .slide.slide-3 {
      @media (min-width: 1880px) {
        position: relative;
        order: 3;
        opacity: 1;
        width: max-content !important;
        transform: scale(0.86) translateX(-50%);
        transition: 0.3s transform;
        .slide__wrap {
          transform: translateX(100%);
          background: rgba(224, 224, 224);
        }
        .slide__img-wrap {
          img {
            opacity: 0.7;
          }
        }
        .slide__name-absolute {
          right: auto;
          left: 24px;
          text-align: left;
        }
      }
      @media (max-width: 991px) {
        opacity: 0;
        visibility: hidden;
      }
    }

    .slide {
      max-width: 63.253%;
      width: 100% !important;
      font-family: "Inter", sans-serif;
      opacity: 0;
      @media (min-width: 1880px) {
        position: absolute;
        top: 0;
        right: 0;
        transform: scale(0);
        transition: 0s opacity, 0s transform;
      }
      @media (max-width: 1879px) {
        max-width: 100%;
        width: 100% !important;
      }

      &.swiper-slide-active {
        position: relative;
        z-index: 10;
        opacity: 1;
        transition: 0.3s all;

        @media (min-width: 1880px) {
          transform: scale(1);
          order: 2;
          transition: 0.6s opacity, 0.6s transform;
        }

        .slide__name-absolute {
          display: none;

          @media (max-width: 1199px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        .slide__price-wrap {
          background: rgba(51, 51, 51, 0.8);
          height: auto;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          .slide__price {
            opacity: 1;
          }
        }

        .slide__text-wrap {
          height: auto;
          display: block;
        }
        @media (min-width: 1880px) {
          .slide__img-wrap {
            width: 47%;
          }

          .slide__text-wrap {
            width: calc(100% - 47% - 34px);
            max-width: 100%;
          }
        }
      }

      &.swiper-slide-prev {
        transition: 0.3s transform;

        @media (min-width: 1880px) {
          position: relative;
          order: 3;
          opacity: 1;
          width: max-content !important;
          transform: scale(0.86) translateX(-50%);
          .slide__wrap {
            background: rgba(224, 224, 224);
            transform: translateX(100%);
          }
          .slide__img-wrap {
            img {
              opacity: 0.7;
            }
          }
          .slide__name-absolute {
            right: auto;
            left: 24px;
            text-align: left;
          }
        }
        @media (max-width: 991px) {
          opacity: 0;
          visibility: hidden;
        }
      }

      &.swiper-slide-next {
        transition: 0.3s transform;

        @media (min-width: 1880px) {
          position: relative;
          order: 1;
          opacity: 1;
          width: max-content !important;
          transform: scale(0.86) translateX(50%);
          .slide__wrap {
            // flex-direction: row-reverse;
            background: rgba(224, 224, 224);
            transform: translateX(-100%);
          }
          .slide__img-wrap {
            img {
              opacity: 0.7;
            }
          }
          .slide__name-absolute {
            right: 24px;
            left: auto;
            text-align: right;
          }
        }

        @media (max-width: 1199px) {
          opacity: 1;
        }

        @media (max-width: 991px) {
          opacity: 0;
          visibility: hidden;
        }
      }

      &__wrap {
        display: flex;
        align-items: flex-start;
        column-gap: 34px;
        width: 100%;
        height: 100%;
        padding: 40px 25px 38px 40px;
        border-radius: 10px;
        background: #ffffff;
        @media (max-width: 1879px) {
          transition: 0.3s all;
        }

        @media (max-width: 1199px) {
          padding: 16px;
        }

        @media (max-width: 575px) {
          padding: 0;
          border-radius: 0;
        }
      }

      &__img-wrap {
        position: relative;
        width: 47%;
        overflow: hidden;

        @media (min-width: 1880px) {
          width: 100%;
        }

        @media (max-width: 1199px) {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          background-color: rgba(51, 51, 51, 0.8);
        }

        img {
          width: 100%;
          transition: 0.3s all;

          @media (max-width: 575px) {
            object-fit: cover;
            max-height: 600px;
          }
        }
      }

      &__name-absolute {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 60%;
        z-index: 2;

        @media (max-width: 1199px) {
          position: static;
          transform: translateY(0);
          padding: 16px;
          width: 100%;
        }

        @media (max-width: 575px) {
          padding: 14px 20px 10px;
        }
      }

      &__name {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #ffffff;

        @media (max-width: 1199px) {
          text-align: center;
        }

        @media (max-width: 575px) {
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      }

      &__btn {
        display: none;
        max-width: 165px;
        width: 100%;
        min-height: 43px;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.01em;

        @media (max-width: 1199px) {
          display: flex;
          margin: 12px auto 0;
        }
      }

      &__price-wrap {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        gap: 13px;
        width: 100%;
        height: 100%;
        padding: 20px 30px 20px 20px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
        transition: 0.3s all;

        @media (max-width: 1199px) {
          background: rgba(51, 51, 51, 0.8);
          height: auto;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        @media (max-width: 575px) {
          flex-direction: column;
          padding: 15px 18px 23px;
        }
      }

      &__price {
        position: relative;
        padding-left: 32px;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
        opacity: 0;
        @media (max-width: 1199px) {
          opacity: 1;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 2px;
          width: 24px;
          height: 24px;
          background-position: center;
          background-size: 100% 100%;
        }

        &_shop {
          span {
            color: $btnred;
          }

          &::before {
            background-image: url("../images/global/x-circle-red.svg");
          }
        }

        &_home {
          span {
            color: #27ae60;
          }

          &::before {
            background-image: url("../images/global/check-circle-green.svg");
          }
        }
      }

      &__text-wrap {
        overflow: hidden;
        width: calc(100% - 47% - 34px);

        @media (min-width: 1880px) {
          height: 0;
          width: 0;
          max-width: 0;
          display: none;
          transition: 0.4s all;
        }

        @media (max-width: 1199px) {
          display: none !important;
        }
      }

      &__title {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: $text-black-gray;
      }

      &__subtitle {
        margin-bottom: 24px;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #828282;
      }

      &__list-line {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        margin-bottom: 24px;

        li {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;
        }
      }

      &__comment {
        padding-top: 8px;
        margin-bottom: 16px;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: $text-black-gray;
      }

      &__list-step {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding-top: 8px;

        li {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;
          span {
            font-weight: 700;
            color: $primary-color;
          }
        }
      }

      &__link {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-decoration-line: underline;
        overflow: hidden;
        color: $primary-color;
        outline: none;
        transition: 0.3s all;

        @media (min-width: 992px) {
          &:hover {
            color: $btnred;
          }
        }
      }
    }

    .creation-pagination {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      width: 100%;
      z-index: 2;

      @media (max-width: 767px) {
        margin-top: 20px;
      }

      span {
        width: 24px;
        height: 24px;
        margin: 0 12px;
        background-color: #bdbdbd;
        opacity: 1;
        transition: 0.3s all;
        @media (min-width: 768px) {
          &:hover {
            background-color: $primary-color;
          }
        }

        @media (max-width: 767px) {
          width: 20px;
          height: 20px;
          margin: 0 6px;
        }

        &.swiper-pagination-bullet-active {
          background-color: $primary-color;
        }
      }
    }

    .creation-navigation {
      position: absolute;
      top: calc(50% - 25px);
      left: 20px;
      transform: translate(0, -50%);
      z-index: 2;
      width: calc(100% - 40px);
      padding: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none;

      @media (max-width: 1199px) {
        left: 0;
        width: 100%;
      }

      @media (max-width: 991px) {
        left: 0;
        width: 100%;
      }

      @media (max-width: 767px) {
        top: calc(50% - 22px);
      }

      @media (max-width: 575px) {
        left: 0;
        width: 100%;
      }

      .creation-btn {
        position: relative;
        width: 43px;
        height: 43px;
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        pointer-events: all;
        transition: 0.3s all;

        @media (min-width: 768px) {
          &:hover:not(.swiper-button-disabled) {
            transform: scale(1.07);
          }
        }

        @media (max-width: 575px) {
          width: 50px;
          height: 100px;
          background-color: #ffffff;
          background-position: 7px center;
          background-size: 28px 28px;
          background-repeat: no-repeat;
        }
      }

      .creation-btn_next {
        background-image: url("../images/global/slider-next.svg");

        @media (max-width: 575px) {
          background-position: 14px center;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
        }
      }
      .creation-btn_prev {
        background-image: url("../images/global/slider-prev.svg");

        @media (max-width: 575px) {
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
        }
      }

      .swiper-button-disabled {
        @media (min-width: 1880px) {
          opacity: 0;
          visibility: hidden;
        }
        filter: grayscale(1);
      }
    }
  }
}
</style>
