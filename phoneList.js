mainPage.innerHTML += `
	<h2>Telefoane:</h2>
		<div id="phone-list">
		</div>
`;
// 
APP.renderPhoneList = (productArray) => {

	const phoneList = document.querySelector('#phone-list');
	phoneList.innerHTML = '';

	productArray.forEach((elem) => {

		phone = new Phone(elem.name, elem.price, elem.release, elem.added, elem.pic);

		phone.renderPhone();
	});
}