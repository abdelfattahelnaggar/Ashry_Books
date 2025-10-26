# Feature-Based Folder Structure

## Complete Project Structure

```
ashry-books/
├── src/
│   ├── features/                    # Feature modules (main business logic)
│   │   ├── products/               # Public storefront products feature
│   │   │   ├── components/         # Product-specific components (ProductCard, ProductList, etc.)
│   │   │   ├── hooks/              # Product-related custom hooks (useProducts, useProductFilters)
│   │   │   ├── types/              # Product TypeScript types and interfaces
│   │   │   ├── services/           # Product API calls and data fetching
│   │   │   └── utils/              # Product-specific utility functions
│   │   │
│   │   ├── admin/                  # Admin dashboard feature
│   │   │   ├── components/         # Admin-specific components (ProductForm, AdminTable, etc.)
│   │   │   ├── pages/              # Admin sub-pages (ProductManagement, Dashboard, etc.)
│   │   │   ├── hooks/              # Admin-related hooks (useProductManagement)
│   │   │   ├── types/              # Admin-specific types
│   │   │   ├── services/           # Admin API calls (CRUD operations)
│   │   │   └── utils/              # Admin utility functions
│   │   │
│   │   └── auth/                   # Authentication feature
│   │       ├── components/         # Auth components (LoginForm, ProtectedRoute, etc.)
│   │       ├── hooks/              # Auth hooks (useAuth, useLogin)
│   │       ├── types/              # Auth types (User, Credentials, etc.)
│   │       ├── services/           # Auth API calls (login, logout, verify token)
│   │       └── utils/              # Auth utilities (token management, validation)
│   │
│   ├── pages/                      # Route-level page components
│   │   ├── public/                 # Public website pages
│   │   │                           # (HomePage, ProductsPage, ProductDetailPage, etc.)
│   │   └── admin/                  # Admin dashboard pages
│   │                               # (AdminDashboard, AdminLoginPage, etc.)
│   │
│   ├── components/                 # Shared/reusable components
│   │   ├── ui/                     # UI components (shadcn/ui - Button, Input, etc.)
│   │   ├── layout/                 # Layout components (Header, Footer, Navbar, Sidebar)
│   │   └── common/                 # Common reusable components (LoadingSpinner, ErrorBoundary)
│   │
│   ├── shared/                     # Shared code across features
│   │   ├── hooks/                  # Global hooks (useDebounce, useLocalStorage)
│   │   ├── types/                  # Global TypeScript types
│   │   ├── constants/              # Constants (API URLs, status codes, etc.)
│   │   └── utils/                  # Global utility functions (formatDate, formatPrice)
│   │
│   ├── routes/                     # Routing configuration
│   │                               # (routes definition, router setup)
│   │
│   ├── services/                   # Global services
│   │                               # (API client, axios config, interceptors)
│   │
│   ├── context/                    # React Context providers
│   │                               # (AuthContext, ThemeContext, etc.)
│   │
│   ├── lib/                        # External library configurations
│   │   └── utils.ts               # (Already exists - utility functions)
│   │
│   ├── assets/                     # Static assets (images, fonts, etc.)
│   │
│   ├── App.tsx                     # Main App component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
│
├── public/                         # Public static files
│   └── favicon.ico
│
└── configuration files...
```

---

## Feature Structure Explanation

### **1. features/** - Feature-Based Modules
This is the heart of your architecture. Each feature is self-contained with its own:
- **components**: Feature-specific UI components
- **hooks**: Custom React hooks for that feature
- **types**: TypeScript interfaces and types
- **services**: API calls and data fetching logic
- **utils**: Helper functions specific to the feature

#### **features/products/** - Public Storefront
Contains everything related to displaying products to public users:
- Product cards, lists, filters
- Product data fetching
- Product types (name, price, availability, image)

#### **features/admin/** - Admin Dashboard
Contains everything for product management:
- Product CRUD forms
- Admin-only components
- Management interfaces
- Has its own `pages/` subdirectory for admin sub-routes

#### **features/auth/** - Authentication
Handles all authentication logic:
- Login forms and flows
- Protected route components
- Token management
- User session handling

---

### **2. pages/** - Route-Level Components
Page components that correspond to routes in your application.

#### **pages/public/**
- Public website pages (Home, Products, Product Details, About, Contact, etc.)

#### **pages/admin/**
- Admin pages (Dashboard, Login, Product Management, etc.)

---

### **3. components/** - Shared Components

#### **components/ui/**
- Shadcn/ui components (Button, Input, Card, etc.)
- Already exists in your project

#### **components/layout/**
- Layout components used across the app
- Header, Footer, Navbar, Sidebar
- PublicLayout, AdminLayout wrappers

#### **components/common/**
- Reusable generic components
- LoadingSpinner, ErrorBoundary, ErrorMessage
- Modal, Toast, Pagination

---

### **4. shared/** - Cross-Feature Code
Code that is used by multiple features but doesn't belong to any specific feature.

#### **shared/hooks/**
- Global custom hooks (useDebounce, useLocalStorage, useMediaQuery)

#### **shared/types/**
- Global TypeScript types and interfaces
- API response types, common interfaces

#### **shared/constants/**
- Application-wide constants
- API endpoints, status codes, messages

#### **shared/utils/**
- General utility functions
- Date formatting, price formatting, validation functions

---

### **5. routes/** - Routing Configuration
- React Router setup
- Route definitions for public and admin sections
- Route guards and protected routes

---

### **6. services/** - Global Services
- Axios instance configuration
- API client setup
- Request/response interceptors
- Global API error handling

---

### **7. context/** - React Context
- Global state management using Context API
- AuthContext (user authentication state)
- ThemeContext, CartContext (if needed later)

---

## Benefits of This Structure

### ✅ **Clear Separation of Concerns**
- Public website (`features/products`) and admin dashboard (`features/admin`) are completely separated
- Easy to find and modify code for specific features

### ✅ **Scalability**
- Adding new features is straightforward - create a new folder under `features/`
- Each feature is self-contained and doesn't leak into others

### ✅ **Maintainability**
- Related code is grouped together
- Easy to understand what each part does
- Simpler onboarding for new developers

### ✅ **Reusability**
- Shared components and utilities are clearly separated
- Easy to identify what can be reused vs feature-specific

### ✅ **Type Safety**
- TypeScript types are organized per feature
- Shared types are in a dedicated location

---

## Example Usage Patterns

### **Public Storefront Flow:**
```
User visits → pages/public/HomePage.tsx
           → uses features/products/components/ProductList
           → fetches data via features/products/services
           → displays using components/layout/PublicLayout
```

### **Admin Dashboard Flow:**
```
Admin logs in → features/auth/components/LoginForm
             → redirected to pages/admin/AdminDashboard
             → uses features/admin/components/ProductForm
             → CRUD operations via features/admin/services
             → wrapped in components/layout/AdminLayout
```

---

## Next Steps

1. **Public Website:**
   - Create product display components in `features/products/components/`
   - Define product types in `features/products/types/`
   - Build public pages in `pages/public/`

2. **Admin Dashboard:**
   - Create admin login in `features/auth/components/`
   - Build product management forms in `features/admin/components/`
   - Create admin pages in `pages/admin/`

3. **Shared Infrastructure:**
   - Set up API client in `services/`
   - Configure routing in `routes/`
   - Create layout wrappers in `components/layout/`

---

**Happy Coding! 🚀**

