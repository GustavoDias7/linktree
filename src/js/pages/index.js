// import * as vue from "vue/dist/vue.esm-bundler.js";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import { mainMixin } from "../utils/mixins";
// const { createApp } = vue;

// const app = createApp({
//   mixins: [mainMixin],
//   delimiters: ["[[", "]]"],
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       modules: [EffectCoverflow, Pagination],
//     };
//   },
//   data() {
//     return {
//       accordion: {
//         state: false,
//         index: null,
//       },
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: false,
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: "auto",
//           spaceBetween: 0,
//         },
//         480: {
//           slidesPerView: 2,
//           spaceBetween: 16,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 16,
//         },
//       },
//     };
//   },
//   methods: {
//     handleAccordion(index) {
//       if (this.accordion.state == false) {
//         this.accordion.state = true;
//         this.accordion.index = index;
//       } else if (
//         this.accordion.state == true &&
//         this.accordion.index == index
//       ) {
//         this.accordion.state = false;
//         this.accordion.index = null;
//       } else if (
//         this.accordion.state == true &&
//         this.accordion.index != index
//       ) {
//         this.accordion.index = index;
//       }
//     },
//   },
// });

// app.mount("#app");
