function onSubmit(e) {
    e.preventDefault();
  
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
  
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;
  
    if (prompt === '') {
      alert('Please add some text');
      return;
    }
  
    generateImageRequest(prompt, size);
  }
  
  async function generateImageRequest(prompt, size) {
    try {
      showSpinner();
      formBody = formBody.join('&')
  
      const response = await fetch('/openai/generateimage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody,
      });
  
      if (!response.ok) {
        removeSpinner();
        throw new Error('That image could not be generated');
      }
  
      const data = await response.json();
    //   console.log(data);
  
      const imageUrl = data.data;
  
      document.querySelector('#image').src = imageUrl;
  
      removeSpinner();
    } catch (error) {
      document.querySelector('.msg').textContent = error;
    }
  }
  
  function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
  }
  
  function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
  }
  
  document.querySelector('#image-form').addEventListener('submit', onSubmit);