import fileDefault from '../assets/file-blank-solid-240.png';
import fileCSS from '../assets/file-css-solid-240.png';
import filePdf from '../assets/file-pdf-solid-240.png';
import filePng from '../assets/file-png-solid-240.png';

interface ImageConfig {
    default: string;
    pdf: string;
    png: string;
    css: string;
    [key: string]: string;
}

export const imageConfig: ImageConfig = {
    default: fileDefault,
    pdf: filePdf,
    png: filePng,
    css: fileCSS
}