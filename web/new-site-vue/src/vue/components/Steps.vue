<template>
  <section id="steps">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">
          3 ступени очистки вместе с «Финляндией Экстра»
        </h3>
        <p class="title-box__subtitle">Избавьтесь от сивухи и примесей</p>
      </div>
      <div class="row">
        <div
          class="card"
          v-for="(i, id) in cards"
          :key="id"
          :class="`card-${id + 1}`"
        >
          <div class="card__wrap">
            <div class="card__img-wrap">
              <picture>
                <source
                  :srcset="`new-site-vue/build/images/steps/step-${
                    id + 1
                  }.webp`"
                  type="image/webp"
                  media="(min-width: 576px)"
                />
                <source
                  :data-srcset="`new-site-vue/build/images/steps/step-${id + 1}.png`"
                  type="image/png"
                  media="(min-width: 576px)"
                />
                <source
                  :srcset="`new-site-vue/build/images/steps/step-mobil-${
                    id + 1
                  }.webp`"
                  type="image/webp"
                />
                <img
                 class="lazy"
                  :data-src="`new-site-vue/build/images/steps/step-mobil-${
                    id + 1
                  }.png`"
                  :alt="i.title"
                />
              </picture>
            </div>
            <div class="card__text-wrap">
              <div class="card__number-box">
                <p class="card__number">
                  {{ id + 1 }}
                </p>
                <p class="card__number-text">ступень</p>
              </div>
              <a
                href="#step-modal"
                @click="openModal(i, id)"
                class="card__link"
                data-fancybox
              >
                <h4 class="card__title" v-html="i.title"></h4>
                <h5 class="card__subtitle" v-html="i.subtitle"></h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                >
                  <path
                    d="M2 26L14 14L2 2"
                    stroke="#4F4F4F"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <p class="card__text" v-html="i.text"></p>
              <div class="card__lists-box">
                <div
                  class="card__lists-item"
                  v-for="(list, listId) in i.list"
                  :key="listId"
                >
                  <p class="card__lists-title" v-html="list.title"></p>
                  <ul class="card__lists-list">
                    <li
                      v-for="(item, j) in list.items"
                      :key="j"
                      v-html="item"
                    ></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="step-modal">
      <div class="step-modal__wrap">
        <h4
          class="step-modal__title"
          :class="`step-modal__title_` + modalColor"
          v-html="modalTitle"
        ></h4>
        <h5 class="step-modal__subtitle" v-html="modalSubtitle"></h5>
        <p class="step-modal__text" v-html="modalText"></p>
        <div class="step-modal__lists-box">
          <div
            class="step-modal__lists-item"
            v-for="(list, listId) in modalList"
            :key="listId"
          >
            <p class="step-modal__lists-title" v-html="list.title"></p>
            <ul class="step-modal__lists-list">
              <li v-for="(item, j) in list.items" :key="j" v-html="item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Steps",
  data() {
    return {
      cards: [
        {
          title: "Предварительная",
          subtitle: "Усиленная камера очистки",
          text: "Гарантирует многократный процесс испарения и конденсации: медная РНП эффективно удерживает сивушные масла и любые другие примеси.",
          list: [
            {
              title: "Камера",
              items: [
                "Высота — 220&nbsp;мм",
                "Диаметр трубки — 38&nbsp;мм",
                "Количество РПН — 2 ",
              ],
            },
            {
              title: "РПН",
              items: ["Материал — медь", "Размер — 10&nbsp;х&nbsp;30&nbsp;см"],
            },
          ],
        },
        {
          title: "Промежуточная",
          subtitle: "Дугообразная царга",
          text: "Пары поднимаются вверх, а вредные примеси (тяжёлые фракции) остаются на стенках царги.",
          list: [
            {
              title: "Характеристики",
              items: [
                "Высота — 275 мм",
                "Диаметр трубки в наиболее широком месте — 38&nbsp;мм",
                "Диаметр трубки в наиболее узком  месте — 18&nbsp;мм ",
              ],
            },
          ],
        },
        {
          title: "Заключительная",
          subtitle: "Сухопарник с краном",
          text: "Проходя через сухопарник, пары спирта конденсируются на его стенках, а все тяжёлые фракции оседают на дне ёмкости — это обеспечивает дополнительную очистку продукта.",
          list: [
            {
              title: "Характеристики",
              items: [
                "Материал — медицинская сталь AISI&nbsp;304 ",
                "Соединение — 2&nbsp;дюйма",
              ],
            },
          ],
        },
      ],
      modalTitle: "",
      modalSubtitle: "",
      modalText: "",
      modalList: [],
      modalColor: 1,
    };
  },
  methods: {
    openModal(item, number) {
      this.modalTitle = item.title;
      this.modalSubtitle = item.subtitle;
      this.modalText = item.text;
      this.modalList = item.list;
      this.modalColor = number + 1;
    },
  },
};
</script>

<style lang="scss">
#steps {
  padding: 153px 0 157px;
  border-top: 1px solid #bdbdbd;
  background: rgba(255, 255, 255, 0.78);

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0 70px;
  }

  @media (max-width: 575px) {
    padding: 25px 0 15px;
    border-top: none;
  }

  .content-container {
    @media (max-width: 575px) {
      padding: 0;
    }
  }

  .title-box {
    margin-bottom: 68px;

    @media (max-width: 575px) {
      padding: 0 20px;
      margin-bottom: 24px;
    }
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 0 -15px;
    row-gap: 30px;

    @media (max-width: 1199px) {
      flex-wrap: wrap;
    }

    @media (max-width: 767px) {
      margin: 0;
    }

    @media (max-width: 575px) {
      row-gap: 0;
    }
  }

  .card {
    width: calc(100% / 3);
    padding: 0 15px;
    font-family: "Inter", sans-serif;
    color: #828282;
    background: #ffffff;
    transition: 0.7s all;

    @media (max-width: 1199px) {
      width: 50%;
    }

    @media (max-width: 991px) {
      width: 80%;
    }

    @media (max-width: 767px) {
      width: 100%;
      padding: 0;
    }

    &__wrap {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: 100%;
      border: 1px solid #828282;
      border-radius: 10px;
      overflow: hidden;

      @media (max-width: 575px) {
        border: none;
        border-radius: 0;
      }
    }

    &__img-wrap {
      display: flex;
      justify-content: center;
      flex-shrink: 0;
      background: #f3f3f3;
      img:not([src]):not([srcset]) {
        aspect-ratio: 85/43;
        width: 100%;
      }

      img {
        max-width: 100%;

        @media (min-width: 576px) {
          aspect-ratio: 509/258;
        }
      }
    }

    &__text-wrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-grow: 1;
      width: 100%;
      padding: 20px 20px 20px 30px;

      @media (max-width: 575px) {
        padding: 20px 20px 25px 30px;
      }
    }

    &__number-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 7px;
      min-width: 69px;
      margin: -69px auto 17px 0;
      aspect-ratio: 1/1;
      padding: 5px;
      border-radius: 5px;
      color: #ffffff;

      @media (max-width: 575px) {
        margin-bottom: 12px;
      }
    }

    &__number {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      text-align: center;
    }

    &__number-text {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
    }

    &__link {
      position: relative;
      pointer-events: none;

      @media (max-width: 575px) {
        pointer-events: all;
        padding-right: 40px;
      }

      svg {
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translateY(-50%);

        @media (min-width: 576px) {
          display: none;
        }

        path {
          stroke: #828282;
        }
      }
    }

    &__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;

      @media (max-width: 575px) {
        margin-bottom: 3px;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #828282;
    }

    &__text {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #828282;

      @media (max-width: 575px) {
        display: none;
      }
    }

    &__lists-box {
      display: flex;
      align-items: flex-start;
      column-gap: 8.25%;
      margin-top: auto;
      padding-top: 8px;

      @media (max-width: 575px) {
        display: none;
      }
    }

    &__lists-item {
      width: 1px;
      flex-grow: 1;

      &:first-child {
        flex-grow: 1.1;
      }
    }

    &__lists-title {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #828282;
    }

    &__lists-list {
      list-style: disc;
      padding-left: 16px;
      color: #828282;
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
      }
    }

    &-1 {
      .card__number-box {
        background-color: #333333;
      }

      .card__title {
        color: #333333;
      }

      .card__link {
        svg {
          path {
            stroke: #333333;
          }
        }
      }
    }
    &-2 {
      .card__number-box {
        background-color: #007aeb;
      }

      .card__title {
        color: #007aeb;
      }

      .card__link {
        svg {
          path {
            stroke: #007aeb;
          }
        }
      }
    }
    &-3 {
      .card__number-box {
        background-color: #f82c2c;
      }

      .card__title {
        color: #f82c2c;
      }

      .card__link {
        svg {
          path {
            stroke: #f82c2c;
          }
        }
      }
    }
  }
}

#step-modal {
  display: none;
  padding: 28px 24px 36px;
  font-family: "Inter", sans-serif;
  border-radius: 3px;
  .step-modal {
    &__title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;

      &_1 {
        color: #333333;
      }
      &_2 {
        color: #007aeb;
      }
      &_3 {
        color: #f82c2c;
      }
    }

    &__subtitle {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #828282;
    }

    &__text {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #828282;
    }

    &__lists-box {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding-top: 17px;
    }

    &__lists-item {
      width: 100%;

      &:not(:first-child) {
        margin-top: 17px;
      }
    }

    &__lists-title {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #828282;
    }

    &__lists-list {
      list-style: disc;
      padding-left: 16px;
      color: #828282;
      li {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
      }
    }
  }
}
</style>
