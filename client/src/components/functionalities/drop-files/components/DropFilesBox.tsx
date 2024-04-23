import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaFileUpload } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import {Container, DropFileInputs, StyledInput, Label, DropFilePreview, PreviewTitle, PreviewItem, ItemImage, ItemInfo, DeleteButton } from './styles';

import { imageConfig } from '../config/ImageConfig'; 

interface DropFileInputProps {
    onFileChange: (fileList: File[]) => void;
}

const DropFileInput = (props: DropFileInputProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const [fileList, setFileList] = useState<File[]>([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFile = e.target.files[0];
            if (newFile) {
                const updatedList = [...fileList, newFile];
                setFileList(updatedList);
                props.onFileChange(updatedList);
            }
        }
    };

    const fileRemove = (file: File) => {
        const updatedList = fileList.filter(item => item !== file);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    };

    return (
        <Container>
            <DropFileInputs
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <Label>
                    <FaFileUpload size="3rem" />
                    <p>Drag & Drop or <span>
                        browse
                        </span></p>
                </Label>
                <StyledInput type="file" onChange={onFileDrop} />
            </DropFileInputs>
            {fileList.length > 0 && (
                <DropFilePreview>
                    <PreviewTitle>Upload ready</PreviewTitle>
                    {fileList.map((item, index) => {
                        const fileType = item.type.split('/')[1].toLowerCase(); 
                        console.log('File type key:', fileType); 
                        const iconSrc = imageConfig[fileType] || imageConfig.default;
                        console.log('Icon source:', iconSrc);
                        return (
                            <PreviewItem key={index}>
                                <ItemImage src={iconSrc} alt={fileType} />
                                <ItemInfo>
                                    <p>{item.name}</p>
                                    <p>{item.size} bytes</p>
                                </ItemInfo>
                                <DeleteButton onClick={() => fileRemove(item)}>
                                    <MdClose size="1.5rem" />
                                </DeleteButton>
                            </PreviewItem>
                        );
                    })}
                </DropFilePreview>
            )}
        </Container>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func.isRequired
};

export default DropFileInput;
