import React from 'react';
import './Features.css'; // Optional CSS file for custom styling


const features = [
    {
        icon: "📦",
        title: "No-Code Website Builder",
        description: "Create beautiful business websites without writing a single line of code."
    },
    {
        icon: "🚀",
        title: "Instant Hosting",
        description: "Your website is hosted instantly, no setup required."
    },
    {
        icon: "📊",
        title: "Visitor Analytics",
        description: "Track who’s visiting your site and where they’re coming from."
    },
    {
        icon: "💬",
        title: "Chat Support",
        description: "We offer real-time chat to guide you anytime."
    }
];

const testimonials = [
    {
        rating: 5,
        text: "SiteSakhi helped me launch my fashion store in one day!",
        name: "Priya Sharma",
        business: "Fashionpreneur"
    },
    {
        rating: 4,
        text: "A must-have for every woman with a dream.",
        name: "Anita Verma",
        business: "Home Bakery"
    },
    {
        rating: 5,
        text: "The easiest way to go digital without tech stress!",
        name: "Sneha Iyer",
        business: "Freelance Designer"
    }
];

const Features = () => {
    const onGetStarted = () => {
        alert('Get Started Clicked!');
    };

    return (
        <>
            {/* Why Choose Section */}
            <section className="why-choose">
                <div className="container2">
                    <h2 className="mb-3">Why Women Entrepreneurs Choose SiteSakhi</h2>
                    <p className="subtitle">
                        We've removed all the barriers that keep women entrepreneurs from getting online.
                        Focus on your business, let site-sakhi handle the tech.
                    </p>
                    <div className="features">
                        {features.map((feature, idx) => (
                            <div className="feature-card" key={idx}>
                                <div className="card h-100 shadow-sm text-center p-3">
                                    <div className="display-6 mb-3">{feature.icon}</div>
                                    <h5 className="card-title">{feature.title}</h5>
                                    <p className="card-text text-muted">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-5 text-white text-center">
                <div className="container">
                    <h2 className="mb-3 fw-bold">Loved by Women Entrepreneurs</h2>
                    <p className="mb-4 lead">Join thousands who've built their dream websites with Site-Sakhi</p>

                    <div className="testimonial-scroll-container mx-auto">
                        {testimonials.map((t, idx) => (
                            <div className="card testimonial-card bg-white text-dark" key={idx}>
                                <div className="mb-2">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <span key={i} className="text-warning">&#9733;</span>
                                    ))}
                                </div>
                                <p>"{t.text}"</p>
                                <h6 className="mt-3 mb-0">{t.name}</h6>
                                <small className="text-muted">{t.business}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section
                className="cta-section"
                style={{ background: "linear-gradient(to right, #98b7e4f1, #b1b4a3ff, #e3c6d4ff)" }}
            >
                <div className="container1">
                    <h2 className="mb-3">Ready to Build with Your Digital Companion?</h2>
                    <p className="mb-4">
                        Join the community of successful women entrepreneurs who chose site-sakhi to take control of their digital future.
                    </p>
                    <button className="btn btn-light text-primary px-4 py-2" onClick={onGetStarted}>
                        Start Your Journey with SiteSakhi &rarr;
                    </button>
                </div>
            </section>
        </>
    );
};

export default Features;
