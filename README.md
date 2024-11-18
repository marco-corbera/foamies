## Foamies 🍻 - The Beer Order App for Your Homies

Welcome to **Foamies**, the simplest and most fun way to manage beer orders for your friends at the bar! 🍺 Whether you're at a pub with your homies or hosting a party, Foamies helps you track who's drinking what and make sure the tab is always up-to-date. With a sleek interface and easy-to-use functionality, you can focus on having fun, while Foamies takes care of the rest.

---

## Table of Contents
- [Description](#description)
- [Installation](#installation)
  - [Option 1: Install with Docker - Recommended]
  - [Option 2: Install Without Docker]
- [Technologies Used](#technologies-used)
- [Running the App](#running-the-app)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Description

**Foamies** is a web app designed for managing beer orders in a bar or pub environment. It allows you to view real-time orders and payments, track drinks ordered by customers, and keep things fun while sipping your favorite brews. 🍻

The app is a **single-page application (SPA)** built with **React**, and it’s backed by a **Django API** to handle order data, payments, and more.

---

## Installation

### Option 1: Install with Docker - Recommended

Docker is the easiest way to get Foamies up and running without worrying about dependencies. Here’s how to get started with Docker and Docker Compose.

#### Step 1: Install Docker and Docker Compose

Follow the instructions based on your operating system:

- **macOS**: [Install Docker Desktop for Mac](https://www.docker.com/products/docker-desktop) (which includes Docker Compose)
- **Windows**: [Install Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) (Docker Compose is included)
- **Linux**: [Install Docker on Linux](https://docs.docker.com/engine/install/)
  - Then, install Docker Compose: [Install Docker Compose on Linux](https://docs.docker.com/compose/install/)

#### Step 2: Clone the Repository

Clone the project to your local machine:
```bash
git clone https://github.com/your-username/foamies.git
cd foamies
```

#### Step 3: Build the Docker containers: From the project root directory, run:
```bash
docker-compose build
```

#### Step 4: Start the containers:
```bash
docker-compose up
```

This will start both the backend and frontend in Docker containers. The frontend should now be accessible at http://localhost:3000, and the backend at http://localhost:8000.

### Option 2: Install Without Docker
If you're not using Docker or prefer to install the project the traditional way, follow these steps.

#### Step 1: Install Node.js and NVM (Frontend)
We will use Node Version Manager (NVM) to install the correct Node.js version for the frontend.

Install NVM by following the instructions at: Install [NVM](https://github.com/nvm-sh/nvm#install--update-script)

1. Install Node.js version 20.18.0:
```bash
nvm install 20.18.0
nvm use 20.18.0
```

2. Install the frontend dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend will now be running at http://localhost:3000.

#### Step 2: Install Python 3.13 (Backend)

For the backend, we will use pyenv to install the required version of Python.
1. Install pyenv by following the instructions at: [pyenv](https://github.com/pyenv/pyenv#installation)
2. Install Python 3.13:
   ```bash
   pyenv install 3.13
   pyenv global 3.13
   ```
3. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For macOS/Linux
   venv\Scripts\activate  # For Windows
   ```
4. Install the backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the backend server:
   ```bash
   python manage.py runserver
   ```
The backend API will now be running on http://localhost:8000.

## Technologies Used

### Frontend:
- React
- Next.js
- Tailwind CSS
- TypeScript

### Backend:
- Django
- Django REST Framework
- Python 3.13
- Docker: For containerized deployment

---

## Running the App

After completing the installation process, the app can be accessed in the browser:

- **Frontend (React app)**: `http://localhost:3000`
- **Backend (Django API)**: `http://localhost:8000`

You can interact with the app, view orders, and check out the latest beer prices and payments.

---

## Scripts

The following scripts are available in the project’s `package.json`:

- **dev**: Start the development server for the frontend:
  ```bash
  npm run dev
  ```
- **build**: Build the production version of the frontend:
  ```bash
  npm run build
  ```
- **start**: Start the production server for the frontend:
  ```bash
  npm run start
  ```
- **lint**: Run ESLint to check for code quality:
  ```bash
  npm run lint
  ```
- **format**: Format the code with Prettier:
  ```bash
  npm run format
  ```
- **format:check**: Format the code with Prettier:
  ```bash
  npm run format:check
  ```

## Contributing
We welcome contributions! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and ensure everything works correctly.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to your branch (`git push origin feature/your-feature`).
6. Open a pull request to the main repository.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Final Thoughts
We hope you enjoy using Foamies, and remember: Always drink responsibly, and may your beers be cold and your homies even cooler! 🍻

  
