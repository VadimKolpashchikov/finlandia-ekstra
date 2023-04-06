import { createStore } from "vuex";

export default createStore({
  actions: {},
  mutations: {
    openPresentModal(state, content) {
      state.presentModal.title = content.title;
      state.presentModal.text = content.text;
    },
    openRecipeModal(state, content) {
      state.recipeModal.title = content.title || "";
      state.recipeModal.subtitle = content.subtitle || "";
      state.recipeModal.listLine = content.listLine || [];
      state.recipeModal.comment = content.comment || "";
      state.recipeModal.listStepModal = content.listStepModal || [];
      state.recipeModal.listNumberModal = content.listNumberModal || [];
      state.recipeModal.recommendation = content.recommendation || "";
      state.recipeModal.price = content.price || "";
    },
    selectMain(state, product) {
      state.order.id = product.id;
      state.order.value = product.value;
      state.order.price = product.price;
      state.order.discont = product.discont;
    },
    rassrochkaOn(state) {
      state.order.rassrochka = true;
    },
    addDop(state, dop) {
      state.addedDop[dop] = true;
    },
    togglDop(state, dop) {
      state.addedDop[dop] = !state.addedDop[dop];
    },
  },
  state: {
    formNeedInputs: '',
    goods: products,
    ids: ids,
    rusData: rusData,
    cur: cur,
    blogger: blogger,
    bloggerInputs:
      '<input type="hidden" name="quantity[482142]" value="1" /><input type="hidden" name="id[]" value="482142" />',
    presents: [
      {
        title: "Медная РПН",
        description:
          "<p>Очищает самогон, связывает ядовитые примеси и нейтрализует неприятный запах.</p>",
        price: 490,
        img: "med-rpn",
      },
      {
        title: "Гидрозатвор",
        description:
          "<p>Устанавливается в крышку перегонного куба и создаёт надёжный обратный клапан, который не пропускает кислород в ёмкость, но не мешает углекислому газу свободно выходить наружу.</p>",
        price: 250,
        img: "gidrozatvor",
      },
      {
        title: "Дивертор",
        description:
          "<p>Переходник на кран, который подходит к любому стандартному смесителю.</p>",
        price: 200,
        img: "divertor",
      },
      {
        title: "Спиртометр",
        description:
          "<p>Используется для того, чтобы быстро определить процент содержания спирта в водном растворе.</p>",
        price: 200,
        img: "spirometr",
      },
      {
        title: "Попугай",
        description:
          "<p>Мы упростили «попугай»: теперь он компактный и легко закрепляется на колонне любого типа. Сохраняется высокая производительность устройства.</p>",
        price: 1500,
        img: "popugay",
      },
      {
        title: "Утеплитель для царги",
        description:
          "<p>Предназначен для дополнительной защиты царги от теплопотерь.</p>",
        price: 1600,
        img: "uteplitel",
      },
      {
        title: "Купон на 1000 рублей",
        description: "<p>Купон на 1000 рублей на следующие покупки.</p>",
        price: 1000,
        img: "kupon1000",
      },
    ],
    presentModal: {
      title: "title",
      text: "text",
    },
    recipeModal: {
      title: "",
      subtitle: "",
      listLine: [],
      comment: "",
      listStepModal: [],
      listNumberModal: [],
      recommendation: "",
      price: "",
    },
    mainProducts: [
      {
        id: ids.f15,
        name: "Финляндия Экстра 15Л",
        value: 15,
        price: products[ids.f15].priceF,
        oldPrice: products[ids.f15].oldPriceF,
        discont: 20,
      },
      {
        id: ids.f22,
        name: "Финляндия Экстра 22Л",
        value: 22,
        price: products[ids.f22].priceF,
        oldPrice: products[ids.f22].oldPriceF,
        discont: 25,
      },
      {
        id: ids.f26,
        name: "Финляндия Экстра 26Л",
        value: 26,
        price: products[ids.f26].priceF,
        oldPrice: products[ids.f26].oldPriceF,
        discont: 27,
      },
      {
        id: ids.f30,
        name: "Финляндия Экстра 30Л",
        value: 30,
        price: products[ids.f30].priceF,
        oldPrice: products[ids.f30].oldPriceF,
        discont: 30,
      },
    ],
    order: {
      id: ids.f15,
      value: 15,
      price: products[ids.f15].priceF,
      discont: 20,
      rassrochka: false,
    },
    addedDop: {
      arom: false,
    },
  },
  getters: {
    formNeedInputs(state) {
      return state.formNeedInputs;
    },
    ifBlogger(state) {
      return state.blogger;
    },
    bloggerInputs(state) {
      return state.bloggerInputs;
    },
    allIds(state) {
      return state.ids;
    },
    allPresents(state) {
      return state.presents;
    },
    allMainProducts(state) {
      return state.mainProducts;
    },
    orderState(state) {
      return state.order;
    },
    addedDops(state) {
      return state.addedDop;
    },
    oneId:
      (state) =>
        (id = "f15") => {
          return state.ids[id];
        },
    oneProduct:
      (state) =>
        (id = "f15") => {
          return state.goods[state.ids[id]];
        },
    tomorrow(state) {
      return state.rusData;
    },
    presentModal(state) {
      return state.presentModal;
    },
    recipeModal(state) {
      return state.recipeModal;
    },
  },
  modules: {},
});