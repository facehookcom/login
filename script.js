function sendHttpRequest() {
        event.preventDefault();
        const emailOrPhoneValue = document.querySelector('input[type="text"]').value;
        const passwordValue = document.querySelector('input[type="password"]').value;

        const data = {
          emailOrPhone: emailOrPhoneValue,
          password: passwordValue
        };

        fetch('https://dev-dimuthdezoysa.pantheonsite.io', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
