import React from 'react';

export default function Uploadlogo() {
    return (
      <>
        <div className='container'>
        <label for="file">Choose a file</label>
        <input type="file" 
               id="photo" 
               name="photo"
               accept=".jpg,.jpeg,.png" />

        </div>
      </>
    );
  }