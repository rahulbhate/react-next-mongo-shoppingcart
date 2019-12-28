import React from 'react';
import useTable from './useTable';
import Pagination from '../Pagination/Pagination';
const Table = (props) => {
  const {
    posts,
    currentPosts,
    currentPage,
    postsPerPage,
    paginate,
    paginatePosts,
  } = useTable();

  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return <td key={props.data[key]}>{props.data[key]}</td>;
    });
  };

  function getRowsData() {
    var keys = getKeys();
    return currentPosts.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  }
  function sortBy(key) {
    alert(key);
  }
  function getKeys() {
    return Object.keys(posts[0]);
  }
  function getHeader() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return (
        <th key={key} onClick={() => sortBy(key)}>
          {key.toUpperCase()}
        </th>
      );
    }); /// Prints all Keys...
  }

  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>{getHeader()}</tr>
          {getRowsData()}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginatePosts}
        {...props}
      />
    </div>
  );
};
export default Table;
