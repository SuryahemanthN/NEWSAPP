import React from 'react'

const NewsItem = (props)=> {
  
    let {title,description,imageURL,newsURL,author,date,source}=props;
    return (
      <div>
        <div class="card my-2" style={{width: "18rem"}}>
  <img src={imageURL?imageURL:"https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg?fit=1920%2C1080"} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}...</h5>
    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex:'1'}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
    <p class="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on{" "} {new Date(date).toGMTString()}</small></p>
    <a href={newsURL} target='__blank' class="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem;
