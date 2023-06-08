<<<<<<< HEAD
<a name="readme-top"></a>


# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠️ Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->
# 📖 [Leaderboard: Hitting the API ] <a name="about-project"></a>

** Leaderboard** is a simple website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.


## 🛠️ Built With <a name="built-with">
### Tech Stack <a name="tech-stack"></a>
- HTML
- JAVASCRIPT

</a>


### Key Features <a name="key-features"></a>

- **[Good and Simple Design]**
 **[UX/UI accessibility ]**
 **[Responsive layout]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- browser like google chrome

### Setup

Clone this repository to your desired folder:

- clone the project using by running the following command :

`git clone`
`https://github.com/hagan199/Leaderboard.git`

###  Install

 ```install
 npm install
 ```

### Test

```test
npx hint .
npx eslint .
```

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>


👤 **Emmanuel Hagan**

- GitHub: [hagan199](https://github.com/hagan199)
- LinkedIn: [Emmanunel Hagan](https://www.linkedin.com/in/emmanuel-hagan-26219a95/)


<p align="right">(<a href="#readme-top">back to top</a>)</p> 

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Add animation for the project**
- **Add the editing functionality**
- **Add the test for the project**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/hagan199/Awesome_book_ES6/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐ Show your support <a name="support"></a>

If you like this project you should give me a star.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for the opportunity

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/hagan199/Awesome_book_ES6/tree/develop/MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
=======
# HTML & CSS3 & JavaScript Course

If you are not familiar with linters, read [root level README](../README.md).

## Set-up GitHub Actions

Please do the following **steps in this order**:

1. In the first commit of your feature branch create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](.github/workflows/linters.yml) to that folder.
   - **Remember** to use the file linked above
   - **Remember** that `.github` folder starts with a dot.
2. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
3. When you open your first pull request you should see the result of the GitHub actions checks:

![gh actions checks](../assets/images/gh-actions-html-css-checks.png)

Click on the `Details` link of each action to see the full output and the errors that need to be fixed:

![gh actions failing checks](../assets/images/gh-actions-html-css-failing-checks.png)

## Set-up linters in your local env

**Note**: The `npm` package manager is going to create a `node_modules` directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a [`.gitignore`](https://git-scm.com/docs/gitignore) file and add `node_modules` to it:

```
# .gitignore
node_modules/
```

### [Lighthouse](https://developers.google.com/web/tools/lighthouse)

An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.

You can get the Lighthouse report by any of the following ways:

- [In Chrome DevTools](https://developers.google.com/web/tools/lighthouse#devtools)
- [From the command line](https://developers.google.com/web/tools/lighthouse#cli)
- [As a Node module](https://developers.google.com/web/tools/lighthouse#programmatic)
- [From a web UI](https://developers.google.com/web/tools/lighthouse#psi)

To access the report generated by Lighthouse on your pull request, click the `Details` link for the `Linters/Lighthouse` check and you will see the full output of the action:

![lighthouse report](../assets/images/lighthouse-report.png)

### [Webhint](https://webhint.io/)

A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

**NOTE:** If you are running on Windows, you need to initialize npm to create `package.json` file. 
   ```
   npm init -y
   ```

1. Run
   ```
   npm install --save-dev hint@7.x
   ```
   *not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*
2. Copy [.hintrc](.hintrc) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx hint .
   ```
5. Fix validation errors.

### [Stylelint](https://stylelint.io/)

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

1. Run

   ```
   npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
   ```

   *not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/usage/options) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### [ESLint](https://eslint.org/)

1. Run 
   ```
   npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
   ``` 
   *not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

2. Copy [.eslintrc.json](./.eslintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx eslint .` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Eslint](https://eslint.org/docs/latest/user-guide/command-line-interface#fixing-problems) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!
>>>>>>> bcf03b3dcacf18146848cd3861a4e763eb4b58cf
