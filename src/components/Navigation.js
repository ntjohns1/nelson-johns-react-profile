import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const styles = {
	link: {
		color: '#FFFFFF',
		fontFamily: 'LibreFrankilin'
	}
}

export default function Navigation({ currentPage, handlePageChange }) {
	return (
		<Container>
			<Nav>
				<Nav.Link
					onClick={() => handlePageChange('/')}
					className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
					style={styles.link}>About Me
				</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('work')}
					className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
					style={styles.link}>Portfolio</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('contact')}
					className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
					style={styles.link}>
					Contact
				</Nav.Link>
				<Nav.Link
					onClick={() => handlePageChange('resume')}
					className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
					style={styles.link}>
					Resume
				</Nav.Link>
			</Nav>
		</Container>
	);
};

