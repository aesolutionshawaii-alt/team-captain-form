import './globals.css'

export const metadata = {
  title: 'Tsutomu Pro Team - Captain Submission',
  description: 'Join the Tsutomu Lures Pro Team. Submit your profile to be featured on our website.',
  openGraph: {
    title: 'Tsutomu Pro Team - Captain Submission',
    description: 'Join the Tsutomu Lures Pro Team. Submit your profile to be featured on our website.',
    siteName: 'Tsutomu Lures',
  },
  twitter: {
    card: 'summary',
    title: 'Tsutomu Pro Team - Captain Submission',
    description: 'Join the Tsutomu Lures Pro Team',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
