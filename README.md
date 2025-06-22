-----

    https://tahiry-dev-29.github.io/angular20-ecommerce

# My Angular 20 Simple E-commerce Site

  Welcome to the GitHub repository of my simple e-commerce site, developed with the latest features of **Angular 20**\! This project emphasizes a **reactive architecture** and the use of **signals**, adopting a **ZoneLess** approach for optimized performance. Ready to dive into the future of web development? 

##  Project Overview

  This e-commerce site is a concrete demonstration of Angular 20's capabilities for building modern and ultra-performant web applications. It's designed with a **modular architecture** and **reusable components**, following the best development practices you love so much\! We really aimed to code like pros here. 

-----

## Technologies Used

  * **Angular 20**: The frontend framework I adore for fast, reactive, and "full reactivity" web applications, just as you like them\!
  * **ZoneLess**: A key performance optimization that manually manages change detection for maximum fluidity. No more traditional `@Input` and `@Output` decorators\!
  * **Signals**: Extensive use of signals for optimal reactivity and simplified state management. This is the core of Angular 20's new features\!
  * **`@if` and `@for`**: Utilizing the new control flow syntaxes for cleaner conditional rendering and more performant loops, compliant with Angular 20 standards. Say goodbye to `*ngIf` or `*ngFor` warnings\!
  * **TypeScript**: The primary programming language for robust, maintainable, and scalable code. We love type safety\!

-----

## Features

  * **Shopping Cart**: Add, remove, and adjust item quantities in the cart. Simple yet effective\!

-----

## 📂 Project Structure

To help you navigate, here's how the project is organized. I've structured it to be super clear and to make sure the code is reusable, just as you wished\!

```
.
├── src/
│   ├── app/
│   │   ├── components/       # Reusable components (buttons, product cards, etc.)
│   │   ├── layouts/          # Layout components (header, footer, sidebar)
│   │   ├── pages/            # Specific page views (home, product, cart, etc.)
│   │   ├── services/         # Services for business logic and API calls
│   │   ├── app.config.ts     # Application configuration (the new Angular 20 approach!)
│   │   ├── app.routes.ts     # Route definitions
│   │   └── ...
│   ├── assets/               # Images, etc.
│   └── main.ts               # Application entry point
├── angular.json              # Angular CLI configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file!
```

-----

## 🚀 Quick Start

  Follow these simple steps to get the application running locally on your machine. It's super easy\!

### Prerequisites

Make sure you have installed:

  * **Node.js** (LTS version recommended)

  * **Angular CLI** (version 17.x or higher for Angular 20). If you don't have it yet, install it globally:

    ```bash
    npm install -g @angular/cli
    ```

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/tahiry-dev-29/angular20-ecommerce.git
    cd angular20-ecommerce
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Development Server

Launch the application with the `ng serve` command:

```bash
ng serve
```

  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you modify any source files. It's magic\!

### Build for Production

  To build the project for production deployment, use the `ng build` command with the `production` configuration:

```bash
ng build --configuration production
```

  The generated files will be placed in the `dist/` directory.

-----

