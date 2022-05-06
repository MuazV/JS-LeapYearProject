function entered() {
let year = document.querySelector('input').value;

if (year % 100 != 0 && year % 4 ==0) {
    alert(`This ${year} is a Leap Year`)
}
else if (year % 100 == 0 && year % 400 == 0) {
    alert(`This ${year} is a Leap Year`)
}
else {
    alert(`Entered ${year} isn't a Leap Year`)
}}



document.querySelector('input').addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        entered()
    }
})


// document.addEventListener('keydown', function(event){
//     if (event.key == 'Enter'){
//         entered()
//     }
// })

