// Inicializando o Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC7AgBL1Jyf2vNgQMoOAFYh2wu0niIdBSY",
    authDomain: "capaja-a44c2.firebaseapp.com",
    projectId: "capaja-a44c2",
    storageBucket: "capaja-a44c2.appspot.com",
    messagingSenderId: "744899935534",
    appId: "1:744899935534:web:f9300863c509abcdb90ebf"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Alternar entre Login e Registro
document.getElementById("showRegister").addEventListener("click", function () {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function () {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
});

// Função de Registro
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("registerForm").elements[0].value;
    const email = document.getElementById("registerForm").elements[1].value;
    const senha = document.getElementById("registerForm").elements[2].value;
    const confirmarSenha = document.getElementById("registerForm").elements[3].value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection("usuarios").doc(user.uid).set({
                nome: nome,
                email: email,
                criadoEm: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("Usuário registrado com sucesso!");
            document.getElementById("registerBox").classList.add("hidden");
            document.getElementById("loginBox").classList.remove("hidden");
        })
        .catch((error) => {
            console.error("Erro no registro:", error.message);
            alert(error.message);
        });
});

// Função de Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            document.getElementById("loginBox").classList.add("hidden");
            document.getElementById("newsBox").classList.remove("hidden");
        })
        .catch((error) => {
            console.error("Erro no login:", error.message);
            alert("Erro no login: " + error.message);
        });
});
