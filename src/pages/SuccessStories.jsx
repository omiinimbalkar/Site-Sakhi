import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Card, FormControl, InputGroup } from "react-bootstrap";
import Layout from "../components/Layout/Layout";
import {
  BsStarFill,
  BsQuote,
  BsBoxArrowUpRight,
  BsSearch,
  BsX
} from "react-icons/bs";

function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);
  if (error)
    return (
      <div
        className={`bg-secondary text-white d-flex align-items-center justify-content-center ${className}`}
        style={{ minHeight: "150px" }}
      >
        Image Not Found
      </div>
    );
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

const SuccessStories = ({ onGetStarted }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("testimonials");

  const featuredStories = [
    {
      name: "Sarah Chen",
      business: "Handmade Jewelry by Sarah",
      category: "e-commerce",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      quote:
        "site-sakhi transformed my hobby into a thriving business. I went from selling at local markets to having customers worldwide!",
      results: {
        revenue: "300% increase",
        customers: "500+ new customers",
        time: "Built in 8 minutes",
      },
      websiteUrl: "handmadebysarah.com",
      beforeAfter: {
        before: "Selling only at weekend markets",
        after: "International online business with $50K annual revenue",
      },
      story:
        "I was scared of technology and thought building a website was impossible. site-sakhi made it so simple that I had my store up and running in less than 10 minutes. Now I ship my jewelry worldwide!",
      keywords: ["jewelry", "handmade", "e-commerce", "international", "craft", "accessories"],
    },
  ];

  const businessTypes = [
    { id: "all", label: "All Stories", count: 150 },
    { id: "e-commerce", label: "E-commerce", count: 45 },
    { id: "services", label: "Professional Services", count: 38 },
    { id: "food", label: "Food & Catering", count: 22 },
    { id: "health", label: "Health & Wellness", count: 28 },
    { id: "creative", label: "Creative Services", count: 17 },
    { id: "beauty", label: "Beauty & Fashion", count: 15 },
    { id: "education", label: "Education", count: 12 },
  ];

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const filteredContent = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const filterItems = (items) => {
      let filtered = items;
      if (selectedCategory !== "all") {
        filtered = filtered.filter((item) => item.category === selectedCategory);
      }
      if (query) {
        filtered = filtered.filter((item) => {
          const searchableText = [
            item.name,
            item.business,
            item.quote,
            item.story,
            item.location,
            ...(item.keywords || []),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchableText.includes(query);
        });
      }
      return filtered;
    };

    return {
      featuredStories: filterItems(featuredStories),
      // Add other arrays filtered here as needed
    };
  }, [searchQuery, selectedCategory]);

  const getTotalResults = () => {
    return filteredContent.featuredStories.length;
  };

  return (
    <Layout>

      <Container className="py-5">
        {/* Search and Filter Controls */}
        <div className="mb-4">
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search by business type, industry, or result..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button variant="outline-secondary" onClick={clearSearch}>
                <BsX />
              </Button>
            )}
          </InputGroup>

          <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
            {businessTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedCategory === type.id ? "primary" : "outline-secondary"}
                size="sm"
                onClick={() => setSelectedCategory(type.id)}
              >
                {type.label} ({type.count})
              </Button>
            ))}
          </div>

          {(searchQuery || selectedCategory !== "all") && (
            <div className="mb-3 text-center">
              <Button variant="outline-danger" size="sm" onClick={clearFilters}>
                <BsX className="me-1" />
                Clear all filters
              </Button>
            </div>
          )}

          {(searchQuery || selectedCategory !== "all") && (
            <div className="text-center text-muted mb-3">
              {getTotalResults() === 0 ? (
                <span>No stories found matching your criteria.</span>
              ) : (
                <span>
                  Showing {getTotalResults()} success stor
                  {getTotalResults() !== 1 ? "ies" : "y"}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory !== "all" && ` in ${businessTypes.find((t) => t.id === selectedCategory)?.label}`}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Featured Success Stories */}
        {filteredContent.featuredStories.length > 0 && (
          <Row xs={1} md={3} className="g-4">
            {filteredContent.featuredStories.map((story, index) => (
              <Col key={index}>
                <Card>
                  <Card.Header>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="rounded-circle"
                        style={{ width: 64, height: 64, objectFit: "cover" }}
                      />
                      <div>
                        <Card.Title className="mb-0">{story.name}</Card.Title>
                        <Card.Subtitle className="text-muted">{story.business}</Card.Subtitle>
                        <div className="text-warning">
                          {[...Array(5)].map((_, i) => (
                            <BsStarFill key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-light bg-opacity-50 rounded p-3 mt-3">
                      <BsQuote className="text-primary mb-2" />
                      <em>"{story.quote}"</em>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row className="text-center mb-3">
                      <Col>
                        <div className="fw-bold text-primary">{story.results.revenue}</div>
                        <small className="text-muted">Revenue</small>
                      </Col>
                      <Col>
                        <div className="fw-bold text-primary">{story.results.customers}</div>
                        <small className="text-muted">Growth</small>
                      </Col>
                      <Col>
                        <div className="fw-bold text-primary">{story.results.time}</div>
                        <small className="text-muted">Build Time</small>
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <small className="text-muted">BEFORE</small>
                      <div>{story.beforeAfter.before}</div>
                      <small className="text-muted mt-2 d-block">AFTER</small>
                      <div className="fw-bold text-primary">{story.beforeAfter.after}</div>
                    </div>
                    <Button
                      variant="outline-primary"
                      href={"https://" + story.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-100"
                    >
                      <BsBoxArrowUpRight className="me-2" />
                      Visit {story.websiteUrl}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Layout>

  );

};

export default SuccessStories;
