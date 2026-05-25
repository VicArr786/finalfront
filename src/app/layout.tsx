import Link from "next/link";
import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        <main>

                <nav className="container">

                <Link href={"/characters"}>Characters</Link>
                <Link href={"/locations"}>Locations</Link>

            </nav>

            {children}

        </main>

        </body>
        </html>


    );
}