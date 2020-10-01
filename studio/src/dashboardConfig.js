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
                  buildHookId: '5f76261123f83ee7f46007f9',
                  title: 'Sanity Studio',
                  name: 'valorant-stats-studio',
                  apiId: 'bd94eb50-f013-4463-ad8c-59c9973a749f'
                },
                {
                  buildHookId: '5f7626115d41cd88def87718',
                  title: 'Blog Website',
                  name: 'valorant-stats-web',
                  apiId: '81496a6d-53be-4c78-a4ec-e3ba76285310'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tessamero/valorant-stats',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://valorant-stats-web.netlify.app', category: 'apps' }
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
