import { Container, Grid } from "@mui/material";
import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

const AdminPage = () => {
  return (
    <Container maxWidth="xl" className="mt-32 ">
      <Grid container justifyContent="center" gap={8}>
        <CategoryForm />
        <CategoryList />
      </Grid>
    </Container>
  );
};

export default AdminPage;
