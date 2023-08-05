import DashboardGraph from "../components/HomeComponents/DashboardCard/DashboardGraph";
import { Docs } from "../components/HomeComponents/DocsCard/Docs";
import { ClientesTabs } from "../components/HomeComponents/ClientesCard/ClientesTabs";
import { RatingWithComment } from "../components/HomeComponents/DashboardCard/Rating";



export default function Home() {
    return (
        <>
            <div className="grid gap-x-10 grid-rows-2 grid-flow-col justify-center m-12 ">

                <div className="max-w-screen-md max-h-fit rounded overflow-hidden shadow-lg bg-white row-span-3 col-span-1 col-end">
                    <div className="px-6 py-4 w-full">
                        <div className="font-bold text-xl mb-2">Overview</div>
                        <DashboardGraph/>
                        <RatingWithComment/>
                    </div>
                </div>

                <div className="max-w-screen-md rounded overflow-hidden shadow-lg bg-white row-span-1 col-span-2 mb-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Documentações</div>
                        <Docs/>
                    </div>
                </div>    

                <div className="max-w-screen-md rounded overflow-hidden shadow-lg bg-white row-span-1 col-span-2 mt-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Clientes</div>
                        <ClientesTabs/>
                    </div>
                </div>


            </div>
        </>
    )
}