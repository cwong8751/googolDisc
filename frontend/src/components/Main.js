import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div>
            <h1>My Disc</h1>
            <hr></hr>
            {/** add file list component */}
            <div className='container'>
                <div className='sidebar'>
                    sidebar
                </div>
                <div className='main'>
                    main
                </div>
            </div>
        </div>
    );
};

export default Main;