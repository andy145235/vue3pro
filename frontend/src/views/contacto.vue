<template>

  <body>
    <div class="background-image">
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
   
    
    <div class="contact-form">
      <div class="form-section">
        <h2 class="form-heading">Envíanos un mensaje</h2>
        <form @submit.prevent="submitForm" class="form-container">
          <div class="form-group">
            <label for="name" class="form-label">Nombre:</label>
            <input type="text" id="name" v-model="form.name" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Correo electrónico:</label>
            <input type="email" id="email" v-model="form.email" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Mensaje:</label>
            <textarea id="message" v-model="form.message" class="form-textarea" required></textarea>
          </div>
          <button type="submit" class="form-button">Enviar</button>
        </form>
      </div>
    </div>

    <div class="contact-section contact-map">
      <div class="map">
        <a href="https://goo.gl/maps/6LnQUjg9x8PomnC28" target="_blank">
          <img src="@/assets/mapa.jpeg" alt="Mapa">
        </a>
      </div>
    </div>
    </div>

  </body>
   <div class="background-image">
   <footer class="contact-section contact-info">
   
      <div class="footer-content">
        <h1>Contacto</h1>
        <p>¡Nos encantaría saber de ti! Contáctanos mediante el formulario o visítanos en nuestra ubicación.</p>
        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <p>Teléfono: +1 123 456 789</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p>Email: info@example.com</p>
          </div>
        </div>

      </div>
     
    </footer>
  </div>

</template>

<script>
export default {
  // ...
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  // ...
};

</script>

<style>
/* Estilos generales */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI',
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;


}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
}

::selection {
  color: #000;
  background: #fff;
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
  background-image: url('@/assets/elegante.avif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5px 5px;
}

.contact-section {
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.contact-form,
.contact-map,
.contact-info {

  background-color: rgba(0, 0, 30, 0.7);
  padding: 90px;
  border-radius: 9px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.contact-form,
.contact-map {
  height: 10;
  width: 100;
  display: inline-block;
  width: calc(50% - 50px);
  vertical-align:-webkit-baseline-middle;
}

.contact-info {
  width:
100%;
}

.form-heading {
text-align: center;
margin-bottom: 20px;
font-size: 24px;
font-weight: bold;
color: #ffffff;
}

.form-container {
display: grid;
grid-gap: 20px;
}

.form-group {
display: grid;
grid-template-columns: 1fr;
}

.form-label {
color: #ffffff;
}

.form-input {
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
}

.form-button {
background-color: #ffffff;
color: #00001a;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.form-button:hover {
background-color: #e6e6e6;
}

.contact-map {
text-align: center;
}

.map img {
max-width: 100%;
}

.contact-info {
text-align: center;
color: #ffffff;
background-color: rgba(0, 0, 30, 0.7);
padding: 60px;
border-radius: 0px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.footer-content {
max-width: 100%;
margin: 0 auto;
}

.contact-section.contact-info::before {
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 30, 0.7));
z-index: -1;
}

.footer-content {
max-width: 800px;
margin: 0 auto;
}

</style>