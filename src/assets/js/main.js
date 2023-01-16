const signUp = () => {
    document.getElementById("login").setAttribute("hidden", "");
    document.getElementById("signup").removeAttribute("hidden");
}

const login = () => {
    document.getElementById("signup").setAttribute("hidden", "");
    document.getElementById("login").removeAttribute("hidden");
}