### SnigdhaOS Tools

Welcome to the **SnigdhaOS Tools** repository! This project is a collection of web-based utilities aimed at enhancing productivity and providing solutions for various common tasks. It is built with modern web technologies for speed, scalability, and ease of use.



### 📦 Features

- **User-Friendly Interface**: Intuitive and responsive UI built with React and TypeScript.
- **Custom Tools**: A growing collection of utilities designed to solve everyday problems.
- **Optimized Build**: Powered by Vite for ultra-fast development and production workflows.
- **TailwindCSS Styling**: Modern and customizable design system for beautiful interfaces.
- **Deployable to GitHub Pages**: Easy deployment for public access and sharing.
- **Cross-Platform Support**: Works seamlessly on desktop, mobile, and tablet devices.



### 📂 Repository Structure

The repository follows a structured and organized layout for ease of development and scalability:

```
snigdhaos-tools/
├── public/                   # Static assets (e.g., favicon, index.html)
├── src/                      # Source code
│   ├── assets/               # Images, icons, and other static files
│   ├── components/           # Reusable React components
│   ├── pages/                # Individual pages of the application
│   ├── styles/               # Global and component-specific styles
│   ├── utils/                # Utility functions and helpers
│   ├── App.tsx               # Root application component
│   ├── main.tsx              # Entry point for React and Vite
│   └── vite-env.d.ts         # TypeScript definitions for Vite
├── dist/                     # Production build output (generated after build)
├── .eslintrc.js              # ESLint configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project metadata and dependencies
├── pnpm-lock.yaml            # Dependency lock file for pnpm
└── README.md                 # Project documentation
```



### 🚀 Getting Started

#### Prerequisites
Make sure you have the following installed:
- **Node.js** (16.x or later)
- **pnpm** (Preferred package manager)

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Snigdha-OS/snigdhaos-tools.git
   cd snigdhaos-tools
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

#### Running the Development Server
Start the development server with:
```bash
pnpm dev
```
The application will be served at `http://localhost:5173` and automatically open in your default browser.

#### Building for Production
To generate a production-ready build, run:
```bash
pnpm build
```
The build artifacts will be output to the `dist` directory.



### 🌐 Deployment on GitHub Pages

1. **Configure Vite**:
   Ensure the `base` path in `vite.config.js` matches your repository name:
   ```javascript
   base: '/snigdhaos-tools/',
   ```
2. **Deploy**:
   Run the deployment script:
   ```bash
   pnpm run deploy
   ```
3. **Verify**:
   Your app will be deployed at:
   ```
   https://Snigdha-OS.github.io/snigdhaos-tools/
   ```



### 🛠️ Technologies Used

- **React**: Component-based UI library.
- **TypeScript**: Type-safe JavaScript.
- **Vite**: Modern frontend build tool.
- **TailwindCSS**: Utility-first CSS framework.
- **pnpm**: Fast, efficient package manager.
- **gh-pages**: GitHub Pages deployment.



### 🤝 Contributing

We welcome contributions to improve **SnigdhaOS Tools**! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request and describe your changes.



### 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.



### 🙌 Acknowledgments

Thanks for using **SnigdhaOS Tools**! If you find it helpful, please give the repository a ⭐. Feedback and suggestions are highly encouraged to help improve this project.

Happy coding! 🎉