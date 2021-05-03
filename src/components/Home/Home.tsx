import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return <main role="main" className="container-fluid">
        <div className="pt-3 pb-2 mb-3 border-bottom border-secondary text-center">
            <h1 className="h3">Overview</h1>
        </div>
        <Row xs="1" md="2" lg="3" xl="4">
            <Col className="mb-3">
                <Card bg="darksecondary">
                    <Card.Body>
                        This is some text, yay!
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mb-3">
                <Card bg="darksecondary">
                    <Card.Body>
                        This is some text, yay!
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mb-3">
                <Card bg="darksecondary">
                    <Card.Body>
                        This is some text, yay!
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mb-3">
                <Card bg="darksecondary">
                    <Card.Body>
                        This is some text, yay!
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mb-3">
                <Card bg="darksecondary">
                    <Card.Body>
                        This is some text, yay!
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </main>;
}
