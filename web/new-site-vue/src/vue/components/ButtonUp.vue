<template>
  <button
    type="button"
    aria-label="Вернуться в начало страницы"
    class="button-up"
  ></button>
</template>

<script>
export default {
  name: "ButtonUp",
};
</script>

<style lang="scss">
.button-up {
  z-index: 200;
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: none;
  width: 66px;
  height: 66px;
  padding: 0;
  box-shadow: 0 0 10px rgb(0, 0, 0, 25%);
  background: url("data:image/svg+xml,%3Csvg width='38' height='53' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23a)'%3E%3Cpath d='M17.512 46.997a1.5 1.5 0 0 0 3 0h-3Zm1.5-40-8.66 15h17.32l-8.66-15Zm1.5 40v-26.5h-3v26.5h3Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='a' x='.352' y='.997' width='37.32' height='51.5' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='5'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_310_27'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_310_27' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E"),
    linear-gradient(#5a96e0, #007aeb);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 35px, 100% 100%;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 0.3s transform;

  @media (min-width: 992px) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 767px) {
    right: 7px;
    bottom: 7px;
    width: 45px;
    height: 45px;
    background-size: 25px, 100% 100%;
  }
}
</style>
