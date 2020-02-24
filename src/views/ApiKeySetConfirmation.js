import React, { useState } from 'react';

function ApiKeyFormSetConfirmation(props) {
    let { apiKeyLoaded, RSSFeeds } = props
    let renderStr = ""
    if(apiKeyLoaded.length > 0){
        renderStr = `Key has been set to: ${apiKeyLoaded}`;
    }
    return (
        <div>
            <p>{renderStr}</p>
            <RSSFeeds apiKeyLoaded={apiKeyLoaded}/>
        </div>
    );
}

export default ApiKeyFormSetConfirmation;
