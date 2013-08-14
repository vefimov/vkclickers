// Generated by CoffeeScript 1.6.2
(function() {
  var TurboLiker, VK,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    _this = this;

  VK = (function() {
    function VK() {
      this.run = __bind(this.run, this);      setTimeout(this.run, 2000);
    }

    VK.prototype.run = function() {
      var friendBtn, id, likeBtn, mouseoverAttr, script, subscribeBtn,
        _this = this;

      likeBtn = jQuery(".fw_like_wrap .fw_like_link, #pv_like_link");
      subscribeBtn = jQuery("#subscribe_button, #group_like_module button");
      friendBtn = jQuery("#friend_status button");
      if (location.search.indexOf("repost") > -1) {
        mouseoverAttr = jQuery("div.fw_like_wrap.fl_l").attr("onmouseover");
        id = mouseoverAttr.match(/-?\d+_\d+/)[0];
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.textContent = "window.wall.likeOver('" + id + "')";
        document.body.appendChild(script);
        return setTimeout(function() {
          var onclick;

          onclick = jQuery(".fl_l.checkbox").attr("onclick");
          script = document.createElement('script');
          script.type = 'text/javascript';
          script.textContent = onclick;
          return document.body.appendChild(script);
        }, 500);
      } else if (likeBtn.size()) {
        return likeBtn.get(0).click();
      } else if (subscribeBtn.size() || jQuery("#unsubscribe").size()) {
        return subscribeBtn.get(0).click();
      } else if (friendBtn.size()) {
        return friendBtn.get(0).click();
      }
    };

    return VK;

  })();

  TurboLiker = (function() {
    function TurboLiker() {
      this.run = __bind(this.run, this);      if (/(\?page=)+(likes|repost|group|frnd)/.test(location.search)) {
        setTimeout(this.run, 500);
      }
    }

    TurboLiker.prototype.run = function() {
      var i, len, loopRows, rows,
        _this = this;

      rows = jQuery(".table.table-striped tbody tr");
      len = rows.size();
      i = 0;
      return (loopRows = function() {
        var row, url;

        if (i === rows.size()) {
          return location.reload();
        }
        row = rows.eq(i);
        url = row.find("a").attr("href") + location.search;
        console.log(i, url);
        window.open(url, "__blank");
        return setTimeout(function() {
          row.find(".btn-group p:first-child").click();
          i++;
          return setTimeout(loopRows, 500);
        }, 5000);
      })();
    };

    return TurboLiker;

  })();

  jQuery(document).ready(function() {
    var turboLiker, vk;

    if (location.host === "vk.com") {
      return vk = new VK();
    } else {
      return turboLiker = new TurboLiker();
    }
  });

}).call(this);
