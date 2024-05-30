import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto",
  description: "Crypto Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full bg-backgroundBlue">{children}</div>
      </body>
    </html>
  );
}
