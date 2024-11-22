import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Sesi Anda telah habis. Silakan login kembali.");
      navigate("/"); // Redirect ke halaman login jika tidak ada token
    }
  }, [navigate, token]);

  return <>{token ? children : null}</>;
};

export default Protected;
