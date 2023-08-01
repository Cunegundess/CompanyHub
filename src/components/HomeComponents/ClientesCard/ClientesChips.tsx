import { Chip } from "@material-tailwind/react";
 
export function ClientesStatus() {
  return (
    <div className="flex gap-2">
      <Chip
        variant="ghost"
        color="green"
        size="sm"
        value="Ativo"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
        }
      />
      <Chip
        variant="ghost"
        color="red"
        size="sm"
        value="Inativo"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
        }
      />
    </div>
  );
}