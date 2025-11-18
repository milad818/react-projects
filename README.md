# React Projects

A collection of React projects including a chatbot application and more coming soon.

## Projects

### Chatbot Project
An interactive chatbot interface built with React and Vite, featuring a clean UI with message history and input handling.

### E-commerce Project *(Coming Soon)*
An e-commerce application will be added in the near future.

## Prerequisites

### Installing Node.js and npm

You'll need Node.js and npm installed on your system. Here are two approaches:

#### Option 1: Using NVM (Recommended)

NVM (Node Version Manager) allows you to manage multiple Node.js versions easily.

**Windows (nvm-windows):**
1. Download and install from: https://github.com/coreybutler/nvm-windows/releases
2. Open a new terminal and run:
```bash
# Install the latest LTS version of Node.js
nvm install lts

# Use the installed version
nvm use lts

# List all installed Node.js versions
nvm list

# Use a specific version from the list (replace with version number shown)
nvm use <version-number>

# Verify installation
node --version
npm --version
```

**macOS/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install the latest LTS version
nvm install --lts

# Use the installed version
nvm use --lts

# List all installed Node.js versions
nvm list

# Use a specific version from the list (replace with version number shown)
nvm use <version-number>

# Verify installation
node --version
npm --version
```

#### Option 2: Direct Installation

Download and install Node.js directly from https://nodejs.org/ (LTS version recommended). This will include npm automatically.

## Quick Start (Clone and Run)

If you're cloning this repository to run the projects locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/milad818/react-projects.git

# Navigate to the project directory
cd react-projects

# Navigate to the chatbot project
cd chatbot-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start and you can view the application at `http://localhost:5173` (or the port shown in your terminal).

## Project Setup Guide

### Creating a New React Project with Vite

This repository already has a React project set up using Vite. For reference, here's how a new React project can be initialized:

#### Option 1: Using npx (Recommended)

```bash
# Create a new Vite project with React template
npx create-vite@latest project-name --template react

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

#### Option 2: Using npm

```bash
# Create a new Vite project with React template
npm create vite@latest project-name -- --template react

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

*Note: This step is already done for the chatbot-project and is not required when cloning this repository.*

### Installing Packages

To install all project dependencies listed in `package.json`:

```bash
npm install
```

To install a specific package:

```bash
npm install package-name
```

### Running the Development Server

Start the React application in development mode:

```bash
npm run dev
```

This will:
- Start a local development server (usually at `http://localhost:5173`)
- Enable hot module replacement (HMR) for instant updates
- Open your default browser automatically

Press `Ctrl + C` in the terminal to stop the server.

## Development Tools

### ESLint Extension

ESLint helps maintain code quality by identifying potential errors and enforcing coding standards.

**Installation in VS Code:**
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "ESLint"
4. Install the extension by Microsoft
5. Reload VS Code if prompted

The chatbot project already includes ESLint configuration in `eslint.config.js`.

### Installing External Packages

You can install external packages to extend functionality. For example, to install the `supersimpledev` package:

```bash
npm install supersimpledev
```

After installation, import and use it in your components:

```javascript
import { something } from 'supersimpledev';
```

### Setting Up Testing with Vitest

Vitest is a fast unit testing framework for Vite projects. Here's how to set it up:

#### Install Vitest and Testing Libraries

```bash
# Install Vitest as a dev dependency
npm install --save-dev vitest@3.1.2

# Install React Testing Library and jsdom for DOM testing
npm install --save-dev @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.1 jsdom@26.1.0
```

#### Create Configuration Files

**1. Create `vitest.config.js` in your project root:**

```javascript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  }
});
```

**2. Create `setupTests.js` in your project root:**

```javascript
import '@testing-library/jest-dom';
```

#### Run Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm test run

# Run tests with UI
npm run test:ui

# Run tests using npx (without adding to package.json) (Recommended)
npx vitest

# Run tests once with npx
npx vitest run

# Run tests with coverage using npx
npx vitest --coverage
```

**Configuration Explanation:**
- `environment: 'jsdom'` - Simulates a browser environment for testing React components
- `globals: true` - Enables global test functions (describe, it, expect) without imports
- `setupFiles` - Runs setup file before each test to configure jest-dom matchers

## Project Structure

```
chatbot-project/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Public static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Additional Files

- **chatbot.html** - Standalone chatbot demo using React via CDN
- **react-basics.html** - Basic React concepts demonstration

## Features

- Modern React with Vite for fast development
- Component-based architecture
- ESLint for code quality
- Hot Module Replacement (HMR)
- Responsive design