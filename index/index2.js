
import tabs from './tabs'
Page({
  onShow(){
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    this.getTabBar().setData({
      selected: tabs.findIndex(tab=>tab.pagePath == '/'+currentPage.route)
    })
  
  }
})