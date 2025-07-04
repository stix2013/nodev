# Project Name

This project is a web application built with a modern tech stack, utilizing DDEV for local development. The frontend is a Next.js 15 application, and the backend is a Laravel 12 API.

## Project Overview

This project is a full-stack web application designed to showcase the integration of a modern frontend framework with a robust backend API. The application provides a seamless user experience for managing data and providing a service.

The frontend, built with Next.js 15, offers a dynamic and responsive user interface. It communicates with the backend API to fetch and display data, handle user authentication, and perform various other operations.

The backend, powered by Laravel 12, provides a secure and scalable RESTful API. It handles all the business logic, data storage, and other server-side operations.

## Tech Stack

*   **Local Development:** DDEV
*   **Frontend:** Next.js 15
*   **Backend:** Laravel 12
*   **CLI:** Google Gemini CLI

## References

*   [Next.js Laravel Breeze Example](https://github.com/carlos-talavera/nextjs-laravel-breeze) - This project was used as a reference for integrating Laravel Sanctum with Next.js SSR.
*   [Integrating Laravel Sanctum with Next.js SSR: Key Points](https://charlie2code.com/blog/integrating-laravel-sanctum-with-nextjs-ssr-key-points)
*   [Node.js Development with DDEV](https://www.lullabot.com/articles/nodejs-development-ddev)

## Features

### Frontend (Next.js 15)

*   **Server-Side Rendering (SSR):** For improved performance and SEO.
*   **Static Site Generation (SSG):** For fast-loading static pages.
*   **API Routes:** For creating serverless functions within the Next.js application.
*   **Component-Based Architecture:** For building reusable UI components.
*   **Routing:** A file-system based router.

### Backend (Laravel 12)

*   **RESTful API:** For providing a standardized way for the frontend to communicate with the backend.
*   **Authentication:** Secure user authentication and authorization.
*   **Database Migrations:** For managing the database schema.
*   **Eloquent ORM:** For interacting with the database in an object-oriented way.
*   **Task Scheduling:** For running automated tasks.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [DDEV](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```
3.  **Start DDEV:**
    ```bash
    ddev start
    ```
4.  **Install dependencies:**
    ```bash
    ddev composer install
    ddev npm install
    ```

## DDEV Configuration

This project leverages DDEV for local development, with specific configurations to manage both the Laravel backend and the Next.js frontend.

*   **Project Type:** Configured as a `laravel` project with the document root set to `api/public`.
*   **Node.js Version:** DDEV is set to use Node.js version `20.19.3`.
*   **Frontend Application:** The Next.js application resides in the `webapp/` directory.
*   **PM2 Integration:** Upon `ddev start`, a `post-start` hook executes `pm2 start apps.config.js`. The `apps.config.js` file is configured to run `npm run dev` for the Next.js application within the `webapp/` directory. It also includes a fallback mechanism to reinstall `node_modules` if the initial `npm run dev` command fails.

## Folder Structure

*   `api/`: Contains the Laravel 12 backend API.
*   `webapp/`: Contains the Next.js 15 frontend application.
*   `.ddev/`: Contains the DDEV configuration files.
