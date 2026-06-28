# StreamList

## Modern Movie & Streaming Management Platform

**INT499 Information Technology Capstone Project**
**University of Arizona Global Campus**
**Developed by Itiel I. King**

---

# Project Overview

StreamList is a React-based Progressive Web Application (PWA) developed as the final capstone project for the INT499 Information Technology Capstone course at the University of Arizona Global Campus.

The application provides users with a centralized platform for managing movie watchlists, searching live movie information through The Movie Database (TMDB) API, managing streaming subscriptions and entertainment accessories, completing a secure checkout process, and storing user data using Local Storage.

Throughout the five-week capstone project, StreamList evolved from a basic React application into a fully functional Progressive Web Application demonstrating modern frontend development, responsive user interface design, authentication, client-side routing, REST API integration, Local Storage persistence, AI-assisted testing, and Progressive Web App technologies.

---

# Project Objectives

The primary objectives of StreamList include:

* Demonstrate modern React application development.
* Implement client-side routing using React Router.
* Integrate an external REST API.
* Develop CRUD functionality.
* Persist application data using Local Storage.
* Implement Progressive Web App (PWA) technologies.
* Design a secure authentication workflow.
* Implement a shopping cart and checkout process.
* Develop a credit card management system.
* Demonstrate software testing and quality assurance techniques.

---

# Features

## User Authentication

* Simulated Google OAuth login
* Protected application routes
* Automatic redirection for unauthenticated users
* Logout functionality
* User session persistence using Local Storage

---

## Personal Watchlist

* Create movie entries
* Edit movie titles
* Mark movies as completed
* Delete movies
* Persistent Local Storage
* Full CRUD functionality

---

## Movie Search

* Live TMDB API integration
* Dynamic movie search
* Displays movie posters
* Displays release dates
* Displays movie descriptions
* Returns up to five search results
* Loading indicators
* API response validation
* User-friendly error handling

---

## Shopping Cart

* Browse streaming subscriptions
* Browse entertainment accessories
* Prevent duplicate subscription purchases
* Adjustable quantities
* Remove items from the cart
* Automatic total price calculations
* Persistent shopping cart using Local Storage

---

## Credit Card Management

* Checkout workflow
* Credit Card Management page
* Card number formatting (1234 5678 9012 3456)
* Form validation
* Payment information stored using Local Storage
* Confirmation message after successful save

---

## Progressive Web App Features

* Desktop installation support
* Web App Manifest
* Service Worker implementation
* Cached application resources
* Standalone application mode
* Improved application performance
* Google Chrome Developer Tools validation

---

## AI-Assisted Testing

The Movies component was reviewed using GitHub Copilot to identify opportunities for improvement.

Enhancements include:

* Loading state implementation
* API response validation using `response.ok`
* Improved error handling
* Accessibility improvements using `aria-label`
* Enhanced no-results messaging
* Improved user feedback

---

# Technologies Used

* React
* React Router
* JavaScript (ES6+)
* HTML5
* CSS3
* TMDB REST API
* Progressive Web Apps (PWA)
* Web App Manifest
* Service Workers
* Local Storage
* Git
* GitHub
* GitHub Copilot

---

# Installation

Clone the repository:

```bash
git clone https://github.com/TielK68/streamlist.git
```

Navigate to the project:

```bash
cd streamlist
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

Open your browser:

```
http://localhost:3000
```

---

# Project Structure

```
streamlist
│
├── public
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
│
├── src
│   ├── pages
│   │   ├── Login.js
│   │   ├── StreamList.js
│   │   ├── Movies.js
│   │   ├── Cart.js
│   │   ├── CreditCard.js
│   │   └── About.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── Data.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

# Application Workflow

1. User opens StreamList.
2. User is redirected to the secure login page.
3. User signs in using the simulated Google OAuth process.
4. Authenticated users gain access to the application.
5. Users manage their movie watchlist.
6. Users search movies using the TMDB API.
7. Users add streaming subscriptions and accessories to the shopping cart.
8. Users proceed through checkout.
9. Users enter credit card information.
10. Payment information is stored using Local Storage.

---

# Testing and Quality Assurance

Testing activities included:

* Functional testing
* User interface validation
* CRUD operation testing
* TMDB API validation
* Shopping cart validation
* Business rule verification
* Local Storage persistence testing
* Authentication workflow validation
* Credit card validation
* Progressive Web App validation
* Service Worker verification
* Desktop installation testing

---

# Capstone Accomplishments

* React component architecture
* Multi-page application using React Router
* Full CRUD functionality
* REST API integration
* Shopping cart implementation
* Checkout workflow
* Credit card management
* Authentication system
* Protected routes
* Local Storage persistence
* Progressive Web App implementation
* Desktop installation support
* AI-assisted testing
* GitHub version control

---

# Future Enhancements

Potential future improvements include:

* Real Google OAuth authentication
* Cloud database integration
* Push notifications
* User profiles
* Favorite movie collections
* Purchase history
* Dark mode
* Expanded streaming providers
* Payment gateway integration

---

# GitHub Repository

Repository:

**https://github.com/TielK68/streamlist**

---

# Author

**Itiel I. King**

Bachelor of Science in Information Technology

University of Arizona Global Campus

INT499 Information Technology Capstone Project

2026

---

# License

This project was developed for educational purposes as part of the INT499 Information Technology Capstone course at the University of Arizona Global Campus.
