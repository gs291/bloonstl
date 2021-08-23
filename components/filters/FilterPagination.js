import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Pagination} from "@material-ui/lab";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Pages = styled(Pagination)`
  transition: 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
  & .MuiPaginationItem-root {
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${props => props["data-dm"] ? siteColors.pagination.selected.dark : siteColors.pagination.selected.light};
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