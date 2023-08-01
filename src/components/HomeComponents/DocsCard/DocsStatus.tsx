import { Chip } from "@material-tailwind/react";
 
export function DocsStatus() {
  return (
    <div className="flex gap-2">
      <Chip
        variant="ghost"
        color="green"
        size="sm"
        value="Pago"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
        }
      />
      <Chip
        variant="ghost"
        color="red"
        size="sm"
        value="Não Pago"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
        }
      />
      <Chip
        variant="ghost"
        color="gray"
        size="sm"
        value="Isento"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-black content-['']" />
        }
      />
    </div>
  );
}