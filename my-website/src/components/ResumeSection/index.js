import React, {useState} from 'react'
import { ResumeContainer } from "./ResumeElements"
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'
import pdfFile from './ReneeHammonsResume.pdf'


const ResumeSection = () => {
    const [defaultPdfFile] = useState(pdfFile)
    const defaultLayoutPluginInstance = defaultLayoutPlugin()

    return (
        <ResumeContainer id="resume">
            {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}
        </ResumeContainer>
    )
}

export default ResumeSection
