# TrustTrack – Transparent Donation Platform
> A role-based donation platform focused on backend-enforced authorization and transparent fund usage.

## Overview
TrustTrack is a role-based donation platform that ensures transparent and verifiable fund usage through backend-enforced authorization and milestone-based approvals.

## Problem Statement
Most donation platforms allow users to send money to NGOs but provide limited or delayed visibility into how those funds are actually used. Reporting is often manual, periodic, and difficult to verify, which leads to loss of donor trust, reduced funding for genuine NGOs, and misuse of donations going unnoticed.

## Solution
TrustTrack is designed as a role-based system where authorization and fund control are enforced on the backend. Donations follow a milestone-based approval flow, allowing NGOs to submit proof of work and enabling admins to approve fund releases. This ensures accountability while giving donors visibility into fund usage.

## User Roles
- **Donor:** Views campaigns, donates, tracks fund usage
- **NGO:** Creates campaigns, submits proofs, requests fund release
- **Admin:** Verifies NGOs, approves milestones, controls fund release
> Demo accounts are used for role simulation during development.

## Key Features
- Role-based authentication (JWT)
- Protected routes
- Backend-enforced authorization
- Milestone-based fund control

## Tech Stack
- Frontend: React, Vite
- Backend: Node.js, Express
- Auth: JWT

## Screenshots
![Login Page](/screenshots/LoginPage.png)
![Donor Dashboard](/screenshots/DonorDashboard.png)
![NGO Dashboard](/screenshots/NGODashboard.png)
![Admin Dashboard](/screenshots/AdminDashboard.png)

## How It Works
1. User logs in and receives a signed JWT from the backend.
2. The backend assigns the user role (Donor / NGO / Admin) inside the token.
3. Frontend routes users based on their role for proper UX.
4. All protected actions are authorized on the backend using JWT and role-based middleware.
5. Unauthorized users are blocked even if frontend routes are bypassed.

## Future Improvements
- Blockchain-based fund release
- Database integration
- Audit logs

## Project Status
This project currently implements the complete frontend-backend flow with role-based authentication and authorization.  
Blockchain-based fund release and database persistence are planned as future enhancements.

## Key Design Decisions
- Authorization is enforced on the backend using JWT to prevent role tampering.
- Frontend route protection is implemented only for UX, not security.
- Role-based dashboards are separated to maintain clarity and access control.
- Blockchain integration is planned after stabilizing authentication and data flow.

## Running the Project Locally

### Backend
cd trusttrack-backend  
npm install  
npm run dev  

### Frontend
cd trusttrack-frontend  
npm install  
npm run dev  
