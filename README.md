> ## CrudApp Using SpringBoot & ReactJs

This repository contains the source code for a simple CRUD application.

> ## 💻 Tech Used:
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=flat&logo=mysql&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=flat&logo=Hibernate&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=flat&logo=spring&logoColor=white)

### Prerequisites

#### Make sure you have the following installed on your local machine:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (or any code editor of your choice)
- [Spring Tool Suite (STS)](https://spring.io/tools) or [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [Eclipse](https://www.eclipse.org/downloads/)


### Getting Started

#### Follow these steps to clone the repository and set it up locally.

### Step 1: Clone the Repository

1. Open your terminal.
2. Clone the repository using the following command:
  ```bash
  git clone https://github.com/sachinnimbal/CrudApp.git
  ```
### Step 2: Navigate to the Project Directory
Change into the project directory:
  ```bash
  cd CrudApp
  ```
### Step 3: Navigate to the Resources Directory
##### 1. Change into the src directory:
  ```bash
  cd src
  ```
##### 2. Change into the main directory:
  ```bash
  cd main
  ```
##### 3. Change into the resources directory:
```bash
cd resources
```
### Step 4: Install Dependencies
Install the necessary npm packages:
```bash
npm install
```
### Step 5: Start the Application
Start the application:
```bash
npm start
```
### Your application should now be running. Open your browser and navigate to http://localhost:3000 (or the specified port) to view it.

### Directory Structure
```
CrudApp/
├── src/
│   ├── main/
│   │   ├── resources/
│   │   └── ...
│   └── ...
├── README.md
└── ...
```

>## Once you run the application in VS Code, you will get the following error:
```
Uncaught runtime errors:
×
ERROR
Network Error
AxiosError: Network Error
    at XMLHttpRequest.handleError (http://localhost:3000/static/js/bundle.js:65438:14)
    at Axios.request (http://localhost:3000/static/js/bundle.js:65876:41)
    at async http://localhost:3000/static/js/bundle.js:467:20
ERROR
Network Error
AxiosError: Network Error
    at XMLHttpRequest.handleError (http://localhost:3000/static/js/bundle.js:65438:14)
    at Axios.request (http://localhost:3000/static/js/bundle.js:65876:41)
    at async http://localhost:3000/static/js/bundle.js:467:20
```
### Step 6: Run the Project with Spring Boot

#### You need to run the project inside Spring Tool Suite (STS), IntelliJ IDEA, or Eclipse.

Open your project in your preferred IDE (STS, IntelliJ IDEA, or Eclipse).
Locate the main class for your Spring Boot application. It should be a class annotated with @SpringBootApplication.
Run the application using the IDE's run button.

### Step 7: Access the Application

Open your browser and navigate to http://localhost:3000 (or the specified port) to view it.
