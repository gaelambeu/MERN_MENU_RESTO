import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "E-Menu Restaurant",
  description: "Floris Hôtel Menu restaurant ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="mx-auto bg-center bg-no-repeat bg-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
