const contests = [
  {
    id: 'aice',
    tag: 'AICE',
    tagColor: '#FF6B35',
    name: 'AICE青少年人工智能核心素养测评',
    organizer: '中国自动化学会',
    intro: '国家一级学术群众团体、五星级科技社团，白名单大赛主办方CAA主办；"人工智能后备人才培养工程"所属项目，4级及以上优秀可免择营笔试',
    schedules: [
      { label: '3月\n测评', type: 'done' },
      { label: '6月\n测评', type: 'done' },
      { label: '8月\n测评', type: 'active' },
      { label: '12月\n测评', type: 'upcoming' }
    ]
  },
  {
    id: 'aild',
    tag: 'AILD',
    tagColor: '#4CAF50',
    name: '全国青少年劳动技能与智能设计大赛',
    organizer: '中国自动化学会',
    intro: '连续3年被列入教育部认可的白名单赛事，由中国自动化学会主办，人文与科技并存是AILD大赛的一大特色',
    schedules: [
      { label: '预计\n4/5月份', type: 'done', sublabel: '初赛' },
      { label: '预计\n5/6月份', type: 'active', sublabel: '复赛' },
      { label: '预计\n7月份', type: 'upcoming', sublabel: '决赛' }
    ]
  },
  {
    id: 'lanqiao',
    tag: '蓝桥杯',
    tagColor: '#2196F3',
    name: '蓝桥杯全国软件和信息技术专业人才大赛',
    organizer: '工业和信息化部人才交流中心',
    intro: '由工业和信息化部人才交流中心主办，连续3年入围教育部白名单单赛事，由中国自动化学会主办，人文与科技并存是AILD大赛的一大特色',
    schedules: [
      { label: '预计\n4/5月份', type: 'done', sublabel: '省赛' },
      { label: '预计\n5/6月份', type: 'active', sublabel: '国赛' }
    ]
  },
  {
    id: 'ai_camp',
    tag: 'AI探学营',
    tagColor: '#9C27B0',
    name: '全国中小学人工智能探究性学习训练营',
    organizer: '中国自动化学会、中国人工智能学会、中国科学院大学、清华大学等高校',
    intro: '面向全国中小学生的创新性公益教育项目，为AI领域有天赋的孩子，提供与中国科学院大学、清华大学等高校导师进行项目制学习的机会',
    schedules: [
      { label: '预计\n6/7月份', type: 'done', sublabel: '活动报名' },
      { label: '预计\n7/8月份', type: 'active', sublabel: '线上\n笔试、面试' },
      { label: '预计\n8月份', type: 'upcoming', sublabel: '高校\n线下集训' },
      { label: '预计\n8/10月份', type: 'upcoming', sublabel: '线上\n课题活动' }
    ]
  }
]

Page({
  data: {
    contests,
    year: '2025'
  },
  onLoad() {},
  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  }
})
