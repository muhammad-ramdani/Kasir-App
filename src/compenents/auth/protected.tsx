import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import apiName from "../../api/api";

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await apiName.get("/auth/me");
      } catch (error) {
        localStorage.removeItem("token"); // Hapus token jika tidak valid
        alert("Sesi Anda telah habis. Silakan login kembali.");
        navigate("/"); // Redirect ke login
      }
    };

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Jika tidak ada token, redirect ke login
      return;
    }

    validateToken();
  }, [navigate]);

  return <>{children}</>;
};

export default Protected;
