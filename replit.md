# Wond3rCard - Digital Business Cards Application

## Overview

This project is a web application for creating and managing digital business cards. Users can create customizable digital cards that they can share via QR codes, NFC, or direct links. The application features a responsive design with various sections including hero, features, pricing, testimonials, and more.

The project is built with React, TypeScript, Express, and Drizzle ORM. It uses a component-based architecture with shadcn/ui for UI components and Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern fullstack architecture with clear separation of concerns:

1. **Frontend**: React with TypeScript, built using Vite, providing a responsive SPA (Single Page Application)
2. **Backend**: Express.js server supporting REST API endpoints
3. **Database**: PostgreSQL database managed via Drizzle ORM
4. **API Pattern**: REST API with JSON responses
5. **Authentication**: User authentication system (schema is defined but implementation appears to be in progress)
6. **State Management**: React Query for server state management

### Server Structure

The server is set up as an Express application with:
- API routes (all prefixed with `/api`)
- Development tools integration (Vite middleware for development)
- Custom error handling middleware
- Logging system for API requests

### Frontend Structure

The frontend follows a component-based architecture with:
- Page components
- UI components (using shadcn/ui)
- Section components for different parts of the landing page
- Custom hooks
- Utility functions

## Key Components

### Frontend Components

1. **Layout Components**
   - Navbar
   - Footer

2. **Page Components**
   - Homepage
   - Not Found page

3. **Section Components**
   - HeroSection
   - FeaturesSection
   - PricingSection
   - TestimonialsSection
   - HowItWorksSection
   - (and more marketing-focused sections)

4. **UI Components**
   - Complete shadcn/ui component library (buttons, cards, toasts, etc.)
   - Custom UI components built on shadcn/ui

5. **Utilities**
   - QueryClient configuration
   - Tailwind utilities
   - Type definitions

### Backend Components

1. **API Routes**
   - The routes are registered in `server/routes.ts`
   - Placeholder for future endpoints

2. **Data Storage**
   - Interface for user storage
   - Memory storage implementation for development
   - Drizzle ORM schema for PostgreSQL

3. **Server Setup**
   - Express middleware configuration
   - Request logging
   - Vite integration for development

## Data Flow

1. **Frontend to Backend**:
   - React components use React Query to make API requests
   - API requests are sent to the Express backend
   - Backend responds with JSON data
   - React Query manages caching and updates

2. **Authentication Flow** (to be implemented):
   - User schema is defined with username/password fields
   - Storage interface includes methods for user operations

3. **Database Interactions**:
   - Server uses a storage interface to interact with data
   - Currently using in-memory storage
   - Schema is defined for PostgreSQL using Drizzle ORM

## External Dependencies

### Frontend Dependencies

- React & React DOM
- React Query (Tanstack Query)
- Radix UI components
- Tailwind CSS
- shadcn/ui components
- Framer Motion (for animations)
- Lucide React (for icons)
- Wouter (for routing)

### Backend Dependencies

- Express
- Drizzle ORM
- PostgreSQL (via Neon serverless)
- Zod (for schema validation)

## Deployment Strategy

The application is set up for deployment on Replit with:

1. **Development Mode**:
   - `npm run dev` - Runs the Express server with Vite middleware for hot module reloading
   - Automatically serves the React app in development

2. **Production Build**:
   - `npm run build` - Builds the React app with Vite and bundles the server with esbuild
   - `npm run start` - Runs the production build

3. **Database**:
   - Using PostgreSQL module in Replit
   - Database URL is provided via environment variable
   - Drizzle ORM for database schema management and queries

4. **Scaling**:
   - Set for autoscale deployment in the `.replit` configuration

## Getting Started for Development

1. **Setup Database**:
   - Ensure PostgreSQL is running and `DATABASE_URL` is set
   - Run `npm run db:push` to apply database schema changes

2. **Run Development Server**:
   - Run `npm run dev` to start the development server
   - Access the application at http://localhost:5000

3. **Working with API Endpoints**:
   - Add new API routes in `server/routes.ts` file
   - Use the storage interface for data operations
   - All API routes should be prefixed with `/api`

## Adding New Features

### Adding New API Endpoints

1. Modify `server/routes.ts` to add new endpoints
2. Use the `storage` interface for data operations
3. Follow the REST pattern with appropriate status codes

### Adding New Database Tables

1. Update the schema definition in `shared/schema.ts`
2. Create corresponding Zod validation schemas if needed
3. Run `npm run db:push` to apply changes to the database

### Adding New Frontend Pages

1. Create a new page component in `client/src/pages`
2. Add the route to the `Router` component in `App.tsx`
3. Connect to API data using React Query hooks

## Common Tasks

### Working with the Database

- Update schema: Modify `shared/schema.ts` and run `npm run db:push`
- Add queries: Extend the storage interface in `server/storage.ts`

### Styling Components

- Use Tailwind CSS classes for styling
- For reusable components, follow the pattern in `client/src/components/ui`
- Use the `cn` utility for conditional class names

### Managing State

- Use React Query for server state
- Use React hooks for local component state
- Define types for all state objects