import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  //document.title=`${this.capitalizeFirstLetter(props.category)} - NewsApp`
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  };
  
  const updateNews=async() =>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cd4a4fd20f584cc7ac7f39075f027219&page=${page}&pageSize=9`;
    setLoading(true);
    let data=await fetch(url);
    props.setProgress(20);
    let parsedData=await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  };
  useEffect(()=>{
    updateNews();
  },[]);
  //async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=53794eb0e8cd44f093dd5f8d7a22c1eb&page=${props.page}&pageSize=10`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    //this.updateNews();
  //}
  const handlePreviousclick=async()=>{
    //console.log(`prev + ${this.state.page}`)
    //  let url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=53794eb0e8cd44f093dd5f8d7a22c1eb&page=${this.state.page-1}&pageSize=10`;
    //  this.setState({loading:true});
    //  let data=await fetch(url);
    //  let parsedData=await data.json();
    //  this.setState({articles:parsedData.articles})
    //  this.setState({
    //    page:this.state.page-1,
    //    loading:false
    //  })
    //await this.setState({page:this.state.page-1});
    setPage(page-1);
    updateNews();
   }
  const handleNextclick=async()=>{
    //console.log(`next + ${this.state.page}`)
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}category=${props.category}&apiKey=53794eb0e8cd44f093dd5f8d7a22c1eb&page=${this.state.page+1}&pageSize=10`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles:parsedData.articles})
    // this.setState({
    //   page:this.state.page+1,
    //   loading:false
    // })
    //await this.setState({page:this.state.page+1})
    setPage(page+1);
    updateNews();
  }
  const fetchMoreData = async() => {  // same as that of infinte scroll
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cd4a4fd20f584cc7ac7f39075f027219&page=${page+1}&pageSize=9`;
    setPage(page+1);
    setLoading(true);
    // this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    
  };
  
    return (
      <div className='container my-4'>
      <h2 className='text-center' style={{margin:"25px 0px"}}>NewsApp- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll  // used from react documentation
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles!==totalResults}
          loader={<Spinner/>}
        >
      <div className='container'>
      <div className='row'>
      {articles?.map((element)=>{  // we are mapping  and we display the articles only after we loaded
        return(<div className='col-md-4' key={element.url}>
        <NewsItem 
        title={element.title?element.title.slice(0,40):""} 
        description={element.description?element.description.slice(0,80):""} 
        imageURL={element.urlToImage} 
        newsURL={element.url}
        author={element.author}
        date={element.publishedAt}
        source={element.source.name}
        />
        </div>);
      })}
      </div>
      </div>
      </InfiniteScroll>
      {/* <div class= "container  d-flex justify-content-between my-4">
      <button type="button" class="btn btn-secondary"  disabled={this.state.page<=1} onClick={this.handlePreviousclick}>&larr; Previous</button>
      <button type="button" class="btn btn-secondary" disabled={this.state.page>=Math.ceil(this.state.totalResults/10)} onClick={this.handleNextclick}>Next &rarr;</button>
      </div> */}
      </div>
    )
  }

News.defaultProps={
  country:"in",
  pageSize:8,
  category:"general"
};
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
};

export default News;