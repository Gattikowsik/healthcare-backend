# Healthcare Backend API

A **Healthcare Backend System** built with **Node.js, Express, Prisma ORM, and PostgreSQL**.  
This backend allows users to **register, log in, manage patients and doctors, and assign patients to doctors** securely using JWT authentication.

---

## Features

- User Registration & Login with **JWT Authentication**
- CRUD APIs for **Patients** and **Doctors**
- Assign doctors to patients (**Patient–Doctor Mapping**)
- PostgreSQL as the database, modeled with Prisma ORM
- Error handling and input validation
- Environment variables for sensitive configurations

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **ORM:** Prisma  
- **Database:** PostgreSQL  
- **Authentication:** JWT (jsonwebtoken)  
- **Environment Variables:** dotenv  
- **Testing:** Postman

---

## Setup Instructions

1. **Clone the repository**


```sh
git clone <your-repo-url>
cd healthcare-backend
```



2. **Install dependencies**

```sh
npm install
```

3. **Setup PostgreSQL**

- Create a database (e.g., `healthcare_db`)
- Note your username, password, host, and port

4. **Create `.env` file in project root:**

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/healthcare_db"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

5. **Run Prisma migrations**

```sh
npx prisma migrate dev --name init
npx prisma generate
```

6. **Start the server**

```sh
npm run dev
```

Server will run on: http://localhost:5000


## API Endpoints

### Authentication
| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | /api/auth/register   | Register a new user     |
| POST   | /api/auth/login      | Log in and get JWT token|

### Patients
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | /api/patients        | Create a new patient         |
| GET    | /api/patients        | Get all patients (auth only) |
| GET    | /api/patients/:id    | Get patient details          |
| PUT    | /api/patients/:id    | Update patient               |
| DELETE | /api/patients/:id    | Delete patient               |

### Doctors
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST   | /api/doctors         | Create a new doctor   |
| GET    | /api/doctors         | Get all doctors       |
| GET    | /api/doctors/:id     | Get doctor details    |
| PUT    | /api/doctors/:id     | Update doctor         |
| DELETE | /api/doctors/:id     | Delete doctor         |

### Patient–Doctor Mappings
| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| POST   | /api/mappings        | Assign doctor to a patient         |
| GET    | /api/mappings        | Get all patient–doctor mappings    |
| GET    | /api/mappings/:id    | Get all doctors for a patient      |
| PUT    | /api/mappings/:id    | Update doctor assigned to patient  |
| DELETE | /api/mappings/:id    | Remove doctor from patient         |


## Notes

- Include the JWT token in the Authorization header for all protected routes.
- Sensitive data (DB credentials, JWT secret) should be stored in `.env`.
- Use Postman or any API client to test endpoints.