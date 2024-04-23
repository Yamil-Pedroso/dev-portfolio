import React from 'react'; 
import DropFileInput from "./components/DropFilesBox";

interface DropFilesAppProps {
}

const DropFilesApp: React.FC<DropFilesAppProps> = () => {
    const onFileChange = (files: File[]) => {
        console.log(files);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
        }}>
            <p
             style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#777',
            }}
            >
                Upload your File: 
            </p>
            <DropFileInput
                onFileChange={onFileChange} 
            />
        </div>
    );
}

export default DropFilesApp;
