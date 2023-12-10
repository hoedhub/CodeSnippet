import type { PageLoad } from './$types';

export const load = (() => {
  // can be fetched from any source
  return {
    snippets: [
      {
        title: 'Cooper Code Snippet',
        language: 'typescript',
        code: 'console.log("yeah");',
        favorite: false
      },
      {
        title: 'Cooper HTML Snippet',
        language: 'html',
        code: '<div>this is a div</div>',
        favorite: false
      }
    ]
  }
}) satisfies PageLoad