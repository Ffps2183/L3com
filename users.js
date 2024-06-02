// Récupère les utilisateurs de localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Mot de passe pour suppression (à changer selon vos besoins)
const PASSWORD = 'correctpassword';

// Fonction pour afficher les utilisateurs et les compteurs de voix
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    // Initialiser les compteurs
    let voice1Count = 0;
    let voice2Count = 0;
    let voice3Count = 0;

    users.forEach((user, index) => {
        // Mettre à jour les compteurs en fonction du choix de voix
        if (user.voiceOption === '1') {
            voice1Count++;
        } else if (user.voiceOption === '2') {
            voice2Count++;
        } else if (user.voiceOption === '3') {
            voice3Count++;
        }

        // Créer et ajouter une carte pour chaque utilisateur
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p>Option de voix: ${user.voiceOption}</p>
            <p>Numéro de téléphone: ${user.phone}</p>
            <button onclick="showPasswordInput(${index})">Supprimer</button>
            <div id="password-section-${index}" class="password-section" style="display: none;">
                <input type="password" id="password-${index}" placeholder="Entrez le mot de passe" />
                <button onclick="deleteUser(${index})">Confirmer la suppression</button>
            </div>
        `;
        userList.appendChild(userCard);
    });

    // Mettre à jour l'affichage des compteurs
    document.getElementById('voice1Count').innerText = voice1Count;
    document.getElementById('voice2Count').innerText = voice2Count;
    document.getElementById('voice3Count').innerText = voice3Count;
}

// Fonction pour afficher le champ de saisie du mot de passe
function showPasswordInput(index) {
    document.getElementById(`password-section-${index}`).style.display = 'block';
}

// Fonction pour supprimer un utilisateur après vérification du mot de passe
function deleteUser(index) {
    const passwordInput = document.getElementById(`password-${index}`).value;
    if (passwordInput === PASSWORD) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    } else {
        alert('Mot de passe incorrect');
    }
}

// Affiche les utilisateurs lors du chargement de la page
document.addEventListener('DOMContentLoaded', displayUsers);
