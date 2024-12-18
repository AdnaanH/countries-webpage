### Countries Webpage

This project is a responsive Countries Webpage built with React 19 (installed via Vite) and styled using vanilla CSS. The application displays a list of countries, allowing users to filter by region or search by name. Each country has a dedicated details page with additional information, and a popup provides random facts about the country.

---

### Table of Contents

1. [Features](#features)  
2. [Live Demo](#live-demo)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Technologies Used](#technologies-used)  
6. [Project Structure](#project-structure)  

---

### Features

- Displays all countries from a predefined `data.js` file.
- Filter functionality to view countries by region.
- Search functionality to find countries by name.
- Individual country detail pages with detailed information.
- Popup showing random information about the selected country.
- Fully responsive design for all devices.

---

### Live Demo

Check out the live version of the project: [Countries Webpage Live](https://vercel.com/adnan-hamisis-projects/countries-webpage-5cvx/CkSUmYNZwufED8jDMa4atYun9L1C)

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AdnaanH/countries-webpage.git
```

2. Navigate to the project directory:

```bash
cd countries-webpage
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm run dev
```

---

### Usage

1. Browse through the list of countries displayed on the homepage.
2. Use the region filter to view countries from specific regions.
3. Search for a country by entering its name in the search bar.
4. Click on a country to view its details page with more information.
5. View random information about the country through a popup by clicking learn more on the details page.

---

### Technologies Used

- **React 19**: Framework for building the user interface.
- **Vanilla CSS**: For responsive styling.
- **Vite**: Development environment for faster builds and optimized performance.
- **pnpm**: Package manager for dependency installation.

---

### Project Structure

```
countries-webpage/
├── public/                    # Static files
├── src/
│   ├── components/            # Reusable React components
│   ├── data/                  # Data source (data.js file)
│   ├── pages/                 # Application pages (Home, Country Details)
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global CSS styles
│   ├── main.jsx               # Application entry point
│   └── utils/                 # Utility functions
├── package.json               # Project dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

Feel free to explore, contribute, and provide feedback!
