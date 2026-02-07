
# Online Shop (E-commerce)

This project is a full-stack e-commerce application consisting of a React-based frontend and an Express.js backend. The frontend is built using Vite, and the backend provides RESTful APIs for managing products, orders, and cart functionality.

---

## Project Setup

### Frontend (E-commerce Project)
1. Navigate to the `ecommerce-project` directory:
   ```bash
   cd ecommerce-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Backend (E-commerce Backend)
1. Navigate to the `ecommerce-backend` directory:
   ```bash
   cd ecommerce-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server in development mode:
   ```bash
   npm run dev
   ```
4. The backend will run on `http://localhost:3000` by default.

---

## Project Structure

### Frontend (E-commerce Project)
```
ecommerce-project/
├── public/             # Static assets (e.g., images, GIFs)
│   ├── e-commerce.gif  # Demonstration GIF
│   └── images/         # Product and logo images
├── src/                # Source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components (Home, Checkout, Orders)
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

### Backend (E-commerce Backend)
```
ecommerce-backend/
├── routes/             # API route handlers
│   ├── products.js     # Product-related endpoints
│   ├── orders.js       # Order-related endpoints
│   ├── cartItems.js    # Cart-related endpoints
│   └── deliveryOptions.js # Delivery options endpoints
├── defaultData/        # Default data for products, orders, etc.
├── server.js           # Entry point for the backend server
├── package.json        # Project metadata and dependencies
├── README.md           # Backend documentation
└── troubleshooting.md  # Troubleshooting guide
```

---

## Demonstration

Below is a demonstration of the application in action:

![E-commerce Demo](public/e-commerce.gif)

---

## Features

- **Frontend**:
  - Product listing with images, ratings, and prices
  - Add-to-cart functionality
  - Checkout and order review pages
  - Responsive design

- **Backend**:
  - RESTful APIs for products, orders, and cart management
  - Default data for quick setup
  - Development server with hot reload

---

## Troubleshooting

If you encounter any issues, refer to the `troubleshooting.md` file in the backend directory or ensure all dependencies are installed correctly.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```