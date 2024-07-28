import OnSale from "@/components/OnSale";

export default function page() {
  return (
    <main className="flex flex-col py-6 items-center gap-5">
      <h1 className="text-5xl font-bold">Market</h1>
      <OnSale />
    </main>
  );
}

export const metadata = {
  title: "NFT",
  description: "listed NFT",
};
