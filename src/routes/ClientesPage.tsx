import Pagination from '../components/Pagination'
import { Button } from '@material-tailwind/react';
import { ClientesStatus } from '../components/HomeComponents/ClientesCard/ClientesChips';

export default function ClientesPage() {
    const data = [
        {
            label: "Ativos",
            value: "active",
            desc: `Empresa A`,
        },
        {
            label: "Inativos",
            value: "inactive",
            desc: `Empresa B`,
        },
        {
            label: "Todos",
            value: "all",
            desc: `Empresa C`,
        }
        ];

  return (
    <>
    <div className="grid gap-x-10 grid-rows-1 grid-flow-col justify-center pt-12 items-center">
        <div className="max-w-fit w-full rounded overflow-hidden shadow-lg bg-white mb-10">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Clientes</div>
            </div>
            <div>
            {data.map(({ value, desc }) => (
            <div key={value}>
                <ul className="w-full flex">
                  <li className="flex items-center w-full border-b-2 border-gray p-4">
                    <span className="flex-grow pr-28">
                      {desc}
                    </span>
                    <ClientesStatus />
                    <Button className="ml-5" size="sm">Editar</Button>
                  </li>
                </ul>
            </div>
          ))}</div>            
        </div>
    </div>
    <Pagination/>
    </>
  )
}
