// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles.css'; // Import your custom styles after Bootstrap

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
