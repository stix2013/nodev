# Adding an "About" Page

This document outlines the steps taken to add a new "About" page to the Next.js application.

## 1. Create the Page Directory

First, a new directory was created for the "About" page components:

```bash
mkdir -p webapp/src/app/about
```

## 2. Create the Page Component

Next, the React component for the "About" page was created in `webapp/src/app/about/page.tsx`:

```tsx
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">About Page</h1>
      </div>
    </main>
  );
}
```

## 3. Add Navigation

Finally, a navigation link to the new "About" page was added to the main page (`webapp/src/app/page.tsx`):

```diff
--- a/webapp/src/app/page.tsx
+++ b/webapp/src/app/page.tsx
@@ -1,10 +1,15 @@
 import Image from "next/image";
 
 export default function Home() {
   return (
-    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
-      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
-        <Image
+    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
+      <nav className="flex gap-4 self-center">
+        <a href="/" className="text-blue-500 hover:underline">Home</a>
+        <a href="/about" className="text-blue-500 hover:underline">About</a>
+      </nav>
+      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
+        <Image
           className="dark:invert"
           src="/next.svg"
           alt="Next.js logo"

```
