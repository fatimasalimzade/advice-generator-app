document.addEventListener('DOMContentLoaded', () => {
    let adviceId = document.getElementById('advice-id');
    let advicetxt = document.querySelector('.advice');
    let dicebtn = document.querySelector('.dice-button');

    let fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = data.slip.id;
            advicetxt.textContent = data.slip.advice
        })

        .catch(error => {
            console.error('error: ', error);
        })
    }

    dicebtn.addEventListener('click', fetchAdvice);
})