
![Logo](https://scafit.ca/assets/logo@3x.png)


# SCAFit - Client

An app that provides React component scaffolding for efficient development. Simply enter a few details about your component and a downloadable zip file will be created including;  Component.js, Component.scss and index.js files for your component all linked and ready for use.

SCAFit is built with React using; React-Router-Dom, Sass and Axios as some key dependencies. It requires the use of SCAFit - Server in order to be fully operational. This is available [here](https://github.com/nicholas-hucal/scaf-it-server).


## Tech Stack

**Client:** React, Sass, React Router Dom, Axios

**Server:** Node, Express, Passport, Knex, MySQL, OAuth


## Features

- Authorization provided by Github login
- User account including saving, editing, deleting components
- Easy to use editor with live saving to database of all actions
- Simple download feature to access newly scaffolded components


## Run Locally

To deploy this project download or clone the project locally.

```cd``` to the project directory

Run ```npm install``` to install dependencies

Open the config folder and enter the required details in index.js to your current production and development domains.

```
export const API_URL =
process.env.NODE_ENV === 'production'
  ? 'https://yourdomain.here'
  : 'http://localhost:5000';
```

Run ```npm start``` to run application

You will then need to follow the [link](https://github.com/nicholas-hucal/scaf-it-server) to install the server including creating a github application for OAuth. 

## Roadmap

- Live deployment, due to the complex nature of file creation, deletion and serving, Heroku was unable to handle this application. A more robust server will be required.

- Drag and drop implementation in the editor to allow for more complex component construction and organization

- File selection; to allow for the user to determine the types of files to be exported

- Projects; allow users to create a project that will house many components and allow one larger download


## Lessons Learned

Throughout development of this project I found a few challenges

Manipulation of state

- Having more experience with class based components I found that there was more capability in incorporating hooks into this project in order to harness some of the powerful capability they provide. This proved difficult in a few scenarios, and I look forward to learning alot more about them.

RESTful development

- By incorporating multiple small requests to the api on each row add/edit/delete the app runs much smoother than it's original iteration of saving one object at final save. This proved difficult at first to handle all of these requests, however once completed this allowed for much more complex data structures.