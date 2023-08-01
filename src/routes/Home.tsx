import DashboardGraph from "../components/HomeComponents/DashboardCard/DashboardGraph";
import { Docs } from "../components/HomeComponents/DocsCard/Docs";
import { ClientesTabs } from "../components/HomeComponents/ClientesCard/ClientesTabs";

export default function Home() {
    return (
        <>
            <div className="grid gap-x-10 grid-rows-2 grid-flow-col justify-center pt-12 pb-12 items-center">

                <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white row-span-3 col-span-1 col-end h-full">
                    <div className="px-6 py-4 w-full">
                        <div className="font-bold text-xl mb-2">Dashboard</div>
                        <DashboardGraph/>
                    </div>
                </div>

                <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white row-span-1 col-span-2 mb-10">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Clientes</div>
                    </div>
                        <ClientesTabs/>
                </div>

                <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white row-span-1 col-span-2 pb-8">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Docs</div>
                        <Docs/>
                    </div>
                </div>

            </div>
        </>
    )
}