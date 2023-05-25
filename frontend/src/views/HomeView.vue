<template>
  <header>
    <div class="menu">
          <div class="logo">
            <a href="#">KL</a>
          </div>
          <ul>
            <router-link class="nav-link" to="/">INICIO</router-link>
            <router-link class="nav-link" to="/instituciones">INSTITUCIONES</router-link>
            <router-link class="nav-link" to="/charlas">CHARLAS</router-link>
            <router-link class="nav-link" to="/calendario">CALENDARIO</router-link>
            <router-link class="nav-link" to="/contacto">CONTACTO</router-link>
            <router-link class="nav-link" to="/inicion_secion">LOGIN</router-link>
            
          </ul>
        </div>
  </header>
  <div class="image-container">
           <img src="@/assets/logo_ucb.png" alt="Right Image">
        </div>

  <div class="background-image">




    <div class="center">
      <div class="title">BIENVENIDOS A LA FERIA 2023</div>
      <div class="sub_title">UNIVERSIDAD CATOLICA "LA PAZ"</div>
      <div class="btns">
        <button>INFORMACION</button>
        <button>CONTACTO</button>

      

      </div>
        
    </div>
  </div>


</template>



<script>

import { ref } from 'vue';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'vue3-icons';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = {
  props: ['title', 'content'],
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  `,
};

const Carousel = {
  props: ['cards'],
  setup(props) {
    const active = ref(2);
    const count = ref(props.cards.length);

    const setActive = (index) => {
      active.value = index;
    };

    const getCardStyles = (index) => {
      const offset = (active.value - index) / 3;
      const direction = Math.sign(active.value - index);
      const absOffset = Math.abs(active.value - index) / 3;

      return {
        '--active': index === active.value ? 1 : 0,
        '--offset': offset,
        '--direction': direction,
        '--abs-offset': absOffset,
        'pointer-events': active.value === index ? 'auto' : 'none',
        opacity: Math.abs(active.value - index) >= MAX_VISIBILITY ? '0' : '1',
        display: Math.abs(active.value - index) > MAX_VISIBILITY ? 'none' : 'block',
      };
    };

    return {
      active,
      count,
      setActive,
      getCardStyles,
    };
  },
  template: `
    <div class="carousel">
      <button v-if="active > 0" class="nav left" @click="setActive(active - 1)"><TiChevronLeftOutline/></button>
      <template v-for="(card, index) in cards" :key="index">
        <div class="card-container" :style="getCardStyles(index)">
          <slot :title="card.title" :content="card.content"></slot>
        </div>
      </template>
      <button v-if="active < count - 1" class="nav right" @click="setActive(active + 1)"><TiChevronRightOutline/></button>
    </div>
  `,
};

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Card,
    TiChevronLeftOutline,
    TiChevronRightOutline,
  },
  data() {
    return {
      cards: Array.from({ length: CARDS }, (_, i) => ({
        title: 'Card ' + (i + 1),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      })),
    };
  },
};
</script>



<style scoped lang="scss">
/* para la imagen en la derecha*/
.container {
  display: flex;
}

.content {
  flex-grow: 1;
}

.image-container {
  position:relative;
  display: flex;
  flex-direction: row-reverse; /* Invierte el orden de los elementos en la fila */
  align-items: center; /* Centra verticalmente los elementos en la fila */
}

.image-container img {
  width: auto; /* Ajusta el tamaño de la imagen según sea necesario */
  height: auto;
  margin-left: 10px; /* Añade un margen izquierdo para separar la imagen de los otros elementos */
}


.center {
  position: absolute;
  top: 50%;
  left: 20px; /* Ajusta el valor del margen izquierdo según tus necesidades */
  transform: translateY(-50%);
  width: 75%; /* Ajusta el ancho según tus necesidades */
  max-width: 800px; /* Establece el máximo ancho del contenedor */
  padding: 0 20px;
  text-align: left; /* Alinea el texto a la izquierda */
}

.center .title {
  color: #0d0707;
  font-size: 4vw; /* Ajusta el tamaño de la fuente utilizando unidades relativas */
  font-weight: 600;
}

.center .sub_title {
  color: #120e0e;
  font-size: 2vw; /* Ajusta el tamaño de la fuente utilizando unidades relativas */
  font-weight: 500;
}
.center .btns {
  margin-top: 20px;
}

.center .btns button {
  height: 55px;
  width: 170px;
  border-radius: 5px;
  border: none;
  margin: 0 10px;
  border: 2px solid white;
  font-size: 20px;
  font-weight: 500;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.center .btns button:first-child {
  color: #fff;
  background: none;
}

.btns button:first-child:hover {
  background: white;
  color: black;
}

.center .btns button:last-child {
  background: white;
  color: rgb(22, 22, 22);
}

// para la imagen

.background-image {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-image: url('@/assets/elegante.avif');
background-size: cover;
background-position: center;
z-index: -1;
}


/* Estilos del carrusel */
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, #8b5cf6, #ec4899);
  font-family: "Montserrat", sans-serif;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.carousel {
  position: relative;
  width: 23rem;
  height: 23rem;
  perspective: 500px;
  transform-style: preserve-3d;
}

.card-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
}

.card {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;
}

.card h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 0.7em;
  color: #1f2937;
}

.card p,
.card h2 {
  transition: all 0.3s ease-out;
  opacity: var(--active);
}

.nav {
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
}

.nav.left {
  transform: translateX(-100%) translateY(-50%);
}

.nav.right {
  right: 0;
  transform: translateX(100%) translateY(-50%);
}
</style>

  