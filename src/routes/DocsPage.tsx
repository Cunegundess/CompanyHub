import { DocsStatus } from "../components/HomeComponents/DocsCard/DocsStatus";
import { Button } from "@material-tailwind/react";
import Pagination from "../components/Pagination"

export default function DocsPage() {
    const data = [
        {
            label: "Ativos",
            value: "active",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Inativos",
            value: "inactive",
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Todos",
            value: "all",
            desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
        }
        ];
  return (
    <>
    <div className="grid gap-x-10 grid-rows-1 grid-flow-col justify-center pt-12 items-center">
        <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white row-span-1 col-span-2 mb-10">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Docs</div>
            </div>
            <div>
            {data.map(({ value, desc }) => (
            <div key={value}>
                <ul className="w-full flex">
                  <li className="flex items-center w-full border-b-2 border-gray p-4">
                    <span className="flex-grow">
                      {desc}
                    </span>
                    <DocsStatus />
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
