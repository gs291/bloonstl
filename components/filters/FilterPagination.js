import styled from "@emotion/styled";
import {Pagination} from "@mui/material";

import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const Pages = styled(Pagination, globalOptions)`
  margin-bottom: 10px;
  & .MuiPaginationItem-root {
    color: ${props => props.theme.palette.text.primary};
  }

  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${props => props.theme.palette.button.pagination.selected};
  }

  & .MuiPaginationItem-root.Mui-selected:hover,
  & .MuiPaginationItem-root.Mui-selected:active,
  & .MuiPaginationItem-root.Mui-selected:focus {
    background-color: ${props => props.theme.palette.button.pagination.primary};
  }

  & .MuiPaginationItem-root:hover,
  & .MuiPaginationItem-root:active,
  & .MuiPaginationItem-root:focus {
    background-color: ${props => props.theme.palette.button.pagination.primary};
  }
`;


const GA4_PAGINATION_ID = "FILTER_PAGINATION";

/**
 * Pagination component
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {number} props.pageCount The amount of pages available
 * @param {string} props.page The currently selected page
 * @param {function} props.handlePage The function to run when a page is selected/changed
 */
export default function FilterPagination({ className, pageCount, page, handlePage }) {

    const handleChange = (_, p) => {
        handlePage(_, p);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_PAGINATION_ID}`,
            pagination_number: p
        });
    }

    return (
        <>
            <Pages
                count={pageCount}
                page={page}
                onChange={handleChange}
                className={className}
                size="large"
            />
        </>
    );
}