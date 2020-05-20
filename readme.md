# Expensify

A project that help users to track expenses. User can add, edit, delete their expenses and also search their prvious expenses using various sorting options.

Deployed on Heroku: [Expensify](https://react-expensify-shaks.herokuapp.com/)

# Requirements

- Node
- Git

# Common Setup

Clone the repo and install the dependencies
```
git clone https://github.com/shashank52/expensify-app.git
cd expensify-app
```
Install the node modules
```
npm install
```
# Setup environemt variables

Create two files in the root directory `.env.devlopment` and `.env.test` and fill up the following details from firebase config.Create two seperate database for testing and development.

```
FIREBASE_API_KEY=<your firebase_api_key>
FIREBASE_AUTH_DOMAIN=<your firebase_auth_domain>.firebaseapp.com
FIREBASE_DATABASE_URL=https://<your_database_url>.firebaseio.com
FIREBASE_PROJECT_ID=<your_project_id>
FIREBASE_STORAGE_BUCKET=<your_storage_bucket>.appspot.com
FIREBASE_MESSAGING_SENDER_ID=<your_messaging_sender_id>
FIREBASE_APP_ID=<your_firbase_app_id>

```
For Production add the above key-value pairs as environment variables.

# Start Development Server
**To start development server run the following command**
```
npm run dev-server
```
*Open http://localhost:8080*

**To start express server run the following commands**
```
npm run build:dev
npm start
```
*Open http://localhost:3000*

# Start Production Server
**To start express server run the following commands**
```
npm run build:prod
npm start
```
*Open http://localhost:3000*

# Testing
Run the following command to test
```
npm test
```



