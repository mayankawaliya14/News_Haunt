import React from 'react'

const NewsIteams =(props)=>{
    
      let {title, description, ImgUrl, NewsUrl, date, Auther, Source} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}> 
        <span className="badge rounded-pill bg-danger" style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>{Source}</span>
  <img src={!ImgUrl?"https://askleo.com/wp-content/uploads/2004/06/no_image-300x245.jpg?ezimgfmt=rs:300x245/rscb1/ng:webp/ngcb1":ImgUrl} className="card-img-top" alt="This is img alt"/>
  <div className="card-body">
    <h5 className="card-title">{title}{title.length < 20?" ":"..."}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!Auther?'Unknown':Auther} {new Date(date).toGMTString()}</small></p>
    <a href={NewsUrl} rel="noreferrer" className="btn btm-sm btn-dark" target='_blank'>Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsIteams
