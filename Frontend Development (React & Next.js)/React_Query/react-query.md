# 🚀 TanStack Query (React Query) — Beginner Friendly Guide

## 🧠 What is TanStack Query?

**TanStack Query** (previously called **React Query**) is a powerful library that helps you **fetch, cache, and manage server-side state** easily in your React applications.

Without it, you would need to use:

* `useState`, `useEffect` (for data fetching and state management)
* Context API (for global state)
* Redux Toolkit (for data flow)

With **TanStack Query**, you can handle all this in a clean, efficient, and declarative way!

---

## 💪 Why Use TanStack Query?

It simplifies data fetching and state management from APIs with **minimal boilerplate**.

### ✅ Key Advantages

1. **Easy Data Fetching**
   Just one hook (`useQuery`) handles fetching, loading, success, and error states automatically.

2. **Built-in Caching**
   Once data is fetched, it’s cached — so switching between pages or components is instant!

3. **Background Refetching**
   When your component mounts or the app comes back online, data refetches automatically.

4. **Built-in Loading & Error States**
   You don’t need to manually create loading/error flags.

5. **Pagination & Infinite Scroll**
   Built-in tools for handling large lists or scroll-based loading.

6. **Real-time Updates**
   Automatically refresh or refetch data when something changes.

---

## 🧩 Setup

Install the package:

```bash
npm install @tanstack/react-query axios
```

---

## ⚙️ Step 1: Setup the Query Client

`QueryClientProvider` gives your app access to all React Query functionality.

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
```

### 🔹 What’s Happening Here?

* **`QueryClient`** → Manages cache, fetching, and updates.
* **`QueryClientProvider`** → Wraps your entire app to provide access to the query client.

---

## ⚙️ Step 2: Setup Axios Instance

Create a reusable Axios instance with authentication support.

```js
// api.js
import axios from "axios"

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
})

// Attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
```

---

## ⚙️ Step 3: Fetch Data with `useQuery`

```jsx
import { useQuery } from "@tanstack/react-query"
import api from "./api"

const fetchTodos = async () => {
  const response = await api.get("/todos")
  return response.data
}

function Todos() {
  const { data, isLoading, isError, error, refetch, isFetching, isRefetching } = useQuery({
    queryKey: ["todos"], //useState
    queryFn: fetchTodos, // useEffect
  })

data: Actual Data
isLoading: Loading State
isError: Error State
error: Error Object
refetch: Function to manually trigger a refetch
isFetching: Boolean to check if data is being fetched in the background
isRefetching: Boolean to check if data is being refetched in the background
isPending: Boolean to check if data is being fetched or refetched in the background
isSuccess: Boolean to check if data is successfully fetched
isError: Boolean to check if data fetching failed
isStale: Boolean to check if data is stale

## 🔑 Understanding Query Keys

Query keys uniquely identify your query.
They help TanStack Query know **what data belongs where** in the cache.

### 🧩 Example 1: Simple Query Key

```jsx
useQuery({ queryKey: ["todos"], queryFn: fetchTodos })
```

### 🧩 Example 2: Query Key with Variables

If your query depends on an ID or filter, include it in the key:

```jsx
useQuery({
  queryKey: ["todo", todoId],
  queryFn: () => fetchTodoById(todoId),
})
```

This ensures each query’s cache is **unique** and **independent**.

---

## ⚙️ Step 4: Conditional / Lazy Queries

You can disable a query from running automatically by using `enabled: false`.

```jsx
const { data, refetch, isFetching } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
  enabled: false, // won't run on mount
})

return (
  <div>
    <button onClick={() => refetch()}>Fetch Todos</button>
    {isFetching && <p>Fetching...</p>}
  </div>
)
```

---

## 🔁 Background Fetching Indicators

You can detect when data is refetching in the background:

```jsx
import { useIsFetching } from "@tanstack/react-query"

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()
  return isFetching ? <div>🔄 Fetching data...</div> : null
}
```

---

## 🧠 Advanced Feature: Query Options

You can define reusable query configurations using `queryOptions`:

```ts
import { queryOptions } from "@tanstack/react-query"

function groupOptions(id) {
  return queryOptions({
    queryKey: ["groups", id],
    queryFn: () => api.get(`/groups/${id}`),
    staleTime: 5000,
  })
}

// Usage:
useQuery(groupOptions(1))
```

---

## 📸 Visual Overview (Concept Diagram)

```
+---------------------------------------------------+
|                  QueryClientProvider              |
|---------------------------------------------------|
| useQuery() --> fetch API --> cache --> component  |
|        |                |           |             |
|   queryKey         queryFn      auto refetch      |
+---------------------------------------------------+
```

---

## 🏁 Final Verdict

> 🧩 **TanStack Query** is a game-changer for managing **server-side state** in React apps.

✅ Easy to use
✅ Handles caching, refetching & syncing
✅ Reduces boilerplate
✅ Works seamlessly with Axios

If your project relies on APIs — **TanStack Query is a must-have!**

---

