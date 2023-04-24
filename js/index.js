async function submit(e) {
    e.preventDefault();

    const login = document.getElementById("loginField").value.trim();
    const password = document.getElementById("passwordField").value.trim();

    if (login === "" || password === "") {
        const alert = document.getElementById("alert");

        alert.style.display = "block";
    } else {
        const requestBody = {
            login,
            password
        }

        const reponse = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const status = reponse.status;

        if (status === 200) {
            window.location.href = "./products.html";
        } else {
            const alert = document.getElementById("alert");

            alert.style.display = "block";
        }
    }
}

function closeAlert() {
    const alert = document.getElementById("alert");

    alert.style.display = "none";
}

window.addEventListener('load', () => {
    document.forms[0].addEventListener("submit", submit);
    document.getElementById("alertButton").addEventListener("click", closeAlert);
});