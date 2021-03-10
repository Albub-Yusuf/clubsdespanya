import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import './NotFound.css';
import lost from '../../images/404.webp';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container fluid className="not-found-wrapper">

            <div className="not-found">
                <img src={lost} alt="page not found"></img>
            </div>
            
            <div className="not-found">
                <Link to="/home"><Button>Back to Home</Button></Link>
            </div>

        </Container>
    );
};

export default NotFound;