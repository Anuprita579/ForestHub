import React, { useState, useEffect, useCallback } from 'react';
import DOMPurify from 'dompurify';

const GoogleLens = () => {
  const PAT = 'bbc22af225694f13ab678711c67f3c1f';
  const USER_ID = 'ahuann';
  const APP_ID = '8542642975';
  const MODEL_ID = 'general-image-recognition';
  const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';

  const [imageUrl, setImageUrl] = useState('');
  const [results, setResults] = useState(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const fetchData = useCallback(async () => {
    setResults(null); // Reset results before fetching new data

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": imageUrl // Use the user-provided image URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    try {
      const response = await fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`, requestOptions);
      const result = await response.json();
      setResults(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (hasAnalyzed) {
      fetchData(); // Fetch data only if the user has attempted to analyze an image
    }
  }, [fetchData, imageUrl, hasAnalyzed]); // Include fetchData, imageUrl, and hasAnalyzed in the dependency array

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setHasAnalyzed(false); // Reset hasAnalyzed when the user changes the image URL
    setWikipediaInfo(null); // Reset wikipediaInfo when the user changes the image URL
  };

  const handleAnalyzeImage = () => {
    setHasAnalyzed(true);
  };

  const [wikipediaInfo, setWikipediaInfo] = useState(null);

  const fetchWikipediaInfo = async () => {
    try {
      // Make an API call to Wikipedia based on the first concept's name
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=${results.outputs[0].data.concepts[0].name}`);
      const data = await response.json();
      const pages = data.query.pages;
      const firstPageId = Object.keys(pages)[0];
      setWikipediaInfo(pages[firstPageId].extract);
    } catch (error) {
      console.error('Error fetching Wikipedia information:', error);
    }
  };

  const handleKnowMoreClick = () => {
    if (results && results.outputs && results.outputs[0] && results.outputs[0].data && results.outputs[0].data.concepts && hasAnalyzed) {
      fetchWikipediaInfo();
    }
  };

  return (
    <>
        <div>
            <h1 className='text-4xl font-bold text-green-800 mt-10'>Image <span className='text-amber-500'>Analyzer</span></h1>
            <div> 
                <label htmlFor="imageUrl" className='text-xl font-bold p-4 m-4'>Image URL:</label>
                <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} className='border-2 outline-none p-4 my-4 w-96' />
                <button onClick={handleAnalyzeImage} className='bg-green-800 text-slate-100 p-4 my-4'>Analyze Image</button>
            </div>
            {results && results.outputs && results.outputs[0] && results.outputs[0].data && results.outputs[0].data.concepts && hasAnalyzed ? (
                <div>
                    <h3 className='text-md font-bold text-green-800'>Analysis Results:</h3>
                    <ul className='grid grid-cols-2 gap-2 my-4'>
                        {results.outputs[0].data.concepts.slice(0,1).map(concept => (
                            <>
                                <li key={concept.id}> {concept.name}</li>
                                <div>
                                  <button onClick={handleKnowMoreClick} className='p-2 bg-green-800 text-white'>Know More</button>
                                </div>
                                
                            </>
                            
                        ))}
                    </ul>
                </div>
            ) : null}

            {wikipediaInfo ? (
              <div>
              <h3 className='text-md font-bold text-green-800'>Information:</h3>
              <div className='w-full flex justify-center items-center text-center'>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(wikipediaInfo) }} className='w-2/3' />
              </div>
              
              </div>
            ) : null}
            
            {!results && hasAnalyzed ? <p> No results available.</p> : null}
        </div>
    </>
  );
};

export default GoogleLens;
