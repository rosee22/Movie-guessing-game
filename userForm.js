document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(this);

            fetch('userForm.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = data.redirect;
            })
            .catch(error => console.error("Error:", error));
        });
    } else {
        console.error("Form with ID 'userForm' not found.");
    }
});
