# Jason Alvarez - Personal Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org). The design was inspired by a portfolio I discovered through the Reddit community.

## About This Project

This portfolio showcases my skills, projects, and experience as a developer. It features:

- A modern, glass-like UI with dark theme
- Responsive design for all devices
- Project showcase with interactive cards
- Information about my skills and experience

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: Tailwind CSS with custom glass effect components
- **Deployment**: Heroku

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Heroku

This portfolio is configured for deployment on Heroku. To deploy your own version:

1. Create a Heroku account if you don't have one
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. Login to Heroku and create a new app:

```bash
heroku login
heroku create your-portfolio-name
```

4. Add a `Procfile` to the root of your project with the following content:
```

The Procfile should contain the line `web: npm start` which tells Heroku how to start your application. This line instructs Heroku to run the "start" script from your package.json when deploying your application.

The Procfile is a simple text file without any file extension that Heroku uses to determine which command to run to start your application. In this case, it's telling Heroku to use the Node.js web process type and run the "npm start" command.
```

5. Ensure your `package.json` includes the following scripts:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start -p $PORT",
  "heroku-postbuild": "npm run build"
}
```

6. Deploy to Heroku:
```bash
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main
```

7. Open your deployed application:
```bash
heroku open
```

## Credits

Design inspiration came from a portfolio shared by a fellow developer in the Reddit community. I've adapted the concept and implemented my own version with custom styling and content.

## Contact

You can find more information about me and my work on this portfolio. For direct inquiries, please reach out through the contact form on the site.

## License

This project is my personal implementation inspired by another portfolio. In accordance with the spirit of the original work:

- You are free to use this code as inspiration for your own projects
- Please do not copy it directly
- Attribution is appreciated if you use significant portions of the code
- If you modify and reuse this code, please maintain this license notice

The original inspiration for this portfolio was created by Chun-Ho (Hugo) Lin, which was licensed under a Creative Commons Attribution 4.0 International License.

Made with passion by Jason Alvarez