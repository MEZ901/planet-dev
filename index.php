<?php
include('./src/core/header.php');
?>

<div class="hero min-h-screen" style="background-image: url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Planet DEV</h1>
            <p class="mb-5">Stay ahead of the curve by reading the latest tech news on our website, where we bring you the most cutting-edge information on the industry.</p>
            <label for="auth" class="btn btn-primary">Get started</label>
        </div>
    </div>
</div>

<input type="checkbox" id="auth" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="auth" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 id="header" class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Login
        </h1>
        <!-- login -->
        <form id="login" class="space-y-4 md:space-y-6" action="#">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" name="email" id="login-email" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" name="password" id="login-password" placeholder="••••••••" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="">
            </div>
            <button type="submit" class="w-full btn btn-primary" onClick="window.location.href='./src/views/dashboard.php'">Login</button>
            <p class="text-sm font-light text-gray-400">
                Don't have an account? <a href="#" onClick="signUp()" class="font-medium hover:underline text-primary-500">Sign up here</a>
            </p>
        </form>
        <!-- signup -->
        <form id="signup" class="space-y-4 md:space-y-6" action="#" hidden>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Username</label>
                <input type="text" name="username" id="username" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="username" required="">
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" name="email" id="email" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="">
            </div>
            <div>
                <label for="confirm-password" class="block mb-2 text-sm font-medium text-white">Confirm password</label>
                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="">
            </div>
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border rounded bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="">
                </div>
                <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-300">I accept the <a class="font-medium hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
            </div>
            <button type="submit" class="w-full btn btn-primary">Create an account</button>
            <p class="text-sm font-light text-gray-400">
                Already have an account? <a href="#" onClick="login()" class="font-medium hover:underline text-primary-500">Login here</a>
            </p>
        </form>
    </div>
  </div>
</div>

<?php include('./src/core/footer.php') ?>