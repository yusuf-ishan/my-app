import React from 'react';
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
import './cars.css'
import { Link } from 'react-router-dom';
function Cars() {
    return (
		<div>
		<body style={{backgroundColor:'whitesmoke'}}>
			<Navbar  bg='dark' variant='dark' expand='lg'>
				<NavbarBrand>
					<img alt='' src={require("./logo.jpg")} class="rounded-pill" style={{ width: '40px' }} />
					</NavbarBrand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					
							<li  style={{listStyleType:'none',marginLeft:'30pt'}} >
							<Link to="../react/my-app" style={{textDecoration:'none',color:'gray'}}>Home</Link>
							</li>
							<li style={{listStyleType:'none',marginLeft:'30pt'}} >
								<a style={{textDecoration:'none',color:'gray'}} href="#instock">In Stock</a>
							</li>
							<li style={{listStyleType:'none',marginLeft:'30pt'}}>
								<a style={{textDecoration:'none',color:'gray'}} href="#cs">Coming Soon</a>
							</li>
							<li style={{listStyleType:'none',marginLeft:'30pt'}}>
								<a style={{textDecoration:'none',color:'gray'}} href="#About Us">About Us</a>
							</li>
							
				</Navbar.Collapse>
			</Navbar>
			<br/>
				<h1 style={{marginTop:'0pt', textAlign:'center',color:'darkcyan'}}>Car Geek Automoblie Showroom</h1>
				<br />
				<Container>
				<Row>
					<Col>
					<video className='vid' controls autoPlay muted loop>
						<source src={require("./sh.mp4")} type='video/mp4' />
						</video>
					</Col>
					<Col>
					<Carousel className='car21'  controls={false}>
          <Carousel.Item  className='s2' interval={3000}>
            <img 
              className="d-block w-100" 
              src={require("./cc.jpg")}
              alt="First slide"/>

          </Carousel.Item>
          <Carousel.Item className='s3' interval={3000}>
            <img
              className="d-block w-100"
              src={require("./hc.jpg")}
              alt="Second slide" />

          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={require("./sc.jpg")}
              alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      
					</Col>
				</Row>
				</Container>
				<br/><br/>
		<h1 id="instock" style={{marginTop:'0pt',textAlign:'center',color:'darkcyan'}}>In Stock</h1>
		<br/><br/>
		<Container fluid>
		<MDBRow>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
				<img alt='' src={require("./lam.jpg")} className='w-100'/>
				<h5 class="alert alert-info">Beautiful Bodykit with 700hp engine and 820nm of tourqe, it's the great choice for a car enthusiast</h5>
			</MDBCol>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
			<img alt='' src={require("./mc.jpg")} className='w-100'/>
			<h5 class="alert alert-info">One of the greatest cars ever produced. Only 50 of these beauties are made</h5>
			</MDBCol>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
			<img alt='' src={require("./royce.jpg")} className='w-100'/>
			<h5 class="alert alert-info">World's most luxurious car avalibale for classy men and women</h5> 
			</MDBCol>
		</MDBRow>
		</Container>
		<br/><br/>
		<h1 id="cs" style={{marginTop:'0pt',textAlign:'center',color:'darkcyan'}}>Coming Soon!!</h1>
		<br/>
		<Container fluid>
		<MDBRow>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
				<img alt='' src={require("./lx.jpg")} className='w-100'/>
				
			</MDBCol>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
			<img alt='' src={require("./urus.jpg")} className='w-100'/>
			
			</MDBCol>
			<MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
			<img alt='' src={require("./au.jpg")} className='w-100'/>
			
			</MDBCol>
		</MDBRow>
		</Container>
		<hr/>
		<h1 id='About Us' style={{textAlign:'center',color:'darkcyan'}}>About Us</h1>
		<br/>
		<h6 style={{fontSize:'16pt',marginLeft:'5pt',fontWeight:'500',color:'darkcyan'}}>Country's Biggest Showroom now open 24/7, we sell above average cars in below average prices. we are one of the largest independent dealership groups in country and the continent, so you can either select a newly released 2023 car or an affordable used 2012 car. get a special discount on 4th and 5th february 2023 by using the promo code from your entry ticket.</h6>
				<br /><br />
						<br />
		
		<footer style={{ backgroundColor: '#000000', height: '13vh' }}>
				<Container className='social'>
					<a target="_blank" rel='noreferrer' href='https://www.instagram.com/yusufishan3/'><FontAwesomeIcon icon={faInstagram} /></a>
					<a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC5OqoDo69SO2OQBPyBag-rQ'><FontAwesomeIcon icon={faYoutube} /></a>
					<a target="_blank" rel='noreferrer' href='https://wa.me/+93766618861/'><FontAwesomeIcon icon={faWhatsapp} /></a>
					<h1 style={{ color: 'whitesmoke', fontSize: '10pt' }}>Copyrights Reserved 2023:Car Geek Automobile Showroom</h1>
				</Container>
			</footer>
	</body>		
		</div>
    )
};
export default Cars