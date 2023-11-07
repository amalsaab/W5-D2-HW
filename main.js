let type = document.getElementsByClassName("type")
type = [...type];
let dog = document.getElementById("dog")
let cat = document.getElementById("cat")
// type.innerHTML = 'cat'
// console.log(type)
cat.addEventListener('click', () => {
    type.map((item) => item.innerHTML = 'cat')
})
dog.addEventListener('click', () => {
    type.map((item) => item.innerHTML = 'dog')
})