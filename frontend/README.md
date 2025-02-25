# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Installed Dependencies

Here are the new dependencies installed for the project:

-   **@testing-library/jest-dom**: Provides custom jest matchers for asserting on DOM nodes.
-   **@testing-library/react**: Simple and complete React DOM testing utilities.
-   **@types/styled-components**: TypeScript definitions for styled-components.
-   **axios**: Promise-based HTTP client for the browser and Node.js.
-   **chart.js**: Simple yet flexible JavaScript charting library.
-   **react**: A JavaScript library for building user interfaces.
-   **react-chartjs-2**: React components for Chart.js.
-   **react-dom**: Serves as the entry point of the DOM-related rendering paths.
-   **react-icons**: SVG library for React.
-   **react-router-dom**: DOM bindings for React Router.
-   **react-scripts**: Configuration and scripts for Create React App.
-   **react-slick**: Carousel component built with React.
-   **slick-carousel**: The accompanying package for react-slick.
-   **styled-components**: Visual primitives for the component age.

## Development Dependencies

-   **@chromatic-com/storybook**: Chromatic Storybook integration.
-   **@storybook/addon-essentials**: Set of essential Storybook addons.
-   **@storybook/addon-interactions**: Addon for Storybook that provides interactions.
-   **@storybook/addon-onboarding**: Provides onboarding steps for Storybook.
-   **@storybook/blocks**: Advanced Storybook configuration.
-   **@storybook/preset-create-react-app**: Storybook preset for Create React App.
-   **@storybook/react**: Storybook for React.
-   **@storybook/react-webpack5**: React Storybook preset for webpack 5.
-   **@storybook/test**: Test your components in Storybook.
-   **@types/jest**: TypeScript definitions for Jest.
-   **@types/node**: TypeScript definitions for Node.js.
-   **@types/react**: TypeScript definitions for React.
-   **@types/react-dom**: TypeScript definitions for React-DOM.
-   **@types/react-slick**: TypeScript definitions for react-slick.
-   **eslint-plugin-storybook**: ESLint plugin for Storybook.
-   **prettier**: Code formatter.
-   **prop-types**: Runtime type checking for React props.
-   **storybook**: The UI component explorer.
-   **typescript**: Typed JavaScript at Any Scale.
-   **webpack**: Module bundler for modern JavaScript applications.

# AT Tech Portfolio Website

## Changelog

### [15 February 2025]

-   **4a67340**: Added an animated stat card.
    -   **File Changed**: `frontend/src/components/statCard/StatCard.tsx`
-   **7ada068**: Added a file for data to be used in the portfolio page.
    -   **File Changed**: `frontend/src/commonData/data.ts`
-   **8f8ecef**: Added styled components for the portfolio page.
    -   **File Changed**: `frontend/src/components/mainContent/portfolio/Portfolio.style.tsx`
-   **bc42354**: Added a component for the portfolio page.
    -   **File Changed**: `frontend/src/components/mainContent/portfolio/Portfolio.tsx`
-   **5248009**: Adjusted min-height of WallPaper for better responsiveness on smaller screens.
    -   **File Changed**: `frontend/src/components/mainContent/homeContent/HomeContent.style.tsx`
-   **6dceac1**: Replaced `ServiceCard` with `Card` in Carousel component (refactor).
    -   **File Changed**: `frontend/src/components/carousel/Carousel.tsx`
-   **abe12ac**: Extracted some common styled components into a common file.
    -   **File Changed**: `frontend/src/components/commonStyledComponents/CommonStyledComponents.style.tsx`
-   **a6c82b7**: Added social and web development icons to assets.
    -   **Files Changed**:
        -   `frontend/src/assets/social-icon.png`
        -   `frontend/src/assets/web-development-icon.png`

### [20 February 2025]

-   **37ceb64**: Added the testimonial and award section for the portfolio page.
    -   **File Changed**: `frontend/src/components/mainContent/portfolio/Portfolio.tsx`
-   **ca4bca5**: Used the common styled components and used the data from the testimonials data file.
    -   **File Changed**: `frontend/src/components/mainContent/homeContent/HomeContent.tsx`
-   **d16254c**: Removed the unnecessary components since we use the components from commonStyledComponents.
    -   **File Changed**: `frontend/src/components/mainContent/homeContent/HomeContent.style.tsx`
-   **aaef92f**: Made the testimonial card image smaller and aligned it center.
    -   **File Changed**: `frontend/src/components/commonStyledComponents/CommonStyledComponents.style.tsx`
-   **206d7bc**: Made the root URL render the HomeContent in addition to when we navigate to /home.
    -   **File Changed**: `frontend/src/AuthenticatedApp.tsx`
-   **57b335d**: Used the testimonial data from the data file and also extracted out the render logic from the content and dynamically inserted it into the page.
    -   **File Changed**: `frontend/src/components/mainContent/about/About.tsx`
-   **fae4f8c**: Sent more props for configuration to make it more flexible.
    -   **File Changed**: `frontend/src/components/carousel/Carousel.tsx`
-   **97eb705**: Added the images to the data file so testimonial data users can access it.
    -   **File Changed**: `frontend/src/commonData/data.ts`

### [25 February 2025]

-   **aa92593**: Refactor services list to use objects with titles and links for improved navigation and use links to the services sections.
    -   **File Changed**: `frontend/src/components/slideDrawer/SlideDrawer.tsx`
-   **05abd63**: Add navigation functionality to menu items which link to different sections of services page.
    -   **File Changed**: `frontend/src/components/menuDetails/MenuDetails.tsx`
-   **7f92669**: Add smooth scrolling functionality to service sections for improved navigation.
    -   **File Changed**: `frontend/src/components/mainContent/services/Services.tsx`
-   **c1905d0**: Add services section with images and descriptions to enhance service offerings part.
    -   **Files Changed**:
        -   `frontend/src/assets/coding-education.jpg`
        -   `frontend/src/assets/other-services.jpg`
        -   `frontend/src/assets/services.jpg`
        -   `frontend/src/assets/software-development.jpg`
        -   `frontend/src/components/mainContent/services/Services.tsx`
-   **d0f0338**: Add styled components for service list and image containers.
    -   **File Changed**: `frontend/src/components/mainContent/services/Services.style.tsx`
-   **91e4c28**: Add uneven horizontal container styles for flexible layout.
    -   **File Changed**: `frontend/src/components/commonStyledComponents/CommonStyledComponents.style.tsx`

### Other Changes

-   Installed new dependencies and development dependencies to support features like charting, icons, and Storybook integration.
-   Added scripts for Prettier formatting, Storybook development, and Storybook build.
-   Updated ESLint configuration to include the Storybook plugin.
-   Updated browserslist configuration for better browser support.
