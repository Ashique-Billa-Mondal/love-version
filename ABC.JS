function yes() {
    document.body.innerHTML = `
      <div class="container">
        <h1>YAY! I love you too!</h1>
        <p>Let's be together forever!</p>
        <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="300">
      </div>
    `;
  }
  
  function moveButton(btn) {
    btn.style.position = 'absolute';
    btn.style.top = Math.random() * window.innerHeight + 'px';
    btn.style.left = Math.random() * window.innerWidth + 'px';
  }
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.innerText = '❤';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.animation = 'float 5s linear infinite';
    document.getElementById('hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
  }, 500);