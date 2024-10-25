import type { Metadata } from "next";
import "./globals.css";
import { ContactModalContextProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "EcoBuild Solutions",
  description:
    "EcoBuild Solutions works at the forefront of sustainable construction, creating spaces friendly for people and the environment. We aim to make green building the new default!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ContactModalContextProvider>
          <div className="mx-auto min-h-dvh drop-shadow-lg">{children}</div>
          <ContactModal />
        </ContactModalContextProvider>
      </body>
    </html>
  );
}
