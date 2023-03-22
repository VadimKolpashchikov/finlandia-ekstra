<template>
  <section id="feedback">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Отзывы наших клиентов</h3>
      </div>
      <div class="swiper-box">
        <div class="feedback-swiper">
          <div class="swiper-wrapper">
            <div
              v-for="(el, id) in 5"
              :key="id"
              class="swiper-slide"
              :class="`slide-${id + 1}`"
            >
              <div class="swiper-slide-wrap">
                <picture>
                  <source
                    :srcset="`new-site-vue/build/images/feedback/feedback-${
                      id + 1
                    }.webp`"
                    type="image/webp"
                  />
                  <img
                    :src="`new-site-vue/build/images/feedback/feedback-${
                      id + 1
                    }.png`"
                    alt="Отзывы о Финляндии Экстра"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div class="feedback-pagination"></div>
          <div class="feedback-navigation">
            <div class="feedback-btn_prev feedback-btn"></div>
            <div class="feedback-btn_next feedback-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Feedback",
  mounted() {
    const myFeedbackSwiper = new Swiper(".feedback-swiper", {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: false,
      loopedSlides: 2,
      loop: true,
      navigation: {
        nextEl: ".feedback-btn_next",
        prevEl: ".feedback-btn_prev",
      },
      pagination: {
        clickable: false,
        el: ".feedback-pagination",
      },
      breakpoints: {
        768: {
          spaceBetween: 50,
          centeredSlides: false,
        },
        992: {
          spaceBetween: 62,
          centeredSlides: true,
        },
      },
      modules: [Navigation, Pagination],
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#feedback {
  padding: 151px 0 73px;
  background: $section-gray-bg;

  @media (max-width: 991px) {
    padding: 100px 0 73px;
  }

  @media (max-width: 767px) {
    padding: 80px 0 50px;
  }

  @media (max-width: 575px) {
    padding: 33px 0 38px;
  }

  .title-box {
    width: 100%;
    margin-bottom: 52px;

    @media (max-width: 575px) {
      margin-bottom: 16px;
    }

    &__title {
      @media (max-width: 575px) {
        letter-spacing: 0.01em;
        text-transform: uppercase;
      }
    }
  }

  .swiper-box {
    position: relative;
    max-width: 1296px;
    width: 100%;
    padding: 0 120px;

    @media (max-width: 1199px) {
      padding: 0 80px;
    }

    @media (max-width: 767px) {
      padding: 0 45px;
      max-width: 420px;
    }

    @media (max-width: 575px) {
      max-width: 350px;
    }

    .feedback-swiper {
      align-items: stretch;
      width: 100%;
      overflow: hidden;

      .swiper-slide {
        height: auto;
        width: calc((100% / 3) - (124px / 3)) !important;

        @media (max-width: 991px) {
          width: calc(50% - 25px) !important;
        }

        @media (max-width: 767px) {
          width: 100% !important;
        }

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .feedback-pagination {
        display: flex;
        justify-content: center;
        margin-top: 116px;
        width: 100%;
        z-index: 2;

        @media (max-width: 1199px) {
          margin-top: 56px;
        }

        @media (max-width: 767px) {
          margin-top: 20px;
        }

        span {
          width: 24px;
          height: 24px;
          margin: 0 12px;
          background-color: #bdbdbd;
          opacity: 1;
          transition: 0.3s all;
          pointer-events: none;
          // @media (min-width: 768px) {
          //   &:hover {
          //     background-color: $primary-color;
          //   }
          // }

          @media (max-width: 767px) {
            width: 20px;
            height: 20px;
            margin: 0 6px;
          }

          &.swiper-pagination-bullet-active {
            background-color: $primary-color;
          }
        }
      }

      .feedback-navigation {
        position: absolute;
        top: calc(50% - 70px);
        left: 0;
        transform: translate(0, -50%);
        z-index: 2;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: space-between;
        pointer-events: none;

        @media (max-width: 1199px) {
          top: calc(50% - 40px);
        }

        @media (max-width: 767px) {
          top: calc(50% - 20px);
        }

        .feedback-btn {
          position: relative;
          width: 43px;
          height: 43px;
          background-position: center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          cursor: pointer;
          pointer-events: all;
          transition: 0.3s all;

          @media (min-width: 768px) {
            &:hover:not(.swiper-button-disabled) {
              transform: scale(1.07);
            }
          }

          @media (max-width: 767px) {
            width: 28px;
            height: 28px;
          }
        }

        .feedback-btn_next {
          background-image: url("../images/global/slider-next.svg");
        }
        .feedback-btn_prev {
          background-image: url("../images/global/slider-prev.svg");
        }

        .swiper-button-disabled {
          filter: grayscale(1);
        }
      }
    }
  }
}
</style>
