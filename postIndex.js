let listOfPostLinks = ""
for(let i = 0; i < index.length; i++) {
    listOfPostLinks += `<p><a href="${posts}${index[i]}.html">${index[i]}</a></p>`;
}

template.innerHTML = `
  <div class="main">
  <h2> these are ordered in YYYY/MM/DD </h2>
  ${listOfPostLinks}
  </div>
`;

document.body.appendChild(template.content);