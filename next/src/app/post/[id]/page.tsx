import React from "react";

export default function page({ params }: { params: { id: string } }) {
  console.log(params.id);

  return <div>page</div>;
}
