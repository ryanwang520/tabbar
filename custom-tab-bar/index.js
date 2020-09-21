import {subscribe} from '../index/tabs'
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    tabs:null,
  },
  attached() {
     this.subscription = subscribe(this)
  },
  detached(){
    this.sbuscription()
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})