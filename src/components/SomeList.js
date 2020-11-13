import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";


function SomeList() {
  // useState gives us the opportunity to maintain state.
  const [myList, setMyList] = useState([]);
  
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
    // returns a promise
    return new Promise((resolve, rejected) => {
      setTimeout(()=> {
        resolve(["three", "four"]);
      }, 3000);
    });
  }  
  /*
  someDataByPromise().then((list) => {
    list.map(item => {
      console.log(item);
    })
  });
  */
  

  function someOtherDataByPromise() {
    // returns a promise
    return new Promise((resolve, rejected) => {
      setTimeout(()=> {
        resolve(["five", "six"]);
      }, 4000);
    });
  }
  /*
  someOtherDataByPromise().then((list) => {
    list.map(item => {
      console.log(item);
    });
  });
  */


  
  useEffect(() => {
    async function someDataByAsync() {
      const listOne = await someDataByPromise();
      const listTwo = await someOtherDataByPromise();
      setMyList(listOne.concat(listTwo));
    }

    someDataByAsync();
  
  }, []); // Only runs when the page loads.
  
  

  if(!myList.length) {
    return (
      <div>
        loading...
      </div>
    )
  } else {
    return (
      <div>
        <h2>Async call example using useEffect!</h2>
        {
          myList.map(item => {
            return (
              <ul key={uuid()}>{item}</ul>
            )
          })
        }
      </div>
    )
  }
}

export default SomeList;