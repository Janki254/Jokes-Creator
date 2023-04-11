const jokeEle = document.getElementById('joke');
const getJokeBtn = document.getElementById('jokeBtn');

getJokeBtn.addEventListener('click', () => {
    generateJoke();
});

async function generateJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    });

    const data = await response.json();

    jokeEle.innerText = data.joke;
}
