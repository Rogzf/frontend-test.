Lista de Usuarios con Desplazamiento Infinito
Este proyecto consiste en una aplicación web que muestra una lista de usuarios de manera dinámica, utilizando desplazamiento infinito para cargar más usuarios a medida que el usuario se desplaza hacia abajo en la página.

Componentes
CardUsers
El componente CardUsers es una tarjeta que muestra la información de un usuario, incluyendo su nombre, correo electrónico y teléfono. Utiliza props para recibir los datos del usuario y renderizarlos en la interfaz de usuario.

InfiniteScrollUser
El componente InfiniteScrollUser implementa el desplazamiento infinito para cargar más usuarios a medida que el usuario se desplaza hacia abajo en la página. Utiliza el componente CardUsers para renderizar cada usuario en la lista.

App
El componente App es el componente principal de la aplicación. Aquí se presenta el título de la lista de usuarios y se incluye el componente InfiniteScrollUser para mostrar la lista de usuarios con desplazamiento infinito.

Tecnologías Utilizadas
React: Utilizado como la biblioteca principal para la creación de interfaces de usuario interactivas.

react-infinite-scroll-component: Una biblioteca de React utilizada para implementar la funcionalidad de desplazamiento infinito.

fetch API: Utilizada para realizar solicitudes HTTP asíncronas para obtener datos de la API de usuarios aleatorios.

Configuración y Uso
Clona el repositorio en tu máquina local.
Instala las dependencias utilizando npm.
Inicia la API de usuarios aleatorios ejecutando el siguiente comando en una terminal:

npm start

Esto iniciará la aplicación y se abrirá en tu navegador predeterminado.
Ahora podrás ver la lista de usuarios con desplazamiento infinito.
7
Personalización
Si deseas personalizar la aplicación o integrarla en otro proyecto, puedes modificar los estilos CSS en línea dentro de los componentes o crear tus propios componentes de React.

¡Disfruta explorando la lista de usuarios con desplazamiento infinito!