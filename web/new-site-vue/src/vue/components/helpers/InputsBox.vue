<template>
  <div class="inputs-box">
    <label class="inputs-box__label inputs-box__label-name">
      <span>Ваше имя</span>
      <input type="text" name="name" placeholder="ФИО" />
    </label>
    <label class="inputs-box__label inputs-box__label-phone">
      <span>Номер телефона</span>
      <input type="text" name="phone" placeholder="+7 (***) ***-**-**" />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputsBox",
};
</script>

<style lang="scss">
.inputs-box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 27px;
  margin-bottom: 18px;

  @media (max-width: 575px) {
    row-gap: 20px;
    margin-bottom: 28px;
  }

  .inputs-box__label {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    span {
      margin-bottom: 11px;
      font-family: inherit;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #4f4f4f;

      @media (max-width: 575px) {
        margin-bottom: 6px;
        font-size: 16px;
        line-height: 22px;
      }
    }

    input {
      padding: 23px 24px;
      font-family: inherit;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      @media (max-width: 575px) {
        width: 100%;
        padding: 15px 24px;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
}
</style>
