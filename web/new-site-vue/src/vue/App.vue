<template>
  <div>
    <header>
      <header-top />
      <header-new2 />
      <header-features />
    </header>
    <main>
      <working-mode />
      <presents />
      <zmeevik />
      <steps />
      <instant />
      <mechanics />
      <features />
      <models />
      <delivery />
      <creation />
      <experiment />
      <braga />
      <kit />
      <comparison />
      <feedback />
      <review-video />
      <rassrochka />
      <guarantee />
      <consultation />
      <gallery />
      <my-map />
    </main>
    <footer-new />
    <button-up />

    <!-- Модальные окна -->
    <order-modal />
    <constructor-modal />
    <present-modal />
    <recipe-modal />
    <call-me />
    <order-success />
    <thank-success />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import HeaderNew2 from "./components/HeaderNew2.vue";
import HeaderFeatures from "./components/HeaderFeatures.vue";

// Блоки Main
import WorkingMode from "./components/WorkingMode.vue";
import Presents from "./components/Presents.vue";
import Zmeevik from "./components/Zmeevik.vue";
import Steps from "./components/Steps.vue";
import Instant from "./components/Instant.vue";
import Mechanics from "./components/Mechanics.vue";
import Features from "./components/Features.vue";
import Models from "./components/Models.vue";
import Delivery from "./components/Delivery.vue";
import Creation from "./components/Creation.vue";
import Experiment from "./components/Experiment.vue";
import Braga from "./components/Braga.vue";
import Kit from "./components/Kit.vue";
import Feedback from "./components/Feedback.vue";
import ReviewVideo from "./components/ReviewVideo.vue";
import Comparison from "./components/Comparison.vue";
import Rassrochka from "./components/Rassrochka.vue";
import Guarantee from "./components/Guarantee.vue";
import Consultation from "./components/Consultation.vue";
import Gallery from "./components/Gallery.vue";
import MyMap from "./components/Map.vue";
import FooterNew from "./components/FooterNew.vue";
import ButtonUp from "./components/ButtonUp.vue";

// Модальные Окна
import OrderModal from "./components/modal-window/OrderModal.vue";
import ConstructorModal from "./components/modal-window/Constructor.vue";
import PresentModal from "./components/modal-window/PresentModal.vue";
import RecipeModal from "./components/modal-window/RecipeModal.vue";
import CallMe from "./components/modal-window/CallMe.vue";
import OrderSuccess from "./components/modal-window/OrderSuccess.vue";
import ThankSuccess from "./components/modal-window/ThankSuccess.vue";

//Ленивая загрузка
import LazyLoad from "vanilla-lazyload";
export default {
  components: {
    HeaderTop,
    HeaderNew2,
    HeaderFeatures,

    // блоки main
    WorkingMode,
    Presents,
    Zmeevik,
    Steps,
    Instant,
    Mechanics,
    Features,
    Models,
    Delivery,
    Creation,
    Experiment,
    Braga,
    Kit,
    Comparison,
    Feedback,
    ReviewVideo,
    Rassrochka,
    Guarantee,
    Consultation,
    Gallery,
    MyMap,
    FooterNew,
    ButtonUp,

    //Модальные Окна
    OrderModal,
    ConstructorModal,
    PresentModal,
    RecipeModal,
    CallMe,
    OrderSuccess,
    ThankSuccess,
  },
  mounted() {
    setTimeout(() => {
      (function () {
        var lazyLoadInstance = new LazyLoad();
      })();
    }, 100);
  },
};
</script>
