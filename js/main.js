const block = document.querySelector('.js-block')
const color = document.querySelector('.js-color')
const btn = document.querySelector('.js-btn')

const hex = '0123456789ABCDEF'

let RandomColor = '#'

const getRandomColor = () => {
    RandomColor = '#'
    for (let i = 0; i < 6; i++) {
        RandomColor = RandomColor + hex[Math.floor(Math.random() * hex.length)]
        console.log(RandomColor)
    }
}

btn.addEventListener('click', () => {
    getRandomColor()
    block.style.backgroundColor = RandomColor
    color.innerHTML = RandomColor
})

