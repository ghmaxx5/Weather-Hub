# Overview

This is a modern full-stack web application built with React and Express, featuring a clean landing page with multiple sections (hero, features, about, contact). The application follows a monorepo structure with shared types and database schemas, using TypeScript throughout. It's designed as a responsive web template with modern UI components and interactive features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for styling with CSS variables for theming
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and data fetching
- **React Hook Form** with Zod validation for form handling

The frontend follows a component-based architecture with:
- Reusable UI components in `/components/ui/`
- Feature-specific components in `/components/`
- Page components in `/pages/`
- Custom hooks in `/hooks/`
- Utilities and configurations in `/lib/`

## Backend Architecture
- **Express.js** server with TypeScript
- **Vite** middleware integration for development hot reloading
- RESTful API structure with routes prefixed under `/api`
- Modular route registration system
- Error handling middleware
- Request logging middleware for API endpoints

The backend uses:
- Storage abstraction layer with interface-based design
- In-memory storage implementation (easily replaceable with database)
- Centralized route management
- Development-specific tooling integration

## Data Storage
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Neon Database** integration via serverless driver
- Database schema definitions in shared directory for type consistency
- Zod schemas generated from Drizzle tables for runtime validation
- Migration support through Drizzle Kit

The current schema includes:
- User management with username/password authentication
- UUID primary keys with database-generated defaults

## Authentication & Session Management
- Session-based authentication infrastructure ready
- PostgreSQL session store configured (`connect-pg-simple`)
- Secure cookie handling with HTTP-only flags
- CORS and credential handling for cross-origin requests

## Component System
- **Radix UI** primitives for accessibility-first components
- **Class Variance Authority** for component variant management
- **Tailwind CSS** with custom design tokens
- Dark mode support through CSS variables
- Comprehensive component library including forms, dialogs, navigation, data display

The design system features:
- Consistent spacing and typography scales
- Semantic color system with light/dark mode
- Responsive breakpoints and mobile-first approach
- Custom CSS properties for easy theming

# External Dependencies

## Core Framework Dependencies
- **React 18** - Frontend framework with hooks and concurrent features
- **Express.js** - Backend web framework
- **TypeScript** - Type safety across the entire stack
- **Vite** - Build tool and development server

## Database & ORM
- **Drizzle ORM** - Type-safe SQL toolkit and query builder
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **Drizzle Kit** - Database migration and introspection tool

## UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI component library for accessibility
- **Lucide React** - Icon library with React components
- **shadcn/ui** - Pre-built component library

## Form Handling & Validation
- **React Hook Form** - Performant forms with minimal re-renders
- **Zod** - Schema validation library
- **@hookform/resolvers** - Validation resolvers for React Hook Form

## State Management & Data Fetching
- **TanStack Query** - Server state management and caching
- **Wouter** - Lightweight React router

## Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

## Session Management
- **connect-pg-simple** - PostgreSQL session store for Express sessions
- **express-session** (implied) - Session middleware for Express

## Utility Libraries
- **clsx** - Conditional className utility
- **class-variance-authority** - Component variant management
- **date-fns** - Date utility library
- **nanoid** - URL-safe unique ID generator