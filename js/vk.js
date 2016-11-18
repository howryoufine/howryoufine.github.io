$.ajax({
  url: 'https://api.vk.com/method/photos.get?',
  data: {
    owner_id: '51964331', // ID пользователя
    album_id: 'wall' // ID альбома
  },
  dataType: "jsonp",
  success: function(data) {
    data.response.forEach(function(item) {
      var img = item.src_xxxbig;
      (!(img)) ? img = item.src_big : img; // проверяем, есть ли самое большое разрешение у фотографии
      $('#container').append('<img class="item" src="' + img + '" alt="" />');
    });
  }
});
