import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
    return (
        <Container fluid>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Portfolio Overview</Card.Title>
                            {/* Add content for portfolio overview */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Investment Logs</Card.Title>
                            {/* Add content for investment logs */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
