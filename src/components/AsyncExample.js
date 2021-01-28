import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function AsyncExample() {
  // useState gives us the opportunity to maintain state.
  const [myList, setMyList] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  /*
  function someData(callBackData) {
    setTimeout(()=> {
      callBackData(["one", "two"]);
    }, 2000)
  }
  
  someData((list) => {
    list.map(item => {
      console.log(item);
    });
  })
  */

  function someDataByPromise() {
    // returns a list
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(["three", "four"]);
      }, 2000);
    });
  }
  /*
  someDataByPromise().then((list) => {
    list.map(item => {
      console.log(item);
    })
  });
  */

  function someMoreDataByPromise() {
    // returns a list
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(["five", "six"]);
      }, 2000);
    });
  }

  useEffect(() => {
    async function someDataByAsync() {
      setMyList(await someDataByPromise());
    }
    someDataByAsync();
  }, []); // Only runs when the page loads.

  // Handler
  async function loadMoreHandler() {
    setMyList(myList.concat(await someMoreDataByPromise()));
    setLoadMore(false);
  }

  if (!myList.length) {
    return (
      <div>
        <h2>Async call example using useEffect!</h2>
        loading...
      </div>
    );
  } else {
    let button = "";
    if (loadMore) {
      button = <button onClick={loadMoreHandler}>Load more</button>;
    }

    return (
      <div>
        <h2>ASYNC application using useEffect!</h2>
        {myList.map((item) => {
          return <ul key={uuid()}>{item}</ul>;
        })}
        {button}
      </div>
    );
  }
}
