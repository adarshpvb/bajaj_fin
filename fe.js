// Fetch the JSON data.
const express= require('express')
const jsonData = fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json').then(response => response.json());

// Parse the JSON data.
const data = jsonData.data;

// Create a HTML element for each property in the JSON object.

const elements = Object.entries(data).map(([key, value]) => {
  const element = document.createElement(key);
  element.textContent = value;
  return element;
});

// Append the HTML elements to the DOM.
document.body.appendChild(elements);


app.listen(3000,function(){
  console.log("serve started in port 3000")
})