
import Header from "@/layout/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased h-screen w-screen"
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
