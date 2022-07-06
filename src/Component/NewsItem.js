import React from 'react'


 const NewsItem =(props)=> {
  

   
  
  
    let {title,description,imageurl,newsUrl,Author,date}=props;
    return (
      <div className="card"  >
      <img src={imageurl?imageurl:"https://images.hindustantimes.com/tech/img/2022/04/04/1600x900/Web_capture_4-4-2022_81838_pixabay.com_1649040590804_1649040612743.jpeg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {title}
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {Author?Author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
      </div>
    </div>
    )
  
}

export default NewsItem