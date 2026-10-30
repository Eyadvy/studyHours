let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let previousCount = 0
    previousCount = ' ' + count + " -"
    saveEl.innerText = saveEl.innerText + previousCount
    console.log(count)
    count = 0
    countEl.textContent = count
}