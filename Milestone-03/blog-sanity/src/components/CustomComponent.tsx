import {PortableTextComponents} from '@portabletext/react'

export const components: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className='text-5xl my-5 font-extrabold underline text-purple-800'>{children}</h1>,
    h2: ({children}) => <h2 className='text-4xl my-5 font-extrabold underline text-purple-800'>{children}</h2>,
    h3: ({children}) => <h3 className='text-3xl my-5 font-extrabold underline text-purple-800'>{children}</h3>,
    h4: ({children}) => <h4 className='text-2xl my-5 font-extrabold underline text-purple-800'>{children}</h4>,
    h5: ({children}) => <h5 className='text-xl my-5 font-extrabold underline text-purple-800'>{children}</h5>,
    h6: ({children}) => <h6 className='text-lg my-5 font-extrabold underline text-purple-800'>{children}</h6>,
  },

  listItem: {
    bullet:({children}) => <li className='list-disc mb-1 marker:text-purple-500 list-inside ml-4'>{children}</li>,
    number: ({children}) => <li className="list-decimal mb-1 marker:text-purple-500 list-inside ml-4">{children}</li>,
  },

  marks: {
    strong:({children}) => <strong className='font-bold'>{children}</strong>,
  }
}