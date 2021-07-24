import React from 'react';
import { Container } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import pdf from '../images/NelsonJohnsResume.pdf';

export default function Test() {
  return (
    <Container className='d-flex justify-content-center'>
          <Document file={pdf}>
            <Page pageNumber={1} />
          </Document>
    </Container>
  );
}
