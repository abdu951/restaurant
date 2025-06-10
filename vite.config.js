
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or react from '@vitejs/plugin-react' for React projects
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(), // or react()
    eslint({
      // You can set this option to false to ignore linting during builds
      // or set it to true if you want to run ESLint during development only
      include: ['src/**/*.js', 'src/**/*.vue'], // Adjust paths as necessary
      cache: false,
      emitWarning: true, // Emit warnings instead of errors
      // Optionally, you can add other configurations here
    }),
  ],
  build: {
    // You can add any build-specific options here
  },
});
