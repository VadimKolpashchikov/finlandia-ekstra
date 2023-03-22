<template>
  <div>
    <header>
      <HeaderTop />
      <HeaderNew />
      <HeaderFeatures />
    </header>
    <main>
      <WorkingMode />
      <Presents />
      <Zmeevik />
      <Steps />
      <Instant />
      <Mechanics />
      <Features />
      <Models />
      <Delivery />
      <Creation />
      <Experiment />
      <Braga />
      <Kit />
      <Comparison />
      <Feedback />
      <Rassrochka />
      <Guarantee />
      <Consultation />
      <Gallery />
      <Map />
    </main>
    <FooterNew />
    <ButtonUp />

    <!-- Модальные окна -->
    <OrderModal />
    <ConstructorModal />
    <PresentModal />
    <RecipeModal />
    <CallMe />
    <OrderSuccess />
    <ThankSuccess />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import HeaderNew from "./components/HeaderNew.vue";
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
import Comparison from "./components/Comparison.vue";
import Rassrochka from "./components/Rassrochka.vue";
import Guarantee from "./components/Guarantee.vue";
import Consultation from "./components/Consultation.vue";
import Gallery from "./components/Gallery.vue";
import Map from "./components/Map.vue";
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
    HeaderNew,
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
    Rassrochka,
    Guarantee,
    Consultation,
    Gallery,
    Map,
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
        var lazyLoadInstance = new LazyLoad({
          use_native: true,
        });
      })();
    }, 10);
  },
};
</script>
