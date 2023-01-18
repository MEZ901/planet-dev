let articleCount = 1;
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (typeof document.getElementById("login") !== "undefined" && document.getElementById("login") !== null) {

    const loginBtn = document.querySelector("[name='login']");
    const email = document.querySelector("#login-email");
    const password = document.querySelector("#login-password");
  
    function loginChecker() {
      if (email.value.match(mailFormat) && password.value != "") {
        loginBtn.removeAttribute("disabled");
      } else {
        loginBtn.setAttribute("disabled", "");
      }
      if (email.value == "") {
        loginBtn.setAttribute("disabled", "");
      }
    }
}

if (typeof document.getElementById("signup") !== "undefined" && document.getElementById("signup") !== null) {

    const signUpBtn = document.querySelector("[name='signup']");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const text = document.querySelector("#password-text");
  
    let passwordWeak = /[a-z]/;
    let passwordMedium = /\d+/;
    let passwordStrong = /.[!,@,#,$,% ,^,&‚*, ?‚_‚~‚¯‚ (,)]/;
  
    function containsNumbers(str) {
      if (str == "") return -1;
      else if (/\d/.test(str)) return 0;
      else return 1;
    }
  
    function usernameChecker() {
      if (containsNumbers(username.value) == 1) {
        username.style.borderColor = "#27ae60";
        return true;
      } else if (containsNumbers(username.value) == 0) {
        username.style.borderColor = "#e74c3c";
        return false;
      } else {
        username.style.borderColor = "lightgrey";
        return false;
      }
    }
  
    function emailChecker() {
      if (email.value.match(mailFormat)) {
        email.style.borderColor = "#27ae60";
        return true;
      } else if (!email.value.match(mailFormat) && email.value !== "") {
        email.style.borderColor = "#e74c3c";
        return false;
      } else {
        email.style.borderColor = "lightgrey";
        return false;
      }
    }
  
    function passwordChecker() {
      var no;
      if (password.value != "") {
        if (password.value.length <= 3 && (password.value.match(passwordWeak) || password.value.match(passwordMedium) || password.value.match(passwordStrong))) no = 1;
        if (password.value.length >= 4 && ((password.value.match(passwordWeak) && password.value.match(passwordMedium)) || (password.value.match(passwordMedium) && password.value.match(passwordStrong)) || (password.value.match(passwordWeak) && password.value.match(passwordStrong)))) no = 2;
        if (password.value.length >= 8 && password.value.match(passwordWeak) && password.value.match(passwordMedium) && password.value.match(passwordStrong)) no = 3;
  
        if (no == 1) {
          text.style.display = "block";
          text.textContent = "Your password is too week.";
          text.classList.add("weak");
          password.style.borderColor = "#e74c3c";
        }
  
        if (no == 2) {
          text.textContent = "Your password is medium.";
          text.classList.add("medium");
          password.style.borderColor = "#27ae60";
        } else {
          text.classList.remove("medium");
        }
  
        if (no == 3) {
          text.textContent = "Your password is strong.";
          text.classList.add("strong");
          password.style.borderColor = "#27ae60";
        } else {
          text.classList.remove("strong");
        }
      } else {
        text.style.display = "none";
      }
      if (no == 1) return false;
      else if (no == 2) return true;
      else return true;
    }
  
    function passwordConfirmationChecker() {
      if (confirmPassword.value != "") {
        if (password.value === confirmPassword.value) {
          confirmPassword.style.borderColor = "#27ae60";
          return true;
        } else {
          confirmPassword.style.borderColor = "#e74c3c";
          return false;
        }
      } else {
        confirmPassword.style.borderColor = "lightgrey";
        return false;
      }
    }

    document.addEventListener("keyup", signupValid());
    function signupValid() {
      if (usernameChecker() && emailChecker() && passwordChecker() && passwordConfirmationChecker() && document.getElementById("terms").checked) {
        signUpBtn.removeAttribute("disabled");
      } else {
        signUpBtn.setAttribute("disabled", "");
      }
    };
  }

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
    document.getElementById("dashboard").style.opacity = "0";
    document.getElementById("stats").style.opacity = "1";
}

const dashboard = () => {
    document.getElementById("dashboard_btn").classList.add("active");
    document.getElementById("stats_btn").classList.remove("active");
    document.getElementById("stats").style.opacity = "0";
    document.getElementById("dashboard").style.opacity = "1";
}

const addField = () => {
    articleCount ++;
    let articleForm = `
        <form id="add-article-${articleCount}" class="space-y-4 md:space-y-6 py-5 border-b" action="#">
            <div>
                <label for="article-title-${articleCount}" class="block mb-2 text-sm font-medium text-white">Title</label>
                <input type="text" name="article-title-${articleCount}" id="article-title-${articleCount}" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Title" required="">
            </div>
            <div>
                <label for="article-content-${articleCount}" class="block mb-2 text-sm font-medium text-white">Content</label>
                <textarea name="article-content-${articleCount}" id="article-content-${articleCount}" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""></textarea>
            </div>
            <div>
            <label for="article-category-${articleCount}" class="block mb-2 text-sm font-medium text-white">Category</label>
            <select name="article-category-${articleCount}" id="article-category-${articleCount}" class="select select-bordered w-full">
                <option disabled selected>Category</option>
                <option>Web Development</option>
                <option>Artificial Intelligence</option>
                <option>Cyber Security</option>
            </select>
            </div>
            <div>
                <label for="article-keywords-${articleCount}" class="block mb-2 text-sm font-medium text-white">Keywords</label>
                <input type="text" name="article-keywords-${articleCount}" id="article-keywords-1" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Keywords separate by space">
            </div>
        </form>
    `;
    document.getElementById('article').innerHTML += articleForm;
    document.getElementById('remove-field').removeAttribute('hidden');
}

const removeField = () => {
    document.getElementById(`add-article-${articleCount}`).remove();
    articleCount--;
    if(articleCount == 1) document.getElementById('remove-field').setAttribute('hidden', '');
}

const resetForm = () => {
    while(articleCount > 1) {
        document.getElementById(`add-article-${articleCount}`).remove();
        articleCount--;
    }
    document.getElementById('add-article-1').reset();
}

if(document.getElementById('stats') != null){
    new Chart(document.getElementById('myChart'), {
        type: 'line',
        data: {
            labels: ['13/01', '14/01', '15/01', '16/01', '17/01', '18/01'],
            datasets: [{
            label: 'Number of articles published in a day',
            data: [13, 10, 12, 5, 6, 1],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    });
}