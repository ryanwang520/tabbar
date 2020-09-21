

const tabs = [{
  pagePath: "/index/index",
  iconPath: "/image/icon_component.png",
  selectedIconPath: "/image/icon_component_HL.png",
  text: "组件"
}, {
  pagePath: "/index/index2",
  iconPath: "/image/icon_API.png",
  selectedIconPath: "/image/icon_API_HL.png",
  text: "接口"
},{
  pagePath: "/index/index2",
  iconPath: "/image/icon_API.png",
  selectedIconPath: "/image/icon_API_HL.png",
  text: "TEST"
}
]
const tabs1 = [{
  pagePath: "/index/index",
  iconPath: "/image/icon_component.png",
  selectedIconPath: "/image/icon_component_HL.png",
  text: "组件"
},{
  pagePath: "/index/index2",
  iconPath: "/image/icon_API.png",
  selectedIconPath: "/image/icon_API_HL.png",
  text: "TEST"
}
]


var current =  tabs
setInterval(()=>{
  if (current == tabs){
    current = tabs1
  }else{
    current = tabs
  }
  notifyTabChange(current)

}, 5000)

function notifyTabChange(newTabs){
  subscribers.forEach(page=>page.setData({tabs:newTabs}))
}

const subscribers = []

export function subscribe(page){
   subscribers.push(page)
   console.log('subscribe')
   console.log(subscribers)

   return ()=>{

    console.log('unsubscribe')
     console.log(subscribers)
     subscribers.splice(subscribers.indexOf(page), 1)
   }
}



export default tabs