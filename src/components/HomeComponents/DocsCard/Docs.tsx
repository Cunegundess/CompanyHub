import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button,
  } from "@material-tailwind/react";

import { DocsStatus } from "./DocsStatus";
   
export  function Docs() {
    const data = [
      {
        label: "Aprovados",
        value: "open",
        desc: `Documentação A`,
      },
      {
        label: "Negados",
        value: "closed",
        desc: `Documentação B`,
      },
      {
        label: "Todos",
        value: "all",
        desc: `Documentação C`,
      }
    ];
   
    return (
      <Tabs value="open">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
                <ul className="w-full flex">
                  <li className="flex items-center w-full border-b-2 border-gray p-4">
                    <span className="flex-grow pr-28">
                      {desc}
                    </span>
                    <DocsStatus />
                    <Button className="ml-5" size="sm">Editar</Button>
                  </li>
                </ul>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
}