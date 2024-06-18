import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image src="/images/pricelist-console.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
    </main>
  );
}
