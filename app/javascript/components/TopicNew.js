import React from 'react';

const TopicNew = ({ topic, sub }) => {
  const {id} = sub
  const {title, body, error} = topic
  const defaultTitle = title ? title: ''
  const defaultBody = body ? body: ''
  return(
    <>
    <h1>New Topic</h1>
    {errors && errors}
    <form action={`/subs/${id}/topics`} method="post">
      <input
        type="text"
        required
        placeholder='Title'
        defaultValue={defaultTitle}
        name="topic[title]"
      />
      <textarea
        required
        placeholder="body"
        defaultValue={defaultBody}
        name="topic[body]"
      />
      <button type="submit" >Add Topic</button>
    </form>
    </>
  )
}

export default TopicNew;