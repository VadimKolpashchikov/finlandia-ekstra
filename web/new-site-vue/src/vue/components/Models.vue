<template>
  <section id="models">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">
          Выберите свою <span>«Финляндию Экстра»</span>
        </h3>
        <p class="title-box__subtitle">Подойдёт под любые цели и желания</p>
      </div>
      <div class="cards">
        <div class="cards-pagination"></div>
        <div class="swiper-wrapper">
          <div
            class="card swiper-slide"
            v-for="(card, id) in cards"
            :key="id"
            :class="[id + 1 == cards.length ? 'card__special' : '']"
          >
            <p class="card__special-title">По цене 26 литров</p>
            <div class="card__wrap">
              <a
                class="card__img-wrap"
                :href="`new-site-vue/build/images/models/model-${id + 1}.jpg`"
                data-fancybox
              >
                <picture>
                  <source
                    :srcset="`new-site-vue/build/images/models/model-${
                      id + 1
                    }.webp`"
                    type="image/webp"
                  />
                  <img
                    class="mechanics__main-img"
                    :src="`new-site-vue/build/images/models/model-${
                      id + 1
                    }.jpg`"
                    alt="Финляндия Экстра"
                  />
                </picture>
              </a>
              <div class="card__text-wrap">
                <p class="card__text" v-html="card.text"></p>
                <ul class="card__list">
                  <li class="card__list-item">
                    <p class="card__list-text">Толщина стенок</p>
                    <p
                      class="card__list-number"
                      v-html="card.numbers.thickness"
                    ></p>
                  </li>
                  <li class="card__list-item">
                    <p class="card__list-text">Диаметр куба</p>
                    <p
                      class="card__list-number"
                      v-html="card.numbers.diameter"
                    ></p>
                  </li>
                  <li class="card__list-item">
                    <p class="card__list-text">Скорость перегонки (макс.)</p>
                    <p
                      class="card__list-number"
                      v-html="card.numbers.speed"
                    ></p>
                  </li>
                  <li class="card__list-item">
                    <p class="card__list-text">
                      Выход готового продукта&nbsp;(50°)
                    </p>
                    <p class="card__list-number" v-html="card.numbers.exit"></p>
                  </li>
                </ul>
                <p class="card__old-price">
                  {{ oneProduct(card.name).oldPriceF }} руб.
                </p>
                <p class="card__price">
                  {{ oneProduct(card.name).priceF }} руб.
                </p>
                <a
                  @click="selectMainProduct(id)"
                  href="#order-modal"
                  data-fancybox
                  class="card__btn"
                  :class="[id + 1 == cards.length ? 'btn-red' : 'btn-blue']"
                >
                  Заказать
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination, EffectFade } from "swiper";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Models",
  data() {
    return {
      cards: [
        {
          name: "f15",
          text: "Для начинающих винокуров. Станет отличным подарком дачникам, рыбакам и охотникам.",
          numbers: {
            thickness: "1,5 мм",
            diameter: "260 мм",
            speed: "6 л/час",
            exit: "2900 мл",
          },
        },
        {
          name: "f22",
          text: "Подходит для домашнего самогоноварения. Удобен для гастрономических экспериментов.",
          numbers: {
            thickness: "1,5 мм",
            diameter: "260 мм",
            speed: "6 л/час",
            exit: "3900 мл",
          },
        },
        {
          name: "f26",
          text: "Для тех, кто уже превзошёл любительский уровень и хочет стать профессионалом.",
          numbers: {
            thickness: "1,5 мм",
            diameter: "260 мм",
            speed: "6 л/час",
            exit: "4900 мл",
          },
        },
        {
          name: "f30",
          text: "Профессиональная модель, которая&nbsp;позволит воплотить все&nbsp;ваши&nbsp;задумки.",
          numbers: {
            thickness: "1,5 мм",
            diameter: "330 мм",
            speed: "6 л/час",
            exit: "5800 мл",
          },
        },
      ],
    };
  },
  computed: mapGetters(["oneProduct", "allMainProducts"]),
  methods: {
    ...mapMutations(["selectMain"]),
    selectMainProduct(id) {
      this.selectMain({
        id: this.allMainProducts[id].id,
        value: this.allMainProducts[id].value,
        price: this.allMainProducts[id].price,
        discont: this.allMainProducts[id].discont,
      });
    },
  },
  mounted() {
    const cardsSwiperbreakpoint = window.matchMedia("(max-width:767px)");
    let myCardsSwiper;
    const getPagination = (index) => {
      if (index == 1) {
        return "15 л";
      } else if (index == 2) {
        return "22 л";
      } else if (index == 3) {
        return "26 л";
      } else {
        return "30 л";
      }
    };
    const cardsSwiper = function () {
      myCardsSwiper = new Swiper(".cards", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        speed: 300,
        effect: "fade",
        loop: false,
        navigation: false,
        pagination: {
          clickable: true,
          el: ".cards-pagination",
          renderBullet: function (index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              getPagination(index + 1) +
              "</div>"
            );
          },
        },

        modules: [Pagination, EffectFade],
      });
    };
    const breakpointChecker = () => {
      if (cardsSwiperbreakpoint.matches) {
        return cardsSwiper();
      } else {
        if (myCardsSwiper) {
          return myCardsSwiper.destroy(true, true);
        }
      }
    };

    cardsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#models {
  padding: 180px 0 46px;
  background: #f3f3f3;

  @media (max-width: 991px) {
    padding: 100px 0 46px;
  }

  @media (max-width: 767px) {
    padding: 80px 0 46px;
  }

  @media (max-width: 575px) {
    padding: 26px 0 15px;
  }

  .content-container {
    @media (max-width: 575px) {
      padding: 0;
    }
  }

  .title-box {
    margin-bottom: 24px;
    @media (max-width: 575px) {
      margin-bottom: 28px;
      padding: 0 20;
    }
  }

  .cards {
    position: relative;
    margin: 0 -15px;
    padding: 16px 0 12px;
    overflow: hidden;

    @media (min-width: 768px) {
      margin: 0 -15px;
    }

    @media (max-width: 1280px) and (min-width: 768px) {
      padding: 0 0 12px;
    }

    @media (max-width: 767px) {
      width: 100%;
      max-width: 500px;
    }

    @media (max-width: 575px) {
      padding-bottom: 0;
    }

    .cards-pagination {
      position: static;
      display: flex;
      justify-content: center;
      column-gap: 5px;
      width: 100%;
      margin-bottom: -4px;
      z-index: 2;

      @media (min-width: 768px) {
        display: none;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        min-height: 54px;
        margin: 0;
        border-radius: 5px 5px 0px 0px;
        opacity: 1;
        color: #828282;
        background: rgba(255, 255, 255, 0.5);
        transition: 0.3s all;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.01em;

        &.swiper-pagination-bullet-active {
          color: $btnred;
          background: rgba(255, 255, 255, 1);
        }

        &:last-child {
          color: $btnred;
          background: rgba(248, 44, 44, 0.35);

          &.swiper-pagination-bullet-active {
            color: #ffffff;
            background: rgba(248, 44, 44, 1);
          }
        }
      }
    }

    .swiper-wrapper {
      @media (min-width: 768px) {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        row-gap: 40px;
        width: 100%;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      height: auto;
      font-family: "Inter", sans-serif;

      @media (min-width: 767px) {
        width: 25%;
        padding: 0 15px;
      }

      @media (max-width: 1280px) and (min-width: 768px) {
        width: 50%;
      }

      &__special-title {
        visibility: hidden;
        margin-bottom: 17px;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        color: transparent;

        @media (max-width: 767px) {
          display: none;
        }
      }

      &__wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 22px;
        border-radius: 10px;
        background-color: #ffffff;

        @media (max-width: 767px) {
          border-radius: 0;
        }
      }

      &__img-wrap {
        width: 100%;
        flex-shrink: 0;
        cursor: zoom-in;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      &__text-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        width: 100%;
        margin-top: 15px;

        @media (max-width: 575px) {
          margin-top: 18px;
        }
      }

      &__text {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: $text-black-gray;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;
        }
      }

      &__list {
        width: 100%;
        margin-top: 14px;
        margin-bottom: 14px;

        @media (max-width: 575px) {
          margin-bottom: 4px;
        }
      }

      &__list-item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 6px;
        width: 100%;
        padding: 8px 0;

        &:not(:first-child) {
          border-top: 1px solid rgba(0, 0, 0, 0.25);
        }
      }

      &__list-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: $text-black-gray;
      }

      &__list-number {
        white-space: nowrap;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: $text-black-gray;
      }

      &__old-price {
        margin-top: auto;
        margin-bottom: 6px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-decoration-line: line-through;
        color: $primary-color;
      }

      &__price {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: $primary-color;
      }

      &__btn {
        max-width: 326px;
        width: 100%;
        min-height: 77px;
        margin-top: 13px;
        border-radius: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.01em;

        @media (max-width: 575px) {
          min-height: 58px;
          border-radius: 10px;
        }
      }
    }

    .card__special {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 3px;
        top: -16px;
        width: calc(100% - 6px);
        height: calc(100% + 28px);
        background: #f82c2c;
        opacity: 0.25;
        border-radius: 10px;

        @media (max-width: 767px) {
          display: none;
        }
      }

      .card__special-title {
        position: relative;
        visibility: visible;
        color: $btnred;
      }

      .card__wrap {
        position: relative;
        @media (max-width: 767px) {
          outline: 4px solid $btnred;
          outline-offset: -4px;
        }
      }

      .card__old-price {
        color: $btnred;
      }

      .card__price {
        color: $btnred;
      }
    }
  }
}
</style>
