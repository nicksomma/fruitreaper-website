import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fruit Reaper — Premium Meta Video Ad Editing for Service Businesses",
  description:
    "Done-for-you Meta video ad editing studio for service business owners who are already spending on ads — and know the creative is the ceiling.",
  openGraph: {
    title: "Fruit Reaper — Premium Meta Video Ad Editing",
    description:
      "You film. We edit. Premium direct-response video ads delivered on a consistent monthly retainer.",
    siteName: "Fruit Reaper",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
