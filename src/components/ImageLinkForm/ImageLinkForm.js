import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ( { onInputChange, onButtonSubmit } ) => {
    return (
        <div>
            <p className='text-size'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='d-flex justify-content-lg-center justify-content-center'>
                <div className='d-flex justify-content-lg-center justify-content-center pattern p-4'>
                    <input type='text' className='form-control form-control-lg' onChange={onInputChange}/>
                    <button className='btn btn-lg btn-warning ml-1' onClick={onButtonSubmit}>Detect</button> 
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;