<template>
  <section id="rassrochka">
    <div class="content-container">
      <div class="title-box">
        <h4 class="title-box__title">Покупайте сейчас, платите потом!</h4>
        <div class="title-box__img">
          <picture>
            <source
              data-srcset="new-site-vue/build/images/rassrochka/tinkoff.webp"
              type="image/webp"
            />
            <img
            class="lazy"
              data-src="new-site-vue/build/images//rassrochka/tinkoff.png"
              alt="Тинькофф Лого"
            />
          </picture>
        </div>
      </div>
      <div class="features-box">
        <div
          v-for="(item, id) in featuresList"
          :key="id"
          class="features-box__item"
        >
          <h5 class="features-box__title">
            {{ item.title }}
          </h5>
          <p class="features-box__text">
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="info-box">
        <div class="info-box__content-wrap">
          <ul class="info-box__list">
            <li
              v-for="(item, id) in infoList"
              :key="id"
              class="info-box__list-item"
            >
              <p class="info-box__list-number">{{ id + 1 }}.</p>
              <p class="info-box__list-text" v-html="item"></p>
            </li>
          </ul>
          <p class="info-box__price">
            <span>{{ oneProduct("f15").priceF }} руб.</span>от
            {{
              new Intl.NumberFormat("ru-RU").format(
                Math.floor(oneProduct("f15").price / 4)
              )
            }}
            руб. / 4&nbsp;мес.
          </p>
          <a
            href="#order-modal"
            @click="rassrochkaOn"
            data-fancybox
            class="info-box__btn btn-animate"
            >Купить в рассрочку</a
          >
        </div>
        <div class="info-box__img-wrap">
          <div class="info-box__img-absolute">
            <picture>
              <source
                data-srcset="
                  new-site-vue/build/images/rassrochka/rassrochka-img.webp
                "
                type="image/webp"
              />
              <img
              class="lazy"
                data-src="new-site-vue/build/images/rassrochka/rassrochka-img.png"
                alt="Покупка в рассрочку"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Rassrochka",
  data() {
    return {
      featuresList: [
        {
          title: "Без",
          text: "первоначального взноса",
        },
        {
          title: "Без",
          text: "процентов",
        },
        {
          title: "Первый платеж",
          text: "через месяц",
        },
      ],
      infoList: [
        "Нажмите кнопку <span>“Купить в рассрочку”</span>",
        "В появившемся окне выберите нужную комплектацию",
        "Нажмите <span>“Заказать”</span>",
      ],
    };
  },
  computed: mapGetters(["oneProduct"]),
  methods: mapMutations(["rassrochkaOn"]),
};
</script>

