import { useState } from "react";
import "./landingPage.css";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container container-fluid">
          <div className="navbar-brand">
            <span className="logo-text">Cabinet Médical</span>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="navbar-toggler" aria-label="Toggle navigation">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>

          <div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
            <button className="nav-link" onClick={() => scrollToSection("features")}>À Propos</button>
            <button className="nav-link" onClick={() => scrollToSection("team")}>Équipe</button>
            <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
            <a href="/dashboard" className="nav-cta">Commencer maintenant</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container-fluid">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title"><span className="gestion">Gestion Digitale</span> du Cabinet Médical</h1>
              <p className="hero-subtitle">
                Une plateforme intuitive pour numériser la gestion des patients, des rendez-vous, des consultations et
                des statistiques.
              </p>
              <a href="/dashboard" className="cta-primary">Commencer maintenant</a>
            </div>

            <div className="hero-illustration"></div>
          </div>
        </div>
      </section>

      {/* Features  */}
      <section id="features" className="features">
        <div className="container-fluid">
          <h2 className="section-title">Fonctionnalités Principales</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>Patients</h3>
              </div>

              <p className="feature-description">
                Gestion complète des dossiers patients avec création automatique de numéros, calcul d'âge,
                allergies, groupe sanguin et historique médical centralisé.
              </p>

              <div className="feature-tags">
                <span className="tag">CRUD Complet</span>
                <span className="tag">Auto-numérotation</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3>Rendez-vous</h3>
              </div>

              <p className="feature-description">
                Agenda intelligent avec prévention des chevauchements horaires, motifs diversifiés (consultation,
                contrôle, certificat) et suivi des statuts.
              </p>

              <div className="feature-tags">
                <span className="tag">Pas de Conflits</span>
                <span className="tag">Multi-statuts</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3>Consultations</h3>
              </div>

              <p className="feature-description">
                Enregistrement complet des consultations avec diagnostic, ordonnances, tarification et modes de
                paiement. Suivi intégré à l'historique patient.
              </p>

              <div className="feature-tags">
                <span className="tag">Diagnostic</span>
                <span className="tag">Facturation</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>

                <h3>Statistiques</h3>
              </div>

              <p className="feature-description">
                Tableau de bord analytique avec chiffre d'affaires (jour/mois), nombre de patients, présences et
                identification des patients les plus fréquents.
              </p>

              <div className="feature-tags">
                <span className="tag">Analytics</span>
                <span className="tag">Temps-réel</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title">Notre Équipe</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">YE</div>
              </div>
              <h3>Yassir El Idrissi</h3>
              <p className="team-role">Full-Stack Developer</p>
              <p className="team-bio">
                Architecte principal de la plateforme avec expertise en développement web moderne
              </p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">IB</div>
              </div>
              <h3>Imane Bensalem</h3>
              <p className="team-role">UI/UX Designer</p>
              <p className="team-bio">Créatrice de l'interface élégante et intuitive que vous voyez</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">AC</div>
              </div>
              <h3>Adam Chafik</h3>
              <p className="team-role">Software Engineer</p>
              <p className="team-bio">Spécialiste en architecture backend et optimisation de performance</p>
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-fluid">
          <h2>Prêt à Transformer Votre Cabinet ?</h2>
          <p>Rejoignez-nous et bénéficiez d’une plateforme médicale d’élite, alliant innovation et sophistication.</p>
          <a href="/dashboard" className="cta-primary cta-large">
            Commencer maintenant
          </a>
        </div>
      </section>

      {/* Footer */}
    <footer id="contact" className="footer">
      <div className="container footer-wrapper">

        <div className="footer-section">
          <h4 className="footer-title">Cabinet Médical Dr. Amrani</h4>
          <p className="footer-desc">
            Plateforme moderne pour la gestion numérique des dossiers médicaux,
            consultations et rendez-vous.
          </p>

          <div className="footer-social">
            <a href="#"><i className="ri-facebook-circle-fill fs-3"></i></a>
            <a href="#"><i className="ri-instagram-line fs-3"></i></a>
            <a href="#"><i className="ri-linkedin-box-fill fs-3"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Navigation</h4>
          <ul>
            <li>
              <button onClick={() => scrollToSection("features")}>
                <i className="ri-menu-unfold-line"></i> Fonctionnalités
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("team")}>
                <i className="ri-group-line"></i> Équipe
              </button>
            </li>
            <li>
              <a href="/dashboard">
                <i className="ri-dashboard-line"></i> Application
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>

          <p><i className="ri-map-pin-line"></i> N° 338 Technopark, Casablanca</p>
          <p><i className="ri-mail-line"></i> contact@cabinet-amrani.com</p>
          <p><i className="ri-phone-line"></i> +212 678 905 436</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Plateforme Médicale — Tous droits réservés.</p>
      </div>
    </footer>

    </div>
  )
}