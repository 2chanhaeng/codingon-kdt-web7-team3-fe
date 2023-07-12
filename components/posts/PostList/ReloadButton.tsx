import { IconButton } from "@mui/joy";
import { ExpandLess } from "@mui/icons-material";

export default function ReloadButton({ loadPosts }: { loadPosts: () => void }) {
  return (
    <IconButton
      color="primary"
      onClick={loadPosts}
      sx={{ mt: 2 }}
      variant="soft"
    >
      <ExpandLess />
    </IconButton>
  );
}
