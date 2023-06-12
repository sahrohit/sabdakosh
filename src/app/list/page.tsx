import React from "react";
import { DataTable } from "./data-table";
import { prisma } from "@/lib/prisma";
import { columns } from "./columns";

const ListPage = async () => {
  const data = await prisma.post.findMany({});

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ListPage;
