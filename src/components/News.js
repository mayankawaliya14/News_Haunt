import React, {useEffect, useState} from 'react'
import NewsIteams from './NewsIteams'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage]= useState(1)
  const [totlalResults, setTotalResult] = useState(0)
  // document.title= `${TofirstUppercase(props.category)} - News_Haunt`;
 const TofirstUppercase = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
   const updateNews= async ()=> {
    props.setProgress(10);
    let page =1;
 const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c3bb637666e3420387a44c6ab79c544b&page=${page}&pagesize=${props.pageSize}`;
 setLoading(true);
 let data = await fetch(url);
 let parsedData = await data.json();
 console.log(parsedData)
 setArticles(parsedData.articles)
 setTotalResult(parsedData.totlalResults)
 setLoading(false);
 props.setProgress(100);
   }
  useEffect( () => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  // handleNextclick = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=988fd5850c574c3dbb7699017e52f8ba&page=${page+1}&pagesize=${props.pageSize}`
  //   setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  //   setState({
  //     page: page+1,
  //     articles: parsedData.articles,
  //     loading: false})
  // }
  // handlePrevclick = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=988fd5850c574c3dbb7699017e52f8ba&page=${page-1}&pagesize=${props.pageSize}`
  //   setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  //   setState({
  //     page: page-1,
  //     articles: parsedData.articles,
  //     loading: false})
  // }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c3bb637666e3420387a44c6ab79c544b&page=${page+1}&pagesize=${props.pageSize}`
    let data = await fetch(url);
    setPage(page+1)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResult(parsedData.totlalResults)
    setLoading(false)
    }
    return (
      <>
       <h2 className='m-5 text-center text-light'>News_Haunt - Top {TofirstUppercase(props.category)} Headlines</h2>
       {loading && <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totlalResults}
          loader={<Spinner/>}
        >
          <div className="container">  
        <div className="row">
       {articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsIteams title={element.title?element.title.slice(0, 35):""} description={element.description?element.description.slice(0, 40):""} ImgUrl={element.urlToImage} NewsUrl={element.url} date={element.publishedAt} Auther={element.author} Source={element.source.name}/>
            </div>
       })}     </div>
        </div></InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
        <button type="button" disabled={page<=1} className="btn btn-light" onClick={handlePrevclick}>&larr; Previous</button>
        <button type="button" disabled={page+1>Math.ceil(totlalResults/12)} className="btn btn-light" onClick={handleNextclick}>Next &rarr;</button>
        </div>
        <div className="text-center text-light"><strong>page-{page}</strong></div> */}
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News

//Api Key 988fd5850c574c3dbb7699017e52f8ba