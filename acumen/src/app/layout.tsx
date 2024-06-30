
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import {Plus_Jakarta_Sans} from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/context/them-provider'
import { Suspense } from 'react';
const jakarta = Plus_Jakarta_Sans
({subsets:['latin']})
export default function RootLayout({
  children,
}:Readonly<{children:React.ReactNode}>)  {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={jakarta.className} suppressHydrationWarning>
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
              <Suspense fallback={<div>Loading...</div>}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          </Suspense>
            <Toaster/>
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  )
}