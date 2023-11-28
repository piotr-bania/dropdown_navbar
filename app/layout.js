import Navbar from './components/navigation/Navbar'
import './globals.scss'

export const metadata = {
    title: '3d dropdown menu',
    description: '3d dropdown menu',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
