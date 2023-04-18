<template>
  <section id="review-video">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Видеообзоры</h3>
      </div>
      <div class="swiper-box">
        <div class="review-video-swiper">
          <div class="swiper-wrapper">
            <div v-for="el in video" :key="el.id" class="swiper-slide">
              <div class="swiper-slide-wrap">
                <a
                  class="video-link"
                  data-fancybox
                  :href="`https://www.youtube.com/watch?v=${el.id}`"
                >
                  <picture>
                    <source
                      type="image/webp"
                      :srcset="`https://i.ytimg.com/vi_webp/${el.id}/maxresdefault.webp`"
                    />
                    <img
                      class="lazy"
                      :data-src="`https://i.ytimg.com/vi/${el.id}/maxresdefault.jpg`"
                      alt="Видеообзоры Финляндии Экстра"
                    />
                  </picture>
                  <video-btn />
                </a>
              </div>
              <p class="video-description" v-html="el.description"></p>
            </div>
          </div>
          <div class="review-video-pagination swiper-pagination"></div>
          <div class="review-video-navigation swiper-navigation">
            <div
              class="review-video-btn_prev swiper-btn_prev review-video-btn"
            ></div>
            <div
              class="review-video-btn_next swiper-btn_next review-video-btn"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import VideoBtn from "./helpers/VideoBtn.vue";
export default {
  name: "ReviewVideo",
  components: {
    VideoBtn,
  },
  data: () => ({
    video: [
      {
        id: "-W2xO2cYgNo",
        description:
          "Самогонный аппарат «Финляндия Экстра»: до 6 литров самогона&nbsp;и спирта в час",
      },
      {
        id: "WDH-1_XG97Y",
        description:
          "Самогонный аппарат с сухопарником «Финляндия Экстра». Видео-обзор",
      },
    ],
  }),
  mounted() {
    const swiperbreakpoint = window.matchMedia("(max-width:991px)");
    let ReviewVideoSwiper;
    const reviewVideoSwiper = function () {
      ReviewVideoSwiper = new Swiper(".review-video-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: false,
        loop: false,
        navigation: {
          nextEl: ".review-video-btn_next",
          prevEl: ".review-video-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".review-video-pagination",
        },
        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (swiperbreakpoint.matches) {
        return reviewVideoSwiper();
      } else {
        if (ReviewVideoSwiper) {
          return ReviewVideoSwiper.destroy(true, true);
        }
      }
    };
    swiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

#review-video {
  padding: 98px 0 102px;
  border-top: 1px solid #bdbdbd;
  background: $section-gray-bg;

  @media (max-width: 991px) {
    padding: 90px 0 70px;
  }

  @media (max-width: 767px) {
    padding: 80px 0 50px;
  }

  @media (max-width: 575px) {
    padding: 50px 0 50px;
  }

  img:not([src]):not([srcset]) {
    aspect-ratio: 16/9;
  }

  .title-box {
    width: 100%;
    margin-bottom: 52px;

    @media (max-width: 575px) {
      margin-bottom: 20px;
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
    width: 100%;

    @media (max-width: 991px) {
      max-width: 700px;
      padding-bottom: 54px;
    }

    .review-video-swiper {
      overflow: hidden;
      width: 100%;
      .swiper-wrapper {
        @media (min-width: 992px) {
          display: flex;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 28px;
        }
      }

      .swiper-slide {
        @media (min-width: 992px) {
          width: calc(50% - 14px);
        }

        height: 100%;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .swiper-slide-wrap {
        display: flex;
        align-items: stretch;
        width: 100%;
        max-height: 450px;
        min-height: 85%;
        background: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
      }

      .video-link {
        position: relative;
        width: 100%;

        picture {
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          max-height: 450px;
        }

        &:hover {
          #video-btn {
            .shape {
              fill: #ff0000;
              fill-opacity: 1;
            }
          }
        }
      }

      .video-description {
        margin-top: 20px;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        color: $text-dark;

        @media (max-width: 575px) {
          margin-top: 15px;
          font-size: 15px;
          line-height: 18px;
        }
      }

      .review-video-navigation {
        @media (min-width: 992px) {
          display: none;
        }

        @media (max-width: 991px) {
          max-width: 200px;
          left: 50%;
          top: auto;
          bottom: 0;
          transform: translate(-50%, 25%);
        }

        @media (max-width: 767px) {
          transform: translate(-50%, 4px);
        }
      }

      .review-video-pagination {
        @media (min-width: 992px) {
          display: none;
        }

        @media (max-width: 991px) {
          z-index: 3;
          bottom: 0;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
