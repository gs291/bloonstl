const ItemFieldsFragment = `
fragment ItemFields on Items {
    title
    text
    tower
    type
    description
}
`;

const ItemsRecursive = `
fragment ItemsRecursive on Items {
    items {
        ...ItemFields
        items {
            ...ItemFields
            items {
                ...ItemFields
                items {
                    ...ItemFields
                }
            }
        }
    }
}
`;

const queryPatchByVersion = `
${ItemFieldsFragment}
${ItemsRecursive}
query patchByVersion($version: String!) {
    patchByVersion(version: $version) {
        release
        items {
            ...ItemFields
            ...ItemsRecursive 
        }
    }
}
`;

export default {
    queryPatchByVersion
};

