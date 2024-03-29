import { form, input, toDoList } from './doms/index';
import './css/style.css';
import {
  checkLocalStorage,
  getDeleteButtonNode,
  insertToDo,
  updateScreen,
} from './utils/index';

import('./firebase/index').then((firebase) => {
  // Your code that uses the firebase module goes here
  console.log(firebase)
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let localJson = checkLocalStorage();
  insertToDo({ input, localJson });
  localJson = checkLocalStorage();
  updateScreen({ nodeList: localJson, toDoList });
  getDeleteButtonNode();
});

window.onload = () => {
  const localJson = checkLocalStorage();
  if (localJson.length === 0) {
    toDoList.innerHTML = 'Tambahkan item baru!';
  } else {
    updateScreen({ nodeList: localJson, toDoList });
    getDeleteButtonNode();
  }
};


