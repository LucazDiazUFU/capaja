// Função para alternar entre Login e Registro
document.getElementById("showRegister").addEventListener("click", function () {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function () {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
});

// Função para realizar o login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const adminEmail = "admincapaja@capaja.com";
    const adminPassword = "admincapaja123";

    // Verifica se as credenciais são corretas
    if (email === adminEmail && password === adminPassword) {
        // Esconde o login e exibe a home com as notícias
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("newsBox").classList.remove("hidden");
    } else {
        alert('Credenciais inválidas!');
    }
});
