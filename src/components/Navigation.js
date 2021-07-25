import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const styles = {
	navLinkActive: {
		color: '#FFFFFF',
		fontFamily: 'LibreFranklin'
	},
	navLink: {
		color: '#ffffffb4',
		fontFamily: 'LibreFranklin'
	}
}

export default function Navigation({ currentPage, handlePageChange }) {
	return (

			<Nav>
				<Nav.Link
					onClick={() => handlePageChange('/')}
					style={currentPage === '/' ? styles.navLinkActive : styles.navLink }>
						About Me
				</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('work')}
					style={currentPage === 'work' ? styles.navLinkActive : styles.navLink }>
					Portfolio
				</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('contact')}
					style={currentPage === 'contact' ? styles.navLinkActive : styles.navLink }>
					Contact
				</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('resume')}
					style={currentPage === 'resume' ? styles.navLinkActive : styles.navLink }>
					Resume
				</Nav.Link>
			</Nav>
			
	);
};

