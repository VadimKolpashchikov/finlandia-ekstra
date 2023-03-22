<template>
  <section id="braga">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Поставить брагу можно прямо сейчас</h3>
        <p class="title-box__subtitle">
          Не теряйте времени, пока посылка в пути
        </p>
      </div>
    </div>
    <div class="content-container_special">
      <div class="swiper-box">
        <div class="braga-swiper">
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
                    <p class="slide__name" v-html="el.preview"></p>
                    <a
                      class="slide__btn btn-blue"
                      @click="
                        openRecipeModal({
                          title: el.title,
                          subtitle: el.subtitle,
                          listLine: el.listLine,
                          listNumberModal: el.listNumberModal,
                          recommendation: el.recommendation,
                        })
                      "
                      href="#recipe-modal"
                      data-fancybox
                      >Открыть рецепт</a
                    >
                  </div>
                  <picture>
                    <source
                      :srcset="`new-site-vue/build/images/braga/braga-${
                        id + 1
                      }.webp`"
                      type="image/webp"
                    />
                    <img
                      :src="`new-site-vue/build/images/braga/braga-${
                        id + 1
                      }.png`"
                      :alt="el.title"
                    />
                  </picture>
                  <div class="slide__price-wrap"></div>
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
                  <ul class="slide__list-number">
                    <li v-for="(number, idx) in el.listNumber" :key="idx">
                      <p>{{ idx + 1 }}.</p>
                      <p>{{ number }}</p>
                    </li>
                  </ul>
                  <template v-if="el.link">
                    <a
                      class="slide__link"
                      @click="
                        openRecipeModal({
                          title: el.title,
                          subtitle: el.subtitle,
                          listLine: el.listLine,
                          listNumberModal: el.listNumberModal,
                          recommendation: el.recommendation,
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
          <div class="braga-pagination"></div>
          <div class="braga-navigation">
            <div class="braga-btn_prev braga-btn"></div>
            <div class="braga-btn_next braga-btn"></div>
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
  name: "Braga",
  data() {
    return {
      slides: [
        {
          title: "Брага из варенья",
          preview: "Брага<br/> из варенья",
          subtitle: "Ингредиенты:",
          listLine: [
            "- 20 л воды;",
            "- 4 л варенья;",
            "- 35 г спиртовых дрожжей (сухие);",
            "- сахар — до 2 кг (если варенье не сладкое).",
          ],
          listNumber: [
            "Воду подогреваем, разводим в ней варенье так, чтобы весь сироп растворился. При необходимости добавляем сахар (концентрация не должна превышать 15–17%).",
            "Дрожжи активируем: в тёплую (30–35 градусов) воду добавляем сахар, перемешиваем и вносим дрожжи (на 35 г понадобится 300–400 мл воды и 2 ч. л. сахара). Оставляем на 15–20 мин...",
          ],
          link: true,
          listNumberModal: [
            "Воду подогреваем, разводим в ней варенье так, чтобы весь сироп растворился. При необходимости добавляем сахар (концентрация не должна превышать 15–17%).",
            "Дрожжи активируем: в тёплую (30–35 градусов) воду добавляем сахар, перемешиваем и вносим дрожжи (на 35 г понадобится 300–400 мл воды и 2 ч. л. сахара). Оставляем на 15–20 мин до появления шапки.",
            "Сусло для браги остужаем до 25 градусов, вливаем активированные дрожжи. Ёмкость заполняем не более чем на 80—85%.",
            "Брагу ставим в тёмное место, с температурой 18–25 градусов, закрываем крышкой, устанавливаем гидрозатвор. Оставляем на 8–12 дней.",
            "Готовность браги определяется по отсутствию бульканья в гидрозатворе, цвету, появлению плотного осадка и горькому вкусу. Созревшую брагу процеживаем и перегоняем.",
          ],
          recommendation:
            "<span>Рекомендация:</span><br/>Если до перегонки брагу прогреть до 60–70 градусов, а потом быстро остудить и оставить в прохладном месте на 2–3 часа, самогон станет вкуснее. Таким способом вы избавитесь от остатков живых и мертвых дрожжей, которые при кипении браги дадут неприятный привкус.",
          price: "Цена: 146 рублей за литр (40%).",
        },
        {
          title: "Брага из сахара",
          preview: "Брага<br/> из сахара",
          subtitle: "Ингредиенты:",
          listLine: [
            "- 4 кг сахара;",
            "- 20 л воды;",
            "- 20 г лимонной кислоты;",
            "- 35 г спиртовых дрожжей (сухие).",
          ],
          listNumber: [
            "Сахар инвертируем: растворяем в 2 л тёплой воды, кипятим 10–15 мин. Лимонную кислоту размешиваем отдельно в 100 мл жидкости. Медленно, при помешивании, вливаем получившуюся смесь в сироп. Кипятим ещё час.",
            "Активируем дрожжи: в 400 мл воды добавляем 2 ч. л. сахара, вносим дрожжи.",
            "Оставшуюся воду выливаем в ёмкость...",
          ],
          link: true,
          listNumberModal: [
            "Сахар инвертируем: растворяем в 2 л тёплой воды, кипятим 10–15 мин. Лимонную кислоту размешиваем отдельно в 100 мл жидкости. Медленно, при помешивании, вливаем получившуюся смесь в сироп. Кипятим ещё час.",
            "Активируем дрожжи: в 400 мл воды добавляем 2 ч. л. сахара, вносим дрожжи.",
            "Оставшуюся воду выливаем в ёмкость для брожения, добавляем сироп, перемешиваем. Выливаем активированные дрожжи, снова перемешиваем.",
            "Закрываем сусло, устанавливаем гидрозатвор, оставляем брагу в тёплом (18–25 градусов) месте на 5–7 дней.",
            "Готовую брагу сливаем с осадка и перегоняем. Созревание можно определить по осветлению и появлению плотного осадка, а также по горькому вкусу.",
          ],
          recommendation:
            "<span>Рекомендация:</span><br/>В сахарную брагу можно добавить кусочки фруктов, ягод, сухой хлеб, зерно или ароматные травы. Это положительно скажется на вкусе самогона.",
          price: "Цена: 74 рублей за литр (40%).",
        },
        {
          title: "Брага из яблок",
          preview: "Брага<br/> из яблок",
          subtitle: "Ингредиенты:",
          listLine: [
            "- 32 кг яблок (20 л сока);",
            "- винные дрожжи (например,&nbsp;Vita&nbsp;Vino<br/>KW-1255);",
            "- 1 кг сахара (если яблоки кислые).",
          ],
          listNumber: [
            "Яблоки моем, удаляем сердцевину, режем. Измельчаем любым способом (например, натираем на крупной тёрке. Даём мезге постоять 1,5–2 часа в холодном месте.",
            "Отжимаем сок (получится около 20 л). Оставляем его в холоде на 2–3 дня и сливаем с осадка.",
            "Пробуем выжимку, при необходимости добавляем сахар (лучше...",
          ],
          link: true,
          listNumberModal: [
            "Яблоки моем, удаляем сердцевину, режем. Измельчаем любым способом (например, натираем на крупной тёрке. Даём мезге постоять 1,5–2 часа в холодном месте.",
            "Отжимаем сок (получится около 20 л). Оставляем его в холоде на 2–3 дня и сливаем с осадка.",
            "Пробуем выжимку, при необходимости добавляем сахар (лучше в виде сиропа). Вносим винные дрожжи.",
            "Закрываем ёмкость для брожения, устанавливаем гидрозатвор. Выставляем бродить в прохладное место (14–16 градусов) на 30–45 дней.",
            "Каждые 2 недели после начала брожения снимаем образовавшуюся белковую шапку.",
            "Готовность определяют по отсутствию булькания в гидрозатворе, осветлению браги, горькому вкусу и появлению осадка. Созревшую брагу процеживаем и приступаем к перегонке.",
          ],
          recommendation:
            "<span>Рекомендация:</span><br/>На мезге, оставшейся от сока, тоже можно поставить брагу. Для этого залейте её водой (25–30 л), добавьте сахар (до 15–18% в сусле) и спиртовые дрожжи. Брага на мезге созреет быстрее (7–12 дней), но и шапку с неё снимать нужно чаще, раз в 2–3 дня.",
          price: "Цена: рублей за литр (40%).",
        },
      ],
    };
  },
  methods: mapMutations(["openRecipeModal"]),
  mounted() {
    const bragaSwiper = new Swiper(".braga-swiper", {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      loopPreventsSliding: false,
      loopedSlides: 1,
      navigation: {
        nextEl: ".braga-btn_next",
        prevEl: ".braga-btn_prev",
      },
      pagination: {
        clickable: true,
        el: ".braga-pagination",
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
#braga {
  padding: 150px 0 145px;
  background: $section-gray-bg;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0;
  }

  @media (max-width: 575px) {
    padding: 30px 0 32px;
  }

  .title-box {
    margin-bottom: 81px;

    @media (max-width: 991px) {
      margin-bottom: 66px;
    }

    @media (max-width: 575px) {
      margin-bottom: 35px;
    }
  }

  .content-container {
    &_special {
      max-width: 1860px;
      margin: 0 auto;

      @media (max-width: 1879px) {
        max-width: 1250px;
      }

      @media (max-width: 1199px) {
        max-width: 700px;
      }

      @media (max-width: 991px) {
        max-width: 580px;
      }
    }
  }

  .swiper-box {
    width: 100%;
    padding: 0 100px;
    overflow: hidden;

    @media (max-width: 1199px) {
      position: relative;
      padding: 0 30px;
    }

    @media (max-width: 991px) {
      padding: 0 50px;
    }

    @media (max-width: 575px) {
      padding: 0;
    }

    .braga-swiper {
      position: relative;

      @media (max-width: 1199px) {
        position: static;
        overflow: hidden;
      }
    }
    .swiper-wrapper {
      @media (min-width: 1880px) {
        flex-direction: row-reverse;
        transform: translate3d(13.45%, 0px, 0px) !important;
      }
    }

    .slide.swiper-slide-next + .slide {
      transition: 0.3s transform;

      @media (min-width: 1880px) {
        order: 3;
        opacity: 1;
        width: max-content !important;
        transform: scale(0.86) translateX(-50%);
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
        transform: scale(0.1);
        transition: 0.6s opacity, 0.6s transform;
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
          }
        }

        .slide__price-wrap {
          display: none;
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
          @media (min-width: 1880px) {
            width: 100%;
          }
        }

        @media (max-width: 1199px) {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          // background: rgba(51, 51, 51, 0.8);
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
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 100%;
          height: 100%;
          transform: translateY(0);
          padding: 20px;
          background: linear-gradient(
            360deg,
            #000000 0%,
            rgba(0, 0, 0, 0) 55.85%
          );
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

          br {
            display: none;
          }
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
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
        transition: 0.3s all;

        @media (max-width: 1199px) {
          display: none;
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

      &__list-number {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        padding-top: 8px;

        li {
          display: flex;
          align-items: flex-start;
          column-gap: 7px;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;
        }
      }

      &__link {
        margin-left: 24px;
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

    .braga-pagination {
      display: flex;
      justify-content: center;
      margin-top: 25px;
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

    .braga-navigation {
      position: absolute;
      top: calc(50% - 25px);
      left: -85px;
      transform: translate(0, -50%);
      z-index: 2;
      width: calc(100% + 170px);
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

      .braga-btn {
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

      .braga-btn_next {
        background-image: url("../images/global/slider-next.svg");

        @media (max-width: 575px) {
          background-position: 14px center;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
        }
      }
      .braga-btn_prev {
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
