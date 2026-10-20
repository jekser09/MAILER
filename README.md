# Mailer

Mini proyecto de envío de correos electrónicos transaccionales desarrollado como práctica de desarrollo web. La aplicación expone un formulario web en el cliente y procesa el envío de forma segura desde el servidor utilizando **Express 5** y el SDK de **Resend**.

## Tecnologías utilizadas

- **Node.js** (ES Modules y carga nativa de variables de entorno con `process.loadEnvFile()`)
- **Express 5** (Servidor HTTP, archivos estáticos y endpoint REST)
- **Resend** (`resend` SDK para el envío de correos)
- **HTML5, CSS3 y JavaScript Vanilla** (`FormData` y `Fetch API` en el frontend)

## Estructura del proyecto

```text
├── static/
│   ├── css/
│   │   └── index.css          # Estilos de la interfaz
│   ├── js/
│   │   └── index.js           # Lógica del cliente (captura del form y petición POST /send)
│   └── template/
│       └── index.html         # Plantilla principal con el formulario de envío
├── .env.template              # Plantilla de variables de entorno requeridas
├── app.js                     # Punto de entrada del servidor Express y ruta de envío
└── package.json               # Configuración del proyecto y dependencias
```

## Requisitos previos

- **Node.js** `v21.7.0` o superior (para soporte nativo de `process.loadEnvFile()`).
- Una cuenta y **API Key** en [Resend](https://resend.com/).

## Configuración e instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jekser09/MAILER.git
   cd MAILER
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto basándose en `.env.template`:
   ```env
   PORT=3000
   RSAPIKEY=re_tu_api_key_de_resend
   FROM=onboarding@resend.dev
   ```
   > **Nota:** Si no se cuenta con un dominio verificado en Resend, utilizar `onboarding@resend.dev` en `FROM` y enviar correos únicamente a la dirección de email registrada en la cuenta de Resend.

4. Iniciar el servidor:
   ```bash
   node app.js
   ```

5. Abrir el navegador en `http://localhost:3000` (o el puerto configurado en `PORT`).

## Endpoints

| Método | Ruta    | Descripción                                                                 |
| ------ | ------- | --------------------------------------------------------------------------- |
| `GET`  | `/`     | Sirve la interfaz principal (`static/template/index.html`).                 |
| `POST` | `/send` | Recibe `{ to, subject, html }` en formato JSON y envía el correo con Resend.|
