import { PostType } from "@/types/profile";

export default function ProfilePost({
  profilePosts,
}: {
  profilePosts: PostType[];
}) {
  return (
    <section>
      {profilePosts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
}
