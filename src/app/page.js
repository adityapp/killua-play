import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image src="/images/banner.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
      <Link href="https://wa.me/6281517044263?text=Hallo%20saya%20mau%20sewa%20dong">
        <Image className="fixed bottom-0 right-0 m-4 md:m-10" src="/images/whatsapp.png" width={60} height={60}/>
      </Link>
    </main>
  );
}
