<template>
  <div id="new-header-test-top-v2">
    <div class="bg-header-top" :class="{ 'bg-header-top_shadow': atTop }">
      <div class="content-container header-top">
        <div class="header-top__wrap">
          <div class="header-top__logo">
            <picture>
              <source
                srcset="new-site-vue/build/images/header-new/logo-test.svg"
                media="(min-width: 768px)"
              />
              <img
                src="new-site-vue/build/images/header-new/mobil-menu-logo-2.svg"
                alt=""
              />
            </picture>
            <div class="logo__text-box">
              <p class="logo__text">
                Официальный сайт<br />
                производителя
              </p>
            </div>
          </div>

          <div class="menu-container">
            <div
              class="menu-toggler"
              v-bind:class="{ 'menu-toggler_open': mobilMenuShow }"
              v-on:click="mobilMenuShow = !mobilMenuShow"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul
              class="menu header-top__menu"
              v-bind:class="{ 'header-top__menu_visible': mobilMenuShow }"
            >
              <li>
                <a href="#features" @click.prevent="clickBtn('features')"
                  >Преимущества</a
                >
              </li>
              <li>
                <a href="#delivery" @click.prevent="clickBtn('delivery')"
                  >Оплата и доставка</a
                >
              </li>
              <li>
                <a href="#feedback" @click.prevent="clickBtn('feedback')"
                  >Отзывы</a
                >
              </li>
            </ul>
          </div>

          <div class="header-top__phone">
            <a href="tel:88002505932" class="header-top__phone-number"
              >8 800 250 59 32</a
            >

            <a class="header-top__phone-button" data-fancybox href="#callme">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.83192 0 0 5.83192 0 13C0 20.1681 5.83192 26 13 26C14.1775 26 15.3439 25.8429 16.5785 25.4922C19.0795 24.3861 20.4442 21.6566 19.8396 18.9938L19.865 18.9684C20.2459 18.5891 20.4173 17.8575 20.2474 17.3465L20.1744 17.1244C20.003 16.6134 19.4381 16.0802 18.9176 15.9373L16.9959 15.4121C16.4754 15.2709 15.7327 15.4613 15.3503 15.8438L14.6552 16.5388C12.1288 15.8549 10.1468 13.8728 9.46441 11.3465L10.1595 10.6514C10.5404 10.2705 10.7308 9.52783 10.5896 9.00575L10.0658 7.08398C9.92459 6.56348 9.38818 5.99854 8.87722 5.82715L8.6582 5.75412C8.14562 5.58274 7.41406 5.7557 7.0332 6.13818L5.99219 7.1792C5.80653 7.36328 5.6875 7.89171 5.6875 7.89334C5.65256 11.1973 6.94754 14.3791 9.28347 16.7166C11.6131 19.0462 14.7837 20.3396 18.0765 20.3109C18.0845 20.3109 18.2051 20.284 18.3479 20.2411C18.3575 21.8391 17.4514 23.3324 16.0342 23.9656C15.0519 24.2369 14.0315 24.375 13 24.375C6.72852 24.375 1.625 19.2715 1.625 13C1.625 6.72852 6.72852 1.625 13 1.625C19.2715 1.625 24.375 6.72852 24.375 13C24.375 14.8694 23.9307 16.6578 23.0531 18.313C22.8436 18.7097 22.996 19.2017 23.3911 19.4111C23.7894 19.6238 24.2798 19.4698 24.4893 19.0747C25.4779 17.2085 26 15.1074 26 13C26 5.83192 20.1681 0 13 0Z"
                />
              </svg>
              <span class="deckstop-text" v-cloak>{{ phoneBtnText }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      atTop: false,
      mobilMenuShow: false,
      phoneBtnText: "Заказать звонок",
    };
  },
  methods: {
    clickBtn(link) {
      document.getElementById(link).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      this.mobilMenuShow = false
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      this.atTop = window.pageYOffset < 30 ? false : true;
    });

    if (window.innerWidth < 480) {
      this.phoneBtnText = "Звонок бесплатный";
    } else {
      this.phoneBtnText = "Заказать звонок";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 480) {
        this.phoneBtnText = "Звонок бесплатный";
      } else {
        this.phoneBtnText = "Заказать звонок";
      }
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#new-header-test-top-v2 {
  background: #323232;
  font-family: "Montserrat", sans-serif;
  position: relative;
  z-index: 10;
  min-height: 95px;
  max-width: 100vw;
  overflow-x: hidden;
  @media (max-width: 991px) {
    position: relative;
    min-height: 66px;
  }

  [v-cloak] {
    display: none;
  }

  .bg-header-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 95px;
    background: rgb(50, 50, 50);
    display: flex;
    z-index: 100;
    transition: 0.4s box-shadow ease-in-out;

    &_shadow {
      box-shadow: 0 7px 9px 1px rgb(0, 0, 0, 0.3);
    }

    @media (max-width: 991px) {
      min-height: 66px;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #323232;
        z-index: 2;
      }
    }
  }

  .content-container {
    justify-content: center;
  }

  .header-top__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: 16px;
    padding: 15px 0;

    @media (max-width: 991px) {
      padding: 10px 0;
      column-gap: 30px;
    }
  }

  .header-top__logo {
    display: flex;
    align-items: center;

    @media (max-width: 1430px) {
      flex-direction: column;
    }

    @media (max-width: 991px) {
      position: relative;
      z-index: 11;
    }

    img {
      width: 115px;
      height: 65px;

      @media (max-width: 1080px) {
        width: 87px;
        height: auto;
      }

      @media (max-width: 991px) {
        width: 62px;
        height: 30px;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 164px;
        height: auto;
      }
    }

    .logo__text-box {
      margin-left: 40px;
      @media (max-width: 1499px) {
        display: none;
      }
    }

    .logo__text {
      width: max-content;
      max-width: 175px;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #dedede;
    }
  }

  @media (max-width: 991px) and (min-width: 480px) {
    .menu-container span {
      display: block;
    }
  }

  .menu-container {
    @media (min-width: 992px) {
      justify-content: space-between;
      max-width: 600px;
      width: 100%;
    }

    @media (max-width: 991px) {
      position: static;
      width: 30px;
      height: 26px;
      background: transparent;
      order: 3;
      z-index: auto;
    }

    @media (max-width: 575px) {
      width: 22px;
      height: 18px;
    }

    .menu-toggler {
      display: none;

      @media (max-width: 991px) {
        display: block;
      }

      position: relative;
      width: 30px;
      height: 26px;
      background: transparent;
      background-image: none !important;
      cursor: pointer;
      z-index: 11;
      transition: 0.4s all;

      @media (max-width: 575px) {
        width: 22px;
        height: 18px;
      }

      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 2px;
        border-radius: 25px;
        background-color: #ffffff;
        background-image: none !important;
        transition: 0.4s all;

        @media (max-width: 575px) {
          width: 22px;
        }

        &:nth-child(1) {
          top: 0;
          transition: 0.3s all 0.2s;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        &:nth-child(3) {
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        &:nth-child(4) {
          top: 24px;
          transition: 0.3s all 0.2s;
          @media (max-width: 575px) {
            top: 16px;
          }
        }
      }

      &_open {
        transform: rotate(90deg);
        span {
          &:nth-child(1) {
            opacity: 0;
            transition: 0.1s all;
          }

          &:nth-child(2) {
            width: 33px;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);

            @media (max-width: 575px) {
              width: 24px;
            }
          }

          &:nth-child(3) {
            width: 33px;
            transform: translateX(-50%) translateY(-50%) rotate(-45deg);

            @media (max-width: 575px) {
              width: 24px;
            }
          }

          &:nth-child(4) {
            opacity: 0;
            transition: 0.1s all;
          }
        }
      }
    }

    .header-top__menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      row-gap: 10px;
      column-gap: 30px;
      width: auto;
      margin: 0;

      @media (max-width: 1199px) {
        column-gap: 10px;
      }

      @media (min-width: 992px) {
        justify-content: space-between;
        max-width: 600px;
        width: 100%;
      }

      @media (max-width: 991px) {
        top: 100%;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        row-gap: 5px;
        padding: 16px 0 10px;
        width: 100%;
        transform: translateY(-100%);
        border: none;
        background: rgb(50, 50, 50, 97%);
        box-shadow: 0 0 12px 1px rgb(0, 0, 0, 70%);
        opacity: 0;
        z-index: 1;
        transition: 0.4s;
        position: absolute;

        &_visible {
          opacity: 1;
          transform: translateY(-1px);
        }
      }

      li {
        margin: 0px;

        @media (max-width: 991px) {
          margin: 0 5px;
          text-align: center;
        }

        @media (max-width: 991px) {
          margin: 0;
        }
      }

      a {
        padding: 5px 10px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        transition: 0.4s all;

        @media (max-width: 1549px) {
          padding: 5px 10px;
        }

        @media (max-width: 991px) {
          font-size: 15px;
          line-height: 18px;
          padding: 5px 5px;
        }

        @media (max-width: 991px) {
          width: 100%;
          padding: 5px 15px;
          font-size: 18px;
          line-height: 22px;
        }

        @media (max-width: 575px) {
          padding: 5px;
          font-size: 15px;
          line-height: 18px;
        }

        &:hover {
          color: $primary-color;
        }

        @media (min-width: 768px) {
          background: linear-gradient(
            to left,
            #ffffff 50%,
            $primary-color 50%
          ) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-size: 200% 100% !important;
          background-position: right !important;

          &:hover {
            background: linear-gradient(
              to left,
              #ffffff 50%,
              $primary-color 50%
            ) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-size: 200% 100% !important;
            background-position: left !important;
          }
        }
      }
    }
  }

  .header-top__phone {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    row-gap: 8px;

    @media (max-width: 1379px) {
      flex-direction: column;
    }

    @media (max-width: 991px) {
      position: relative;
      z-index: 11;
      margin-left: auto;
    }

    .header-top__phone-number {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #f0f0f0;
      transition: 0.4s all;

      &:hover {
        color: $primary-color;
      }

      @media (max-width: 1379px) {
        display: none;
      }
    }

    .header-top__phone-button {
      display: flex;
      align-items: center;
      padding: 8px 20px;
      border: 2px solid #33a849;
      border-radius: 22px;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.001em;
      color: #33a849;
      transition: 0.3s all;
      width: auto;
      height: auto;
      margin-top: 0;

      @media (max-width: 991px) {
        padding: 4px 10px;
      }

      @media (max-width: 575px) {
        font-size: 10px;
        line-height: 12px;
        width: min-content;
        border: none;
      }

      svg {
        width: 26px;
        height: 26px;
        margin-right: 10px;
        transition: 0.3s all;
        flex-shrink: 0;

        path {
          fill: #33a849;
          transition: 0.3s all;
        }
      }

      &:hover {
        color: $primary-color;
        border-color: $primary-color;

        svg {
          transform: rotate(45deg);

          path {
            fill: $primary-color;
          }
        }
      }
    }
  }
}
</style>
