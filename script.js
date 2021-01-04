const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remaineed')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))  
})

function highlightCups(idx) {
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx-- 
  }
  
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')    
    }
  })

  updateBigCup()

}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups /totalCups * 100}%`
  }

  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}

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