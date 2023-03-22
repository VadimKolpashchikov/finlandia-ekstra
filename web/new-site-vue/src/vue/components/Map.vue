<template>
  <section id="map">
    <div class="content-container">
      <div class="title-box">
        <h4 class="title-box__title">
          Магазины «Градус Хаус» — теперь и сервисные центры
        </h4>
        <p class="title-box__subtitle">В наших магазинах вы сможете:</p>
      </div>
      <div class="list-box">
        <ul class="list-box__list list-box__list_1">
          <li v-for="(li, idx) in list1" :key="idx" v-html="li"></li>
        </ul>
        <ul class="list-box__list list-box__list_2">
          <li v-for="(li, idx) in list2" :key="idx" v-html="li"></li>
        </ul>
      </div>
    </div>
    <div class="content-container_map">
      <div v-if="pageLoad" class="page-loader-wrap">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      pageLoad: true,
      list1: [
        "купить товары для консервирования, самогоноварения, копчения",
        "оформить заявку на самовывоз и забрать товар, купленный в интернет-магазине",
      ],
      list2: [
        "оформить скидочную карту",
        "сдать товар по гарантии, оформить возврат или обмен без бюрократии",
        "получить консультацию специалиста",
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      // получение списка адресов магазинов
      const requestURL = "https://apispn.ru/json/shops/";
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = function () {
        const citiesJSON = JSON.parse(request.response);

        // создание карты с метками
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        document.querySelector("body").appendChild(script);

        script.onload = function () {
          ymaps.ready(function () {
            const myMap = new ymaps.Map("shop-map", {
              center: [55.536837, 42.473709],
              zoom: 5,
              controls: ["zoomControl"],
            });

            myMap.behaviors.disable("scrollZoom");

            // создание меток на общей карте
            Object.keys(citiesJSON).forEach(function (inx) {
              let city = this[inx]["city"];
              this[inx]["shops"].forEach(function (shop) {
                let mark = new ymaps.Placemark(
                  shop["coords"],
                  {
                    hintContent:
                      "Градус Хаус в г. " + city + ", " + shop["name"],
                  },
                  {
                    iconLayout: "default#image",
                    iconImageHref:
                      "new-site-vue/build/images/global/placemark.png",
                    iconImageSize: [66, 79],
                    iconImageOffset: [-33, -38],
                  }
                );
                mark.events.add("click", function (e) {
                  city_input.value = city;
                  cities_list.innerHTML = "";
                  city_btn.click();
                });
                myMap.geoObjects.add(mark);
              });
            }, citiesJSON);

            // устанавливает событие клика на доступные города
            const setEvent = function () {
              cities_list.childNodes.forEach(function (e) {
                e.addEventListener("click", function (inx) {
                  city_input.value = e.innerText;
                  cities_list.innerHTML = "";
                  city_btn.click();
                });
              });
            };
          });
        };
      };
      this.pageLoad = false;
    }, 2500);
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";
#map {
  padding: 84px 0 0;
  font-family: "Inter", sans-serif;

  .title-box {
    margin-bottom: 45px;

    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
    &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      color: $primary-color;

      @media (max-width: 575px) {
        font-size: 24px;
        line-height: 29px;
        text-align: left;
      }
    }

    &__subtitle {
      margin-top: 5px;
      font-weight: 400;
      font-size: 24px;
      line-height: 1.6;
      color: $text-black-gray;

      @media (max-width: 575px) {
        margin-top: 10px;
        font-weight: 400;
        font-size: 20px;
        line-height: 1.6;
        text-align: left;
      }
    }
  }

  .list-box {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    max-width: 975px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 767px) {
      flex-direction: column;
      row-gap: 20px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 9px;
      width: 100%;

      @media (max-width: 767px) {
        row-gap: 20px;
      }

      li {
        position: relative;
        padding-left: 22px;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        color: $text-black-gray;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 7px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $primary-color;
        }
      }

      &_1 {
        max-width: 436px;

        @media (max-width: 767px) {
          max-width: 100%;
        }
      }

      &_2 {
        max-width: 392px;

        @media (max-width: 767px) {
          max-width: 100%;
        }
      }
    }
  }

  .content-container {
    &_map {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0;
      margin-top: 77px;
      height: 745px;
      max-height: 70vh;
      overflow: hidden;

      @media (max-width: 767px) {
        margin-top: 25px;
      }

      .map-item {
        height: 745px;
        max-height: 70vh;
      }

      .ymaps-2-1-79-ground-pane {
        filter: grayscale(100%);
      }
    }
  }

  .page-loader-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $section-gray-bg;
    transform: scale(1.5);
    opacity: 0.8;
    z-index: 10000;

    .lds-spinner {
      color: official;
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
    }
    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: #1871dd;
    }
    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    .lds-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    .lds-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    .lds-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
