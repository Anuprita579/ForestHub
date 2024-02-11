import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sentiment from 'sentiment';

function TreeNation() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=forest&sources=bbc-news&apiKey=6c72b2026acb44ada2fff51f379bb042`);

                const week = new Date();
                week.setDate(week.getDate() - 7);
                const filteredData = response.data.articles.filter(article => {
                    const articleDate = new Date(article.publishedAt);
                    return articleDate > week;
                });

                const sentimentAnalyzer = new Sentiment();
                const articlesWithSentiment = filteredData.map(article => {
                    // Check if description exists and is not empty
                    if (article.description && article.description.trim()) {
                        const result = sentimentAnalyzer.analyze(article.description);
                        // Check if sentiment analysis result is not undefined and score is a number
                        if (result && !isNaN(result.score)) {
                            const sentimentLabel = result.score > 0 ? 'positive' : result.score < 0 ? 'negative' : 'neutral';
                            return { ...article, sentiment: sentimentLabel };
                        } else {
                            console.log("Sentiment analysis failed for article:", article);
                            return { ...article, sentiment: 'neutral' };
                        }
                    } else {
                        console.log("Article without description:", article);
                        return { ...article, sentiment: 'neutral' };
                    }
                });

                setArticles(articlesWithSentiment);
            } catch (error) {
                console.log("Error in fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    
    return (
        <>
            <div>
                {articles.length > 0 ? (
                    <ul className='flex flex-wrap'>
                        {articles.map((article, index) => (
                            <div key={index} className='h-60 w-32 text-center m-2 p-2'>
                                <img src={article.urlToImage} alt='newsimg' className='h-20' />
                                <p className='truncate'>{article.title}</p>
                                <div className='flex'>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                                        <button className='bg-green-800 text-white m-1 p-1'>Know More</button>
                                    </a>
                                </div>
                                <button className={article.sentiment === 'negative' ? 'bg-red-800 text-white m-1 p-1' : (article.sentiment === 'positive' ? 'bg-blue-800 text-white m-1 p-1': 'bg-green-500 text-white m-1 p-1')}>
                                    {article.sentiment === 'negative' ? 'Negative' : (article.sentiment === 'positive' ? 'Positive' : 'Neutral')}
                                </button>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>Loading Forest news....</p>
                )}
            </div>
        </>
    );
}

export default TreeNation;
