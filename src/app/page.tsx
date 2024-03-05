import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="font-bold">
        <Link href="https://github.com/deathg0d/next-chat" target="_blank">
          deathg0d/next-chat
        </Link>
      </div>
      <div className="flex gap-1">
        <span>Chat UI</span>
        <Link
          className="font-bold underline decoration-sky-500 decoration-2 hover:decoration-pink-500"
          href="/chat"
        >
          here
        </Link>
      </div>
    </main>
  );
}
