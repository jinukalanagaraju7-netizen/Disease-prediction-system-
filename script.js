function predictDisease(){

let symptoms = document.querySelectorAll('input[type="checkbox"]:checked');
let selected = [];

symptoms.forEach(function(symptom){
selected.push(symptom.value);
});

let disease = "No disease predicted";

if(selected.includes("fever") && selected.includes("cough")){
disease = "Flu";

}else if(selected.includes("headache") && selected.includes("fatigue")){
disease = "Migraine";

}else if(selected.includes("vomiting") && selected.includes("fever")){
disease = "Food Poisoning";

}else if(selected.includes("sorethroat") && selected.includes("cough")){
disease = "Common Cold";
}

document.getElementById("result").innerText = "Possible Disease: " + disease;

}
