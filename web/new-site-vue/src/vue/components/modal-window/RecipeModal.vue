<template>
  <div id="recipe-modal">
    <div class="wrapper">
      <h5 class="title" v-html="recipeModal.title"></h5>
      <p class="subtitle" v-html="recipeModal.subtitle"></p>
      <template v-if="recipeModal.listLine.length">
        <ul class="list-line">
          <li
            v-for="(li, idx) in recipeModal.listLine"
            :key="idx"
            v-html="li"
          ></li>
        </ul>
      </template>
      <template v-if="recipeModal.comment">
        <p class="comment">{{ recipeModal.comment }}</p>
      </template>
      <template v-if="recipeModal.listStepModal.length">
        <ul class="list-step">
          <li
            v-for="(step, idx) in recipeModal.listStepModal"
            :key="idx"
            v-html="step"
          ></li>
        </ul>
      </template>
      <template v-if="recipeModal.listNumberModal.length">
        <ul class="list-number">
          <li v-for="(number, idx) in recipeModal.listNumberModal" :key="idx">
            <p>{{ idx + 1 }}.</p>
            <p>{{ number }}</p>
          </li>
        </ul>
      </template>
      <template v-if="recipeModal.recommendation">
        <p class="recommendation" v-html="recipeModal.recommendation"></p>
      </template>
      <template v-if="recipeModal.price">
        <p class="price">{{ recipeModal.price }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RecipeModal",
  computed: mapGetters(["recipeModal"]),
};
</script>

<style lang="scss">
@import "../../../scss/variables";
#recipe-modal {
  display: none;
  max-width: 1050px;
  width: 100%;
  padding: 0;
  border-radius: 10px;
  font-family: "Inter", sans-serif;

  .wrapper {
    padding: 32px 38px;

    @media (max-width: 575px) {
      padding: 20px 20px 24px;
    }
  }

  .title {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: $text-black-gray;

    @media (max-width: 575px) {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
    }

    br {
      display: none;
    }
  }

  .subtitle {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #828282;
  }

  .list-line {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    margin-bottom: 24px;

    li {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .comment {
    padding-top: 8px;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: $text-black-gray;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  .list-step {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding-top: 8px;

    li {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
      span {
        font-weight: 700;
        color: $primary-color;

        @media (max-width: 575px) {
          font-weight: 400;
        }
      }
    }
  }

  .list-number {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding-top: 8px;

    li {
      display: flex;
      align-items: flex-start;
      column-gap: 7px;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: $text-black-gray;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .recommendation {
    margin-top: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: $text-black-gray;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 22px;
    }

    span {
      font-weight: 700;
    }
  }

  .price {
    margin-top: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: $btnred;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
