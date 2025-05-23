// vite.config.ts
// import legacy from "file:///home/psyther/Projects/CoDrive%20Project/Codes/maps/maps/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
// import react from "file:///home/psyther/Projects/CoDrive%20Project/Codes/maps/maps/node_modules/@vitejs/plugin-react/dist/index.mjs";
// import { defineConfig } from "file:///home/psyther/Projects/CoDrive%20Project/Codes/maps/maps/node_modules/vite/dist/node/index.js";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

var vite_config_default = defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wc3l0aGVyL1Byb2plY3RzL0NvRHJpdmUgUHJvamVjdC9Db2Rlcy9tYXBzL21hcHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3BzeXRoZXIvUHJvamVjdHMvQ29Ecml2ZSBQcm9qZWN0L0NvZGVzL21hcHMvbWFwcy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wc3l0aGVyL1Byb2plY3RzL0NvRHJpdmUlMjBQcm9qZWN0L0NvZGVzL21hcHMvbWFwcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGxlZ2FjeSgpXG4gIF0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9zZXR1cFRlc3RzLnRzJyxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1YsT0FBTyxZQUFZO0FBQ3pXLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUc3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
