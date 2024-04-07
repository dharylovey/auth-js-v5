import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  const logOut = async () => {
    'use server'
    await signOut();
  }
  return (
    <div>
      <h1>Settings Page</h1>
      
      <p>{JSON.stringify(session)}</p>
      <form action={logOut}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
