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
  <body>
    <div class="content-container">
    <div class="background-image"></div>

    <div class="container">
      <div class="card-container">
        <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/mer1.1.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">MSC</h3>
              <p class="card-description">MERCANTIL SANTA CRUZ</p>
              <div class="card-price"></div>
              <button class="card-button">
                <router-link class="nav-link" to="/BNB">BNB</router-link>
              </button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/b1.png" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button" >
                <router-link class="nav-link" to="/BNB">BNB</router-link>
             
              </button>

            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/sol1.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BANCO SOL</h3>
              <p class="card-description">JUNTOS CRECEMOS</p>
              <div class="card-price"></div>
              <button class="card-button">
                 <router-link class="nav-link" to="/BNB">BNB</router-link>

              </button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">
                <router-link class="nav-link" to="/BNB">BNB</router-link>

              </button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">
                 <router-link class="nav-link" to="/BNB">BNB</router-link>
                </button>
            </div>
          </div>



          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">BNB</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">
                <router-link class="nav-link" to="/BNB">BNB</router-link>
              </button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">INGRESAR</button>
            </div>
          </div>

          <div class="card" :style="{ order: card1Order }">
            <div class="card-image">
              <img src="@/assets/logos.jpg" alt="Wireless headphones">
            </div>
            <div class="card-content">
              <h3 class="card-title">BNB</h3>
              <p class="card-description">BANCO NACIONAL DE BOLIVIA</p>
              <div class="card-price"></div>
              <button class="card-button">
                <router-link class="nav-link" to="/BNB">BNB</router-link>
              </button>
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
  }

  // Otros métodos y propiedades del componente
 };
</script>

<style scoped lang="scss">

::selection {
  color: #000;
  background: #fff;
}
.content-container {
  padding-top: 60px; /* Ajusta el valor de padding-top según la altura de tu navbar */
}

/* Estilos de los Cards */

.container {
  margin-top: 200px; /* Ajusta el valor del margen superior según tus necesidades */
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
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
width: 305px;
background-color: #bac2bc;
border-radius: 10px;
padding: 20px;
margin: 10px;
}

.card-image img {
width: 100%;
height: 30vh; 
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


/* Footer */
.footer {
      background-color: #f5f5f5;
      padding: 30px 0;
    }
    
    .footer-section {
      margin-bottom: 30px;
    }
    
    .footer-heading {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }
    
    .social-icons {
      margin-bottom: 20px;
    }
    
    .social-icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-color: #333;
      color: #fff;
      border-radius: 50%;
      margin-right: 10px;
      text-align: center;
      line-height: 30px;
      transition: background-color 0.3s;
    }
    
    .social-icon:hover {
      background-color: #555;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: 10px;
    }
    
    .footer-links a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-links a:hover {
      color: #555;
    }
    
    .footer-info {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-info li {
      margin-bottom: 5px;
      color: #555;
    }
    
    .text-muted {
      color: #777;
    }
</style>
