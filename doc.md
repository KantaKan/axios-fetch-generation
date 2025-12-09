# Backend API Documentation

Simple REST API for managing users built with Go Fiber.

## Base URL

```
http://localhost:3000
```

## Rate Limiting

- **Limit**: 100 requests per minute per IP address
- **Response**: `429 Too Many Requests` when limit is exceeded

## API Endpoints

All endpoints are prefixed with `/api`

### Get All Users

Get a list of all users.

**Endpoint:** `GET /api/users`

**Response:** `200 OK`

```json
[
  {
    "id": 1,
    "name": "Kan Sudlhor",
    "description": "Dev",
    "profilePicURL": "https://example.com/image.jpg"
  },
  {
    "id": 2,
    "name": "Kan Again",
    "description": "TA",
    "profilePicURL": "https://example.com/image2.jpg"
  }
]
```

---

### Get User by ID

Get a specific user by their ID.

**Endpoint:** `GET /api/users/:id`

**Parameters:**

- `id` (path parameter) - User ID

**Response:** `200 OK`

```json
{
  "id": 1,
  "name": "Kan Sudlhor",
  "description": "Dev",
  "profilePicURL": "https://example.com/image.jpg"
}
```

**Error Responses:**

- `400 Bad Request` - Invalid user ID
- `404 Not Found` - User not found

---

### Create User

Create a new user.

**Endpoint:** `POST /api/users`

**Request Body:**

```json
{
  "name": "John Doe",
  "description": "Developer",
  "profilePicURL": "https://example.com/profile.jpg"
}
```

**Required Fields:**

- `name` (string) - User's name
- `description` (string) - User's description
- `profilePicURL` (string) - URL to profile picture

**Response:** `201 Created`

```json
{
  "id": 3,
  "name": "John Doe",
  "description": "Developer",
  "profilePicURL": "https://example.com/profile.jpg"
}
```

**Error Responses:**

- `400 Bad Request` - Missing required fields or invalid request body

---

### Update User

Update an existing user by ID.

**Endpoint:** `PUT /api/users/:id`

**Parameters:**

- `id` (path parameter) - User ID

**Request Body:**

```json
{
  "name": "Jane Doe",
  "description": "Designer",
  "profilePicURL": "https://example.com/new-profile.jpg"
}
```

**Response:** `200 OK`

```json
{
  "id": 1,
  "name": "Jane Doe",
  "description": "Designer",
  "profilePicURL": "https://example.com/new-profile.jpg"
}
```

**Error Responses:**

- `400 Bad Request` - Invalid user ID or request body
- `404 Not Found` - User not found

---

### Delete User

Delete a user by ID.

**Endpoint:** `DELETE /api/users/:id`

**Parameters:**

- `id` (path parameter) - User ID

**Response:** `204 No Content`

**Error Responses:**

- `400 Bad Request` - Invalid user ID
- `404 Not Found` - User not found

---

## Error Codes

| Status Code | Description       |
| ----------- | ----------------- |
| 200         | Success           |
| 201         | Created           |
| 204         | No Content        |
| 400         | Bad Request       |
| 404         | Not Found         |
| 429         | Too Many Requests |

## Features

- ✅ CORS enabled for all origins
- ✅ Request logging
- ✅ Rate limiting (100 requests/minute per IP)
- ✅ Thread-safe in-memory storage
- ✅ Input validation

## Running the Server

```bash
go run main.go
```

Server will start on port `3000`
