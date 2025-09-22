import { cookies } from "next/headers";
import { jwtDecode }  from "jwt-decode";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    redirect("/noaccess");
  }

  try {
    const decoded = jwtDecode(token);
    const role = decoded.role;
    console.log("the role", role)

    if (role !== "admin") {
      redirect("/noaccess");
    }
  } catch (err) {
    console.error("Invalid token");
    redirect("/noaccess");
  }

  return <>{children}</>;
}