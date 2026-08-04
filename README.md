# Intensamente Chat

Single Page Application responsive que permite conversar con cinco personajes de Intensamente mediante Google Gemini AI.

## Personajes

- **Alegría:** responde de forma optimista y positiva.
- **Tristeza:** escucha con empatía y brinda apoyo.
- **Furia:** reacciona de manera impulsiva y enérgica.
- **Temor:** responde con cautela y preocupación.
- **Desagrado:** mantiene una actitud crítica y sarcástica.

Cada personaje tiene su propia personalidad, mensaje de bienvenida e historial de conversación.

## Funcionalidades

- Navegación SPA con History API.
- Rutas `/home`, `/chat` y `/about`.
- Selección entre cinco personajes.
- Respuestas generadas con Google Gemini AI.
- Historial independiente por personaje.
- Persistencia con `localStorage`.
- Indicador animado de escritura.
- Timestamps en los mensajes.
- Copiar respuestas al portapapeles.
- Borrar historial.
- Modo claro y oscuro.
- Diseño mobile-first para celular, tablet y computadora.
- Manejo de errores y límite de consultas.
- Tests unitarios con Vitest y fetch simulado.

## Tecnologías

- JavaScript Vanilla
- HTML
- CSS
- Vite
- Google Gemini AI
- Vercel Functions
- Vitest
- Git y GitHub

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/naylapereira/ProyectoM3_NaylaPereira-.git
```

Ingresar a la carpeta:

```bash
cd ProyectoM3_NaylaPereira-
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` a partir de `.env.example` y agregar:

```env
GEMINI_API_KEY=TU_API_KEY
```

## Ejecutar el proyecto

Iniciar el entorno de desarrollo:

```bash
npx vercel dev
```

La aplicación estará disponible en:

```
http://localhost:3000
```

## Ejecutar los tests

```bash
npm test
```

o ejecutar una única vez:

```bash
npm test -- --run
```

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de asistencia para resolver dudas, modularizar el código, mejorar la organización del proyecto y generar ejemplos de pruebas unitarias.

A continuación se incluyen ejemplos de consultas realizadas y sus respectivas respuestas.

### Prompt 1

*(Insertar captura del prompt 1)*

### Respuesta 1

*(Insertar captura de la respuesta 1)*

---

### Prompt 2

*(Insertar captura del prompt 2)*

### Respuesta 2

*(Insertar captura de la respuesta 2)*

## Autora

**Nayla Pereira**

Proyecto Integrador M3 - Desarrollo Web.