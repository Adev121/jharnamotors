const API_URL =
// "http://localhost:8000"
"https://jharnamotors-backend.onrender.com";

const loginForm =
    document.getElementById("loginForm");
loginForm.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();
        const username =
            document
                .getElementById("username")
                .value;
        const password =
            document
                .getElementById("password")
                .value;
        const errorMessage =
            document
                .getElementById("errorMessage");
        const loginButton =
            document
                .getElementById("loginButton");
        try {
            loginButton.textContent =
                "Logging in...";
            loginButton.disabled = true;
            const response =
                await fetch(
                    `${API_URL}/admin`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    }
                );
            const data =
                await response.json();
            if (!response.ok) {
                errorMessage.textContent =
                    data.detail ||
                    "Invalid username or password";
                return;
            }
            localStorage.setItem(
                "admin_token",
                data.access_token
            );
            window.location.href =
                "admin.html";
        }
        catch (error) {
            errorMessage.textContent =
                "Unable to connect to server.";
            console.error(error);
        }
        finally {
            loginButton.textContent =
                "Login →";
            loginButton.disabled = false;
        }
    }
);