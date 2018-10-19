
export default {
  /**
   * ti
   * @param {*} name 
   * @param {*} content 
   */
  setStorage(name, content) {
    if (!name) return;
    let contentCopy = content;
    if (typeof value !== 'string') {
      contentCopy = JSON.stringify(contentCopy);
    }
    window.localStorage.setItem(name, contentCopy);
  },
}