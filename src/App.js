import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
function Router() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { element: _jsx(NotFound, {}) })] }) }));
}
function App() {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(Router, {}) }));
}
export default App;
