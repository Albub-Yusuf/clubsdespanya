import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import male from '../../../src/male.png';
// import female from '../../src/female.png';
import male from '../../male.png';
import female from '../../female.png';

const TeamDetails = () => {
    const id = useParams();
    const teamId = id.id;
    

    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(()=> {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setTeamDetails(data.teams))

    },[teamId])



    
        let idTeam, strLeague,strCountry, strFacebook, strTwitter, strDescriptionEN,strGender,strYoutube;
        teamDetails.map(td => {

            return {idTeam, strLeague,strCountry, strFacebook, strTwitter, strDescriptionEN,strGender,strYoutube} = td;

        })

        
        let teamPhoto;
    

        if(strGender === "Male"){

             
                teamPhoto = <img style={{width:'40%'}} src={male} />

        }
        else if(strGender === "Female"){

            teamPhoto = <img style={{width:'40%'}} src={female} />
        }
  

    return (
        <Container>
            <div>
            <h3>League : {strLeague}</h3>
            <p>Country : {strCountry}</p>
            <p>Gender : {strGender}</p>
        
            {
              teamPhoto
            }
        

            <p>{strDescriptionEN}</p>
        </div>
        </Container>
    );
};

export default TeamDetails;