let articleCount = 1;

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

const addField = () => {
    articleCount ++;
    let articleForm = `
        <form id="add-article" class="space-y-4 md:space-y-6 py-5 border-b" action="#">
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