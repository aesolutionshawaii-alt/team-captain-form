export const metadata = {
  title: 'Tsutomu Pro Team - Captain Submission',
  description: 'Join the Tsutomu Pro Team - Submit your captain profile',
  openGraph: {
    title: 'Tsutomu Pro Team',
    description: 'Captain profile submission for Tsutomu Lures Pro Team page',
    images: ['/ahitrooper white1.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
