import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Pagination} from "@mui/material";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


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


const GA4_PAGINATION_ID = "FILTER_PAGINATION";
export default function FilterPagination({ className, pageCount, page, handlePage }) {
    const darkMode = useSelector(getDarkMode);

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
                data-dm={darkMode}
            />
        </>
    );
}