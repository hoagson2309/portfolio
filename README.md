# Son Cao — Portfolio

Personal portfolio website showcasing my projects in AI, Machine Learning, and Embedded Systems. Built with HTML, CSS, and JavaScript.

## Features

- Tab-based single-page navigation (Home, Projects, Experience, Contact)
- Hero section with auto-cycling background video slider and timeline controls
- Individual project detail pages with overview, challenge, and outcome sections
- Light/dark theme toggle with localStorage persistence
- Scroll-triggered reveal animations and parallax effects
- Preloader, custom cursor, and text split animations
- Magnetic hover effects on buttons and links
- Responsive design

## Projects

- **NVDA Stock Price Prediction** — ML model for predicting NVIDIA stock prices
- **Autonomous Maze Navigation Robot** — Robot that navigates mazes using sensors and pathfinding
- **House Price Prediction** — Regression model for estimating house prices
- **Hand Gesture Recognition** — Real-time hand gesture recognition with computer vision
- **Embedded Sensor Monitoring System** — Real-time sensor data monitoring on embedded hardware

## Structure

```
├── index.html              Main page (Home, Projects, Experience, Contact)
├── project.html            Project detail page
├── css/styles.css          All styles (light/dark theme via CSS variables)
├── js/
│   ├── projects.js         Project data & hero video definitions
│   ├── project-page.js     Project detail page rendering
│   ├── theme.js            Light/dark theme toggle
│   └── effects.js          Preloader, custom cursor, smooth scroll & reveals
└── assets/
    ├── images/             Project screenshots & photos
    ├── icons/              Social icons & resume PDF
    └── videos/             Hero background videos
```

## How to edit

- **Projects** — Edit `js/projects.js` to add/remove/update projects and hero videos
- **Text & content** — Edit `index.html`
- **Colors & themes** — Edit CSS variables at the top of `css/styles.css`
- **Videos** — Drop MP4 files in `assets/videos/` and reference them in `projects.js`

## Run locally

Open `index.html` in your browser, or use VS Code with the Live Server extension.

## Tech

HTML / CSS / JavaScript — no frameworks, no build tools.

## Author

Son Cao — Computer Science @ Saxion University of Applied Sciences
