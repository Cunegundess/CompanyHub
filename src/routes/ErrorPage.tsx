import { Typography } from "@material-tailwind/react";
 
 
export default function ErrorPage() {
 
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-screen-md">
        <Typography variant="h3" color="black">
          Error 404
        </Typography>
        <Typography color="black" className="mt-2 font-normal">
          This&apos;s page doesn&apos;t exist. Please go back to safety.
        </Typography>
      </div>
      </div>
    </>
  );
}