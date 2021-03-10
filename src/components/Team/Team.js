import React from 'react';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const cardStyle = {

    width: '330px',
    height: '322px',
    background: '#FFF',
    borderRadius: '4px',
    textAlign : 'center',
    margin : '20px',
    color: '#0B0C10'
    
}


const Team = (props) => {
    const {idTeam,strTeam,strSport,strTeamBadge} = props.team;
    return (
        <div style={cardStyle}>
           <div style={{paddingTop:'40px'}}>
           <div className="club-logo">
                <img style={{width:'30%'}} src={strTeamBadge} alt="logo"/>
            </div>
            <br></br>
            <div className="club-info">
                <h5><strong>{strTeam}</strong></h5>
                <p><small style={{color:'#656565'}}>Sports Type : {strSport}</small></p>
                <Link to={`/teams/${idTeam}`}><Button className="btn-explore">Explore &nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                <br></br>              
            </div> 
           </div>
        </div>
    );
};

export default Team;