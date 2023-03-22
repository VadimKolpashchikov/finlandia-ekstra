<template>
  <section id="experiment">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Выгодные эксперименты</h3>
      </div>
      <div class="row">
        <div class="img-wrap">
          <picture>
            <source
              srcset="new-site-vue/build/images/experiment/arom.webp"
              type="image/webp"
            />
            <img
              src="new-site-vue/build/images/experiment/arom.png"
              alt="Крышка-ароматор"
            />
          </picture>
        </div>
        <div class="text-wrap">
          <p class="text-wrap__subtitle">
            Только <span v-html="'до ' + tomorrow"></span> вы можете заказать
            крышку-ароматор для сухопарника
            <span>со&nbsp;скидкой&nbsp;50%</span>
          </p>
          <a href="#arom-modal" data-fancybox class="btn-blue text-wrap__btn"
            >Подробнее</a
          >
          <div id="arom-modal" class="arom-modal">
            <p class="arom-modal__text">
              Приготовьте напитки, которые произведут фурор на вашем столе.
              Получайте аромадистилляты со вкусом лимона или апельсина.
              Используйте ягоды можжевельника или медовые соты. Не
              ограничивайтесь уже существующими рецептами — создавайте авторские
              напитки самостоятельно.
            </p>
            <div class="arom-modal__price-wrap">
              <p class="arom-modal__price-old">
                {{ oneProduct(`arom`).oldPriceF }} руб.
              </p>
              <p class="arom-modal__price">
                {{ oneProduct(`arom`).priceF }} руб.
              </p>
            </div>
            <a
              @click.prevent="clickBtn"
              href="#kit"
              class="btn-red arom-modal__btn"
              >Добавить в заказ</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Experiment",
  computed: mapGetters(["oneProduct", "tomorrow"]),
  methods: {
    ...mapMutations(["addDop"]),
    clickBtn() {
      this.addDop("arom");
      Fancybox.close();
      document.getElementById("kit").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#experiment {
  padding: 151px 0 158px;
  background: #ffffff;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0 70px;
  }

  @media (max-width: 575px) {
    padding: 35px 0 25px;
  }

  .title-box {
    margin-bottom: 32px;

    @media (max-width: 575px) {
      margin-bottom: 0;
    }
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 42px;

    @media (max-width: 991px) {
      column-gap: 32px;
    }

    @media (max-width: 767px) {
      flex-wrap: wrap;
      row-gap: 32px;
    }

    @media (max-width: 575px) {
      row-gap: 0;
    }
  }

  .img-wrap {
    @media (max-width: 1299px) {
      width: calc(50% - 21px);
    }

    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    @media (max-width: 575px) {
      max-width: 100%;
      padding: 0 5px;
    }

    img {
      max-width: 100%;

      @media (max-width: 767px) {
        max-width: 400px;
      }

      @media (max-width: 575px) {
        max-width: 100%;
      }
    }
  }

  .text-wrap {
    max-width: 640px;

    @media (max-width: 1299px) {
      width: calc(50% - 21px);
    }

    @media (max-width: 767px) {
      width: 100%;
    }

    &__subtitle {
      margin-bottom: 22px;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        margin-bottom: 13px;
        font-size: 20px;
        line-height: 24px;
      }

      span {
        color: $btnred;
      }
    }

    &__btn {
      width: 135px;
      min-height: 43px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.01em;

      @media (min-width: 576px) {
        display: none;
      }
    }
  }
}

#arom-modal {
  font-family: "Inter", sans-serif;

  @media (max-width: 575px) {
    display: none;
    padding: 42px 20px 30px;
    border-radius: 3px;
  }

  @media (min-width: 576px) {
    display: block !important;
  }

  .arom-modal__text {
    margin-bottom: 45px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: $text-black-gray;

    @media (max-width: 991px) {
      margin-bottom: 32px;
    }

    @media (max-width: 575px) {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .arom-modal__price-wrap {
    display: flex;
    align-items: baseline;
    column-gap: 15px;
    margin-bottom: 12px;
  }

  .arom-modal__price-old {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: line-through;
    color: $text-black-gray;
  }

  .arom-modal__price {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: $text-black-gray;
  }

  .arom-modal__btn {
    min-height: 77px;
    width: 267px;
    padding: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;

    @media (max-width: 575px) {
      min-height: 62px;
      letter-spacing: 0.01em;
    }
  }
}
</style>
