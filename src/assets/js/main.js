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
      }

      if (no == 3) {
        text.textContent = "Your password is strong.";
        text.classList.add("strong");
        password.style.borderColor = "#27ae60";
      }
    } else {
      password.style.borderColor = "lightgrey";
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

  document.addEventListener("keyup", () => {
    if (usernameChecker() && emailChecker() && passwordChecker() && passwordConfirmationChecker()) {
      signUpBtn.removeAttribute("disabled");

    } else {
      signUpBtn.setAttribute("disabled", "");
    }
  });
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
  document.getElementById("dashboard").style.zIndex = "-1"
  document.getElementById("stats").style.opacity = "1";
  document.getElementById("stats").style.zIndex = "0";
}

const dashboard = () => {
  document.getElementById("dashboard_btn").classList.add("active");
  document.getElementById("stats_btn").classList.remove("active");
  document.getElementById("stats").style.opacity = "0";
  document.getElementById("stats").style.zIndex = "-1"
  document.getElementById("dashboard").style.opacity = "1";
  document.getElementById("dashboard").style.zIndex = "0";
}

const addField = () => {
  articleCount ++;
  let articleForm = `
      <form id="add-article-${articleCount}" class="space-y-4 md:space-y-6 py-5 border-b" action="#">
          <h2 class="text-center text-lg font-semibold">Article ${articleCount}</h2>
          <div>
              <label for="article-title-${articleCount}" class="block mb-2 text-sm font-medium text-white">Title <span class=" text-red-600">*</span></label>
              <input type="text" onkeyup="fieldChecker(this)" name="article-title-${articleCount}" id="article-title-${articleCount}" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Title" required="">
              <label for="article-title-${articleCount}" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
          </div>
          <div>
              <label for="article-content-${articleCount}" class="block mb-2 text-sm font-medium text-white">Content <span class=" text-red-600">*</span></label>
              <textarea name="article-content-${articleCount}" onkeyup="fieldChecker(this)" id="article-content-${articleCount}" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""></textarea>
              <label for="article-content-${articleCount}" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
          </div>
          <div>
          <label for="article-category-${articleCount}" class="block mb-2 text-sm font-medium text-white">Category <span class=" text-red-600">*</span></label>
          <select name="article-category-${articleCount}" onChange="fieldChecker(this)" id="article-category-${articleCount}" class="article_field select select-bordered w-full">
            <option disabled value=""0 selected>Category</option>
            <option value="1">Web Development</option>
            <option value="2">Mobile Development</option>
            <option value="3">Artificial Intelligence</option>
            <option value="4">Cyber Security</option>
            <option value="5">DevOps</option>
          </select>
          <label for="article-category-${articleCount}" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
          </div>
          <div>
              <label for="article-author-${articleCount}" class="block mb-2 text-sm font-medium text-white">Author <span class=" text-red-600">*</span></label>
              <input type="text" name="article-author-${articleCount}" onkeyup="fieldChecker(this)" id="article-author-${articleCount}" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="author">
              <label for="article-author-${articleCount}" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
          </div>
          <div>
              <label for="article-keywords-${articleCount}" class="block mb-2 text-sm font-medium text-white">Keywords</label>
              <input type="text" name="article-keywords-${articleCount}" id="article-keywords-${articleCount}" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Keywords separate by space">
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
  document.getElementById('remove-field').setAttribute('hidden', '');
  document.querySelectorAll(".article_field").forEach((field) => {
    field.nextElementSibling.setAttribute("hidden", "");
    field.style.borderColor = "";
  })
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

const ajaxRequest = (formData, type) => {
  fetch('/planet-dev/src/controllers/admin.controller.php', {
    method : 'POST',
    body : formData,
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      handleResult(result, type);
    })
}

const errorAlert = (msg) => (
  `
    <div id="alert-border-2" class="flex p-4 mb-4 border-t-4 border-red-500 text-red-400 bg-gray-800" role="alert">
      <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div class="ml-3 text-sm font-medium">
        ${msg}
      </div>
      <button type="button" onClick="closeAlert(this)" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 inline-flex h-8 w-8 bg-gray-800 text-red-300 hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
        <span class="sr-only">Dismiss</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  `
)

const successAlert = (msg) => (
  `
    <div id="alert-border-3" class="m-5 flex p-4 mb-4 border-t-4 text-green-400 bg-gray-800 border-green-800" role="alert">
      <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div class="ml-3 text-sm font-medium">
        ${msg}
      </div>
      <button type="button" onClick="closeAlert(this)" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 inline-flex h-8 w-8 bg-gray-800 text-green-300 hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
        <span class="sr-only">Dismiss</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  `
)

const handleResult = (result, type) => {
  switch(type){
    case 'login':
      if(result) window.location.href="/planet-dev/src/views/dashboard.php";
      else{
        document.getElementById('loginErr').innerHTML = errorAlert('Email or password is incorrect.');
      }
    break;

    case 'insert':
      document.getElementById("close_modal").click();
      document.getElementById('article_alert').innerHTML = successAlert('The article has been added successfully!');
      showArticles();
    break;

    case 'show':
      document.getElementById("dashboard_table").innerHTML = '';
      result.map((row) => {
        document.getElementById("dashboard_table").innerHTML += `
          <tr id="article_${row['ID_ARTICLE']}" class="articles">
            <th>${row['ID_ARTICLE']}</th>
            <td id="td_title">${row['title']}</td>
            <td>${row['date']}</td>
            <td class="float-right"><label class="btn" for="details" onClick="articleDetails(${row['ID_ARTICLE']})">See Details</label></td>
          </tr>
        `;
      });
    break;

    case 'where':
      document.getElementById("title").innerHTML = result['title'];
      document.getElementById("content").innerHTML = result['content'];
      document.getElementById("author").innerHTML = result['author'];
      document.getElementById("category").innerHTML = result['category'];
      document.getElementById("keywords").innerHTML = result['keywords'];
    break;

    case 'delete':
      document.getElementById(`close_details_modal`).click();
      document.getElementById(`article_${result}`).remove();
      document.getElementById(`article_alert`).innerHTML = successAlert('The article has been deleted successfully!');
    break;

    case 'edit':
      document.getElementById("article-title-1").value = result.title;
      document.getElementById("article-content-1").value = result.content;
      document.getElementById("article-category-1").value = result.ID_CATEGORY;
      document.getElementById("article-author-1").value = result.author;
      document.getElementById("article-keywords-1").value = result.keywords;
    break;

    case 'update':
      document.getElementById("close_modal").click();
      document.getElementById(`close_details_modal`).click();
      document.getElementById('article_alert').innerHTML = successAlert('The article has been updated successfully!');
      showArticles();
    break;
  }
}

const closeAlert = (e) => {
  e.parentElement.remove();
}

const loginBtn = () => {
  let form = document.getElementById("login");
  let formData = new FormData(form);
  formData.append('type', 'login');
  ajaxRequest(formData, 'login');
}

const fieldChecker = (e) => {
  if(e.value == "" || e.value == 0){
    e.nextElementSibling.removeAttribute("hidden");
    e.style.borderColor = "red";
    return false;
  }else{
    e.nextElementSibling.setAttribute("hidden", "");
    e.style.borderColor = "";
    return true;
  }
}

const saveArticle = () => {
  let isValid = false;
  document.querySelectorAll(".article_field").forEach((field) => {
    if(!fieldChecker(field)) isValid = false;
    else isValid = true;
  })
  if(isValid == false) return false;
  let formData = new FormData();
  for(let i = 1; i <= articleCount; i++){
    formData.append(`title_${i}`, document.querySelector(`#article-title-${i}`).value);
    formData.append(`content_${i}`, document.querySelector(`#article-content-${i}`).value);
    formData.append(`category_${i}`, document.querySelector(`#article-category-${i}`).value);
    formData.append(`author_${i}`, document.querySelector(`#article-author-${i}`).value);
    formData.append(`keywords_${i}`, document.querySelector(`#article-keywords-${i}`).value);
  }
  formData.append('type', 'insert');
  ajaxRequest(formData, 'insert');
}

