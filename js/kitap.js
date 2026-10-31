// Kitap çekirdeği: modül tanımları ve bölüm içerikleri burada toplanır.
// Hem klasik KITAP.bolum('m1', '1-1', `...`) hem de modern kitap.bolumEkle({ id: '6-1', ... }) API'lerini destekler.
window.KITAP = {
  moduller: [],
  icerik: {},
  bolum(modulId, bolumId, html) {
    this.icerik[modulId + '/' + bolumId] = html;
  },
  bolumEkle(obj) {
    if (!obj || !obj.id) return;
    var parts = obj.id.split('-');
    var modulId = 'm' + parts[0];
    var bolumId = obj.id;
    this.icerik[modulId + '/' + bolumId] = obj.icerik;
  }
};
window.kitap = window.KITAP;
