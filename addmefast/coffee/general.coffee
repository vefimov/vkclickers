class Addme
  constructor: ->
    isClicked = false
    setInterval =>
      el = document.querySelector("center > a > div.btn3")
      if el
        unless isClicked
          isClicked = true
          setTimeout =>
            el.click()
          , 1000       
      else
        isClicked = false
    , 250


class Facebook
  constructor: ->
    setTimeout =>   
      jQuery("#timelineHeadlineLikeButton input[type=submit], sharerDialogButtons").click()
      jQuery("#sharerDialogButtons input[type=submit]").click()
      jQuery("#pagelet_escape_hatch input[type=submit]").click()
      jQuery(".UIActionLinks.UIActionLinks_bottom > a").click()
      jQuery(".PageLikeButton.uiButton.uiButtonOverlay.uiButtonLarge a").click()
      setTimeout =>
        window.close()
      , 2000
    , 2000

class Twitter
  constructor: ->
    setTimeout =>   
      jQuery("#follow_btn_form button[type=submit]").click()
      jQuery("#retweet_btn_form input[type=submit]").click()

      setTimeout =>
        window.close()
      , 2000
    , 2000

jQuery(document).ready =>

  if location.host is "addmefast.com"
    new Addme()
  else if location.host is "www.facebook.com"
    new Facebook()
  else if location.host is "twitter.com"
    new Twitter()

  setTimeout =>
    location.reload()
  , 1000 * 60 * 10
