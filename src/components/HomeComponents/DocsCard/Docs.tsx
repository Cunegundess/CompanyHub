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
        label: "Abertos",
        value: "open",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      },
      {
        label: "Fechados",
        value: "closed",
        desc: `Quisque euismod justo nec dolor semper, vel elementum dolor congue.`,
      },
      {
        label: "Todos",
        value: "all",
        desc: `Maecenas at bibendum ligula.`,
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
                    <span className="flex-grow">
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