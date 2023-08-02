import Aprovado from "../../../assets/pago.png"
import Negado from "../../../assets/negado.png"
import Total from "../../../assets/total.png"

export default function Graph() {
   
    return (
        <>
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Bem-vindo(a) UserFulano
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Aqui, você encontrará um conjunto de estatísticas de desempenho que fornecem insights valiosos sobre as nossas operações comerciais.
                    </p>
                    </div>


                    <div className="mt-10">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                        <li>
                            <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-indigo-600 truncate">
                                Clientes
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    +8%
                                </span>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                <div className="mr-6 flex items-center text-sm text-gray-500">
                                <img src={Total} className="mr-1"></img>
                                    Total
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <img src={Aprovado} className="mr-1"></img>
                                    Ativos
                                </div>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <img src={Negado} className="mr-1"></img>
                                Inativos
                                </div>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-indigo-600 truncate">
                                Docs
                                </div>
                                <div className="ml-2 flex-shrink-0 flex">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    +8%
                                </span>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                <div className="mr-6 flex items-center text-sm text-gray-500">
                                <img src={Total} className="mr-1"></img>
                                    Total
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                    <img src={Aprovado} className="mr-1"></img>
                                    Aprovados
                                </div>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                <img src={Negado} className="mr-1"></img>
                                Negados
                                </div>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

        </>
    );
}
