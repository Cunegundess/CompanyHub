// import { DocsStatus } from "./DocsStatus";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar
} from "@material-tailwind/react";

import spotifyLogo from "../../../assets/spotify.png";
import netflixLogo from "../../../assets/netflix.png";
import amazonLogo from "../../../assets/amazon.png";

const TABLE_ROWS = [
  {
    img: spotifyLogo,
    name: "Spotify",
    status: true,
  },
  {
    img: amazonLogo,
    name: "Amazon",
    status: false,
  },
  {
    img: netflixLogo,
    name: "Netflix",
    status: false,
  },
];

export function ClientesTabs() {
  return (
    <Card className="w-full h-full flex justify-center bg-gray-50">
      <CardBody className="px-0">
        {/* Table without the container */}
        <table className="w-full min-w-max table-auto text-left">
          <tbody>
            {TABLE_ROWS.map(({ img, name, status }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={img}
                        alt={name}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max ml-10">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status ? "Ativo" : "Inativo"}
                        color={status ? "green" : "red"}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
