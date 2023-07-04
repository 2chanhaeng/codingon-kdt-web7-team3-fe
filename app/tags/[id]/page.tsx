import { useRouter } from "next/navigation";

export default function TagsId({ params }: { params: number }) {
  console.log(params);
  return "tagid";
}
