function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <p className="about-label">INT499 Capstone Project</p>

        <h2>StreamList</h2>

        <h1>Modern Movie & Streaming Management Platform</h1>

        <p>
          StreamList is a modern React-based Progressive Web Application (PWA)
          designed to help users organize their streaming experience, search
          movie information, manage streaming subscriptions, and securely
          complete purchases from one centralized platform.
        </p>

        <div className="about-tags">
          <span>React</span>
          <span>TMDB API</span>
          <span>Progressive Web App</span>
          <span>Authentication</span>
          <span>Checkout</span>
          <span>Local Storage</span>
        </div>
      </section>

      <section className="about-section">
        <h3>Project Overview</h3>

        <p>
          Developed as the final project for the INT499 Information Technology
          Capstone, StreamList demonstrates practical software development
          concepts including component-based architecture, client-side routing,
          secure authentication, persistent data storage, external API
          integration, Progressive Web App implementation, responsive interface
          design, and AI-assisted testing improvements.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>CRUD</h3>
          <p>Operations Complete</p>
        </div>

        <div className="stat-card">
          <h3>6</h3>
          <p>Application Pages</p>
        </div>

        <div className="stat-card">
          <h3>API</h3>
          <p>TMDB Integrated</p>
        </div>

        <div className="stat-card">
          <h3>PWA</h3>
          <p>Desktop Install Support</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h3>Core Features</h3>

          <ul>
            <li>Secure user authentication.</li>
            <li>Create, edit, complete, and delete watchlist items.</li>
            <li>Real-time movie search using the TMDB API.</li>
            <li>Shopping cart with checkout functionality.</li>
            <li>Credit card management with Local Storage.</li>
            <li>Business rules and persistent application data.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Technology Stack</h3>

          <ul>
            <li>React component-based architecture.</li>
            <li>React Router for client-side navigation.</li>
            <li>JavaScript ES6+ for application logic.</li>
            <li>HTML5 and CSS3 for responsive design.</li>
            <li>TMDB REST API integration.</li>
            <li>Service Worker and Web App Manifest for PWA support.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Learning Outcomes</h3>

          <ul>
            <li>Applied the software development lifecycle.</li>
            <li>Implemented React Hooks and state management.</li>
            <li>Integrated external REST APIs.</li>
            <li>Implemented secure application workflows.</li>
            <li>Validated functionality through software testing.</li>
            <li>Prepared a production-ready Progressive Web Application.</li>
          </ul>
        </div>
      </section>

      <section className="about-footer">
        <h3>Version 1.0 Complete</h3>

        <p>
          StreamList Version 1.0 represents the completed INT499 Information
          Technology Capstone project. The application integrates simulated
          Google authentication, Progressive Web App technologies, TMDB API
          integration, shopping cart functionality, checkout processing,
          credit card management, and Local Storage persistence within a modern
          React application.
        </p>

        <p>
          This project demonstrates practical experience with modern frontend
          development, responsive user interface design, client-side routing,
          REST API integration, software testing, Progressive Web App
          technologies, version control using Git and GitHub, and software
          quality assurance principles.
        </p>

        <p className="developer-credit">
          Developed by Itiel I. King
        </p>

        <p className="developer-subtitle">
          University of Arizona Global Campus • Bachelor of Science in
          Information Technology
        </p>
      </section>
    </div>
  );
}

export default About;