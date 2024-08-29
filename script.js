
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");


function sendUserWord(){
	let inpWord = document.getElementById("inp-word").value;
	fetch(`${url}${inpWord}`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		result.innerHTML = `
		<div class="result" id="result">
			<div class="word">
				<h3>${inpWord}</h3>
				<button>
					<i class="fa-solid fa-volume-high"></i>
				</button>
			</div>
			<div class="details">
				<p>pos</p>
				<p>/sample/</p>
			</div>

			<p class="word-meaning">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, saepe.</p>
			<p class="word-example">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, nulla.</p>
		</div>
		`;
	})
}

btn.addEventListener("click", sendUserWord)

// btn.addEventListener("keypress", function(e){

// 	if(e.which == 13){
// 		sendUserWord();
// 	}
// });