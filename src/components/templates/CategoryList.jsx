import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, removeCategory } from "../../services/admin";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Loader from "../common/Loader";
import CloseIcon from "@mui/icons-material/Close";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

const CategoryList = () => {
  const [removingCategoryId, setRemovingCategoryId] = useState(null);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  const mutation = useMutation({
    mutationFn: removeCategory,
    onMutate: (id) => {
      setRemovingCategoryId(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categories"]);
      setRemovingCategoryId(null);
    },
    onError: () => {
      setRemovingCategoryId(null);
    },
  });

  console.log(mutation);

  const removeHandler = (id) => {
    mutation.mutate(id);
  };

  return (
    <Grid item xs={12} sm={9} md={6}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <Box
            key={category._id}
            borderBottom="1px solid #999"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
            py={1}
          >
            <img src={`${category.icon}.svg`} alt="" />
            <div style={{ flex: 1 }}>
              <Typography variant="h6" component="h5">
                {category.name}
              </Typography>
              <Typography variant="body1" component="p" color="secondary">
                {category.slug}
              </Typography>
            </div>
            <IconButton
              color="error"
              onClick={() => removeHandler(category._id)}
              disabled={
                mutation.isPending && removingCategoryId === category._id
              }
            >
              {mutation.isPending && removingCategoryId === category._id ? (
                <ThreeDots color="#a72727a6" height={24} width={24} />
              ) : (
                <CloseIcon />
              )}
            </IconButton>
          </Box>
        ))
      )}
    </Grid>
  );
};

export default CategoryList;
