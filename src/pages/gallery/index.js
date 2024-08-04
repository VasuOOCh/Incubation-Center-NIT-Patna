import React from 'react';
import './Gallery.css';
import img from './sell_bg.png'

import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <>
    <div id="gallery">
      <p className='h11'> Gallery</p>
      <div className="gallery1">
        <div className='gallerydiv'>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          
        </div>
        <div className='gallerydiv'>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv'>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        <div className='gallerydiv'>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>
          <div className='imgdiv'>
          <img src={img} alt="img" className='imgg'/>
          </div>

          
        </div>
        

      </div>
    
  <Link to="/gallery" className="bttnn">View More</Link>
  </div>
  </>
  );
};

export default Gallery;
