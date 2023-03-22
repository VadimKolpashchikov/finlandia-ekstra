<template>
  <section id="gallery">
    <div class="content-container">
      <div class="title-box">
        <h3 class="title-box__title">Настоящие фото «Финляндии Экстра»</h3>
        <p class="title-box__subtitle">
          Аппарат&nbsp;готов к&nbsp;использованию&nbsp;сразу после&nbsp;покупки
        </p>
      </div>
      <div class="gallery-swiper">
        <div class="grid-box swiper-wrapper">
          <div
            v-for="(el, id) in 7"
            :key="id"
            class="img-wrap swiper-slide"
            :class="`img-wrap-${id + 1}`"
          >
            <a
              v-bind:data-fancybox="fansyAtr"
              :href="`new-site-vue/build/images/gallery/img-${id + 1}.png`"
            >
              <picture>
                <source
                  :srcset="`new-site-vue/build/images/gallery/img-small-${
                    id + 1
                  }.webp`"
                  media="(min-width: 576px)"
                  type="image/webp"
                />
                <source
                  :srcset="`new-site-vue/build/images/gallery/img-small-${
                    id + 1
                  }.png`"
                  media="(min-width: 576px)"
                />
                <source
                  :srcset="`new-site-vue/build/images/gallery/img-small-mobil-${
                    id + 1
                  }.webp`"
                  type="image/webp"
                />
                <img
                  :src="`new-site-vue/build/images/gallery/img-small-mobil-${
                    id + 1
                  }.png`"
                  alt="Финляндии Экстра"
                />
              </picture>
            </a>
          </div>
        </div>
        <div class="gallery-pagination"></div>
        <div class="gallery-navigation">
          <div class="gallery-btn_prev gallery-btn"></div>
          <div class="gallery-btn_next gallery-btn"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  name: "Gallery",
  data() {
    return {
      fansyAtr: "gallery",
    };
  },
  mounted() {
    const gallerySwiperbreakpoint = window.matchMedia("(max-width:575px)");
    let myGallerySwiper;
    const gallerySwiper = function () {
      myGallerySwiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 32,
        grabCursor: true,
        loop: false,
        navigation: {
          nextEl: ".gallery-btn_next",
          prevEl: ".gallery-btn_prev",
        },
        pagination: {
          clickable: true,
          el: ".gallery-pagination",
        },

        modules: [Navigation, Pagination],
      });
    };
    const breakpointChecker = () => {
      if (gallerySwiperbreakpoint.matches) {
        gallerySwiper();
        return (this.fansyAtr = "");
      } else {
        if (myGallerySwiper) {
          myGallerySwiper.destroy(true, true);
          return (this.fansyAtr = "gallery");
        }
      }
    };

    gallerySwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#gallery {
  padding: 153px 0 129px;
  background: $section-gray-bg;

  @media (max-width: 991px) {
    padding: 100px 0;
  }

  @media (max-width: 767px) {
    padding: 70px 0;
  }

  @media (max-width: 575px) {
    padding: 24px 0 40px;
  }

  .content-container {
    @media (max-width: 575px) {
      padding: 0;
    }
  }

  .title-box {
    width: 100%;
    margin-bottom: 60px;

    @media (max-width: 575px) {
      padding: 0 20px;
      margin-bottom: 22px;
    }

    &__subtitle {
      font-family: "Inter", sans-serif;

      @media (max-width: 575px) {
        line-height: 20px;
      }
    }
  }

  .grid-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (min-width: 576px) {
      column-gap: 27px;
      row-gap: 20px;
    }

    @media (max-width: 1199px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    @media (max-width: 575px) {
      display: flex;
    }

    .img-wrap-1 {
      grid-column: 1/2;
      grid-row: 1/3;
      display: flex;
    }

    .img-wrap {
      transition: 0.4s all;
      border-radius: 10px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
      cursor: zoom-in;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        cursor: zoom-in;
        overflow: hidden;

        picture {
          display: flex;
          width: 100%;
        }

        img {
          max-width: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s cubic-bezier(0.2, 1.03, 0.55, 0.7) transform;
        }
      }

      @media (min-width: 992px) {
        &:hover {
          box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
          img {
            transform: scale(1.15);
          }
        }
      }
    }
  }

  .gallery-swiper {
    position: relative;
    width: 100%;

    @media (max-width: 575px) {
      max-width: 400px;
      overflow: hidden;
      margin: 0 auto;
    }

    .gallery-pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: 100%;
      z-index: 2;

      @media (min-width: 576px) {
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

    .gallery-navigation {
      position: absolute;
      top: calc(50% - 20px);
      transform: translateY(-50%);
      z-index: 2;
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      @media (min-width: 576px) {
        display: none;
      }

      .gallery-btn {
        position: relative;
        width: 50px;
        height: 100px;
        background-color: #ffffff;
        background-position: 7px center;
        background-size: 28px 28px;
        background-repeat: no-repeat;
        cursor: pointer;
        pointer-events: all;
        transition: 0.3s all;
      }

      .gallery-btn_next {
        background-image: url("../images/global/slider-next.svg");
        background-position: 14px center;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
      .gallery-btn_prev {
        background-image: url("../images/global/slider-prev.svg");
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }

      .swiper-button-disabled {
        filter: grayscale(1);
      }
    }
  }
}
</style>
