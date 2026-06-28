# StreamList

## Modern Movie & Streaming Management Platform

**INT499 Information Technology Capstone Project**
**University of Arizona Global Campus**
**Developed by Itiel I. King**

---

## Project Overview

StreamList is a completed React-based Progressive Web Application (PWA) developed as the final project for the INT499 Information Technology Capstone course at the University of Arizona Global Campus.

The application enables users to:

* Manage a personal streaming watchlist
* Search live movie information using The Movie Database (TMDB) API
* Manage streaming subscriptions and entertainment accessories
* Store data using Local Storage
* Install the application as a desktop Progressive Web App (PWA)

Throughout the five-week capstone project, StreamList evolved from a basic React application into a fully functional Progressive Web Application demonstrating modern frontend development practices, responsive design, REST API integration, AI-assisted testing, and Progressive Web App technologies.

The completed application demonstrates React component architecture, client-side routing, REST API integration, Progressive Web App technologies, Local Storage persistence, responsive interface design, AI-assisted testing, and modern frontend software development practices.

---

## Key Features

### Personal Watchlist

* Create, edit, complete, and delete movie entries
* Persistent Local Storage
* Full CRUD functionality

### Movie Search

* Live TMDB API integration
* Dynamic movie search
* Displays movie posters, release dates, and descriptions
* Returns up to five search results
* Loading indicators
* API response validation
* User-friendly error handling

### Shopping Cart

* Browse streaming subscriptions and entertainment accessories
* Prevent duplicate subscription purchases
* Adjustable item quantities
* Remove items from the cart
* Automatic total calculations
* Persistent shopping cart using Local Storage

### Progressive Web App Features

* Desktop installation support
* Web App Manifest
* Service Worker implementation
* Standalone application mode
* Cached application resources
* Chrome Developer Tools validation
* Improved application performance

### AI-Assisted Testing Improvements

The Movies component was evaluated using GitHub Copilot to identify opportunities for improvement.

Enhancements include:

* Loading state implementation
* API response validation using `response.ok`
* Improved error handling
* Accessibility improvements using `aria-label`
* Enhanced no-results messaging
* Improved user feedback

---

## Technologies Used

* React
* React Router
* JavaScript (ES6+)
* HTML5
* CSS3
* TMDB REST API
* Local Storage
* Progressive Web Apps (PWA)
* Web App Manifest
* Service Workers
* Git
* GitHub
* GitHub Copilot

---

## Installation

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

Open your browser and navigate to:

```text
http://localhost:3000
```

---

## Project Structure

```text
streamlist
│
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── service-worker.js
│
├── src
│   ├── pages
│   │   ├── StreamList.js
│   │   ├── Movies.js
│   │   ├── Cart.js
│   │   └── About.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── Data.js
│
├── package.json
└── README.md
```

---

## Capstone Accomplishments

* React component-based architecture
* Multi-page application using React Router
* Full CRUD watchlist functionality
* TMDB REST API integration
* Shopping cart with business rules
* Persistent Local Storage
* Responsive interface design
* Progressive Web App implementation
* Desktop installation support
* AI-assisted testing improvements
* GitHub version control

---

## Testing and Quality Assurance

Testing included:

* Functional testing
* User interface validation
* CRUD operation testing
* TMDB API validation
* Shopping cart validation
* Business rule verification
* Local Storage persistence testing
* Progressive Web App validation
* Service Worker verification
* Desktop installation testing

---

## Future Enhancements

Potential future improvements include:

* User authentication
* Cloud synchronization
* Push notifications
* Offline movie history
* Favorite movie collections
* Dark mode support
* Expanded streaming providers

---

## GitHub Repository

The complete source code for the StreamList application, including the Progressive Web App implementation, is available at:

**Repository:**
https://github.com/TielK68/streamlist

---

## Author

**Itiel I. King**

Bachelor of Science in Information Technology

University of Arizona Global Campus

INT499 Information Technology Capstone Project

2026

---

## License

This repository was created for educational purposes as part of the INT499 Information Technology Capstone course at the University of Arizona Global Campus.
