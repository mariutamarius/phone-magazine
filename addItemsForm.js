mainPage.innerHTML += `
    <form id="addPhone">
      Nume: <input type="text" name="phoneName">
      Pret: <input type="number" name="phonePrice">
      An aparitie: <input type="text" name="phoneRelease">
      Adaugat: <input type="text" name="phoneAdded">
      Imagine: <input type="text" name="phonePic">
      <input type="submit" value="Adauga telefon">
    </form>
`;

function addFormFunctionality() {

  function addPhone(name, price, release, added, pic) {
    const phones = APP.getPhones();

    phones.push({
      name: name,
      price: price,
      release: release,
      added: added,
      pic: pic
    });

    APP.addPhones(phones);

    APP.renderPhoneList(phones);
  }

  const form = document.querySelector('#addPhone');
  form.onsubmit = function (event) {

    event.preventDefault();
    const name = event.target.phoneName.value;
    const price = Number(event.target.phonePrice.value);
    const release = event.target.phoneRelease.value;
    const added = dateAdded();
    const pic = event.target.phonePic.value;
    addPhone(name, price, release, added, pic);
  }
}

window.addEventListener('load', addFormFunctionality);