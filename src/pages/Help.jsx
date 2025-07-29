import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  InputGroup,
  Accordion,
  Tabs,
  Tab
} from 'react-bootstrap';

import {
  BsSearch,
  BsHeart,
  BsXCircle,
  BsStar,
  BsClock,
  BsBook,
  BsCameraVideo,
  BsQuestionCircle,
  BsChatDots,
  BsPeople,
  BsTelephone,
  BsEnvelope
} from 'react-icons/bs';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <Layout>
      <div className="help-page py-5" style={{ background: '#f9fafb', minHeight: '100vh' }}>
        <Container>
          {/* Header */}
          <div className="text-center mb-4">
            <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
              <div className="bg-primary text-white p-2 rounded">
                <BsHeart />
              </div>
              <Badge bg="light" text="primary">Help & Support</Badge>
            </div>
            <h2 className="fw-bold">We're Here to Help You Succeed</h2>
            <p className="text-muted">
              Find answers, get support, and connect with a community of amazing women entrepreneurs.
            </p>
          </div>

          {/* Search */}
          <InputGroup className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            <InputGroup.Text><BsSearch /></InputGroup.Text>
            <Form.Control
              placeholder="Search for help articles, tutorials, FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button variant="outline-secondary" onClick={() => setSearchQuery('')}>
                <BsXCircle />
              </Button>
            )}
          </InputGroup>

          {/* Tabs */}
          <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-5 justify-content-center">
            <Tab eventKey="faq" title="FAQs" />
            <Tab eventKey="tutorials" title="Tutorials" />
            <Tab eventKey="categories" title="Categories" />
            <Tab eventKey="contact" title="Contact Us" />
          </Tabs>

          {/* FAQs */}
          {activeTab === 'faq' && (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I publish my website?</Accordion.Header>
                <Accordion.Body>
                  Go to the dashboard, click on "Publish", and choose your domain or subdomain.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I use a custom domain?</Accordion.Header>
                <Accordion.Body>
                  Yes! You can connect your custom domain from settings under the "Domains" section.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}

          {/* Tutorials */}
          {activeTab === 'tutorials' && (
            <Row className="g-4">
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <BsStar size={24} className="mb-2" />
                    <Card.Title>Getting Started</Card.Title>
                    <Card.Text>Set up your profile, choose a template, and launch your site in minutes.</Card.Text>
                    <Button variant="primary" size="sm">Watch Video</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <BsClock size={24} className="mb-2" />
                    <Card.Title>Customize Your Store</Card.Title>
                    <Card.Text>Add products, set prices, and personalize your online store easily.</Card.Text>
                    <Button variant="primary" size="sm">Watch Video</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {/* Categories */}
          {activeTab === 'categories' && (
            <Row className="g-4 text-center">
              {[BsBook, BsCameraVideo, BsQuestionCircle, BsChatDots, BsPeople].map((Icon, idx) => (
                <Col key={idx} xs={6} md={4} lg={3}>
                  <Card className="p-4 h-100 shadow-sm">
                    <Icon size={30} className="mb-2 text-primary" />
                    <Card.Text>{Icon.name.replace(/Bs/, '').replace(/([A-Z])/g, ' $1')}</Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {/* Contact Us */}
          {activeTab === 'contact' && (
            <Row className="text-start justify-content-center">
              <Col md={6}>
                <Card className="p-4 shadow-sm">
                  <Card.Title className="mb-3">Need Personal Assistance?</Card.Title>
                  <Card.Text className="mb-2">
                    <BsTelephone className="me-2" /> Call us: <strong>+91-999-888-7777</strong>
                  </Card.Text>
                  <Card.Text>
                    <BsEnvelope className="me-2" /> Email: <strong>support@site-sakhi.com</strong>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Send a Message</Button>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default Help;
