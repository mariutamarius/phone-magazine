mainPage.innerHTML += `
<div class="butoane">
  <button id="sortByName">Sorteaza dupa nume</button>
  <button id="sortByPrice">Sorteaza dupa pret</button>
  <button id="sortByRelease">Sorteaza dupa an aparitie</button>
  <button id="sortByAdded">Sorteaza dupa data adaugarii</button>
  <button id="filterByPrice">Filtreaza dupa pret</button>
  <input id="filterWith"></input>
</div>
`;

// functia de sortare
function sortPhones(sortType) {
  switch (sortType) {

    case "sortByName":
      const sortedArray = APP.getPhones().sort((elem1, elem2) => {
        if (elem1.name < elem2.name) {
          return -1;
        } else if (elem1.name > elem2.prnameice) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addPhones(sortedArray);

      APP.renderPhoneList(sortedArray);
      break;

    case "sortByPrice":
      const sortedArray1 = APP.getPhones().sort((elem1, elem2) => {
        if (elem1.price < elem2.price) {
          return -1;
        } else if (elem1.price > elem2.price) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addPhones(sortedArray1);

      APP.renderPhoneList(sortedArray1);
      break;

    case "sortByRelease":
      const sortedArray2 = APP.getPhones().sort((elem1, elem2) => {
        if (elem1.release < elem2.release) {
          return -1;
        } else if (elem1.release > elem2.release) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addPhones(sortedArray2);

      APP.renderPhoneList(sortedArray2);
      break;

    case "sortByAdded":
      const sortedArray3 = APP.getPhones().sort((elem1, elem2) => {
        if (elem1.added > elem2.added) {
          return -1;
        } else if (elem1.added < elem2.added) {
          return 1;
        } else {
          return 0;
        }
      });
      APP.addPhones(sortedArray3);

      APP.renderPhoneList(sortedArray3);
      break;

  }
}


function filterPhone() {
  const filter = document.querySelector('#filterWith').value;
  const filterPhone = APP.getPhones().filter((elem) => elem.price > filter);
  APP.addPhones(filterPhone);
  APP.renderPhoneList(filterPhone);
}

const sortByName = document.querySelector('#sortByName');
sortByName.addEventListener('click', function () {
  sortPhones('sortByName');
})

const sortByPrice = document.querySelector('#sortByPrice');
sortByPrice.addEventListener('click', function () {
  sortPhones('sortByPrice');
})

const sortByRelease = document.querySelector('#sortByRelease');
sortByRelease.addEventListener('click', function () {
  sortPhones('sortByRelease');
})

const sortByAdded = document.querySelector('#sortByAdded');
sortByAdded.addEventListener('click', function () {
  sortPhones('sortByAdded');
})

const filterByPrice = document.querySelector('#filterByPrice');
filterByPrice.addEventListener('click', function () {
  filterPhone();
})