import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Auth = () => {
  const router = useRouter();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  if (typeof window === "undefined") return null;
  if (!isLogged) {
    router.push("/films");
  }

  return null;
};

export default Auth;
