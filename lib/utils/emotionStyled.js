
export const globalOptions = {
    shouldForwardProp: prop =>
        prop !== "data-dm" && prop !== "data-m" && prop !== "data-t" && prop !== "data-s" && prop !== "data-w"
        && prop !== "data-h" && prop !== "data-c" && prop !== "data-bc" && prop !== "data-tow" && prop !== "data-tc"
        && prop !== "data-e" && prop !== "data-a" && prop !== "data-d" && prop !== "data-fw" && prop !== "data-l"
        && prop !== "data-brc" && prop !== "data-hbc" && prop !== "data-pro" && prop !== "data-f" && prop !== "tier"
};
