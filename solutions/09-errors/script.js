// Exercice 1: Try...Catch de base
function parseJSON(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return { success: true, data: parsed };
    } catch (error) {
        return { 
            success: false, 
            error: {
                message: 'Erreur de parsing JSON',
                details: error.message
            }
        };
    }
}

document.getElementById('parseBtn').addEventListener('click', function() {
    const input = document.getElementById('jsonInput').value;
    const result = parseJSON(input);
    const resultDiv = document.getElementById('result1');
    
    if (result.success) {
        resultDiv.innerHTML = `<div class="success">JSON valide: ${JSON.stringify(result.data)}</div>`;
    } else {
        resultDiv.innerHTML = `<div class="error">${result.error.message}: ${result.error.details}</div>`;
    }
});

// Exercice 2: Types d'erreurs
function validateUser(user) {
    if (!user.name || !user.email) {
        throw new Error('Le nom et l\'email sont requis');
    }
    
    if (typeof user.age !== 'number') {
        throw new TypeError('L\'âge doit être un nombre');
    }
    
    if (user.age < 0) {
        throw new RangeError('L\'âge ne peut pas être négatif');
    }
    
    return true;
}

document.getElementById('validateBtn').addEventListener('click', function() {
    const user = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        age: parseInt(document.getElementById('userAge').value)
    };
    
    const resultDiv = document.getElementById('result2');
    
    try {
        validateUser(user);
        resultDiv.innerHTML = `<div class="success">Utilisateur valide!</div>`;
    } catch (error) {
        let errorMessage = 'Erreur: ';
        if (error instanceof TypeError) {
            errorMessage += 'Type invalide - ' + error.message;
        } else if (error instanceof RangeError) {
            errorMessage += 'Valeur hors limites - ' + error.message;
        } else {
            errorMessage += error.message;
        }
        resultDiv.innerHTML = `<div class="error">${errorMessage}</div>`;
    }
});

// Exercice 3: Gestion asynchrone
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() > 0.5;
            if (shouldFail) {
                reject(new Error('Impossible de récupérer les données utilisateur'));
            } else {
                resolve({ name: 'John Doe', age: 30 });
            }
        }, 1000);
    });
}

async function getUserData() {
    try {
        const userData = await fetchUserData();
        return { success: true, data: userData };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

document.getElementById('fetchBtn').addEventListener('click', async function() {
    const resultDiv = document.getElementById('result3');
    resultDiv.innerHTML = '<div>Chargement...</div>';
    
    const result = await getUserData();
    
    if (result.success) {
        resultDiv.innerHTML = `<div class="success">Données récupérées: ${JSON.stringify(result.data)}</div>`;
    } else {
        resultDiv.innerHTML = `<div class="error">Erreur: ${result.error}</div>`;
    }
});

// Exercice 4: Erreurs personnalisées
class ValidationError extends Error {
    constructor(field, value, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
        this.value = value;
    }
}

function validateForm(formData) {
    if (!formData.name) {
        throw new ValidationError('name', formData.name, 'Le nom est requis');
    }
    
    if (!formData.email) {
        throw new ValidationError('email', formData.email, 'L\'email est requis');
    }
    
    if (!formData.email.includes('@')) {
        throw new ValidationError('email', formData.email, 'Email invalide');
    }
    
    return true;
}

document.getElementById('validateFormBtn').addEventListener('click', function() {
    const formData = {
        name: document.getElementById('formName').value,
        email: document.getElementById('formEmail').value
    };
    
    const resultDiv = document.getElementById('result4');
    
    try {
        validateForm(formData);
        resultDiv.innerHTML = `<div class="success">Formulaire valide!</div>`;
    } catch (error) {
        if (error instanceof ValidationError) {
            resultDiv.innerHTML = `
                <div class="error">
                    Erreur de validation:<br>
                    Champ: ${error.field}<br>
                    Valeur: ${error.value}<br>
                    Message: ${error.message}
                </div>`;
        } else {
            resultDiv.innerHTML = `<div class="error">Erreur inattendue: ${error.message}</div>`;
        }
    }
}); 