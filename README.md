# Car-Rental

Ultra-luxury dark-mode car rental platform with a React + Tailwind frontend and Node.js + Express + MongoDB backend.

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/cars`
- `GET /api/cars/:id`
- `GET /api/cars?brand=&category=&minPrice=&maxPrice=`
- `POST /api/bookings`
- `GET /api/bookings/user/:id`
- `PUT /api/bookings/:id/status`
