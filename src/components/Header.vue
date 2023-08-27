<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
const linkList = reactive([
  {
    link: 'https://www.commonhealth.com.tw',
    title: '康健',
  },
  {
    link: '/https://club.commonhealth.com.tw',
    title: '大人社團',
  },
  {
    path: 'https://kb.commonhealth.com.tw/',
    title: '康健知識庫',
  },
  {
    path: 'https://www.commonhealth.com.tw/shop',
    title: '康健線上學習',
  },
  {
    path: 'https://www.commonhealth.com.tw/shop',
    title: '康健嚴選',
  },
  {
    path: 'https://www.commonhealth.com.tw/shop',
    title: '康健出版',
  },
  {
    path: 'https://www.commonhealth.com.tw/channel',
    title: '康健影音',
  },
  {
    path: 'https://garden.cw.com.tw/index.html',
    title: '書香花園',
  },
])
const isOpenMenu = ref(false)
let windowWidth = ref(window.innerWidth);
let prevScrollY = ref(0);
let isScrolling = false;
let currentScroll = ref('up');
let isExpandSearchBar = ref(false)
const openMenu = () => {
  isOpenMenu.value= !isOpenMenu.value 
  const main = document.querySelector('.main');
  main.classList.toggle('overflow-hidden');
  main.classList.toggle('h-screen');
  currentScroll.value = 'up'
}
const resizeWindow = () =>{
  windowWidth.value = window.innerWidth;
}
const doScroll = (event) => {
  if (isScrolling) return; 

  let scrollTop = 0;

  if (typeof window.pageYOffset !== 'undefined') {
    scrollTop = window.pageYOffset;
  } else if (typeof document.compatMode !== 'undefined' && document.compatMode !== 'BackCompat') {
    scrollTop = document.documentElement.scrollTop;
  } else if (typeof document.body !== 'undefined') {
    scrollTop = document.body.scrollTop;
  }
  
  if (scrollTop > prevScrollY.value) {
    currentScroll.value = 'down'
  } else if (scrollTop < prevScrollY.value) {
    currentScroll.value = 'up'
  }

  prevScrollY.value = scrollTop;
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 200);
};


const expandSearchBar = () => {
  isExpandSearchBar.value = true
}
const unExpandSearchBar = () => {
  isExpandSearchBar.value = false
}

onMounted(() => {
  window.addEventListener('resize', resizeWindow);
  window.addEventListener('scroll', doScroll)
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeWindow);
  window.removeEventListener('scroll', doScroll)
}); 

</script>

