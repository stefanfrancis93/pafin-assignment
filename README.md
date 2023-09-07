# Project Title
Pafin Assignment

## Technologies
- NodeJs
- ExpressJs
- Docker
- Docker Compose
- Prisma
- PostGreSQL

## Setup
### Step 1: Install packages
```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### Step 2: Start your Application
```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 3: Install Docker and Docker Compose
- Install docker and docker-compose on the system

### Step 4: Start the app
- Run the Docker daemon
- Build the docker image 
```bash
docker-compose build
```
- Run the docker image
```bash
docker-compose up -d
```

## Testing
- Hit the URL from an API testing client like Postman
- Use the token returned from the create user API (POST `/users`) for the subsequent APIs

### 1. Create a user
```
curl --location 'localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Pafin",
    "email": "test@pafin.com",
    "password": "test123"
}'
```

### 2. Get all users
- Hit the URL from an API testing client like Postman
```
curl --location 'localhost:3000/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDEwNDk1NywiZXhwIjoxNjk0MTA4NTU3fQ.8B86AfkC4WCKaN7IWGm04n7AAYWYvF8yra59kKZiWEQ'
```

### 3. Get a user by ID
- Hit the URL from an API testing client like Postman
```
curl --location 'localhost:3000/users/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDEwNDk1NywiZXhwIjoxNjk0MTA4NTU3fQ.8B86AfkC4WCKaN7IWGm04n7AAYWYvF8yra59kKZiWEQ'
```

### 3. Update a user by ID
- Hit the URL from an API testing client like Postman
```
curl --location --request PUT 'localhost:3000/users/1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDEwNDk1NywiZXhwIjoxNjk0MTA4NTU3fQ.8B86AfkC4WCKaN7IWGm04n7AAYWYvF8yra59kKZiWEQ' \
--data-raw '{
    "name": "Pafin",
    "email": "test@pafin.com",
    "password": "test123"
}'
```

### 3. Delete a user by ID
- Hit the URL from an API testing client like Postman
```
curl --location --request DELETE 'localhost:3000/users/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5NDEwNDk1NywiZXhwIjoxNjk0MTA4NTU3fQ.8B86AfkC4WCKaN7IWGm04n7AAYWYvF8yra59kKZiWEQ'
```

### Postman collection
This postman collection can be imported to test the APIs
- https://api.postman.com/collections/286906-00533fd7-010a-4bd8-a72c-d4643d1c7536?access_key=PMAT-01H9RCETDZV2A18K1ZX1AEBCVX