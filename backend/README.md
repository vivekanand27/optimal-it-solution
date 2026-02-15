# Optimal IT Solution – API (NestJS + MongoDB)

Backend for the contact form: stores submissions in MongoDB and optionally sends email via SMTP.

## Setup

1. **Install dependencies**
   ```bash
   cd backend && npm install
   ```

2. **Environment**
   - Copy `.env.example` to `.env`
   - Set `MONGODB_URI` (e.g. `mongodb://localhost:27017/optimal-it` or MongoDB Atlas connection string)
   - For email: see **Gmail configuration** below

### Gmail configuration (contact form emails)

Gmail no longer allows “Less secure app access”. Use an **App Password**:

1. **Turn on 2-Step Verification** (required for App Passwords)
   - Go to [Google Account](https://myaccount.google.com/) → **Security**
   - Under “How you sign in to Google”, enable **2-Step Verification**

2. **Create an App Password**
   - Go to [Google Account](https://myaccount.google.com/) → **Security**
   - Under “How you sign in to Google”, click **App passwords**
   - Select app: **Mail**, device: **Other** (e.g. “Optimal IT Solution backend”)
   - Click **Generate** and copy the 16-character password (no spaces)

3. **Set these in `backend/.env`** (use your Gmail and the App Password you just created):

   ```env
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_SECURE=false
   MAIL_USER=optimalitsolution26@gmail.com
   MAIL_PASS=xxxx xxxx xxxx xxxx
   MAIL_FROM="Optimal IT Solution" <optimalitsolution26@gmail.com>
   MAIL_TO=optimalitsolution26@gmail.com
   ```

   Replace `MAIL_PASS` with the 16-character App Password (you can paste it with or without spaces).

4. **Restart the backend** so it picks up the new env vars. Contact form submissions will then be emailed to `MAIL_TO`.

3. **Run MongoDB** (if local)
   - Start MongoDB locally, or use a cloud instance (e.g. [MongoDB Atlas](https://www.mongodb.com/atlas))

## Run

- **Development:** `npm run start:dev` (runs on port 3001 by default)
- **Production:** `npm run build` then `npm run start:prod`

## Contact API

- **POST /contact**  
  Body: `{ "name": string, "email": string, "message": string }`  
  - Saves to MongoDB
  - If SMTP is configured, sends an email to `MAIL_TO` with the submission and sets Reply-To to the sender

## Frontend

In the Next.js app, set `NEXT_PUBLIC_API_URL` to the API base URL (e.g. `http://localhost:3001` for dev, or your deployed API URL in production).
