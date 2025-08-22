# Travel Planner App

## Overview
The Travel Planner App is a web application that allows users to input their travel information, including current destination, desired destination, and travel date. The app provides users with options for flights, hotels, and activities to help them plan their vacation or trip.

## Features
- User-friendly form to input travel details.
- Fetches and displays available flight options based on user input.
- Fetches and displays available hotel options based on user input.
- Fetches and displays available activities based on user input.

## Project Structure
```
travel-planner-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── FlightOptions.tsx
│   │   ├── HotelOptions.tsx
│   │   ├── ActivityOptions.tsx
│   │   └── TravelForm.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── services
│   │   ├── flightsService.ts
│   │   ├── hotelsService.ts
│   │   └── activitiesService.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd travel-planner-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.