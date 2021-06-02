import React from "react";
const SubEdit = ({ sub }) => {
  const { title, id } = sub
  const defaultTitle = title ? title : "";
  return (
    <>
      <h1>Editing {title} sub</h1>
      <form action={`/subs/${id}`} method="post">
        <input type='hidden' name="_method" value="patch" />
        <input
          placeholder="Title"
          type="text"
          required
          defaultValue={defaultTitle}
          name="sub[title]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}
export default SubEdit;