import './globals.css'

export const metadata = {
  title: 'Tsutomu Pro Team - Captain Submission',
  description: 'Join the Tsutomu Lures Pro Team. Submit your profile to be featured on our website.',
  metadataBase: new URL('https://team-captain-form.vercel.app'),
  openGraph: {
    title: 'Tsutomu Pro Team - Captain Submission',
    description: 'Join the Tsutomu Lures Pro Team. Submit your profile to be featured on our website.',
    siteName: 'Tsutomu Lures',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Tsutomu Pro Team - Captain Submission" />
        <meta property="og:description" content="Join the Tsutomu Lures Pro Team" />
        <meta name="description" content="Join the Tsutomu Lures Pro Team. Submit your profile to be featured." />
      </head>
      <body>{children}</body>
    </html>
  )
}
