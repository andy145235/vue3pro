<template>
  
  <header>
    <nav>
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
      </nav>
  </header>
  <body>
    <div class="content-container">
    <div class="background-image"></div>

    <div class="container">
      <div class="card-container">
        <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>



          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">CHARLA</h3>
              <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="card-price">50</div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>
      </div>
    </div>
   </div>
   
    
  </body>

  
   
</template>


<script>
export default {
  data() {
    return {
      card1Order: 1,
      card2Order: 2,
      card1Order: 3,
      card2Order: 4,
    };
  },
  // Otros métodos y propiedades del componente
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI';
}

::selection {
  color: #000;
  background: #fff;
}
.content-container {
  padding-top: 60px; /* Ajusta el valor de padding-top según la altura de tu navbar */
}

/* Estilos de los Cards */

.container {
  margin-top: 50px; /* Ajusta el valor del margen superior según tus necesidades */
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.menu .logo a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.menu ul {
  display: flex;
  list-style: none;
}

.menu ul li {
  margin-left: 20px;
}

.menu ul .nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
padding: 8px 15px;
border-radius: 5px;
transition: all 0.3s ease;
}

.menu ul .nav-link:hover {
background: #ffffffa5;
color: black;
}

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

.container {
  display: flex;
  justify-content: center;      /* Centra horizontalmente */
  align-items: center;          /* Centra verticalmente */
  height: 100vh;                /* Opcional: ajusta la altura del contenedor */
}


.card-container {
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
margin-top: 20px;
}

.card {
width: 300px;
background-color: #f2f2f2;
border-radius: 10px;
padding: 20px;
margin: 10px;
}

.card-image img {
width: 100%;
border-radius: 10px;
}

.card-title {
font-size: 20px;
font-weight: bold;
margin-top: 10px;
}

.card-description {
margin-top: 10px;
}

.card-price {
font-size: 18px;
font-weight: bold;
margin-top: 10px;
}

.card-button {
background-color: #333333;
color: white;
border: none;
border-radius: 5px;
padding: 10px 20px;
margin-top: 10px;
cursor: pointer;
}

.card-button:hover {
background-color: #555555;
}
</style>