<template>
  <section id="delivery">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Доставка в любую точку России</h3>
        <p class="title-box__subtitle">
          Заберите заказ в ближайшем пункте выдачи, или мы доставим до двери
        </p>
      </div>
      <p class="delivery__title">Рассчитать стоимость доставки</p>
      <div class="row">
        <div class="delivery__form-wrap">
          <div class="form-container">
            <form class="delivery__form spnForm" action="sendCall.php">
              <input type="hidden" class="gmt" name="gmt" />
              <input type="hidden" class="url" name="url" />
              <div class="delivery__inputs-box">
                <label class="delivery__label">
                  <span>Номер телефона</span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+7 (***) ***-**-**"
                  />
                </label>
                <label class="delivery__label">
                  <span>Город доставки</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Например: Москва"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Получить расчёт"
                class="delivery__form-btn btn-red"
              />
              <div v-html="formNeedInputs"></div>
            </form>
          </div>
        </div>
        <div class="delivery__features-wrap">
          <div class="delivery__features">
            <div
              v-for="(el, idx) in features"
              :key="idx"
              class="delivery__feature"
            >
              <div class="delivery__feature-icon">
                <img
                class="lazy"
                  :data-src="`new-site-vue/build/images/delivery/icon-${
                    idx + 1
                  }.svg`"
                  :alt="el.title"
                />
              </div>
              <div class="delivery__feature-context">
                <p class="delivery__feature-title" v-html="el.title"></p>
                <p class="delivery__feature-text" v-html="el.text"></p>
              </div>
            </div>
          </div>
          <div class="delivery__features-imgs">
            <div class="delivery__features-img" v-for="(num, i) in 3" :key="i">
              <picture>
                <source
                  :data-srcset="`new-site-vue/build/images/delivery/img-${num}.webp`"
                  type="image/webp"
                />
                <img
                  class="mechanics__main-img lazy"
                  :data-src="`new-site-vue/build/images/delivery/img-${num}.png`"
                  alt="Способ доставки"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Delivery",
  computed: mapGetters(["formNeedInputs"]),
  data() {
    return {
      features: [
        {
          title: "От 2 до 7 дней",
          text: "Быстрая доставка<br/>курьером по РФ.",
        },
        {
          title: "Оплата при получении",
          text: "Убедитесь в качестве<br/>товара на месте.",
        },
        {
          title: "Гарантия 1 год",
          text: "Сервисные центры<br/>по всей России.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#delivery {
  padding: 150px 0 115px;
  background: #ffffff;

  @media (max-width: 991px) {
    padding: 80px 0 80px;
  }

  @media (max-width: 767px) {
    padding: 60px 0 60px;
  }

  @media (max-width: 575px) {
    padding: 26px 0 46px;
  }

  .title-box {
    margin-bottom: 40px;

    @media (max-width: 575px) {
      margin-bottom: 30px;
    }
  }

  .row {
    display: flex;
    column-gap: 40px;
    width: 100%;
    font-family: "Inter", sans-serif;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .form-container {
    width: 100%;
    max-width: 100%;
    padding: 0;

    @media (max-width: 1399px) {
      position: sticky;
      top: 130px;
    }

    @media (max-width: 767px) {
      position: static;
    }
  }

  .delivery {
    &__title {
      width: 100%;
      margin-bottom: 17px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: $text-dark;

      @media (max-width: 767px) {
        margin-bottom: 20px;
      }

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__form-wrap {
      flex-direction: column;
      display: flex;
      align-items: center;
      flex-basis: 510px;
      max-width: 32%;

      @media (max-width: 1399px) {
        max-width: 42%;
      }

      @media (max-width: 991px) {
        max-width: 46%;
      }

      @media (max-width: 767px) {
        flex-basis: auto;
        max-width: 100%;
        width: 100%;
      }
    }

    &__form {
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 100%;
    }

    &__inputs-box {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      row-gap: 24px;
      width: 100%;
      margin-bottom: 0;

      @media (max-width: 575px) {
        row-gap: 20px;
      }

      .delivery__label {
        display: flex;
        flex-direction: column;
        align-items: stretch;

        span {
          margin-bottom: 11px;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #000000;

          @media (max-width: 575px) {
            margin-bottom: 9px;
            font-size: 16px;
            line-height: 22px;
          }
        }

        input {
          height: 71px;
          padding: 18px 25px;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }

    &__form-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 282px;
      min-height: 77px;
      margin-top: 40px;
      padding: 10px 15px;
      border-radius: 20px;
      font-family: inherit;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: none;

      @media (max-width: 575px) {
        min-height: 62px;
        margin-top: 27px;
        border-radius: 10px;
      }
    }

    &__features-wrap {
      flex-grow: 1;
      padding-top: 33px;

      @media (max-width: 767px) {
        padding-top: 42px;
      }
    }

    &__features {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      column-gap: 20px;
      row-gap: 40px;
      width: 100%;
      padding: 55px 0;
      margin-bottom: 46px;
      border-top: 1px solid #828282;
      border-bottom: 1px solid #828282;

      @media (max-width: 1399px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
      }

      @media (max-width: 767px) {
        padding: 0;
        margin-bottom: 27px;
        border: none;
      }
    }

    &__feature {
      display: flex;
      align-items: center;
      column-gap: 4px;

      @media (max-width: 1399px) {
        width: 100%;
        max-width: 320px;
      }

      @media (max-width: 575px) {
        &:nth-child(1) {
          .delivery__feature-icon {
            padding-left: 4px;
          }
        }

        &:nth-child(2) {
          .delivery__feature-icon {
            padding-right: 8px;
          }
        }

        &:nth-child(3) {
          .delivery__feature-icon {
            padding-right: 8px;
            padding-left: 12px;
          }
        }
      }
    }

    &__feature-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 75px;

      img {
        max-width: 100%;
      }

      @media (max-width: 575px) {
        min-width: 57px;
        max-width: 57px;
      }
    }

    &__feature-title {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: $primary-color;

      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 22px;
      }
    }

    &__feature-text {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #828282;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }

    &__features-imgs {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      column-gap: 40px;
      row-gap: 27px;
      flex-wrap: wrap;
      width: 100%;

      @media (max-width: 767px) {
        column-gap: 54px;
      }
    }
  }
}
</style>
