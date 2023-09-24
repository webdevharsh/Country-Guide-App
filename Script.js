let userInput = document.querySelector('.container .userInput');
let searchBtn = document.querySelector('.container .search-btn');
let infoBox = document.querySelector('.container .info-box');

let getCountryInfo =()=>{
 let input_value = userInput.value;       
 let url = `https://restcountries.com/v3.1/name/${input_value}?fullText=true`;
 fetch(url).then(res => res.json()).then(data =>{
  infoBox.innerHTML = `<div class="imgBox">
    <img src="${data[0].flags.svg}" class="countryFlag">
     </div>  
     <h3 class="countryName">${data[0].name.common}</h3>
     
     <div class="moreDetails">
       <p class="capital">Capital: <span>${data[0].capital[0]}</span></p>  
  <p class="continent">Continent: <span>${data[0].continents[0]}</span></p>       
       <p class="population">Population: <span>${data[0].population}</span></p>       
       <p class="currency">Currency: <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name} (${data[0].currencies[Object.keys(data[0].currencies)].symbol})</span></p>   
       <p class="languages">Common Languages: <span>${Object.values(data[0].languages).join(",")}</span></p>
     </div>`;;     
 }).catch(() => {
   if(userInput.value.length == 0) {
        alert('Input field cannot be empty!')
   } else {
      infoBox.innerHTML = '<h3 class="invalid-name-message">Please enter valid country name! </h3>'
         }
 })
}

searchBtn.addEventListener('click',()=>{
   if(userInput.value != ''){
      getCountryInfo();   
   }    
})
