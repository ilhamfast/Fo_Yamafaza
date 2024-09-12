import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import google from "../assets/google.svg";
import { toast } from "react-toastify";

function LoginGoogle() {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <div
      className="cursor-pointer w-full md:my-2 box-border flex justify-center hover:translate-y-[-5px] duration-300 border rounded-lg border-slate-5500"
      onClick={() => loginWithGoogle()}
    >
      <button className="font-bold p-1 flex gap-2 text-gray-600 items-center w-full text-lg justify-center rounded-md md:rounded-3xl ">
        <img src={google} alt="" /> Google
      </button>
    </div>
  );
}

export default LoginGoogle;
