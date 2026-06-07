const weddingDate = new Date("2026-07-18T18:00:00+08:00").getTime();

const IMAGE_BASE = "https://wedding-1307100970.cos.ap-guangzhou.myqcloud.com";

const heroPhotos = [
  IMAGE_BASE + "/1.jpg",
  IMAGE_BASE + "/2.jpg",
  IMAGE_BASE + "/3.jpg"
];

const galleryPhotos = [
  IMAGE_BASE + "/gallery-01.jpg",
  IMAGE_BASE + "/gallery-02.jpg",
  IMAGE_BASE + "/gallery-03.jpg",
  IMAGE_BASE + "/gallery-04.jpg",
  IMAGE_BASE + "/gallery-05.jpg",
  IMAGE_BASE + "/gallery-06.jpg",
  IMAGE_BASE + "/gallery-07.jpg"
];

const guideItems = [
  {
    name: "紫云公园 / 紫云山",
    category: "景点",
    distance: "1-3km",
    time: "清晨 / 傍晚",
    tags: ["近距离", "登高", "散步"],
    desc: "离酒店很近的山景休闲点，适合婚礼前后短时间透气，看九龙江方向的城市风景。",
    query: "漳州 龙海 紫云公园"
  },
  {
    name: "月港古镇",
    category: "古迹",
    distance: "3-5km",
    time: "傍晚",
    tags: ["海丝古港", "古街", "人文"],
    desc: "明代海上丝路名港，适合放慢脚步看古街巷、古码头和海澄一带的老城肌理。",
    query: "漳州 龙海 月港古镇"
  },
  {
    name: "后港古街 / 石码老街",
    category: "古街",
    distance: "4-6km",
    time: "晚上",
    tags: ["夜游", "小吃", "烟火气"],
    desc: "龙海老城烟火气比较集中的一带，晚上更舒服，适合把小吃和散步安排在一起。",
    query: "漳州 龙海 后港古街"
  },
  {
    name: "龙江颂景区",
    category: "景点",
    distance: "8-12km",
    time: "傍晚",
    tags: ["江景", "步道", "夜景"],
    desc: "江景、步道和龙海文旅地标感比较完整，夏天建议避开正午，傍晚去更舒服。",
    query: "漳州 龙海 龙江颂景区"
  },
  {
    name: "埭美古村",
    category: "拍照",
    distance: "10-15km",
    time: "上午",
    tags: ["红砖古厝", "水上古村", "出片"],
    desc: "闽南红砖古厝和水系环绕的古村，辨识度高，适合亲友拍照打卡。",
    query: "漳州 龙海 埭美古村"
  },
  {
    name: "江东桥 / 虎渡桥",
    category: "古迹",
    distance: "15-20km",
    time: "上午",
    tags: ["宋代古桥", "文保", "短停留"],
    desc: "历史感很强的古桥点位，停留时间不用太长，适合对古迹感兴趣的宾客。",
    query: "漳州 江东桥 虎渡桥"
  },
  {
    name: "漳州古城",
    category: "古街",
    distance: "18-22km",
    time: "下午 / 晚上",
    tags: ["压线点", "古城", "小吃"],
    desc: "漳州主城代表街区，古厝、小吃和街巷氛围集中，严格 20km 时可作为边界备选。",
    query: "漳州古城"
  },
  {
    name: "南山寺",
    category: "古迹",
    distance: "18-22km",
    time: "上午",
    tags: ["千年古刹", "安静", "边界备选"],
    desc: "靠近漳州主城的寺庙古迹，适合喜欢安静参观的亲友，可与古城二选一。",
    query: "漳州 南山寺"
  },
  {
    name: "云洞岩",
    category: "景点",
    distance: "20km 左右",
    time: "清晨",
    tags: ["山水石刻", "4A", "偏户外"],
    desc: "漳州知名山水石刻景区，可能略超 20km，适合作为有车亲友的延伸备选。",
    query: "漳州 云洞岩"
  },
  {
    name: "石码五香",
    category: "美食",
    distance: "4-6km",
    time: "午后 / 夜宵",
    tags: ["龙海代表", "炸物", "必吃"],
    desc: "豆皮炸卷外酥内香，是龙海很有代表性的古早味之一，和卤面搭配很稳。",
    query: "龙海 石码五香"
  },
  {
    name: "卤面",
    category: "美食",
    distance: "4-6km",
    time: "午餐 / 晚餐",
    tags: ["主食", "闽南味", "配五香"],
    desc: "浓稠卤汤配料丰富，游客接受度高，适合作为石码小吃的主食担当。",
    query: "龙海 石码 卤面"
  },
  {
    name: "面线糊",
    category: "美食",
    distance: "4-6km",
    time: "早餐 / 夜宵",
    tags: ["早餐", "夜宵", "热乎"],
    desc: "适合配油条、卤蛋、醋肉或大肠，夏天晚上吃也不会太重。",
    query: "龙海 石码 面线糊"
  },
  {
    name: "锅边糊",
    category: "美食",
    distance: "4-8km",
    time: "早餐",
    tags: ["古早味", "清爽", "早餐"],
    desc: "本地早餐感很强，口味清爽，适合不想吃太油的亲友。",
    query: "龙海 锅边糊"
  },
  {
    name: "米苔目",
    category: "美食",
    distance: "4-6km",
    time: "午餐 / 夜宵",
    tags: ["本地特色", "口感特别", "小吃"],
    desc: "口感有记忆点，可作为石码小吃清单里的特色补充。",
    query: "龙海 石码 米苔目"
  },
  {
    name: "肉粽",
    category: "美食",
    distance: "4-8km",
    time: "早餐 / 加餐",
    tags: ["闽南小吃", "好接受", "加餐"],
    desc: "闽南常见小吃，适合放进小吃九宫格，也适合打包带走。",
    query: "龙海 肉粽"
  },
  {
    name: "海蛎煎",
    category: "美食",
    distance: "4-10km",
    time: "晚餐 / 夜宵",
    tags: ["海味", "排档", "夜市"],
    desc: "海味明显，适合在老街或排档场景里顺手点一份。",
    query: "龙海 海蛎煎"
  },
  {
    name: "鸭肉粥",
    category: "美食",
    distance: "4-8km",
    time: "夜宵",
    tags: ["清淡", "夜宵", "收尾"],
    desc: "比炒物更清淡，适合晚间收尾，也适合长辈口味。",
    query: "龙海 鸭肉粥"
  },
  {
    name: "海澄 / 月港海鲜排档",
    category: "美食",
    distance: "3-8km",
    time: "晚餐",
    tags: ["多人聚餐", "海鲜", "江口风味"],
    desc: "适合多人正餐，想吃本地海鲜和江口风味时可以优先看海澄、月港一带。",
    query: "龙海 海澄 月港 海鲜排档"
  }
];

