import React from 'react';
import './CareerHighlights.css';
import { FaAws, FaMicrosoft, FaShieldAlt, FaTachometerAlt, FaRocket, FaClipboardCheck, FaCloud, FaBuilding } from 'react-icons/fa';
import { SiTerraform, SiKubernetes } from 'react-icons/si';

const stats = [
  { value: '10+', label: 'Years in cloud & DevOps' },
  { value: '2', label: 'Clouds mastered — AWS & Azure' },
  { value: '6', label: 'Certifications earned' },
  { value: '100%', label: 'Uptime through regional failovers' },
];

const impacts = [
  {
    icon: <FaTachometerAlt />,
    metric: '40% faster incident response',
    detail: 'Built CloudWatch monitoring dashboards at the CFTC, with AI-driven incident classification feeding root-cause analysis.',
  },
  {
    icon: <FaRocket />,
    metric: '35% faster deployments',
    detail: 'Automated infrastructure provisioning, credential rotation, and policy enforcement with PowerShell and Python at Microsoft.',
  },
  {
    icon: <FaClipboardCheck />,
    metric: '40% better audit readiness',
    detail: 'Developed monitoring frameworks with KQL, Geneva, and Azure Monitor to surface privacy and compliance risks across public and GovCloud environments.',
  },
  {
    icon: <FaCloud />,
    metric: '40% operational efficiency gain',
    detail: 'Led Boeing’s legacy migration to AWS GovCloud using cloud-native services and containerized microservices.',
  },
];

const journey = [
  { icon: <SiTerraform />, company: 'OPTAFI', role: 'Cloud Infrastructure as Code Engineer', period: '2025 – Present' },
  { icon: <FaBuilding />, company: 'Dev Technology — CFTC', role: 'Principal System Architect', period: '2024 – 2025' },
  { icon: <FaMicrosoft />, company: 'Microsoft', role: 'Azure Cloud Engineer 2', period: '2020 – 2024' },
  { icon: <FaAws />, company: 'Boeing', role: 'Cloud Engineer', period: '2017 – 2019' },
];

const badges = [
  { icon: <FaShieldAlt />, label: 'FedRAMP' },
  { icon: <FaShieldAlt />, label: 'SOC2' },
  { icon: <FaShieldAlt />, label: 'OWASP Top 10' },
  { icon: <SiKubernetes />, label: 'Kubernetes' },
  { icon: <SiTerraform />, label: 'Terraform' },
];

const CareerHighlights: React.FC = () => {
  return (
    <div className="highlights-container">
      <div className="stats-row">
        {stats.map((stat, index) => (
          <div key={index} className="stat-tile" style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <h3 className="highlights-section-title">Measurable Impact</h3>
      <div className="impact-grid">
        {impacts.map((impact, index) => (
          <div key={index} className="impact-card" style={{ '--delay': `${0.4 + index * 0.15}s` } as React.CSSProperties}>
            <div className="impact-icon">{impact.icon}</div>
            <h4 className="impact-metric">{impact.metric}</h4>
            <p className="impact-detail">{impact.detail}</p>
          </div>
        ))}
      </div>

      <h3 className="highlights-section-title">Where I&apos;ve Made It Happen</h3>
      <div className="journey-row">
        {journey.map((stop, index) => (
          <div key={index} className="journey-card" style={{ '--delay': `${0.8 + index * 0.15}s` } as React.CSSProperties}>
            <div className="journey-icon">{stop.icon}</div>
            <h4 className="journey-company">{stop.company}</h4>
            <p className="journey-role">{stop.role}</p>
            <span className="journey-period">{stop.period}</span>
          </div>
        ))}
      </div>

      <div className="badge-strip">
        {badges.map((badge, index) => (
          <span key={index} className="compliance-badge">
            {badge.icon} {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CareerHighlights;
