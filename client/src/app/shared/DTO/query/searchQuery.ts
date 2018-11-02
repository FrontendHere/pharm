interface Context {
    model: SearchContext;
    field: FieldContext;
}
export type FieldContext =
    | 'name';

export type SearchContext =
    | 'projects'
    | 'counterparties'
    | 'competitors'
    | 'mnns'
    | 'nosologies'
    | 'subdivisions'
    | 'medicines'
    | 'phases'
    | 'employees'
    | 'organizations'
    | 'interactionSchemes';

export interface SearchQuery {
    searchText: string;
    context: Context;
}
