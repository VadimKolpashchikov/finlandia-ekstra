<template>
  <section id="working-mode">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title"><span>7 режимов</span> работы</h3>
        <p class="title-box__subtitle">Настройте аппарат так, как&nbsp;нужно</p>
      </div>
      <div class="mods">
        <div class="mods__togglers">
          <div class="togglers-swiper">
            <div class="swiper-wrapper" @focus.prevent>
              <div
                v-for="(item, id) in togglers"
                :key="id"
                class="swiper-slide"
                @click.prevent="selectMode(item)"
                @focus.prevent
                :class="{ 'swiper-slide_active': item.selected }"
              >
                <div class="swiper-slide-content" v-html="item.togg"></div>
              </div>
            </div>
          </div>
        </div>
        <TransitionGroup name="fade" tag="div" class="mods__cards">
          <div v-for="(item, id) in togglers" :key="id" v-show="item.selected">
            <div class="card">
              <div class="card-text-box">
                <h4
                  class="card__title"
                  v-html="`<span>${id + 1}.</span> ${item.title}`"
                ></h4>
                <p class="card__subtitle" v-html="item.subtitle"></p>
                <p class="card__text" v-html="item.text"></p>
                <p class="recipe-title" v-if="item.recipe && item.recipe.title">
                  {{ item.recipe.title }}
                </p>
                <ul class="recipe-list" v-if="item.recipe">
                  <li
                    v-for="(el, id) in item.recipe.items"
                    :key="id"
                    v-html="el"
                  ></li>
                </ul>
                <ul class="features-list" v-if="item.features">
                  <li v-for="(el, id) in item.features" :key="id">
                    <picture>
                      <source
                        :srcset="`new-site-vue/build/images/working-mode/${el.img}.webp`"
                        type="image/webp"
                      />
                      <img
                        :src="`new-site-vue/build/images/working-mode/mode-${
                          id + 1
                        }-${el}.png`"
                        alt="Режимы работы"
                      />
                    </picture>
                    <div class="features-list__text-box">
                      <p class="features-list__title" v-html="el.title"></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-imgs-box">
                <div class="card-imgs-swiper">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="(el, index) in 3"
                      :key="index"
                    >
                      <picture>
                        <source
                          :srcset="`new-site-vue/build/images/working-mode/mode-${
                            id + 1
                          }-${el}.webp`"
                          type="image/webp"
                          media="(min-width: 1100px)"
                        />
                        <source
                          :srcset="`new-site-vue/build/images/working-mode/mode-${
                            id + 1
                          }-${el}.png`"
                          type="image/png"
                          media="(min-width: 1100px)"
                        />
                        <source
                          :srcset="`new-site-vue/build/images/working-mode/mode-mobil-${
                            id + 1
                          }-${el}.webp`"
                          type="image/webp"
                        />
                        <img
                          :src="`new-site-vue/build/images/working-mode/mode-mobil-${
                            id + 1
                          }-${el}.png`"
                          alt="Режимы работы"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="imgs-pagination"></div>
                  <div class="imgs-navigation">
                    <div class="imgs-btn_prev imgs-btn"></div>
                    <div class="imgs-btn_next imgs-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";

export default {
  name: "WorkingMode",
  data() {
    return {
      togglers: [
        {
          togg: "Приготовление браги",
          title: "Приготовление браги",
          selected: true,
          subtitle: "Делайте самогон с комфортом",
          text:
            "Забудьте про отдельный бак для браги! Установив на «Финляндию Экстра» " +
            "гидрозатвор, вы сможете использовать перегонный куб как бродильную ёмкость. " +
            "Не переплачивайте за лишнее — выбирайте безопасность, герметичность и надёжность.",
          features: [
            {
              title:
                "<span>Внимание!</span><br/>Не забудьте слить через кран дрожжевой остаток до начала перегонки!",
              img: "warning",
            },
          ],
        },
        {
          togg: "Базовый<br> режим",
          title: "Базовый режим",
          selected: false,
          subtitle: "Откройте для себя мир самогона",
          text:
            "Представляет из себя получение дистиллята и полугара по классической методике и подходит " +
            "80% пользователей. Всё, что вам нужно — следить за температурой, замерять крепость продукта на " +
            "выходе и использовать для перегонки только качественное сырьё.",
          features: [
            {
              title:
                "<span>Максимальная скорость дистилляции:</span> 6&nbsp;л/час",
              img: "cool",
            },
            {
              title: "<span>Крепость самогона на выходе:</span> 60°",
              img: "degree",
            },
          ],
        },
        {
          togg: "Режим укрепления",
          title: "Режим укрепления",
          selected: false,
          subtitle: "Получайте алкогольную основу<br> для настоев и бальзамов",
          text:
            "Если вам не хватает стандартной крепости 60°, изготавливайте сверхкрепкие дистилляты. " +
            "Установите дополнительную царгу на 45 см и превратите компактный дистиллятор в мощный " +
            "аппарат для приготовления 80° напитков.",
          recipe: {
            title: "Вам откроются:",
            items: [
              "Настойки: «Клюква», «Вишенка», «Рябиновка» и&nbsp;другие",
              "Бальзамы на травах",
              "Классическая водка",
              "Лекарственные настойки",
            ],
          },
          features: [
            {
              title: "<span>Крепость самогона на выходе:</span> 80°",
              img: "degree",
            },
          ],
        },
        {
          togg: "Контролируемая перегонка",
          title: "Контролируемая перегонка",
          selected: false,
          subtitle: "Создание авторских напитков<br> — дело любознательных",
          text:
            "Диоптр превращает обычную перегонку в высокотехнологичный и увлекательный процесс. Вы контролируете флегмообразование визуально. " +
            "А при работе с зерновыми брагами можете предотвратить пенообразование.<br><br> Как бы хорошо " +
            "вы ни знали теорию, видеть процессы внутри аппарата своими глазами — совсем другое дело.",
        },
        {
          togg: "Ароматизация",
          title: "Ароматизация",
          selected: false,
          subtitle: "Не бойтесь экспериментировать с деталями",
          text:
            "Установив дополнительный сухопарник-ароматизатор, вы не только насыщаете свой " +
            "продукт изысканным ароматом, но и увеличиваете степень очистки самогона вдвое.",
          recipe: {
            title: "Этот режим незаменим для получения:",
            items: ["Джина", "Абсента", "Фруктовых водок"],
          },
        },
        {
          togg: "Сверхкрепкие дистилляты",
          title: "Сверхкрепкие дистилляты",
          selected: false,
          subtitle: "Совершенствуйте аппарат без границ",
          text:
            "Открывайте новые рубежи — с помощью дефлегматора делайте крепкие напитки (80–90°) на основе браги или спирта-сырца." +
            "<br><br>" +
            "Самогонный аппарат «Финляндия Экстра» — это мощная техническая база, совершенствовать которую можно практически бесконечно. ",
          features: [
            {
              title: "<span>Крепость самогона на выходе:</span> 90°",
              img: "degree",
            },
          ],
        },
        {
          togg: "Чистый<br> спирт",
          title: "Чистый спирт",
          selected: false,
          subtitle: "Достигайте абсолютной крепости",
          text:
            "Гоните чистый спирт! С дефлегматором и царгой вы сможете получить ректификат даже в домашних условиях. Режим подходит как для " +
            "профессионалов, так и для новичков. Получить идеальный продукт уже с первого раза вам поможет подробная инструкция.<br/><br/>" +
            "С «Финляндией Экстра» достичь максимальной крепости в 96,6° проще, чем кажется.",
          features: [
            {
              title:
                "<span>Крепость самогона на выходе:</span><br/> 96,6° и больше",
              img: "degree",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectMode(item) {
      this.togglers.forEach((el) => (el.selected = false));
      item.selected = true;
    },
  },
  mounted() {
    const togglersSwiper = new Swiper(".togglers-swiper", {
      slidesPerView: "auto",
      slidesPerGroupAuto: true,
      spaceBetween: 0,
      grabCursor: true,
      slideToClickedSlide: true,
    });

    const imgsSwiperbreakpoint = window.matchMedia("(max-width:1299px)");
    let myImgsSwiper;

    const imgsSwiper = function () {
      myImgsSwiper = new Swiper(".card-imgs-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".imgs-btn_next",
          prevEl: ".imgs-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".imgs-pagination",
        },
        breakpoints: {
          1100: {
            slidesPerView: 2,
          },
        },

        modules: [Navigation, Pagination],
      });
    };

    const breakpointChecker = function () {
      if (imgsSwiperbreakpoint.matches) {
        return imgsSwiper();
      } else {
        if (myImgsSwiper) {
          myImgsSwiper.forEach((el) => el.destroy(true, true));
        }
      }
    };

    imgsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#working-mode {
  padding: 152px 0 46px;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 100px 0 46px;
  }

  @media (max-width: 767px) {
    padding: 41px 0 25px;
  }

  .title-box {
    width: 100%;
    margin-bottom: 45px;

    @media (max-width: 575px) {
      margin-bottom: 21px;
    }

    &__subtitle {
      @media (max-width: 575px) {
        margin-top: 8px;
      }
    }
  }

  .mods {
    font-family: "Inter", sans-serif;
    width: 100%;

    .mods__togglers {
      position: relative;
      width: 100%;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 101vw;
        height: 1px;
        background-color: #333333;
      }

      .swiper {
        width: 100%;
      }

      .swiper-wrapper {
        justify-content: space-between;
      }

      .swiper-slide {
        height: auto;
        width: 222px !important;
        margin-right: 6px;
        cursor: pointer;
        border: 1px #e0e0e0 solid;
        border-bottom: 1px transparent solid;
        border-radius: 10px 10px 0px 0px;
        transition: 0.3s border-color;

        @media (max-width: 575px) {
          width: 160px !important;
        }

        .swiper-slide-content {
          height: 100%;
          padding: 20px 12px 12px;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          color: #828282;
          transition: 0.3s all;

          @media (max-width: 575px) {
            padding: 15px 8px 8px;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
          }
        }

        &:hover {
          border: 1px #333333 solid;
          border-bottom: 1px transparent solid;
        }

        &_active {
          border: 1px #333333 solid;

          .swiper-slide-content {
            position: relative;
            color: #333333;
            font-weight: 700;

            &::before {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 4px;
              background: #ffffff;
            }
          }
        }
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.35s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      position: absolute;
      width: 100%;
      top: 0;
      opacity: 0;
    }

    .mods__cards {
      position: relative;
      width: 100%;
      margin-top: 86px;

      @media (max-width: 767px) {
        margin-top: 26px;
      }

      .card {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 32px;
        width: 100%;

        @media (max-width: 767px) {
          flex-direction: column-reverse;
        }
      }

      .card-text-box {
        max-width: 509px;
        width: 100%;

        @media (max-width: 767px) {
          max-width: 100%;
          margin-top: 20px;
        }

        .card__title {
          margin-bottom: 5px;
          font-weight: 700;
          font-size: 32px;
          line-height: 39px;
          color: $text-black-gray;

          @media (max-width: 575px) {
            display: flex;
            column-gap: 10px;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 10px;
          }
        }
        .card__subtitle {
          margin-bottom: 12px;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.01em;
          color: $text-black-gray;

          @media (max-width: 575px) {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
          }
        }

        .card__text {
          margin-bottom: 0;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;

          @media (max-width: 575px) {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
          }
        }

        .recipe-title {
          margin-top: 12px;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 22px;
          }
        }

        .recipe-list {
          padding: 12px 0 0 16px;

          li {
            position: relative;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: $text-black-gray;

            @media (max-width: 575px) {
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
            }

            &:before {
              content: "-";
              position: absolute;
              left: -15px;
              top: 0;
              color: currentColor;
            }
          }
        }

        .features-list {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          row-gap: 34px;
          margin-top: 36px;

          @media (max-width: 575px) {
            margin-top: 20px;
            row-gap: 16px;
          }

          li {
            display: flex;
            align-items: flex-start;
            width: 100%;
          }

          img {
            flex-shrink: 0;
            width: 24px;
            height: auto;
            margin-right: 12px;
            padding-top: 3px;
          }

          &__text-box {
            flex-grow: 1;
          }

          &__title {
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: $text-black-gray;

            @media (max-width: 575px) {
              font-weight: 400;
              font-size: 16px;
              line-height: 22px;
            }

            span {
              font-weight: 700;
              color: $btnred;

              @media (max-width: 575px) {
                font-weight: 400;
              }
            }
          }
        }
      }

      .card-imgs-box {
        max-width: 1050px;
        width: 100%;

        @media (max-width: 1299px) {
          max-width: calc(100% - 509px - 32px);
        }

        @media (max-width: 1099px) {
          position: relative;
          max-width: 330px;
          margin: 0 auto;
        }

        .card-imgs-swiper {
          width: 100%;
          overflow: hidden;
        }

        .swiper-wrapper {
          display: flex;
          column-gap: 32px;
          width: 100%;

          @media (max-width: 1300px) {
            column-gap: 0;
          }
        }

        .swiper-slide {
          display: flex;
          width: 1px;
          flex-grow: 1;

          picture {
            display: flex;
          }

          img {
            width: 100%;
            max-width: 100%;
          }
        }

        .imgs-pagination {
          display: flex;
          justify-content: center;
          margin-top: 10px;

          @media (max-width: 1099px) {
            position: absolute;
            bottom: 17px;
            width: 100%;
            z-index: 2;
          }

          @media (min-width: 1300px) {
            display: none;
          }

          span {
            width: 20px;
            height: 20px;
            margin: 0 6px;
            background-color: #bdbdbd;
            opacity: 1;

            transition: 0.3s all;
            &:hover {
              background-color: $primary-color;
            }

            &.swiper-pagination-bullet-active {
              background-color: $primary-color;
            }
          }
        }

        .imgs-navigation {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 100%;
          padding: 0 13px;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          @media (min-width: 1100px) {
            display: none;
          }

          .imgs-btn {
            width: 28px;
            height: 28px;
            background-position: center;
            background-size: 100% 100%;
            cursor: pointer;
            pointer-events: all;
            transition: 0.3s all;

            &:hover:not(.swiper-button-disabled) {
              transform: scale(1.07);
            }
          }

          .imgs-btn_next {
            background-image: url("../images/global/slider-next.svg");
          }
          .imgs-btn_prev {
            background-image: url("../images/global/slider-prev.svg");
          }

          .swiper-button-disabled {
            filter: grayscale(1);
          }
        }
      }
    }
  }
}
</style>
