import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getToasters } from '../queries/queries';
import { Spinner, ToasterCard } from '.';

export default () => {
  const { loading, error, data } = useQuery(getToasters);

  if (loading) {
    return <Spinner />
  }else if(error) {
    return <h1>Error...<span role="img" aria-labelledby="error">❌</span></h1>
  }else {  
    return (
      <>
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Graph Press</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">A simple web app to integrate Wordpress as Headless CMS with GraphQL and Reactjs.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            data && data.toasters.nodes.map((toaster) => (
              <ToasterCard key={toaster.id} toaster={toaster} />
            ))
          }
        </div>
      </>
    ) 
  }
}
