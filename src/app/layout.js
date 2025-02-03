import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "expense-O",
  description: "AI Powered Financial Advisor",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey='pk_test_dW5pdGVkLWFkZGVyLTM0LmNsZXJrLmFjY291bnRzLmRldiQ'
    >
      <html lang="en">
        <body className={outfit.className}>
          {/* <Toaster /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}