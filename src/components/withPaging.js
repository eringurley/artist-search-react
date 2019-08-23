import React, { Component } from 'react';

export const withPaging = Comp =>{ 
  return class Paging extends Component{
    state ={
      page: 1, 
      totalPages: 0
    }

    updatePage = page => {
      this.setState({ page });
    }

    setTotalPages = totalPages => {
      this.setState({ totalPages });
    }

    render() {
      const { page, totalPages } = this.state;
      const props = { 
        ...this.props, 
        page, 
        setTotalPages: this.setTotalPages
      };
      return (
        <>
          <button disabled={page === 1 } onClick={() => this.updatePage(page - 1)}>Prev</button>
          <span>{page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => this.updatePage(page + 1)}>Next</button>
          <Comp {...props} />
        </>
      );
    }
  };
};
