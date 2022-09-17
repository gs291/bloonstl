# Bloons 

## bloons.gg

A new and intuitive way to view all tower statistics for Bloons Tower Defense 6.

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbbaa464-3e21-4740-8997-5cc829ab4f20/deploy-status)](https://bloons.gg)

View the website [here](https://bloons.gg).

## GraphQL API

The project contains a GraphQL API endpoint for fetching data from the database. 
The API endpoint can be found [here](https://bloons.gg/api/graphql).

The GraphQL documentation can be found on the [website](https://bloons.gg/resources#graphql). 

## Feedback

Either use GitHub's tools and resources to provide feedback to this project, 
or provide feedback through [Google Forms](https://forms.gle/YXY4qyXdgfxcFcpH7)!

## License

This project uses the GNU GPL v3 license.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Running the project locally

### Requirements

#### Node.js

[Node.js](https://nodejs.org/) (^16.14.0, >=16.0.0)

npm version 8+

#### MySQL

MySQL version 5.7.33

A local or remote MySQL database connection is required. 

The easiest method to instantiate a MySQL server is to run the supplied docker-compose file.
Docker-compose can be installed with [Docker](https://www.docker.com/). 
The best way to get Docker is to download the [Docker Desktop](https://www.docker.com/products/docker-desktop) application.

### Installation and Usage

#### Instantiate a MySQL server

The supplied docker-compose file can be used to create a MySQL database server. 

It can be created by running the following command while in the project directory:

```bash
$ docker-compose up
```

The default database name is `bloonstl`.
The default database user is `bloonstl`.
The default database user password is `admin123`.
The default database port is on `3310`.


If a different local or remote MySQL database is used ensure that `/lib/mysql/initial.sql` is used to initialize the database, 
and that `/lib/mysql/insertions.sql` is used to insert the necessary data.


#### Environment Variables

Create a file `.env.local` that contains the MySQL environment variables, or locally set the environment variables.

```sh
# .env.local

MYSQL_HOST=localhost
MYSQL_DATABASE=bloonstl
MYSQL_USERNAME=bloonstl
MYSQL_PASSWORD=admin123
MYSQL_PORT=3310
```

#### Package Installation

Install the necessary npm packages by running the following command while in the project directory:

```bash
$ npm install
```

#### Running the project

To run the project in development mode, run the following command:

```bash
$ npm run dev # Project running on localhost:3000
```

To run the project in production mode, run the following commands:

```bash
$ npm run build # Builds the production version 
$ npm run start # Runs the recently built production version on localhost:3000
```
