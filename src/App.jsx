import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function App() {
  let districts = [
    {
      id: 1,
      title: 'thiruvananthapuram',
      description: 'capital of the Indian state of Kerala',
      image: '/image/thiru.jpeg',
    },
    {
      id: 2,
      title: 'kottayam',
      description: 'Flanked by the Western Ghats on the east',
      image: '/image/kotta.jpeg',
    },
    {
      id: 3,
      title: 'kollam',
      description: 'fourth largest city in Kerala',
      image: '/image/kollam.jpeg',
    },
    {
      id: 4,
      title: 'alappuzha',
      description: 'city on the Laccadive Sea',
      image: '/image/alap.jpeg',
    },
    {
      id: 5,
      title: 'idukki',
      description: 'is a densely forested, mountainous region',
      image: '/image/idukki.jpeg',
    },
    {
      id: 6,
      title: 'thrissur',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 7,
      title: 'kozhikode',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 8,
      title: 'palakkad',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 9,
      title: 'kannur',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 10,
      title: 'kasargode',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 11,
      title: 'pathanamthitta',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 12,
      title: 'malapuram',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
    {
      id: 13,
      title: 'ernakulam',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
  
    {
      id: 14,
      title: 'wayanad',
      description: "It's known for sacred sites and colorful festivals.",
      image: '/image/thris.jpeg',
    },
  ];

  return (
    <div className="bg-dark text-white">
    <Container >
      <h1 className='d-flex justify-content-center mt-5'>DISTRICTS IN KERALA</h1>
      <Row>
        {districts.map((district,index) => {
          return (
          <Col sm={4} key={index} className='mt-5 '>
            <Card className="bg-dark text-white">
              <Card.Img style={{height:"13rem"}} variant="top" src={district.image} />
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>{district.title}</Card.Title>
                <Card.Text style={{height:"2rem"}}>
                  {district.description}
                </Card.Text>
                <div className="d-flex justify-content-center">
                <Button variant="primary">more</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )
        })}
      </Row>
    </Container>
    </div>
  );
}


