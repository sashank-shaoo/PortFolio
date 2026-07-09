# 🚀 AI Agent Instructions

> **IMPORTANT**: This file defines the behavior of all AI agents in the project. Always follow these rules.

## 🎯 General Rules

1. **Language**: All communication, including code comments, commit messages, and documentation, MUST be in **English**.
2. **Code Style**: Follow [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).
3. **File Naming**: Use **kebab-case** for all filenames (e.g., `my-component.tsx`, `user-service.ts`).
4. **Component Naming**: Use **PascalCase** for React components (e.g., `MyComponent`, `UserProfile`).
5. **Variable Naming**: Use **camelCase** for variables and functions (e.g., `userName`, `calculateTotal`).
6. **Constants**: Use **UPPER_SNAKE_CASE** for constants (e.g., `MAX_USERS`, `API_KEY`).
7. **File Organization**: Keep related files together in the same directory.
8. **Documentation**: Document all public APIs, complex logic, and component props.
9. **Error Handling**: Implement robust error handling with meaningful error messages.
10. **Security**: Always prioritize security best practices (input validation, proper authentication, etc.).

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages (public)
│   │   ├── page.tsx        # Home page
│   │   └── ...
│   ├── (auth)/             # Authentication pages
│   │   ├── login/          # Login flow
│   │   └── register/       # Registration flow
│   ├── (dashboard)/        # Authenticated dashboard
│   │   ├── page.tsx        # Dashboard home
│   │   ├── projects/       # Project management
│   │   └── settings/       # User settings
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   └── projects/       # Project endpoints
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── ui/                 # UI primitives (shadcn/ui)
│   ├── layout/             # Layout components (header, footer, sidebar)
│   ├── auth/               # Auth components (login form, signup form)
│   ├── projects/           # Project components (project card, project list)
│   └── common/             # Common components (buttons, inputs, modals)
├── lib/                    # Utility functions and helpers
│   ├── auth.ts             # Authentication utilities
│   ├── api.ts              # API client
│   ├── utils.ts            # General utilities
│   └── validators.ts       # Validation functions
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static assets
├── styles/                 # Global styles
├── types/                  # TypeScript type definitions
├── .env.local              # Environment variables (not in git)
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Development Workflow

### 1. Authentication Flow

**Public Pages** (no auth required):
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/pricing` - Pricing page
- `/features` - Features page

**Auth Pages** (require login):
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Forgot password
- `/reset-password` - Reset password

**Dashboard Pages** (require auth):
- `/dashboard` - Dashboard home
- `/dashboard/projects` - Projects list
- `/dashboard/projects/new` - Create project
- `/dashboard/projects/[id]` - View project
- `/dashboard/projects/[id]/edit` - Edit project
- `/dashboard/settings` - User settings
- `/dashboard/billing` - Billing page

### 2. Database Schema

**User Table**:
```sql
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String?
  avatar    String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  projects  Project[]
}

enum Role {
  USER
  ADMIN
}
```

**Project Table**:
```sql
model Project {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      Status   @default(PENDING)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  userId      String
  user        User     @relation(fields: [userId], references: [id])
}

enum Status {
  PENDING
  IN_PROGRESS
  COMPLETED
}
```

### 3. API Endpoints

**Authentication**:
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

**Projects**:
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project by ID
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

## 🎨 UI/UX Guidelines

### Color Palette

**Primary Colors**:
- Primary: `#3b82f6` (blue-500)
- Primary Hover: `#2563eb` (blue-600)
- Primary Active: `#1d4ed8` (blue-700)

**Secondary Colors**:
- Secondary: `#6366f1` (indigo-500)
- Secondary Hover: `#4f46e5` (indigo-600)
- Secondary Active: `#4338ca` (indigo-700)

**Accent Colors**:
- Success: `#10b981` (emerald-500)
- Warning: `#f59e0b` (amber-500)
- Danger: `#ef4444` (red-500)
- Info: `#06b6d4` (cyan-500)

**Neutral Colors**:
- Background: `#f9fafb` (gray-50)
- Card: `#ffffff`
- Border: `#e5e7eb` (gray-200)
- Text: `#111827` (gray-900)
- Muted Text: `#6b7280` (gray-500)

### Typography

**Fonts**:
- Heading: Inter, sans-serif
- Body: Inter, sans-serif

**Sizes**:
- H1: 36px, font-bold
- H2: 30px, font-bold
- H3: 24px, font-bold
- H4: 20px, font-bold
- Body: 16px, regular
- Small: 14px, regular
- Caption: 12px, regular

### Spacing

**Spacing Scale**:
- 4px: 0.25rem
- 8px: 0.5rem
- 12px: 0.75rem
- 16px: 1rem (default)
- 20px: 1.25rem
- 24px: 1.5rem
- 32px: 2rem
- 40px: 2.5rem
- 48px: 3rem

### Component Guidelines

**Buttons**:
```tsx
// Primary button
<Button variant="primary"
