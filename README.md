# RideSync - Car Pooling App 
A cross-platform (Android, iOS & Web) app that enables ride-sharing and connects drivers with riders commuting on similar routes, making commutes more efficient and eco-friendly.

This is a full-stack application developed using [Ionic React](https://ionicframework.com/), Flask, Firebase Firestore, Google Maps API, etc.

[RideSync Back-End](https://github.com/257helloWorld/codrivebackend) is developed using Flask framework.

## Features
- User Authentication: Secure login and registration system.
- Profile Management: Users can manage their profiles and preferences.
- Ride Creation: Drivers can create rides with details such as date, time, and destination.
- Ride Search: Passengers can search for available rides based on their preferences.
- Booking System: Passengers can request to join a ride, and drivers can accept or reject requests.

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
### Steps
1. Clone the repository
  ```
  git clone https://github.com/257helloworld/codrive.git
  cd codrive
  ```
2. Install dependencies
```
npm install
```
3. Set up environment variables:
Create a .env file in the root directory and add the following variables:
```
VITE_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_APP_GOOGLE_MAPS_MAP_ID=your_google_maps_id
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_BUCKET_URL=your_firebase_storage_bucket_url
```
4. Run the application
```
npm start
```

## Usage
- Register an account if you're a new user or log in if you already have an account.
- Create a profile with your personal details and preferences.
- Create a ride if you're a driver looking to share your ride.
- Search for rides if you're a passenger looking for a ride.
- Request to join a ride and wait for the driver's approval.

