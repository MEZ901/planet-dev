const signUp = () => {
    document.getElementById("header").innerText = "Sign up";
    document.getElementById("login").setAttribute("hidden", "");
    document.getElementById("signup").removeAttribute("hidden");
}

const login = () => {
    document.getElementById("header").innerText = "Login";
    document.getElementById("signup").setAttribute("hidden", "");
    document.getElementById("login").removeAttribute("hidden");
}

const stats = () => {
    document.getElementById("stats_btn").classList.add("active");
    document.getElementById("dashboard_btn").classList.remove("active");
}

const dashboard = () => {
    document.getElementById("dashboard_btn").classList.add("active");
    document.getElementById("stats_btn").classList.remove("active");
}