<?php
include('../core/header.php');
if(!isset($_SESSION['id'])) header('location: /planet-dev/index.php');
?>

<div id="dashboard">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>settings</a></li>
          <li><a href="/planet-dev/index.php">logout</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden sm:block">
      <a class="btn btn-ghost normal-case text-xl">Planet DEV</a>
    </div>
    <div class="navbar-end">
      <input id="search" type="search" placeholder="Search" class="input input-bordered max-w-xs" />
      <button id="search_btn" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>
  </div>

  <div class="flex justify-between m-5">
      <div class="dropdown dropdown-hover">
      <label tabindex="0" class="btn btn-ghost m-1">Sort</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Sort by name</a></li>
          <li><a>Sort by date</a></li>
      </ul>
      </div>
      <label for="add" class="btn btn-primary" onClick="addBtn()">add article</label>
  </div>

  <div id="article_alert"></div>

  <div class="overflow-x-auto m-5">
    <table class="table w-full mb-12">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>date</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="dashboard_table"></tbody>
    </table>
  </div>

  <!-- Details modal -->
  <input type="checkbox" id="details" class="modal-toggle" />
  <div class="modal">
    <input type="hidden" id="id_holder">
    <div class="modal-box relative">
      <label id="close_details_modal" for="details" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <h3 class="text-lg font-bold" id="title"></h3>
      <p class="py-4" id="content"></p>
      <p class="py-4 font-bold">Author: <span class="font-normal" id="author"></span></p>
      <p class="py-4 font-bold">Category: <span class="font-normal" id="category"></span></p>
      <p class="py-4 font-bold">Keywords: <span class="font-normal" id="keywords"></span></p>
      <div class="float-right">
        <label class="btn btn-outline btn-warning" onClick="updateBtn()" for="add">Edit</label>
        <button class="btn btn-outline btn-error" onClick="deleteArticle()">Delete</button>
      </div>
    </div>
  </div>

  <!-- Add modal -->
  <input type="checkbox" id="add" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative">
      <label for="add" id="close_modal" class="btn btn-sm btn-circle absolute right-2 top-2" onClick="resetForm()">✕</label>
      <div id="article">
        <form id="add-article-1" class="space-y-4 md:space-y-6 py-5 border-b" action="#">
            <div>
              <label for="article-title-1" class="block mb-2 text-sm font-medium text-white">Title <span class=" text-red-600">*</span></label>
              <input type="text" onkeyup="fieldChecker(this)" name="article-title-1" id="article-title-1" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Title" required="">
              <label for="article-title-1" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
            </div>
            <div>
              <label for="article-content-1" class="block mb-2 text-sm font-medium text-white">Content <span class=" text-red-600">*</span></label>
              <textarea name="article-content-1" onkeyup="fieldChecker(this)" id="article-content-1" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""></textarea>
              <label for="article-title-1" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
            </div>
            <div>
              <label for="article-category-1" class="block mb-2 text-sm font-medium text-white">Category <span class=" text-red-600">*</span></label>
              <select name="article-category-1" onChange="fieldChecker(this)" id="article-category-1" class="article_field select select-bordered w-full">
                <option disabled value="0" selected>Category</option>
                <option value="1">Web Development</option>
                <option value="2">Mobile Development</option>
                <option value="3">Artificial Intelligence</option>
                <option value="4">Cyber Security</option>
                <option value="5">DevOps</option>
              </select>
              <label for="article-title-1" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
            </div>
            <div>
              <label for="article-author-1" class="block mb-2 text-sm font-medium text-white">Author <span class=" text-red-600">*</span></label>
              <input type="text" onkeyup="fieldChecker(this)" name="article-author-1" id="article-author-1" class="article_field border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="author">
              <label for="article-title-1" class="mt-1 text-xs font-light text-red-600" hidden>This field can not be empty</label>
            </div>
            <div>
              <label for="article-keywords-1" class="block mb-2 text-sm font-medium text-white">Keywords</label>
              <input type="text" name="article-keywords-1" id="article-keywords-1" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Keywords separate by space">
            </div>
        </form>
      </div>
      <div class="float-right my-5">
        <button id="add-field" class="btn btn-outline my-1" onClick="addField()">Add field</button>
        <button id="remove-field" class="btn btn-outline btn-error my-1" onClick="removeField()" hidden>Remove field</button>
        <button id="save-article" class="btn btn-outline btn-success my-1" onClick="saveArticle()">Save</button>
        <button id="update-article" class="btn btn-outline btn-success my-1" onClick="updateArticle()" hidden>Update</button>
      </div>
    </div>
  </div>
</div>

<div id="stats" class="min-h-screen absolute top-0 right-0 left-0 z-[-1] opacity-0">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>settings</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <a class="btn btn-ghost normal-case text-xl">Planet DEV</a>
    </div>
  </div>

  <div class="block sm:flex sm:justify-center sm:align-middle">
    <div class="stats shadow bg-neutral-900 flex justify-center m-5 text-center">
      <div class="stat">
        <div class="stat-title">Total Number Of Articles</div>
        <div class="stat-value">5</div>
        <div class="stat-desc">Last Update <?= date("H:i") ?></div>
      </div>
    </div>
    <div class="stats shadow bg-neutral-900 flex justify-center m-5 text-center">
      <div class="stat">
        <div class="stat-title">Total Number Of Users</div>
        <div class="stat-value">13</div>
        <div class="stat-desc">Last Update <?= date("H:i") ?></div>
      </div>
    </div>
    <div class="stats shadow bg-neutral-900 flex justify-center m-5 text-center">
      <div class="stat">
        <div class="stat-title">Total Number Of Writers</div>
        <div class="stat-value">5</div>
        <div class="stat-desc">Last Update <?= date("H:i") ?></div>
      </div>
    </div>
  </div>
  <div class="mb-16" id="chart">
    <canvas class="mx-auto w-full md:w-[60vw]" id="myChart" aria-label="Hello ARIA World" role="img"></canvas>
  </div>
  <p class="opacity-0">.</p>
</div>

<div class="btm-nav z-50">
  <button id="dashboard_btn" onClick="dashboard()" class="active ">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </button>
  <button id="stats_btn" onClick="stats()" class="">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </button>
</div>

<?php include('../core/footer.php') ?>