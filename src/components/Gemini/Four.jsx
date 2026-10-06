import React from 'react'

const Four = () => {
    return (
        // 1. Changed w-screen to w-full to prevent horizontal scrollbar
        <div className='bg-blue-950 min-h-screen w-full'>
            
            {/* Main Grid Container */}
            <div className="max-w-6xl mx-auto text-white p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* IMAGE COLUMN */}
                {/* 2. Added 'relative' so we can handle positioning if needed */}
                <div className="relative">
                     {/* PRO TIP: sticky top-4 
                        On desktop, as you scroll down the long text, the image 
                        stays pinned to the top of the screen until the section ends.
                     */}
                    <img
                        className='w-full md:w-auto md:mx-auto md:max-h-[85vh] md:object-contain rounded-xl aspect-3/4 md:sticky md:top-4'
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Profile"
                    />
                </div>

                {/* TEXT COLUMN */}
                {/* 3. Fixed Padding: pb-24 on mobile (space for button), pb-0 on desktop (reset) */}
                <div className="flex flex-col gap-6 w-full pb-24 md:pb-0">
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Minimalist Jacket</h1>
                        <h3 className='text-2xl font-semibold text-blue-300'>$199.00</h3>
                    </div>
                    
                    <p className='leading-relaxed text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In officia, eveniet reprehenderit consequuntur fugit, beatae tenetur, fugiat aut facere quasi dicta qui soluta voluptatum! Facere ipsam ab debitis consectetur dolores?
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam consectetur voluptates ad, aliquid enim debitis exercitationem nisi unde suscipit optio voluptatum nostrum earum, culpa repudiandae saepe nulla labore veniam voluptas!
                        <br /><br />
                        {/* Added extra text to force scrolling to test the sticky button */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                    </p>

                    {/* BUTTON */}
                    {/* Mobile: Fixed at bottom, z-50 to stay on top, p-4 to give it a background bar feel
                       Desktop: Static (normal flow), no extra padding background
                    */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-blue-950 border-t border-blue-900 md:static md:bg-transparent md:border-none md:p-0 z-50">
                        <button className="w-full md:w-fit bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Four