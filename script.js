window.addEventListener("DOMContentLoaded", ()=>{

	//Navigation
let navigationButton = document.querySelectorAll("header ul li a");
navigationButton.forEach((button, index)=>{
	button.addEventListener("click", (event)=>{
		if (!event.currentTarget.classList.contains("active")) {
		let currentActive = document.querySelector("header ul li a.active");
		currentActive.classList.remove("active");
		button.classList.add("active");
		if (document.querySelector("header").className=="active"){
			document.querySelector("header").classList.remove("active");
		}
		}
	});


}); 

//Clip-path and navigation 
window.addEventListener('scroll', (event)=>{
	let sections = document.querySelectorAll("section");
	sections.forEach((section, index)=>{
		if ((section.getBoundingClientRect().top < ((window.innerHeight / 2 ) - 100) && section.getBoundingClientRect().top > 0) || section.getBoundingClientRect().top == 0 ) {
			let currentActive = document.querySelector("header ul li a.active");
			currentActive.classList.remove("active");
			let appropNavigButton = document.querySelectorAll("header ul li a")[index];   // or match an id
			appropNavigButton.classList.add("active");
		}
	});


    let imgEffectSection = document.querySelector('#imgEffect');
 if (imgEffectSection.getBoundingClientRect().top + 100 < document.documentElement.clientHeight){
   let clipPathValue = document.documentElement.clientHeight - imgEffectSection.getBoundingClientRect().top - 200;
    imgEffectSection.style.clipPath = "circle(" + (clipPathValue +100) + "px at center)";
 }
});


// Read more button
	let insertButton = ()=>{
		document.querySelector("section#home div#description").insertAdjacentHTML("beforeend", '<a href="#" id="readMore">Read more</a>');
		document.querySelector("section#home div#description a").addEventListener("click", ()=>{
			document.querySelector("section#home div#description  #more").style.display ="block";
			document.querySelector("section#home").style.flexDirection = "column";
			document.querySelector("section#home").style.justifyContent = "space-around";
			document.querySelector("section#home").style.padding = "13vh 5% 5vh";
			document.querySelector("section#home div#description a#readMore").remove();
			window.removeEventListener("resize", insertButtonOnResize);
		});
	}

	let insertButtonOnResize = () =>{
		let readMoreButton = document.querySelector("section#home div#description a#readMore");
		if (window.innerWidth <= 1205 && !readMoreButton){
			insertButton();
		}
		else if (window.innerWidth > 1205 && readMoreButton){	
			document.querySelector("section#home div#description a#readMore").remove();
		}
	}

	if (window.innerWidth <= 1205) {
		insertButton();
	}

	window.addEventListener("resize", insertButtonOnResize);	


	//Toggle menu
	let header = document.querySelector("header");
	header.addEventListener("click", (event)=>{
	   if (event.target.tagName == "DIV") {
		   header.classList.toggle("active");
	   }
	});

	// Border to compare
const  comparisonSection = document.querySelector("section#comparison div#CompContainer div#compEffectWrapper"), 
layer = document.querySelector("section#comparison div#CompContainer div#compEffectWrapper figure div#layer");
	comparisonSection.onmousemove = (event) => {
		let left = event.clientX;
		layer.style.left = left + "px";
	}
});
