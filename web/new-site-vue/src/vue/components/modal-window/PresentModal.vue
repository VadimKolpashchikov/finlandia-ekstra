<template>
  <div id="present-modal">
    <div class="present-modal__wrap">
      <h5
        class="present-modal__title"
        v-html="presentModal.title"
      ></h5>
      <div
        class="present-modal__text"
        v-html="presentModal.text"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PresentModal",
   computed: mapGetters(["presentModal"]),
};
</script>

<style lang="scss">
#present-modal {
  display: none;
  max-width: 92vw;
  width: 394px;
  min-height: 160px;
  padding: 22px 22px 22px 22px;
  background: #ffffff;
  border-radius: 10px;

  .present-modal__wrap {
    width: 100%;
    min-height: 100px;
  }

  .present-modal__title {
    margin: 0 0 10px;
    padding-right: 12px;
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #333333;

    @media (max-width: 575px) {
      padding-right: 15px;
    }
  }

  .present-modal__text {
    ul {
      list-style: none;
      margin: 0;
      padding: 0 0 0 13px;

      li {
        position: relative;
        margin: 0;

        &:before {
          content: "";
          position: absolute;
          left: -12px;
          top: 10px;
          width: 6px;
          height: 1px;
          background-color: currentColor;
        }
      }
    }
    p,
    li {
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #828282;
    }
  }
}
</style>
