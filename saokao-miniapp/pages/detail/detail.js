const contestsMap = {
  aice: {
    id: 'aice',
    tag: 'AICE',
    tagColor: '#FF6B35',
    name: 'AICE青少年人工智能核心素养测评',
    organizer: '中国自动化学会',
    intro: '国家一级学术群众团体、五星级科技社团，白名单大赛主办方CAA主办；"人工智能后备人才培养工程"所属项目，4级及以上优秀可免择营笔试',
    coverDesc: 'AICE是"人工智能后备人才培养工程"的重要测评项目，由中国自动化学会（CAA）主办。测评分为1-8级，考查学生在人工智能领域的核心素养，包括编程思维、算法能力、数据理解等维度。',
    highlights: [
      { icon: '🏅', title: '白名单赛事', desc: '教育部认可的正规竞赛，结果获广泛认可' },
      { icon: '🎓', title: '免笔试特权', desc: '4级及以上优秀成绩可免"择营笔试"' },
      { icon: '🤖', title: 'AI核心素养', desc: '全面评估人工智能核心能力与素养' },
      { icon: '📊', title: '8级分级体系', desc: '从入门到专家的完整能力认定体系' }
    ],
    schedules: [
      { label: '3月\n测评', type: 'done', sublabel: '' },
      { label: '6月\n测评', type: 'done', sublabel: '' },
      { label: '8月\n测评', type: 'active', sublabel: '' },
      { label: '12月\n测评', type: 'upcoming', sublabel: '' }
    ],
    registerNote: '可联系班主任报名，猿编程将统一组织送考',
    prizeNote: '测评结果将作为升学、择营的重要参考依据'
  },
  aild: {
    id: 'aild',
    tag: 'AILD',
    tagColor: '#4CAF50',
    name: '全国青少年劳动技能与智能设计大赛',
    organizer: '中国自动化学会',
    intro: '连续3年被列入教育部认可的白名单赛事，由中国自动化学会主办，人文与科技并存是AILD大赛的一大特色',
    coverDesc: 'AILD大赛由中国自动化学会主办，连续3年入围教育部白名单，是兼具人文素养与科技创新的综合性竞赛，旨在培养青少年的劳动精神和智能设计能力。',
    highlights: [
      { icon: '🏅', title: '白名单赛事', desc: '连续3年教育部认可，含金量高' },
      { icon: '🌿', title: '人文与科技', desc: '独特的人文+科技融合特色赛制' },
      { icon: '🔧', title: '劳动技能', desc: '培养动手实践与工程设计能力' },
      { icon: '🤖', title: '智能设计', desc: '融合人工智能的创新设计竞赛' }
    ],
    schedules: [
      { label: '预计\n4/5月份', type: 'done', sublabel: '初赛' },
      { label: '预计\n5/6月份', type: 'active', sublabel: '复赛' },
      { label: '预计\n7月份', type: 'upcoming', sublabel: '决赛' }
    ],
    registerNote: '初赛线上进行，复赛/决赛需现场参与',
    prizeNote: '国家级奖项证书，获奖名单在官网公示'
  },
  lanqiao: {
    id: 'lanqiao',
    tag: '蓝桥杯',
    tagColor: '#2196F3',
    name: '蓝桥杯全国软件和信息技术专业人才大赛',
    organizer: '工业和信息化部人才交流中心',
    intro: '由工业和信息化部人才交流中心主办，连续3年入围教育部白名单赛事，覆盖C/C++、Python、Java等多语言编程竞赛',
    coverDesc: '蓝桥杯由工业和信息化部人才交流中心主办，是国内知名度极高的编程竞赛，连续多年入围教育部白名单，吸引全国数百万学生参与。',
    highlights: [
      { icon: '🏅', title: '白名单赛事', desc: '连续3年教育部认可的权威竞赛' },
      { icon: '💻', title: '多语言支持', desc: 'C/C++、Python、Java等多语言组别' },
      { icon: '🌐', title: '全国规模', desc: '覆盖全国各省市的大规模赛事' },
      { icon: '🎯', title: '编程实战', desc: '真实算法题目考查编程实战能力' }
    ],
    schedules: [
      { label: '预计\n4/5月份', type: 'done', sublabel: '省赛' },
      { label: '预计\n5/6月份', type: 'active', sublabel: '国赛' }
    ],
    registerNote: '省赛在各省考点进行，国赛获省级奖才可参加',
    prizeNote: '省级/国家级证书，一等奖可获高校自主招生加分'
  },
  ai_camp: {
    id: 'ai_camp',
    tag: 'AI探学营',
    tagColor: '#9C27B0',
    name: '全国中小学人工智能探究性学习训练营',
    organizer: '中国自动化学会、中国人工智能学会、中国科学院大学、清华大学等高校',
    intro: '面向全国中小学生的创新性公益教育项目，为AI领域有天赋的孩子，提供与中国科学院大学、清华大学等高校导师进行项目制学习的机会',
    coverDesc: 'AI探学营是面向全国中小学生的创新性公益项目，由中国自动化学会、中国人工智能学会联合顶尖高校共同举办，为AI领域有潜力的孩子提供与名校导师深度交流和项目制学习的宝贵机会。',
    highlights: [
      { icon: '🏫', title: '名校导师', desc: '清华、中科院等顶尖高校导师带队' },
      { icon: '🔬', title: '项目制学习', desc: '真实课题研究，培养科研思维' },
      { icon: '🌟', title: '公益项目', desc: '面向有天赋中小学生的公益教育' },
      { icon: '🤝', title: '线下集训', desc: '高校线下集训，沉浸式学习体验' }
    ],
    schedules: [
      { label: '预计\n6/7月份', type: 'done', sublabel: '活动报名' },
      { label: '预计\n7/8月份', type: 'active', sublabel: '线上\n笔试、面试' },
      { label: '预计\n8月份', type: 'upcoming', sublabel: '高校\n线下集训' },
      { label: '预计\n8/10月份', type: 'upcoming', sublabel: '线上\n课题活动' }
    ],
    registerNote: '需通过笔试+面试筛选，猿编程优秀学员优先推荐',
    prizeNote: '结业学员获高校盖章证书，部分学员可发表学术论文'
  }
}

Page({
  data: {
    contest: null,
    showShare: false
  },
  onLoad(options) {
    const id = options.id
    const contest = contestsMap[id] || contestsMap['aice']
    this.setData({ contest })
  },
  goBack() {
    wx.navigateBack()
  },
  toggleShare() {
    this.setData({ showShare: !this.data.showShare })
  },
  closeShare() {
    this.setData({ showShare: false })
  },
  onShareAppMessage() {
    return {
      title: this.data.contest.name,
      path: `/pages/detail/detail?id=${this.data.contest.id}`
    }
  }
})
