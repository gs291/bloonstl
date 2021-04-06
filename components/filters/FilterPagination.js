import styled from "@emotion/styled";
import {Pagination} from '@material-ui/lab';

import siteColors from "../../lib/utils/siteColors";

const Pages = styled(Pagination)`
  & .MuiPaginationItem-root {
    color: ${siteColors.text.dark};
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${siteColors.background.pagination.selected.dark};
  }

  & .MuiPaginationItem-root:hover,
  & .MuiPaginationItem-root:active,
  & .MuiPaginationItem-root:focus {
    background-color: ${siteColors.background.pagination.dark};
  }
`;

export default function FilterPagination({ className, pageCount, page, handlePage }) {

    return (
        <>
            <Pages
                count={pageCount}
                page={page}
                onChange={handlePage}
                className={className}
                size="large"
            />
        </>
    );
}