export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2ee8b3f5cc1f5cd4ffdd11',
                  title: 'Sanity Studio',
                  name: 'sgmelayu-sanity-gatsby-blog-studio',
                  apiId: '2e5175b2-1f29-4c75-bb86-60a026563432'
                },
                {
                  buildHookId: '5f2ee8b37ce85c9f589630c5',
                  title: 'Blog Website',
                  name: 'sgmelayu-sanity-gatsby-blog-web',
                  apiId: 'f099351a-c3c0-4730-9ad2-856098d3a2b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faizulho/sgmelayu-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sgmelayu-sanity-gatsby-blog-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
