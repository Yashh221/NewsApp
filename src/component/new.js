// import React, {useEffect, useState} from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from "prop-types";


// const News=(props)=> {
//   const [articles,setArticles]=useState([])
//   const [loading,setLoading]=useState(true)
//   const [page,setPage]=useState(1)
//   const [totalResults,setTotalResults]=useState(0)
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     article: [],
//   //     loading: false,
//   //     page: 1,
//   //     totalResults:0
//   //   };
//   //   
//   // }
//   const updateNews= async ()=> {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true)
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     // setState({
//     //   article: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     props.setProgress(100);
//   }

//   useEffect(()=>
//   {
//     document.title = `${capitalizeFirstLetter(
//       props.category
//     )}- NewBreaker`;
//     updateNews();
//   })
//   // async componentDidMount() {
//   //   updateNews();
//   // }
//   // const handlePrevClick = async () => {
//   //   setPage(page-1);
//   //   updateNews();
//   // };
//   // const handleNextClick = async () => {
//   //   setPage(page+1);
//   //   updateNews();
//   // };
//   const fetchMoreData = async () => {
//     setPage(page+1);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     // setState({
//     //   article: state.article.concat(parsedData.articles),
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//   };
//     return (
//       <div className="container my-3">
//         <h1 className="text-center" style={{ margin: "90px 0px" }}>
//           NewsBreaker - Top {capitalizeFirstLetter(props.category)}{" "}
//           Headlines
//         </h1>
//         {loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length!==totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">

//           <div className="row">
//             {articles.map((element) => {
//               return (
//                 <div className="col-md-3" key={element.url}>
//                   <NewsItem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageURL={element.urlToImage}
//                     newsURL={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             disabled={state.page <= 1}
//             className="btn btn-dark"
//             onClick={handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             disabled={
//               state.page + 1 >
//               Math.ceil(state.totalResults / props.pageSize)
//             }
//             className="btn btn-dark"
//             onClick={handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       </div>
//     );
//   }
// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general"
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string
// };

// export default News;
    
    
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    apikey:"c2e4678ecd3b475c9410ed1187b0436b",
    key:"general",
    setProgress:1
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey:PropTypes.string,
    key:PropTypes.string,
    setProgress:PropTypes.number
}

export default News