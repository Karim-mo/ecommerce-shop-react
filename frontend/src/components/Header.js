import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Navbar.Brand href='/' style={{ marginLeft: '1%' }}>
					Adoma Online Shopping
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='/cart'>
							<i className='fas fa-shopping-cart'></i> Cart
						</Nav.Link>
						<Nav.Link href='/login'>
							<i className='fas fa-user'></i> Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
