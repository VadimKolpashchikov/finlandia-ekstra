<template>
  <div id="header-features" class="header-features">
    <div class="content-container">
      <div class="header-features__title-wrap">
        <h3 class="header-features__main-title">Преимущества</h3>
      </div>
      <div class="row header-features__row">
        <div class="header-features__item">
          <div class="header-features__img-box">
            <img
              src="new-site-vue/build/images/header-features/features-1.svg"
              alt=""
            />
          </div>
          <div class="header-features__text-box">
            <p class="header-features__title">Оплата при получении</p>
            <p class="header-features__subtitle">
              Проверьте товар <br />
              перед покупкой.
            </p>
          </div>
        </div>
        <div class="header-features__item">
          <div class="header-features__img-box">
            <img
              src="new-site-vue/build/images/header-features/features-2.svg"
              alt=""
            />
          </div>
          <div class="header-features__text">
            <p class="header-features__title">Рассрочка на 4 месяца</p>
            <p class="header-features__subtitle">
              Совершайте покупки<br />
              без визита в банк.
            </p>
          </div>
        </div>
        <div class="header-features__item">
          <div class="header-features__img-box">
            <img
              src="new-site-vue/build/images/header-features/features-3.svg"
              alt=""
            />
          </div>
          <div class="header-features__text">
            <p class="header-features__title">Быстрая доставка</p>
            <p class="header-features__subtitle">
              В любой регион России<br />
              от 2 до 7 дней.
            </p>
          </div>
        </div>
        <div class="header-features__item">
          <div class="header-features__img-box">
            <img
              src="new-site-vue/build/images/header-features/features-4.svg"
              alt=""
            />
          </div>
          <div class="header-features__text">
            <p class="header-features__title">«Продвинутый» сервис</p>
            <p class="header-features__subtitle">
              Обмен в течение 14 дней,<br />
              возврат — 7.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderFeatures",
};
</script>

<style lang="scss">
@import "../../scss/variables";
#header-features {
  padding: 154px 0;
  background: #ffffff;
  border-bottom: 1px solid #bdbdbd;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 45px 0 55px;
  }

  .content-container {
    @media (max-width: 1199px) {
      max-width: 1000px;
    }
  }

  .header-features__title-wrap {
    width: 100%;
    margin-bottom: 55px;

    @media (max-width: 479px) {
      margin-bottom: 28px;
    }
  }

  .header-features__main-title {
    margin: 0;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    text-transform: none;
    color: #4f4f4f;

    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 37px;
    }

    @media (max-width: 479px) {
      text-align: left;
    }
  }

  .header-features__row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 0 -15px;

    @media (max-width: 1559px) {
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 30px;
      max-width: 760px;
    }

    @media (max-width: 479px) {
      justify-content: flex-start;
    }
  }

  .header-features__item {
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 380px;
    padding: 0 15px;
  }

  .header-features__img-box {
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 65px;
    margin-right: 5px;

    @media (max-width: 767px) {
      width: 52px;
      margin-right: 17px;
    }

    img {
      object-fit: contain;
      max-width: 100%;

      @media (max-width: 767px) {
        max-width: 52px;
        width: 100%;
        height: auto;
      }
    }
  }

  .header-features__text-box {
    flex-grow: 1;
  }

  .header-features__title {
    margin-bottom: 5px;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $primary-color;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .header-features__subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #4f4f4f;
    margin-bottom: 0;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>
