document.addEventListener('DOMContentLoaded', () => {
    const methodsContainer = document.getElementById('methods-container');
    const addMethodForm = document.getElementById('add-method-form');

    // Fetch and display first aid methods
    fetch('/blockchain')
        .then(response => response.json())
        .then(data => {
            data.forEach(block => {
                const method = document.createElement('div');
                method.innerHTML = `<h3>${block.data.procedure}</h3><p>${block.data.steps.join('<br>')}</p>`;
                methodsContainer.appendChild(method);
            });
        });

    // Add a new first aid method
    addMethodForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const procedure = document.getElementById('procedure').value;
        const steps = document.getElementById('steps').value.split('\n');
        const data = { procedure, steps };

        fetch('/aid-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('First aid method added successfully');
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
