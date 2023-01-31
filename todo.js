const header = document.querySelector('[data-header]');
const mainText = document.querySelector('[data-main]');
const addNote = document.querySelector('.btn-success');
const clearNote = document.querySelector('.btn-clear');
const models = document.querySelector('.models');
let newArr;
let newJsonStr;
let str = '';
let headerValue;
let mainValue;
let addingNote;
function addArr() {
  if (localStorage.getItem('items') === null) {
    headerValue = header.value;
    mainValue = mainText.value;
    newArr = [];
    newArr.push([headerValue, mainValue]);
    newJsonStr = JSON.stringify(newArr);
    localStorage.setItem('items', newJsonStr);
  } else {
    newArr = JSON.parse(localStorage.getItem('items'));
    headerValue = header.value;
    mainValue = mainText.value;
    newArr.push([headerValue, mainValue]);
    newJsonStr = JSON.stringify(newArr);
    localStorage.setItem('items', newJsonStr);
  }
  location.reload();
}
if (localStorage.getItem('items') !== null) {
  newArr = JSON.parse(localStorage.getItem('items'));
  addingNote = () => {
    newArr.forEach((element, index) => {
      str += `
            <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td>
                            <button class="btn btn-danger btn-sm btn-delete" onclick="deleteItem(${index})">
                                Delete
                                </button>
                                </td>
            </tr>
                                `;
      models.innerHTML = str;
    });
  };
  addingNote();
}
addNote.addEventListener('click', addArr);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addArr();
  }
});
const deleteItem = (value) => {
  newArr = JSON.parse(localStorage.getItem('items'));
  console.log(newArr.splice(value, 1));
  console.log((newJsonStr = JSON.stringify(newArr)));
  localStorage.setItem('items', newJsonStr);
  location.reload();
};
clearNote.addEventListener('click', () => {
  if (localStorage.getItem('items') !== null) {
    if (confirm('Are you sure do you want to clear all the notes?')) {
      addingNote();
      localStorage.removeItem('items');
      str = '';
      models.innerHTML = str;
    }
  } else {
    alert('Notes are have already been cleared.');
  }
});