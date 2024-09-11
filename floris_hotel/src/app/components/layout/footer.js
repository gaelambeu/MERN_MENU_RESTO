import Link from "next/link"

export default function Footer(){
    return (
        <>
            <footer className="">
                
                <div className="flex items-center justify-between bg-slate-700">
                    <div>
                        <h1 className="text-green-700">FLORIS HÔTEL</h1>
                        <div className="flex items-center gap-3">
                            <Link href={''}>Facebook</Link>
                            <Link href={''}>Instagram</Link>
                            <Link href={''}>whatsApp</Link>
                        </div>
                        
                    </div>

                    <div className="flex items-center gap-4 bg-green-700 border-x-amber-50">
                        <div className="px-2 py-1 border">
                            <p className="font-semibold">Bonoua</p>
                        </div>
                        
                        <div className="px-3 py-1 ">
                        <Link href={''}>Itinéraire</Link>
                        </div>
                    </div>
                    
                    <div>
                        <Link href={''} className="text-white">Menu</Link>
                    </div>

                    <div>
                        <Link href={''} className="text-white">Commentaire</Link>
                    </div>
                </div>
                
                
                <div className="grid grid-rows-2 bg-gray-300"> 
                    <div className="flex items-center justify-center">
                        <h1>
                            Copyright&nbsp;
                            <span className="font-semibold">FLORIS HÔTEL RESTAURANT</span>.&nbsp;
                            All Rights Reserved.
                        </h1> 
                    </div>

                    <div className="flex items-center justify-center">
                        <p>
                            Designed by&nbsp; 
                            <Link href={''}> 
                                <span className="font-semibold">
                                    AMBEU Gael
                                </span> 
                            </Link>
                        </p>
                    </div>
                
                </div>
            </footer>
        </>
    )
}