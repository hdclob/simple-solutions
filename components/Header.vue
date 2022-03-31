<template>
	<div class="image-slider-container">
    <div class="dark-fade"></div>
    <transition name="slide">
      <img :src="currentImage" :key="currentImage" class="image-slider"/>
    </transition>
    <div class="container d-flex justify-content-center align-items-center position-relative h-100 text-center">
      <h1 class="header-text">Elegant Solutions<br/>to Complex Problems</h1>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          require('@/assets/images/headers/header1.jpg'),
          require('@/assets/images/headers/header2.jpg'),
          require('@/assets/images/headers/header3.jpg'),
          require('@/assets/images/headers/header4.jpg'),
          require('@/assets/images/headers/header5.jpg'),
        ],
		currentIndex: 0
      }
    },
    created() {
		this.startTimer();
    },
	methods: {
		startTimer: function() {
			setInterval(this.changeImage, 8000);
		},
		changeImage: function() {
			this.currentIndex++;
		}
	},
	computed: {
		currentImage: function() {
			return this.images[Math.abs(this.currentIndex) % this.images.length]
		}
	}
  }
</script>

<style scoped>
	.image-slider-container {
		overflow: hidden !important;
		height: 80vh;
		position: relative;
	}

	.image-slider {
		position: absolute;
		height: 100% !important;
		width: 100% !important;
		object-fit: cover !important;
	}

	.slide-leave-active, .slide-enter-active {
		transition: .5s;
		/**transition: opacity .5s; */
	}
	.slide-enter {
		transform: translate(100%, 0);
		/** opacity: 0; */
	}
	.slide-leave-to {
		transform: translate(-100%, 0);
		/** opacity: 0; */
	}

  .header-text {
    font-size: 400%;
    font-weight: bold;
    z-index: 900;
    position: relative;
    color: white;
  }

  .dark-fade {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 899;
  }

  @media(min-width: 425px) {
    .header-text {
      font-size: 500%;
    }
  }
</style>
