function getData(d){

let data = {

"Fever":`
<h3>🌡 Fever Care</h3>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png">
<div>
<b>Hydration</b><br>
Drink water, ORS, coconut water regularly to prevent dehydration.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/4149/4149687.png">
<div>
<b>Rest</b><br>
Sleep properly so your immune system can recover.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png">
<div>
<b>Cool Compress</b><br>
Use wet cloth on forehead to reduce temperature.
</div>
</div>

<b>⚠️ See doctor if fever >102°F or lasts 2+ days</b>
`,

"Cold":`
<h3>🤧 Cold Remedies</h3>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/4149/4149687.png">
<div>
<b>Steam</b><br>
Take steam 5–10 minutes to clear congestion.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png">
<div>
<b>Ginger Tea</b><br>
Reduces inflammation and improves immunity.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/590/590836.png">
<div>
<b>Honey</b><br>
Soothes throat and reduces irritation.
</div>
</div>
`,

"Cough":`
<h3>😷 Cough Care</h3>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png">
<div>
<b>Honey + Ginger</b><br>
Take twice daily for relief.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png">
<div>
<b>Turmeric Milk</b><br>
Drink at night to reduce infection.
</div>
</div>

<div class="remedy-box">
<img src="https://cdn-icons-png.flaticon.com/512/4149/4149687.png">
<div>
<b>Steam</b><br>
Clears throat irritation.
</div>
</div>
`

};

return data[d] || "<b>Consult a doctor for proper treatment.</b>";
}

/* MODAL */
function openModal(name){
document.getElementById("modal").style.display="flex";
document.getElementById("title").innerText=name;
document.getElementById("info").innerHTML=getData(name);
}

function closeModal(){
document.getElementById("modal").style.display="none";
}