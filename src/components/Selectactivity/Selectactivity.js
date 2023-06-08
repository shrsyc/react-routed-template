import React from 'react';

export default function Selectactivity() {
    return (
      <>
        <div className='container'>

            <form>
                <label for="cars">Choose a Activity:</label>
                <select name="cars" id="cars">
                    <option value="PaperPresentation">Paper Presentation</option>
                    <option value="Project">Project</option>
                    <option value="Seminars">Seminars</option>
                    <option value="Workshops">Workshops</option>
                </select>
            </form>
            
        </div>
      </>
    );
  }