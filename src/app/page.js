import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image src="/images/banner.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
      <Link href="https://wa.me/6281517044263">
        <Image className="fixed bottom-0 right-0 m-10" src="/images/whatsapp.png" width={64} height={64}/>
      </Link>
    </main>
  );
}
