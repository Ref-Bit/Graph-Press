import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getToasterBySlug } from '../queries/queries';
import { Spinner } from '.';

export default props => {
  const { loading, error, data } = useQuery(getToasterBySlug, {
    variables: { slug: props.match.params.slug }
  });

  if (loading) {
    return <Spinner />
  }else if(error) {
    return <h1>Error...<span role="img" aria-labelledby="error">❌</span></h1>
  }else {   
    return (
      <div className="toaster-page">
        <h1 className="text-center text-4xl mb-5">{data.toaster.title}</h1>
        <p dangerouslySetInnerHTML={{__html: data.toaster.content}}></p>
        <div className="my-5">
          <span className="block"><strong>Price: </strong><p className="inline">${data.toaster.toasterMeta.price}</p></span>
          <span className="block"><strong>Weight: </strong><p className="inline">${data.toaster.toasterMeta.weight}</p></span>
        </div>
      </div>
    )
  }

}
