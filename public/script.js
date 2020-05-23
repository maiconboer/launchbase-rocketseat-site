const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => { 
        const videoId = card.getAttribute('id')

        window.location.href = `/video?id=${videoId}`
    })
})

