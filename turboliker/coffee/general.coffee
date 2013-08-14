class VK
  constructor: ->
    setTimeout @run, 1000

  run: =>
    likeBtn = jQuery(".fw_like_wrap .fw_like_link, #pv_like_link")
    subscribeBtn = jQuery("#subscribe_button, #group_like_module button")
    friendBtn = jQuery("#friend_status button")

    if location.search.indexOf("repost") > -1
      mouseoverAttr = jQuery("div.fw_like_wrap.fl_l").attr("onmouseover")
      id = mouseoverAttr.match(/-?\d+_\d+/)[0]

      script = document.createElement('script')
      script.type = 'text/javascript'
      script.textContent = "window.wall.likeOver('#{id}')";
      document.body.appendChild(script)

      setTimeout => 
        onclick = jQuery(".fl_l.checkbox").attr("onclick")
        script = document.createElement('script')
        script.type = 'text/javascript'
        script.textContent = onclick
        document.body.appendChild(script)
      , 500

    else if likeBtn.size()
      likeBtn.get(0).click()
    else if subscribeBtn.size() || jQuery("#unsubscribe").size()
      subscribeBtn.get(0).click() 
    else if friendBtn.size()
      friendBtn.get(0).click()

class TurboLiker
  constructor: ->

    if /(\?page=)+(likes|repost|group|frnd)/.test location.search
      setTimeout @run, 500

  run: =>
    rows = jQuery(".table.table-striped tbody tr")
    len = rows.size()
    i = 0

    do loopRows = =>
      if i is rows.size()
        return location.reload()
      row = rows.eq(i)
      url = row.find("a").attr("href") + location.search
      url = url.replace "https", "http"
      window.open url, "__blank"
      setTimeout => 
        row.find(".btn-group p:first-child").click()
        i++
        setTimeout loopRows, 500
      , 4000


jQuery(document).ready =>
  if location.host is "vk.com"
    vk = new VK()
   else
    turboLiker = new TurboLiker()
