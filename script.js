function logInputText() {
        const emailOrPhoneValue = document.querySelector('input[type="text"]').value;
        const passwordValue = document.querySelector('input[type="password"]').value;

        console.log('Email or Phone Number:', emailOrPhoneValue);
        console.log('Password:', passwordValue);
      }
