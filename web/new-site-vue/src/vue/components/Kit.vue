<template>
  <section id="kit">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Вместе <span>дешевле!</span></h3>
        <p class="title-box__subtitle">
          При заказе «Финляндия Экстра» скидка на аксессуары
        </p>
      </div>
      <div class="kit">
        <div class="kit__dop-wrap">
          <div class="dops-item" v-for="(dop, index) in dops" :key="index">
            <label class="dops-item__check custom-check">
              <input
                v-if="dop.id == oneId('arom')"
                type="checkbox"
                @change="togglDop(dop.vuexName)"
                :checked="addedDops['arom']"
              />
              <input
                v-else
                type="checkbox"
                @change="selectDopProduct(dop)"
                v-model="dop.selected"
              />
              <div></div>
            </label>
            <div class="dops-item__icon">
              <picture>
                <source
                  :data-srcset="`new-site-vue/build/images/kit/${dop.img}-icon.webp`"
                  type="image/webp"
                />
                <img
                  class="mechanics__main-img lazy"
                  :data-src="`new-site-vue/build/images/kit/${dop.img}-icon.png`"
                  :alt="dop.title"
                />
              </picture>
            </div>
            <div class="dops-item__text-wrap">
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
                v-html="dop.name"
              >
              </a>
              <div class="dops-item__price-wrap">
                <p class="dops-item__price">{{ dop.price }} руб.</p>
                <p class="dops-item__oldprice">{{ dop.oldPrice }} руб.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="kit__img-wrap">
          <div class="img-box">
            <TransitionGroup name="fade" tag="div" class="img-box__main">
              <div
                v-for="(el, id) in mainProducts"
                :key="id"
                v-show="el.selected"
                class="img-box__main-product"
                :class="`img-box__main-product_${id + 1}`"
              >
                <picture>
                  <source
                    :data-srcset="`new-site-vue/build/images/kit/${el.img}.webp`"
                    type="image/webp"
                  />
                  <img
                    class="lazy"
                    :data-src="`new-site-vue/build/images/kit/${el.img}.png`"
                    alt="Финляндия Экстра"
                  />
                </picture>
              </div>
            </TransitionGroup>
            <div
              v-for="(dop, i) in dops"
              :key="i"
              class="img-dop"
              :class="[dop.img, dop.selected ? 'img-dop_show' : '']"
            >
              <template v-if="dop.img != 'prokladki-dop'">
                <img
                  class="lazy"
                  :data-src="`new-site-vue/build/images/constructor-modal/${dop.img}.png`"
                  alt="Финляндия экстра дополнительные товары"
                />
              </template>
            </div>
          </div>
        </div>

        <div class="kit__form-wrap">
          <div class="form-box">
            <div class="form-box__radio-btns">
              <label
                v-for="(el, idx) in mainProducts"
                :key="idx"
                class="form-box__radio-label"
              >
                <input
                  type="radio"
                  @change="selectMainProduct(el)"
                  :value="el.id"
                  v-model="mainProductId"
                />
                <div></div>
                <span class="form-box__radio-name" v-if="el.value == 22"
                  >{{ el.value }} литра</span
                >
                <span class="form-box__radio-name" v-else
                  >{{ el.value }} литров</span
                >
                <p class="form-box__radio-price">
                  {{ el.price }} руб.<br />
                  <span class="form-box__radio-price_old"
                    >{{ el.oldPrice }} руб.</span
                  >
                </p>
              </label>
            </div>
            <div class="form-box__price-info-wrap">
              <p class="form-box__price-text">Итого к оплате</p>
              <p class="form-box__price-number">{{ allPrice }} руб.</p>
            </div>

            <form
              action="sendOrder.php"
              method="post"
              class="spnForm form-box__form"
            >
              <div
                class="blogger"
                v-if="ifBlogger"
                v-html="bloggerInputs"
              ></div>
              <Podarok />
              <div v-for="(dop, id) in dops" :key="id">
                <input
                  type="hidden"
                  :name="`quantity[${dop.id}]`"
                  :value="dop.selected ? '1' : '0'"
                />
                <input type="hidden" name="id[]" :value="dop.id" />
              </div>

              <input type="hidden" class="url" name="url" />
              <input type="hidden" class="gmt" name="gmt" />
              <input
                type="hidden"
                class="comment"
                name="comment"
                :value="kredit ? 'Покупка в рассрочку.' : ''"
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
              <InputsBox />
              <button type="submit" class="form-box__form-btn btn-red">
                оформить заказ
              </button>
              <label class="form-box__rassrochka-check custom-check">
                <input type="checkbox" v-model="kredit" />
                <div></div>
                <span> Покупка в рассрочку </span>
              </label>
              <div v-html="formNeedInputs"></div>
            </form>
            <p class="form-box__info">
              Нажимая кнопку “Заказать”,<br />
              вы соглашаетесь на обработку персональных данных, а&nbsp;также
              <a href="/uploadupdate/confidentiality.pdf" target="_blank"
                >с политикой конфиденциальности</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InputsBox from "./helpers/InputsBox.vue";
