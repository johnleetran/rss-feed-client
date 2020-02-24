import React, { useState, useEffect } from 'react';
import XML from 'xml2js';
import { render } from '@testing-library/react';

function renderList(item){
    var feeds = item.feeds.map((feed) => {
        return (<div><li><a href={feed.item.link} target="_blank">{feed.item.title}</a></li></div>)
    })
    return ( 

        <div>
            <ul>
                {feeds}
            </ul>
        </div> 
    )
}

function RSSFeeds(props) {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(null);

    const { apiKeyLoaded } = props;

    async function fetchFromUrl(){
        const response = await fetch("https://75iwpa68w3.execute-api.us-west-1.amazonaws.com/Prod/feed", { headers: new Headers({
            "x-api-key": apiKeyLoaded
        }) });
        const json = await response.json();
        //for (let url of json.urls){
            //console.log(url)
            setLoading(false);
            setPage(JSON.stringify(json));
        //}


    }
    useEffect(()=>{
        if (apiKeyLoaded.length > 0 && loading){
            fetchFromUrl();
        }
    })

    let items = []
    if(page){
        items = JSON.parse(page).urls
        console.log("item is here: ", items[0].feeds[0].item.title)
    }
    var title = items.map((item) => { 
        return (<div>
                    <p><a href={item.link} target="_blank">{item.title}</a></p>
                    {renderList(item)}
                </div>) 
    })


    return (
        <div>
            {title} 
        </div>
    );
}

export default RSSFeeds;
