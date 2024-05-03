# SetTracker Frontend

## Introduction

Welcome to the frontend repository of SetTracker, a React Native application designed for strength training enthusiasts. This part of the application is responsible for providing a user-friendly interface that allows users to effortlessly track their training sets, group exercises into custom workout sessions, and monitor their progress over time.

The frontend communicates with the backend service to retrieve, display, and update data in real-time. This ensures that users have access to their latest training information and can manage their workouts with ease, all from their mobile devices. Our goal is to make tracking your strength training as simple and efficient as possible, eliminating the need for traditional pen and paper methods.

## Technologies Used

The SetTracker frontend is built using a range of modern technologies designed for robust and scalable mobile application development:

- **React Native**: A powerful framework that allows developers to create native apps for both Android and iOS using a single JavaScript codebase.
- **Expo**: An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- **React Native Paper**: A material design library with highly customizable components to provide a consistent look and feel across the app.
- **React Query**: A library for fetching, caching, and updating data in React applications, helping to manage server state with ease.
- **Axios**: A promise-based HTTP client for making HTTP requests from the browser to the backend.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity, used for writing unit tests.
- **React Native Testing Library**: Builds on top of Jest to provide light utility functions for testing React Native components, encouraging better testing practices.
- **Expo Apple Authentication**: Provides a way to authenticate users through Apple sign-in, integrated seamlessly within Expo managed projects.
- **React Navigation**: Routing and navigation for your React Native apps, including support for navigating between screens, modal views, and more.

## Prerequisites

Before you start setting up the SetTracker frontend, make sure the following prerequisite is met:

- **Backend Setup**: The backend for SetTracker must be fully set up and operational. This includes having the Azure Function app running, and the CosmosDB properly configured as outlined in the backend repository. Ensure you have the backend's URL, as it will be required to configure the frontend to communicate with it.
- **An iPhone or MacOS device** Since authentication is done through Apple you wont be able to get in otherwise.
- **ExpoGo App** If you want to run this app on your own iPhone then download this app.

Make sure you have access to the backend repository and follow the setup instructions available there if you have not yet configured it.

## Setup

To set up the SetTracker frontend on your local machine, follow these steps:

1. **Clone the Repository**
   Clone the SetTracker frontend repository to your local machine using the following command:
```bash
git clone https://github.com/yourusername/SetTracker-Frontend.git
cd SetTracker-Frontend
2. **Install dependencies**
```bash
npm Install
```
3. **Set up .env file** In the root of the project create a ```.env``` file. Inside it add the following
```bash
ENV="development"
API_URL="We will replace this in later steps"
```
4. **Start the app and note the IP address**
```bash
npm start
````
You should see output logged in the terminal find this line
```bash
Metro waiting on exp://192.168.1.48:8081
```
You need to grab just the IP address.

5. **Stop the application and configure ```API_URL```** Now head back to the ```.env``` file and fill in the API_URL variable
```bash
API_URL="192.168.1.48:{BACKEND PORT NUMBER}"
```
Make sure to replace the port number. It should be ```7071```.

6. **Restart the application** Run the app again. You will see a QR code, scan it and it will open up ExpoGo or run it on ios simulator see [Expo iOS Simulator Setup](https://docs.expo.dev/workflow/ios-simulator/)

7. Thats it if successful you should now have the app up and running along with the backend!!


