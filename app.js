const firstDik = document.querySelector("#birdik");
const secondDik = document.querySelector("#ikidik");
const button = document.querySelector("#hesap");
const conclusion =document.querySelector("#conclusion");
const hipValue = document.querySelector("#hipvalue");



button.addEventListener("click",function(event){
    event.preventDefault();
    conclusion.innerHTML="A²+B²=C²";
    hipValue.innerHTML =Math.sqrt((firstDik.value*firstDik.value)+(secondDik.value*secondDik.value)).toFixed(2);
})
// Math.sqrt((firstDik.value*firstDik.value)+(secondDik.value*secondDik.value))
console.log(Math.sqrt((firstDik.value*firstDik.value)+(secondDik.value*secondDik.value)));
