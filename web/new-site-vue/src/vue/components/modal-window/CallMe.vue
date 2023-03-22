<template>
  <div id="callme" class="callme callme-new form-popup">
    <div class="callme-wrap">
      <h5 class="callme__title">Заказать обратный звонок</h5>
      <p class="callme__text">
        Оставьте контактную информацию, менеджер свяжется с вами
        в&nbsp;течение&nbsp;15&nbsp;минут
      </p>
      <div class="form-container">
        <form class="call-modal spnForm" action="sendCall.php">
          <input type="hidden" class="gmt" name="gmt" />
          <input type="hidden" class="url" name="url" />
          <div class="callme__inputs-box">
            <label class="callme__label">
              <span>Имя</span>
              <input type="text" name="name" placeholder="Дмитрий" />
            </label>
            <label class="callme__label">
              <span>Номер телефона</span>
              <input
                type="text"
                name="phone"
                placeholder="+7 (***) ***-**-**"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Заказать звонок"
            class="callme__form-btn btn-red"
          />
          <div v-html="formNeedInputs"></div>
        </form>
        <p class="callme__info">
          Нажимая кнопку “Заказать”, вы соглашаетесь на обработку персональных
          данных, а так же с<br />
          <a href="/uploadupdate/confidentiality.pdf" target="_blank"
            >политикой конфиденциальности</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CallMe",
  computed: mapGetters(["formNeedInputs"]),
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#callme.callme-new {
  display: none;
  width: 100%;
  max-width: 504px;
  padding: 45px 18px 19px 18px !important;
  background: #ffffff;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;

  .callme-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
  }

  .callme__title {
    margin: 0 0 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: none;
    color: #000000;
  }

  .callme__text {
    margin: 0;
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

  .form-container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-top: 29px;

    @media (max-width: 575px) {
      margin-top: 3px;
    }
  }

  .call-modal {
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }

  .callme__inputs-box {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 24px;
    width: 100%;
    margin-bottom: 24px;

    @media (max-width: 575px) {
    }

    .callme__label {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      span {
        margin-bottom: 9px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #000000;

        @media (max-width: 575px) {
        }
      }

      input {
        height: auto;
        padding: 18px 25px;
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .callme__form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 263px;
    min-height: 63px;
    padding: 10px 15px;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: none;
  }

  .callme__info {
    max-width: 280px;
    margin: 15px auto 0;
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #2f2f2f;
    opacity: 0.9;

    @media (max-width: 575px) {
      margin: 13px auto 0;
    }

    a {
      color: $primary-color;
      transition: 0.3s all;

      &:hover {
        color: $btnred;
      }
    }
  }
}
</style>
