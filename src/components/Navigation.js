import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const styles = {
	link: {
		color: '#FFFFFF'
	}
}

export default function Navigation() {
	return (
			<Nav>
				<Nav.Link href='/' className='font-face-lf' style={styles.link}>About Me</Nav.Link>
				<Nav.Link href='/work' className='font-face-lf' style={styles.link}>Portfolio</Nav.Link>
				<Nav.Link href='/contact' className='font-face-lf' style={styles.link}>Contact</Nav.Link>
				<Nav.Link href='/resume' className='font-face-lf' style={styles.link}>Resume</Nav.Link>
			</Nav>
	);
};

