<template>
  <div class="background-image"></div>
  <div class="container">
    <p id="heading">Login</p>
    <div class="field">
      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
      </svg>
      <input autocomplete="off" placeholder="Username" class="input-field" type="text" v-model="username">
    </div>
    <div class="field">
      <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>
      <input placeholder="Password" class="input-field" type="password" v-model="password">
    </div>
    <div class="btn">
      <button class="button1" @click="login">Login</button>
      <button class="button2" @click="signup">Sign Up</button>
    </div>
    <button class="button3" @click="forgotPassword">Forgot Password</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password
      };
      axios.post('/api/user', data)
        .then(response => {
          // Maneja la respuesta del backend después de un inicio de sesión exitoso
          console.log(response.data);
        })
        .catch(error => {
          // Maneja los errores en caso de fallo de inicio de sesión
          console.error(error);
        });
    },
    signup() {
      const data = {
        username: this.username,
        password: this.password
      };
      axios.post('/api/user', data)
        .then(response => {
          // Maneja la respuesta del backend después de un registro exitoso
          console.log(response.data);
        })
        .catch(error => {
          // Maneja los errores en caso de fallo de registro
          console.error(error);
        });
    },
    forgotPassword() {
      // Implementa la lógica para el restablecimiento de contraseña si es necesario
    }
    // Otras funciones y métodos
  }
}
</script>


<style>
.container {
  max-width: 400px;
  margin: 0 auto;

}

#heading {
  text-align: center;
  margin: 2em 0;
  color: #ffffff;
  font-size: 1.2em;
}

.field {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.6em;
  border-radius: 25px;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: #ffffff;
}

.input-field {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: #d3d3d3;
}

.btn {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 2.5em;
}

.button1,
.button2,
.button3 {
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: #ffffff;
}

.button1:hover,
.button2:hover {
  background-color: #000000;
}

.button3:hover {
  background-color: #ff0000;
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
</style>