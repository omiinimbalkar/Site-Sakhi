import React from 'react';
import Layout from '../components/Layout/Layout';
import { Zap, Smartphone, Palette, Search, ShoppingCart, Shield, CheckCircle, Sparkles, Users, Heart, Mail, BarChart, Globe, ArrowRight } from "lucide-react";
import './Common.css'
// import './FeaturesPage.css'; // Make sure to create this CSS file with styles

const FeaturesPage = ({ onGetStarted }) => {
  const coreFeatures = [
    {
      icon: <Zap size={24} className="text-primary" />,
      title: "10-Minute Setup",
      description: "Professional website ready in minutes, not weeks",
      details: ["Pre-designed templates", "AI-powered content suggestions", "One-click publishing", "No coding required"],
    },
    {
      icon: <Smartphone size={24} className="text-primary" />,
      title: "Mobile-First Design",
      description: "Perfect on phones, tablets, and desktops",
      details: ["Responsive layouts", "Touch-friendly navigation", "Fast loading times", "Mobile optimization"],
    },
    {
      icon: <Palette size={24} className="text-primary" />,
      title: "Brand Customization",
      description: "Make it uniquely yours with easy customization",
      details: ["Custom colors", "Font selection", "Logo upload", "Brand consistency"],
    },
    {
      icon: <Search size={24} className="text-primary" />,
      title: "SEO Optimized",
      description: "Built to be found on Google and search engines",
      details: ["SEO-friendly URLs", "Meta tags", "Site maps", "Performance optimization"],
    },
    {
      icon: <ShoppingCart size={24} className="text-primary" />,
      title: "E-commerce Ready",
      description: "Sell products and services directly from your site",
      details: ["Payment integration", "Product catalogs", "Order management", "Inventory tracking"],
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
      details: ["SSL certificates", "Data encryption", "Regular backups", "GDPR compliant"],
    },
  ];

  const supportFeatures = [
    {
      icon: <Users size={20} className="text-primary" />,
      title: "Community Support",
      description: "Connect with 10,000+ women entrepreneurs",
    },
    {
      icon: <Heart size={20} className="text-primary" />,
      title: "Personal Guidance",
      description: "Like having a tech-savvy friend by your side",
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: "24/7 Help Center",
      description: "Get answers whenever you need them",
    },
    {
      icon: <BarChart size={20} className="text-primary" />,
      title: "Growth Resources",
      description: "Business guides specifically for women entrepreneurs",
    },
  ];

  // For demonstration, a default onGetStarted if not passed via props
  const handleGetStarted = onGetStarted || (() => alert('Get Started clicked!'));

  return (
    <Layout>
      <div className="features-page container py-5">
        {/* Hero Section */}
        <section className="text-center mb-5">
          <span className="badge bg-primary mb-3 d-inline-flex align-items-center px-3 py-2">
            <Sparkles size={16} className="me-1" /> Powerful Features
          </span>
          <h1 className="display-4 fw-bold mb-3">
            Everything You Need to Succeed Online
          </h1>
          <p className="lead text-muted mb-4">
            site-sakhi provides all the tools and features you need to build a professional website that grows your business. No technical skills required.
          </p>
          <button className="btn btn-primary btn-lg px-5" onClick={handleGetStarted}>
            Start Building Now <ArrowRight size={20} className="ms-2" />
          </button>
        </section>

        {/* Core Features Grid */}
        <section className="mb-5">
          <h2 className="h3 text-center mb-4">Core Features</h2>
          <p className="text-center text-muted mb-5">
            Built specifically for women entrepreneurs who want professional results without the complexity
          </p>

          <div className="row g-4">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="feature-icon bg-primary bg-opacity-10 text-primary rounded mb-3 d-inline-flex align-items-center justify-content-center">
                      {feature.icon}
                    </div>
                    <h5 className="card-title fw-bold">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.description}</p>
                    <ul className="list-unstyled mt-3 mb-0">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="d-flex align-items-center mb-2">
                          <CheckCircle size={16} className="text-success me-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-5">
          <h2 className="h3 text-center mb-4">Support & Community</h2>
          <p className="text-center text-muted mb-4">
            You're never alone on your entrepreneurial journey
          </p>
          <div className="row g-4 justify-content-center">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 text-center">
                <div className="p-4 border rounded shadow-sm h-100">
                  <div className="feature-icon bg-primary bg-opacity-10 text-primary rounded mb-3 d-inline-flex align-items-center justify-content-center mx-auto">
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FeaturesPage;
