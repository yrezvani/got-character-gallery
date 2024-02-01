Before students deploy their own apps we must first create one. We'll also need to install and configure `vitest` in our React application in order to run tests.

Students will need to do the following in the **terminal**:

  1. Create a React project titled `lor-cicd-pipeline` with `Vite`:
    * `npm create vite@4.4.1 lor-cicd-pipeline -- --template react`
  2. Navigate into our project directory and install the base dependencies  
    * `cd lor-cicd-pipeline && npm install`.
  3. Install Vitest and React Testing Library dependencies:
    * `npm install vitest --save-dev`
    * `npm install jsdom --save-dev`
    * `npm install @testing-library/react @testing-library/jest-dom --save-dev`
  4. Add `"test": "vitest"` to your npm scripts in `package.json`

Then we'll need to add our test configuration and setup to `vite.config.js` as follows:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  }
});
```

In the `src` directory found in `02-Ins-Prewritten-Tests` we have provided prewritten tests.

Go through the tests below to explain to students what each test is doing. After Students will write code to make these tests pass.

Inside of `src/tests/setup.js` we find the code to setup the tests:

```js
// src/tests/setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
    cleanup();
});
```

#### Set Up Test File Structure

1. Inside of the `src` directory, we have a directory called `tests`:
2. Inside of `src/tests/`, we have three files:
   * `App.test.jsx`, `CharacterGallery.test.jsx`, and `Character.test.jsx`