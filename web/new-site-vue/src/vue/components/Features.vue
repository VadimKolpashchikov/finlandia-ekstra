<template>
  <section id="features">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Вне конкуренции</h3>
        <p class="title-box__subtitle">4 причины выбрать «Финляндию Экстра»</p>
      </div>
    </div>
    <div class="features">
      <div class="feature" v-for="(el, id) in features" :key="id">
        <div
          class="feature__img-wrap"
          :class="{ 'feature__img-wrap_slider': el.sliderCount != 0 }"
        >
          <div class="feature__img" v-if="el.sliderCount == 0">
            <picture>
              <source
                :srcset="`new-site-vue/build/images/features/feature-${
                  id + 1
                }.webp`"
                type="image/webp"
                media="(min-width: 576px)"
              />
              <source
                :src="`new-site-vue/build/images/features/feature-${
                  id + 1
                }.jpg`"
                media="(min-width: 576px)"
              />
              <source
                :srcset="`new-site-vue/build/images/features/feature-${
                  id + 1
                }-mobil.webp`"
                type="image/webp"
              />
              <img
                :src="`new-site-vue/build/images/features/feature-${
                  id + 1
                }-mobil.jpg`"
                :alt="el.title"
              />
            </picture>
          </div>
          <div class="feature__slider" v-else-if="el.sliderCount != 0">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(slide, num) in el.sliderCount"
                :key="num"
              >
                <picture>
                  <source
                    :srcset="`new-site-vue/build/images/features/feature-${
                      id + 1
                    }-${num + 1}.webp`"
                    type="image/webp"
                    media="(min-width: 576px)"
                  />
                  <source
                    :src="`new-site-vue/build/images/features/feature-${
                      id + 1
                    }-${num + 1}.jpg`"
                    media="(min-width: 576px)"
                  />
                  <source
                    :srcset="`new-site-vue/build/images/features/feature-${
                      id + 1
                    }-${num + 1}-mobil.webp`"
                    type="image/webp"
                  />
                  <img
                    :src="`new-site-vue/build/images/features/feature-${
                      id + 1
                    }-${num + 1}-mobil.jpg`"
                    :alt="el.title"
                  />
                </picture>
              </div>
            </div>
            <div class="feature-pagination"></div>
          </div>
        </div>
        <div class="feature__text-wrap">
          <h4 class="feature__title" v-html="el.title"></h4>
          <h5
            class="feature__subtitle"
            v-if="el.subtitle"
            v-html="el.subtitle"
          ></h5>
          <p class="feature__text" v-html="el.text"></p>
          <p
            class="feature__list-title"
            v-if="el.list.title"
            v-html="el.list.title"
          ></p>
          <ul class="feature__list">
            <li
              class="feature__list-item"
              v-for="(li, i) in el.list.li"
              :key="i"
            >
              <p class="feature__list-number">{{ i + 1 }}.</p>
              <p class="feature__list-text" v-html="li"></p>
            </li>
          </ul>
          <div class="feature__btn-box" v-if="id + 1 == features.length">
            <a href="#order-modal" data-fancybox class="btn-red feature__btn"
              >Выбрать аппарат</a
            >
            <p class="feature__price">от {{ oneProduct("f15").priceF }} руб.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination } from "swiper";
import { mapGetters } from "vuex";
export default {
  name: "Features",
  data() {
    return {
      features: [
        {
          title: "Растёт мастерство — растёт и аппарат",
          subtitle: "Дистиллятор для новичков, любителей и профессионалов",
          text: "Вам не придётся покупать новую модель, чтобы расширить свои<br/> возможности, ведь «Финляндию Экстра» можно улучшать бесконечно. Профессиональный перегонный куб и клампы позволят модернизировать аппарат под любые потребности и возможности! Покупайте только то, что действительно нужно.<br/><br/>Полностью герметичные, мощные соединения разбираются и собираются за&nbsp;15&nbsp;секунд. Аппарат легко чистить, хранить, транспортировать.",
          list: {
            title: "",
            li: [],
          },
          sliderCount: 0,
        },
        {
          title: "Подарок, за который не стыдно!",
          subtitle:
            "Заводское изготовление, а не гаражная сборка с кучей нареканий",
          list: {
            title: "Аппарат готов к работе «из коробки»:",
            li: [
              "Устройство с гидрозатвором на бак — готовая бродильная ёмкость.",
              "Дивертор, шланги и хомуты — быстрое и удобное подключение.",
              "Медная РПН — самогон без запаха.",
              "Спиртометр и книга рецептов — гарантия, что всё получится<br>с первого раза.",
              "Утеплитель для царги — более эффективный теплообмен.",
            ],
          },
          sliderCount: 0,
        },
        {
          title: "Мелочей не существует",
          subtitle:
            "Все детали аппарата должны быть полезными, удобными и функциональными",
          list: {
            title: "",
            li: [
              "<span>Аварийный клапан для сброса давления.</span><br/>Если давление в баке начнёт расти и достигнет критической отметки — 1,5&nbsp;атм&nbsp;— ситуация останется под контролем.",
              "<span>Точный электронный термометр.</span><br/>Расположен на гильзе. Мгновенно определяет температуру<br/>с точностью до 0,1°.",
              "<span>Кран с изгибом.</span><br/>Бак не нужно наклонять при сливе барды. Ожоги и травмы исключены.",
              "<span>Царга смещена в сторону относительно центра фланца.</span><br/>Вес распределён равномерно. Аппарат стоит на плите устойчиво<br/>даже с пустым баком.",
            ],
          },
          sliderCount: 4,
        },
        {
          title: "Материалы, проверенные временем",
          subtitle: "Аппарат, который прослужит вам долгие годы",
          text: "Мы производим перегонные кубы из медицинской нержавеющей<br/> стали AISI 304. В отличие от аналогов (марок AISI 201 и AISI 430),<br/> она идеально подходит для самогонных аппаратов.",
          list: {
            title: "",
            li: [
              "<span>Сварочные швы не текут.</span><br/>Если сталь плохо поддаётся сварке, то шов получится ненадёжным. Благодаря высокому содержанию никеля сталь AISI 304 легко сваривается, а бак не течёт по шву.",
              "<span>Перегонный куб не ржавеет.</span><br/>Медицинская сталь устойчива к коррозии, она не магнитится, содержит хром, а при взаимодействии с брагой не окисляется. ",
            ],
          },
          sliderCount: 0,
        },
      ],
    };
  },
  computed: mapGetters(["oneProduct"]),
  mounted() {
    const myFeaturesSwiper = new Swiper(".feature__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      grabCursor: true,
      loop: false,
      navigation: false,
      pagination: {
        clickable: true,
        el: ".feature-pagination",
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#features {
  padding: 149px 0 0;
  border-top: 1px solid #bdbdbd;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 100px 0 0;
  }

  @media (max-width: 767px) {
    padding: 80px 0 0;
  }

  @media (max-width: 575px) {
    padding: 30px 0 0;
  }

  .title-box {
    margin-bottom: 60px;

    @media (max-width: 575px) {
      margin-bottom: 27px;
    }
  }

  .features {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;

    .feature {
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      width: 100%;

      @media (max-width: 1399px) {
        flex-direction: column;
      }

      &:nth-child(2n) {
        flex-direction: row-reverse;

        @media (max-width: 1399px) {
          flex-direction: column;
        }
      }

      &__img-wrap {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 50%;
        flex-shrink: 0;
        &:not(.feature__img-wrap_slider) {
          background-color: #e7e7e7;
        }

        @media (max-width: 1399px) {
          width: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;

          @media (max-width: 1399px) {
            max-height: 600px;
          }
        }
      }

      &__img {
        width: 100%;
      }

      &__slider {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        @media (max-width: 575px) {
          overflow: visible;
          margin-bottom: 50px;
        }

        .swiper-slide {
          height: auto;
          picture {
            height: 100%;
          }

          img {
            object-fit: cover;
          }
        }

        .feature-pagination {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          margin-top: 116px;
          width: 100%;
          z-index: 2;

          @media (max-width: 575px) {
            bottom: -50px;
            justify-content: flex-start;
            width: 100%;
            padding: 0 20px;
            margin-top: 19px;
          }

          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            margin: 0 19px;
            background: rgba(255, 255, 255, 0.7);
            border: 2px solid $primary-color;
            color: $primary-color;
            opacity: 1;
            transition: 0.3s all;
            font-family: "Inter", sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.01em;
            @media (min-width: 768px) {
              &:hover {
                background-color: $primary-color;
                color: #ffffff;
              }
            }

            @media (max-width: 575px) {
              width: 31px;
              height: 31px;
              margin: 0 18px 0 0;
            }

            &.swiper-pagination-bullet-active {
              background-color: $primary-color;
              color: #ffffff;
            }
          }
        }
      }

      &__text-wrap {
        width: 100%;
        max-width: 910px;
        padding: 35px 50px;
        font-family: "Inter", sans-serif;

        @media (max-width: 1399px) {
          margin: 0 auto;
        }

        @media (max-width: 767px) {
          padding: 35px 20px;
        }

        @media (max-width: 575px) {
          padding: 9px 20px 35px;
        }
      }

      &__title {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: $primary-color;

        @media (max-width: 575px) {
          font-size: 24px;
          line-height: 29px;
        }
      }

      &__subtitle {
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: $text-black-gray;

        @media (max-width: 575px) {
          display: none;
        }
      }

      &__text {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: $text-black-gray;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;

          br {
            display: none;
          }
        }
      }

      &__list-title {
        margin-bottom: 15px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: $text-black-gray;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;
        }
      }

      &__list {
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        row-gap: 10px;
        width: 100%;
      }

      &__list-item {
        display: flex;
        align-items: flex-start;
        column-gap: 10px;
      }

      &__list-number {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: $primary-color;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;
        }
      }

      &__list-text {
        font-weight: 300;
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
        }
      }

      &__btn-box {
        display: flex;
        align-items: center;
        column-gap: 42px;
        margin-top: 40px;

        @media (max-width: 767px) {
          flex-direction: column-reverse;
          row-gap: 18px;
          margin-top: 20px;
        }
      }

      &__btn {
        min-height: 77px;
        max-width: 278px;
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.01em;
        color: #ffffff;

        @media (max-width: 575px) {
          min-height: 55px;
          max-width: 268px;
          border-radius: 10px;
          font-size: 18px;
          line-height: 22px;
        }
      }

      &__price {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: $btnred;

        @media (max-width: 575px) {
          font-size: 28px;
          line-height: 34px;
        }
      }
    }
  }
}
</style>
