document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const likeCountElement = btn.querySelector('.like-count');
            let likeCount = parseInt(likeCountElement.textContent, 10);
            likeCount += 1;
            likeCountElement.textContent = likeCount;

            alert(`¡Te gustó el perfil de ${btn.dataset.title}!`);
        });
    });
});

