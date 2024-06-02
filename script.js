
document.getElementById('l3comForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const voiceOption = document.getElementById('voiceOption').value;
    const phone = document.getElementById('phone').value;

    // Récupère les utilisateurs de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifie si le nom existe déjà
    const nameExists = users.some(user => user.name === name);
    if (nameExists) {
        alert('Un utilisateur avec ce nom existe déjà.');
        return;
    }

    // Crée un objet utilisateur
    const user = {
        name: name,
        voiceOption: voiceOption,
        phone: phone
    };

    // Ajoute l'utilisateur au tableau
    users.push(user);

    // Sauvegarde les utilisateurs dans localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Réinitialise le formulaire
    document.getElementById('l3comForm').reset();

    // Redirige vers la page des utilisateurs inscrits
    window.location.href = 'users.html';
});
