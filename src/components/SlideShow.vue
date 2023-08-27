<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { reactive, ref, nextTick  } from 'vue'
import 'swiper/css';

import 'swiper/css/pagination';
import "swiper/css/free-mode"
import 'swiper/css/effect-fade';
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { Pagination, FreeMode, Navigation, Thumbs, EffectCards, EffectFade  } from 'swiper/modules';

const modules = [Pagination, EffectCards, Navigation, EffectFade]
let thumbsSwiper = ref(null);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className}"></span>`;
  },
}
const setThumbsSwiper = (swiper) => {
  console.log(swiper)
  thumbsSwiper = swiper;
}
const data = reactive([
  {
    id:111,
    title: '疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？',
    tags: ['不分癌','常見醫療問題'],
    img: 'https://picsum.photos/id/870/768/432',
    category: '影音'
  },
  {
    id:222,
    title: '喝大量蔬果汁有助排毒抗癌？怎麼把配方營養品變好喝？營養補充7QA全解析？',
    tags: ['不分癌','常見醫療問題','醫生內心話'],
    img: 'https://picsum.photos/id/50/768/432',
    category: ''
  },
  {
    id:333,
    title: '疤痕凝膠、雷射美容　乳癌手術疤痕美化、變淡7方法一次看',
    tags: ['最近趨勢','常見醫療問題'],
    img: 'https://picsum.photos/id/180/768/432',
    category: '影音'
  },
  {
    id:444,
    title: '具「以假亂真」獨特殺癌特性！化療藥Gemcitabine，非小細胞肺癌與癌王也投降非小細胞肺癌與癌王也投降非小細胞肺癌與癌王也投降',
    tags: ['不分癌','常見醫療問題','常見問題','飲食營養'],
    img: 'https://picsum.photos/id/555/768/432',
    category: ''
  },
  {
    id:555,
    title: '喝大量蔬果汁有助排毒抗癌？怎麼把配方營養品變好喝？營養補充7QA全解析？',
    tags: ['不分癌','常見醫療問題','醫生內心話'],
    img: 'https://picsum.photos/id/50/768/432',
    category: ''
  },
])

const imgSwiper = ref()

const currentSwiperIndex = ref(0)

</script>
<template>
  <section class="bg-[#F9F8F7] ">
    <div class="container flex flex-col lg:flex-row items-center py-[32px] md:py-[64px]">
      <div class="w-[90%] lg:w-4/12 order-last lg:order-first lg:mt-0 mt-[16px]">
        <div
          class="contentSwiper"
        >
          <div v-for="(content,index) in data" :key="content.id" v-show="index === currentSwiperIndex">
            <div class="flex flex-wrap">
              <div v-if="content.category" class="bg-[#22222299] text-white px-[12px] py-[2px] rounded-[12px] text-[14px] mr-2 mb-2 shrink-0">
                <img src="@/assets/video.svg" alt="" class="inline mr-2 w-[10px]">{{ content.category }}
              </div>
              <span v-for="(tag, index) in content.tags" :key="index" class="text-tertiary mr-[12px] mb-2 self-center">
                # {{ tag }}
              </span>
            </div>
            <div>
              <h3 class="text-[28px] md:text-[32px] font-bold ellipsis"> {{ content.title }}</h3>
            </div>
            <div class="text-center mt-[48px] md:mt-[96px]">
              <a href="#" class="w-[171px] h-[51px] inline-block  mx-auto border border-solid border-secondary rounded-[46px] py-[12px] px-[16px] text-secondary hover:bg-secondary hover:text-white">
                立即閱讀
              </a>
            </div>

          </div>
        </div>

      </div>
      <div class="w-full lg:w-8/12 lg:ml-[25px]">
        <div class="swiperContainer">
          <swiper
            ref="imgSwiper" 
            :modules="modules" 
            :thumbs="{ swiper: thumbsSwiper }" 
            :navigation="true"
            :pagination="pagination"
            :effect="'cards'"
            loop
            :grabCursor="true"
            @slideChangeTransitionEnd="(event) => {
              currentSwiperIndex = event.realIndex
            }"
            class="imgSwiper"
          >
            <swiper-slide v-for="(item) in data" :key="item.id" :style="{backgroundImage:`url(${item.img})` }">
              <!-- <img :src="item.imgags" alt=""> -->
            </swiper-slide>
          </swiper>

        </div>
      </div>
        <!-- Main Swiper -> pass thumbs swiper instance -->
      
    </div>
      <!-- It is also required to set watchSlidesProgress prop -->
  </section>
</template>



<style>
.imgSwiper {
  padding-left: 60px;
  padding-right: 60px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
.imgSwiper .swiper-slide {
  border-radius: 24px;
  font-size: 22px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 432px;
  @media screen and (max-width: 768px){
    height: auto;
    padding-top: 66%;
  }
}
.imgSwiper .swiper-pagination-bullet {
  width: 32px;
  height: 8px;
  border-radius: 4px;
  margin: 0 6px !important;
  @media screen and (max-width: 768px) {
    width: 8px;
    border-radius: 50%;
  }
}
.imgSwiper .swiper-slide-shadow {
  border-radius: 24px;
}
.imgSwiper .swiper-pagination-bullet-active {
  background: #fff; 
}
.imgSwiper .swiper-button-prev {
  left: 80px;
  @media screen and (max-width: 991px) {
    left: 40px;
  }
  @media screen and (max-width: 768px) {
    left: 30px;
  }
}
.imgSwiper .swiper-button-prev:after {
  content: url('data:image/svg+xml; utf8, <svg  viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.656 13H30C31.1046 13 32 13.8954 32 15C32 16.1045 31.1046 17 30 17H7.656L16.97 26.314C17.7509 27.0949 17.7509 28.361 16.97 29.142C16.1891 29.9229 14.9229 29.9229 14.142 29.142L1.41421 16.4142C0.633164 15.6331 0.633165 14.3668 1.41421 13.5858L14.142 0.857969C14.9229 0.0770386 16.1891 0.0770389 16.97 0.85797C17.7509 1.6389 17.7509 2.90504 16.97 3.68597L7.656 13Z" fill="white"/></svg>');
  font-family: unset;
  width: 32px;
  height: 31px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 23px;
  }
}

.imgSwiper .swiper-button-next {
  right: 80px;
  @media screen and (max-width: 991px) {
    right: 40px;
  }
  @media screen and (max-width: 768px) {
    right: 30px;
  }
}
.imgSwiper .swiper-button-next:after {
  content: url('data:image/svg+xml; utf8, <svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.344 13.556L15.03 4.242C14.2491 3.46107 14.2491 2.19493 15.03 1.414C15.8109 0.633069 17.0771 0.633069 17.858 1.414L30.5858 14.1418C31.3668 14.9228 31.3668 16.1892 30.5858 16.9702L17.858 29.698C17.0771 30.4789 15.8109 30.4789 15.03 29.698C14.2491 28.9171 14.2491 27.6509 15.03 26.87L24.344 17.556H2C0.895431 17.556 0 16.6606 0 15.556C0 14.4514 0.895431 13.556 2 13.556H24.344Z" fill="white"/></svg>');
  font-family: unset;
  width: 32px;
  height: 31px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 23px;
  }
}
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
}
</style>