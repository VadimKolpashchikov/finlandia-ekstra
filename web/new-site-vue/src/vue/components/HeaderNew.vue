<template>
  <div id="new-header">
    <div v-if="pageLoading" class="page-loader-wrap">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="content-container header-top">
      <div class="grid-box">
        <div class="grid-title">
          <div class="title-block">
            <h1 class="title-block__title">
              Самогонный аппарат<br /><span>Финляндия Экстра</span>
            </h1>
            <h2 class="title-block__subtitle">
              Безграничные возможности с аппаратом-конструктором
            </h2>
          </div>
        </div>

        <div class="grid-features">
          <div class="features-block">
            <ul class="features-list">
              <li class="features-list__item">
                <p class="features-list__title">Повышенный градус — 80°</p>
                <p class="features-list__text">
                  Холодильник улучшен,<br />
                  а царга расширена до 18 мм
                </p>
              </li>

              <li class="features-list__item">
                <p class="features-list__title">Змеевик на 15 витков</p>
                <p class="features-list__text">
                  Для наилучшего качества<br />
                  дистиллята
                </p>
              </li>

              <li class="features-list__item">
                <p class="features-list__title">
                  2 медные РПН<br />
                  + камера на 220 мм
                </p>
                <p class="features-list__text">100% очистка дистиллята</p>
              </li>

              <li class="features-list__item">
                <p class="features-list__title">Утеплённая царга</p>
                <p class="features-list__text">Уже в базовой комплектации</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="grid-info">
          <div class="info-block">
            <div class="price-item">
              <div class="old-price-item">
                <p class="old-price-text">
                  {{ oneProduct("f15").oldPriceF }} руб.
                </p>
                <span class="discount">-20%</span>
              </div>
              <p class="new-price-text">{{ oneProduct("f15").priceF }} руб.</p>
            </div>
            <div class="presents-box">
              <div class="presents-box__number-wrap">
                <p class="presents-box__number">+7</p>
              </div>
              <div class="presents-box__text-wrap">
                <p class="presents-box__title">подарков!</p>
                <p class="presents-box__text">Осталось: 12&nbsp;наборов</p>
              </div>
            </div>
            <div class="btns-item btns-item_left">
              <a
                href="#order-modal"
                data-fancybox
                class="btn-item btn-item_blue"
                >Заказать</a
              >
            </div>
            <div class="btns-item btns-item_right">
              <a href="#constructor-new" data-fancybox class="btn-item btn-red">
                Собрать Финляндию
              </a>
            </div>
          </div>
        </div>

        <div class="grid-img">
          <div class="img-block">
            <picture>
              <source
                srcset="
                  new-site-vue/build/images/header-new/finlandia-ekstra-header-img.webp
                "
                type="image/webp"
              />
              <img
                src="new-site-vue/build/images/header-new/finlandia-ekstra-header-img.png"
                alt="Самогонный аппарат Финляндия Экстра"
              />
            </picture>
            <div class="img-block__video-absolute">
              <a href="https://youtu.be/-W2xO2cYgNo" data-fancybox>
                <div class="icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_107_569)">
                      <circle class="svg-circle" cx="24.5" cy="24.5" r="23.5" />
                      <path
                        class="svg-path"
                        d="M36.0401 22.7911C37.3556 23.5506 37.3556 25.4494 36.0401 26.2089L20.2099 35.3485C18.8944 
                                        36.108 17.25 35.1586 17.25 33.6396L17.25 15.3604C17.25 13.8414 18.8944 12.892 20.2099 13.6515L36.0401
                                         22.7911Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_107_569">
                        <rect width="49" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Видео о&nbsp;самогонном аппарате</p>
                <div class="arrow-wrap">
                  <picture>
                    <source
                      srcset="
                        new-site-vue/build/images/header-new/video-line-mobil-2.svg
                      "
                      media="(max-width: 575px)"
                    />
                    <img
                      src="new-site-vue/build/images/header-new/video-line-desktop-3.svg"
                      alt=""
                    />
                  </picture>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="grid-dop">
          <div class="dop-block">
            <div class="dop-block__wrapper">
              <p class="dop-block__title">
                Набор самогонщика в&nbsp;ПОДАРОК: ТОЛЬКО до
                <span v-html="tomorrow"></span>
              </p>
              <div class="dop-block__img-wrap">
                <picture>
                  <source
                    srcset="new-site-vue/build/images/header-new/dops-img.webp"
                    type="image/webp"
                  />
                  <img
                    src="new-site-vue/build/images/header-new/dops-img.png"
                    alt=""
                    width="355px"
                    height="303px"
                  />
                </picture>
              </div>
              <ul class="dop-block__list">
                <template v-for="(item, id) in allPresents">
                  <li :key="id" v-if="item.title != 'Купон на 1000 рублей'">
                    <a
                      href="#present-modal"
                      data-fancybox
                      @click="
                        openPresentModal({
                          title: item.title,
                          text: item.description,
                        })
                      "
                      >{{ item.title }}</a
                    >
                  </li>
                </template>

                <li>
                  <p>Купон на 1000 рублей</p>
                </li>
              </ul>
              <div class="dop-block__price-wrap">
                <p class="dop-block__old-price">5240 руб.</p>
                <p class="dop-block__new-price">0 руб.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "HeaderNew",
  computed: mapGetters(["oneProduct", "tomorrow", "allPresents"]),
  data() {
    return {
      pageLoading: true,
    };
  },
  methods: {
    ...mapMutations(["openPresentModal"]),
  },
  created() {
    document.body.style.overflow = "hidden";
  },
  mounted() {
    setTimeout(() => {
      document.body.removeAttribute("style");
      this.pageLoading = false;
    }, 100);
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#new-header {
  padding-top: 24px;
  padding-bottom: 40px;
  background: $section-gray-bg;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 575px) {
    padding-top: 21px;
    padding-bottom: 0;
  }

  * {
    box-sizing: border-box;
  }

  .page-loader-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $section-gray-bg;
    transform: scale(1.5);
    z-index: 10000;

    .lds-spinner {
      color: official;
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
    }
    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: #1871dd;
    }
    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    .lds-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    .lds-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    .lds-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .content-container {
    overflow: visible;
  }

  .grid-box {
    display: grid;
    grid-template-columns: auto auto 375px;
    grid-template-rows: min-content auto 1fr;
    width: 100%;
    row-gap: 50px;
    column-gap: 16px;

    @media (max-width: 1619px) {
      row-gap: 40px;
      grid-template-columns: auto auto;
      max-width: 1200px;
      margin: 0 auto;
    }

    @media (max-width: 1199px) {
      grid-template-columns: 1fr 400px;
    }

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }

    @media (max-width: 575px) {
      row-gap: 8px;
    }
  }

  .grid-title {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

    @media (max-width: 1619px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    @media (max-width: 991px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .title-block {
      width: 100%;
      margin-top: 56px;

      @media (max-width: 1619px) {
        margin-top: 32px;
        margin-bottom: 24px;
      }

      @media (max-width: 575px) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .title-block__title {
      margin: 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      text-transform: none;
      text-align: left;
      letter-spacing: normal;
      color: #323232;

      @media (max-width: 1619px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      span {
        display: block;
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        font-size: 57px;
        line-height: 69px;
        text-transform: none;
        text-align: left;
        letter-spacing: normal;
        color: $primary-color;

        @media (max-width: 1619px) {
          text-align: center;
        }

        @media (max-width: 575px) {
          margin-top: 9px;
          margin-bottom: 4px;
          font-size: 30px;
          line-height: 30px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
      }
    }

    // .title-block__name {
    //   margin: 0;
    //   font-family: "Montserrat", sans-serif;
    //   font-weight: 900;
    //   font-size: 57px;
    //   line-height: 69px;
    //   text-transform: none;
    //   text-align: left;
    //   letter-spacing: normal;
    //   color: $primary-color;

    //   @media (max-width: 1619px) {
    //     text-align: center;
    //   }

    //   @media (max-width: 575px) {
    //     margin-bottom: 4px;
    //     font-size: 30px;
    //     line-height: 30px;
    //     letter-spacing: 0.02em;
    //     text-transform: uppercase;
    //   }
    // }

    .title-block__subtitle {
      margin-top: 10px;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #323232;

      @media (max-width: 1619px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        margin-top: 0;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

  .grid-features {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;

    @media (max-width: 991px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .features-block {
      width: 100%;
    }

    .features-list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      row-gap: 32px;
      column-gap: 20px;
      width: 100%;
      max-width: 805px;
      list-style: none;
      padding-left: 0;
      margin: 0;

      @media (max-width: 1619px) {
        row-gap: 24px;
        padding-right: 15%;
      }

      @media (max-width: 991px) {
        max-width: 500px;
        padding-right: 0;
        margin: 0 auto;
      }

      @media (max-width: 575px) {
        row-gap: 15px;
        margin-top: 6px;
        max-width: 350px;
      }
    }

    .features-list__item {
      position: relative;
      width: 100%;
      padding-left: 60px;
      padding-bottom: 27px;

      @media (min-width: 1620px) {
        &:nth-child(1) {
          max-width: 394px;
        }
        &:nth-child(2) {
          max-width: 352px;
        }
        &:nth-child(3) {
          max-width: 394px;
        }
        &:nth-child(4) {
          max-width: 352px;
        }
      }

      @media (max-width: 1619px) {
        max-width: 100%;
      }

      @media (max-width: 1199px) {
        padding-bottom: 16px;
      }

      @media (max-width: 575px) {
        padding-left: 45px;
        padding-bottom: 10px;
        order: 2;

        &:nth-child(3) {
          order: 1;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 5px;
        left: 0;
        width: 45px;
        height: 45px;
        background: url("../images/header-new/list-marker.svg");
        background-position: center;
        background-size: 100% 100%;

        @media (max-width: 575px) {
          top: 3px;
          width: 35px;
          height: 35px;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          to right,
          #1871dd,
          rgba(24, 113, 221, 0.09)
        );
        background-position: center;
        background-size: 100% 100%;
      }
    }

    .features-list__title {
      position: relative;
      margin: 0 0 5px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      color: #323232;

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 18px;
      }
    }

    .features-list__text {
      margin: 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: -0.015em;
      color: #323232;

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 18px;
      }
    }
  }

  .grid-info {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;

    @media (max-width: 991px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    .info-block {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      max-width: 780px;
      row-gap: 40px;
      padding: 0;
      margin-bottom: 30px;

      @media (max-width: 1619px) {
        max-width: 720px;
        margin-bottom: 0;
      }

      @media (max-width: 1199px) {
        flex-direction: column;
        row-gap: 32px;
      }

      @media (max-width: 991px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        column-gap: 22px;
        margin: 5px auto 0;
      }

      @media (max-width: 575px) {
        row-gap: 13px;
        column-gap: 18px;
        margin-top: 16px;
      }
    }

    .btn-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100%;
      padding: 18px 20px;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      color: #ffffff;
      border-radius: 20px;
      white-space: nowrap;
      letter-spacing: -0.01em;
      transition: 0.3s all;
      cursor: pointer;

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 30px;
        border-radius: 10px;
      }

      &:hover {
        transform: translateY(-2px);
      }

      &_blue {
        background: $primary-color;

        &:hover {
          background: $primary-color-hover;
          box-shadow: $primary-hover-shadow;
        }
      }
    }

    .price-item {
      width: 100%;
      max-width: 375px;

      @media (max-width: 991px) {
        max-width: 100%;
        width: max-content;
      }

      .old-price-item {
        display: flex;
        align-items: baseline;
        margin-bottom: 20px;

        @media (max-width: 575px) {
          margin-bottom: 1px;
        }

        .old-price-text {
          font-weight: 400;
          font-size: 27px;
          line-height: 30px;
          text-decoration-line: line-through;
          color: #8e8e8e;

          @media (max-width: 575px) {
            font-size: 14px;
            line-height: 18px;
          }
        }

        .discount {
          position: relative;
          padding: 2px 15px 2px 6px;
          margin-left: 20px;
          font-weight: 400;
          font-size: 22px;
          line-height: 27px;
          text-align: center;
          color: #ffffff;
          z-index: 1;

          @media (max-width: 575px) {
            padding: 2px 12px 2px 3px;
            margin-left: 3px;
            font-size: 15px;
            line-height: 19px;
          }

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url("../images/header-new/discont-bg-2.svg");
            background-position: center;
            background-size: 100% 100%;
            z-index: -1;
          }
        }
      }

      .new-price-text {
        margin-bottom: 0;
        font-weight: 700;
        font-size: 52px;
        line-height: 30px;
        color: #323232;

        @media (max-width: 575px) {
          font-size: 24px;
          line-height: 30px;
        }
      }
    }

    .presents-box {
      position: relative;
      display: flex;
      align-items: center;
      align-self: center;
      width: 100%;
      max-width: 332px;

      @media (max-width: 1199px) {
        align-self: flex-start;
        margin-left: 38px;
      }

      @media (max-width: 991px) {
        align-self: center;
        max-width: 100%;
        width: max-content;
        margin-left: 0;
      }
      @media (max-width: 575px) {
        max-width: 46%;
      }
      &:before {
        content: "";
        position: absolute;
        left: -38px;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 81px;
        background: url("../images/header-new/presents-icon.svg");
        background-size: 100% 100%;
        background-position: center;

        @media (max-width: 991px) {
          left: -13px;
        }

        @media (max-width: 575px) {
          height: 61px;
          left: -11px;
        }
      }

      .presents-box__number-wrap {
        margin-right: 20px;

        @media (max-width: 575px) {
          margin-right: 7px;
        }

        .presents-box__number {
          font-weight: 800;
          font-size: 52px;
          line-height: 63px;
          color: #323232;
          animation: number-scale 1s ease-in infinite;

          @media (max-width: 575px) {
            font-size: 34px;
            line-height: 40px;
          }
        }
      }

      .presents-box__title {
        margin-bottom: 2px;
        font-weight: 600;
        font-size: 22px;
        line-height: 27px;
        color: #2770d6;

        @media (max-width: 575px) {
          margin-bottom: 0;
          font-size: 15px;
          line-height: 18px;
        }
      }

      .presents-box__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #323232;

        @media (max-width: 575px) {
          font-size: 13px;
          line-height: 16px;
        }
      }
    }

    .btns-item {
      min-width: 280px;
      width: 100%;

      @media (min-width: 1620px) {
        &_left {
          max-width: 375px;
        }

        &_right {
          max-width: 332px;
        }
      }

      @media (max-width: 1619px) {
        max-width: 500px;
      }

      @media (max-width: 575px) {
        max-width: 350px;

        &_left {
          margin-top: 17px;
        }
      }
    }
  }

  .grid-img {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;

    @media (max-width: 1619px) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 4;
      align-self: center;
    }

    @media (max-width: 991px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .img-block {
      position: relative;
      width: 100%;
      max-width: 100%;
      padding-top: 42px;

      @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }

      @media (max-width: 991px) {
        padding-top: 0;
        max-width: 370px;
        height: auto;
        margin: 0 auto;
        padding-right: 50px;
      }

      @media (max-width: 575px) {
        margin-top: 7px;
        max-width: 235px;
        padding-left: 65px;
      }

      img {
        max-width: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    .img-block__video-absolute {
      position: absolute;
      top: 40px;
      left: -80px;

      @media (max-width: 991px) {
        top: -10px;
        left: -85px;
      }

      @media (max-width: 575px) {
        top: 25px;
        left: -36px;
      }

      a {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 147px;
        transition: 0.4s all;

        @media (max-width: 575px) {
          max-width: 95px;
        }

        .icon-wrap {
          width: 49px;
          height: 49px;
          margin-bottom: 6px;

          svg {
            max-width: 100%;
            transition: 0.4s all;

            circle {
              fill: transparent;
              stroke: #007aeb;
              stroke-width: 2px;
              fill-opacity: 0.15;
              transition: 0.4s all;
            }

            path {
              fill: #007aeb;
              transition: 0.4s all;
            }
          }
        }

        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          color: #4f4f4f;

          @media (max-width: 575px) {
            font-size: 14px;
            line-height: 17px;
            letter-spacing: -0.05em;
          }
        }

        .arrow-wrap {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-6%);

          @media (max-width: 575px) {
            width: 60px;
            top: calc(100% + 6px);
            transform: translateX(-12%);
          }
        }

        @media (min-width: 992px) {
          &:hover {
            .icon-wrap {
              svg {
                transform: scale(1.1);

                circle {
                  fill: red;
                  stroke: red;
                  fill-opacity: 0.7;
                }

                path {
                  fill: white;
                  fill-opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }

  .grid-dop {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;

    @media (max-width: 1619px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    @media (max-width: 1199px) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    @media (max-width: 991px) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 5;
      grid-row-end: 6;
    }

    .dop-block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      margin-top: 25px;

      @media (max-width: 1619px) {
        margin-top: 0;
      }

      @media (max-width: 1199px) {
        margin-top: 20px;
      }

      @media (max-width: 575px) {
        width: calc(100% + 40px);
        margin: 12px -20px 0 -20px;
      }
    }

    .dop-block__wrapper {
      max-width: 375px;
      min-width: 290px;
      width: 100%;
      // min-height: 775px;
      padding: 25px 10px 20px;
      background-color: #ffffff;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.15);

      @media (max-width: 1619px) {
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
      }

      @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
      }

      @media (max-width: 575px) {
        width: 100%;
        max-width: 100%;
        padding: 25px 5px 20px;
      }
    }

    .dop-block__title {
      margin: 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: $btnred;

      @media (max-width: 1619px) {
        width: 100%;
        margin-bottom: 32px;
      }

      @media (max-width: 991px) {
        margin-bottom: 0;
      }

      @media (max-width: 575px) {
        margin-bottom: 0;
        font-size: 20px;
        line-height: 24px;
        padding: 0 15px;
      }
    }

    .dop-block__img-wrap {
      width: 100%;

      @media (max-width: 1619px) {
        max-width: 355px;
      }

      img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }

    .dop-block__list {
      width: 100%;
      list-style: none;
      margin-bottom: 12px;
      padding-left: 20px;
      padding-right: 10px;

      @media (max-width: 1619px) {
        flex-grow: 1;
        width: 1px;
      }

      @media (max-width: 991px) {
        width: 100%;
        margin-top: 20px;
      }

      @media (max-width: 575px) {
        padding: 0 15px;
      }

      a,
      p {
        width: 100%;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #4f4f4f;

        @media (max-width: 991px) {
          display: flex;
          justify-content: center;
          width: 100%;
          text-align: center;
        }
      }

      a {
        position: relative;
        padding: 12px 0;
        overflow: hidden;
        transition: 0.4s all;

        &::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          height: 1px;
          width: 200%;
          background: linear-gradient(to right, $btnred 50%, #bdbdbd 50%);
          transition: 0.4s all;
        }

        &:hover {
          color: $btnred;

          &::before {
            right: -100%;
          }
        }
      }

      li {
        width: 100%;

        &:first-child {
          a {
            padding: 0 0 12px 0;
          }
        }

        &:last-child {
          padding: 12px 0 10px;
          border-bottom: 2px solid $btnred;
        }
      }
    }

    .dop-block__price-wrap {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      width: 100%;
      margin-top: 12px;
      padding: 0 20px;

      @media (max-width: 991px) {
        justify-content: center;
        margin-top: 0;
      }

      .dop-block__old-price {
        margin-right: 16px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: right;
        letter-spacing: 0.01em;
        text-decoration-line: line-through;
        color: #828282;
      }

      .dop-block__new-price {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #828282;
      }
    }
  }
}

@keyframes number-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>
