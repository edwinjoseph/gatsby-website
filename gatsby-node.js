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

const buildPageComponents = (type, pages) => pages.reduce((acc, { path, components }) => {
  const component = components.find(component => component.type === type);

  if (component) {
    acc.push({
      idx: components.indexOf(component),
      path,
      ...component,
    })
  }

  return acc;
}, [])

exports.sourceNodes = ({ actions: { createTypes }}) => {
  createTypes(`
    type PageComponent {
      idx: String
      path: String
      type: String
      props: PagesYamlComponentsProps
    }
  `)
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
          
          return buildPageComponents(args.type, pages)
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
