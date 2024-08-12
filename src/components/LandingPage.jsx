import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import avatarImage from '../images/image.png';
import UserPage from './UserPage';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <GetStarted navigate={navigate} />
      <OurTeam avatar={avatarImage} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to Bughunt</h1>
    </header>
  );
}

function GetStarted({ navigate }) {
  return (
    <section className="get-started">
      <h2>Get Started With Us</h2>
      <p>Join us in making the web a better place by hunting bugs and improving software quality.</p>
      <button onClick={() => navigate('/login')}>Get Started</button>
    </section>
  );
}

function OurTeam({ avatar }) {
  return (
    <section className="our-team">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMember name="Alice" role="Frontend Developer" avatar={avatar} />
        <TeamMember name="Bob" role="Backend Developer" avatar={avatar} />
        <TeamMember name="Charlie" role="Designer" avatar={avatar} />
      </div>
    </section>
  );
}

function TeamMember({ name, role, avatar }) {
  return (
    <div className="team-member">
      <img src={avatar} alt={`${name}'s avatar`} className="team-member-avatar" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 Bughunt. All rights reserved.</p>
    </footer>
  );

}

export default LandingPage;
