<template>
  <footer id="footer" class="footer-new">
    <div class="content-container">
      <div class="footer__row">
        <div class="footer__logo-col">
          <div class="footer__logo-wrap">
            <img
              class="lazy"
              data-src="new-site-vue/build/images/footer-new/footer-logo.svg"
              alt="Лого компании"
            />
          </div>
          <a class="footer__phone-number" href="tel:88002505932"
            >8 800 250 59 32</a
          >
          <p class="footer__phone-text">телефон горячей линии</p>
          <!-- <div class="footer__social-wrap">
            <a class="footer__social-item footer__social-item_vk" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle cx="14" cy="14" r="14" fill="#2770D6" />
                <g clip-path="url(#clip0_1_277)">
                  <g clip-path="url(#clip1_1_277)">
                    <path
                      d="M14.5527 19C9.42774 19 6.50461 15.6216 6.38281 10H8.94996C9.03428 14.1261 10.9268 15.8739 12.4259 16.2342V10H14.8432V13.5586C16.3235 13.4054 17.8786 11.7838 18.4033 10H20.8206C20.4177 12.1982 18.7313 13.8198 17.532 14.4865C18.7313 15.027 20.652 16.4414 21.3828 19H18.7219C18.1504 17.2883 16.7264 15.964 14.8432 15.7838V19H14.5527Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_277">
                    <rect
                      width="17.2308"
                      height="17.2308"
                      fill="white"
                      transform="translate(5.38281 5)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1_277">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(5.38281 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a class="footer__social-item footer__social-item_ok" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14ZM13.9887 14.2248C16.0532 14.2248 17.7313 12.6046 17.7313 10.6129C17.7313 8.62056 16.0532 7 13.9887 7C11.9247 7 10.2461 8.62056 10.2461 10.6129C10.2461 12.6046 11.9247 14.2248 13.9887 14.2248ZM17.6884 16.3049C17.0116 16.7151 16.2769 17.0061 15.5151 17.1736L17.6073 19.1934C18.0359 19.6063 18.0359 20.2768 17.6073 20.6901C17.1792 21.1034 16.4852 21.1034 16.0575 20.6901L14.0004 18.7053L11.9451 20.6901C11.7308 20.8966 11.45 20.9999 11.1692 20.9999C10.8888 20.9999 10.6085 20.8966 10.3942 20.6901C9.96599 20.2768 9.96599 19.6067 10.3937 19.1934L12.4862 17.1736C11.7243 17.0061 10.9896 16.7147 10.3129 16.3049C9.80072 15.9932 9.64688 15.3401 9.96957 14.8454C10.2914 14.3499 10.9681 14.2008 11.4811 14.5125C13.0133 15.4428 14.9871 15.443 16.5201 14.5125C17.0331 14.2008 17.7097 14.3499 18.0321 14.8454C18.3548 15.3397 18.2005 15.9932 17.6884 16.3049Z"
                    fill="white"
                  />
                  <path
                    d="M13.991 9.11719C14.8456 9.11719 15.5407 9.78794 15.5407 10.6128C15.5407 11.437 14.8456 12.1082 13.991 12.1082C13.1372 12.1082 12.4414 11.437 12.4414 10.6128C12.4414 9.78794 13.1372 9.11719 13.991 9.11719V9.11719Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </div> -->
        </div>
        <div class="footer__contacts-col">
          <ul class="footer__contacts-list">
            <li>
              <span>ИНН:</span> 432500888349<br />
              <span>ОГРНИП:</span> 314744919000039
            </li>
            <li>
              <span>Адрес почтовый (фактический):</span><br />
              610006, г. Киров, Октябрьский пр-т, д. 24<br />
              <span>Для корреспонденции:</span>
              610000,а/я 154
            </li>
          </ul>
        </div>
        <div class="footer__links-col">
          <ul class="footer__links-list">
            <li>
              <a href="/uploadupdate/confidentiality.pdf">
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a href="/uploadupdate/oferta-rus.pdf"> Договор оферты </a>
            </li>
            <li>
              <a href="/dostavka-i-oplata"> Доставка по всей России </a>
            </li>
          </ul>
          <a href="/opt/" class="footer__btn btn-red">Купить оптом</a>
        </div>
      </div>
      <div class="footer__copyright-col">
        <p class="footer__copyright-text">
          © 2010 - {{ yearNow }} finlandia-ekstra.ru
          Все&nbsp;права&nbsp;защищены.<br />
          Использование материалов разрешено только с согласия правообладателей.
          Полное или частичное копирование сайта запрещено и преследуется по
          закону.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterNew",
  data() {
    return {
      yearNow: 2022,
    };
  },
  created() {
    this.yearNow = new Date().getFullYear();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#footer.footer-new {
  width: 100%;
  padding: 60px 0;
  background-color: #2f2f2f;
  overflow: hidden;

  @media (max-width: 575px) {
    padding: 33px 0 27px;
  }

  .content-container {
    flex-direction: column;
  }

  .footer__row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 40px;
    column-gap: 24px;
    // column-gap: 10.75%;
    width: 100%;
    margin-bottom: 90px;

    @media (max-width: 991px) {
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 30px;
      margin-bottom: 40px;
    }

    @media (max-width: 575px) {
      margin-bottom: 30px;
    }
  }

  .footer__logo-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    margin-right: auto;

    @media (max-width: 991px) {
      width: 100%;
      align-items: left;
    }

    .footer__logo-wrap {
      margin-bottom: 46px;

      @media (max-width: 991px) {
        align-self: center;
      }

      @media (max-width: 575px) {
        max-width: 120px;
      }
    }

    .footer__phone-number {
      margin-bottom: 14px;
      font-family: inherit;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      color: #ffffff;
      transition: 0.4s all;

      &:hover {
        color: $primary-color;
      }

      @media (max-width: 575px) {
        margin-bottom: 4px;
        font-weight: 600;
        font-size: 20px;
        line-height: 26px;
      }
    }

    .footer__phone-text {
      font-family: inherit;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      opacity: 0.55;
    }

    // .footer__social-wrap {
    //   display: flex;
    //   align-items: center;
    //   gap: 15px;
    //   margin-top: 22px;

    //   .footer__social-item {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     min-width: 28px;
    //     min-height: 28px;
    //     border-radius: 50%;
    //     transition: 0.3s all;
    //     background-position: center;
    //     background-size: 80%;
    //     svg {
    //       width: 100%;
    //       height: 100%;
    //     }

    //     &:hover {
    //       transform: scale(1.13) translateY(1px);
    //     }
    //   }
    // }
  }

  .footer__contacts-col {
    width: 100%;
    max-width: 335px;
    .footer__contacts-list {
      display: flex;
      flex-direction: column;
      row-gap: 26px;
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;

      @media (max-width: 575px) {
        row-gap: 16px;
      }

      li {
        font-weight: inherit;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.7);

        @media (max-width: 575px) {
          font-weight: 600;
          font-size: 14px;
          line-height: 1.4;
        }

        span {
          color: rgba(255, 255, 255, 1);

          @media (max-width: 575px) {
            font-weight: 700;
          }
        }
      }
    }
  }

  .footer__links-col {
    width: 100%;
    max-width: calc(270px + 10.75% - 24px);
    padding-left: calc(10.75% - 24px);

    @media (max-width: 991px) {
      max-width: 270px;
      padding-left: 0;
    }

    .footer__links-list {
      display: flex;
      flex-direction: column;
      row-gap: 18px;
      width: 100%;
      list-style: none;
      margin: -3px 0 0 0;
      padding: 0;

      @media (max-width: 575px) {
        row-gap: 10px;
      }

      li {
        font-family: inherit;
        width: 100%;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        @media (max-width: 575px) {
          font-size: 14px;
          line-height: 1.4;
        }

        a {
          padding: 3px 0;
          text-align: center;
          font-family: inherit;
          width: 100%;
          font-weight: inherit;
          font-size: inherit;
          line-height: inherit;
          color: #ffffff;
          transition: 0.4s all;
          background: linear-gradient(
            to left,
            #ffffff 50%,
            $primary-color 50%
          ) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-size: 200% 100% !important;
          background-position: right !important;

          @media (max-width: 575px) {
            text-decoration-line: underline;
          }

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

    .footer__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      width: 100%;
      max-width: 224px;
      min-height: 56px;
      padding: 10px 15px;
      margin-top: 24px;
      font-family: inherit;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: none;

      &::before {
        display: none;
      }

      @media (max-width: 575px) {
        max-width: 185px;
        min-height: 50px;
        border-radius: 3px;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }

  .footer__copyright-col {
    position: relative;
    width: 100%;
    padding-top: 31px;

    @media (max-width: 575px) {
      padding-top: 26px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 110vw;
      height: 1px;
      background: #ffffff;
      opacity: 0.1;

      @media (max-width: 575px) {
        width: 100%;
      }
    }

    .footer__copyright-text {
      max-width: 515px;
      margin-right: auto;
      font-family: inherit;
      text-align: left;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;

      @media (max-width: 575px) {
        max-width: 90%;
        font-size: 10px;
      }
    }
  }
}
</style>
