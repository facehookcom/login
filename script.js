function sendHttpRequest() {
  event.preventDefault();
  const emailOrPhoneValue = document.querySelector('input[type="text"]').value;
  const passwordValue = document.querySelector('input[type="password"]').value;

  const data = {
    emailOrPhone: emailOrPhoneValue,
    password: passwordValue,
  };

  fetch(url, {
    method: 'GET', // Correct HTTP method for GET request
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors', // Set no-cors mode
  })
    .then((response) => {
      // The response object will be opaque and you won't be able to access its data or headers
      console.log('Request sent with no-cors mode.');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
