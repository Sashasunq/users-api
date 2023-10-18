
---

# Users API

A simple web application that fetches and displays user data.

## Overview

The application is built using React and Vite. It fetches user data from an external API and displays it in a table format. The application is containerized using Docker and runs on port 9090.

## Setup and Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/Sashasunq/users-api.git
   ```

2. **Build the Docker image:**
   ```
   docker build -t users-api .
   ```

3. **Run the application using Docker:**
   ```
   docker run -p 9090:80 users-api
   ```

   After running the above command, you can access the application at `http://localhost:9090`.

## Application Structure

- [`src/app.tsx`](https://github.com/Sashasunq/users-api/blob/main/src/app.tsx): The main entry point of the application.
- [`src/main.tsx`](https://github.com/Sashasunq/users-api/blob/main/src/main.tsx): Contains the main App component which fetches and displays user data.
- [`src/main.test.tsx`](https://github.com/Sashasunq/users-api/blob/main/src/main.test.tsx): Contains tests for the main App component.

## Deployment

The application is containerized using the provided [`Dockerfile`](https://github.com/Sashasunq/users-api/blob/main/Dockerfile).

### Jenkins CI/CD

A [`Jenkinsfile`](https://github.com/Sashasunq/users-api/blob/main/Jenkinsfile) is provided for continuous integration and deployment. The Jenkins pipeline is structured to:

- Set up the environment
- Build the Docker image
- Tests the app code 

Ensure we have Jenkins set up with necessary plugins and credentials to utilize this pipeline.

## Configuration

- [`vite.config.js`](https://github.com/Sashasunq/users-api/blob/main/vite.config.js): Configuration file for Vite.

## Security

The application uses basic authentication for added security. The credentials can be found and modified in the [`.htpasswd`](https://github.com/Sashasunq/users-api/blob/main/.htpasswd) file.

---
