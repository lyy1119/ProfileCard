import { useSearchParams } from "react-router-dom";

export default function ProfileCard() {
  const [params] = useSearchParams();
  const size = params.get("size") || "default";
  const theme = params.get("theme") || "light";

  return(
    <div>
      <p>parameters: size={size}, theme={theme}</p>
    </div>
  );
}