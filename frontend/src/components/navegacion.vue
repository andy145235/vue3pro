<template>


  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI',
}
::selection{
  color: #000;
  background: #fff;
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

.menu ul .nav-link {
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
}
.nav-link:first-child{
  margin-left: 0px;
}
.nav-link{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-link:hover{
  background: #ffffffa5;
  color: black;
}

/* Footer */
.footer {
  background: #666;
  padding: 20px 0;
  text-align: center;
}

.footer-text {
  font-size: 14px;
  color: #666;
}

.footer-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #000;
}
/*/* Estilos de los iconos */
.social-icons {
  margin-bottom: 20px;
}

.social-icon {
  display: inline-block;
  margin-right: 10px;
}

/* Estilos para los enlaces y la información del footer */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.footer-links a {
  margin-right: 10px;
}

.footer-info p {
  margin-bottom: 5px;
}

</style>
