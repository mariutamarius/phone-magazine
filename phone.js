class Phone {

	constructor(name, price, release, added, pic) {
		this.name = name;
		this.price = price;
		this.release = release;
		this.added = added;
		this.pic = pic;
	}

	renderPhone() {
		const phoneList = document.querySelector('#phone-list');
		phoneList.innerHTML += `
		<div class="test">
			<div class="container">
				<div class="phone-box">
					<ul class="phone">
						<li>Nume: <strong>${this.name}</strong></li>
						<li>Pret: <strong>${this.price}</strong></li>
						<li>An aparitie:<strong> ${this.release}</strong></li>
						<li>Adaugat: <strong>${this.added}</strong></li>
					</ul>
				<div class="phone-pic">
					<img src=${this.pic} weight="100px" height="140px"></img>
				</div>
				</div>
			</div>
		</div>
		`;
	}
}