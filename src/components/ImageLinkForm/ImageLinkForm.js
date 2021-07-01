import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return(
        <div className='pa4'>
            <p className='f3'>{'This app uses AI to detect faces in the URL\'s you paste below'}</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='center w-70 pa2 f4' type='text' onChange={onInputChange}/>
                    <button className='btn w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                </div>               
            </div>
        </div>    
    );   
}

export default ImageLinkForm;