import React from 'react';
const SubNew = ({ sub }) => {
  // doing it in case it fails or hit the else in the create 
  // so the vals of the forms are not clear out 
  const { title } = sub
  const defaultTitle = title ? title : "";
  return (
    <>
      <h1>New Sub</h1>
      <form action='/subs' method='post'>
        <input
          placeholder="Title"
          type="text"
          defaultValue={defaultTitle}
          name="sub[title]"
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
export default SubNew;