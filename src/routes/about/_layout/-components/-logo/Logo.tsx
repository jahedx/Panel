import { SlackIcon } from "@/assets/Icons";
import { useNavigate } from "@tanstack/react-router";

const Logo = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate({ to: "/" });
  };
  return (
    <div
      onClick={navigateTo}
      className="flex  gap-2 py-1 justify-center text-primary-600 cursor-pointer"
    >
      <h1 className="font-bold text-xl">Panel Demo</h1>
      <SlackIcon />
    </div>
  );
};

export default Logo;
