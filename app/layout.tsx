import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GDPR Cookie Audit Tracker — Audit Third-Party Cookies for Compliance",
  description: "Scan websites to identify all third-party cookies, track consent compliance, and generate audit reports for legal teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="600a4105-5306-47bc-980c-dc65e0f4f440"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
