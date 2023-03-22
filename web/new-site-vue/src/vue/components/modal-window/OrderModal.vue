<template>
  <div id="order-modal" class="order-modal">
    <div class="order-modal__wrap">
      <div class="order-modal__imgs-box">
        <TransitionGroup name="fade" tag="div" class="order-modal__imgs-bg">
          <div
            v-for="(el, id) in allMainProducts"
            :key="id"
            v-show="el.value == orderState.value"
            class="order-modal__img-item"
          >
            <picture>
              <source
                :srcset="`new-site-vue/build/images/order-modal/f-${el.value}.webp`"
                type="image/webp"
              />
              <img
                :src="`new-site-vue/build/images/order-modal/f-${el.value}.png`"
                alt="Финляндия Экстра"
              />
            </picture>
          </div>
        </TransitionGroup>
      </div>
      <div class="order-modal__form-box">
        <h4 class="order-modal__title">Финляндия Экстра</h4>
        <p class="order-modal__text">
          с выгодой {{ orderState.discont }}% за
          <b>{{ orderState.price }}&nbsp;руб.</b>
        </p>
        <Select />
        <form
          action="sendOrder.php"
          method="post"
          class="spnForm order-modal__form"
        >
          <div class="blogger" v-if="ifBlogger" v-html="bloggerInputs"></div>

          <Podarok />

          <input
            type="hidden"
            v-bind:name="`quantity[${orderState.id}]`"
            class="main_product_q"
            value="1"
          />
          <input
            type="hidden"
            name="id[]"
            class="main_product"
            :value="orderState.id"
          />

          <input type="hidden" class="url" name="url" />
          <input type="hidden" class="gmt" name="gmt" />
          <input
            type="hidden"
            class="comment"
            name="comment"
            :value="orderState.rassrochka ? 'Покупка в рассрочку.' : ''"
          />
          <InputsBox />
          <div class="order-modal__rassrochka-wrap">
            <label class="order-modal__rassrochka-check custom-check">
              <input type="checkbox" v-model="orderState.rassrochka" />
              <div></div>
              <span> Покупка в рассрочку </span>
            </label>
          </div>
          <button type="submit" class="order-modal__form-btn btn-red">
            Заказать
          </button>
          <div v-html="formNeedInputs"></div>
          <p class="order-modal__info">
            Нажимая кнопку “Заказать”,<br />
            вы соглашаетесь на обработку персональных данных, а так же
            <a href="/uploadupdate/confidentiality.pdf" target="_blank"
              >с политикой конфиденциальности</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InputsBox from "../helpers/InputsBox.vue";
import Select from "../helpers/Select.vue";
import Podarok from "../helpers/Podarok.vue";
export default {
  name: "OrderModal",
  components: {
    InputsBox,
    Select,
    Podarok,
  },
  beforeMount() {},
  computed: mapGetters([
    "orderState",
    "allMainProducts",
    "oneProduct",
    "oneId",
    "ifBlogger",
    "bloggerInputs",
    "formNeedInputs",
  ]),
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#order-modal {
  display: none;
  max-width: 1050px;
  width: 100%;
  padding: 0;
  background: transparent;

  @media (max-width: 991px) {
    max-width: 500px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0 !important;
  }

  .order-modal {
    &__wrap {
      display: flex;
      align-items: stretch;
      width: 100%;
      border: 2px solid #828282;
      border-radius: 10px;
      background: #ffffff;
      overflow: hidden;

      @media (max-width: 991px) {
        flex-direction: column;
      }
    }

    &__imgs-box {
      width: 50%;

      @media (max-width: 991px) {
        width: 100%;
      }
    }

    &__imgs-bg {
      position: relative;
      display: flex;

      width: 100%;
      padding: 16px;
      background-color: #f2f2f2;
      overflow: hidden;
      @media (min-width: 992px) {
        height: 100%;
      }

      @media (max-width: 991px) {
        aspect-ratio: 495/745;
      }
    }

    &__img-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      flex-shrink: 0;

      @media (max-width: 991px) {
        max-height: 85vh;
      }

      picture {
        max-height: 100%;
      }

      img {
        max-width: 380px;
        width: auto;
        object-fit: contain;
        max-height: 100%;

        @media (max-width: 575px) {
          max-width: 330px;
        }
      }
    }

    &__form-box {
      width: 50%;
      max-width: 440px;
      padding: 32px;
      margin: 0 auto;
      font-family: "Montserrat", sans-serif;

      @media (max-width: 991px) {
        width: 100%;
      }

      @media (max-width: 575px) {
        padding: 15px 11px;
      }
    }

    &__title {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      color: $text-black-gray;

      @media (max-width: 991px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
    }

    &__text {
      margin-bottom: 34px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.01em;
      color: $text-black-gray;

      @media (max-width: 991px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 18px;
      }

      b {
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        white-space: nowrap;

        @media (max-width: 575px) {
          font-size: 19px;
          line-height: 22px;
        }
      }
    }

    &__form {
      margin-top: 26px;
    }

    &__rassrochka-wrap {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 12px;

      @media (max-width: 575px) {
        padding-top: 0;
      }
    }

    &__rassrochka-check {
      display: flex;
      align-items: center;
      column-gap: 10px;

      div {
        width: 24px;
        height: 24px;
        background-size: 16px 16px;
      }

      span {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        color: $text-black-gray;

        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 17px;
        }
      }

      &:hover {
        div {
          border-color: $btnred;
          box-shadow: 0 0 4px 1px rgb(192 33 33 / 32%);
        }
      }
    }

    &__form-btn {
      width: 100%;
      min-height: 77px;
      margin-top: 36px;
      padding: 10px;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.01em;
      text-transform: uppercase;

      @media (max-width: 575px) {
        min-height: 62px;
        margin-top: 24px;
        font-size: 18px;
        line-height: 22px;
      }
    }

    &__info {
      margin-top: 20px;
      opacity: 0.9;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: $text-black-gray;

      a {
        color: $primary-color;
        transition: 0.3s all;

        &:hover {
          color: #ff0000;
        }
      }
    }
  }
}
</style>
