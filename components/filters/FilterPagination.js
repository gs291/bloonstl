import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const Pages = styled(Pagination, globalOptions)`
  transition: 0.3s;
  margin-bottom: 10px;
  & .MuiPaginationItem-root {
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${props => props["data-dm"] ? siteColors.pagination.selected.dark : siteColors.pagination.selected.light};
  }

  & .MuiPaginationItem-root.Mui-selected:hover,
  & .MuiPaginationItem-root.Mui-selected:active,
  & .MuiPaginationItem-root.Mui-selected:focus {
    background-color: ${props => props["data-dm"] ? siteColors.pagination.dark : siteColors.pagination.light};
  }

  & .MuiPaginationItem-root:hover,
  & .MuiPaginationItem-root:active,
  & .MuiPaginationItem-root:focus {
    background-color: ${props => props["data-dm"] ? siteColors.pagination.dark : siteColors.pagination.light};
  }
`;

export default function FilterPagination({ className, pageCount, page, handlePage }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Pages
                count={pageCount}
                page={page}
                onChange={handlePage}
                className={className}
                size="large"
                data-dm={darkMode}
            />
        </>
    );
}