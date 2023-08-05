import { Typography, Avatar, Rating } from "@material-tailwind/react";
 
export function RatingWithComment() {
  return (
    <div className="text-center w-full bg-gray-50">
      <Typography variant="h2" color="blue-gray" className="mb-6 font-regular">
        &quot;Um excelente produto, o modo em que os dados são dispostos me ajudaram a ser mais eficiente.&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4">
        Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Lead Frontend Developer
      </Typography>
      <Rating value={5} readonly />
    </div>
  );
}