<style lang="scss">
@import "../../scss/variables";
#rassrochka {
  padding: 72px 0 66px;
  background: #ffffff;
  overflow: hidden;

  @media (max-width: 767px) {
    padding: 0;
  }

  .content-container {
    max-width: 1600px;
    width: 100%;
    padding: 0 !important;
  }

  .title-box {
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 233px;
    padding: 50px 220px 100px;
    border-radius: 10px;
    background-color: #fceb0b;
    background-image: url("../images/rassrochka/percent.png");
    background-position: right bottom;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 991px) {
      min-height: auto;
      padding: 50px 22.2vw 100px;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      padding: 20px 20px 64px;
      border-radius: 0;
      background-image: none;
    }

    &__title {
      position: relative;
      z-index: 2;
      color: $text-dark;

      @media (max-width: 575px) {
        max-width: 220px;
        font-weight: 700;
        font-size: 22px;
        line-height: 22px;
      }
    }

    &__img {
      position: absolute;
      z-index: 1;
      top: 41px;
      left: 4.3%;

      @media (max-width: 991px) {
        top: calc(50% - 10px);
        left: 4%;
        transform: translateY(-50%);
        max-width: 157px;
        width: 18vw;
      }

      @media (max-width: 767px) {
        position: static;
        transform: translateY(0);
        width: auto;
      }

      @media (max-width: 575px) {
        width: 74px;
      }

      img {
        width: 100%;
      }
    }
  }

  .features-box {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    max-width: 1050px;
    padding: 0 16px;
    width: 100%;
    margin-top: -83px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      margin-top: -44px;
      padding: 0 28px;
    }

    @media (max-width: 575px) {
      row-gap: 10px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 1px;
      flex-grow: 1;
      min-height: 226px;
      padding: 10px;
      background: #f2f2f2;
      border-radius: 10px;

      @media (max-width: 767px) {
        width: 100%;
        min-height: 87px;
        max-width: 500px;
        padding: 14px 12px 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
      }
    }

    &__title {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 30px;
      line-height: 37px;
      text-align: center;
      color: $text-dark;

      @media (max-width: 575px) {
        margin-bottom: 1px;
        font-weight: 700;
        font-size: 22px;
        line-height: 22px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: $text-dark;

      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .info-box {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: stretch;
    column-gap: 20px;
    max-width: 1050px;
    padding: 0 16px;
    width: 100%;
    margin-top: 25px;

    @media (max-width: 767px) {
      flex-direction: column-reverse;
      padding: 0;
      margin-top: 0;
    }

    &__content-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 600px;
      padding: 36px 45px 40px;
      background: #f2f2f2;
      border-radius: 10px;

      @media (max-width: 991px) {
        width: 58%;
        padding: 36px 40px 43px;
      }

      @media (max-width: 767px) {
        align-items: center;
        max-width: 100%;
        width: 100%;
        padding: 27px 12px 20px;
        border-radius: 0;
      }
    }

    &__list {
      width: 100%;
      max-width: 380px;
      margin-bottom: 42px;
      font-family: "Inter", sans-serif;

      @media (max-width: 767px) {
        margin-bottom: 0;
      }
    }

    &__list-item {
      display: flex;
      align-items: flex-start;
      column-gap: 10px;
      width: 100%;

      &:not(:last-child) {
        padding-bottom: 15px;
        border-bottom: 1px solid #bdbdbd;
        margin-bottom: 15px;
      }

      @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        row-gap: 5px;

        &:not(:last-child) {
          padding-bottom: 12px;
          margin-bottom: 12px;
        }
      }

      @media (max-width: 575px) {
        &:first-child {
          .info-box__list-text {
            max-width: 220px;
          }
        }
      }
    }

    &__list-number {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: $text-dark;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    &__list-text {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.7);
      span {
        font-weight: 700;
      }

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    &__price {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      color: $text-dark;

      @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 1px;
      }

      @media (max-width: 767px) {
        align-items: center;
        margin-top: 20px;
        order: 3;
        text-align: center;
      }

      @media (max-width: 575px) {
        font-size: 30px;
        line-height: 37px;
      }

      span {
        margin-right: 11px;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        text-decoration-line: line-through;
        color: #828282;
        @media (max-width: 767px) {
          margin: 0 auto;
        }

        @media (max-width: 575px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }

    &__btn {
      position: relative;
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 380px;
      min-height: 77px;
      padding: 10px 20px;
      margin-top: 24px;
      background: #fceb0a;
      border-radius: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.01em;
      color: $text-dark;
      transition: 0.3s all;
      cursor: pointer;

      @media (max-width: 767px) {
        max-width: 500px;
      }

      @media (max-width: 575px) {
        min-height: 65px;
        max-width: 267px;
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
        line-height: 24px;
      }

      &:hover {
        background: rgb(214, 200, 3);
        box-shadow: 0 4px 4px 1px rgb(214, 200, 3, 32%);
        transform: translateY(-2px);
      }
    }

    &__img-wrap {
      position: relative;
      flex-grow: 1;
      z-index: 3;

      @media (max-width: 767px) {
        margin-top: -10px;
      }
    }

    &__img-absolute {
      position: absolute;
      left: -140px;
      bottom: -66px;
      width: 70vw;
      max-width: 883px;
      height: auto;
      transition: 0.3s all;

      // @media (max-width: 1199px) {
      //   left: -50px;
      // }

      @media (max-width: 1023px) {
        // left: -80px;
        width: 74vw;
      }

      @media (max-width: 991px) {
        // left: -100px;
        width: 75vw;
      }

      @media (max-width: 767px) {
        position: static;
        width: auto;
        max-width: 100vw;
      }

      picture {
        display: flex;
      }

      img {
        width: 100%;
        max-width: 883px;
        transition: 0.3s all;
      }
    }
  }
}
</style>
