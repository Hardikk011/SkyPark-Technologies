# Skypark Technologies Website

## Overview

A modern corporate website for Skypark Technologies, an IT solutions company specializing in enterprise network security and infrastructure services. The application showcases the company's portfolio of IT solutions, partnerships with major corporations, and provides demo request functionality for potential clients. Built as a full-stack web application with a focus on professional presentation and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend uses React with TypeScript and follows a component-based architecture:
- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling with custom design system
- **Component Library**: Radix UI components via shadcn/ui for accessible, headless components
- **Animations**: Framer Motion for smooth animations and scroll-triggered effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
The backend follows a REST API architecture using Node.js:
- **Framework**: Express.js for HTTP server and API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless connection
- **Validation**: Zod schemas for runtime type validation
- **Session Management**: Express sessions with PostgreSQL store

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM provides type-safe database queries and migrations
- **Schema Management**: Database schemas defined in TypeScript with automatic type inference
- **Migration System**: Drizzle Kit for database schema migrations

### Development Architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Server**: Custom setup combining Vite dev server with Express API
- **TypeScript**: Strict TypeScript configuration across frontend, backend, and shared code
- **Code Organization**: Monorepo structure with shared schemas and types
- **Hot Reloading**: Vite HMR for frontend and tsx for backend development

### API Design
- **RESTful Endpoints**: Standard REST conventions for demo request management
- **Data Validation**: Request/response validation using Zod schemas
- **Error Handling**: Centralized error handling with consistent response format
- **Type Safety**: Shared TypeScript types between frontend and backend

### Component Architecture
- **Design System**: Consistent component library using shadcn/ui and Radix primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI foundation
- **Animation System**: Framer Motion for page transitions and scroll animations

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database queries and schema management

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Framer Motion**: Animation library for smooth transitions and interactions

### Development Tools
- **Vite**: Fast build tool with HMR for development
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **TanStack Query**: Data fetching and caching for React

### Third-Party Integrations
- **React Icons**: Icon library for social media and UI icons
- **Lucide React**: Modern icon set for interface elements
- **Wouter**: Minimalist routing library for React
- **React Hook Form**: Form state management and validation