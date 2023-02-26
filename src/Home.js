import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function H1() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
      <Navbar className='nav' bg="light" variant='light' expand="lg">
      <NavbarBrand>
      <img alt='' id="img1" className='rounded-pill' style={{width:"40px"}} src={require("./logo.jpg")}/>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
      <li>
        <Link style={{textDecoration:'none', color:'black',fontWeight:'500',marginLeft:'30pt'}} to="./">HomePage</Link>
      </li>
        <li >
            <Link to="/Cars" style={{textDecoration:'none',color:'black',fontWeight:'500',marginLeft:'30pt'}} target={'_blank'} rel='noreferrer'>Available Cars</Link>
        </li>
      <li>
        <a style={{textDecoration:'none', color:'black',fontWeight:'500',marginLeft:'30pt'}} href='#About Us'>About Us</a>
      </li>
      </Navbar.Collapse>
    </Navbar>
  
      <body className='app-body'>
        <br />
              <h1 style={{color:'whitesmoke'}}>Welcome to Car Geek Automobile Showroom</h1>
              <br/>
        <Container>
        <Row>
          <Col>
          <Carousel className='car1' controls={false}>
          <Carousel.Item className='s2' interval={3000}>
            <img
              className="d-block w-100"
              src={require("./s6.jpg")}
              alt="First slide"/>

          </Carousel.Item>
          <Carousel.Item className='s3' interval={3000}>
            <img
              className="d-block w-100"
              src={require("./s8.jpg")}
              alt="Second slide" />

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={require("./dd.jpg")}
              alt="Third slide" />
          </Carousel.Item>
        </Carousel>
       
        </Col>
        <Col>
        <Carousel className='car2' controls={false}>
          <Carousel.Item  className='s2' interval={3000}>
            <img
              className="d-block w-100" 
              src={require("./s2.jpg")}
              alt="First slide"/>

          </Carousel.Item>
          <Carousel.Item className='s3' interval={3000}>
            <img
              className="d-block w-100"
              src={require("./s3.jpg")}
              alt="Second slide" />

          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={require("./rr.jpg")}
              alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      
        </Col>

      </Row>
        </Container>
        <br/><br/>
        <hr style={{color:'whitesmoke', border:'1px solid'}}/><br/>
        <h1 id="news" style={{color:'whitesmoke' }}>News</h1>
        <br/>
        <Container fluid>
        <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <div id='div' className='bg-image hover-overlay ripple shadow-1-strong rounded'>
          <a rel='noreferrer' target="_blank" href="https://www.autonews.com/video/first-shift/">
            <img alt='' id='gal' src={require("./EV.jpg")} className='w-100' />
            </a>
            <hr/>
            <h3 style={{color:'whitesmoke',textAlign:'left',marginLeft:'',fontWeight:'350'}}>U.S.-made EVs rule the market</h3>
        <ul style={{color:'whitesmoke',marginLeft:'',textAlign:'left'}}>
<li>Tesla captures U.S. luxury crown</li>	
<li>Carvana store license revoked</li>
<li>Mercedes to drop EQ brand</li>
</ul>

          </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
          <a target="_blank" rel='noreferrer' href="https://www.autonews.com/video/automotive-news-video/
automotive-news-video-2023-indy-autonomous-challenge">
            <img alt='' id='gal' src={require("./indy.jpg")} className='w-100' />
            </a>
            <hr/>
            <h3 style={{color:'whitesmoke',fontWeight:'300',marginLeft:'',textAlign:'left'}}>Indy Autonomous Challenge</h3>
<ul style={{color:'whitesmoke',textAlign:'left',marginLeft:''}}>
	<li>Autonomous challenge</li>
	<li>Head-to-Head racing</li>
	<li>University teams compete</li>
  </ul>
            
          </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0' >
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
          <a target="_blank" rel='noreferrer' href="https://www.autonews.com/daily-drive-podcast/daily-drive-podcast-january-13-2023">
            <img alt='' id='gal' style={{marginLeft:'-10pt',marginRight:'-10pt'}} src={require("./tesla.jpg")} className='w-100' />
            </a>
            <hr/>
            <h3 style={{color:'whitesmoke',marginLeft:'',fontWeight:'350'}}>January-13-2023</h3>
		        <p style={{color:'whitesmoke',marginLeft:''}}>Tesla cuts prices across its lineup. plus, a look at the benifets of collaboration between dealership departments.</p>
           
          </div>
        </MDBCol>
      </MDBRow>
      </Container>
      
      <hr style={{color:'whitesmoke'}}/>
      <br/>
      <h1 id="About Us" style={{textalign:'center',color:'whitesmoke'}}>About Us</h1>
      <p className='us' style={{fontSize:'14pt',fontWeight:400,color:'whitesmoke'}}>Country's Biggest Showroom now open 24/7, we sell above average cars in below average prices. we are one of the largest independent dealership groups in country and the continent, so you can either select a newly released 2023 car or an affordable used 2012 car. get a special discount on 4th and 5th march 2023 by using the promo code from your entry ticket.</p>
      <br/>
      <br/>
      <form>
      <h4 style={{fontSize:'10pt',fontFamily:'lovina',color:'whitesmoke'}}>Tell us how we can Improve?</h4>
	<input className='sug' type="text" size="80" style={{height:'50px'}}/>
	<br/><br/>
	<h6 style={{fontSize:'10pt',fontFamily:'lovina',color:'whitesmoke'}}>Enter your e-mail address</h6>
	<input className='em' type="e-mail" />
	<br/><br/>
	<input className='sub' type="submit"/>
      </form>
      <br/>
<br/>
<footer style={{backgroundColor:'#ffffff',height:'13vh'}}>
  <Container className='social'>
    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/yusufishan3/'><FontAwesomeIcon icon={faInstagram}/></a>
    <a target="_blank" rel='noreferrer'  href='https://www.youtube.com/channel/UC5OqoDo69SO2OQBPyBag-rQ'><FontAwesomeIcon icon={faYoutube}/></a>
<a target="_blank" rel='noreferrer' href='https://wa.me/+93766618861/'><FontAwesomeIcon icon={faWhatsapp}/></a>

<h1 style={{color:'black',fontSize:'10pt'}}>Copyrights Reserved 2023:Car Geek Automobile Showroom</h1>

</Container>
</footer>
          </body>
    </>
  );
}

export default H1;
