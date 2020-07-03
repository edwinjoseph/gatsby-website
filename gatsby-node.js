const path = require('path')

const getPageData = graphql => graphql(`
  {
    allPagesYaml {
      nodes {
        path
        components {
          type
        }
      }
    }
  }
`)

exports.sourceNodes = ({ actions: { createTypes }}) => {
  const typeDefs = `
    type PageComponent {
      idx: String
      path: String
      type: String
      props: PagesYamlComponentsProps
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      pagesComponentYaml: {
        type: ["PageComponent"],
        args: {
          type: "String!"
        },
        async resolve(source, args, context) {
          const pages = await context.nodeModel.getAllNodes({
            type: "PagesYaml",
          })
          
          return pages.reduce((acc, { path, components }) => {
            const component = components.find(({ type }) => type === args.type);

            if (component) {
              acc.push({
                idx: components.indexOf(component),
                path,
                ...component,
              })
            }

            return acc;
          }, [])
        }
      }
    }
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const component = path.resolve('src/templates/Pages.js')
  const { data: { allPagesYaml }} = await getPageData(graphql)

  allPagesYaml.nodes.forEach(({ path, components }) => {
    createPage({
      path,
      component,
      context: { components }
    })
  })
}
