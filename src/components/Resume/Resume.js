import React, { useState } from 'react';
import pdf from '../../assets/resume.pdf'
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentSuccess = () => {
    setPageNumber(numPages)
  }
  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentSuccess}>
            <Page pageNumber={1} scale={1.5} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
    </div>
  )
}