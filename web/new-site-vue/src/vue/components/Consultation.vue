<template>
  <section id="consultation" class="consultation">
    <div class="content-container">
      <div class="grid-box">
        <div class="grid-box__title">
          <h4 class="consultation__title">
            Консультируем по бесплатной горячей линии
          </h4>
        </div>
        <div class="grid-box__img">
          <div class="consultation__img-wrap">
            <picture>
              <source
                data-srcset="new-site-vue/build/images/consultation/mobil-phone.webp"
                type="image/webp"
              />
              <img
                class="lazy"
                data-src="new-site-vue/build/images/consultation/mobil-phone.png"
                alt="Консультация по телефону"
              />
            </picture>
          </div>
        </div>
        <div class="grid-box__text">
          <div class="consultation__phone-wrap">
            <a href="tel:88002505932" class="consultation__phone-number">
              8 800 250 59 32
            </a>
            <p class="consultation__phone-text consultation__text">
              Звонок по России бесплатный
            </p>
          </div>
          <div class="consultation__btn-wrap">
            <button
              class="consultation__btn btn-red"
              type="button"
              data-fancybox
              href="#callme"
            >
              Заказать звонок
            </button>
            <p class="consultation__btn-text consultation__text">
              Звоните прямо сейчас, задавайте вопросы и&nbsp;бронируйте
              спецпредложения
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Consultation",
};
</script>

<style lang="scss">
@import "../../scss/variables";
#consultation {
  padding: 49px 0 37px;
  background: #ffffff;

  @media (max-width: 767px) {
    padding: 27px 0 27px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  .grid-box {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    row-gap: 21px;
    column-gap: 30px;
    justify-content: center;
    width: 100%;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      column-gap: 22px;
    }

    &__title {
      grid-column: 2/3;
      grid-row: 1/2;
      align-self: end;

      @media (max-width: 991px) {
        grid-column: 1/2;
        grid-row: 1/2;
      }
    }

    &__img {
      grid-column: 1/2;
      grid-row: 1/3;

      @media (max-width: 991px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &__text {
      grid-column: 2/3;
      grid-row: 2/3;
      align-self: flex-start;

      @media (max-width: 991px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }
    }
  }

  .consultation {
    font-family: "Inter", sans-serif;

    &__title {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      color: $text-black-gray;

      @media (max-width: 991px) {
        max-width: 500px;
        margin: 0 auto 7px;
        text-align: center;
      }

      @media (max-width: 575px) {
        max-width: 205px;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
    }

    &__img-wrap {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
      }

      @media (max-width: 575px) {
        padding-right: 20px;
        img {
          max-width: 195px;
        }
      }
    }

    &__text {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: $text-black-gray;

      @media (max-width: 991px) {
        text-align: center;
      }
    }

    &__phone-wrap {
      display: flex;
      align-items: flex-start;
      column-gap: 26px;

      @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
    }

    &__phone-number {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 38px;
      line-height: 46px;
      color: $btnred;
      transition: 0.3s all;

      @media (max-width: 991px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        font-size: 32px;
        line-height: 39px;
      }

      &:hover {
        color: $btnred-hover;
      }
    }

    &__phone-text {
      max-width: 180px;
      padding-top: 4px;

      @media (max-width: 991px) {
        max-width: 100%;
        padding-top: 6px;
      }

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 19px;
      }
    }

    &__btn-wrap {
      display: flex;
      align-items: flex-start;
      column-gap: 32px;
      margin-top: 23px;

      @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
      }
    }

    &__btn {
      min-height: 77px;
      min-width: 296px;
      padding: 10px 15px;
      border-radius: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;

      &::before {
        display: none;
      }

      @media (max-width: 575px) {
        min-height: 58px;
        min-width: 262px;
        border-radius: 10px;
      }
    }

    &__btn-text {
      max-width: 435px;
      padding-top: 10px;

      @media (max-width: 991px) {
        padding-top: 22px;
      }

      @media (max-width: 575px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
