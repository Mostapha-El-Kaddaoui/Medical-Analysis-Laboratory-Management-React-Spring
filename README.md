# Blood Analysis Laboratory Management System

A full-stack web application for managing medical blood analyses and patient appointments, built with **React** (front-end) and **Spring Boot** (back-end).

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

This application helps a **Laboratoire d'Analyse Médicale** (Medical Analysis Laboratory) to manage blood analysis tests and patient appointments (rendezvous). The admin panel manages analyses and appointments, while clients can view results, reserve appointments, and learn about the laboratory.

---

## Features

- Present the laboratory and its services
- Allow clients to view analysis results
- Enable clients to book appointments
- Admin dashboard to manage appointments: creation, modification, and deletion
- Admin dashboard to manage analysis results: creation, modification, and deletion
- Display charts and statistics for better data visualization and readability


---
## Technologies

#### Front-end

- React  
- React Router  
- Recharts  
- React Icons  
- Tailwind CSS  
- Vite  

#### Back-end

- Spring Boot  
- Spring Data JPA  
- Lombok  
- Two REST APIs (Analyses & Rendezvous)


---

## Project Structure

### Front-end (`src/`)

- `components/Admin` — Admin dashboard components (AddAnalyse, AddRendezvous, Charts, Management, etc.)  
- `components/Client` — Client pages and UI components (LandingPage, AnalysesResult, Reserver, etc.)  
- `pages` — Routing pages for Admin and Client views  
- `assets` — Images, icons, logos  
- `style` — CSS files  
- `lib` — Utility functions  

### Back-end

- `ENTITYS` — Java entities (Analyse, Rendezvous)  
- `REPOSITORY` — Spring Data repositories  
- `SERVICES` — Business logic and service implementations  
- `WEB` — REST API controllers and configuration  

---

## Usage

- Admin users can log in to manage analyses and rendezvous, visualize statistics via charts  
- Clients can view laboratory info, reserve appointments, and check analysis results  

---

## Screenshots

### Home Page
<img width="667" height="1600" alt="image" src="https://github.com/user-attachments/assets/591a4beb-cc59-4f95-8f9d-dfac1bc86c3e" />

### Appointment Reservation Page
<img width="1366" height="1357" alt="image" src="https://github.com/user-attachments/assets/2b9f06c7-e2f4-420e-94c1-55da03d114cc" />

### Check Results
<img width="1366" height="645" alt="image" src="https://github.com/user-attachments/assets/b8063446-c398-4c0b-9bc9-61d49de3cfa2" />

<img width="1366" height="1250" alt="image" src="https://github.com/user-attachments/assets/d0e5ca39-1db4-421c-ad4f-5153c36470ab" />

### Admin Dashboard
<img width="1366" height="647" alt="image" src="https://github.com/user-attachments/assets/7193aae7-3afe-41b2-b903-fe47913e7c67" />
<img width="1366" height="645" alt="image" src="https://github.com/user-attachments/assets/7e98b9ad-937e-4c25-a1dc-b02a4d2690b7" />
<img width="1366" height="645" alt="image" src="https://github.com/user-attachments/assets/d49766f8-e6de-4092-aa48-dad41b500de7" />


---

## API Endpoints

- `/api/analyses` (GET) — Get list of all analyses  
- `/api/analyses` (POST) — Add a new analysis  
- `/api/analyses/{id}` (PUT) — Update analysis by ID  
- `/api/analyses/{id}` (DELETE) — Delete analysis by ID  
- `/api/rendezvous` (GET) — Get list of all rendezvous  
- `/api/rendezvous` (POST) — Add a new rendezvous  
- `/api/rendezvous/{id}` (PUT) — Update rendezvous by ID  
- `/api/rendezvous/{id}` (DELETE) — Delete rendezvous by ID  

---

## Contributing

- Fork the repository  
- Make your changes  
- Submit a pull request for review  

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

*Created by Mostapha El Kaddaoui*