const normalizedGuideItems = guideItems.map((item) => {
  const isFood = item.category === "美食";
  return {
    name: item.name,
    category: isFood ? "美食" : "景点",
    distance: item.distance,
    time: item.time,
    tags: item.tags,
    desc: item.desc,
    query: item.query
  };
});

const guideCategories = ["景点", "美食"];
const guideRoutes = [
  {
    name: "老城夜游",
    points: ["钻石大酒店", "后港古街", "石码老街", "五香 / 卤面"],
    desc: "适合 7 月晚上，距离短、吃得集中，亲友自由度最高。",
    query: "龙海钻石大酒店 到 后港古街 石码老街"
  },
  {
    name: "海丝古港",
    points: ["钻石大酒店", "月港古镇", "龙江颂景区", "海鲜排档"],
    desc: "人文和江景都兼顾，建议傍晚走，避开正午高温。",
    query: "龙海钻石大酒店 到 月港古镇 龙江颂景区"
  },
  {
    name: "古厝拍照",
    points: ["钻石大酒店", "埭美古村", "江东桥", "石码夜宵"],
    desc: "适合自驾或打车，主打闽南红砖古厝和历史古桥。",
    query: "龙海钻石大酒店 到 埭美古村 江东桥"
  },
  {
    name: "漳州延伸",
    points: ["钻石大酒店", "南山寺", "漳州古城", "古城小吃"],
    desc: "更偏主城游，部分点位在 20km 边界，时间充裕再选。",
    query: "龙海钻石大酒店 到 漳州古城 南山寺"
  }
];

