document.addEventListener("DOMContentLoaded", function() {
    var div,
      n,
      v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = noThumb(v[n].dataset.id);
      div.onclick = noIframe;
      v[n].appendChild(div);
    }
  });
  
  function noThumb(id) {
    var thumb = '<img src="static/images/overlay.jpg">',
      play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
  }
  
  function noIframe() {
    var iframe = document.createElement("iframe");
    var embed =
      "https://www.youtube.com/embed/Mdcw3Sb98DA?si=kEvhpyEGREVX6xkQ";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    this.parentNode.replaceChild(iframe, this);
  }
  