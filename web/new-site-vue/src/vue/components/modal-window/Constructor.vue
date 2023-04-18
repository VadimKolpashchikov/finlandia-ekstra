<template>
  <div id="constructor-new">
    <div class="constructor-new__wrap" v-on:click="closeDopModal">
      <div class="constructor-new__img-wrap">
        <div class="constructor-new__img-box">
          <TransitionGroup name="fade" tag="div" class="main-product">
            <img
              v-for="(item, id) in mainProducts"
              :key="id"
              :data-src="`new-site-vue/build/images/constructor-modal/f-${item.value}.png`"
              v-show="item.selected"
              alt="Финляндия экстра"
              class="lazy"
            />
          </TransitionGroup>
          <div
            v-for="(dop, i) in dops"
            :key="i"
            class="img-dop"
            :class="[dop.img, dop.selected ? 'img-dop_show' : '']"
          >
            <template v-if="dop.img">
              <img
                class="lazy"
                :data-src="`new-site-vue/build/images/constructor-modal/${dop.img}.png`"
                alt="Финляндия экстра дополнительно"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="constructor-new__content-wrap">
        <div class="constructor-new__content-text">
          <h2 class="constructor-new__title">
            Заказать<br />
            “Финляндия Экстра”
          </h2>
          <p class="constructor-new__subtitle">
            Вы можете выбрать доп. товары или сразу перейти к оформлению заказа
          </p>
        </div>

        <div class="constructor-new__content-order">
          <div class="constructor-new__content-dops">
            <p
              class="constructor-new__dops-subtitle constructor-new__block-subtitle"
            >
              Добавьте в заказ
            </p>
            <div class="dops-container">
              <div class="dops-item" v-for="(dop, index) in dops" :key="index">
                <label class="dops-item__check custom-check">
                  <input
                    type="checkbox"
                    v-on:change="selectDopProduct(dop)"
                    v-model="dop.selected"
                  />
                  <div></div>
                </label>
                <a
                  href="#present-modal"
                  data-fancybox
                  v-on:click="
                    openPresentModal({
                      title: dop.title,
                      text: dop.description,
                    })
                  "
                  class="dops-item__name"
                >
                  {{ dop.name }}
                </a>
                <div class="dops-item__price-wrap">
                  <p class="dops-item__price">{{ dop.price }} {{ cur }}</p>
                  <p class="dops-item__oldprice">
                    {{ dop.oldPrice }} {{ cur }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="constructor-new__content-select">
            <p
              class="constructor-new__dops-subtitle constructor-new__block-subtitle"
            >
              Оформление заказа
            </p>
            <div class="custom-select">
              <div class="custom-select__head">
                <div class="custom-select__head-info">
                  <p>
                    Выберите <br />
                    объём аппарата:
                  </p>
                  <p class="custom-select__head-indicator">
                    <span>{{ selectedValue }}</span> L
                  </p>
                </div>
                <div
                  class="custom-select__head-btn"
                  v-bind:class="{
                    'custom-select__head-btn_active': selectShow,
                  }"
                  v-on:click="toShowSelect"
                >
                  <svg
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L14 14L27 1"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <transition
                name="accordion"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                style="transition: height 0.6s"
              >
                <ul class="custom-select__list" v-show="selectShow">
                  <li
                    v-for="(item, index) in mainProducts"
                    :key="index"
                    @click="selectMainProduct(item)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </transition>
            </div>
          </div>

          <div class="constructor-new__content-form">
            <form
              action="sendOrder.php"
              method="post"
              class="spnForm constructor-new__form"
            >
              <div
                class="blogger"
                v-if="ifBlogger"
                v-html="bloggerInputs"
              ></div>
              <podarok />
              <div v-for="(dop, id) in dops" :key="id">
                <input
                  type="hidden"
                  v-bind:name="`quantity[${dop.id}]`"
                  v-bind:value="dop.selected ? '1' : '0'"
                />
                <input type="hidden" name="id[]" v-bind:value="dop.id" />
              </div>

              <input type="hidden" class="url" name="url" />
              <input type="hidden" class="gmt" name="gmt" />
              <input
                type="hidden"
                class="comment"
                name="comment"
                v-bind:value="kredit ? 'Покупка в рассрочку.' : ''"
              />
              <input
                type="hidden"
                v-bind:name="`quantity[${mainProductId}]`"
                class="main_product_q"
                value="1"
              />
              <input
                type="hidden"
                name="id[]"
                class="main_product"
                v-bind:value="mainProductId"
              />
              <inputs-box />
              <div class="fixed-box">
                <div class="constructor-new__price-box">
                  <div class="constructor-new__price-wrap">
                    <p class="constructor-new__price-text">Итого:</p>
                    <p class="constructor-new__price-number">
                      <span>{{ allPrice }}</span> {{ cur }}
                    </p>
                  </div>
                  <label class="constructor-new__rassrochka-check">
                    <input type="checkbox" v-model="kredit" />
                    <div></div>
                    <span> Покупка в рассрочку </span>
                  </label>
                </div>

                <button type="submit" class="constructor-new__form-btn btn-red">
                  Заказать
                </button>
                <div v-html="formNeedInputs"></div>
                <p class="constructor-new__info">
                  Нажимая кнопку “Заказать”,<br />
                  вы соглашаетесь на обработку персональных данных, а так же
                  <a href="/uploadupdate/confidentiality.pdf" target="_blank"
                    >с политикой конфиденциальности</a
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputsBox from "../helpers/InputsBox.vue";
import Podarok from "../helpers/Podarok.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ConstructorModal",
  components: {
    InputsBox,
    Podarok,
  },
  computed: {
    ...mapGetters([
      "oneProduct",
      "oneId",
      "ifBlogger",
      "bloggerInputs",
      "formNeedInputs",
    ]),
    allPrice() {
      return this.mainProductPrice + this.dopsPrice;
    },
  },
  beforeMount() {
    this.mainProductId = this.oneId("f15");
    this.mainProductPrice = this.oneProduct("f15").price;
    this.dops = [
      {
        id: this.oneId("arom"),
        name: "Крышка-ароматор",
        title: "Крышка-ароматор",
        img: "arom-dop",
        price: this.oneProduct("arom").price,
        oldPrice: this.oneProduct("arom").oldPrice,
        selected: false,
        description:
          "<p>Используйте ягоды можжевельника " +
          "или медовые соты. Не ограничивайте " +
          "себя уже существующими рецептами " +
          "— создавайте авторские напитки " +
          "самостоятельно.</p>",
      },
      {
        id: this.oneId("zarga"),
        name: "Доп. царга (450 мм)",
        title: "Дополнительная царга (450 мм)",
        img: "zarga-dop",
        price: this.oneProduct("zarga").price,
        oldPrice: this.oneProduct("zarga").oldPrice,
        selected: false,
        description:
          "<p>Благодаря установленной доп. царге, " +
          "на аппарате можно получать самогон " +
          "крепостью до 85-90 градусов " +
          "уже с первой перегонки.</p>",
      },
      {
        id: this.oneId("kolonna"),
        name: "Угольная колонна",
        title: "Угольная колонна",
        img: "kolonna-dop",
        price: this.oneProduct("kolonna").price,
        oldPrice: this.oneProduct("kolonna").oldPrice,
        selected: false,
        description:
          "<p>Угольная колонна нужна, чтобы " +
          "дополнительно очистить конечный " +
          "продукт за счет абсорбирующих " +
          "свойств активированного угля.</p>",
      },
      {
        id: this.oneId("popugai"),
        name: "Попугай",
        title: "Попугай",
        img: "popugai-dop",
        price: this.oneProduct("popugai").price,
        oldPrice: this.oneProduct("popugai").oldPrice,
        selected: false,
        description:
          "<p>Приспособление для самогонщиков, " +
          "которое облегчает отбор голов " +
          "и позволяет проводить измерения " +
          "крепости продукта прямо во время перегонки.</p>",
      },
      {
        id: this.oneId("prokladki"),
        name: "Набор запасных прокладок",
        title: "Набор запасных прокладок",
        price: this.oneProduct("prokladki").price,
        oldPrice: this.oneProduct("prokladki").oldPrice,
        selected: false,
        description:
          "<ul>" +
          "<li>Силиконовая прокладка<br> на фланец (5 мм)</li>" +
          "<li>Силиконовая прокладка<br> сухопарника (5 мм)</li>" +
          "<li>Прокладка клампового соединения</li>" +
          "</ul>",
      },
      {
        id: this.oneId("spn_m"),
        name: "СПН медь 0,5 кг",
        title: "СПН медь 0,5 кг (3,5х3,5 мм)",
        img: "spn-m-dop",
        price: this.oneProduct("spn_m").price,
        oldPrice: this.oneProduct("spn_m").oldPrice,
        selected: false,
        description:
          "<p>Ими наполняют царгу, чтобы очистить " +
          "самогон и улучшить качество<br> " +
          "готового продукта.</p>",
      },
      {
        id: this.oneId("spn_n"),
        name: "СПН нержавейка 0,5 кг",
        title: "СПН нержавейка 0,5 кг<br>(3,5х3,5 мм)",
        img: "spn-n-dop",
        price: this.oneProduct("spn_n").price,
        oldPrice: this.oneProduct("spn_n").oldPrice,
        selected: false,
        description:
          "<p>Спирально-призматические насадки " +
          "используют в домашних дистилляторах " +
          "и колоннах для повышения качества " +
          "очистки самогона.</p>",
      },
      {
        id: this.oneId("dioptr"),
        name: "Диоптр",
        title: "Диоптр",
        img: "dioptr-dop",
        price: this.oneProduct("dioptr").price,
        oldPrice: this.oneProduct("dioptr").oldPrice,
        selected: false,
        description:
          "<p>Диоптр (смотровое стекло)<br> " +
          "предназначен в первую очередь  " +
          "для контроля за процессом  " +
          "укрепления самогона или процессом ректификации.</p>",
      },
    ];
    this.mainProducts = [
      {
        id: this.oneId("f15"),
        name: "Финляндия Экстра 15Л",
        value: 15,
        price: this.oneProduct("f15").price,
        oldPrice: this.oneProduct("f15").oldPrice,
        selected: true,
      },
      {
        id: this.oneId("f22"),
        name: "Финляндия Экстра 22Л",
        value: 22,
        price: this.oneProduct("f22").price,
        oldPrice: this.oneProduct("f22").oldPrice,
        selected: false,
      },
      {
        id: this.oneId("f26"),
        name: "Финляндия Экстра 26Л",
        value: 26,
        price: this.oneProduct("f26").price,
        oldPrice: this.oneProduct("f26").oldPrice,
        selected: false,
      },
      {
        id: this.oneId("f30"),
        name: "Финляндия Экстра 30Л",
        value: 30,
        price: this.oneProduct("f30").price,
        oldPrice: this.oneProduct("f30").oldPrice,
        selected: false,
      },
    ];
  },
  data() {
    return {
      cur: "руб.",
      selectShow: false,
      mainProductId: 0,
      selectedValue: 15,
      mainProductPrice: 0,
      dopsPrice: 0,
      kredit: false,
      dops: [],
      mainProducts: [],
    };
  },
  methods: {
    ...mapMutations(["openPresentModal"]),
    selectMainProduct(item) {
      this.selectedValue = item.value;
      this.mainProductPrice = item.price;
      this.mainProducts.forEach((el) => (el.selected = false));
      this.mainProductId = item.id;
      item.selected = true;
      this.toShowSelect();
    },
    selectDopProduct(item) {
      if (item.selected == true) {
        this.dopsPrice += item.price;
      } else {
        this.dopsPrice -= item.price;
      }
    },
    toShowSelect() {
      this.selectShow = !this.selectShow;
    },
    //Открытие селекта
    beforeEnter: function (el) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 20 + 15 + "px";
      el.style.paddingTop = "20px";
      el.style.paddingBottom = "15px";
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + 20 + 15 + "px";
      el.style.paddingTop = "20px";
      el.style.paddingBottom = "15px";
    },
    leave: function (el) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    },
  },
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#constructor-new {
  display: none;
  padding: 0;
  background: #ffffff;
  border-radius: 10px;
  max-width: 1620px;
  width: 100%;
  border: 2px solid #828282;
  font-family: "Montserrat", sans-serif !important;

  @media (max-width: 991px) {
    max-width: 500px;
    padding: 0 !important;
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

  .constructor-new__wrap {
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 100%;
    cursor: default;

    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .constructor-new__img-wrap {
    width: 100%;
    max-width: 585px;
    background: #f2f2f2;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 1499px) {
      max-width: 485px;
    }

    @media (max-width: 1365px) {
      max-width: 585px;
    }

    @media (max-width: 1199px) {
      display: flex;
      justify-content: center;
      max-width: 485px;
    }

    @media (max-width: 991px) {
      max-width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
    }

    .constructor-new__img-box {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      aspect-ratio: 0.65;
      width: 100%;
      max-width: 585px;
      pointer-events: none;
      overflow: hidden;

      @media (max-width: 1499px) {
        max-width: 485px;
      }

      @media (max-width: 1365px) {
        max-width: 585px;
      }

      @media (max-width: 1199px) {
        max-height: 100vh;
        max-width: 485px;
      }

      @media (max-width: 991px) {
        position: relative;
        top: 0;
        max-height: auto;
        aspect-ratio: 0.64646;
        transform: translateY(0);
        max-width: 100%;
      }

      img {
        position: absolute;
      }

      .img-dop {
        position: absolute;
        opacity: 0.4;
        transition: 0.3s all;

        &_show {
          opacity: 1;
        }

        img {
          position: static;
          max-width: 100%;
          height: auto;
        }
      }

      .main-product {
        position: absolute;
        display: flex;
        justify-content: flex-start;
        width: 63.07%;
        height: 87.22%;
        top: 0;
        left: 15%;

        img {
          max-width: 100%;
        }

        @media (max-width: 991px) {
          align-items: center;
          width: 56.5625%;
          height: 79.22%;
          // top: 5.252%;
          left: 21.1875%;
        }
      }

      .arom-dop {
        width: 27%;
        bottom: 2.111%;
        right: 25.47%;
        @media (max-width: 991px) {
          width: 23.3437%;
          bottom: 10.836%;
          right: 32.03%;
        }
      }

      .dioptr-dop {
        width: 22.375%;
        bottom: 10%;
        right: 21.36%;
        @media (max-width: 991px) {
          width: 19.6875%;
          bottom: 0;
          right: 20.625%;
        }
      }

      .kolonna-dop {
        width: 20.683%;
        right: 21.4188%;
        bottom: 28.666%;
        @media (max-width: 991px) {
          width: 17.8125%;
          bottom: 36.5656%;
          right: 6.562%;
        }
      }

      .popugai-dop {
        width: 28.376%;
        right: -0.6666%;
        bottom: 2.7777%;
        @media (max-width: 991px) {
          width: 24.375%;
          bottom: 11.313%;
          right: 9.062%;
        }
      }

      .spn-m-dop {
        width: 39.83%;
        left: -1%;
        bottom: 7.666%;
        @media (max-width: 991px) {
          width: 34.375%;
          bottom: 10.5%;
          left: 9.68%;
        }
      }

      .spn-n-dop {
        width: 46.8376%;
        bottom: 0.6666%;
        left: 5.983%;
        @media (max-width: 991px) {
          width: 40.625%;
          bottom: 4.444%;
          left: 15.9375%;
        }
      }

      .zarga-dop {
        width: 19.145%;
        bottom: 21.8888%;
        left: 0.906%;
        @media (max-width: 991px) {
          width: 16.5625%;
          bottom: 21.2121%;
          left: 6.875%;
        }
      }
    }
  }

  .constructor-new__content-wrap {
    max-width: calc(100% - 585px);
    width: 100%;
    padding: 40px 80px 17px 60px;

    @media (max-width: 1499px) {
      max-width: calc(100% - 485px);
    }

    @media (max-width: 1365px) {
      max-width: calc(100% - 585px);
      padding: 40px 80px 32px 60px;
    }

    @media (max-width: 1199px) {
      max-width: calc(100% - 485px);
      padding: 32px 50px 32px 40px;
    }

    @media (max-width: 991px) {
      max-width: 100%;
      padding: 32px;
    }

    @media (max-width: 575px) {
      padding: 15px 11px 29px;
    }

    .constructor-new__content-text {
      width: 100%;
      margin-bottom: 42px;

      @media (max-width: 991px) {
        margin-bottom: 14px;
      }

      .constructor-new__title {
        margin: 0 0 10px;
        font-weight: 600;
        font-size: 50px;
        line-height: 61px;
        font-family: inherit;
        text-transform: none;
        letter-spacing: normal;
        text-align: left;
        color: #4f4f4f;

        @media (min-width: 992px) {
          br {
            display: none;
          }
        }

        @media (max-width: 1365px) {
          text-align: center;
        }

        @media (max-width: 991px) {
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
        }
      }

      .constructor-new__subtitle {
        width: 100%;
        max-width: 670px;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.01em;
        font-family: inherit;
        color: #4f4f4f;

        @media (max-width: 1365px) {
          text-align: center;
          margin: 0 auto;
        }

        @media (max-width: 991px) {
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          max-width: 275px;
        }
      }
    }

    .constructor-new__content-order {
      display: grid;
      grid-template-columns: 1fr 375px;
      grid-template-rows: min-content 1fr;
      width: 100%;
      column-gap: 32px;

      @media (max-width: 1365px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }

      .constructor-new__block-subtitle {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.01em;
        font-family: inherit;
        color: #4f4f4f;

        @media (max-width: 1365px) {
          display: none;
        }
      }
    }

    .constructor-new__content-dops {
      grid-column: 1/2;
      grid-row: 1/3;
      max-width: 432px;

      @media (max-width: 1365px) {
        grid-column: 1/2;
        grid-row: 2/3;
        max-width: 100%;
      }

      .dops-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
        width: 100%;
        @media (max-width: 1365px) {
          margin-top: 25px;
        }

        @media (max-width: 575px) {
          margin-top: 20px;
        }
      }

      .dops-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 22px;
        width: 100%;
        padding: 20px 0 23px;

        &:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 575px) {
          column-gap: 13px;
          padding: 11px 0 16px;
        }
      }

      .dops-item__name {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        text-decoration-line: underline;
        color: $text-dark;
        transition: 0.3s all;

        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 17px;
        }

        &:hover {
          color: #ff0000;
        }
      }

      .dops-item__price-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-left: auto;
      }

      .dops-item__price {
        white-space: nowrap;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        text-align: right;
        color: #333333;

        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 28px;
        }
      }

      .dops-item__oldprice {
        font-family: inherit;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-align: right;
        text-decoration-line: line-through;
        color: #333333;

        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }

    .constructor-new__content-select {
      grid-column: 2/3;
      grid-row: 1/2;

      @media (max-width: 1365px) {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      .constructor-new__custom-select-wrap {
        position: relative;
        width: 100%;
        padding-top: 12px;

        @media (max-width: 575px) {
          padding-top: 0;
        }

        .constructor-new__custom-select {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          height: 71px;
          border: 1px solid #4f4f4f;
          border-radius: 10px;
          background: #f2f2f2;
          overflow: hidden;
          .constructor-new__custom-select-info {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 5px;
            padding: 11px 23px 12px 25px;

            @media (max-width: 575px) {
              column-gap: 3px;
              padding: 12px 20px 12px 15px;
            }

            p {
              width: auto;
              max-width: 165px;
              font-weight: 400;
              font-size: 19px;
              line-height: 24px;
              display: flex;
              align-items: center;
              letter-spacing: -0.01em;
              color: rgba(0, 0, 0, 0.5);

              @media (max-width: 575px) {
                font-size: 14px;
                line-height: 17px;
              }

              @media (min-width: 480px) {
                br {
                  display: none;
                }
              }
            }

            .constructor-new__custom-select-indicator {
              font-weight: 700;
              font-size: 30px;
              line-height: 36px;
              display: flex;
              align-items: center;
              color: #000000;
            }
          }

          .constructor-new__custom-select-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            height: 100%;
            width: 80px;
            border-left: 1px solid #4f4f4f;
            cursor: pointer;
            transition: 0.3s all;

            @media (max-width: 575px) {
              width: 60px;
            }

            svg {
              width: 28px;
              height: 16px;
              transition: 0.3s all;
              path {
                stroke: #4f4f4f;
                transition: 0.3s all;
              }
            }

            &_active {
              background-color: rgba(255, 0, 0, 0.5);
              svg {
                width: 28px;
                height: 16px;
                transform: rotate(180deg);
                path {
                  stroke: #000000;
                }
              }
            }

            &:hover {
              background-color: rgba(255, 0, 0, 0.5);
              svg {
                width: 28px;
                height: 16px;
                path {
                  stroke: #000000;
                }
              }
            }
          }
        }

        .constructor-new__custom-select-list {
          position: absolute;
          top: 72px;
          left: 0;
          display: flex;
          flex-wrap: wrap;
          row-gap: 10px;
          width: 100%;
          padding: 0 15px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          background: #f2f2f2;
          overflow: hidden;
          height: 0;
          transform: scaleY(0.75);
          opacity: 0.5;
          border: 1px solid #4f4f4f;
          transition: 0.4s all;
          transform-origin: top;

          @media (max-width: 575px) {
            top: 60px;
            row-gap: 8px;
          }

          &_show {
            height: max-content;
            opacity: 1;
            padding: 20px 15px 15px;
            transform: scaleY(1);
          }

          li {
            position: relative;
            width: 100%;
            padding: 0 5px;
            font-weight: 400;
            font-size: 19px;
            line-height: 24px;
            letter-spacing: -0.01em;
            color: rgba(0, 0, 0, 0.5);
            transition: 0.3s all;
            cursor: pointer;

            @media (max-width: 575px) {
              font-size: 14px;
              line-height: 18px;
            }

            &:before {
              content: "+";
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              font-size: 19px;
              color: rgba(0, 0, 0, 0.5);
              opacity: 0;
              transition: 0.3s all;

              @media (max-width: 575px) {
                display: none;
              }
            }

            &:hover {
              padding-left: 24px;
              color: rgba(0, 0, 0, 1);
              background-color: rgba(255, 0, 0, 0.5);

              &:before {
                content: "+";
                left: 7px;
                color: rgba(0, 0, 0, 1);
                opacity: 1;
              }
            }
          }
        }
      }
    }

    .constructor-new__content-form {
      grid-column: 2/3;
      grid-row: 2/3;
      //   width: 375px;

      @media (max-width: 1365px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      .constructor-new__form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: 27px;

        @media (max-width: 575px) {
          margin-top: 20px;
        }
      }

      .fixed-box {
        width: 100%;
      }

      .constructor-new__price-box {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        column-gap: 8px;
        margin-bottom: 25px;

        @media (max-width: 575px) {
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          margin-bottom: 22px;
          row-gap: 19px;
        }

        .constructor-new__price-wrap {
          width: max-content;
          max-width: 100%;

          @media (max-width: 575px) {
            order: 2;
          }

          .constructor-new__price-text {
            font-family: inherit;
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: #000000;

            @media (max-width: 575px) {
              font-size: 24px;
              line-height: 40px;
            }
          }

          .constructor-new__price-number {
            font-family: inherit;
            font-weight: 700;
            font-size: 40px;
            line-height: 40px;
            color: #000000;
            white-space: nowrap;
          }
        }

        .constructor-new__rassrochka-check {
          position: relative;
          display: flex;
          align-items: center;
          column-gap: 10px;
          width: max-content;
          max-width: 100%;
          cursor: pointer;

          @media (max-width: 575px) {
            order: 1;
          }

          input {
            position: absolute;
            visibility: hidden;
            width: 1px;
            height: 1px;
          }
          div {
            width: 24px;
            height: 24px;
            border: 2px solid #4f4f4f;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 14px 9px;
            transition: 0.3s all;
          }

          span {
            width: max-content;
            max-width: 113px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            display: flex;
            align-items: center;
            letter-spacing: 0.01em;
            color: #4f4f4f;

            @media (max-width: 575px) {
              max-width: 100%;
              font-size: 14px;
              line-height: 17px;
            }
          }

          &:hover {
            input[type="checkbox"]:not(:checked) + div {
              border-color: #ff0000;
              box-shadow: 0 0 4px 1px rgba(255, 0, 0, 0.3);
            }
          }

          input[type="checkbox"]:checked + div {
            background-image: url("../images/constructor-modal/check-icon.svg");
          }
        }
      }

      .constructor-new__form-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        min-height: 77px;
        padding: 10px 15px;
        font-family: inherit;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 0.01em;
        text-transform: uppercase;

        @media (max-width: 575px) {
          min-height: 62px;
          font-size: 18px;
          line-height: 21px;
        }
      }

      .constructor-new__info {
        max-width: 330px;
        margin: 20px auto 7px;
        font-family: inherit;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #4f4f4f;
        opacity: 0.9;

        @media (max-width: 575px) {
          margin: 20px auto 0;
        }

        a {
          color: #007aeb;
          transition: 0.3s all;

          &:hover {
            color: #ff0000;
          }
        }
      }
    }
  }
}
// анимация для картинок допов
@keyframes dopsImgShow {
  0% {
    opacity: 0;
    transform: scale(0);
    will-change: transform, filter;
  }

  70% {
    opacity: 1;
    will-change: transform, filter;
  }

  80% {
    transform: scale(1.2);
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.3));
    will-change: transform, filter;
  }

  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.3));
    will-change: auto;
  }
}
</style>
