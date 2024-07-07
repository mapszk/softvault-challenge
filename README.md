# SoftVault Front-end Challenge

This is my proposal for the front-end challenge. Using Next 14, Emotion, documentated components using Storybook, and with a Dockerfile to build a Docker image ready to deploy. Before running the project, please read the notes bellow about the approach.

## Notes

Some things to keep in mind about the development of this challenge:

### CSS in JS

According to [Next.js docs](https://nextjs.org/docs/app/building-your-application/styling/css-in-js), CSS in JS is not supported using the App router structure and Server Components. Because of this we are losing an important advantage of Next.js. I didn't wanted to stop using the required libraries for this project, so I made two versions for each component, one using Emotion as a client component, and the other one is a suggestion made with TailwindCSS to avoid converting the component to a client component. In my opinion, I think it's not worth it to stop using Server Components to use CSS in JS, I would prefer the advantage of Next.js features with another styling alternative, such as CSS Modules, TailwindCSS, SASS, or even vanilla CSS.

### Components styling

I chose to write the styles of the larger components in a new file, for better readability. To style the components from Figma I chose to download the assets, some assets could't be downlaod as they exactly look in Figma because of how the design was made, so I tried to make it the more similar as possible.

## Run the project

You can run the project in a development environment using the following commands. The project doesn't require any environment variable.

Install dependencies:

    npm run install

Run:

    npm run dev

## Tests

To run the tests use this command:

    npm run test

## Storybook

To run Storybook environment and get all the documentation about components use this command:

    npm run storybook

## Deployment

You can build a Docker image for deployment using the following command:

    docker build -t TAG_NAME .
