<template>
  <section id="mechanics">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Принцип работы аппарата</h3>
        <p class="title-box__subtitle">Всё проще, чем кажется</p>
      </div>
      <div class="row">
        <div class="mechanics__img-wrap">
          <video
            class="lazy"
            data-src="new-site-vue/build/video/mechanics.mp4"
            autoplay="autoplay"
            loop="loop"
            muted
          >
            <source
              type="video/mp4"
              data-src="new-site-vue/build/video/mechanics.mp4"
            />
          </video>
        </div>
        <div class="mechanics">
          <div class="mechanics-pagination"></div>
          <div class="mechanics-navigation">
            <div class="mechanics-btn_prev mechanics-btn"></div>
            <div class="mechanics-btn_next mechanics-btn"></div>
          </div>
          <div class="mechanics__wrap swiper-wrapper">
            <div
              class="mechanics__item swiper-slide"
              v-for="(i, id) in paragraphs"
              :key="id"
            >
              <p class="mechanics__text" v-html="i"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Mechanics",
  data() {
    return {
      paragraphs: [
        "Залейте брагу в <span>бак&nbsp;(1)</span>. Установите аппарат на плиту и подключите к водопроводу. За температурой можно следить с помощью <span>термометра&nbsp;(2)</span>.",
        "<span>Конусная крышка&nbsp;(3)</span> направляет пары прямо<br/>в <span>камеру предварительной очистки&nbsp;(4)</span>. Здесь происходит многократный процесс испарения и конденсации: медная РНП удерживает сивушные масла и примеси.",
        "Сивушные масла стекают обратно в куб, а чистые пары поднимаются вверх по <span>дугообразной царге&nbsp;(5)</span>. Вредные примеси остаются на стенках царги — очистка спирта продолжается.",
        "Ещё одно препятствие для сивушных масел — <span>разборный сухопарник&nbsp;(6)</span>. В него можно положить цедру, травы или специи на ваш выбор. Самогон получится не только чистым,<br/>но и ароматным.",
        "В конце спиртовые пары попадают в вертикальный <span>холодильник&nbsp;(7)</span>. Здесь они конденсируются и стекают<br/>в приёмную емкость. На выходе вы получаете абсолютно<br/>чистый продукт.",
      ],
    };
  },
  mounted() {
    const mechanicsSwiperbreakpoint = window.matchMedia("(max-width:767px)");
    let myMechanicsSwiper;
    const mechanicsSwiper = function () {
      myMechanicsSwiper = new Swiper(".mechanics", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".mechanics-btn_next",
          prevEl: ".mechanics-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".mechanics-pagination",
        },
        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (mechanicsSwiperbreakpoint.matches) {
        return mechanicsSwiper();
      } else {
        if (myMechanicsSwiper) {
          return myMechanicsSwiper.destroy(true, true);
        }
      }
    };

    mechanicsSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#mechanics {
  padding: 150px 0 48px;
  background: #ffffff;

  @media (max-width: 991px) {
    padding: 100px 0 48px;
  }

  @media (max-width: 575px) {
    padding: 26px 0 27px;
  }

  // video:not([src]):not([srcset]) {
  //   visibility: hidden;
  // }

  .title-box {
    width: 100%;
    margin-bottom: 85px;

    @media (max-width: 991px) {
      margin-bottom: 45px;
    }

    @media (max-width: 767px) {
      margin-bottom: 24px;
    }
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
    width: 100%;

    @media (max-width: 1199px) {
      gap: 20px;
    }

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .mechanics {
    max-width: 648px;
    width: 100%;

    @media (max-width: 1199px) {
      width: calc(50% - 10px);
    }

    @media (max-width: 991px) {
      max-width: 100%;
      width: 100%;
    }

    @media (max-width: 767px) {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 0;
      margin-top: 15px;
    }

    &__img-wrap {
      position: relative;
      max-width: 700px;
      width: 100%;
      @media (max-width: 1199px) {
        max-width: calc(50% - 10px);
      }

      @media (max-width: 991px) {
        max-width: 700px;
      }

      @media (max-width: 767px) {
        max-width: 500px;
      }

      @media (max-width: 575px) {
        max-width: 100%;
        padding: 0 5.973%;
      }

      video {
        max-width: 100%;
      }
    }

    &__wrap {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
      }
    }

    &__item {
      @media (min-width: 768px) {
        height: auto;
      }
    }

    &__text {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: $text-black-gray;

      span {
        font-weight: 700;
        color: $primary-color;
      }
    }

    .mechanics-pagination {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      padding-top: 4px;
      padding-left: 30px;
      padding-right: 30px;
      width: 100%;
      z-index: 2;

      @media (min-width: 768px) {
        display: none;
      }

      span {
        width: 20px;
        height: 20px;
        margin: 0 6px;
        background-color: #bdbdbd;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background-color: $primary-color;
        }
      }
    }

    .mechanics-navigation {
      position: absolute;
      top: 0;
      z-index: 2;
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      @media (min-width: 768px) {
        display: none;
      }

      .mechanics-btn {
        position: relative;
        width: 28px;
        height: 28px;
        background-color: #ffffff;
        background-position: center;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        cursor: pointer;
        pointer-events: all;
        transition: 0.3s all;
      }

      .mechanics-btn_next {
        background-image: url("../images/global/slider-next.svg");
      }
      .mechanics-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
