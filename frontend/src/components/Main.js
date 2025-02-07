import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div>
            <h1>Googol Disc</h1>
            <hr></hr>
            {/** add file list component */}
            <div className='container'>
                <div className='sidebar'>
                    <button>Upload</button>
                    <ul>
                        <li>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            My Disc
                        </li>
                        <li>Shared with me</li>
                        <li>Starred</li>
                        <li>Recent</li>
                        <li>Trash</li>
                    </ul>
                </div>
                <div className='main'>
                    <div className='grid-container'>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>
                        <div className='grid-item'>
                            <img src='https://img.icons8.com/?size=100&id=84003&format=png' className='folder-icon'></img>
                            File
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;