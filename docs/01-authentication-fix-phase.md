# Phase 01: Authentication Fix

## Overall Goal
Solve the authentication problem in the Next.js and Laravel Breeze project using Laravel Sanctum for SPA authentication.

## Key Knowledge
- The project uses Next.js (webapp) and Laravel (api) with Laravel Sanctum for authentication.
- Frontend uses `axios` with `withCredentials: true` and fetches CSRF cookie.
- `SANCTUM_STATEFUL_DOMAINS` in `api/.env` must include both frontend and backend domains.
- CORS is handled by a custom `HandleCors` middleware.
- `EnsureFrontendRequestsAreStateful` middleware is crucial for Sanctum SPA authentication.
- `TrustProxies` middleware is needed for correct client IP handling in DDEV.
- The Laravel `User` model requires the `HasApiTokens` trait.
- Zod is used for type-checking API responses in the frontend.

## File System State
- MODIFIED: `webapp/src/app/users/UserList.tsx` - Refactored `getUsers` to use Zod for API response validation and fixed duplicate function.
- MODIFIED: `api/bootstrap/app.php` - Configured Laravel middleware for Sanctum SPA authentication and CORS.
- MODIFIED: `api/app/Models/User.php` - Added `HasApiTokens` trait.
- CREATED: `webapp/src/lib/api-types.ts` - Defined Zod schemas for API types (User, Post).
- CREATED: `api/app/Http/Middleware/HandleCors.php` - Implemented custom CORS handling middleware.
- CREATED: `api/app/Http/Middleware/TrustProxies.php` - Implemented trusted proxies middleware.

## Recent Actions
- Installed Zod in `webapp`.
- Created `webapp/src/lib/api-types.ts`.
- Applied `UserSchema` to `webapp/src/app/users/UserList.tsx` and resolved a duplicate function.
- Ran `npm run lint` in `webapp` (passed).
- Investigated frontend login logic (`webapp/src/app/login/page.tsx`).
- Reviewed Laravel Sanctum configuration (`api/config/sanctum.php`, `api/.env`).
- Identified missing CORS and proxy middleware files.
- Modified `api/bootstrap/app.php` to include necessary middleware.
- Created `api/app/Http/Middleware/HandleCors.php` and `api/app/Http/Middleware/TrustProxies.php`.
- Created and switched to git branch `fix/auth-middleware`.
- Committed all authentication-related changes to `fix/auth-middleware`.

## Current Plan
1. [DONE] Create a new branch for the authentication fix.
2. [DONE] Modify `api/bootstrap/app.php` to include necessary Sanctum and web middleware.
3. [DONE] Create `api/app/Http/Middleware/HandleCors.php` for CORS handling.
4. [DONE] Create `api/app/Http/Middleware/TrustProxies.php` for proxy handling.
5. [DONE] Ensure `HasApiTokens` trait is used in `api/app/Models/User.php`.
6. [DONE] Commit all authentication-related changes to the new branch.
7. [TODO] Instruct the user to clear Laravel cache and restart DDEV to apply changes.
8. [TODO] Instruct the user to verify environment variables (`SANCTUM_STATEFUL_DOMAINS`, `APP_URL`, `NEXT_PUBLIC_API_URL`).
9. [TODO] Test the authentication flow (login, access protected routes).
