import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert } from "react-native";

export default function ProtectedLayout({ children, isValid }) {
  const router = useRouter();
  useEffect(() => {
    if (!isValid) {
      console.log("User not authenticated, redirecting to login.");
      router.replace("/(auth)/login"); // redirect if not authenticated
    }
  }, [isValid]);

  if (!isValid) return null; // don't render children while redirecting

  return <>{children}</>;
}
