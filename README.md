MaplyProfile React Application
MaplyProfile is a React application designed to showcase user profiles and their respective locations on an interactive map.

Folder Structure
The application follows a specific folder structure to organize its components efficiently. Here's an overview:

```
sql
Copy code
src/
│
└── components/
│
├── login/
│ ├── Login.js
│ └── login.css
│
├── redux/
│ ├── userSlice.js
│ ├── store.js
│
 │
├── home/
│ ├── Home.js
│ └── ...
│
├── dashboard/
│ ├── Dashboard.js
│ └── ...
│
├── map view/
│ ├── MapView.js
│ └── ...
│
├── users/
│ ├── Users.js
│ └── ...
│
├── profile/
│ ├── Profile.js
│ └── ...
│
├── add user/
│ ├── AddUser.js
│ └── ...
│
└── ...
```

#Components Overview

- Login: Components related to user authentication and login functionality.
- Redux: Contains actions, reducers, and store configurations for Redux state management.
- Home: Components related to the landing page or homepage of the application.
- Dashboard: Components related to the main dashboard of the application.
- Map View: Components responsible for displaying the map and user locations.
- Users: Components related to managing user data and listings.
- Profile: Components for displaying user profiles and details.
- Add User: Components for adding new users to the system.

#Usage
To use MaplyProfile, follow these steps:

- Clone this repository to your local machine.
- Navigate to the project directory.
- Install dependencies using npm install.
- Create .env file and add VITE_secretGoogleMapsKey = 'your_google_map_api_key'
- Start the development server with npm start.
- Access the application in your web browser at http://localhost:5173.

#Dependencies
MaplyProfile relies on the following dependencies:

- React
- React Router
- Redux (for state management)
- Map library (such as Mapbox, Leaflet, etc.)
- Ensure these dependencies are installed and configured properly before running the application.
