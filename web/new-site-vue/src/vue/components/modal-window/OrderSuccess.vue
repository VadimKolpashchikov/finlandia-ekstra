<template>
  <div id="order-success" class="form-popup order-success-new">
    <div class="order-success__wrap">
      <h5 class="order-success__title">Спасибо за заказ!</h5>
      <p class="order-success__text">
        Наш менеджер уже получил ваше обращение. Проверьте свой номер - вдруг Вы
        ошиблись?
      </p>
      <form method="post" action="sendEmail.php">
        <label class="order-success__label">
          <span> Номер телефона </span>
          <input type="text" name="phone" placeholder="+7 (***) ***-**-**" />
        </label>
        <input type="hidden" name="order" data-order="-1" value="" />
        <button type="submit" class="order-success__form-btn btn-red">
          Подтвердить
        </button>
        <div v-html="formNeedInputs"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderSuccess",
  computed: mapGetters(["formNeedInputs"]),
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#order-success.order-success-new {
  display: none;
  width: 100%;
  max-width: 586px;
  padding: 53px 18px 50px 18px !important;
  margin-bottom: 0;
  background: #ffffff;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 575px) {
    padding: 45px 18px 19px 18px !important;
  }

  .order-success__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
  }

  .order-success__title {
    margin: 0 0 12px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .order-success__text {
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 17px;
  }

  .order-success__label {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    span {
      margin-bottom: 9px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
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

  .order-success__form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 575px) {
    }
    width: 100%;
    max-width: 163px;
    min-height: 63px;
    padding: 10px 15px;
    margin-top: 24px;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: none;
  }
}
</style>
