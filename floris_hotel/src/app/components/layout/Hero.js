import Image from "next/image"

export default function Hero() {
    return(
        <>
            <section className="grid grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold">FLORIS HÔTEL RESTAURANT, NOTRE E-MENU</h1>
                    <p className="my-4 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus eveniet, 
                        earum voluptatum aliquid in tenetur veniam atque quia quaerat reprehenderit eligendi ducimus 
                        at nam dignissimos nulla harum dolorem error!
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-2 text-white rounded-full bg-primary">
                            Order now
                        </button>
                        <button className="">
                            Learn More
                        </button>
                    </div>
                </div>
                
                <div className="relative">
                    <Image src={'/panier.png'} layout={'fill'} objectFit={'contain'} alt={'floris_foods'} />
                </div>
                
            </section>
        </>
    )
}