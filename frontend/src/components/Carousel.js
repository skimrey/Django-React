import React from 'react';



const ImageCarousel = () => {
  return (
    <div id="imageCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://f4.bcbits.com/img/a3653230268_10.jpg" alt="Image 1" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://s3.amazonaws.com/gather.fandalism.com/646253--3F0F099A-8141-48B3-B83600ADD307A9CE--1547729247690--BigSpaces.jpg" alt="Image 2" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a2956946643_10.jpg" alt="Image 3" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a0181476776_10.jpg" alt="Image 4" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a0605578492_10.jpg" alt="Image 5" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a3725315512_10.jpg" alt="Image 6" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a4052421325_10.jpg" alt="Image 7" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a0642159037_10.jpg" alt="Image 8" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a0975016381_10.jpg" alt="Image 9" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a1002934540_10.jpg" alt="Image 10" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://f4.bcbits.com/img/a0242014535_10.jpg" alt="Image 11" className="d-block w-100" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImageCarousel;
