import React, { useState, useEffect } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

const List = () => {
  const [start, setStart] = useState(1);
  const [limit, setLimit] = useState(5);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    alert('called');
    const respon = fetch(
      `${process.env.DEV_URL}/products?start=${start}&limit=${limit}`,
    );
    console.log(respon);
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems.map((listItem, index) => (
          <li className="list-group-item">List Item {listItem}</li>
        ))}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;
