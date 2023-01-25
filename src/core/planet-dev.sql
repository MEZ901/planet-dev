-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 25, 2023 at 10:18 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `planet-dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `ID_ADMIN` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_ADMIN`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID_ADMIN`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@administration.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `ID_ARTICLE` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`ID_ARTICLE`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`ID_ARTICLE`, `title`, `content`, `category`, `author`, `keywords`, `date`) VALUES
(25, 'javascript', 'JavaScript is a programming language that is widely used to add interactivity and other dynamic features to websites. It is also commonly used to create web and mobile applications, and even desktop software.\r\n\r\nOne of the key features of JavaScript is its ability to run on the client side, which means that the code is executed by the user\'s web browser rather than on a remote server. This allows for faster and more responsive interactions, as well as the ability to work offline.\r\n\r\nJavaScript is also an interpreted language, which means that the code is read and executed line by line, rather than being compiled in advance like some other programming languages. This makes it easy to use and develop with, but can also make it less efficient for certain types of applications.\r\n\r\nJavaScript has a wide range of uses, from simple form validation to creating complex web and mobile apps. One of the most popular uses is to create dynamic, interactive user interfaces. For example, JavaScript can be used to validate forms, create drop-down menus, and handle user input.\r\n\r\nJavaScript can also be used to create web-based games and animations, which can be a great way to engage users and increase website traffic.\r\n\r\nIn recent years, JavaScript has also become a popular choice for building server-side applications. This is due to the release of Node.js, which is a JavaScript runtime that allows JavaScript to be executed on the server side. This has led to the creation of many popular frameworks like Express and Meteor that are used to build scalable and high-performance web applications.\r\n\r\nJavaScript is also used to develop mobile apps. This is done by using frameworks such as React Native, Cordova and PhoneGap.\r\n\r\nJavaScript is also known for its vast number of libraries and frameworks that can be used to speed up development and make it easier to create complex applications. Some popular libraries include jQuery, AngularJS, and React.\r\n\r\nIn conclusion, JavaScript is a versatile and powerful programming language that has become a staple of web development. It is essential for developing interactive and dynamic websites, and its growing popularity as a server-side language has made it even more versatile. With the advent of Node.js and its associated frameworks, JavaScript has become a popular choice for full-stack development. Its large and constantly growing ecosystem of libraries and frameworks make it easy for developers to find solutions to common problems, saving time and effort.\r\n\r\nJavaScript has also become a popular choice for developing mobile apps using frameworks such as React Native, Cordova and PhoneGap. These frameworks allow developers to build apps with JavaScript and reuse the same codebase for web and mobile apps.\r\n\r\nJavaScript is constantly evolving and new features are being added to the language with the release of new versions of ECMAScript. The latest version, ECMAScript 2020 (ES11), includes features such as optional chaining, nullish coalescing, and globalThis.\r\n\r\nOverall, JavaScript is an essential tool for web and mobile app development, and its popularity shows no signs of slowing down. It\'s a language that will continue to be in high demand, and learning it is a valuable skill for any developer looking to expand their skill set.', 1, 'ChatGPT', 'js es6 web', '2023-01-23'),
(91, 'php', 'PHP, which stands for Hypertext Preprocessor, is a widely-used programming language that is primarily used for server-side web development. It is an open-source, interpreted language that is designed to be easy to use and understand, making it a popular choice among developers of all skill levels.\r\n\r\nOne of the key features of PHP is its ability to interact with databases, making it a great choice for creating dynamic websites and web applications. PHP can be used in conjunction with various databases, including MySQL, Oracle, and PostgreSQL, making it a versatile language that can be used in a wide range of projects.\r\n\r\nIn addition to its database capabilities, PHP also offers a wide range of tools and libraries for handling common web development tasks, such as form processing, file uploads, and session management. These tools and libraries make it easy for developers to build complex web applications quickly and efficiently.\r\n\r\nAnother major advantage of PHP is its compatibility with a wide range of web servers and operating systems. PHP can be used on servers running Apache, IIS, and nginx, and it is compatible with Windows, Linux, and macOS operating systems. This makes it a great choice for businesses and organizations that want to create cross-platform web applications.\r\n\r\nOne of the most popular frameworks for PHP is Laravel, which is a free, open-source PHP web application framework. Laravel is designed to make it easier for developers to write web applications by providing a set of tools and features to handle common tasks, such as routing, authentication, and caching.\r\n\r\nDespite its many advantages, PHP is not without its drawbacks. One of the main criticisms of PHP is that it can be less performant than other languages, such as Java or C#. However, this is often due to poor coding practices rather than a limitation of the language itself.\r\n\r\nIn conclusion, PHP is a powerful, versatile programming language that is widely used for server-side web development. Its ability to interact with databases, wide range of tools and libraries, and compatibility with a wide range of web servers and operating systems make it a great choice for a wide range of projects. With the help of frameworks like Laravel, it can be even more efficient to build web applications.', 1, 'ChatGPT', 'php server-side ', '2023-01-24'),
(92, 'react js', 'ReactJS is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a large community of developers. React is widely used for building complex, interactive web and mobile applications.\r\n\r\nOne of the key features of React is its ability to efficiently update and render components, which are the building blocks of a React application. Components are reusable pieces of code that can be easily combined to create complex UI elements. React uses a virtual DOM (Document Object Model) to efficiently update and render components, making it faster and more efficient than other libraries and frameworks.\r\n\r\nReact also follows a component-based architecture, which means that the UI is broken down into small, reusable components. This makes it easier to manage and maintain large, complex applications. It also allows developers to easily reuse code across different parts of the application, making development faster and more efficient.\r\n\r\nAnother advantage of React is its flexibility. React can be used with a wide range of tools and libraries, making it easy to integrate with other technologies and build complex, interactive applications. It can be used with popular JavaScript frameworks such as Angular and Vue.js, and it can also be used with back-end technologies such as Node.js and Ruby on Rails.\r\n\r\nReact also has a large and active community of developers, which means that developers have access to a wide range of resources, tutorials, and plugins. This makes it easy for developers to learn and use React, even if they are new to the library.\r\n\r\nOne of the most popular frameworks for React is Next.js, which is a free, open-source framework that makes it easy to build server-rendered React applications. Next.js provides a set of features to handle common tasks such as routing, code splitting, and static site generation.\r\n\r\nDespite its many advantages, React is not without its drawbacks. One of the main criticisms of React is that it can be difficult to learn for developers who are new to the library. However, this is often due to the steep learning curve associated with any new technology.\r\n\r\nIn conclusion, React is a powerful and flexible JavaScript library for building user interfaces. Its ability to efficiently update and render components, component-based architecture, flexibility and the large community of developers make it a popular choice for building complex, interactive web and mobile applications. With the help of frameworks like Next.js, it can be even more efficient to build server-rendered applications.', 1, 'ChatGPT', 'javascript library open-source', '2023-01-24'),
(93, 'ChatGPT', 'I am ChatGPT, a large language model developed by OpenAI. I am a machine learning model that is trained on a massive dataset of text from the internet, allowing me to understand and generate human-like text.\r\n\r\nOne of my key features is my ability to understand and respond to natural language text. This allows me to assist users with a wide range of tasks, from answering questions to generating creative writing. My training dataset allows me to understand a wide range of topics, from technical subjects like computer science and mathematics to more general knowledge like history and current events.\r\n\r\nI am also able to generate text that is human-like, which can be useful for tasks such as text completion, summarization, and translation. I can also be used for more creative tasks, like writing stories and poetry.\r\n\r\nMy model is designed to be highly efficient and scalable, allowing me to handle large amounts of data and respond to a wide range of requests. Additionally, I am constantly being updated with new data, which allows me to improve my understanding of the world and my ability to generate text.\r\n\r\nI am a general-purpose language model and as such, I can be used in a wide variety of applications, including chatbots, information retrieval systems, content generation, and more. I can help users with a wide range of tasks, from answering questions to providing assistance with research and writing.\r\n\r\nMy development is an ongoing process, and I am constantly being updated and improved by the team at OpenAI. They are researching on ways to improve my performance and capabilities, and make me more useful for a wide range of tasks.\r\n\r\nIn conclusion, I am ChatGPT, a large language model developed by OpenAI, which is able to understand and generate human-like text. My ability to understand natural language and generate text that is human-like, along with my scalability and efficiency make me a versatile tool for a wide range of applications. With the help of my creators, I am constantly being improved and updated, to be even more useful for users.', 3, 'ChatGPT', 'openAI machine-learning ', '2023-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `ID_CATEGORY` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_CATEGORY`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID_CATEGORY`, `category`) VALUES
(1, 'Web Development'),
(2, 'Mobile Development'),
(3, 'Artificial Intelligence'),
(4, 'Cyber Security'),
(5, 'DevOps');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID_USER` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_USER`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `writer`
--

DROP TABLE IF EXISTS `writer`;
CREATE TABLE IF NOT EXISTS `writer` (
  `ID_WRITER` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_WRITER`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
