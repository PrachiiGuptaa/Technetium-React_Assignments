import React, {useRef} from 'react';
import './PickTheFileButton.css'

function FilePickerButton() {
    const fileInputRef = useRef(null);

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    }

    return(
        <>
        <button className='btn' onClick={handleFileButtonClick}>Pick the File</button>
        <input className='inputBox' ref={fileInputRef} type='file'/>
        </>
    )    
}

export default FilePickerButton;