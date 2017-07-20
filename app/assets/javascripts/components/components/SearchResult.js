import React, {Component} from 'react'
import SearchItem from './SearchItem'
import SearchPagination from './SearchPagination'

export default class SearchResult extends Component {
  render() {
    const page_size = 10;
    let paging = "";
    if (this.props.resultCount != 0) {
      const pageCount = parseInt((this.props.resultCount-1) / page_size + 1);
      paging = <SearchPagination
        dispatch={this.props.dispatch}
        pageCount={pageCount} perPage={page_size} />
    }

    return (
      <div className="search-content">
        {this.props.properties.map((item, i) =>
          <SearchItem key={item.listing_id} item={item} />
        )}

        {this.props.isFetching &&
          <p className="loading">Loading...</p>
        }

        {paging}
      </div>
    );
  }
}