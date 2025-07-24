import React from "react";

export default function page({ params }: { params: { id: string } }) {
  console.log(2, params.id);

  return <div>page</div>;
}
