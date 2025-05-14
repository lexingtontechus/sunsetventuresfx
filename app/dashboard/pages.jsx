import { auth } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return;
  <div className="p-8 mx-auto">
    Hello {user?.firstName}
    <h1 className="text-3xl font-semibold">Welcome to Sunset Ventures FX</h1>
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
      <PricingTable />
    </div>
  </div>;
}
