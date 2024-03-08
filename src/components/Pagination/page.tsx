import { FC } from "react";
import { Pagination } from "@mui/material";
import { useAction } from "../../hooks/useActions";
import { IPageProps } from "./page.interface";

const Page: FC<IPageProps> = ({ pageCount, page }) => {
  const { setPage } = useAction();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Pagination
      sx={{
        button: {
          width: "55px",
          height: "36px",
          border: "1px solid rgb(235,235,235)",
          borderRadius: "5px",
          margin: "0px 7px",
        },
      }}
      hideNextButton
      hidePrevButton
      page={page}
      count={pageCount}
      onChange={(_, num) => setPage(num)}
      onClick={scrollToTop}
    />
  );
};

export default Page;
