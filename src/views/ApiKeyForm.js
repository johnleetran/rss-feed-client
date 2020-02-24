import React, { useState } from 'react';

function ApiKeyForm(props) {
    let { apiKey, setApiKey, apiKeyLoaded, setApiKeyLoaded} = props
    let handleChange = (event) => {
        event.preventDefault();
        if (event.type == 'submit') {
            setApiKeyLoaded(apiKey);
        } else {
            setApiKey(event.target.value);
        }
    }

    return (
        <div>
            <form onSubmit={handleChange}>
                <label>
                    ApiKey:
                    <input type="text" value={apiKey} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ApiKeyForm;
