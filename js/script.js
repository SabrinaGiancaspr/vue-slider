const app = Vue.createApp;

app({
  data() {
    return {
      currentImg: 0,
      images: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  methods: {
    nextButton() {
      this.currentImg++;
      if (this.currentImg > this.images.length - 1) {
        this.currentImg = 0;
      }
    },
    prevButton() {
      this.currentImg--;
      if (this.currentImg < 0) {
        this.currentImg = this.images.length - 1;
      }
    },
    changeImg(thumbIndex) {
      this.currentImg = thumbIndex;
    },
  },

  mounted: function () {
    let time = this;
    setInterval(function () {
      time.nextButton();
    }, 3000);
  },
}).mount('#app');
