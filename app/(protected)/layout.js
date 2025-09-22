import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

export default function UserLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    redirect("/noaccess");
  }

  try {
    const decoded = jwtDecode(token);
    const role = decoded.role;

    if (role !== "user") {
      redirect("/noaccess"); // block admin from user panel
    }
  } catch (err) {
    console.error("Invalid token");
    redirect("/noaccess");
  }

  return (
    <main>
      {children}
    </main>
  );
}





















// import Header from '@/app/components/Header';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// export default function ProtectedPageLayout({ children }) {
//   const cookieStore = cookies();
//   const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

//   if (!isLoggedIn) {
//     redirect('/noaccess');
//   }

//   return (
//     <>
//       <main>
//         <div>{children}</div>
//       </main>
//     </>
//   )
// }