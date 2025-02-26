import { Button } from "@/components/ui/button";
import Link from "next/link";

function MainPage() {
  return (
    <Link href="/Dashboard">
      <Button>대시보드</Button>
    </Link>
  );
}

export default MainPage;
