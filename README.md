# Data Dashboard

## Overview

A web application that fetches data from a RESTful API and displays it in a user-friendly dashboard. The application leverages the power of React for building the UI, Lodash for utility functions, Vue.js for component integration, GSAP (GreenSock Animation Platform) for animations, and ScrollMagic for scroll-based animations.

## Features

- **Data Fetching**: Retrieves data from a RESTful API and displays it in a structured format.
- **React**: Utilizes React for building a responsive and dynamic UI.
- **Lodash**: Employs Lodash for various utility functions and data manipulation.
- **Vue.js**: Integrates Vue.js components within the React application using `vue-custom-element`.
- **GSAP**: Adds smooth animations for a better user experience.
- **ScrollMagic**: Implements scroll-based animations to enhance interactivity.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Lodash**: A modern JavaScript utility library delivering modularity, performance, and extras.
- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **GSAP (GreenSock Animation Platform)**: A robust JavaScript library for creating animations.
- **ScrollMagic**: A JavaScript library for magical scroll interactions.

## Project Structure

```
my-react-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.css
│   │   │   └── Table.js
│   │   │   └── Table.css
│   │   ├── MyVueComponent.vue
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rishi-Sudhakar/data-dashboard.git
   cd data-dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Components

### Dashboard

Located at `src/components/Dashboard/Dashboard.js`. This component fetches data from the API and displays it in a table format using the `Table` component. It also integrates GSAP and ScrollMagic for animations.

### Table

Located at `src/components/Dashboard/Table.js`. This component renders the data in a table with animations.

### MyVueComponent

Located at `src/components/MyVueComponent.vue`. This Vue component is integrated into the React application as a custom element.

## Custom Element Integration

The Vue.js component is converted to a custom element using `vue-custom-element` and then used within the React application.

## Animations

### GSAP

GSAP is used to animate the table and dashboard components to enhance user experience.

### ScrollMagic

ScrollMagic is utilized to trigger animations based on scroll events.

<img width="966" alt="Screenshot 2024-06-28 at 9 46 40 PM" src="https://github.com/Rishi-Sudhakar/data-dashboard/assets/79398572/59109585-dd68-4144-a725-773c5383ccb4">



## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Lodash](https://lodash.com/)
- [Vue.js](https://vuejs.org/)
- [GSAP](https://greensock.com/gsap/)
- [ScrollMagic](http://scrollmagic.io/)
- [RESTFUL API](https://restful-api.dev/)
---
