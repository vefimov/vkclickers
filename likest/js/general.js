// Generated by CoffeeScript 1.6.1
(function() {
  var Snebes, VK,
    _this = this;

  VK = (function() {

    function VK() {
      var _this = this;
      this.run = function() {
        return VK.prototype.run.apply(_this, arguments);
      };
      setTimeout(this.run, 1000);
    }

    VK.prototype.run = function() {
      var friendBtn, id, likeBtn, mouseoverAttr, script, subscribeBtn,
        _this = this;
      likeBtn = jQuery(".fw_like_wrap .fw_like_link, #pv_like_link, .fw_like_wrap.fl_l, #pv_like_wrap");
      subscribeBtn = jQuery("#subscribe_button, #group_like_module button");
      friendBtn = jQuery("#friend_status button");
      if (document.referrer.indexOf("?c=4") > -1) {
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
        likeBtn.get(0).click();
        return setTimeout(function() {
          return location.href = "http://likest.ru/like-redirect.php";
        }, 500);
      } else if (subscribeBtn.size() || jQuery("#unsubscribe").size()) {
        return subscribeBtn.get(0).click();
      } else if (friendBtn.size()) {
        return friendBtn.get(0).click();
      }
    };

    return VK;

  })();

  Snebes = (function() {

    function Snebes() {
      var _this = this;
      this.run = function() {
        return Snebes.prototype.run.apply(_this, arguments);
      };
      this.run();
    }

    Snebes.prototype.run = function() {
      var cells, el, i, _results,
        _this = this;
      if (location.href === "http://likest.ru/earn") {
        return setTimeout(function() {
          return location.href = "http://likest.ru/like-redirect.php";
        }, 2500);
      } else {
        cells = document.querySelectorAll(".groups-container a");
        i = 0;
        _results = [];
        while (i < cells.length) {
          el = cells[i];
          (function(el, i) {
            return setTimeout(function() {
              var url;
              url = el.href;
              window.open(url, "__blank");
              if (i === cells.length - 1) {
                return location.reload();
              }
            }, i * 5000);
          })(el, i);
          _results.push(i++);
        }
        return _results;
      }
    };

    return Snebes;

  })();

  jQuery(document).ready(function() {
    var snebes, vk;
    if (location.host !== "likest.ru") {
      return vk = new VK();
    } else {
      return snebes = new Snebes();
    }
  });

}).call(this);
