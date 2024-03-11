# react-lesson
Teaching project about React

# Steps to init project

## Setup environment
First of all if it's not already done, install [Git](https://git-scm.com/) and create [Github](https://github.com/) account  
You have two ways to setup project environment, directly on your computer or by using devcontainer powered by VS Code and Docker.  


### Dev Container
To run dev container you need to have [Docker](https://docs.docker.com/engine/install/) installed on your computer. On VS Code install the following extension [ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). Once your environment is ready open Vs Code in this directory, open the command palette (default : CTRL + SHIFT + P) and run cmd : "Open Folder in Container".

The running container will have node environment installed with typescript and pnpm.
The container workspace will have also the recommended VS Code extensions. 

### On computer
To setup environment directly on your computer follow these steps by installing following dependencies :  
* [Node JS](https://nodejs.org/en)
* [PNPM](https://pnpm.io/fr/)
On  VS Code install these extensions : 
* [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Init project 
Once your environment is ready open VS Code in this directory and run cmd in your terminal : ```pnpm install```  
This command will download all dependencies of the project by reading the file [package.json](package.json)

## Tips 
I generated this project with the following cmd : ```pnpm create vite react-lesson --template react-swc-ts```
This command scaffold (generate automatically) projet by reading [template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) from Vite.


# Run your project ⏯️
Congratulation the project is ready to run ! In your terminal run the following cmd : ```pnpm dev```  
This command will start the vite development server on http://localhost:5173/
