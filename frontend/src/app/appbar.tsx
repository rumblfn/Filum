import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { ThemeSwitcher } from "@/components/ui/themeSwitcher";

import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

async function AppBar() {
  const session = await auth();
  const userData = session?.user;

  return (
    <div className={`${montserrat.className} container mx-auto flex p-2 text-xl`}>
      {userData && (
        <Link href="/dashboard">
          <div className="flex items-center">
            {userData.image && (
              <div className="mr-2">
                <Image
                  src={userData.image}
                  width={40}
                  height={40}
                  alt="User avatar"
                />
              </div>
            )}
            <p>{userData.name}</p>
          </div>
        </Link>
      )}
      <div className="ml-auto flex items-center">
        <ThemeSwitcher />
      </div>
      <div className="ml-4 flex items-center">
        {userData ? (
          <div>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">Sign out</button>
            </form>
          </div>
        ) : (
          <div>
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Sign in</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppBar;
