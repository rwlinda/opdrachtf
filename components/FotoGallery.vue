<template>
  <div>Foto gallery</div>
</template>

<!-- <template>
  <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper-container>
</template>

<script>
import { register } from 'swiper/element/bundle';

register();

export default function () {
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
    };

    const onSlideChange = (e) => {
      console.log('slide changed')
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  }
}


// const props = defineProps({
//   images: {
//     type: Array,
//     required: true
//   }
// })
// const allImages = props.images
// const mediaItems = [...new Set(allImages.map(item => item.MediaItems))]

// const smallImages = [...new Set(mediaItems.map(item => item[1]))]
// const mediumImages = [...new Set(mediaItems.map(item => item[2]))]
// const largeImages = [...new Set(mediaItems.map(item => item[3]))]
// // console.log("largeImages: ", largeImages)

// const filteredImages = mediaItems.filter(obj => {
//   // console.log("obj[0]: ", obj[2])
//   // console.log("obj: ", obj)
//   return obj[2]
// })
// //obj.MediaItems[3].Url
// // console.log("filteredImages: ", filteredImages)

// const currentSliderIndex = ref(0);

// const nextSlide = () => {
//     currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
// };

// const prevSlide = () => {
//     currentSliderIndex.value = (currentSliderIndex.value - 1 + images.length) % images.length;
// };

</script> -->