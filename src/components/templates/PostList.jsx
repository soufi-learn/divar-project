import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import { ThreeDots } from "react-loader-spinner";

import { Box, Typography } from "@mui/material";

const PostList = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { data, isLoading } = useQuery({
    queryKey: ["my-post-list"],
    queryFn: getPosts,
  });

  console.log(data);
  return (
    <div>
      {isLoading ? (
        <ThreeDots color="#777" height={24} width={24} />
      ) : (
        <>
          <Typography variant="h3" component="h3" sx={{ marginBottom: 3 }}>
            آگهی های شما
          </Typography>
          {data.data.posts.map((post) => (
            <div key={post._id}>
              <img src={`${baseUrl}${post.images[0]}`} />
              <Box>
                <Typography variant="body1" component="p">
                  {post.options.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  color="text.secondary"
                >
                  {post.options.content}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" component="p">
                  {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                </Typography>
                <Typography variant="body1" component="p">
                  {post.amount} تومان
                </Typography>
              </Box>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostList;
