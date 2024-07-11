const inputfield = document.querySelector("input");
const Viewconversion = document.querySelector(".result")
function Currencyconversion(){
 const CurrencyinDollars = inputfield.value;
 const CurrencyinEgp = CurrencyinDollars * 15.6;
 const result =`${CurrencyinDollars} USD Dollar = ${CurrencyinEgp.toFixed(2)} Egyptian Pound`
 Viewconversion.innerText = result;
}
inputfield.oninput = function(){
  Currencyconversion();
 }