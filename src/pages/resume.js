import React from 'react';
import { Container } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import pdf from '../images/NelsonJohnsResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <Container className='mb-5 d-flex justify-content-center'>
          <Document file={pdf}  onLoadError={console.error} className='shadow-lg p-3 bg-white rounded'>
            <Page pageNumber={1} />
          </Document>
    </Container>
  );
}
