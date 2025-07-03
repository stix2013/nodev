# Steps to Add a New User Page (Improved)

1.  **Create the page file:** Create the file `webapp/src/app/users/page.tsx`. This file will define the new route `/users` in your Next.js application. Make it an `async` Server Component to fetch data on the server.

2.  **Build the User Interface:** Inside the new file, write a React component that includes:
    *   An `async` function to fetch data from the `https://api.nodev.ddev.site/users` endpoint.
    *   A simple HTML table to display the user data.
    *   Error handling for the API call.

3.  **Create a Loading UI:** Create a file `webapp/src/app/users/loading.tsx`. Next.js will automatically show this file's content to the user while the user data is being fetched.

4.  **Add Navigation:** Find the main layout or header component in your application and add a navigation link pointing to the new `/users` page to make it accessible.

5.  **Styling (Optional):** Add some basic styling to the table to make it readable.