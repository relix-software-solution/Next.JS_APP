import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number; photoId: number };
}
const UserDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      Photo.{id}.{photoId}
    </div>
  );
};

export default UserDetailPage;
