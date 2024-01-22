# MahlzeitAPP Frontend

Welcome to the Mahlzeit APP, a comprehensive project that showcases a robust CRUD (Create, Read, Update, Delete) functionality for efficiently managing and organizing a diverse collection of recipes. This application empowers registered users to seamlessly interact with their recipes library, granting them the ability to explore, personalize, and maintain their recipes effortlessly.

Visit https://igarcia-mahlzeit.netlify.app/home to run this project online.
<br>
<br>

## Table of contents

- [Features](#features)
- [Used packages](#used-packages)
- [Management Scripts](#management-scripts)
- [Folder Structure](#folder-structure)
- [Metrics](#metrics)
- [How can you run this project locally](#how-can-you-run-this-project-locally)
  <br>

## Features:

- Display a list of recipes.
- User registration to access CRUD functionalities.
- Add new recipe to the list.
- Delete own recipes from the list.
- Utilize Redux for efficient state management.
- Use React Router for navigation between different views.
- Style components using Styled Components.
- Manage notifications with React Toastify.
- Integration of unit tests with Jest and Testing Library.

  <br>

## Used Packages

- **@fontsource/overpass**: Font used for the interface.
- **@reduxjs/toolkit**: Used for efficient state management.
- **axios**: Library for making HTTP requests.
- **jwt-decode**: Decodes JWT tokens to obtain user information.
- **react**: Core React library.
- **react-dom**: React renderer for the browser.
- **react-icons**: Popular icons for visual components.
- **react-redux**: Integration of Redux with React.
- **react-router-dom**: React routing for view navigation.
- **react-scripts**: Set of preconfigured scripts for React projects.
- **react-toastify**: Displays attractive notifications in the interface.
- **styled-components**: Library for styling components using CSS in JS.
- **typescript**: Typed programming language.
- **web-vitals**: Library for measuring web performance metrics.
- **@testing-library/jest-dom**, **@testing-library/react**, **@testing-library/user-event**: Used for writing unit tests.
- **@types/jest**, **@types/node**, **@types/react**, **@types/react-dom**, **@types/react-router-dom**: Type definitions for development environments.
- **husky**: Integrates Git hooks to automate tasks before commits.
- **@types/styled-components**: Type definitions for Styled Components.
- **msw**: Library for mocking API calls in tests.
  <br>

## Management Scripts

- `start`: Launches the application in development mode.
- `build`: Generates a production version of the project.
- `test`: Runs unit tests.
- `test-coverage`: Runs unit tests and generates a coverage report.
  <br>

## Folder Structure

The folder structure follows a component-based organization, separating pages, Redux logic, API services, styles, and utilities.

```bash
├── .github
├── .husky
├── coverage
├── README.md
├── .gitignore
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
    ├── components
    ├── hooks
    ├── mocks
    ├── modals
    ├── mocks
    ├── pages
    ├── shemas
    ├── store
    ├── styles
    ├── types
    ├── utils
    └── App.tsx
```

<br>

## Metrics

📈 [Front SonarCloud metrics](https://sonarcloud.io/summary/overall?id=ivangg88_mahlzeit-front) - >80% coverage

<br>

## How can you run this project locally

First of all, in order to start this project it is necessary to:

- Download the .env.example (delete the .example) to get the API path for the backend.
- Once you've cloned this Frontend project, install it with:

  ```bash
  npm install
  ```

- After that, execute this command:
  ```bash
  npm start
  ```

<br>
