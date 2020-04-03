import React, { Component } from "react";
import { Pagination } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Pagination
            currentPage={1}
            displayRange={5}
            onPageChange={(setValue, getValue, page) =>
              setValue("Pagination", "currentPage", page)
            }
            totalPages={100}
          />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Pagination/Pagination"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
