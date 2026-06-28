function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <p className="about-label">INT499 Capstone Project</p>

        <h2>StreamList</h2>

        <h1>Modern Movie & Streaming Management Platform</h1>

        <p>
          StreamList is a modern React-based web application designed to help
          users organize their streaming experience, search movie information,
          and manage subscription-related purchases from one centralized
          platform.
        </p>

        <div className="about-tags">
          <span>React</span>
          <span>TMDB API</span>
          <span>Local Storage</span>
          <span>Progressive Web App</span>
        </div>
      </section>

      <section className="about-section">
        <h3>Project Overview</h3>

        <p>
          Developed as the final project for the INT499 Information Technology
          Capstone, StreamList demonstrates practical software development
          concepts including component-based architecture, client-side routing,
          persistent data storage, external API integration, Progressive Web App
          implementation, responsive interface design, and AI-assisted testing
          improvements.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>CRUD</h3>
          <p>Operations Complete</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
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
            <li>Personal streaming watchlist management.</li>
            <li>Create, edit, complete, and delete watchlist items.</li>
            <li>Real-time movie search using the TMDB API.</li>
            <li>Subscription and accessory shopping cart.</li>
            <li>Business rule preventing duplicate subscriptions.</li>
            <li>Persistent user data with Local Storage.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Technology Stack</h3>

          <ul>
            <li>React component-based architecture.</li>
            <li>React Router for client-side navigation.</li>
            <li>JavaScript ES6+ for application logic.</li>
            <li>HTML5 and CSS3 for structure and styling.</li>
            <li>TMDB API for external movie data.</li>
            <li>Service worker and manifest for PWA support.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Learning Outcomes</h3>

          <ul>
            <li>Applied full software development lifecycle practices.</li>
            <li>Implemented state management using React Hooks.</li>
            <li>Integrated a REST API into a frontend application.</li>
            <li>Used client-side storage for data persistence.</li>
            <li>Improved functionality through testing and refinement.</li>
            <li>Prepared the application for desktop installation.</li>
          </ul>
        </div>
      </section>

      <section className="about-footer">
        <h3>Final Capstone Presentation</h3>

        <p>
          StreamList represents the completed application built throughout the
          course and demonstrates readiness for continued development, testing,
          deployment, and future enhancement.
        </p>

        <p className="developer-credit">Developed by Itiel I. King</p>

        <p className="developer-subtitle">
          University of Arizona Global Campus • Bachelor of Science in
          Information Technology
        </p>
      </section>
    </div>
  );
}

export default About;