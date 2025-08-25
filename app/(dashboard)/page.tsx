import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return <UserButton afterSignOutUrl="/" />;
}

// import {
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
//   UserButton,
// } from "@clerk/nextjs";

// export default function DashboardPage() {
//   return (
//     <>
//       <SignedIn>
//         <div className="p-6">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//             <UserButton afterSignOutUrl="/" />
//           </div>
//           <p className="mt-4">Hello, welcome to your dashboard 🚀</p>
//         </div>
//       </SignedIn>

//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// }
