 A polished to‑do Mobile app to create, edit, complete, and delete tasks with a clean, gradient‑styled UI and instant sync across devices.


Functionality

- Create tasks: input field adds todos with isComplete=false.
- Read tasks: list of todos ordered by latest, rendered with gradients and icons.
- Toggle completion: tap checkbox to mark done/undone.
- Edit tasks: inline text editing with save/cancel.
- Delete tasks: per‑todo delete with confirmation.
- Reset app: one‑tap Danger Zone that clears all todos.
- Progress and preferences: settings screen aggregates stats and user preferences.

  
  Navigation:
- Bottom tabs with two screens: To‑Do’s and Settings.
- Stack layout wraps the tab navigator and provides global providers.

  Theming: A custom ThemeProvider drives color palettes and gradients across screens and components.

  UX details:
- Loading states while data hydrates.
- Empty states when there are no todos.
- Confirmation prompts for destructive actions.
- Safe area handling to respect device insets; responsive tab bar height.


  
Tech Stack

- Core: React Native 0.81, Expo 54, TypeScript.
- Navigation: Expo Router, react‑navigation tabs/elements/screens.
- UI/UX: expo‑linear‑gradient, @expo/vector‑icons, react‑native‑safe‑area‑context, react‑native‑gesture‑handler, react‑native‑reanimated.
- Web support: react‑native‑web to run on browsers.
- Data: Convex client and server, with generated types under convex/_generated .
- Tooling: ESLint with Expo config; scripts for start and platform runs package.json .
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
       

## Architecture

- Providers: ConvexProvider and ThemeProvider are mounted at the root to enable realtime data and theming across the app app/_layout.tsx .
- Tabs: Two screens configured with custom tab bar styling and icons _layout.tsx .
- Data model: A single todos table with text and isComplete fields schema.ts .
- Server functions: Queries and mutations for getTodos, addTodo, toggleTodo, deleteTodo, updateTodo, and clearAllTodos todos.ts .
- Client usage: The To‑Do screen calls useQuery/useMutation with generated API types for safe, reactive updates index.tsx .
- Settings screen: Composes ProgressStats, Preferences, and DangerZone with consistent gradient styling settings.tsx , and the Danger Zone clears all tasks with a warning DangerZone.tsx .
