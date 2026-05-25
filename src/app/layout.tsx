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


            <nav className="Button"><Link href={"/characters"}> Characters</Link> </nav>
            <nav className="Button">
                <Link href={"/locations"}> Locations  </Link>

            </nav>

            {children}

        </main>

        </body>
        </html>


    );
}