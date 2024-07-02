# Desafío Técnico Frontend

Es necesario utilizar la última versión LTS de Angular.

El desafío consiste en desarrollar una aplicación SPA para gestionar el mantenimiento de superhéroes. Se evaluará la estructura del proyecto, el formato, la optimización y el tipado del código, teniendo en cuenta que el proyecto puede expandirse en el futuro.

La aplicación debe incluir al menos las siguientes vistas, y se valorará positivamente la capacidad de navegación entre ellas:

## Filtro y Listado

- Campo de entrada para filtrar por nombre de héroe, optimizando la gestión de eventos para minimizar el número de filtrados realizados.
- Botón de edición que redirige a la página de edición, mostrando los datos del héroe seleccionado.
- Botón para agregar un nuevo héroe, que redirige a la página de creación de héroes.
- Los nombres de los héroes filtrados deben mostrarse con la primera letra en mayúscula.
- Botón para eliminar héroes, que solicitará confirmación antes de borrar al héroe seleccionado.

## Crear / Editar

- Formulario con los campos necesarios para la creación o edición de héroes.
- Al crear o editar un héroe, redirigir al listado de héroes.
- El campo de nombre de los héroes debe mostrarse en mayúsculas.

## Otros Elementos

- Servicio: Se permite simular los datos o conectarse a una API real, pero si los datos están en el servicio, se debe simular las llamadas a la API utilizando observables.
- Loader: Mostrar un indicador de carga mientras se obtienen los datos para informar al usuario.
- Notificaciones: Mostrar mensajes informativos al usuario al crear, modificar, eliminar un elemento, o en caso de error.

## Se Valora Positivamente:

1. Uso de una librería visual como Angular Material.
2. Inclusión de tests.
3. Uso de programación reactiva.
4. Modularización de los componentes.

El proyecto debe presentarse en un repositorio de Git.
