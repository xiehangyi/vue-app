export function getRects (doms) {
  return doms.map((dom) => {
    const rect = dom.getBoundingClientRect()
    const { left, top } = rect
    return { left, top }
  })
}

export function preload (urls) {
  return new Promise(resolve => {
    urls.map(url => {
      var img = new Image()
      img.src = url
    })
    resolve()
  })
}
