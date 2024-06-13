import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/user";
import { ThreeDots } from "react-loader-spinner";

import { Box, Typography } from "@mui/material";
import { sp } from "../utils/numbers";

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
            <div
              key={post._id}
              className="flex items-center gap-4 p-2 pl-5 mb-4 border rounded-md bg-slate-50"
            >
              <img
                src={`${baseUrl}${post.images[0]}`}
                className="rounded-md w-44"
              />
              <Box flex={1}>
                <Typography variant="h5" component="p">
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
                <Typography variant="body1" component="p" mb={1}>
                  {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                </Typography>
                <Typography variant="body1" component="p">
                  {sp(post.amount)} تومان
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
