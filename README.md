# Book Management App

This project is a **Book Management App** developed using **Next.js 15** with the **App Router** and **TypeScript**. The app follows the **Atomic Design Pattern**, organizing components into **atoms**, **molecules**, and **organisms** to ensure a scalable and maintainable structure.

### Author

This application was developed by **Kumar Prashant**.

- GitHub: [kumarprashant111](https://github.com/kumarprashant111)
- Email: prashant.kumar5834@gmail.com
- LinkedIn: [linkedin.com/in/kumar-prashant-プラサ-ント](https://linkedin.com/in/kumar-prashant-プラサ-ント)

## Features

- **API Integration**: Utilizes the API endpoint from `https://dev-app-api.abceed.com` defined in the environment variable `NEXT_PUBLIC_API_URL`.
- **OS-Level Theme Detection**: Implements dynamic dark and light modes based on the operating system's theme preference.
- **Modular CSS**: Styled using `module.css` for scoped and maintainable styles.
- **Global State Management**: Includes a custom **App Context** for managing global states like loading indicators.

## Getting Started

Follow these steps to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Development Workflow

- **File Structure**:

  - `app/`: Contains main pages like `page.tsx`.
  - `components/`: Organized into `atoms`, `molecules`, and `organisms` for reusable UI components.
  - `context/`: Includes `AppContext` for global state management.
  - `styles/`: Modular CSS files for component-specific styling.

- **Editing Pages**: Start editing the page by modifying `app/page.tsx`. The app supports hot-reloading, so your changes will reflect immediately.

- **Fonts**: Utilizes `next/font` for optimized font loading, specifically `Noto_Sans_JP` for Japanese text.

## Screenshots

Here are some screenshots of the app:

### Dark Mode Book Detail View

![Screenshot: Dark Mode Book List View](./public/screenshots/Screenshot%202025-01-12%20at%2023.10.03.png)

### Light Mode Book Detail View

![Screenshot: Light Mode Book Detail View](./public/screenshots/Screenshot%202025-01-12%20at%2023.10.18.png)

### Light Mode Book List View

![Screenshot: Light Mode Book List View](./public/screenshots/Screenshot%202025-01-12%20at%2023.10.52.png)

### Dark Mode Book List View

![Screenshot: Dark Mode Book List View](./public/screenshots/Screenshot%202025-01-12%20at%2023.11.10.png)

## Deployment

Deploy your application using **Vercel**, the platform built by the creators of Next.js:

[Deploy on Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide to Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Explore the source code and contribute.

---

This app is designed to provide a robust and professional foundation for managing books with a focus on performance, scalability, and user experience.
