class VK
  constructor: ->
    setTimeout @run, 1000

  run: =>
    likeBtn = jQuery(".fw_like_wrap .fw_like_link, #pv_like_link, .fw_like_wrap.fl_l, #pv_like_wrap")
    subscribeBtn = jQuery("#subscribe_button, #group_like_module button")
    friendBtn = jQuery("#friend_status button")

    if document.referrer.indexOf("?c=4") > -1
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
      setTimeout =>
        location.href = "http://likest.ru/like-redirect.php"
      , 500
    else if subscribeBtn.size() || jQuery("#unsubscribe").size()
      subscribeBtn.get(0).click() 
    else if friendBtn.size()
      friendBtn.get(0).click()

class Snebes
  constructor: ->
    @run()

  run: =>
    if location.href is "http://likest.ru/earn"
      setTimeout =>
        location.href = "http://likest.ru/like-redirect.php"
      , 2500
    else
      cells = document.querySelectorAll(".groups-container a")
      i = 0
      while i < cells.length
        el = cells[i]
        do (el, i) =>
          setTimeout =>
            url = el.href
            window.open(url, "__blank")
            if i is cells.length - 1
              location.reload()
          , i * 5000

        i++



jQuery(document).ready =>
  if location.host isnt "likest.ru"
    vk = new VK()
   else
    snebes = new Snebes()
