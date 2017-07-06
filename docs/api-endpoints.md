# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

**BONUS**
- `GET /api/users/:id`
  - User show page

### Session

- `POST /api/session`
  - Signs users in

- `DELETE /api/session`
  - Signs users out

### Places

- `GET /api/places`
  - Places index

-  `GET /api/places/:id`
  - Place show page

### Reviews

- `POST /api/places/:placeId/reviews`
  - Creates review for place

- `PATCH /api/reviews/:id`
  - Update place review

- `DELETE /api/reviews/:id`
  - Delete place review

**BONUS**
- `GET /api/users/:userId/reviews`
  - User reviews index
