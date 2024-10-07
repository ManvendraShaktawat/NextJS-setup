<!--

    Setup steps:
    1. Project setup - npx create-next-app my-next-app
    2. Run - npm run dev

    NOTE: The rendering is SSR by default in Next.js

    Project description:
    1. Using the Next.js App Router structure instead of traditional 'pages' directory
    2. Each folder inside src/app is treated as a route
    3. Files (page.tsx) inside each folder serve as the actual page for that route
    4. page.tsx - root page of your application, corresponding to the '/' route
    5. Reusable components go inside 'components/' folder inside 'src'
    6. layout.tsx - for consistent layout (e.g., a header/footer) across multiple pages

    Special features:
    1. Fetching Data (async) on the Server, before rendering HTML (src/app/posts)
    2. Dynamic routes, i.e. src/app/posts/[id]
    3. Server components (by default)
        - Benefits: faster, SEO-friendly, no JS sent to client
        - useful when only server-side data fetching is required
        - src/app/posts
    4. Client components (add "use client")
        - Benefits: make use of React hooks or DOM events, interactivity
        - handle user input, forms, buttons, localstorage, window, document, etc.
        - src/app/count
    5. Mixed components (server + client)
        - for eg. embedding a client compomemt inside a server component
        - Next.js only sends the JavaScript needed for Client Components
        - Server Components are pre-rendered and sent as HTML
    6. API routes
        - way to create a backend functionality in Next.js
        - used for handling form submissions, accessing databases, or third-party APIs
        - route folders added inside the 'app/api' folder
        - eg. /api/posts route called from 'posts' page

 -->
