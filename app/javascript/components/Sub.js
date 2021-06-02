import React from 'react';
const Sub = ({ sub }) => {
  const { id, title, created_at } = sub;
  // const id = sub.id
  // const title = sub.title
  // const created_at = sub.created_at
  return (
    <>
      <h1>Sub of: {title}</h1>
      <p>
        Created: {created_at}
      </p>
      <p>ID of the sub is: {id}</p>
      <a href="/">Back</a>
      <br />
      <a href={'/subs/' + id } data-method="delete">Delete sub</a>
      {/* <a href={`/subs/${id}` } data-method="delete">Delete sub</a> */}
      <br />
      <a href={'/subs/' + id + '/edit'}>Edit Sub</a>
    </>
  )
}
export default Sub;