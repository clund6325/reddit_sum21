import React from 'react';

const Topics = ({sub, topics}) => {
  const { title, id} = sub
  const url = `/subs/${id}/topics`
  return(
    <>
      <h1>Topics Page from {title} Sub</h1>
      <a href={`/subs/${id}`}>Back to {title}</a>
      <br />
      <a href= {url + '/new'}>New Topic</a>
      {
        topics.map( (topic) => (
          <div>
            <h3>{topic.title}</h3>
            <a href={url + topic.id} >Show Topic</a>
            {''}
            <a href={url + topic.id + '/edit'} >Edit Topic</a>
            {''}
            <a href={url + topic.id} data-method="delete">Delete Topic</a>
          </div>)
        )
      }
    </>
  )
}

export default Topics;