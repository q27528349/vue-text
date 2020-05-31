let defaultcity = '北京'
try {
  if (localStorage.city) { // localStorage本地存储 防止每次刷新时city发生改变
    defaultcity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaultcity || '北京'
}
