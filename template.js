const template = document.createElement('template');

const index = [
   '2024_11_14',
   '2024_10_25',
   '2024_9_28', 
   '2024_9_14'
   ];
const curPost = window.location.href.split('/').at(-1).split('.')[0];
const i = index.indexOf(curPost);
let nextPostLine = "";
let previousPostLine = "";
let posts = ""
if(window.location.href.indexOf("posts") == -1)
  posts = "posts/"
if (i != -1){
  const prevName = (i < (index.length - 1)) ? index[i + 1] : '';
  const nextName = (i > 0) ? index[i - 1] : '';
  if(nextName != '')
    nextPostLine = `<a href="${posts}${nextName}.html">Next Post</a>`;
  if(prevName != '')
    previousPostLine = `<a href="${posts}${prevName}.html">Previous Post</a>`;
}

const randomPostLink = `${posts}${index[Math.floor((Math.random() * (index.length)))]}.html`;
const mostRecentLink = `${posts}${index[0]}.html`;

let homeLink;
if(posts == "")
homeLink = `../index.html`;
else
  homeLink = `index.html`;

let postIndexLink;
if(posts == "")
postIndexLink = `../postIndex.html`;
else
  postIndexLink = `postIndex.html`;

template.innerHTML = `
  <div class="header">
    <h1>I Talk to Myself a lot</h1>
    <p>The Personal Website of Everett.</p>
  </div>
  <div class="navbar">
    <a href="${homeLink}">Home</a>
    <a href="${mostRecentLink}">Most Recent</a>
    ${previousPostLine}
    ${nextPostLine}
    <a href="${randomPostLink}">Random!</a>
    <a href="${postIndexLink}" class="right">Index</a>
  </div>
`;

document.body.prepend(template.content);