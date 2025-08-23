# Overview

This is a Weather Hub application - a Progressive Web App (PWA) that provides real-time weather information for Indian cities with beautiful animations and sound effects. The app features animated backgrounds, weather-based visual effects (clouds, rain, sun, lightning), city autocomplete, and immersive audio. It's fully configured for Play Store deployment as a PWA.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Application Architecture
**Weather Hub PWA** - Standalone Progressive Web App
- **Main App**: `/weather.html` - Complete weather application with animations
- **PWA Features**: Service worker, app manifest, offline functionality
- **Vanilla JavaScript**: No framework dependencies for optimal performance
- **Real-time APIs**: OpenWeatherMap integration for weather data
- **City Search**: Autocomplete using Nominatim OpenStreetMap API

## Key Features
- **Weather Animations**: Dynamic clouds, rain, sun, lightning effects
- **Sound Effects**: Immersive audio for rain and thunder
- **Indian Cities Focus**: Optimized for Indian weather locations
- **Mobile-Ready**: Responsive design for all screen sizes
- **Offline Capable**: PWA features for Play Store deployment

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