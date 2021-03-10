import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import male from '../../male.png';
import female from '../../female.png';
import banner from '../../bannerImagess/banner88.png';
import twitter from '../../Twitter.png';
import facebook from '../../Facebook.png';
import youtube from '../../YouTube.png';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFutbol, faFlag, faGende, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const TeamDetails = () => {
    const id = useParams();
    const teamId = id.id;


    const [teamDetails, setTeamDetails] = useState([]);
    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams))

    }, [teamId])




    let idTeam, strLeague, strAlternate, intFormedYear, strSport, strCountry, strFacebook, strTwitter, strDescriptionEN, strGender, strYoutube, strTeamBadge;
    teamDetails.map(td => {

        return { idTeam, intFormedYear, strAlternate, strSport, strLeague, strCountry, strFacebook, strTwitter, strDescriptionEN, strGender, strYoutube, strTeamBadge } = td;

    })

    console.log(strFacebook, '--', strTwitter, '--', strYoutube);

    let youtubeLink;
    let twitterLink;
    let facebookLink;

    if(strYoutube || strFacebook || strTwitter){
        youtubeLink = 'https://'+strYoutube;
        twitterLink = 'https://'+strTwitter;
        facebookLink = 'https://'+strFacebook;

    }else{
        youtubeLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';
        twitterLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';
        facebookLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';

    }





    let teamPhoto;
    let gender;
    let teamInfoStyle;




    if (strGender === "Male") {

        teamInfoStyle = { color: '#fff', display: 'flex', justifyContent: 'space-around', borderRadius: '20px', padding: '20px', backgroundColor: '#3A42FF', marginTop: '25px' }
        teamPhoto = <img style={{ width: '100%' }} src={male} />
        gender = <FontAwesomeIcon icon={faMars}></FontAwesomeIcon>

    }
    else if (strGender === "Female") {

        teamInfoStyle = { color: '#fff', display: 'flex', justifyContent: 'space-around', borderRadius: '20px', padding: '20px', backgroundColor: '#FC4D57', marginTop: '25px' }
        gender = <FontAwesomeIcon icon={faVenus}></FontAwesomeIcon>
        teamPhoto = <img style={{ width: '100%', borderRadius: '20px' }} src={female} />
    }

    const bannerStyle = {

        width: '100%',
        height: '362px',
        textAlign: 'center',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center center',
        color : '#fff',
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: '52px',
        position:'relative',
       


}

    return (


        <div>
            <div style={bannerStyle}>
               <div style={{width: '100%',background: 'rgba(0,0,0,.6)',position:'absolute',zIndex:'2'}}> <Link to="/home"><img style={{ width: '180px', height: '180px' }} src={strTeamBadge} alt="logo" /></Link></div>
            </div>

            <Container>
                <Container style={teamInfoStyle}>
                    <div style={{ width: '70%' }}>
                        <h3>{strAlternate}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;  Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> &nbsp;  Country : {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> &nbsp;  Sport Type : {strSport}</p>
                        <p>{gender} &nbsp;  Gender : {strGender}</p>
                    </div>
                    <div style={{ width: '30%', float: 'right' }}>
                        {
                            teamPhoto
                        }
                    </div>
                </Container>

                <Container style={{ marginTop: '25px' ,color:'#ffffff'}}>
                    <p>{strDescriptionEN}</p>
                    <br></br>
                    <p>{strDescriptionEN}</p>
                </Container>

                <Container style={{ marginTop: '25px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '70px', minHeight: '70px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a target="_blank" href={twitterLink}><img style={{ width: '80%' }} src={twitter} alt="twitter"></img></a>
                        </div>
                        <div style={{ width: '70px', minHeight: '70px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a target="_blank" href={facebookLink}> <img style={{ width: '80%' }} src={facebook} alt="Facebook"></img></a>
                        </div>
                        <div style={{ width: '70px', minHeight: '70px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <a target="_blank" href={youtubeLink}> <img style={{ width: '80%' }} src={youtube} alt="Youtube"></img></a>

                        </div>
                    </div>

                </Container>

                <br /><br /><br />

            </Container>

        </div>
    );
};

export default TeamDetails;