import Podarok from "./helpers/Podarok.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Kit",
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
      "addedDops",
    ]),
    allPrice() {
      return this.mainProductPrice + this.dopsPrice;
    },
    computedDop(item) {
      item.selected === this.addedDops[item.vuexName];
      this.selectDopProduct(item);
      return item.selected;
    },
  },
  watch: {
    addedDops: {
      handler(val, oldVal) {
        this.dops.forEach((dop) => {
          Object.keys(val).forEach((key) => {
            if (dop.vuexName == key && dop.selected != val[key]) {
              dop.selected = val[key];
              this.selectDopProduct(dop);
            }
          });
        });
      },
      deep: true,
    },
  },
  data() {
    return {
      mainProductId: 0,
      mainProductPrice: 0,
      dopsPrice: 0,
      kredit: false,
      dops: [],
      mainProducts: [],
    };
  },
  methods: {
    ...mapMutations(["openPresentModal", "togglDop"]),
    selectMainProduct(el) {
      this.mainProductPrice = el.price;
      this.mainProducts.forEach((item) => {
        if (item.id == el.id) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    },
    selectDopProduct(item) {
      if (item.selected == true) {
        this.dopsPrice += item.price;
      } else {
        this.dopsPrice -= item.price;
      }
    },
  },
  beforeMount() {
    this.mainProductId = this.oneId("f15");
    this.mainProductPrice = this.oneProduct("f15").price;
    this.dops = [
      {
        id: this.oneId("arom"),
        vuexName: "arom",
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
        name: "Доп. царга (450&nbsp;мм)",
        title: "Дополнительная царга (450&nbsp;мм)",
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
        img: "prokladki-dop",
        price: this.oneProduct("prokladki").price,
        oldPrice: this.oneProduct("prokladki").oldPrice,
        selected: false,
        description:
          "<ul>" +
          "<li>Силиконовая прокладка<br> на фланец (5&nbsp;мм)</li>" +
          "<li>Силиконовая прокладка<br> сухопарника (5&nbsp;мм)</li>" +
          "<li>Прокладка клампового соединения</li>" +
          "</ul>",
      },
      {
        id: this.oneId("spn_m"),
        name: "СПН медь 0,5&nbsp;кг",
        title: "СПН медь 0,5&nbsp;кг (3,5х3,5&nbsp;мм)",
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
        name: "СПН нержавейка 0,5&nbsp;кг",
        title: "СПН нержавейка 0,5&nbsp;кг<br>(3,5х3,5&nbsp;мм)",
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
        img: "f15",
        value: 15,
        price: this.oneProduct("f15").price,
        oldPrice: this.oneProduct("f15").oldPrice,
        selected: true,
      },
      {
        id: this.oneId("f22"),
        name: "Финляндия Экстра 22Л",
        img: "f22",
        value: 22,
        price: this.oneProduct("f22").price,
        oldPrice: this.oneProduct("f22").oldPrice,
        selected: false,
      },
      {
        id: this.oneId("f26"),
        name: "Финляндия Экстра 26Л",
        img: "f26",
        value: 26,
        price: this.oneProduct("f26").price,
        oldPrice: this.oneProduct("f26").oldPrice,
        selected: false,
      },
      {
        id: this.oneId("f30"),
        name: "Финляндия Экстра 30Л",
        img: "f30",
        value: 30,
        price: this.oneProduct("f30").price,
        oldPrice: this.oneProduct("f30").oldPrice,
        selected: false,
      },
    ];
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#kit {
  padding: 150px 0 75px;
  background: #ffffff;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;

  @media (max-width: 991px) {
    padding: 75px 0 75px;
  }

  @media (max-width: 767px) {
    padding: 60px 0 60px;
  }

  @media (max-width: 575px) {
    border: none;
    padding: 30px 0 0;
  }

  img:not([src]):not([srcset]) {
    visibility: hidden;
  }

  .title-box {
    margin-bottom: 3px;

    @media (max-width: 575px) {
      margin-bottom: 10px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0 !important;
  }

  .kit {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-family: "Inter", sans-serif;

    @media (max-width: 1399px) {
      flex-wrap: wrap;
    }

    &__dop-wrap {
      max-width: 545px;
      width: 100%;
      padding-top: 85px;

      @media (max-width: 1199px) {
        padding-top: 55px;
        max-width: 48%;
      }

      @media (max-width: 991px) {
        max-width: 52%;
      }

      @media (max-width: 767px) {
        max-width: 100%;
      }

      @media (max-width: 575px) {
        padding-top: 0;
      }

      .dops-item {
        display: flex;
        align-items: center;
        column-gap: 15px;
        padding: 12px 0;
        width: 100%;

        &:not(:first-child) {
          padding-top: 27px;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 575px) {
          column-gap: 0;
          padding: 4px 0 7px;
        }

        &__icon {
          max-width: 68px;

          img {
            max-width: 100%;
          }
        }

        &__text-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: 15px;
          flex-grow: 1;

          @media (max-width: 575px) {
            flex-grow: 0;
            flex-direction: column;
            align-items: stretch;
            max-width: 170px;
            width: 100%;
            margin-left: auto;
          }
        }

        &__name {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 0.01em;
          text-decoration-line: underline;
          color: $text-dark;
          transition: 0.3s all;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 19px;
          }

          &:hover {
            color: #ff0000;
          }
        }

        &__price-wrap {
          margin-left: auto;

          @media (max-width: 575px) {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            column-gap: 10px;
            margin-left: 0;
          }
        }

        &__price {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          text-align: right;
          color: $text-dark;
          white-space: nowrap;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 28px;
          }
        }

        &__oldprice {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          text-align: right;
          text-decoration-line: line-through;
          color: $text-dark;
          white-space: nowrap;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }

    &__img-wrap {
      max-width: 570px;
      width: 100%;
      aspect-ratio: 57/84;
      margin-left: auto;

      @media (max-width: 1399px) {
        position: sticky;
        top: 110px;
        max-width: 520px;
        margin-right: auto;
      }

      @media (max-width: 1199px) {
        max-width: 44%;
      }

      @media (max-width: 991px) {
        max-width: 47%;
        margin-right: 0;
      }

      @media (max-width: 767px) {
        position: static;
        max-width: 450px;
        margin-right: auto;
      }

      .img-box {
        position: relative;
        width: 100%;
        height: 100%;

        @media (max-width: 1199px) and (min-width: 992px) {
          max-height: 85vh;
        }

        &__main {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
        }

        &__main-product {
          position: absolute;
          left: 11.579%;
          top: 0;
          grid-row: 1/2;
          grid-column: 1/2;
          width: 59.122%;
          height: 81.428%;

          @media (max-width: 1199px) and (min-width: 992px) {
            display: flex;
            justify-content: center;
          }

          img {
            width: 100%;
          }
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

          &.arom-dop {
            width: 27%;
            bottom: 2.111%;
            right: 25.47%;
          }

          &.dioptr-dop {
            width: 22.375%;
            bottom: 10%;
            right: 21.36%;
          }

          &.kolonna-dop {
            width: 20.683%;
            right: 21.4188%;
            bottom: 28.666%;
          }

          &.popugai-dop {
            width: 28.376%;
            right: -0.6666%;
            bottom: 2.7777%;
          }

          &.spn-m-dop {
            width: 39.83%;
            left: 3.157%;
            bottom: 7.666%;
          }

          &.spn-n-dop {
            width: 46.8376%;
            bottom: 0.6666%;
            left: 9.12%;
          }

          &.zarga-dop {
            width: 19.145%;
            bottom: 21.8888%;
            left: 0;
          }
        }
      }
    }

    &__form-wrap {
      max-width: 400px;
      width: 100%;
      padding-top: 64px;

      @media (max-width: 1399px) {
        padding-top: 0;
        max-width: 545px;
        margin-top: 20px;
      }

      @media (max-width: 1199px) {
        max-width: 48%;
      }

      @media (max-width: 991px) {
        max-width: 52%;
      }

      @media (max-width: 767px) {
        max-width: 100%;
      }

      .form-box {
        width: 100%;
        padding: 24px 28px 34px;
        background: $section-gray-bg;
        border-radius: 10px;

        @media (max-width: 575px) {
          width: calc(100% + 40px);
          padding: 24px 20px 24px;
          margin: 0 -20px;
          border-radius: 0;
        }

        .inputs-box {
          row-gap: 20px;

          @media (max-width: 575px) {
            row-gap: 15px;
          }
        }

        &__radio-btns {
          display: flex;
          flex-direction: column;
          row-gap: 8px;
          width: 100%;
          margin-bottom: 14px;
        }

        &__radio-label {
          position: relative;
          display: flex;
          align-items: center;
          column-gap: 20px;
          padding: 6px 0 10px;
          cursor: pointer;

          &:not(:last-child) {
            border-bottom: 1px solid #e0e0e0;
          }

          div {
            position: relative;
            width: 32px;
            height: 32px;
            border: 2px solid $text-dark;
            border-radius: 50%;
            background: transparent;
            transition: 0.3s all;
          }

          &:hover div {
            border-color: #ff0000;
            box-shadow: 0 0 4px 1px rgba(255, 0, 0, 0.3);
          }

          input {
            position: absolute;
            visibility: hidden;
            width: 1px;
            height: 0;
            opacity: 0;
            z-index: -1;

            &:checked + div {
              &:before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background: $btnred;
              }
            }
          }
        }

        &__radio-name {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: $text-black-gray;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 22px;
          }
        }

        &__radio-price {
          margin-left: auto;
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          color: $text-black-gray;
          text-align: right;

          @media (max-width: 575px) {
            font-size: 16px;
            line-height: 22px;
          }

          &_old {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: right;
            text-decoration-line: line-through;
          }
        }

        &__price-info-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: 20px;
          margin: 14px 0 20px;
        }

        &__price-text {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          text-transform: uppercase;
          color: $text-black-gray;

          @media (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }

        &__price-number {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          text-align: right;
          color: $btnred;

          @media (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }

        &__form-btn {
          width: 100%;
          min-height: 77px;
          margin-top: 32px;
          border-radius: 20px;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 27px;
          text-align: center;
          letter-spacing: 0.01em;
          text-transform: uppercase;

          @media (max-width: 575px) {
            min-height: 62px;
            margin-top: 27px;
            border-radius: 10px;
          }
        }

        &__rassrochka-check {
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 10px;
          margin-top: 24px;

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
              font-size: 20px;
              line-height: 24px;
            }
          }

          &:hover {
            div {
              border-color: $btnred;
              box-shadow: 0 0 4px 1px rgb(192 33 33 / 32%);
            }
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
  }
}
</style>
