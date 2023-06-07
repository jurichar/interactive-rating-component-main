let rating = 0;

const notes = document.querySelectorAll('.Notation span');

notes.forEach((note, index) => {
    note.addEventListener('click', () => {
        rating = index;
        for (let i = 0; i < notes.length ; i++)
            if (i == rating)
                notes[i].classList.add('highlight');
            else
                notes[i].classList.remove('highlight');
    });
});

const button = document.querySelector('.Summit');

button.addEventListener('click', () => {
    document.querySelector('.Rating_start').style.display = 'None';
    document.querySelector('.Thanks').style.display = 'flex';
    document.querySelector('.Thanks_title--rating').textContent = rating + 1;
});