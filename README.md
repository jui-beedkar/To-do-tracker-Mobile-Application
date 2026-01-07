<<<<<<< HEAD
### Tech Stack
Frontend

- Framework: React Native (v0.81) with Expo (v54)
- Routing: Expo Router (File-based routing)
- Language: TypeScript
- Styling: expo-linear-gradient , @expo/vector-icons
- State & Data: Convex React Client (Real-time data synchronization)
Backend

- Platform: Convex (BaaS)
- Database: Convex Real-time Database
- API: Convex Query and Mutation functions (Serverless)
### Key Functionalities
1. Task Management:
   
   - Create: Add new tasks via an input field.
   - Read: View a list of tasks, sorted by newest first.
   - Update: Edit existing task text inline.
   - Delete: Remove individual tasks with a confirmation prompt.
   - Complete: Toggle tasks as done/active with a single tap.
2. Advanced Features:
   
   - Real-time Sync: All changes are instantly reflected across devices without refreshing.
   - Batch Operations: "Reset App" feature in the settings (Danger Zone) to delete all tasks at once.
   - UI/UX:
     - Loading states with spinners.
     - Empty states when no tasks exist.
     - Confirmation alerts for destructive actions.
     - Haptic feedback and smooth gradients.
### Project Structure Highlights
- app/ : Contains the screens and navigation layout (Expo Router).
- convex/ : Backend logic including database schema ( schema.ts ) and API functions ( todos.ts ).
- components/ : Reusable UI components like TodoInput , DangerZone , EmptyState .
- assets/styles/ : Centralized styling logic.
=======
# To-do-tracker-Mobile-Application
A Modern To-Do List Application built with React Native (Expo) for the frontend and Convex for the backend. It provides a seamless, real-time experience for managing daily tasks with a polished user interface.
>>>>>>> f8fbc7ae164de5a520bb533145aaefc6b987d104
