import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,  // port dev server bạn dùng, có thể đổi nếu muốn
    open: true,  // tự mở trình duyệt khi chạy dev
  },
  build: {
    outDir: 'dist',  // thư mục build ra (mặc định là dist)
  },
  resolve: {
    alias: {
      '@': '/src',  // viết tắt đường dẫn cho src
    },
  },
});
