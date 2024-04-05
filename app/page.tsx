import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-200">
      <h1 className={cn("text-5xl font-semibold ", font.className)}>
        Megasoft
      </h1>
      <p className="text-2xl">Auth Js authentication demo</p>
      <div>
        <LoginButton mode="redirect">
          <Button variant="outline" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
