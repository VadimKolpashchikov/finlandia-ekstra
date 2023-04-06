<template>
  <section id="guarantee">
    <div class="content-container">
      <div class="row">
        <div class="title-box">
          <h3 class="title-box__title">
            <span>Вы заказываете самогонный аппарат напрямую</span><br />
            от завода-производителя!
          </h3>
        </div>
        <div class="guarantee__content">
          <div class="imgs-wrap">
            <div class="img-wrap" v-for="(img, idx) in 4" :key="idx">
              <picture>
                <source
                  :data-srcset="`new-site-vue/build/images/guarantee/guarantee-${
                    idx + 1
                  }.webp`"
                  type="image/webp"
                />
                <img
                class="lazy"
                  :data-src="`new-site-vue/build/images/guarantee/guarantee-${
                    idx + 1
                  }.png`"
                  alt="Гарантии качества"
                />
              </picture>
            </div>
          </div>
          <div class="text-wrap">
            <p class="text-wrap__text">Для вас это означает:</p>
            <ul class="text-wrap__list">
              <li
                v-for="(item, id) in guaranteeList"
                :key="id"
                v-html="item"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Guarantee",
  data() {
    return {
      guaranteeList: [
        "Без посредников<br> и наценок.",
        "Самогонные аппараты всегда<br>в наличии, отправка будет незамедлительно.",
        "Вся продукция проходит строгие проверки<br>в отделе технического контроля — брак исключён.",
        "Мы работаем исключительно<br>в соответствии с российским законодательством, а это значит, что все наши гарантии зафиксированы в договоре.",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#guarantee {
  padding: 137px 0 132px;
  background-color: $section-gray-bg;

  @media (max-width: 767px) {
    padding: 80px 0 60px;
    background-color: #ffffff;
  }

  @media (max-width: 575px) {
    padding: 22px 0 40px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    row-gap: 34px;
    column-gap: 39px;
    width: 100%;

    @media (max-width: 575px) {
      row-gap: 11px;
    }
  }

  .title-box {
    width: 100%;

    &__title {
      @media (max-width: 767px) and (min-width: 576px) {
        font-weight: 700;
        font-size: 40px;
        line-height: 43px;
      }

      span {
        color: $primary-color;
      }
    }
  }

  .guarantee__content {
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 34px;
    column-gap: 50px;
    width: 100%;

    @media (max-width: 991px) {
      column-gap: 40px;
    }

    @media (max-width: 767px) {
      flex-wrap: wrap;
      column-gap: 16px;
      row-gap: 24px;
    }

    @media (max-width: 575px) {
      row-gap: 11px;
    }
  }

  .imgs-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    max-width: 510px;

    @media (max-width: 575px) {
      gap: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      max-width: 100%;
    }

    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(50% - 15px);

      @media (max-width: 575px) {
        width: calc(50% - 10px);
      }
    }

    picture {
      width: 100%;
    }

    img {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }

  .text-wrap {
    width: 100%;
    max-width: 510px;
    font-family: "Inter", sans-serif;

    .text-wrap__text {
      margin-bottom: 28px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 30px;
      line-height: 120%;
      color: $primary-color;

      @media (max-width: 767px) {
        text-align: center;
      }

      @media (max-width: 575px) {
        margin-bottom: 35px;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
    }

    .text-wrap__list {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      row-gap: 20px;
      padding-left: 35px;

      li {
        position: relative;
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;
        color: #2f2f2f;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 22px;
        }

        &::before {
          content: "";
          position: absolute;
          top: 2px;
          left: -35px;
          width: 24px;
          height: 24px;
          background-image: url("../images/global/check-circle.svg");
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
