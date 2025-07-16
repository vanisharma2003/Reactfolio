function Cards({title,imgSrc,about,github,live}) {
  return (
    <>
      <div className="card">
        <img src={imgSrc} className="card-img-top card-images"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {about}
          </p>
          <div className="cards-btn">
            <a href={github} className="btn" style={{backgroundColor:'#333333',color:'#FFFFFF'}}>
           <i class="fa-brands fa-github"></i>  Github
          </a>
           <a href={live} className="btn" style={{backgroundColor:'#3B82F6',color:'#FFFFFF'}}>
            <i class="fa-solid fa-link"></i>  Live Link
          </a>
            <a href="#" className="btn" style={{backgroundColor:'#9CA3AF',color:'#FFFFFF'}}>
           <i class="fa-regular fa-share-from-square"></i>   View More
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
