import { animals } from '../data.js';
import { findById } from '../utils.js';

// console.log(window.location.search);

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

// console.log(animals[1]);
// console.log(params);
// console.log('animal', animal);
// grab dom elements so we can textcontent the objects values onto them.

const infoAbout = document.getElementById('infoAbout');
const pfp = document.getElementById('pfp');
const theCowSays = document.getElementById('theCowSays');
const title = document.querySelector('title');

infoAbout.textContent = `Information about ${animal.name}`;
pfp.src = `../assets/${animal.type}.svg`;
theCowSays.textContent = `${animal.says}`;
title.textContent = `${animal.name}`;