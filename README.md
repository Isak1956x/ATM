<img width="996" height="450" alt="image" src="https://github.com/user-attachments/assets/d9330fae-98e6-4848-8c6d-fb536761676d" />
 </p> <h1 align="center">🏧 Cajero Automático — Módulo de Retiro de Dinero</h1> <p align="center"> <em>Aplicación web desarrollada con Node.js, Express.js y Handlebars.</em> </p> <p align="center"> <img src="https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js" alt="Node.js Badge"> <img src="https://img.shields.io/badge/Express.js-5.x-lightgrey?logo=express" alt="Express Badge"> <img src="https://img.shields.io/badge/Handlebars-HBS-orange?logo=handlebarsdotjs" alt="Handlebars Badge"> <img src="https://img.shields.io/badge/Bootstrap-5.x-blueviolet?logo=bootstrap" alt="Bootstrap Badge"> <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License Badge"> </p>
🚀 Descripción del Proyecto

Como parte de mi materia de Programación Web, desarrollé un simulador de cajero automático, enfocado exclusivamente en el módulo de retiro de dinero.
El sistema permite a los usuarios ingresar una cantidad, seleccionar un modo de dispensación y obtener el detalle de las papeletas entregadas según las denominaciones disponibles.

Todo el cálculo y la lógica de negocio se realizan en el servidor, utilizando Node.js y Express.js (v5).
La interfaz fue diseñada con Bootstrap 5 para lograr una experiencia visual clara y moderna, y Handlebars (HBS) fue empleado como motor de plantillas.

💡 Funcionalidades Principales
💵 1. Retiro de Dinero

El usuario ingresa el monto a retirar y elige un modo de dispensación.

El sistema valida que:

El monto sea un número entero y múltiplo de 100.

El monto sea compatible con el modo de dispensación seleccionado.

Si el monto es válido, el cajero muestra cuántas papeletas de cada tipo fueron entregadas.

🔧 Modos de Dispensación
Modo	Descripción	Denominaciones	Ejemplo
🟢 Eficiente (por defecto)	Entrega la menor cantidad posible de papeletas.	100, 200, 500, 1000	700 → 1×500 + 1×200
🟣 Modo 1	Solo utiliza papeletas de 200 y 1000.	200, 1000	1200 → 1×1000 + 1×200
🔵 Modo 2	Solo utiliza papeletas de 100 y 500.	100, 500	800 → 1×500 + 3×100
🧩 Validaciones Implementadas

🚫 No se aceptan montos con decimales o letras (solo números enteros).

⚠️ No se aceptan montos que no sean múltiplos de 100.

❗ Se verifica que el monto pueda ser dispensado con las denominaciones del modo elegido.

✅ Si el monto es correcto, se muestra la cantidad exacta de billetes por denominación.

🖥️ Interfaz del Sistema

Pantalla principal con:

Campo de texto para ingresar el monto.

Menú desplegable (select) para elegir el modo de dispensación.

Botón para ejecutar el retiro.

Resultado mostrado en una nueva pantalla.

Diseño claro, limpio y completamente responsivo gracias a Bootstrap 5.

⚙️ Requerimientos Técnicos

🟢 Node.js — entorno de ejecución.

⚡ Express.js (v5) — framework web principal.

🧱 Handlebars (HBS) — motor de plantillas.

🎨 Bootstrap 5 — diseño visual moderno y responsivo.
