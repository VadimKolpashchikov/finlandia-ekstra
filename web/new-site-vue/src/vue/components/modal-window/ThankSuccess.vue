<template>
  <div id="thank-success-modal">
    <div class="thank-success__wrap">
      <h5 class="thank-success__ttile">Благодарим за&nbsp;доверие!</h5>
      <p class="thank-success__text">
        Наш менеджер уже получил ваше обращение.
      </p>
      <div class="thank-success__img-box">
        <picture>
          <source
            data-src="new-site-vue/build/images/modal/thank-success-img.webp"
            srcset="new-site-vue/build/images/modal/thank-success-img.webp"
            type="image/webp"
          />
          <source
            data-src="new-site-vue/build/images/modal/thank-success-img.png"
            srcset="new-site-vue/build/images/modal/thank-success-img.png"
            type="image/png"
          />
          <img
          class="lazy"
            data-src="new-site-vue/build/images/modal/thank-success-img.png"
            alt="Благодарим за доверие!"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankSuccess",
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#thank-success-modal {
  display: none;
  width: 100%;
  max-width: 450px;
  padding: 50px 18px 0 18px !important;
  margin-bottom: 0;
  background: #ffffff;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 575px) {
    padding: 40px 18px 0 18px !important;
  }

  .thank-success__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .thank-success__ttile {
    margin: 0 0 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .thank-success__text {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #323232;

    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  .thank-success__img-box {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    min-height: 180px;
  }
}
</style>
