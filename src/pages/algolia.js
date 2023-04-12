import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "OQ6DVKF8ZK",
  "c25fdd5e11cf5e229b9773765462e179"
);

const algolia = () => {
  //   const searchClient = ;

  return (
    <div>
      <InstantSearch
        searchClient={algoliasearch(
          "3EI9JRI8NZ",
          "84235d25ec8037fbac25978f761036e3"
        )}
        indexName="instant_search"
      >
        <SearchBox />
      </InstantSearch>
    </div>
  );
};

export default algolia;
