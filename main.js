let type = document.getElementsByClassName("type")
type = [...type]; //convert to array
let dog = document.getElementById("dog")
let cat = document.getElementById("cat")
let image = document.getElementById("image")
// type.innerHTML = 'cat'
// console.log(type)
cat.addEventListener('click', () => {
    image.src = 'https://images.unsplash.com/photo-1554310212-e1d9f0d4d9be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    type.map((item) => item.innerHTML = 'cat')
})
dog.addEventListener('click', () => {
    image.src = 'https://images.everydayhealth.com/images/lung-respiratory/allergies/best-and-worst-dog-breeds-for-allergies-01-1440x810.jpg'
    type.map((item) => item.innerHTML = 'dog')
})