import React from 'react'
import TextAnimateBtn from '../utils/TextAnimateBtn';

const HappyClientSection = () => {
    const clientsDetails = [
        {
            title: "Business Name",
            description: "Tapro IT transformed our vision into reality with their"
                + "exceptional design and development services. The team's creativity "
                + "and professionalism exceeded our expectations!",
            name: "Emma Johnson"
        },
        {
            title: "Business Name",
            description: "Tapro IT transformed our vision into reality with their"
                + "exceptional design and development services. The team's creativity "
                + "and professionalism exceeded our expectations!",
            name: "Emma Johnson"
        },
        {
            title: "Business Name",
            description: "Tapro IT transformed our vision into reality with their"
                + "exceptional design and development services. The team's creativity "
                + "and professionalism exceeded our expectations!",
            name: "Emma Johnson"
        }
    ];
    const btn = {
        href: "/",
        height: "2.5rem",
        width: "100%",
        bgClr: "rgba(73, 149, 255, 1)",
        hoverBgClr: "rgba(30, 30, 30, 1)",
        text1: "Join Our Growing List of Happy Clients",
        text2: "Let's Work Together",
    }
    return (
        <div className='my-28 flex flex-col items-center'>
            <div className='w-2/5 flex flex-col items-center'>
                <h3 className='text-lg text-TP-black font-font2'>Turning Partnerships into Success Stories</h3>
                <h1 className='text-4xl text-TP-primary font-font1 font-normal'>Our Happy Clients</h1>
            </div>
            <div className='my-20 w-5/6 grid grid-cols-3 gap-8'>
                {clientsDetails.map((client, index) => {
                    return (
                        <div key={index} className='col-span-1 flex flex-col items-center gap-2 border-[1px] bg-white border-[rgba(0,0,0,0.28)] rounded-lg'>
                            <p className='mt-4 text-lg text-font-2 text-TP-black font-semibold'>{client.title}</p>
                            <p className='mx-10 my-2 text-md text-font-2 text-center text-TP-black font-light'>
                               {client.description}
                            </p>
                            <div className='w-9/12 border-b-[1px] border-b-[rgba(30, 30, 30, 0.25)]'></div>
                            <p className='mb-2 text-lg text-font-2 text-TP-black font-semibold'> - {client.name}</p>
                        </div>
                    );
                })}
            </div>
            <div className='w-2/6'>
                <TextAnimateBtn btn={btn} />
            </div>
        </div>
    )
}

export default HappyClientSection
