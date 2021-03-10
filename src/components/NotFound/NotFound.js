import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import './NotFound.css';
import lost from '../../404-error.gif';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container style={{marginTop:'50px'}} >
        <div>
           
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src={lost} alt="page not found"></img>
        </div>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center',margin: '20px auto'}}>
            <Link to="/home"><Button>Back to Home</Button></Link>
        </div>

    </div>
        </Container>
    );
};

export default NotFound;