function buildCountdown() {
  const diff = Math.max(0, weddingDate - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: String(Math.floor(totalSeconds / 86400)),
    hours: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(totalSeconds % 60).padStart(2, "0")
  };
}

Page({
  data: {
    current: 0,
    pageDots: [0, 1, 2, 3, 4],
    heroPhotos,
    galleryPhotos,
    heroIndex: 0,
    galleryIndex: 0,
    countdown: buildCountdown(),
    musicOn: false,
    guideItems: normalizedGuideItems,
    guideCategories,
    guideRoutes,
    activeCategory: "景点",
    activeRoute: 0,
    currentRoute: guideRoutes[0],
    filteredGuideItems: normalizedGuideItems.filter((item) => item.category === "景点"),
    touchStartY: null,
    touchStartX: null,
    guideAtTop: true,
    guideAtBottom: false,
    guideGridHeight: 0
  },

  onLoad() {
    this.createAudio();
    this.countdownTimer = setInterval(() => {
      this.setData({ countdown: buildCountdown() });
    }, 1000);
    this.heroTimer = setInterval(() => {
      this.setData({ heroIndex: (this.data.heroIndex + 1) % heroPhotos.length });
    }, 4200);
    this.galleryTimer = setInterval(() => {
      this.setData({ galleryIndex: (this.data.galleryIndex + 1) % galleryPhotos.length });
    }, 3200);
    this.musicTimer = setTimeout(() => {
      this.toggleMusic();
    }, 500);
  },

  onReady() {
    wx.createSelectorQuery()
      .in(this)
      .select(".guide-grid")
      .boundingClientRect((rect) => {
        if (rect) this.setData({ guideGridHeight: rect.height });
      })
      .exec();
  },

  onUnload() {
    clearInterval(this.countdownTimer);
    clearInterval(this.heroTimer);
    clearInterval(this.galleryTimer);
    clearTimeout(this.musicTimer);
    if (this.audio) {
      this.audio.destroy();
      this.audio = null;
    }
  },

  createAudio() {
    this.audio = wx.createInnerAudioContext();
    this.audio.src = "/miniprogram-assets/bgm.mp3";
    this.audio.loop = true;
    this.audio.onPlay(() => this.setData({ musicOn: true }));
    this.audio.onPause(() => this.setData({ musicOn: false }));
    this.audio.onStop(() => this.setData({ musicOn: false }));
    this.audio.onError(() => {
      this.setData({ musicOn: false });
      wx.showToast({ title: "音乐暂不可用", icon: "none" });
    });
  },

  goTo(event) {
    const nextIndex = Number(event.currentTarget.dataset.index);
    this.setCurrent(nextIndex);
  },

  next() {
    this.setCurrent(this.data.current + 1);
  },

  previous() {
    this.setCurrent(this.data.current - 1);
  },

  setCurrent(nextIndex) {
    const bounded = Math.max(0, Math.min(this.data.pageDots.length - 1, nextIndex));
    if (bounded !== this.data.current) {
      this.setData({ current: bounded });
    }
  },

  isGuidePanelEvent(event) {
    return Boolean(event.mark && event.mark.guidePanel);
  },

  onTouchStart(event) {
    if (this.isGuidePanelEvent(event)) {
      this.setData({ touchStartY: null, touchStartX: null });
      return;
    }

    const touch = event.touches[0];
    this.setData({
      touchStartY: touch.clientY,
      touchStartX: touch.clientX
    });
  },

  onTouchEnd(event) {
    if (this.isGuidePanelEvent(event)) {
      this.setData({ touchStartY: null, touchStartX: null });
      return;
    }

    if (this.data.touchStartY === null) return;
    const touch = event.changedTouches[0];
    const delta = this.data.touchStartY - touch.clientY;
    const horizontalDeltaValue = this.data.touchStartX - touch.clientX;
    const horizontalDelta = Math.abs(horizontalDeltaValue);
    const verticalDelta = Math.abs(delta);

    this.setData({ touchStartY: null, touchStartX: null });

    if (horizontalDelta >= 52 && horizontalDelta > verticalDelta * 1.15) {
      horizontalDeltaValue > 0 ? this.next() : this.previous();
      return;
    }

    if (verticalDelta < 52 || verticalDelta < horizontalDelta * 1.15) return;

    if (this.data.current === 2) {
      if (delta > 0 && !this.data.guideAtBottom) return;
      if (delta < 0 && !this.data.guideAtTop) return;
    }

    if (delta > 0) {
      this.next();
    } else {
      this.previous();
    }
  },

  onTouchCancel(event) {
    if (this.isGuidePanelEvent(event)) {
      this.setData({ touchStartY: null, touchStartX: null });
      return;
    }

    this.setData({ touchStartY: null, touchStartX: null });
  },

  noop() {},

  toggleMusic() {
    if (!this.audio) return;
    if (this.data.musicOn) {
      this.audio.pause();
      return;
    }
    this.audio.play();
  },

  openVenueLocation() {
    wx.openLocation({
      latitude: 24.432877,
      longitude: 117.829025,
      scale: 18,
      name: "龙海钻石大酒店",
      address: "福建省漳州市龙海区海澄镇月港大道3号 · 水晶厅",
      fail: () => {
        wx.setClipboardData({
          data: "福建省漳州市龙海区海澄镇月港大道3号 龙海钻石大酒店 水晶厅",
          success: () => wx.showToast({ title: "已复制酒店地址", icon: "none" })
        });
      }
    });
  },

  copyMapKeyword(event) {
    const query = event.currentTarget.dataset.query || "福建省漳州市龙海区钻石大酒店";
    const provider = event.currentTarget.dataset.provider || "地图";
    wx.setClipboardData({
      data: query,
      success: () => {
        wx.showToast({ title: "已复制，可在" + provider + "搜索", icon: "none" });
      }
    });
  },

  setCategory(event) {
    this.setData({
      activeCategory: event.currentTarget.dataset.category,
      guideAtTop: true,
      guideAtBottom: false
    }, () => this.updateGuideList());
  },

  setRoute(event) {
    const activeRoute = Number(event.currentTarget.dataset.index);
    this.setData({
      activeRoute,
      currentRoute: guideRoutes[activeRoute]
    });
  },

  updateGuideList() {
    const activeCategory = this.data.activeCategory;
    const filteredGuideItems = normalizedGuideItems.filter((item) => {
      return item.category === activeCategory;
    });

    this.setData({ filteredGuideItems, guideAtTop: true, guideAtBottom: false });
  },

  onGuideScroll(event) {
    const scrollTop = event.detail.scrollTop || 0;
    const scrollHeight = event.detail.scrollHeight || 0;
    const viewportHeight = this.data.guideGridHeight || 1;
    this.setData({
      guideAtTop: scrollTop <= 4,
      guideAtBottom: scrollTop + viewportHeight >= scrollHeight - 4
    });
  },

  onGuideScrollUpper() {
    this.setData({ guideAtTop: true, guideAtBottom: false });
  },

  onGuideScrollLower() {
    this.setData({ guideAtTop: false, guideAtBottom: true });
  }
});
