import React, { useState , useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'


const News =(props)=> {
 


  const [articles, setArticles]=useState([])
  const [page, setPage]=useState(1)
  const [loading, setLoading]=useState(false)
  const [totalResults, setTotalResults]=useState(0)
 
    // document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsPoint `;

  

  const updateNews=async()=> {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(10);
    setLoading(true) ;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    console.log(parsedData);
      setArticles(parsedData.articles)
      setLoading(false)
      setPage(1)
      setTotalResults(parsedData.totalResults)
  
    props.setProgress(100);
    
  } 
useEffect(() => {
  updateNews();
  }, [])


 

  /*handlePrevClick=async()=>{
    set({
      page: .page - 1,
                  
    }); updateNews();
  }*/


  /* handleNextClick=async()=>{
      set({
                    page: .page + 1,
      });  updateNews();
     console.log("next")}
     */

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    
        setArticles(articles.concat(parsedData.articles))
        setPage(page + 1)
        setTotalResults(parsedData.totalResults)
  
  }

    



  
    return (
      <>

        <h2 className="text-center my-3">NewsPoint-Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h2>


        <div className="text-center">
          {loading && <div className="spinner-border" role="status" ></div>}
        </div>


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<div className="text-center">{loading && <div className="spinner-border" role="status"></div>}</div>}
        >
         
         
         
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>

                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      newsUrl={element.url}
                      Author={element.author}
                      date={element.publishedAt}
                    />
                  </div>

                );
              })}
            </div>
          </div>
       
       
       
        </InfiniteScroll>



      </>
    );

  }


News.defaultProps ={
  country:'in',
  pageSize:8,
  category:'general'
}

News.propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string,
}


export default News