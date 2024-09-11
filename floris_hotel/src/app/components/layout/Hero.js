import Image from "next/image"
import Right from "../icons/Right"

export default function Hero() {
    return(
        <>
            <section className="hero">
                <div className="py-12">
                    <h1 className="text-4xl font-semibold">
                        FLORIS HÔTEL<br/> 
                        votre Restaurant<br/> 
                        <span className="text-primary">
                         e-menu
                        </span>
                    </h1>
                    <p className="my-6 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus eveniet, 
                        earum voluptatum aliquid in tenetur veniam atque quia quaerat reprehenderit eligendi ducimus 
                        at nam dignissimos nulla harum dolorem error!
                    </p>
                    <div className="flex gap-4 text-sm">
                        <button className="flex px-4 py-2 text-sm text-white uppercase rounded-full items-centergap-2 bg-primary">
                            Order now
                           {/*** <Right /> */} 
                        </button>
                        <button className="flex gap-2 py-2 font-semibold text-gray-900">
                            Learn More
                            {/*** <Right /> */} 
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