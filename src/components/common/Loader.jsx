import { Box, Typography } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      position="fixed"
      zIndex="999"
      top="0"
      right="0"
      bgcolor="#F8FAFC"
    >
      <ThreeDots color="#888" height={44} width={44} />
      <Typography variant="bodt1" component="p" color="#222222">
        اندکی صبوری کنید!
      </Typography>
    </Box>
  );
};

export default Loader;
