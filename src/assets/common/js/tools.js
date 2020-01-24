const Tools = {
  /**
   * @param {dom} element dom
   * @description 清楚dom节点的空白节点
   */
  cleanWhitespace (element) {
    for (let i = 0; i < element.childNodes.length; i += 1) {
      let node = element.childNodes[i]
      if (node.nodeType === 3 && !/\S/.test(node.nodeValue)) {
        node.parentNode.removeChild(node)
      }
    }
  }
}

export default Tools
