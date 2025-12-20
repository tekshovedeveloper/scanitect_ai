import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/providers";
import { stores } from "../redux/store";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Head from "next/head";
 


// export const metadata = {
//   title: "ScanitectAi",
//   description: "",
//   icons: {
//     icon: '/favicon.ico',
//   },
//   alternates: {
//     canonical: 'https://scanitectai.com/',
//   },
 
// };

export const metadata = {
  title: "ScanitectAi",
  description: "",
  icons: {
    icon: [
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
        { url: '/favicon-512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  alternates: {
    canonical: 'https://scanitectai.com/',
  },
};



export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

  return (
    <html lang="en">
     
      <body>
        <Providers>
          <main className="min-h-screen">
            <div className='flex flex-wrap'>
              {/* <div className='w-1/5 h-dvh bg-slate-700'>
                <Sidebar />
              </div> */}
              <div className="w-full">
                <Header isLoggedIn={isLoggedIn} />
                <div className="w-full">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
