const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

// const toggle = document.getElementById('toggle');
// const nav = document.getElementById('nav');

// toggle.addEventListener('click', () => nav.classList.toggle('active'))







// const tagsEl =document.getElementById('tags');
// const textarea = document.getElementById('textarea');

// textarea.focus()

// textarea.addEventListener('keyup', (e) => {
//   createTags(e.target.value)

//   if(e.key === 'Enter') {
//     setTimeout(() => {
//       e.target.value = ''
//     }, 10)

//     randomSelect()
//   }
// })

// function createTags(input) {
//   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

//   tagsEl.innerHTML = ''

//   tags.forEach(tag => {
//     const tagEl = document.createElement('span')
//     tagEl.classList.add('tag')
//     tagEl.innerText = tag
//     tagsEl.appendChild(tagEl)
//   })
// }

// function randomSelect() {
//   const times = 30

//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag()

//     highlightTag(randomTag)

//     setTimeout(() => {
//       unHighlightTag(randomTag)
//     }, 100)
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval)

//     setTimeout(() => {
//       const randomTag = pickRandomTag()

//       highlightTag(randomTag)
//     }, 100)
//   }, times * 100)
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll('.tag')
//   return tags[Math.floor(Math.random() * tags.length)]
// }

// function highlightTag(tag) {
//   tag.classList.add('highlight')
// }

// function unHighlightTag(tag) {
//   tag.classList.remove('highlight')
// }