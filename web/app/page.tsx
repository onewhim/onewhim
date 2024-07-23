import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        This is Onewhim website. Work in progress. Check our GitHub page first.
        <div></div>
        <Button asChild>
          <Link href="https://github.com/onewhim/onewhim">GitHub</Link>
        </Button>
      </div>
    </main>
  );
}
