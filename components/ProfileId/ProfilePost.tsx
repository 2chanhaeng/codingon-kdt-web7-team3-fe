import { PostType } from "@/types/profile";

export default function ProfilePost({
  profilePosts,
}: {
  profilePosts: ProfileType[];
}) {
  return (
    <section>
      {profilePosts.map((post) => (
        <div key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.information}</p>
        </div>
      ))}
    </section>
  );
}