const showArticles = () => {
  let formData = new FormData();
  formData.append('type', 'show');
  ajaxRequest(formData, 'show');
}

const articleDetails = (id) => {
  document.getElementById("id_holder").value = id;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('type', 'where');
  ajaxRequest(formData, 'where');
}

const deleteArticle = () => {
  let id = document.getElementById("id_holder").value;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('type', 'delete');
  ajaxRequest(formData, 'delete');
}

const addBtn = () => {
  document.getElementById("update-article").setAttribute("hidden", "");
  document.getElementById("save-article").removeAttribute("hidden");
  document.getElementById("add-field").removeAttribute("hidden");
}

const updateBtn = () => {
  document.getElementById("update-article").removeAttribute("hidden");
  document.getElementById("save-article").setAttribute("hidden", "");
  document.getElementById("add-field").setAttribute("hidden", "");
  document.getElementById("remove-field").setAttribute("hidden", "");
  
  let id = document.getElementById("id_holder").value;
  let formData = new FormData();
  formData.append('id', id);
  formData.append('type', 'where');
  ajaxRequest(formData, 'edit');
}

const updateArticle = () => {
  let formData = new FormData();
  formData.append(`id`, document.querySelector(`#id_holder`).value);
  formData.append(`title`, document.querySelector(`#article-title-1`).value);
  formData.append(`content`, document.querySelector(`#article-content-1`).value);
  formData.append(`category`, document.querySelector(`#article-category-1`).value);
  formData.append(`author`, document.querySelector(`#article-author-1`).value);
  formData.append(`keywords`, document.querySelector(`#article-keywords-1`).value);
  formData.append('type', 'update');
  ajaxRequest(formData, 'update');
}

const search = () => {
  let articles = document.querySelectorAll(".articles");
  let search = document.getElementById("search");

  if(search.value != ""){
    articles.forEach(article => {
      let title = article.querySelector("#td_title").innerHTML;
      if(title.includes(search.value)){
        article.removeAttribute("hidden");
      }else{
        article.setAttribute("hidden", "");
      }
    });
  }else{
    articles.forEach(article => {
      article.removeAttribute("hidden");
    });
  }
}

showArticles();