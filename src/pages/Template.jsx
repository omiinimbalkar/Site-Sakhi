import React, { useState, useMemo } from "react";
import { Search, X, Filter } from "lucide-react"; // Icons from lucide-react
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./Template.css"; // Your custom CSS
import Layout from "../components/Layout/Layout"

// Sample template data
const templates = [
  {
    id: "boutique",
    name: "Boutique Elegance",
    category: "E-commerce",
    description: "Perfect for fashion, jewelry, and lifestyle brands",
    features: ["Product showcase", "Online store", "Brand storytelling", "Shopping cart", "Payment integration"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    popular: true
  },
  // Add other templates here as needed
];

// Categories for filter buttons
const categories = [
  "All",
  "E-commerce",
  "Health & Wellness",
  "Creative Services",
  "Professional Services",
  "Food & Beverage",
  "Fitness & Health",
  "Beauty & Fashion",
  "Education & Training",
  "Non-profit"
];

const Template = ({ onBack, onSelectTemplate }) => {
  // State for search input, selected category, and filter toggle for mobile
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  ``
  // Memoized filtered templates based on search and category
  const filteredTemplates = useMemo(() => {
    let filtered = templates;

    // Filter by category if not "All"
    if (selectedCategory !== "All") {
      filtered = filtered.filter(t => t.category === selectedCategory);
    }

    // Filter by search query (case insensitive)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.features.some(f => f.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Clear search input
  const clearSearch = () => setSearchQuery("");

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <Layout>
      <div className="template-selector min-vh-100  top-container">
        {/* Header with back button and title */}
        <header className="container py-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between">
          <button className="btn btn-outline-primary mb-3 mb-md-0" onClick={onBack}>
            &larr; Back
        </button>
        <h2 className="mb-0">Choose Your Perfect Template</h2>

        {/* Mobile filter toggle button */}
        <button
          className="btn btn-outline-secondary d-md-none"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={16} /> Filters
        </button>
      </header>

      {/* Filters section: visible on desktop, toggleable on mobile */}
      <section className={`container mb-4 ${showFilters ? "" : "d-none d-md-block"}`}>
        {/* Search bar */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-white"><Search size={16} /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search templates, categories, or features..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="btn btn-outline-secondary" onClick={clearSearch}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category filter buttons */}
        <div className="mb-2">
          {categories.map(category => (
            <button
              key={category}
              className={`btn btn-sm me-2 mb-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

          {/* Clear filters button */}
          {(searchQuery || selectedCategory !== "All") && (
            <button className="btn btn-link text-muted" onClick={clearFilters}>
              <X size={16} /> Clear filters
            </button>
          )}
        </div>

        {/* Filter results info */}
        <p className="text-muted">
          Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? "s" : ""}
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== "All" && ` in category "${selectedCategory}"`}
        </p>
      </section>

      {/* Templates grid */}
      <main className="container">
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <Search size={48} className="mb-3" />
            <h4>No templates found</h4>
            <p>Try adjusting your search or filters.</p>
            <button className="btn btn-primary me-2" onClick={clearFilters}>
              Clear Filters
            </button>
            <button className="btn btn-outline-primary" onClick={clearSearch}>
              Clear Search
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredTemplates.map(template => (
              <div key={template.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 template-card shadow-sm">
                  {/* Template image */}
                  <img
                    src={template.image}
                    className="card-img-top"
                    alt={template.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  {/* Card body with details */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{template.name}</h5>
                    <p className="card-text text-muted">{template.description}</p>

                    {/* Features list */}
                    <ul className="list-unstyled mt-3 mb-3 template-features">
                      {template.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                      {template.features.length > 3 && (
                        <li className="text-muted">+ {template.features.length - 3} more features</li>
                      )}
                    </ul>

                    {/* Footer with category badge and select button */}
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary">{template.category}</span>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => onSelectTemplate(template)}
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  </Layout>
  );
}
export default Template;
