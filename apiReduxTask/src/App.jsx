import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userFetch } from "./redux/userSlice"

const App = () => {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetch());
  }, [])
  return (
    <div>
      {
        data.map((item) => {
          return (
            <h1 key={item.id}>{item.email}</h1>
          )
        })
      }
    </div>
  )
}

export default App