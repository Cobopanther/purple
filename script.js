document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerText = 'Yay! I love you!';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').innerText = 'Oh no! Please reconsider.';
});
