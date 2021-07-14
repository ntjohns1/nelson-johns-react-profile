import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Navigation() {
	return (
		<>
			<Nav className='mr-auto'>
				<Nav.Link href='/'><h3>About Me</h3></Nav.Link>
				<Nav.Link href='/work'><h3>Portfolio</h3></Nav.Link>
				<Nav.Link href='/contact'><h3>Contact</h3></Nav.Link>
				<Nav.Link href='/resume'><h3>Resume</h3></Nav.Link>
			</Nav>
		</>
	);
};

