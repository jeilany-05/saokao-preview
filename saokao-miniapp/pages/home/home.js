Page({
  data: {},

  onLoad() {},

  goPolicy() {
    wx.showToast({ title: '编程政策', icon: 'none' });
  },

  goNews() {
    wx.showToast({ title: '赛考喜报', icon: 'none' });
  },

  goCalendar() {
    wx.navigateTo({ url: '/pages/index/index' });
  },

  goStudent() {
    wx.showToast({ title: '优秀学员', icon: 'none' });
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  },

  goHome() {},

  goMine() {
    wx.showToast({ title: '我的', icon: 'none' });
  }
});
