import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async (token: string) => {
      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          // If token is not valid (401 Unauthorized)
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
            return;
          }
          alert(error.response.data.message); // Show error message using alert
          return;
        }
        console.error("An error occurred:", (error as Error).message); // Log generic errors to the console
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    // Fetch user information
    getMe(token);
  }, [navigate]);

  return <>{children}</>;
};

export default Protected;
