import NFT from "@/components/NFT";


export default function CreateNFTPage(){
    return(
        <main className="flex flex-col py-6 items-center gap-5">
            <h1 className="text-5xl font-bold">Your NFT</h1>
            <NFT/>            
        </main>
    )
}