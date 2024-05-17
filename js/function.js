const question = document.getElementById('question');
const no = document.getElementById('no');
const next = document.getElementById('next');
const body = document.getElementById('body');

function result() {
    const score = document.getElementById('score');
    const answer = document.getElementById('answer');
    const correct = document.getElementById('correct');
    
    if (correct == true && answer!= true) {
        alert('Youre collect!!');
    }
    else //if (answer == true && correct != true )
    {
        alert('You failed!!');
        score.innerText = '3';
    }
};

// next.addEventListener('click', result);