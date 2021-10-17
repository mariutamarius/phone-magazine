window.APP = {};

window.mainPage = document.querySelector('#root');

APP.phones = [{
		name: 'Iphone XS',
		price: 4500,
		release: '2019',
		added: dateAdded(),
		pic: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1550795428390'
	},
	{
		name: 'Huawei P30',
		price: 4000,
		release: '2018',
		added: dateAdded(),
		pic: 'https://images-na.ssl-images-amazon.com/images/I/51dWKj8zYnL._SL1000_.jpg'
	},
	{
		name: 'Samsung S10',
		price: 4250,
		release: '2018',
		added: dateAdded(),
		pic: 'https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg'
	}
];

APP.addPhones = (phones) => {
	localStorage.setItem("phones", JSON.stringify(phones));
}

APP.getPhones = () => {
	const phones = localStorage.getItem("phones");
	return JSON.parse(phones);
};

if (APP.getPhones() === null) {
	APP.addPhones(APP.phones);
}


function startRendering() {

	APP.renderPhoneList(APP.getPhones());
}

function dateAdded() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();
	const time = hour + ":" + min + ":" + sec + " " + day + "/" + month + "/" + year;
	return time;
}

window.addEventListener('load', startRendering);
