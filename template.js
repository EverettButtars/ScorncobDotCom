const template = document.createElement('template');

template.innerHTML = `
  <div class="header">
    <h1>I'm Just Concious Here</h1>
    <p>The Personal Website of Everett.</p>
  </div>
  <div class="navbar">
    <a href="#">Home</a>
    <a href="#">Most Recent</a>
    <a href="#">Random!</a>
    <a href="#" class="right">Index</a>
  </div>
`;

document.body.prepend(template.content);

