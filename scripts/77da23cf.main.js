!function(a){window.APP={},$materialBoard=a("#material-board"),$notepad=a("#notepad");var b=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];a.each(b,function(a,c){b[a]}),a("[data-key-label]").on("mousedown touchstart",function(){var b=a(this),c=b.parent(),d=b.data("key-label"),e=$notepad[0].scrollHeight,f=$notepad.val();b.addClass("is-active"),c.addClass("is-active"),"enter"===d?f+="\n":"delete"===d?f=f.substring(0,f.length-1):f+=d,$notepad.val(f),$notepad.scrollTop(e)}),a("[data-key-label]").on("mouseup touchend",function(){var b=a(this),c=b.parent();b.removeClass("is-active"),c.removeClass("is-active")})}(jQuery);