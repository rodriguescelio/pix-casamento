const codes = {
  fuga: '00020126620014BR.GOV.BCB.PIX0111161669637000225Nos ajude a fugir do pais520400005303986540550.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605221RlNOC3CfR6HpfN9IwlgNR63048017',
  viagra: '00020126610014BR.GOV.BCB.PIX0111161669637000224Viagra para a lua de mel5204000053039865406100.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605223LhHXg39PnRZNiHbkD6MzY63043880',
  controle: '00020126720014BR.GOV.BCB.PIX0111161669637000235Ajude a manter o Pablo sob controle520400005303986540540.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605225Ot1D4xUV1QQCKohaxj8d66304F115',
  rivotril: '00020126760014BR.GOV.BCB.PIX0111161669637000239Rivotril para a Karol nao matar o Pablo520400005303986540530.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605227M4zbQ3XUhQcm9I5XOk0Kx63044B74',
  jujuba: '00020126830014BR.GOV.BCB.PIX0111161669637000246Financiamento coletivo para a coluna da Jujuba5204000053039865406200.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605223DLEuSznkoqRDruuVUInRB630419D3',
  amsterda: '00020126530014BR.GOV.BCB.PIX0111161669637000216Goro em Amsterda5204000053039865406100.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605224FIUhlxOW4hJ8gNuPPDpoY6304BF0F',
  supercoffee: '00020126570014BR.GOV.BCB.PIX0111161669637000220SuperCoffee do Pablo520400005303986540520.005802BR5921PABLO PIMENTA QUADROS6009SAO PAULO622605224I9GuU464V3uK5NZuGuobX6304A04E',
};

window.addEventListener('load', () => {
  const text = document.getElementById('text');
  const button = document.getElementById('copy');
  const tooltip = document.getElementById('tooltip');

  const params = new URLSearchParams(window.location.search);
  if (params.has('c') && codes[params.get('c')]) {
    text.innerHTML = codes[params.get('c')];

    text.style.height = text.scrollHeight + 'px';

  } else {
    window.location = '?c=jujuba';
  }

  button.addEventListener('click', () => {
    text.select();
    text.setSelectionRange(0, 99999);

    document.execCommand('copy');

    tooltip.style.display = 'block';

    setTimeout(() => (tooltip.style.display = 'none'), 2000);
  }, false);
}, false);
