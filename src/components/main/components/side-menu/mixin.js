export default {
  methods: {
    getMenuName(item, _children) {
      return _children ? item.chilren[0].name : item.name
    },
    showTitle(item) {
      let { title, __titleIsFunction__ } = item.meta
      title = (item.meta && item.meta.title) || item.name
      return title
    },
    showChildren (item) {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
    },
    getNameOrHref (item, children0) {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    }
  }
}