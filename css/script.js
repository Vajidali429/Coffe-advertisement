let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classlist.toggle('active');
}

let cartitem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () =>{
	cartitem.classlist.toggle('active');
}