<template>
  <div class="header__list bg-tertiary text-white md:block hidden">
    <div class="text-right container py-[4px]">
      <a 
        v-for="(item, index) in linkList" 
        :key="index" 
        :href="item.link"
        target="_blank"
        class="py-[4px] px-[8px] text-[14px] inline-block mr-2.5 last:mr-0"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
  <header ref="prevScrollY" class="sticky top-[-1px] left-0 h-[60px] md:h-[92px] z-[15] bg-white shadow-[0_1px_1px_#ddd]" :class="(windowWidth <=786 && currentScroll === 'down' && !isOpenMenu) ? 'py-[8px]' : 'py-[16px] md:py-[22px]' ">
    <div class="header__main">
      <div class="container flex items-center justify-between">
        <div v-show="windowWidth > 768 || currentScroll === 'up' || isOpenMenu"  class="flex items-center shrink-0">
          <div :class="isOpenMenu ? 'h-[24px] w-[24px] md:w-[36px]': 'h-[24px] md:h-[36px] w-[24px] md:w-[36px]'">
            <button @click="openMenu">
              <img v-if="!isOpenMenu" src="@/assets/menu.svg" alt="">
              <img v-else src="@/assets/vector.svg" alt="">
            </button>
          </div>
          <h1 class="ml-[15px] md:ml-[24px] bg-[#1E1E1E]  w-[136px] md:w-[200px] h-[29px] md:h-[48px] text-white flex justify-center items-center">
            logo
          </h1>
          <div class="ml-[24px] xl:block hidden">
            <img src="https://fakeimg.pl/192x48/eeeeee/" alt="" class="rounded-[12px]">
          </div>
        </div>
        <div 
          v-show="(windowWidth > 768 || currentScroll === 'down') && !isOpenMenu" 
          class="center md:ml-[64px] md:max-w-[400px] w-full">
          <form action="" class="inline-flex border border-solid rounded-[20px] border-[#DDDDDD] overflow-hidden p-2 w-full">
            <select name="searchSelect" id="searchSelect" class="focus:outline-0 w-[50%] md:w-[30%]" @focus="expandSearchBar" @blur="unExpandSearchBar">
              <option value="全部">全部</option>
              <option value="治療團隊">治療團隊</option>
              <option value="影音">影音</option>
            </select>
            <div class="w-full inline-flex relative ml-[12px] before:content-[''] before:h-full before:w-[1px] before:bg-[#DDDDDD] before:top-0 before:left-0 before:absolute">
              <input type="text" placeholder="請輸入關鍵字" class="focus:outline-0  pl-4 pr-9 w-full md:placeholder:visible placeholder:invisible" @focus="expandSearchBar" @blur="unExpandSearchBar">
              <div class="absoulte absolute top-0 right-1 text-purple-lighter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.964 16.8648C21.7555 12.8593 21.3648 7.30911 17.7917 3.73608C13.78 -0.275666 7.27566 -0.275665 3.26392 3.73608C-0.747835 7.74783 -0.747835 14.2522 3.26392 18.2639C7.05905 22.0591 13.0849 22.264 17.1209 18.8787L21.1344 22.8922C21.667 23.4248 22.5304 23.4248 23.0629 22.8922C23.5955 22.3597 23.5955 21.4963 23.0629 20.9638L18.964 16.8648ZM15.6704 5.8574C18.5106 8.69758 18.5106 13.3024 15.6704 16.1426C12.8302 18.9828 8.22541 18.9828 5.38524 16.1426C2.54506 13.3024 2.54506 8.69758 5.38524 5.8574C8.22541 3.01723 12.8302 3.01723 15.6704 5.8574Z" fill="#DDDDDD"/>
</svg>

              </div>
            </div>
            
          </form>
        </div>
        <div class="right flex shrink-0 md:ml-[55px]" :class="windowWidth <= 768 && currentScroll === 'down' && isExpandSearchBar ? '' : 'ml-[22px]'">
          <button class="lg:block hidden">會員限定</button>
          <button 
            v-show="windowWidth > 768 || currentScroll === 'up' || isOpenMenu" 
            class="md:ml-[16px] border border-solid border-secondary rounded-[46px] py-[3px] md:py-[9px] px-[16px] text-secondary hover:bg-secondary hover:text-white">登入</button>
          <button class="ml-[8px] bg-secondary text-white rounded-[46px] py-[9px] px-[16px] border border-[#secondary] over:bg-secondary lg:block hidden">加入會員</button>
          <button v-show="currentScroll === 'down' && !isExpandSearchBar && !isOpenMenu" class="md:hidden rounded-[46px] py-[3px] px-[9px] bg-[#07B53B] text-white border border-[#07B53B]">加入 LINE</button>
        </div>
      </div>
    </div>
  </header>
  <div v-show="isOpenMenu" class="overflow-y-auto bg-pink-200 h-[calc(100vh-60px)] md:h-[calc(100vh-92px)] w-full text-2xl sticky  top-[60px] md:top-[92px] left-0 z-[13]">
    <div class="h-full text-3xl ">
      <div class="xl:hidden pt-[16px]">
        <img src="https://fakeimg.pl/327x82/eeeeee/" alt="" class="rounded-[12px] mx-auto">
      </div>
      <div class="flex justify-center items-center h-[1000px]">
        Menu
      </div>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>