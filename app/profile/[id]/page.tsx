export default function ProfileId({ params }: { params: number }) {
  console.log(params);
  return "profileid";
const exampleProfiles = [
  {
    id: "1",
    name: "김한솔",
    information: "풋볼을 좋아함",
  },
  { id: "2", name: "김안나", information: "운동을 좋아함" },
];

export default function ProfileId({
  params: { id },
}: {
  params: { id: string };
}) {
  );
}
