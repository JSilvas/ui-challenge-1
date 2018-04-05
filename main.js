'use strict';

const idArray = ['a','b','c','d','e','f','g','h','i'];

const randomColor = () => Math.floor(Math.random() * 256);

const newRGB = () => `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

const assignColors = () => {
  for (let i = 0; i < idArray.length; i++) {
    document.getElementById(`${idArray[i]}`).style.backgroundColor = newRGB();
    console.log('Assigned color: ', newRGB());
  }
}

assignColors();