import { Grid } from "@mui/material";
import AddPost from "../components/templates/AddPost";
import PostList from "../components/templates/PostList";

const DashboardPage = () => {
  return (
    <Grid container flexDirection="column" gap={4} mt={10} mx={10}>
      <AddPost />
      <PostList />
    </Grid>
  );
};

export default DashboardPage;
