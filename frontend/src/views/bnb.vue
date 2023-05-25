<template>
    <div class="apple-page">
    <!-- Hero banner -->
      <section class="hero-banner">
        <!-- Barra de navegación -->
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
        <div class="container">
          <div class="row">
            <div class="col-lg-6">

            </div>
            <div class="col-lg-6">
              <h1 class="hero-title">BIENVENIDOS AL BANCO NACIONAL DE BOLIVIA</h1>
              <p class="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum sit nulla sapiente consectetur molestias, nihil laboriosam magni, dolore alias expedita quod tenetur neque temporibus aliquid, laudantium quos et fuga.</p>
              <a class="btn btn-primary btn-lg" href="https://www.bnb.com.bo/portalbnb/principal/bancapersonas" target="_blank">Inscribirse</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Benefits section -->
      <section class="benefits-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="benefits-image">
                <img src="@/assets/b1.png" alt="Solar Roof" />
              </div>
            </div>
            <div class="col-lg-6">
              <h2 class="benefits-title">BANCO NACIONAL DE BOLIVIA</h2>
              <ul class="benefits-list">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, molestias ex excepturi facere saepe temporibus, voluptates obcaecati, a facilis velit aliquam tempora repudiandae eveniet. Eum tempore consectetur blanditiis minus molestias?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere magnam maxime tenetur eaque cumque temporibus molestiae quae hic culpa officiis esse, sequi architecto repellat? Aut molestias quisquam numquam dolorem.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consectetur perferendis quis mollitia, fuga quam magnam corporis error voluptates quo, molestiae ipsam nesciunt? Optio voluptatum fuga doloremque magni facilis beatae.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Customer Testimonials -->
      <section class="testimonials-section">
        <div class="container">
          <h2 class="testimonials-title">LISTA DE CONFERENCISTA</h2>
          <div class="row">
            <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="card testimonial-card">
                <div class="card-body">
                  <h5 class="card-title">{{ testimonial.name }}</h5>
                  <p class="card-text">{{ testimonial.message }}</p>
                </div>
                <div class="card-image">
                  <img :src="testimonial.image" :alt="'Testimonial ' + (index + 1)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  

  </div>

        <!-- Footer -->
      <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="footer-section">
          <h3 class="footer-heading">Síguenos en redes sociales</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <FontAwesomeIcon icon="facebook" />
            </a>
            <a href="#" class="social-icon">
              <FontAwesomeIcon icon="twitter" />
            </a>
            <a href="#" class="social-icon">
              <FontAwesomeIcon icon="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="footer-section">
          <h3 class="footer-heading">Enlaces</h3>
          <ul class="footer-links">
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de privacidad</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="footer-section">
          <h3 class="footer-heading">Información de contacto</h3>
          <ul class="footer-info">
            <li><i class="fas fa-phone"></i> Teléfono: 123456789</li>
            <li><i class="fas fa-envelope"></i> Email: info@example.com</li>
            <li><i class="fas fa-map-marker-alt"></i> Dirección: Calle Principal, Ciudad, País</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="footer-section">
          <p class="text-muted">&copy; 2023 Universidad catolica. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
  </template>
  

  
  <script>

export default {

  data() {
    return {
      testimonials: [
        {
          name: 'John zanchez',
          message: 'informaciondel conferencista',
          image: require('@/assets/sol1.jpg'),
        },
        {
          name: 'Jane Smith',
          message: 'informacion del conferencista',
          image: require('@/assets/logo.png'),
        },
        {
          name: 'Mike perez',
          message: 'informacion del conferencista',
          image: require('@/assets/fondo_cato.png'),
        },
      ],
    };
  },
};

    </script>




  
  <style>

/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Barra de navegación */
.menu {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 60px;
  width: 100%;
  background-color: transparent;
  z-index: 100;
}

.menu .logo a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
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

/* Hero banner */
.hero-banner {
  position: relative;
  height: 100vh;
  background-image: url('@/assets/fondo_bnb.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.hero-title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero-description {
  font-size: 24px;
  margin-bottom: 30px;
}

.btn-primary {
  background: #fff;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
}

.btn-primary:hover {
  background: #000;
  color: #fff;
}


/* Benefits section */
.benefits-section {
    background:#bac2bc;
  padding: 100px 0;
}

.benefits-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Customer Testimonials */
.testimonials-section {
  background:#bac2bc;
  padding: 100px 0;
}

.testimonials-title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}

.testimonial-card {
  background: #ecececa5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 30px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
}

.card-image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
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