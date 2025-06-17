import { useSearchParams } from "react-router-dom";
import Card from "./Card";

export default function ProfileCard() {
  const [params] = useSearchParams();
  const size = params.get("size") || "default";
  const theme = params.get("theme") || "light";

  return(
    <div>
        <Card layout={size} theme={theme}></Card>
        <p>parameters: size={size}, theme={theme}</p>
    </div>
  );
}