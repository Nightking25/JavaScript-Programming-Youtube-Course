const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn');
const meterFeet = document.getElementById('meterFeet');
const litersGallons = document.getElementById('litersGallons');
const kiloPounds = document.getElementById('kiloPounds');
convertBtn.addEventListener("click", function() {
  let num = inputEl.value;
  meterFeet.innerHTML = `${num} meters = ${(num*3.281).toFixed(2)} feet | ${num} feet = ${(num/3.281).toFixed(2)} meters`
  litersGallons.innerHTML = `${num} liters = ${(num*0.264).toFixed(2)} gallons | ${num} gallons = ${(num/0.264).toFixed(2)} liters`
  kiloPounds.innerHTML = `${num} kilos = ${(num*2.204).toFixed(2)} pounds | ${num} pounds = ${(num/2.204).toFixed(2)} kilos`
})
