<h1>About</h1>
<p>Saboritech es una pequeña muestra de código de un cliente conectado a un servidor a través de sus endpoints. </p>
<p>Su objetivo es ser un insumo de referencia para las estudiantes de Junior Achievement que atraviesan el programa de Winning Women en compañía con IBM</p>

<h1>Instalación y ejecución</h1>
<ol>
<li>git clone https://github.com/JuanPaLA/SaboriTech.git </li>
<li>cd saboritech (nos posicionamos en el root del proyecto) </li>
<li>npm install (instalamos las librerías necesarias) </li>
<li>npm start (corremos el proyecto) </li>
</ol>

<h1>Cuestiones a tener en cuenta</h1>
<p>Si se desea probar el cliente con otro servidor, modificar la propiedad "proxy" del archivo package.json. El mismo se encuentra apuntando al localhost:8080, por lo que todos los fetchs apuntan con base en ese host.</p>
<p>De la misma manera, la query de cada fecth se presentan aquí en base a los endpoints del servidor hecho en springboot que se tomó como referencia para este curso y que pueden encontrar aquí: https://github.com/razeone/restaurante-api</p>

<h1>Temas cuebiertos</h1>
* React JS, como librería de front-end
* Instalación de Node y NPM
* Instalación de create-react-app y uso desde cli
* Estructura de un proyecto React
* Método renderDom
* Anidado de componentes 
* Cómo organizar carpetas de React 
* Instalación de librerías con NPM
* Tipos de componentes (clases, funciones, elementos)
* Paso de datos entre elementos
* props
* Hooks: controles de estado => useState
* Hooks: controles de efecto => useEffect
* Hooks: control de context => useContext
* Control de formulario a través de eventos de inputs
* Persistencia: Context
* Routing
* "Mapeo" de elementos: array.map()
* Renderizado condicional

<h1>Referencias</h1>

Documentación oficial: https://es.reactjs.org/docs/getting-started.html
Documentación de respaldo: https://docs.google.com/document/d/1nBc0yK87zkPvzF8KG8K4hCLfzJMpfrSoW6dAJVN5wbg/edit?usp=sharing

