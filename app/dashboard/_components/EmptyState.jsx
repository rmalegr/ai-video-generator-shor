import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed rounded-2xl border-gray-300 bg-gray-100 mr-5">
      <h2>You don't have any short video creted </h2>
      <Link href={"/dashboard/create-new"}>
        <Button>Create New Short Video</Button>
      </Link>
    </div>
  );
};

export default EmptyState;
