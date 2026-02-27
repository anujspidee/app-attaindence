import { useTheme } from "next-themes";
import Image from "next/image";


export default function Home() {
  useTheme('light');

  return (
    <div className="flex justify-center my-4" >
      hello world  test2
    </div>
  );
}
