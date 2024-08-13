function update() {
  var idoc = document.getElementById("iframe").contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}
function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(
    `<!DOCTYPE html>
<html>

<head> 
<style>
body {

  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

}
  h3 {color: red;}
  p { color: black;}

</style>
</head>

<body>

<h3>Bienvenido a MEPS </h3>
<p>Edit the code in the window to the left, and view the result on the right.</p>





</body>

</html>`,
    1
  ); //1 = moves cursor to end

  editor.getSession().on("change", function () {
    update();
  });

  editor.focus();

  editor.setOptions({
    fontSize: "11pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();

function ready() {}

document.getElementById('export-btn').addEventListener('click', function() {
      var iframeContent = document.getElementById('iframe').contentDocument.documentElement.outerHTML;
      var blob = new Blob([iframeContent], {type: 'text/html'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'exported_html.html';
      a.click();

       // Muestra un mensaje de confirmación con SweetAlert2
    Swal.fire({
      title: 'Éxito!',
      text: 'El archivo HTML se ha guardado en la carpeta de Descargas',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    });

document.getElementById('clear-btn').addEventListener('click', function() {
    var editor = ace.edit("editor"); // Asigna el editor a una variable
    editor.setValue(""); // Establece el valor del editor en una cadena vacía
  });

document.getElementById('load-code-btn').addEventListener('click', function() {
    var editor = ace.edit("editor"); // Asigna el editor a una variable
    var code = `
      <!-- HTML -->
      
<!DOCTYPE html>

<html lang="es" dir="ltr" xml:lang="es" prefix="og: http://ogp.me/ns#">

   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <base href="https://www.jw.org/"><!--[if lte IE 6]></base><![endif]-->
      <title>Vida y Ministerio Cristianos: 12 a 18 de agosto de 2024</title>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="es" href="https://www.jw.org/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="en" href="https://www.jw.org/en/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="अगस्त १२-१८" hreflang="ne" href="https://www.jw.org/ne/%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A5%80/jw-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%85%E0%A4%AD%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B8-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-mwb/%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A4%A8-%E0%A4%B0-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-%E0%A5%A7%E0%A5%A8-%E0%A5%A7%E0%A5%AE-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA/" />
<link rel="alternate" type="text/html" title="12-18 august" hreflang="ro" href="https://www.jw.org/ro/biblioteca/caiet-pentru-intrunire/iulie-august-2024-mwb/Programul-%C3%AEntrunirii-Via%C8%9Ba-cre%C8%99tin%C4%83-%C8%99i-predicarea-12-18-august-2024/" />
<link rel="alternate" type="text/html" title="12—18 серпня" hreflang="uk" href="https://www.jw.org/uk/%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%BF%D0%BE%D1%81%D1%96%D0%B1%D0%BD%D0%B8%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%B7%D1%96%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D1%8F/%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D0%BF%D0%B5%D0%BD%D1%8C-2024-mwb/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D0%B7%D1%96%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D1%8F-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B5-%D0%B6%D0%B8%D1%82%D1%82%D1%8F-%D1%96-%D1%81%D0%BB%D1%83%D0%B6%D1%96%D0%BD%D0%BD%D1%8F-%D0%BD%D0%B0-12-18-%D1%81%D0%B5%D1%80%D0%BF%D0%BD%D1%8F-2024-%D1%80%D0%BE%D0%BA%D1%83/" />
<link rel="alternate" type="text/html" title="12-18 août" hreflang="fr" href="https://www.jw.org/fr/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-juillet-ao%C3%BBt-2024/Programme-pour-la-r%C3%A9union-Vie-et-minist%C3%A8re-du-12-au-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="12-18 augusto" hreflang="rmy" href="https://www.jw.org/rmy/biblioteca/caieto-andai-intrunirea/iulia-augusto-2024-mwb/Programo-anda-o-Caieto-I-via%C8%9Ba-sar-cre%C8%99tini-hai-i-predicarea-12-18-augusto-2024/" />
<link rel="alternate" type="text/html" title="12.–18. srpna" hreflang="cs" href="https://www.jw.org/cs/knihovna/jw-pracovni-sesit/cervenec-srpen-2024-mwb/Program-shrom%C3%A1%C5%BEd%C4%9Bn%C3%AD-N%C3%A1%C5%A1-k%C5%99es%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-v-t%C3%BDdnu-12-18-srpna-2024/" />
<link rel="alternate" type="text/html" title="12-18 augustus" hreflang="nl" href="https://www.jw.org/nl/bibliotheek/werkboek-voor-vergaderingen/juli-augustus-2024-mwb/Schema-leven-en-dienenvergadering-voor-12-18-augustus-2024/" />
<link rel="alternate" type="text/html" title="12. – 18. augusta" hreflang="sk" href="https://www.jw.org/sk/kniznica/pracovny-zosit-na-zhromazdenie/jul-august-2024-mwb/Rozvrh-zhroma%C5%BEdenia-N%C3%A1%C5%A1-kres%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-na-12-18-augusta-2024/" />
<link rel="alternate" type="text/html" title="12-​18 de agosto" hreflang="ngu" href="https://www.jw.org/ngu/amatlajkuiloltin/jw-tlen-tomachtiskej-niman-tlen-notekitiltis/julio-agosto-2024-mwb/Tlen-nopanoltis-ipan-tlanechikojli-Nemilistli-niman-Tekitl-12-%E2%80%8B18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 Aogositra" hreflang="mg" href="https://www.jw.org/mg/zavatra-misy/fivoriana-vj-tari-dalana/jolay-aogositra-2024-mwb/Fivoriana-Momba-ny-Fiainantsika-Kristianina-sy-ny-Fanompoana-Fandaharana-ho-Anny-12-18-Aogositra-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="sn" href="https://www.jw.org/sn/Raibhurari/jw-musangano-purogiramu/july-august-2024-mwb/Purogiramu-yeUshumiri-Hwedu-Uye-Kurarama-kwechiKristu-yaAugust-12-%E2%80%8B18-2024/" />
<link rel="alternate" type="text/html" title="12-18 अगस्त" hreflang="hi" href="https://www.jw.org/hi/%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A5%80/%E0%A4%AF%E0%A4%B9%E0%A5%8B%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-2024-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/12-18-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-2024-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%B8%E0%A5%80%E0%A4%B9%E0%A5%80-%E0%A4%9C%E0%A4%BC%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A4%97%E0%A5%80-%E0%A4%94%E0%A4%B0-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%AE/" />
<link rel="alternate" type="text/html" title="12—18 აგვისტო" hreflang="ka" href="https://www.jw.org/ka/%E1%83%91%E1%83%98%E1%83%91%E1%83%9A%E1%83%98%E1%83%9D%E1%83%97%E1%83%94%E1%83%99%E1%83%90/%E1%83%98%E1%83%94%E1%83%B0%E1%83%9D%E1%83%95%E1%83%90%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%AC%E1%83%9B%E1%83%94%E1%83%94%E1%83%91%E1%83%98-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%94%E1%83%93%E1%83%A0%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90-%E1%83%A1%E1%83%90%E1%83%95%E1%83%90%E1%83%A0%E1%83%AF%E1%83%98%E1%83%A8%E1%83%9D%E1%83%94%E1%83%91%E1%83%98%E1%83%97/%E1%83%98%E1%83%95%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%90%E1%83%92%E1%83%95%E1%83%98%E1%83%A1%E1%83%A2%E1%83%9D-2024-mwb/%E1%83%A5%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%90%E1%83%9C%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%AA%E1%83%AE%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%91%E1%83%90-%E1%83%93%E1%83%90-%E1%83%9B%E1%83%A1%E1%83%90%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%94%E1%83%93%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90-2024-%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1-12-18-%E1%83%90%E1%83%92%E1%83%95%E1%83%98%E1%83%A1%E1%83%A2%E1%83%9D/" />
<link rel="alternate" type="text/html" title="Ngày 12-​18 tháng 8" hreflang="vi" href="https://www.jw.org/vi/thu-vien/chuong-trinh-nhom-hop/loi-song-thanh-chuc-thang7-thang8-2024/Ch%C6%B0%C6%A1ng-tr%C3%ACnh-L%E1%BB%91i-s%E1%BB%91ng-v%C3%A0-th%C3%A1nh-ch%E1%BB%A9c-cho-ng%C3%A0y-12-%E2%80%8B18-th%C3%A1ng-8-n%C4%83m-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ny" href="https://www.jw.org/ny/laibulale/jw-msonkhano-ndandanda/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Utumiki-Komanso-Moyo-Wathu-wa-Chikhristu-ya-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="१२-१८ ऑगस्ट" hreflang="mr" href="https://www.jw.org/mr/%E0%A4%B2%E0%A4%BE%E0%A4%AF%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A4%B0%E0%A5%80/jw-%E0%A4%B8%E0%A4%AD%E0%A5%87%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A5%88-%E0%A4%91%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-mwb/%E0%A5%A7%E0%A5%A8-%E0%A5%A7%E0%A5%AE-%E0%A4%91%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A4%A8-%E0%A4%86%E0%A4%A3%E0%A4%BF-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A4%AD%E0%A5%87%E0%A4%9A%E0%A4%BE-%E0%A4%86%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%A1%E0%A4%BE/" />
<link rel="alternate" type="text/html" title="12-18 Aogositra" hreflang="tdx" href="https://www.jw.org/tdx/ze-raha-misy/fivoriagne-vj-tari-dalagne/jolay-aogositra-2024-mwb/Fanompoagne-Naho-ty-Fiaignantika-Kristiana-Fandaharagne-12-18-Aogositra-2024/" />
<link rel="alternate" type="text/html" title="12.–18. august" hreflang="no" href="https://www.jw.org/no/bibliotek/jehovas-vitner-arbeidshefte/juli-august-2024-mwb/Program-for-tjenestem%C3%B8tet-12-18-august-2024/" />
<link rel="alternate" type="text/html" title="8月yuè12-18日rì" hreflang="cmn-hans" href="https://www.jw.org/cmn-hans/%E5%A4%9A%E5%AA%92%E4%BD%93%E5%9B%BE%E4%B9%A6%E9%A6%86/%E8%80%B6%E5%92%8C%E5%8D%8E%E8%A7%81%E8%AF%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C/%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E4%BC%A0%E9%81%93%E4%B8%8E%E7%94%9F%E6%B4%BB%E8%81%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/" />
<link rel="alternate" type="text/html" title="8月yuè12-18日rì" hreflang="cmn-hant" href="https://www.jw.org/cmn-hant/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/" />
<link rel="alternate" type="text/html" title="Buza 12-18" hreflang="zne" href="https://www.jw.org/zne/agu-ahe-duho/jw-waraga-dunguratise/bamburu-buza-2024-mwb/Gaani-Raka-Nga-ga-aKristano-na-Gaani-Sunge-Ringbisa-Regbo-Dunguratise-Nga-ga-Buza-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="loz" href="https://www.jw.org/loz/sifalana/jw-buka-ya-mukopano/july-august-2024-mwb/Tomahanyo-ya-Mukopano-wa-Bupilo-ni-Bukombwa-ya-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="tw" href="https://www.jw.org/tw/nhomakorabea/jw-adesua-nhoma/july-august-2024-mwb/Abrab%C9%94-Ne-As%C9%9Bnka-Adesua-Nhyehy%C9%9Be-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agostu" hreflang="que" href="https://www.jw.org/que/ruray%C3%A4munq%C3%A4kuna/reunionch%C3%B6-yachakunapaq-jehovapa-testigunkuna/juliu-agostu-2024-mwb/Cristi%C3%A4nun%C3%B6-Kawakunapaq-y-Yachatsikunapaq-2024-wata-12-a-18-de-agostuyaq/" />
<link rel="alternate" type="text/html" title="12.–18. August" hreflang="de" href="https://www.jw.org/de/bibliothek/jw-arbeitsheft/juli-august-2024-mwb/Programm-f%C3%BCr-die-Leben-und-Dienst-Zusammenkunft-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="আগস্ট ১২-১৮" hreflang="bn" href="https://www.jw.org/bn/%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B0%E0%A6%BF/%E0%A6%AF%E0%A6%BF%E0%A6%B9%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%86%E0%A6%97%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%96%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8-%E0%A6%93-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%97%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A7%A7%E0%A7%A8-%E0%A7%A7%E0%A7%AE-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA/" />
<link rel="alternate" type="text/html" title="12—‏18-‏تامىز" hreflang="kk-arab" href="https://www.jw.org/kk-arab/%D9%83%D9%89%D8%AA%D8%A7%D9%BE%D8%AD%D8%A7%D9%86%D8%A7/jw-%D8%AC%DB%87%E2%80%8C%D9%85%D9%89%D8%B3-%D8%AF%D8%A7%D9%BE%D8%AA%DB%95%E2%80%8C%D8%B1%D9%89/%D8%B4%D9%89%D9%84%D8%AF%DB%95-%D8%AA%D8%A7%D9%85%D9%89%D8%B2-2024-bwm/2024-%D8%AC%D9%89%D9%84%D8%AF%D9%89%DA%AD-12-18-%D8%AA%D8%A7%D9%85%D9%89%D8%B2-%D8%A7%D8%B1%D8%A7%D9%84%D9%89%D8%B9%D9%89%D9%86%D8%AF%D8%A7-%D9%88%D8%AA%DB%95%E2%80%8C%D8%AA%D9%89%D9%86-%D9%B6%D9%85%D9%89%D8%B1%D9%89%D9%85%D9%89%D8%B2-%D8%A8%DB%95%E2%80%8C%D9%86-%D9%82%D9%89%D8%B2%D9%85%DB%95%E2%80%8C%D8%AA%D9%89%D9%85%D9%89%D8%B2%D8%AF%D9%89%DA%AD-%D9%83%DB%95%E2%80%8C%D8%B3%D8%AA%DB%95%E2%80%8C%D8%B3%D9%89/" />
<link rel="alternate" type="text/html" title="12-​18 de agosto" hreflang="ncx" href="https://www.jw.org/ncx/amatlajkuilolmej/jw-tlen-tiktekitiltiskej-itech-nechikol/julio-agosto-2024-mwb/Toteki-akinmej-tikchiuaj-ken-Cristo-Nin-timomachtiskej-12-%E2%80%8B18-de-agosto-2024/" />
<link rel="alternate" type="text/html" title="8월 12-18일" hreflang="ko" href="https://www.jw.org/ko/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/%EC%97%AC%ED%98%B8%EC%99%80%EC%9D%98-%EC%A6%9D%EC%9D%B8-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/2024%EB%85%84-7%EC%9B%94-8%EC%9B%94-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/%EC%83%9D%ED%99%9C%EA%B3%BC-%EB%B4%89%EC%82%AC-%EC%A7%91%ED%9A%8C-%EA%B3%84%ED%9A%8D%ED%91%9C-2024%EB%85%84-8%EC%9B%94-12-18%EC%9D%BC/" />
<link rel="alternate" type="text/html" title="ઑગસ્ટ ૧૨-૧૮" hreflang="gu" href="https://www.jw.org/gu/%E0%AA%B2%E0%AA%BE%E0%AA%87%E0%AA%AC%E0%AB%8D%E0%AA%B0%E0%AB%87%E0%AA%B0%E0%AB%80/jw-%E0%AA%B8%E0%AA%AD%E0%AA%BE-%E0%AA%AA%E0%AB%81%E0%AA%B8%E0%AB%8D%E0%AA%A4%E0%AA%BF%E0%AA%95%E0%AA%BE/%E0%AA%9C%E0%AB%81%E0%AA%B2%E0%AA%BE%E0%AA%88-%E0%AA%91%E0%AA%97%E0%AA%B8%E0%AB%8D%E0%AA%9F-%E0%AB%A8%E0%AB%A6%E0%AB%A8%E0%AB%AA-mwb/%E0%AA%91%E0%AA%97%E0%AA%B8%E0%AB%8D%E0%AA%9F-%E0%AB%A7%E0%AB%A8-%E0%AB%A7%E0%AB%AE-%E0%AB%A8%E0%AB%A6%E0%AB%A8%E0%AB%AA%E0%AA%A8%E0%AB%81%E0%AA%82-%E0%AA%9C%E0%AB%80%E0%AA%B5%E0%AA%A8-%E0%AA%85%E0%AA%A8%E0%AB%87-%E0%AA%B8%E0%AB%87%E0%AA%B5%E0%AA%BE%E0%AA%95%E0%AA%BE%E0%AA%B0%E0%AB%8D%E0%AA%AF-%E0%AA%B8%E0%AA%AD%E0%AA%BE-%E0%AA%AE%E0%AA%BE%E0%AA%9F%E0%AB%87%E0%AA%A8%E0%AB%81%E0%AA%82-%E0%AA%B6%E0%AB%87%E0%AA%A1%E0%AB%8D%E0%AA%AF%E0%AB%81%E0%AA%B2/" />
<link rel="alternate" type="text/html" title="12-18 kia Agositu" hreflang="kwy" href="https://www.jw.org/kwy/lundilu/jw-nkanda-malongi/yuli-agositu-2024-mwb/Programa-ya-Lukutakanu-Zingu-ye-Salu-Kieto-12-18-kia-Agositu-2024/" />
<link rel="alternate" type="text/html" title="୧୨-୧୮ ଅଗଷ୍ଟ" hreflang="or" href="https://www.jw.org/or/%E0%AC%B2%E0%AC%BE%E0%AC%87%E0%AC%AC%E0%AD%8D%E0%AC%B0%E0%AD%87%E0%AC%B0%E0%AD%80/jw-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%85%E0%AC%A8%E0%AD%81%E0%AC%B6%E0%AD%80%E0%AC%B3%E0%AC%A8%E0%AD%80-%E0%AC%AA%E0%AD%81%E0%AC%B8%E0%AD%8D%E0%AC%A4%E0%AC%BF%E0%AC%95%E0%AC%BE/%E0%AC%9C%E0%AD%81%E0%AC%B2%E0%AC%BE%E0%AC%87-%E0%AC%85%E0%AC%97%E0%AC%B7%E0%AD%8D%E0%AC%9F-%E0%AD%A8%E0%AD%A6%E0%AD%A8%E0%AD%AA-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%AA%E0%AD%81%E0%AC%B8%E0%AD%8D%E0%AC%A4%E0%AC%BF%E0%AC%95%E0%AC%BE/%E0%AD%A7%E0%AD%A8-%E0%AD%A7%E0%AD%AE-%E0%AC%85%E0%AC%97%E0%AC%B7%E0%AD%8D%E0%AC%9F-%E0%AD%A8%E0%AD%A6%E0%AD%A8%E0%AD%AA-%E0%AC%AA%E0%AC%BE%E0%AC%87%E0%AC%81-%E0%AC%9C%E0%AD%80%E0%AC%AC%E0%AC%A8-%E0%AC%93-%E0%AC%B8%E0%AD%87%E0%AC%AC%E0%AC%BE-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%95%E0%AC%BE%E0%AC%B0%E0%AD%8D%E0%AC%AF%E0%AD%8D%E0%AD%9F%E0%AC%B8%E0%AD%82%E0%AC%9A%E0%AD%80/" />
<link rel="alternate" type="text/html" title="12-18 Yenyenye" hreflang="umb" href="https://www.jw.org/umb/ociseleko-calivulu/o-jw-ovipama-viohongele/evambi-linene-enyenye-2024-mwb/Ekalo-Lietu-Tuakrist%C3%A3o-Kuenda-Oku-Kunda-Ovipama-Viohongele-Osemana-12-18-Yenyenye-2024/" />
<link rel="alternate" type="text/html" title="Matukũ 12-18, Mwei wa 8" hreflang="kam" href="https://www.jw.org/kam/sy%C4%A9nd%C5%A9-ila-sy%C4%A9-vo/jw-kavuku-ka-kwimanyisya/mwei-wa-7-mwei-wa-8-2024-mwb/Walany%CA%BCo-wa-%C5%A8mbano-wa-Mw%C4%A9kal%C4%A9le-wa-Akl%C4%A9sto-na-W%C4%A9a-wa-K%C5%A9tavany%CA%BCa-wa-Matuk%C5%A9-12-18-Mwei-wa-8-2024/" />
<link rel="alternate" type="text/html" title="12-18 Myandagaro" hreflang="run" href="https://www.jw.org/run/ivyasohowe/jw-agatabu-k-ikoraniro/mukakaro-myandagaro-2024-mwb/Urutonde-rwikoraniro-ryUbuzima-bwacu-nigikorwa-cacu-rwo-ku-wa-12-18-Myandagaro-2024/" />
<link rel="alternate" type="text/html" title="12-​18 sierpnia" hreflang="pl" href="https://www.jw.org/pl/biblioteka/program-zebran-swiadkow-jehowy/lipiec-sierpie%C5%84-2024-mwb/Chrze%C5%9Bcija%C5%84skie-%C5%BCycie-i-s%C5%82u%C5%BCba-12-%E2%80%8B18-sierpnia-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="kos" href="https://www.jw.org/kos/mwe-rit/jw-oakwuck-ke-toeni-inge/july-august-2024-mwb/Oakwuck-nuhke-Toeni-ke-Moul-ac-Orekma-in-Luti-keAugust-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agosti 12-18" hreflang="ki" href="https://www.jw.org/ki/library/kabuku-ka-mucemanio-ka-jw/jula%C4%A9-agosti-2024-mwb/M%C5%A9taratara-wa-M%C5%A9cemanio-wa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungata-wa-Agosti-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agucito 12-18" hreflang="ach" href="https://www.jw.org/ach/laibrari/jw-yub-me-cokke/julai-agucito-2024-mwb/Yub-me-Cokke-me-Kwowa-ki-Ticwa-pi-Agucito-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="pt" href="https://www.jw.org/pt/biblioteca/jw-apostila-do-mes/jullho-agosto-2024-mwb/Programa%C3%A7%C3%A3o-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-para-12-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 Tebax" hreflang="kmr-x-rd" href="https://www.jw.org/kmr-x-rd/kitebxane/bernameya-civina-sy/t%C3%AErmeh-tebax-2024-mwb/Jiyan-%C3%BB-Xizmet-Bernameya-Civ%C3%AEn%C3%AA-ji-bo-12-18-Tebax-2024/" />
<link rel="alternate" type="text/html" title="12-18 ɣuct" hreflang="kab" href="https://www.jw.org/kab/tamkar%E1%B8%8Dit/jw-tazmamt-tem%C9%9Bict-d-leqdic/mwb-yulyu-%C9%A3uct-2024/Ahil-n-unejmu%C9%9B-Tam%C9%9Bict-d-leqdic-si-12-ar-18-%C9%A3uct-2024/" />
<link rel="alternate" type="text/html" title="12-18 agosto" hreflang="it" href="https://www.jw.org/it/biblioteca-digitale/guida-attivita-adunanza/mwb-luglio-agosto-2024/Programma-adunanza-Vita-e-ministero-dal-12-al-18-agosto-2024/" />
<link rel="alternate" type="text/html" title="ថ្ងៃ​ទី​១២​-​១៨ ខែ​សីហា" hreflang="km" href="https://www.jw.org/km/%E1%9E%94%E1%9E%8E%E1%9F%92%E1%9E%8E%E1%9E%B6%E1%9E%9B%E1%9F%90%E1%9E%99/jw-%E1%9E%80%E1%9F%86%E1%9E%8E%E1%9E%8F%E1%9F%8B-%E1%9E%9F%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%94%E1%9F%8B-%E1%9E%80%E1%9E%B7%E1%9E%85%E1%9F%92%E1%9E%85%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%87%E1%9E%BB%E1%9F%86/%E1%9E%81%E1%9F%82%E1%9E%80%E1%9E%80%E1%9F%92%E1%9E%80%E1%9E%8A%E1%9E%B6-%E1%9E%81%E1%9F%82%E1%9E%9F%E1%9E%B8%E1%9E%A0%E1%9E%B6-%E1%9F%A2%E1%9F%A0%E1%9F%A2%E1%9F%A4-mwb/%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%98%E2%80%8B%E1%9E%9C%E1%9E%B7%E1%9E%92%E1%9E%B8%E2%80%8B%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%87%E1%9E%BB%E1%9F%86%E2%80%8B%E1%9E%9F%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%94%E1%9F%8B%E2%80%8B%E1%9E%80%E1%9E%B7%E1%9E%85%E1%9F%92%E1%9E%85%E2%80%8B%E1%9E%94%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%BE%E2%80%8B%E1%9E%93%E1%9E%B7%E1%9E%84%E2%80%8B%E1%9E%87%E1%9E%B8%E1%9E%9C%E1%9E%B7%E1%9E%8F-%E1%9E%90%E1%9F%92%E1%9E%84%E1%9F%83%E2%80%8B%E1%9E%91%E1%9E%B8%E2%80%8B%E1%9F%A1%E1%9F%A2%E2%80%8B-%E2%80%8B%E1%9F%A1%E1%9F%A8-%E1%9E%81%E1%9F%82%E2%80%8B%E1%9E%9F%E1%9E%B8%E1%9E%A0%E1%9E%B6-%E1%9E%86%E1%9F%92%E1%9E%93%E1%9E%B6%E1%9F%86%E2%80%8B%E1%9F%A2%E1%9F%A0%E1%9F%A2%E1%9F%A4/" />
<link rel="alternate" type="text/html" title="12-18 Ağustos" hreflang="tr" href="https://www.jw.org/tr/kutuphane/ibadet-kitapcigi/temmuz-agustos-2024-mwb/12-18-A%C4%9Fustos-2024-%C4%B0%C3%A7in-Hayat%C4%B1m%C4%B1z-ve-Hizmetimiz-%C4%B0badeti-Program%C4%B1/" />
<link rel="alternate" type="text/html" title="Ogasiti 12-18" hreflang="yao" href="https://www.jw.org/yao/mabuku/jw-msongano-yakutendekwa/julayi-ogasiti-2024-mwb/Ndandanda-ja-Utumiki-ni-Umi-Wetu-Wachiklistu-ja-Ogasiti-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Aoty" hreflang="xmv" href="https://www.jw.org/xmv/raha-misy-ato/jw-boky-fianarana/mwb-zie-aoty-2024/Pr%C3%B4gramonny-Fivorian%CC%88a-Momba-Fiain%CC%88anantsika-Ndreky-Fanompoan%CC%88a-amy-12-18-Aoty-2024/" />
<link rel="alternate" type="text/html" title="Augusztus 12–18." hreflang="hu" href="https://www.jw.org/hu/konyvtar/jw-munkafuzet/julius-augusztus-2024-mwb/%C3%89let%C3%BCnk-%C3%A9s-szolg%C3%A1latunk-%C3%B6sszej%C3%B6vetel-programterve-2024-augusztus-12-18/" />
<link rel="alternate" type="text/html" title="12 ti 18 di agostu" hreflang="kea" href="https://www.jw.org/kea/biblioteka/folhetu-di-studu-pa-runion/mwb-julhu-agostu-2024/Prugrama-di-runion-Vida-i-pregason-di-12-ti-18-di-agostu-di-2024/" />
<link rel="alternate" type="text/html" title="Utikalo tile 12-18" hreflang="bm" href="https://www.jw.org/bm/bibiliyot%C9%9Bki/jw-laje-seben/san-2024-zuluyekalo-utikalo-mwb/San-2024-Utikalo-tile-12-18-ka-Krec%C9%9Bnya-ni-waajulibaara-laj%C9%9B-porogaramu/" />
<link rel="alternate" type="text/html" title="8月12-18日" hreflang="ja" href="https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/jw-%E9%9B%86%E4%BC%9A%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF/2024%E5%B9%B4-7%E6%9C%88-8%E6%9C%88-mwb/2024%E5%B9%B48%E6%9C%8812-18%E6%97%A5%E3%81%AE%E7%94%9F%E6%B4%BB%E3%81%A8%E5%A5%89%E4%BB%95%E3%81%AE%E9%9B%86%E4%BC%9A%E4%BA%88%E5%AE%9A/" />
<link rel="alternate" type="text/html" title="ಆಗಸ್ಟ್‌ 12-18" hreflang="kn" href="https://www.jw.org/kn/%E0%B2%B2%E0%B3%88%E0%B2%AC%E0%B3%8D%E0%B2%B0%E0%B2%B0%E0%B2%BF/jw-%E0%B2%95%E0%B3%82%E0%B2%9F-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF/%E0%B2%9C%E0%B3%81%E0%B2%B2%E0%B3%88-%E0%B2%86%E0%B2%97%E0%B2%B8%E0%B3%8D%E0%B2%9F%E0%B3%8D%E2%80%8C-2024-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF/%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE-%E0%B2%95%E0%B3%8D%E0%B2%B0%E0%B3%88%E0%B2%B8%E0%B3%8D%E0%B2%A4-%E0%B2%9C%E0%B3%80%E0%B2%B5%E0%B2%A8-%E0%B2%AE%E0%B2%A4%E0%B3%8D%E0%B2%A4%E0%B3%81-%E0%B2%B8%E0%B3%87%E0%B2%B5%E0%B3%86-%E0%B2%95%E0%B3%82%E0%B2%9F%E0%B2%A6-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF-%E0%B2%86%E0%B2%97%E0%B2%B8%E0%B3%8D%E0%B2%9F%E0%B3%8D%E2%80%8C-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 out" hreflang="rcf" href="https://www.jw.org/rcf/bibliot%C3%A8k/jw-kaye-vi-ek-predikasion/mwb-juli%C3%A9-out-2024/Program-r%C3%A9nion-Nout-vi-%C3%A8k-pr%C3%A9dikasion-pou-lo-12-juska-18-out-2024/" />
<link rel="alternate" type="text/html" title="Manaai 12-18" hreflang="xpe" href="https://www.jw.org/xpe/k%C3%BAk%C9%94l%C9%94-%C5%8Bai/jw-koy%C3%A2%C5%8B-su-k%C9%94l%C9%94-kpuai/gb%C9%94%C9%94y%C9%94%C9%94i-manaai-2024-mwb/Dik%C9%9B-%C9%A3eni%C9%9Bi-Da-Di%C9%A3ala-woo-%C9%93o-Tii-Koya%C5%8B-%C5%8A%C9%94t%C3%A3i-Manaai-12-18-2024-m%C9%9Bni-mai/" />
<link rel="alternate" type="text/html" title="12.–18. avgust" hreflang="sl" href="https://www.jw.org/sl/knjiznica/jehovove-price-delovni-zvezek/julij-avgust-2024-mwb/Razpored-za-shod-%C5%BDivljenje-in-oznanjevanje-za-12-18-avgust-2024/" />
<link rel="alternate" type="text/html" title="12-18 out" hreflang="ht" href="https://www.jw.org/ht/bibliyotek/jw-pwogram-reyinyon-ak-kote-pou-n-ekri/jiye-out-2024-mwb/Pwogram-reyinyon-Lavi-nou-ak-travay-nou-f%C3%A8-pou-12-18-out-2024/" />
<link rel="alternate" type="text/html" title="Elap Loikanyetauni 12-18" hreflang="teo" href="https://www.jw.org/teo/elaiburare/jw-eitabo-loka-airiamununeta/elap-loikanyetaarei-elap-loikanyetauni-2024-mwb/Ainapeta-Nuka-Airiamununeta-Nuka-Aijar-ka-Alimonokin-Elap-Loikanyetauni-12-18-2024/" />
<link rel="alternate" type="text/html" title="ከነሐሴ 12-18" hreflang="am" href="https://www.jw.org/am/%E1%88%8B%E1%8B%AD%E1%89%A5%E1%88%A8%E1%88%AA/jw-%E1%8B%A8%E1%88%B5%E1%89%A5%E1%88%B0%E1%89%A3-%E1%8A%A0%E1%88%B5%E1%89%B0%E1%8B%8B%E1%8C%BD%E1%8A%A6/%E1%88%90%E1%88%9D%E1%88%8C-%E1%8A%90%E1%88%90%E1%88%B4-2024-mwb/%E1%8A%A8%E1%8A%90%E1%88%90%E1%88%B4-12-18-2024-%E1%8B%A8%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%93%E1%8B%8A-%E1%88%95%E1%8B%AD%E1%8B%88%E1%89%B5%E1%8A%93-%E1%8A%A0%E1%8C%88%E1%88%8D%E1%8C%8D%E1%88%8E%E1%89%B5-%E1%88%B5%E1%89%A5%E1%88%B0%E1%89%A3-%E1%8D%95%E1%88%AE%E1%8C%8D%E1%88%AB%E1%88%9D/" />
<link rel="alternate" type="text/html" title="Agost 12-18" hreflang="gom" href="https://www.jw.org/gom/library/jw-mitting-pustika/julay-agost-2024-mwb/Jivit-ani-Porgottnni-Mittingechi-Volleri-Agost-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 d’agost" hreflang="cat" href="https://www.jw.org/cat/biblioteca/quadern/juliol-agost-2024-mwb/Programa-per-a-la-reuni%C3%B3-Vida-i-predicaci%C3%B3-12-18-dagost-de-2024/" />
<link rel="alternate" type="text/html" title="Agusto 12-18" hreflang="nyn" href="https://www.jw.org/nyn/Raiburare/jw-oruteerane-akatabo-kOkukoresa/gyuraayi-agusto-2024-mwb/Obuheereza-Bwaitu-Noku-Turikutwaza-Entebeekanisa-yOruteerane-eya-Agusto-12-18-2024/" />
<link rel="alternate" type="text/html" title="Aagos 12-18" hreflang="jam-x-jcr" href="https://www.jw.org/jam-x-jcr/laibri/jw-miitn-stodibuk/julai-aagos-2024-mwb/Ou-Kristiyan-Fi-Liv-An-Priich-Pruogram-Fi-Di-Miitn-Fi-Aagos-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="ay" href="https://www.jw.org/ay/biblioteca/jw-tantach%C3%A4win-yatjjata%C3%B1ataki/julio-agosto-2024-mwb/Cristianjam-Jaka%C3%B1ataki-ukat-Yatiya%C3%B1ataki-12-18-de-agosto-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="toi-zw" href="https://www.jw.org/toi-zw/mabbuku/kabbuku-kamuswaangano-kajanika-ajw/july-august-2024-mwb/Pulogilamu-yaMuswaangano-waBuumi-Amulimu-Wesu-yamuAugust-12-%E2%80%8B18-2024/" />
<link rel="alternate" type="text/html" title="Agasti 12-18" hreflang="zu" href="https://www.jw.org/zu/umtapo/incwajana-yomhlangano-wofakazi/julayi-agasti-2024-mwb/Isimiso-SoMhlangano-Wokuphila-Nenkonzo-Sika-Agasti-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="qug" href="https://www.jw.org/qug/publicacioncuna/jw-tandanacuipi-yachana-p%CB%88anga/julio-agosto-2024-mwb/Caitaca-12-18-de-agosto-de-2024-%E2%80%8Btami-yachashun/" />
<link rel="alternate" type="text/html" title="12-18 agosto" hreflang="quy" href="https://www.jw.org/quy/qellqakuna/jw-yanapawaqninchik-qillqa/julio-agosto-2024-mwb/Diospa-munayninta-ruwananchikpaq-hu%C3%B1unakuypi-yachachikuykuna-2024-agosto-12-18-kaq-semanapaq/" />
<link rel="alternate" type="text/html" title="8月12-18日" hreflang="yue-hans" href="https://www.jw.org/yue-hans/%E5%A4%9A%E5%AA%92%E4%BD%93%E5%9B%BE%E4%B9%A6%E9%A6%86/%E8%80%B6%E5%92%8C%E5%8D%8E%E8%A7%81%E8%AF%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C/%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E4%BC%A0%E9%81%93%E4%B8%8E%E7%94%9F%E6%B4%BB%E8%81%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/" />
<link rel="alternate" type="text/html" title="8月12-18日" hreflang="yue-hant" href="https://www.jw.org/yue-hant/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8C/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/" />
<link rel="alternate" type="text/html" title="12–18 август" hreflang="tg" href="https://www.jw.org/tg/%D0%BA%D0%B8%D1%82%D0%BE%D0%B1%D1%85%D0%BE%D0%BD%D0%B0/%D0%B4%D0%B0%D1%84%D1%82%D0%B0%D1%80%D0%B8-%D0%B2%D0%BE%D1%85%D3%AF%D1%80%D3%A3/%D0%B8%D1%8E%D0%BB-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8-2024-mwb/%D0%91%D0%B0%D1%80%D0%BD%D0%BE%D0%BC%D0%B0%D0%B8-%D0%B2%D0%BE%D1%85%D3%AF%D1%80%D0%B8%D0%B8-%D2%B2%D0%B0%D1%91%D1%82-%D0%B2%D0%B0-%D1%85%D0%B8%D0%B7%D0%BC%D0%B0%D1%82-%D0%B0%D0%B7-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8-2024/" />
<link rel="alternate" type="text/html" title="12-18 August" hreflang="ve" href="https://www.jw.org/ve/l%CC%ADaiburari/tshibugwana-tsha-mu%E1%B9%B1angano-tsha-%E1%B9%B1hanzi-dza-yehova/july-august-2024-mwb/Mbekanyo-Ya-Mu%E1%B9%B1angano-Wa-Vhutshilo-Na-Vhud%CC%ADind%CC%ADa-Hashu-Ya-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="qvi" href="https://www.jw.org/qvi/publicacionguna/jw-tandanajuipi-yachajungapaj-hoja/julio-agosto-2024-mwb/Jesuspa-Chaquita-Catishpa-Causashunchi-Yachachishunchi-Tandanajuipi-yachajungapaj-programa-12-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="8月12-18日" hreflang="nan-x-chw" href="https://www.jw.org/nan-x-chw/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA-%E8%81%9A%E6%9C%83-%E5%AD%B8%E7%BF%92%E6%9C%AC/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="tog" href="https://www.jw.org/tog/layibulare/jw-unganu-kabuku/july-august-2024-mwb/Ndondomeku-ya-Unganu-wa-Umoyu-Widu-Ndipuso-Ute%C5%B5eti-ya-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 ਅਗਸਤ" hreflang="pa" href="https://www.jw.org/pa/%E0%A8%B2%E0%A8%BE%E0%A8%87%E0%A8%AC%E0%A9%8D%E0%A8%B0%E0%A9%87%E0%A8%B0%E0%A9%80/jw-%E0%A8%B8%E0%A8%AD%E0%A8%BE-%E0%A8%AA%E0%A9%81%E0%A8%B8%E0%A8%A4%E0%A8%BF%E0%A8%95%E0%A8%BE/%E0%A8%9C%E0%A9%81%E0%A8%B2%E0%A8%BE%E0%A8%88-%E0%A8%85%E0%A8%97%E0%A8%B8%E0%A8%A4-2024-mwb/12-18-%E0%A8%85%E0%A8%97%E0%A8%B8%E0%A8%A4-2024-%E0%A8%B2%E0%A8%88-%E0%A8%9C%E0%A8%BC%E0%A8%BF%E0%A9%B0%E0%A8%A6%E0%A8%97%E0%A9%80-%E0%A8%85%E0%A8%A4%E0%A9%87-%E0%A8%B8%E0%A9%87%E0%A8%B5%E0%A8%BE-%E0%A8%B8%E0%A8%AD%E0%A8%BE-%E0%A8%B8%E0%A8%BC%E0%A8%A1%E0%A8%BF%E0%A8%89%E0%A8%B2/" />
<link rel="alternate" type="text/html" title="12 a 18 de agosto" hreflang="pt-pt" href="https://www.jw.org/pt-pt/biblioteca/jw-manual-de-atividades/jullho-agosto-2024-mwb/Programa-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-de-12-a-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="gug" href="https://www.jw.org/gug/Vivliot%C3%A9ka/jw-programa-rreunion/julio-agosto-2024-mwb/Mba%CA%BC%C3%A9ichapa-Jaiko-ha-Japredika-va%CA%BCer%C3%A3-Progr%C3%A1ma-12-18-de-agosto-de-2024-pe-g%CC%83uar%C3%A3/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="ceb" href="https://www.jw.org/ceb/librarya/jw-workbook-sa-tigom/hulyo-agosto-2024-mwb/Eskedyul-sa-Tigom-nga-Kinabuhi-ug-Ministeryo-Para-sa-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="අගෝස්තු 12-18" hreflang="si" href="https://www.jw.org/si/%E0%B6%BD%E0%B6%BA%E0%B7%92%E0%B6%B6%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B6%BB%E0%B7%92/jw-%E0%B6%A2%E0%B7%93%E0%B7%80%E0%B7%92%E0%B6%AD%E0%B6%BA-%E0%B7%83%E0%B7%84-%E0%B6%AF%E0%B7%9A%E0%B7%80%E0%B7%83%E0%B7%9A%E0%B7%80%E0%B6%BA-%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B6%B4%E0%B7%9C%E0%B6%AD/%E0%B6%A2%E0%B7%96%E0%B6%BD%E0%B7%92-%E0%B6%85%E0%B6%9C%E0%B7%9D%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B7%94-2024-mwb/%E0%B6%A2%E0%B7%93%E0%B7%80%E0%B7%92%E0%B6%AD%E0%B6%BA-%E0%B7%83%E0%B7%84-%E0%B6%AF%E0%B7%9A%E0%B7%80%E0%B7%83%E0%B7%9A%E0%B7%80%E0%B6%BA-%E0%B7%83%E0%B6%B3%E0%B7%84%E0%B7%8F-%E0%B6%BB%E0%B7%90%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%93%E0%B6%B8%E0%B7%9A-%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B7%83%E0%B6%A7%E0%B7%84%E0%B6%B1-2024-%E0%B6%85%E0%B6%9C%E0%B7%9D%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B7%94-12-18/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="tn" href="https://www.jw.org/tn/laeborari/pokano-ya-botshelo-le-bodiredi/july-august-2024-mwb/Thulaganyo-ya-Botshelo-le-Bodiredi-ya-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 août" hreflang="kbp" href="https://www.jw.org/kbp/t%C9%94m-susuu-wondu/jw-kp%C9%9Bl%C9%A9k%CA%8B%CA%8B-takaya%C9%A3/juillet-ao%C3%BBt-2024-mwb/%C3%90e-wezuu-ca%C9%A3%CA%8B-n%C9%9B-%C9%96%C9%9B-%C6%90s%C9%94-s%C9%9Bt%CA%8B-Kp%C9%9Bl%C9%A9k%CA%8B%CA%8B-%C9%96%CA%8Bt%CA%8B-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="gkn" href="https://www.jw.org/gkn/gbo-kpa/jw-kp%C3%A1-b%C3%B5%CC%80%C3%B2nal%C3%B3-s%C3%ACt%C3%B3m/july-august-2024-mwb/N%C3%B2%C3%B2n%C3%B9-Ea-Nyoone-D%C3%B9m-N%C3%A8-S%C3%ACt%C3%B3m-K%C3%B2%CC%A3-Kp%C3%A8%CC%A3a-N%C3%AD%C3%AD-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Augustus" hreflang="af" href="https://www.jw.org/af/biblioteek/vergaderingwerkboek/julie-augustus-2024-mwb/Rooster-vir-die-Lewe-en-Bediening-vergadering-vir-12-18-Augustus-2024/" />
<link rel="alternate" type="text/html" title="12-18 Ogis" hreflang="bi" href="https://www.jw.org/bi/laebri/jw-buk-blong-miting/julae-ogis-2024-mwb/Program-Blong-Kristin-Wok-Mo-Laef-Blong-12-18-Ogis-2024/" />
<link rel="alternate" type="text/html" title="ఆగస్టు 12-18" hreflang="te" href="https://www.jw.org/te/%E0%B0%B2%E0%B1%88%E0%B0%AC%E0%B1%8D%E0%B0%B0%E0%B0%B0%E0%B1%80/%E0%B0%AE%E0%B0%A8-%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B1%88%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B0%B5-%E0%B0%9C%E0%B1%80%E0%B0%B5%E0%B0%BF%E0%B0%A4%E0%B0%82-%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%9A%E0%B0%B0%E0%B1%8D%E0%B0%AF-%E0%B0%AE%E0%B1%80%E0%B0%9F%E0%B0%BF%E0%B0%82%E0%B0%97%E0%B1%8D%E2%80%8C-%E0%B0%B5%E0%B0%B0%E0%B1%8D%E0%B0%95%E0%B1%8D%E2%80%8C%E0%B0%AC%E0%B1%81%E0%B0%95%E0%B1%8D%E2%80%8C/%E0%B0%9C%E0%B1%82%E0%B0%B2%E0%B1%88-%E0%B0%86%E0%B0%97%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%81-2024-mwb/%E0%B0%86%E0%B0%97%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%81-12-18-2024-%E0%B0%95%E0%B1%8B%E0%B0%B8%E0%B0%82-%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B1%88%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B0%B5-%E0%B0%9C%E0%B1%80%E0%B0%B5%E0%B0%BF%E0%B0%A4%E0%B0%82-%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%9A%E0%B0%B0%E0%B1%8D%E0%B0%AF-%E0%B0%AE%E0%B1%80%E0%B0%9F%E0%B0%BF%E0%B0%82%E0%B0%97%E0%B1%8D%E2%80%8C-%E0%B0%B7%E0%B1%86%E0%B0%A1%E0%B1%8D%E0%B0%AF%E0%B1%82%E0%B0%B2%E0%B1%8D%E2%80%8C/" />
<link rel="alternate" type="text/html" title="Agasti 12-18" hreflang="mer" href="https://www.jw.org/mer/Laiburar%C4%A9/gauku-ka-m%C5%A9cemanio-ka-jwMetaTitleGauku-ka-M%C5%A9cemanio-jwa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungat%C4%A9ri-Bwet%C5%A9-bwa-G%C4%A9krist%C5%A9-MWB-JWORG/julai-agasti-2024-mwb/M%C5%A9taratara-jwa-M%C5%A9cemanio-jwa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungat%C4%A9ri-jwa-Agasti-12-18-2024/" />
<link rel="alternate" type="text/html" title="Yenga mo 12-18 août" hreflang="gba" href="https://www.jw.org/gba/biblioth%C3%A8que/jw-meeting-workbook-gba/juillet-ao%C3%BBt-2024-mwb/Programme-mo-bungbi-Tom-bo-fin-ne-dungonu-bo-mo-yenga-mo-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="bin" href="https://www.jw.org/bin/aza/ebe-iwinna-na-loo-vbe-iko-%E1%BB%8Dghe-avbe-os%E1%BA%B9e-jehova/july-august-2024-mwb/Emwamwa-%E1%BB%8Cghe-Ne-Iko-Uyinmw%E1%BA%B9-Kevbe-Iwinna-%E1%BB%8Cghe-Ima-Ne-Ivbiotu-E-Kristi-%E1%BB%8Cghe-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12. – 18. kolovoza" hreflang="hr" href="https://www.jw.org/hr/biblioteka/jehovini-svjedoci-zivot-i-sluzba/srpanj-kolovoz-2024-mwb/Program-sastanka-Na%C5%A1-%C5%BEivot-i-slu%C5%BEba-12-18-kolovoza-2024/" />
<link rel="alternate" type="text/html" title="12.–18. elokuuta" hreflang="fi" href="https://www.jw.org/fi/kirjasto/el%C3%A4m%C3%A4-ja-palvelus-ty%C3%B6kirja/heina-elokuu-2024-tyokirja/El%C3%A4m%C3%A4-ja-palvelus-kokouksen-ohjelma-12-18-elokuuta-2024/" />
<link rel="alternate" type="text/html" title="12-18 agosto" hreflang="quz" href="https://www.jw.org/quz/Qelqakuna/jw-ju%C3%B1unakuypi-yachanapaq/julio-agosto-2024-mwb/2024-watapi-12-agosto-semanapi-Diospaq-kausasunchis-ju%C3%B1unakuypi-yachanapaq-yachachikuykuna/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="qug-x-qix" href="https://www.jw.org/qug-x-qix/Biblioteca/jw-tandanajuibi-estudiana-hoja/julio-agosto-2024-mwb/Jes%C3%BAs-shina-causashunchi-y-predicashunchi-12-al-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="Aokuso 12-18" hreflang="sm" href="https://www.jw.org/sm/lomiga-ma-isi-mea/jw-sauniga-polokalame/iulai-aokuso-2024-mwb/Faasologa-o-le-Sauniga-o-le-Faiva-ma-le-Olaga-mo-Aokuso-12-18-2024/" />
<link rel="alternate" type="text/html" title="Aokuso 12-18" hreflang="tvl" href="https://www.jw.org/tvl/tusi/tusi-m%C5%8D-fakatasiga-a-mi/iulai-aokuso-2024-mwb/Fakasologa-o-Fakatasiga-i-te-Olaga-Kelisiano-mo-te-Galuega-Talai-i-a-Aokuso-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Agostu" hreflang="tdt" href="https://www.jw.org/tdt/biblioteka/jw-programa-no-nota/jullu-agostu-2024-mwb/Moris-Kristaun-no-Haklaken-programa-12-18-Agostu-2024/" />
<link rel="alternate" type="text/html" title="12-‏18 اگست" hreflang="pnb" href="https://www.jw.org/pnb/%DA%A9%D8%AA%D8%A7%D8%A8%D8%A7%DA%BA-%D8%AA%DB%92-%D9%88%DB%8C%DA%88%DB%8C%D9%88%D8%B2/%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D9%84%D8%A6%DB%8C-%D9%88%D8%B1%DA%A9-%D8%A8%D9%8F%DA%A9/%D8%AC%D9%88%D9%84%D8%A7%D8%A6%DB%8C-%D8%A7%DA%AF%D8%B3%D8%AA-2024-%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D9%84%D8%A6%DB%8C-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D8%B3%D8%A7%DA%88%DB%8C-%D9%85%D8%B3%DB%8C%D8%AD%DB%8C-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%AA%DB%92-%D8%AE%D8%AF%D9%85%D8%AA-%D9%88%D8%A7%D9%84%DB%8C-%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D8%AF%D8%A7-%D8%B4%DB%8C%DA%88%D9%88%D9%84-12-18-%D8%A7%DA%AF%D8%B3%D8%AA/" />
<link rel="alternate" type="text/html" title="12-18 gusht" hreflang="sq" href="https://www.jw.org/sq/biblioteke/jw-fletestudimi-per-mbledhje/korrik-gusht-2024-mwb/Programi-Jeta-dhe-sh%C3%ABrbimi-yn%C3%AB-i-krishter%C3%AB-p%C3%ABr-12-18-gusht-2024/" />
<link rel="alternate" type="text/html" title="Woxawaajje 12-18" hreflang="sid" href="https://www.jw.org/sid/layibirere/jw-xiinxallote-maxaaficho/maaja-woxawaajje-2024-mwb/Kiristaanu-Heeshshonna-Soqqansho-Gambooshshi-Pirogiraame-Woxawaajje-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-​18 re agosto" hreflang="quc" href="https://www.jw.org/quc/ri-e-wuj/jw-wuj-re-chak/julio-agosto-2024-mwb/Qachak-xuquje%CA%BC-Qak%CA%BCaslemal-ri-oj-Cristianos-12-%E2%80%8B18-re-agosto-2024/" />
<link rel="alternate" type="text/html" title="Agosto 12-​18" hreflang="nch" href="https://www.jw.org/nch/amatlajkuiloli/jehova-itlajtoltemakauaj-tlanechikoli-tlen-tijchiuasej/julio-agosto-2024-mwb/Tlen-timomachtisej-ipan-tlanechikoli-Kej-Timonejnemiltiaj-uan-Titlajtolmoyauaj-ipan-agosto-12-%E2%80%8B18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="chk" href="https://www.jw.org/chk/library/jw-mwich-minen-kae/july-august-2024-mwb/Manawach-me-Ach-Angangen-Afalafal-K%C3%B3kk%C3%B3tun-Mwiich-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="gl" href="https://www.jw.org/gl/biblioteca/jw-caderno-estudo/caderno-estudo-xullo-agosto-2024/Vida-e-Actividades-Cristi%C3%A1s-Programa-do-12-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="Okosita 12-18" hreflang="fj" href="https://www.jw.org/fj/ka-e-vakarautaki/jw-ivola-ni-soqoni/julai-okosita-2024-mwb/iTuvatuva-ni-Soqoni-ni-Bula-vaKarisito-kei-na-Cakacaka-Vakaitalatala-ni-Okosita-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 août" hreflang="kg" href="https://www.jw.org/kg/biblioteke/jw-mukanda-ya-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Manaka-ya-Lukutakanu-Luzingu-mpi-Kisalu-ya-12-18-Ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="ആഗസ്റ്റ്‌ 12-18" hreflang="ml" href="https://www.jw.org/ml/%E0%B4%B2%E0%B5%88%E0%B4%AC%E0%B5%8D%E0%B4%B0%E0%B4%B1%E0%B4%BF/jw-%E0%B4%AF%E0%B5%8B%E0%B4%97%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%B3%E0%B5%8D%E0%B4%B3-%E0%B4%AA%E0%B4%A0%E0%B4%A8%E0%B4%B8%E2%80%8B%E0%B4%B9%E0%B4%BE%E2%80%8B%E0%B4%AF%E0%B4%BF/%E0%B4%9C%E0%B5%82%E0%B4%B2%E0%B5%88-%E0%B4%86%E0%B4%97%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%E2%80%8C-2024-mwb/%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%BF%E2%80%8B%E0%B4%A4%E2%80%8B%E0%B4%B5%E0%B5%81%E0%B4%82-%E0%B4%B8%E0%B5%87%E0%B4%B5%E0%B4%A8%E2%80%8B%E0%B4%B5%E0%B5%81%E0%B4%82-%E0%B4%AF%E0%B5%8B%E0%B4%97%E2%80%8B%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%BF%E2%80%8B%E0%B4%A8%E0%B5%81%E0%B4%B3%E0%B5%8D%E0%B4%B3-%E0%B4%AA%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%95-2024-%E0%B4%86%E0%B4%97%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%E2%80%8C-12-18/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="pon" href="https://www.jw.org/pon/sawasepen-Paipel-kan/jw-doaropwehn-kasukuhl-ong-mihting/july-august-2024-mwb/Koasoandien-Mihting-en-Mour-oh-Kalohk-ong-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Ɔya Ɔmahata 12-18" hreflang="idu" href="https://www.jw.org/idu/%C6%86kpa-mla-a%C9%94d%C9%94ha/jw-%C9%94kp%C3%A1-ku-%C5%8Djila/%C9%94ya-%C9%94mahaapa-%C9%94ya-%C9%94mahata-2024-mwb/%C5%8Cmiya-ku-%C5%8Cjila-ku-Oyeeyi-mla-Ukl%C9%94-Ku-Al%C9%94-ku-%C6%86ya-%C6%86mahata-12-18-2024/" />
<link rel="alternate" type="text/html" title="Aokati 12-18" hreflang="gil" href="https://www.jw.org/gil/Bwaai-Aika-Kakaongora/jw-te-boki-n-reirei/turai-aokati-2024-mwb/Maiura-ao-Ara-Mwakuri-ni-Minita-Kaetieti-n-te-Botaki-Ibukin-Aokati-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="igl" href="https://www.jw.org/igl/am%E1%BA%B9%C3%B1wu-ka-n%E1%BA%B9/%E1%BB%8Dtakada-ujeju-e-jw/july-august-2024-mwb/%E1%BB%8Cna-kUjeju-Ali-kpai-Uch%E1%BA%B9ny%E1%BB%8D-Ej%E1%BA%B9-Ana-D%E1%BA%B9-Efaladi-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="nzi" href="https://www.jw.org/nzi/niny%C9%9Bneziel%C9%9Bleka/jw-nyianu-buluku/july-august-2024-mwb/Y%C9%9B-%C6%90b%C9%9Blab%C9%94l%C9%9B-Nee-Y%C9%9B-%C6%90zonlenl%C9%9B-Nyianu-Ngyehy%C9%9Ble%C9%9B-Maa-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Lub 8 Hli Tim 12-18" hreflang="hmn" href="https://www.jw.org/hmn/peb-tej-ntaub-ntawv/jw-sib-txoos-phau-kawm/lub-7-hli-lub-8-hli-2024-mwb/Daim-Kom-Tswj-Rau-Lub-Neej-Thiab-Tes-Hauj-Lwm-Khixatia-Lub-8-Hli-Tim-12-18-2024/" />
<link rel="alternate" type="text/html" title="O̦kwõj 12-18" hreflang="mh" href="https://www.jw.org/mh/laibrare/jw-kweilo%CC%A6k-kein-katak/julae-okwoj-2024-mwb/Jikejuul%CC%A6in-Jerbal-eo-Ad-im-W%C3%A3ween-Ad-Mour-ilo-wiik-eo-j%C3%A3n-O%CC%A6kw%C3%B5j-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="tl" href="https://www.jw.org/tl/library/jw-workbook-para-sa-pulong/hulyo-agosto-2024-mwb/Iskedyul-ng-Pulong-Para-sa-Buhay-at-Ministeryo-Para-sa-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="วัน​ที่ 12-18 สิงหาคม" hreflang="th" href="https://www.jw.org/th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%86/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1/%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%81%E0%B8%8E%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A12024/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E2%80%8B%E0%B8%81%E0%B8%B2%E0%B8%A3%E2%80%8B%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E2%80%8B%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E2%80%8B%E0%B9%81%E0%B8%A5%E0%B8%B0%E2%80%8B%E0%B8%87%E0%B8%B2%E0%B8%99%E2%80%8B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%8A%E0%B9%89-%E0%B8%A7%E0%B8%B1%E0%B8%99%E2%80%8B%E0%B8%97%E0%B8%B5%E0%B9%88-12-18-%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A1-2024/" />
<link rel="alternate" type="text/html" title="12—18 არგუსო" hreflang="xmf" href="https://www.jw.org/xmf/%E1%83%91%E1%83%98%E1%83%91%E1%83%9A%E1%83%98%E1%83%9D%E1%83%97%E1%83%94%E1%83%99%E1%83%90/%E1%83%98%E1%83%94%E1%83%B0%E1%83%9D%E1%83%95%E1%83%90%E1%83%A8-%E1%83%9B%E1%83%9D%E1%83%AC%E1%83%9B%E1%83%94%E1%83%94%E1%83%A4%E1%83%98%E1%83%A8-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%90%E1%83%9A%E1%83%90%E1%83%9B%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90/%E1%83%99%E1%83%95%E1%83%98%E1%83%A0%E1%83%99%E1%83%95%E1%83%94-%E1%83%90%E1%83%A0%E1%83%92%E1%83%A3%E1%83%A1%E1%83%9D-2024-mwb/%E1%83%AA%E1%83%AE%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%91%E1%83%90-%E1%83%93%E1%83%9D-%E1%83%9B%E1%83%A1%E1%83%90%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%90%E1%83%A8-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%90%E1%83%9A%E1%83%90%E1%83%9B%E1%83%90%E1%83%A8-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90-12-18-%E1%83%90%E1%83%A0%E1%83%92%E1%83%A3%E1%83%A1%E1%83%9D-2024/" />
<link rel="alternate" type="text/html" title="12-18 yo Agosto" hreflang="mgh" href="https://www.jw.org/mgh/Ibibliyoteka/jw-mwaalivuru-omikutthaano/julho-agosto-2024-mwb/Iporokaraama-yo-Nkutthaano-Makhalelo-ni-Miteko-Ceekrista-12-18-yo-Agosto-2024/" />
<link rel="alternate" type="text/html" title="12te bet 18te august" hreflang="nds" href="https://www.jw.org/nds/buikerstuuw/jw-dau-leewe-un-inlere-soo-as-jesus-blaarer-taum-dij-lere-helpe/juli-august-2024-mwb/List-fon-Leewe-un-Inl%C3%ABre-fon-12te-bet-18te-august/" />
<link rel="alternate" type="text/html" title="আগষ্ট ১২-১৮" hreflang="as" href="https://www.jw.org/as/%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A7%B0%E0%A7%87%E0%A7%B0%E0%A7%80/jw-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A7%B0-%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%86%E0%A6%97%E0%A6%B7%E0%A7%8D%E0%A6%9F-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA-mwb/%E0%A6%9C%E0%A7%80%E0%A7%B1%E0%A6%A8-%E0%A6%86%E0%A7%B0%E0%A7%81-%E0%A6%AA%E0%A7%B0%E0%A6%BF%E0%A6%9A%E0%A7%B0%E0%A7%8D%E0%A6%AF%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A7%B0-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A7%A8%E0%A7%AF-%E0%A6%86%E0%A6%97%E0%A6%B7%E0%A7%8D%E0%A6%9F-%E0%A7%A7%E0%A7%A8-%E0%A7%A7%E0%A7%AE-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA/" />
<link rel="alternate" type="text/html" title="Օգոստոս 12-18" hreflang="hyw" href="https://www.jw.org/hyw/%D5%A3%D6%80%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6/%D5%AA%D5%B8%D5%B2%D5%B8%D5%BE%D5%AB-%D5%BF%D5%A5%D5%BF%D6%80/%D5%B5%D5%B8%D6%82%D5%AC%D5%AB%D5%BD-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-2024-%D5%AA%D5%BF/%D4%BF%D5%A5%D5%A1%D5%B6%D6%84-%D5%A5%D6%82-%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%AB%D6%82%D5%B6-%D5%AA%D5%B8%D5%B2%D5%B8%D5%BE%D5%AB-%D5%B5%D5%A1%D5%B5%D5%BF%D5%A1%D5%A3%D5%AB%D6%80-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Out" hreflang="crs" href="https://www.jw.org/crs/bibliotek/jw-kaye-renyon/zilyet-out-2024-mwb/Progranm-renyon-pour-Nou-minister-ek-lavi-Kretyen-12-18-Out-2024/" />
<link rel="alternate" type="text/html" title="Abuztuak 12-18" hreflang="eu" href="https://www.jw.org/eu/liburutegia/jw-bilerak-lan-koadernoa/uztaila-%E2%80%8Babuztua-2024-mwb/2024%E2%80%8Bko-abuztuaren-12-18%E2%80%8Bko-Kristauon-zerbitzu-eta-bizimodua-bileraren-programa/" />
<link rel="alternate" type="text/html" title="Del 12 al 18 d’agost" hreflang="ca-x-vlc" href="https://www.jw.org/ca-x-vlc/biblioteca/jw-quadern-activitats/juliol-agost-2024-mwb/Programa-dEl-viure-cristi%C3%A0-i-la-predicaci%C3%B3-del-12-al-18-dagost-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 a Akostu" hreflang="ngl" href="https://www.jw.org/ngl/epiipliyoteka/jw-yoochariha-mithukumano/yulyu-akostu-2024-mwb/Okumi-ni-Muteko-Ahu-Weekristu%E2%80%8B-Yoochariha-ya-Mithukumano-ya-12-18-a-Akostu-a-2024/" />
<link rel="alternate" type="text/html" title="Arhostosi 12-18" hreflang="nr" href="https://www.jw.org/nr/ilayibhrari/ihlelo-lomhlangano-wabofakazi-bakajehova/julayi-arhostosi-2024-mwb/Ipilo-Nomsebenzi-WobuKrestu-Ihlelo-Lomhlangano-Lango-Arhostosi-12-18-2024/" />
<link rel="alternate" type="text/html" title="ஆகஸ்ட் 12-18" hreflang="ta" href="https://www.jw.org/ta/%E0%AE%B2%E0%AF%88%E0%AE%AA%E0%AF%8D%E0%AE%B0%E0%AE%B0%E0%AE%BF/%E0%AE%AF%E0%AF%86%E0%AE%95%E0%AF%8B%E0%AE%B5%E0%AE%BE%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%9A%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D-%E0%AE%95%E0%AF%82%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%AE%E0%AF%8D-%E0%AE%AA%E0%AE%AF%E0%AE%BF%E0%AE%B1%E0%AF%8D%E0%AE%9A%E0%AE%BF-%E0%AE%AA%E0%AF%81%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%95%E0%AE%AE%E0%AF%8D/%E0%AE%9C%E0%AF%82%E0%AE%B2%E0%AF%88-%E0%AE%86%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%9F%E0%AF%8D-2024-mwb/%E0%AE%86%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%9F%E0%AF%8D-12-18-2024-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88%E0%AE%AF%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%8A%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%95%E0%AF%82%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%A9-%E0%AE%85%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%B5%E0%AE%A3%E0%AF%88/" />
<link rel="alternate" type="text/html" title="12-18 ku Auguste" hreflang="hz" href="https://www.jw.org/hz/omambo/jw-okambo-komakond%CC%ADononeno/juli-auguste-2024-mwb/Ongongorasaneno-yombongarero-yEhupo-retu-rOukriste-notjiungura-tjetu-tjokuzuvarisa-12-18-ku-Auguste-2024/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="ilo" href="https://www.jw.org/ilo/libraria/workbook-iti-gimong/hulio-agosto-2024-mwb/Eskediul-ti-Gimong-a-Panagbiag-ken-Ministerio-iti-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Ogos" hreflang="iba" href="https://www.jw.org/iba/librari/bup-kereja-kena-gempuru-jw/julai-ogos-2024-mwb/Jadual-Gempuru-Pengidup-enggau-Pengawa-Kristian-kena-12-18-Ogos-2024/" />
<link rel="alternate" type="text/html" title="Ogasiti 12-18" hreflang="mgr" href="https://www.jw.org/mgr/laibulale/jw-kabuku-ka-pa-kulongana/julai-ogasiti-2024-mwb/Swe-Ina-Klistu-nu-Mulimo-Witu-Utantiko-Kutandika-Ogasiti-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 ya Kakwinyi" hreflang="kmb" href="https://www.jw.org/kmb/kididi-kyamadivulu/jw-milongi-phala-ionge/july-august-2024-mwb/Ukexilu-wa-Ukidist%C3%A1-ni-Ukunji-Wetu-Milongi-ya-12-18-ya-Kakwinyi-2024/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="war" href="https://www.jw.org/war/librarya/jw-workbook-para-ha-katirok/hulyo-agosto-2024-mwb/Eskedyol-han-Pagkinabuhi-Ngan-Ministeryo-nga-Katirok-Para-ha-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="Lumingu lua dia 12-18/8" hreflang="lua" href="https://www.jw.org/lua/tshitekelu-tshia-mikanda/mabeji-a-tshisangilu-ku-jw/mwb-7-8-2024/Programe-wa-tshisangilu-tshia-Nsombelu-ne-mudimu-wetu-bua-lumingu-lua-dia-12-1882024/" />
<link rel="alternate" type="text/html" title="12–18 augusti" hreflang="sv" href="https://www.jw.org/sv/bibliotek/jv-arbetsh%C3%A4fte/juli-augusti-2024-mwb/Livet-och-tj%C3%A4nsten-som-kristen-schema-f%C3%B6r-12-18-augusti-2024/" />
<link rel="alternate" type="text/html" title="12.-18. august" hreflang="da" href="https://www.jw.org/da/bibliotek/jv-arbejdsh%C3%A6fte/juli-august-2024-mwb/Program-for-Tjenestem%C3%B8det-12-18-august-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="vec" href="https://www.jw.org/vec/biblioteca/jw-programassion-riunion/lulio-agosto-2024-mwb/Stimana-de-12-18-de-agosto-de-2024-dela-Programassion-dela-Riunion-Vivemo-e-Insegnemo-come-Ges%C3%B9/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="bcl" href="https://www.jw.org/bcl/librarya/jw-workbook-para-sa-pagtiripon/hulyo-agosto-2024-mwb/Iskedyul-sa-Pagtiripon-na-Pamumuhay-Asin-Ministeryo-Para-sa-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Kanama" hreflang="rw" href="https://www.jw.org/rw/isomero/jw-agatabo-iteraniro/nyakanga-kanama-2024-mwb/Porogaramu-yIteraniro-ryUmurimo-tariki-ya-12-18-Kanama-2024/" />
<link rel="alternate" type="text/html" title="Hagayya 12-18" hreflang="om" href="https://www.jw.org/om/laayibrarii/jw-barreeffama-qo%CA%BCannaa-walga%CA%BCii/adoolessa-hagayya-2024-mwb/Sagantaa-Walga%CA%BCii-Jireenyaa-fi-Tajaajila-Kiristiyaanaa-Hagayya-12-18-2024/" />
<link rel="alternate" type="text/html" title="12—18 avqust" hreflang="az" href="https://www.jw.org/az/kitabxana/jw-ibadet-gorushu-ish-defteri/iyul-avqust-2024-mwb/M%C9%99sihi-h%C9%99yat%C4%B1-v%C9%99-ibad%C9%99ti-g%C3%B6r%C3%BC%C5%9F%C3%BCn%C3%BCn-2024-c%C3%BC-il-12-18-avqust-c%C9%99dv%C9%99li/" />
<link rel="alternate" type="text/html" title="12—18 тамыз" hreflang="kk" href="https://www.jw.org/kk/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/jw-%D0%B6%D2%B1%D0%BC%D1%8B%D1%81-%D0%B4%D3%99%D0%BF%D1%82%D0%B5%D1%80%D1%96/%D1%88%D1%96%D0%BB%D0%B4%D0%B5-%D1%82%D0%B0%D0%BC%D1%8B%D0%B7-2024-mwb/2024-%D0%B6%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-12-18-%D1%82%D0%B0%D0%BC%D1%8B%D0%B7-%D0%B0%D1%80%D0%B0%D0%BB%D1%8B%D2%93%D1%8B%D0%BD%D0%B4%D0%B0-%D3%A9%D1%82%D0%B5%D1%82%D1%96%D0%BD-%D3%A8%D0%BC%D1%96%D1%80%D1%96%D0%BC%D1%96%D0%B7-%D0%B1%D0%B5%D0%BD-%D2%9B%D1%8B%D0%B7%D0%BC%D0%B5%D1%82%D1%96%D0%BC%D1%96%D0%B7%D0%B4%D1%96%D2%A3-%D0%BA%D0%B5%D1%81%D1%82%D0%B5%D1%81%D1%96/" />
<link rel="alternate" type="text/html" title="Akoosütoʼu 12-18" hreflang="guc" href="https://www.jw.org/guc/karaloutairua/jw-wekirajaayainjatu-sunain-tu-outkajawaakat/juuliou-akoosutou-2024-mwb/Wakuwa%CA%BCipa-otta-Wa%CA%BCyataain-n%C3%BCm%C3%BCin-Maleiwa-akoos%C3%BCto%CA%BCu-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 август" hreflang="mk" href="https://www.jw.org/mk/biblioteka/zhivot-i-sluzhba-rabotni-listovi/%D1%98%D1%83%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9D%D0%B0%D1%88%D0%B8%D0%BE%D1%82-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D0%B5%D0%B4-%D0%B7%D0%B0-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%BA%D0%BE%D1%82-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/" />
<link rel="alternate" type="text/html" title="Agost 12-18" hreflang="luo" href="https://www.jw.org/luo/laibrari/jw-chenro-mar-chokruok/julai-agost-2024-mwb/Ngimawa-kod-Tijwa-Kaka-Jokristo-Chenro-mar-Agost-12-18-2024/" />
<link rel="alternate" type="text/html" title="Օգոստոսի 12-18" hreflang="hy" href="https://www.jw.org/hy/%D5%A3%D6%80%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6/jw-%D5%B0%D5%A1%D5%B6%D5%A4%D5%AB%D5%BA%D5%B4%D5%A1%D5%B6-%D5%B1%D5%A5%D5%BC%D5%B6%D5%A1%D6%80%D5%AF/%D5%B0%D5%B8%D6%82%D5%AC%D5%AB%D5%BD-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-2024-%D5%B0%D5%B1/%D5%84%D5%A5%D6%80-%D6%84%D6%80%D5%AB%D5%BD%D5%BF%D5%B8%D5%B6%D5%A5%D5%A1%D5%AF%D5%A1%D5%B6-%D5%AF%D5%B5%D5%A1%D5%B6%D6%84%D5%A8-%D6%87-%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8-%D5%B0%D5%A1%D5%B6%D5%A4%D5%AB%D5%BA%D5%B4%D5%A1%D5%B6-%D5%B1%D5%A5%D5%BC%D5%B6%D5%A1%D6%80%D5%AF-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD%D5%AB-12-18-2024/" />
<link rel="alternate" type="text/html" title="12–18. avgusta" hreflang="sr-latn" href="https://www.jw.org/sr-latn/biblioteka/jehovini-svedoci-radna-sveska/jul-avgust-2024-mwb/Hri%C5%A1%C4%87anski-%C5%BEivot-i-slu%C5%BEba-propovedanja-program-12-18-avgusta-2024/" />
<link rel="alternate" type="text/html" title="12–18. avgust" hreflang="rmn-x-rme" href="https://www.jw.org/rmn-x-rme/biblioteka/jw-radna-sveske/jul-avgust-2024-mwb/Amaro-hri%C5%A1%C4%87ansko-%C4%91ivdipe-hem-slu%C5%BEba-o-program-aso-sastanko-kotar-12-18-avgust-2024/" />
<link rel="alternate" type="text/html" title="12–18. августа" hreflang="sr-cyrl" href="https://www.jw.org/sr-cyrl/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%98%D0%B5%D1%85%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B2%D0%B5%D0%B4%D0%BE%D1%86%D0%B8-%D1%80%D0%B0%D0%B4%D0%BD%D0%B0-%D1%81%D0%B2%D0%B5%D1%81%D0%BA%D0%B0/%D1%98%D1%83%D0%BB-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A5%D1%80%D0%B8%D1%88%D1%9B%D0%B0%D0%BD%D1%81%D0%BA%D0%B8-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%B0%D1%9A%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0-2024/" />
<link rel="alternate" type="text/html" title="12-18 ነሓሰ" hreflang="ti" href="https://www.jw.org/ti/%E1%89%A4%E1%89%B0-%E1%88%98%E1%8C%BB%E1%88%95%E1%8D%8D%E1%89%B2/jw-%E1%8B%B0%E1%89%A5%E1%89%B0%E1%88%AD-%E1%8A%A3%E1%8A%BC%E1%89%A3/%E1%88%93%E1%88%9D%E1%88%88-%E1%8A%90%E1%88%93%E1%88%B0-2024-mwb/%E1%8A%9512-18-%E1%8A%90%E1%88%93%E1%88%B0-2024-%E1%8B%9A%E1%8A%B8%E1%8B%8D%E1%8A%95-%E1%88%98%E1%8B%B0%E1%89%A5-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B5%E1%8B%AB%E1%8A%93%E1%8B%8A-%E1%88%85%E1%8B%AD%E1%8B%88%E1%89%B5%E1%8A%95-%E1%8A%A3%E1%8C%88%E1%88%8D%E1%8C%8D%E1%88%8E%E1%89%B5%E1%8A%95/" />
<link rel="alternate" type="text/html" title="La 12-18 August" hreflang="st" href="https://www.jw.org/st/laebrari/kemiso-ea-liboka-ea-jw/july-august-2024-mwb/Lenanetsamaiso-la-Seboka-sa-Bophelo-le-T%C5%A1ebeletso-la-la-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="Ogasiti 12-18" hreflang="tum" href="https://www.jw.org/tum/layibulare/jw-kabuku-ka-maungano/julayi-ogasiti-2024-mwb/Ndondomeko-ya-Ungano-wa-Ute%C5%B5eti-na-Umoyo-Wachikhristu-ya-Ogasiti-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Out" hreflang="mfe" href="https://www.jw.org/mfe/bibliotek/kaye-renion-jw/mwb-ziliet-out-2024/Program-Renion-Lavi-Kretien-ek-Predikasion-pou-12-18-Out-2024/" />
<link rel="alternate" type="text/html" title="12-18 Αυγούστου" hreflang="rmn-x-rmg" href="https://www.jw.org/rmn-x-rmg/%CE%B2%CE%B9%CE%B2%CE%BB%CE%B9%CE%BF%CE%B8%CE%AE%CE%BA%CE%B7/%CF%80%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1%CF%82-%CE%B9-%CF%83%CF%85%CE%BD%CE%B1%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B9%CE%AC%CE%BA%CE%B5-jw/%CE%B9%CE%BF%CF%8D%CE%BB%CE%B9%CE%BF%CF%82-%CE%B1%CF%8D%CE%B3%CE%BF%CF%85%CF%83%CF%84%CE%BF%CF%82-2024-mwb/%CE%A0%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1%CF%82-%CE%B9-%CE%A3%CF%85%CE%BD%CE%B1%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B9%CE%AC%CE%BA%CE%B5-%CE%96%CF%89%CE%AE-%CE%BD%CF%84%CE%B1-%CE%88%CF%81%CE%B3%CE%BF%CF%82-%CE%BA%CE%B9-%CE%95%CE%B2%CE%B4%CE%BF%CE%BC%CE%AC%CE%B4%CE%B1-12-18-%CE%91%CF%85%CE%B3%CE%BF%CF%8D%CF%83%CF%84%CE%BF%CF%85-2024/" />
<link rel="alternate" type="text/html" title="12-18 Αυγούστου" hreflang="el" href="https://www.jw.org/el/%CE%B2%CE%B9%CE%B2%CE%BB%CE%B9%CE%BF%CE%B8%CE%AE%CE%BA%CE%B7/%CF%86%CF%85%CE%BB%CE%BB%CE%AC%CE%B4%CE%B9%CE%BF-%CE%B5%CF%81%CE%B3%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CE%B3%CE%B9%CE%B1-%CF%84%CE%B7-%CF%83%CF%85%CE%BD%CE%AC%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B7-jw/%CE%B9%CE%BF%CF%8D%CE%BB%CE%B9%CE%BF%CF%82-%CE%B1%CF%8D%CE%B3%CE%BF%CF%85%CF%83%CF%84%CE%BF%CF%82-2024-mwb/%CE%A0%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1-%CE%A3%CF%85%CE%BD%CE%AC%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B7%CF%82-%CE%96%CF%89%CE%AE-%CE%BA%CE%B1%CE%B9-%CE%94%CE%B9%CE%B1%CE%BA%CE%BF%CE%BD%CE%AF%CE%B1-%CF%84%CE%B7%CE%BD-%CE%95%CE%B2%CE%B4%CE%BF%CE%BC%CE%AC%CE%B4%CE%B1-12-18-%CE%91%CF%85%CE%B3%CE%BF%CF%8D%CF%83%CF%84%CE%BF%CF%85-2024/" />
<link rel="alternate" type="text/html" title="12-18 avgust" hreflang="rmn-x-rm" href="https://www.jw.org/rmn-x-rm/biblioteka/zhivoto-hem-sluzhba-listija-spremibaske/juli-avgust-2024-mwb/Raspored-ba%C5%A1o-Amaro-%C5%BEivoto-hem-slu%C5%BEba-ba%C5%A1o-12-18-avgust-2024/" />
<link rel="alternate" type="text/html" title="12-18 no Atete" hreflang="ty" href="https://www.jw.org/ty/piahia/faaineineraa-putuputuraa-ite-no-iehova/tiurai-atete-2024-mwb/Porotarama-Oraraa-e-taviniraa-Kerisetiano-o-te-12-18-no-Atete-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="pau" href="https://www.jw.org/pau/aike-el-ngar-er-ngii/jw-subeled-miting/july-august-2024-mwb/Schedule-er-Sel-Miting-el-Kirel-a-Klengar-er-Kid-a-Rekristiano-me-a-Omesiunged-er-a-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="yap" href="https://www.jw.org/yap/gin-bay-boch-banen-riy/jw-babyor-ni-fan-ko-muulung/july-august-2024-mwb/Schedule-ko-Fare-Muulung-ni-Tin-Gad-Ma-Rin-nge-Machib-Rodad-ko-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="kac" href="https://www.jw.org/kac/laika-dum/jw-zuphpawng-shaman-laika-buk/july-august-2024-mwb/2024-August-12-18-a-matu-Prat-Hte-Magam-Zuphpawng-Chyarang/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="nd" href="https://www.jw.org/nd/izinto-ezikhona/jw-ugwalo-lwemihlangano/july-august-2024-mwb/Impilo-Lenkonzo-YamaKhristu-Uhlelo-Luka-August-12-%E2%80%8B18-2024/" />
<link rel="alternate" type="text/html" title="12.–18. august" hreflang="et" href="https://www.jw.org/et/raamatukogu/jehoova-tunnistajate-koosoleku-t%C3%B6%C3%B6vihik/juuli-august-2024-mwb/Kristliku-elu-ja-teenistuse-koosoleku-kava-12-18-august-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="toi" href="https://www.jw.org/toi/laibbulali/jw-kabbuku-kamuswaangano/july-august-2024-mwb/Mulongo-wa-Muswaangano-Wabuumi-Amulimo-Wamu-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Ogos" hreflang="ms" href="https://www.jw.org/ms/perpustakaan/lembaran-kerja-saksi-saksi-yehuwa/julai-ogos-2024-mwb/Jadual-Perjumpaan-Kehidupan-dan-Kegiatan-Kristian-Kita-bagi-12-18-Ogos-2024/" />
<link rel="alternate" type="text/html" title="١٢-‏١٨ آب (‏أغسطس)‏" hreflang="ar" href="https://www.jw.org/ar/%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%B4%D9%87%D9%88%D8%AF-%D9%8A%D9%87%D9%88%D9%87/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%AA%D9%85%D9%88%D8%B2-%D8%A2%D8%A8-%D9%A2%D9%A0%D9%A2%D9%A4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%AD%D9%8A%D8%A9-%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D9%A1%D9%A2-%D9%A1%D9%A8-%D8%A2%D8%A8-%D8%A3%D8%BA%D8%B3%D8%B7%D8%B3-%D9%A2%D9%A0%D9%A2%D9%A4/" />
<link rel="alternate" type="text/html" title="Dingindi 12-18" hreflang="dua" href="https://www.jw.org/dua/kobata-kalati/jw-kalata-ndongamen/madibe%CC%B1dibe%CC%B1-dingindi-2024-mwb/Mudango-ma-ndongame%CC%B1n-a-longe%CC%B1-la-kriste%CC%B1n-nebola-dikalo-o%C5%84ola-Dingindi-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="pag" href="https://www.jw.org/pag/librarya/jw-workbook-ed-aral/hulyo-agosto-2024-mwb/Eskedyul-na-Aral-Parad-Ministeryo-tan-Bilay-na-Kristiano-Diad-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="Ogas 12-18" hreflang="tpi" href="https://www.jw.org/tpi/laibreri/jw-miting-wok-buk/julai-ogas-2024-mwb/Sediul-Bilong-Laip-na-Wok-Autim-Tok-Miting-Bilong-Ogas-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Agustus" hreflang="id" href="https://www.jw.org/id/perpustakaan/jw-lembar-pelajaran/mwb-juli-agustus-2024/Jadwal-Perhimpunan-Pelayanan-dan-Kehidupan-Kristen-untuk-12-18-Agustus-2024/" />
<link rel="alternate" type="text/html" title="12-18 ʼAukusito" hreflang="wls" href="https://www.jw.org/wls/te-%CA%BCu-tohi-ne%CA%BCe-filifili/jw-fono-kaupepa-ako/sulio-aukusito-2024-mwb/Polokalama-Fono-%CA%BCo-Te-Ma%CA%BCuli-Fakakilisitiano-Mo-Te-Faifakamafola-%CA%BCo-Te-%CA%BCAho-12-18-%CA%BCo-%CA%BCAukusito-2024/" />
<link rel="alternate" type="text/html" title="Август 12—18" hreflang="tyv" href="https://www.jw.org/tyv/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B%D2%A3-%D1%85%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B8%D2%A3-%D1%83%D0%B6%D1%83%D1%80%D0%B0%D0%B6%D1%8B%D0%BB%D0%B3%D0%B0%D0%B7%D1%8B-%D0%B0%D0%B6%D1%8B%D0%BB%D1%87%D1%8B%D0%BD-%D0%BA%D1%8B%D0%B4%D1%8B%D1%80%D0%B0%D0%B0%D1%88/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D1%87%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-12-%D0%B4%D0%B5%D0%BD-18-%D0%BA%D0%B5-%D1%87%D0%B5%D0%B4%D0%B8%D1%80-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%87%D1%83%D1%80%D1%82%D1%82%D0%B0%D0%BB%D0%B3%D0%B0%D0%B2%D1%8B%D1%81-%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%88-%D0%B1%D0%B0%D1%80%D0%B0%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%8B%D0%B2%D1%8B%D1%81-%D0%B4%D0%B5%D0%BF-%D1%83%D0%B6%D1%83%D1%80%D0%B0%D0%B6%D1%8B%D0%BB%D0%B3%D0%B0%D0%BD%D1%8B%D2%A3-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7%D0%B8/" />
<link rel="alternate" type="text/html" title="12—18 август" hreflang="tt" href="https://www.jw.org/tt/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D3%99/%D0%B9%D3%99%D2%BB%D0%B2%D3%99-%D1%88%D0%B0%D2%BB%D0%B8%D1%82%D0%BB%D3%99%D1%80%D0%B5-%D1%8D%D1%88-%D0%B4%D3%99%D1%84%D1%82%D3%99%D1%80%D0%B5/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%E2%81%A0mwb/%D0%A2%D0%BE%D1%80%D0%BC%D1%8B%D1%88%D1%8B%D0%B1%D1%8B%D0%B7-%D2%BB%D3%99%D0%BC-%D1%85%D0%B5%D0%B7%D0%BC%D3%99%D1%82%D0%B5%D0%B1%D0%B5%D0%B7-%D0%BE%D1%87%D1%80%D0%B0%D1%88%D1%83%D1%8B%D0%BD%D1%8B%D2%A3-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B3%D1%8B-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/" />
<link rel="alternate" type="text/html" title="۱۲-‏۱۸ اوت" hreflang="fa" href="https://www.jw.org/fa/%DA%A9%D8%AA%D8%A7%D8%A8%D8%AE%D8%A7%D9%86%D9%87/%D8%AC%D8%B2%D9%88%D9%87-%D8%B4%D8%A7%D9%87%D8%AF%D8%A7%D9%86-%DB%8C%D9%87%D9%88%D9%87/%D8%AC%D8%B2%D9%88%D9%87-%DA%A9%D8%A7%D8%B1-%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%98%D9%88%D8%A6%DB%8C%D9%87-%D8%A7%D9%88%D8%AA-%DB%B2%DB%B0%DB%B2%DB%B4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%D9%94-%DB%B1%DB%B2-%DB%B1%DB%B8-%D8%A7%D9%88%D8%AA-%DB%B2%DB%B0%DB%B2%DB%B4-%D8%AC%D8%B2%D9%88%D9%87%D9%94-%DA%A9%D8%A7%D8%B1-%D9%88-%D8%A2%D9%85%D9%88%D8%B2%D8%B4/" />
<link rel="alternate" type="text/html" title="Naase 12-18" hreflang="wal" href="https://www.jw.org/wal/laybreriyaa/jw-xanna%CB%88iyo-xuufiyaa/isiine-naase-2024-mwb/De%CB%88uwanne-Haggaazuwa-Shiiquwa-Prograamiya-Naase-12-18-2024/" />
<link rel="alternate" type="text/html" title="Augustub 12-18" hreflang="naq-x-dmr" href="https://www.jw.org/naq-x-dmr/%C7%82khanin%C7%81g%C3%A2ub/jw-%C7%80haodi-s%C3%AEsen-%C7%82khanib/julib-augustub-2024-mwb/%C3%9Bib-ts%C3%AE-ao%C7%81n%C3%A2-s%C3%AEsenni-%C7%80ape%C7%81guib-Augustub-12-18-2024/" />
<link rel="alternate" type="text/html" title="Bi 8 ddo 12-ddo 18" hreflang="led" href="https://www.jw.org/led/bbuku-kpari/jw-meeting-workbook-led/bi-7-bi-8-2024-mwb/Maisha-ndirigoti-lodradha-dhi-nj%C3%AD-dhi-njudha-dhi-programu-Bi-8-ddo-12-ddo-18-2024/" />
<link rel="alternate" type="text/html" title="12.–18. ágúst" hreflang="is" href="https://www.jw.org/is/b%C3%B3kasafn/jw-vinnub%C3%B3k-fyrir-samkomur/juli-agust-2024-mwb/Samkomudagskr%C3%A1-%C3%AD-L%C3%ADf-okkar-og-bo%C3%B0un-fyrir-12-18-%C3%A1g%C3%BAst-2024/" />
<link rel="alternate" type="text/html" title="12.-18. August" hreflang="pdt" href="https://www.jw.org/pdt/bieekja-un-mea/jw-schoolheft/juli-august-2024-mwb/Plon-fa-daut-Toopkomen-fa-L%C3%A4wen-un-Deenst-vom-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="Aggustip 12-18" hreflang="kl" href="https://www.jw.org/kl/biibililersaarutit/najoqqutassaq/juuli-aggusti-2024-mwb/Ulluinnarni-ataatsimiinnermi-najoqqutassaq-aggustip-12-18-2024/" />
<link rel="alternate" type="text/html" title="12.-18. august" hreflang="fo" href="https://www.jw.org/fo/b%C3%B3kasavn/jw-arbei%C3%B0shefti/juli-august-2024-mwb/Okkara-kristna-l%C3%ADv-og-t%C3%A6nasta-skr%C3%A1in-12-18-august-2024/" />
<link rel="alternate" type="text/html" title="12-18 agosto" hreflang="arn" href="https://www.jw.org/arn/chem-tain-entuel/jw-papel-pepicahuam/julio-agosto-2024-mwb/%C3%91i-ng%C3%BCneduamngeal-trahun-mu-Tai%C3%B1-Mongen-ca-Tai%C3%B1-Amuldunguqueel-12-18-agosto-2024/" />
<link rel="alternate" type="text/html" title="12. – 18. augustos" hreflang="rmc-sk" href="https://www.jw.org/rmc-sk/kniznica/jehovaskere-svedki-zhromazdene-publikacija/julos-augustos-2024-mwb/Bro%C5%BEurka-pro-zhroma%C5%BE%C4%8Fe%C5%88e-12-18-augustos-2024/" />
<link rel="alternate" type="text/html" title="ʻAokosi 12-18" hreflang="to" href="https://www.jw.org/to/laipeli/jw-polokalama-ng%C4%81ue-ki-he-fakatah%C3%A1/siulai-aokosi-2024-mwb/Taimi-T%C4%93pile-ki-he-Fakataha-Mo%CA%BBu%C3%AD-mo-e-Ng%C4%81ue-Fakafaifeka%C3%BA-ki-%CA%BBAokosi-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 août" hreflang="ldi" href="https://www.jw.org/ldi/biblioteke/jw-mukanda-wa-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Programe-ya-lukutakanu-lwa-Luzingu-na-tisalu-ya-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="gaa" href="https://www.jw.org/gaa/woji-k%C9%9B-nibii/odasefoi-kpee-nifeem%C9%94-wolo/july-august-2024-mwb/W%C9%94shi%C9%9Bm%C9%94-K%C9%9B-W%C9%94shihil%C9%9B-Kpee-He-Gb%C9%9Bjian%C9%94too-K%C9%9Bh%C3%A3-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 août" hreflang="fon" href="https://www.jw.org/fon/nus%C9%9Bxwet%C9%9Bn/jw-kple-sin-az%C9%94wema/juillet-aout-2024-mwb/Kpl%C3%A9-gb%C9%9Bz%C3%A1n-kp%C3%B3-sins%C9%9Bnz%C9%94%CC%81-kp%C3%B3-t%C9%94n-s%C3%ADn-tuto-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="12-18 Août" hreflang="ajg" href="https://www.jw.org/ajg/Wema-Ciwo-y%C3%AD-Li/jw-b%C9%94b%C9%94-nukplawema/juillet-ao%C3%BBt-2024-mwb/Agben%C9%94n%C9%94-ko%C9%96o-Sum%C9%94sum%C9%94d%C9%94-B%C9%94b%C9%94-Toto-12-18-Ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="12-18 Août" hreflang="guw" href="https://www.jw.org/guw/Wes%E1%BA%B9dot%E1%BA%B9n/jw-opli-nupl%E1%BB%8Dnwe/juillet-ao%C3%BBt-2024-mwb/Tito-to-Whinnu-Gb%E1%BA%B9zan-po-Liz%E1%BB%8Dnyiz%E1%BB%8Dn-M%C3%ADt%E1%BB%8Dn-po-T%E1%BB%8Dn-Na-12-18-Ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="12–18 באוגוסט" hreflang="he" href="https://www.jw.org/he/%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94/%D7%92%D7%99%D7%9C%D7%99%D7%95%D7%9F-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%94-%D7%A9%D7%9C-%D7%A2%D7%93%D7%99-%D7%99%D7%94%D7%95%D7%94/%D7%99%D7%95%D7%9C%D7%99-%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024-%D7%92%D7%A4%D7%90/%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%AA-%D7%90%D7%95%D7%A8%D7%97-%D7%97%D7%99%D7%99%D7%A0%D7%95-%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%A0%D7%95-%D7%94%D7%9E%D7%A9%D7%99%D7%97%D7%99%D7%99%D7%9D-12-18-%D7%91%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024/" />
<link rel="alternate" type="text/html" title="12-18 Agustus" hreflang="bbc" href="https://www.jw.org/bbc/perpustakaan/jw-na-laho-diparsiajari/juli-agustus-2024-mwb/Jadwal-Parpunguan-Hangoluan-dohot-Pangkobasion-12-18-Agustus-2024/" />
<link rel="alternate" type="text/html" title="12-​18 ki agosto" hreflang="zav" href="https://www.jw.org/zav/publicaciones/guia-actividades-reunion/julio-agosto-2024-mwb/Ka%CA%BC-rzordarha-lhen-ka%CA%BC-rtzalajrha-ki-Dios-12-18-ki-agosto-yiza-2024/" />
<link rel="alternate" type="text/html" title="12-​18 de agosto" hreflang="zai" href="https://www.jw.org/zai/libru-ne-revista/jw-ni-chigaca-lu-reunion/julio-agosto-2024-mwb/Xhii%C3%B1a%CA%BC-Dios-ne-modo-nab%C3%A1ninu-12-hasta-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="8-р сарын 12–18" hreflang="mn" href="https://www.jw.org/mn/%D0%BD%D0%BE%D0%BC%D1%8B%D0%BD-%D1%81%D0%B0%D0%BD/%D0%B5%D1%85%D0%BE%D0%B2%D0%B0%D0%B3%D0%B8%D0%B9%D0%BD-%D0%B3%D1%8D%D1%80%D1%87%D2%AF%D2%AF%D0%B4%D0%B8%D0%B9%D0%BD-%D1%86%D1%83%D0%B3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B0%D0%B0%D1%80-%D2%AF%D0%B7%D1%8D%D1%85-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB/2024-7-8-%D1%86%D2%AF%D0%BC/%D0%90%D0%BC%D1%8C%D0%B4%D1%80%D0%B0%D0%BB-%D2%AF%D0%B9%D0%BB-%D1%85%D1%8D%D1%80%D1%8D%D0%B3-%D1%86%D1%83%D0%B3%D0%BB%D0%B0%D0%B0%D0%BD%D1%8B-2024-%D0%BE%D0%BD%D1%8B-8-%D1%80-%D1%81%D0%B0%D1%80%D1%8B%D0%BD-12-18-%D0%BD%D1%8B-%D1%85%D1%83%D0%B2%D0%B0%D0%B0%D1%80%D1%8C/" />
<link rel="alternate" type="text/html" title="ဩဂုတ် ၁၂-၁၈" hreflang="my" href="https://www.jw.org/my/%E1%80%85%E1%80%AC%E1%80%80%E1%80%BC%E1%80%8A%E1%80%B7%E1%80%BA%E1%80%90%E1%80%AD%E1%80%AF%E1%80%80%E1%80%BA/jw-%E1%80%9C%E1%80%B1%E1%80%B7%E1%80%80%E1%80%BB%E1%80%84%E1%80%B7%E1%80%BA%E1%80%81%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%85%E1%80%AC%E1%80%85%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA/%E1%80%87%E1%80%B0%E1%80%9C%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%82%E1%81%80%E1%81%82%E1%81%84-mwb/%E1%81%82%E1%81%80%E1%81%82%E1%81%84-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%81%E1%81%82-%E1%81%81%E1%81%88-%E1%80%A1%E1%80%90%E1%80%BD%E1%80%80%E1%80%BA-%E1%80%A1%E1%80%9E%E1%80%80%E1%80%BA%E1%80%90%E1%80%AC%E1%80%94%E1%80%B2%E1%80%B7-%E1%80%A1%E1%80%99%E1%80%BE%E1%80%AF%E1%80%86%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA%E1%80%9C%E1%80%AF%E1%80%95%E1%80%BA%E1%80%84%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%8A%E1%80%BA%E1%80%B8%E1%80%A1%E1%80%9D%E1%80%B1%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%AE%E1%80%A1%E1%80%85%E1%80%89%E1%80%BA%E1%80%87%E1%80%9A%E1%80%AC%E1%80%B8/" />
<link rel="alternate" type="text/html" title="12—18 августа" hreflang="ru" href="https://www.jw.org/ru/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B8-%D0%9D%D0%B0%D1%88%D0%B0-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-12-%D0%BF%D0%BE-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0-2024-%D0%B3%D0%BE%D0%B4%D0%B0/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="efi" href="https://www.jw.org/efi/se-edonde/nwed-mbono-esop/july-august-2024-mwb/Ndut%E1%BB%8Bm-Mbono-Esop-Uwem-ye-Utom-Nny%E1%BB%8Bn-Eke-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Август 12—18" hreflang="ab" href="https://www.jw.org/ab/%D0%B0%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0-%D0%B8%D1%88%D0%B0%D2%B3%D0%B0%D2%AD%D1%86%D3%99%D0%B0-%D0%B0%D0%B8%D0%B7%D0%B0%D1%80%D0%B0-%D0%B0%D1%83%D1%81%D1%83%D1%80%D0%B0%D1%82%D3%99-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D0%B8%D1%83%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%90%D0%B8%D0%B7%D0%B0%D1%80%D0%B0-%D2%B2%D2%9B%D1%8C%D1%8B%D1%80%D1%81%D0%B8%D0%B0%D0%BD%D1%82%D3%99-%D4%A5%D1%81%D2%AD%D0%B0%D0%B7%D0%B0%D0%B0%D1%80%D0%B5%D0%B8-%D2%B3%D0%BC%D0%B0%D2%B5%D0%B7%D1%83%D1%80%D0%B5%D0%B8-%D0%B0%D0%B8%D1%85%D1%88%D0%B0%D0%BD%D2%B5%D0%B0-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-12-%D0%B8%D0%BD%D0%B0%D1%80%D0%BA%D0%BD%D1%8B-18-%D0%BD%D3%A1%D0%B0-2024-%D1%82%D3%99%D0%B8-%D0%B0%D1%88%D1%8B%D2%9B%D3%99%D1%81/" />
<link rel="alternate" type="text/html" title="ˈUtö 12-18" hreflang="daf" href="https://www.jw.org/daf/s%C3%AB%C3%ABdh%C9%9B-lo-dh%C9%9B/jw-bh%C9%94kw%C3%AB%C3%AB-s%C3%AB%C3%ABdh%C9%9B/%CA%92ue-ut%C3%B6-2024-mwb/K%C3%AB-kleti%C9%9Bn-%CB%88ka-s%C3%BC-waa-zlanwop%C3%B6-y%C3%B6-bh%C9%94kw%C3%AB%C3%AB-%CB%88g%C3%BCw%C9%94n-%CB%88%C3%B6-kw%C9%9B-2024-%CB%88Ut%C3%B6-12-18-%CB%88g%C3%BC/" />
<link rel="alternate" type="text/html" title="12—18 август" hreflang="az-cyrl" href="https://www.jw.org/az-cyrl/neshrler/jw-ibadet-gorushu-ish-defteri/iyul-avqust-2024-mwb/%D0%9C%D3%99%D1%81%D0%B8%D2%BB%D0%B8-%D2%BB%D3%99%D1%98%D0%B0%D1%82%D1%8B-%D0%B2%D3%99-%D0%B8%D0%B1%D0%B0%D0%B4%D3%99%D1%82%D0%B8-%D2%9D%D3%A9%D1%80%D2%AF%D1%88%D2%AF%D0%BD%D2%AF%D0%BD-2024-%D2%B9%D2%AF-%D0%B8%D0%BB-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D2%B9%D3%99%D0%B4%D0%B2%D3%99%D0%BB%D0%B8/" />
<link rel="alternate" type="text/html" title="Agosto 12-18" hreflang="hil" href="https://www.jw.org/hil/library/saksi-ni-jehova-miting-workbook/hulyo-agosto-2024-mwb/Iskedyul-sang-Pagkabuhi-kag-Pagministeryo-nga-Miting-Para-sa-Agosto-12-18-2024/" />
<link rel="alternate" type="text/html" title="Августым и 12—18" hreflang="kbd" href="https://www.jw.org/kbd/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D1%8D/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D1%8D-%D0%B8-%D1%89%D1%8B%D1%85%D1%8C%D1%8D%D1%82%D1%85%D1%8D%D0%BC-%D0%B7%D1%8D%D0%86%D1%83%D1%89%D0%86%D1%8D-%D0%B4%D1%8B%D0%B7%D1%8D%D1%80%D1%8B%D0%BB%D0%B0%D0%B6%D1%8C%D1%8D-%D1%82%D1%85%D1%8B%D0%BB%D1%8A/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%94%D0%B8-%D0%B3%D1%8A%D0%B0%D1%89%D0%86%D1%8D%D0%BC%D1%80%D1%8D-%D0%BB%D1%8D%D0%B6%D1%8C%D1%8B%D0%B3%D1%8A%D1%8D-%D0%BB%D1%8A%D0%B0%D0%BF%D0%86%D1%8D%D0%BC%D1%80%D1%8D-%D0%B6%D1%8B%D1%85%D1%83%D0%B8%D0%86%D1%8D-%D0%B7%D1%8D%D0%86%D1%83%D1%89%D0%86%D1%8D%D0%BC-%D0%B8-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D1%80-%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%D1%8B%D0%BC-%D0%B8-12-18-2024-%D0%B3%D1%8A%D1%8D/" />
<link rel="alternate" type="text/html" title="Ọgọst 12-18" hreflang="ig" href="https://www.jw.org/ig/ihe-ndi-anyi-nwere/jw-usoro-ihe-omume-ozi-anyi/julai-ogost-2024-mwb/Usoro-Ihe-Omume-%E1%BB%8Cm%E1%BB%A5m%E1%BB%A5-Ihe-Ozi-Any%E1%BB%8B-na-Ot%C3%BA-Any%E1%BB%8B-Si-Ebi-Nd%E1%BB%A5-Maka-%E1%BB%8Cg%E1%BB%8Dst-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Août" hreflang="ktu-x-kgl" href="https://www.jw.org/ktu-x-kgl/bibloteke/jw-mukanda-ya-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Programe-ya-lukutakanu-Luzingu-mpe-kisalu-ya-Baklisto-samu-na-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="yo" href="https://www.jw.org/yo/Ohun-T%C3%A1-A-N%C3%AD/iwe-ipade-jw/july-august-2024-mwb/%C3%8Ct%C3%B2l%C3%A9%CC%A3s%E1%BA%B9%E1%BA%B9s%E1%BA%B9-%C3%8Cp%C3%A0d%C3%A9-%C3%8Cgb%C3%A9s%C3%AD-Ay%C3%A9-%C3%A0ti-I%E1%B9%A3%C3%A9%CC%A3-%C3%92j%C3%AD%E1%B9%A3%C3%A9%CC%A3-ti-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agusto 12-18" hreflang="ttj" href="https://www.jw.org/ttj/laiburale/jw-orusorokano-akatabu-kensorokano/julaayi-agusto-2024-mwb/Entekaniza-eyOrusorrokano-orwObwomeezi-nObuheereza-Bwaitu-nkAbakristaayo-eya-Agusto-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-​18 de agosto" hreflang="ncj" href="https://www.jw.org/ncj/biblioteca/jw-tein-timomachtiaj-itech-nechikol/julio-agosto-2024-mwb/Tein-timomachtiaj-itech-nechikol-Tonemilis-uan-toTanojnotsalis-12-hasta-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="Sa-sik raem 12-18" hreflang="mos" href="https://www.jw.org/mos/d-s%E1%BA%BDn-yiisi/jw-tigiss%C3%A3-na-k%E1%BA%BDndre/2024-s%E1%BA%BDoogo-sa-sika-mwb/Kiris-neb%C3%A3-v%C9%A9%C9%A9m-la-b-t%CA%8B%CA%8Bma-tigiss%C3%A3-na-k%E1%BA%BDndre-2024-Sa-sik-rasem-12-18/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ada" href="https://www.jw.org/ada/nito-he/jw-ni-kasemi-womi/july-august-2024-mwb/Si-Himi-K%C9%9B-S%C9%94m%C9%94mi-N%C3%AD-Tsumi-Kpe-%C9%94-He-Bl%C9%94-Nya-Tomi-K%C9%9B-Ha-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 augustus" hreflang="srn" href="https://www.jw.org/srn/library/jw-konmakandra-studie-buku/yuli-augustus-2024-mwb/Wi-Kresten-libi-nanga-a-preikiwroko-schema-gi-12-18-augustus-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ee" href="https://www.jw.org/ee/agbal%E1%BA%BDwo-kple-nu-bubuwo/jw-kpekpea-%C6%92e-nusr%C9%94%CC%83gbal%E1%BA%BD/july-august-2024-mwb/Agben%C9%94n%C9%94-Kple-Sub%C9%94sub%C9%94d%C9%94-Kpekpea-%C6%91e-%C3%90o%C9%96ow%C9%94%C9%96i-Na-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 agostupita" hreflang="qub" href="https://www.jw.org/qub/Imayca-charashganchicuna/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Ali-Cawanapaj-y-Yachachicunapaj-12-18-agostupita-2024/" />
<link rel="alternate" type="text/html" title="Njiku 12-18 ja Agosto" hreflang="ndc" href="https://www.jw.org/ndc/bhibhirioteka/jw-musongano-cokutarira/julho-agosto-wo-2024-mwb/Urongwa-wo-Musongano-Upenyu-no-Mushando-kuitira-njiku-12-18-ja-Agosto-wo-2024/" />
<link rel="alternate" type="text/html" title="Yenga ti 12-18 août" hreflang="sg" href="https://www.jw.org/sg/biblioth%C3%A8que/jw-mbeti-ti-bungbi/juillet-ao%C3%BBt-2024-mwb/Programme-ti-bungbi-Kusala-ti-e-nga-na-gigi-ti-e-ti-yenga-ti-12-18-ao%C3%BBt-2024/" />
<link rel="alternate" type="text/html" title="ວັນ​ທີ 12-18 ສິງຫາ" hreflang="lo" href="https://www.jw.org/lo/%E0%BA%AA%E0%BA%B7%E0%BB%88%E0%BB%81%E0%BA%A5%E0%BA%B0%E0%BA%AA%E0%BA%B4%E0%BB%88%E0%BA%87%E0%BA%9E%E0%BA%B4%E0%BA%A1/jw-%E0%BA%84%E0%BA%B9%E0%BB%88%E0%BA%A1%E0%BA%B7-%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%9B%E0%BA%B0%E0%BA%8A%E0%BA%B8%E0%BA%A1/%E0%BA%81%E0%BB%8D%E0%BA%A5%E0%BA%B0%E0%BA%81%E0%BA%BB%E0%BA%94-%E0%BA%AA%E0%BA%B4%E0%BA%87%E0%BA%AB%E0%BA%B2-2024-%E0%BA%84%E0%BA%A1%E0%BA%9B/%E0%BA%95%E0%BA%B2%E0%BA%95%E0%BA%B0%E0%BA%A5%E0%BA%B2%E0%BA%87%E2%80%8B%E0%BA%81%E0%BA%B2%E0%BA%99%E2%80%8B%E0%BA%9B%E0%BA%B0%E0%BA%8A%E0%BA%B8%E0%BA%A1%E2%80%8B%E0%BA%8A%E0%BA%B5%E0%BA%A7%E0%BA%B4%E0%BA%94%E2%80%8B%E0%BB%81%E0%BA%A5%E0%BA%B0%E2%80%8B%E0%BA%A7%E0%BA%BD%E0%BA%81%E2%80%8B%E0%BA%AE%E0%BA%B1%E0%BA%9A%E0%BB%83%E0%BA%8A%E0%BB%89%E2%80%8B%E0%BA%AA%E0%BA%B3%E0%BA%A5%E0%BA%B1%E0%BA%9A%E2%80%8B%E0%BA%A7%E0%BA%B1%E0%BA%99%E2%80%8B%E0%BA%97%E0%BA%B5-12-18-%E0%BA%AA%E0%BA%B4%E0%BA%87%E0%BA%AB%E0%BA%B2-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="aha" href="https://www.jw.org/aha/awuuku-n%C9%A9%C9%A9-nninyeni-mv%CA%8Bl%C9%94/jw-D%C9%A9y%C9%9Bzumanl%C9%9B-D%C9%A9y%C9%9Bzumanl%C9%9B-K%C9%9Bl%C9%9Bta/july-august-2024-mwb/Y%C9%9B-Kilisinyian%C9%A9-%C6%90b%C9%A9law%C9%94l%C9%9B-N%C9%A9%C9%A9-Das%C9%A9l%C9%9Blil%C9%9B%E2%80%8B-D%C9%A9y%C9%9Bzumanl%C9%9B-K%C9%9Bl%C9%9Bta-Ma-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-‏18 اگست" hreflang="ur" href="https://www.jw.org/ur/%D9%84%D8%A7%D8%A6%D8%A8%D8%B1%DB%8C%D8%B1%DB%8C/%D8%A7%D9%90%D8%AC%D9%84%D8%A7%D8%B3-%DA%A9%D8%A7-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D8%AC%D9%88%D9%84%D8%A7%D8%A6%DB%8C-%D8%A7%DA%AF%D8%B3%D8%AA-2024%D8%A1-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D9%85%D8%B3%DB%8C%D8%AD%DB%8C-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%A7%D9%88%D8%B1-%D8%AE%D8%AF%D9%85%D8%AA-%DA%A9%DB%92-%D9%84%DB%8C%DB%92-12-18-%D8%A7%DA%AF%D8%B3%D8%AA-2024%D8%A1-%DA%A9%D8%A7-%D8%B4%DB%8C%DA%88%D9%88%D9%84/" />
<link rel="alternate" type="text/html" title="12-18 август" hreflang="bg" href="https://www.jw.org/bg/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B0-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%BA%D0%B0/%D1%8E%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%B7%D0%B0-%D0%A1%D1%8A%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B5%D1%82%D0%BE-%D0%B7%D0%B0-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D0%BA%D0%B8-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B7%D0%B0-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%D0%B3/" />
<link rel="alternate" type="text/html" title="12-18 Kweji 8" hreflang="lu" href="https://www.jw.org/lu/kib%C4%ABko/jw-kabuku-ka-ku-kupwila/kweji-7-kweji-8-2024-mwb/Mpangiko-ya-Kupwila-kwa-B%C5%ABmi-ne-Mwingilo-ya-12-18-Kweji-8-2024/" />
<link rel="alternate" type="text/html" title="12—18-август" hreflang="ky" href="https://www.jw.org/ky/%D0%9A%D0%B8%D1%82%D0%B5%D0%BF%D0%BA%D0%B0%D0%BD%D0%B0/jw-%D0%BE%D0%BA%D1%83%D1%83-%D0%BA%D1%83%D1%80%D0%B0%D0%BB%D1%8B/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%AB%D0%B9%D1%8B%D0%BA-%D0%BA%D1%8B%D0%B7%D0%BC%D0%B0%D1%82%D1%8B%D0%B1%D1%8B%D0%B7-%D0%B6%D0%B0%D0%BD%D0%B0-%D0%B6%D0%B0%D1%88%D0%BE%D0%BE%D0%B1%D1%83%D0%B7-%D0%B6%D0%BE%D0%BB%D1%83%D0%B3%D1%83%D1%88%D1%83%D1%83%D1%81%D1%83%D0%BD%D1%83%D0%BD-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B3%D0%B8-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/" />
<link rel="alternate" type="text/html" title="Agosti 12-18" hreflang="sw" href="https://www.jw.org/sw/maktaba/jw-daftari-la-mkutano/julai-agosti-2024-mwb/Ratiba-ya-Mkutano-wa-Huduma-na-Maisha-ya-Agosti-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Auguste" hreflang="kj" href="https://www.jw.org/kj/ongulumambo/okafo-kokulongifwa-pokwoongala-kweendombwedi-dajehova/july-august-2024-mwb/Elandulafano-lokafo-Onghalamwenyo-yopaKriste-noilonga-yokuudifa-mo-12-18-Auguste-2024/" />
<link rel="alternate" type="text/html" title="Куран ай 12—18" hreflang="alt" href="https://www.jw.org/alt/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B%D2%A5-%D0%BA%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B8%D2%A5-%D1%82%D1%83%D1%88%D1%82%D0%B0%D0%B6%D1%83-%D0%B8%D1%88%D1%82%D0%B8%D2%A5-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%B8/%D1%98%D0%B0%D0%B0%D0%BD-%D0%B8%D0%B7%D3%B1-%D0%B0%D0%B9-%D0%BA%D1%83%D1%80%D0%B0%D0%BD-%D0%B0%D0%B9-2024-mwb/%D0%91%D0%B8%D1%81%D1%82%D0%B8%D2%A5-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%98%D3%B1%D1%80%D3%B1%D0%BC%D0%B8%D1%81-%D0%BB%D0%B5-%D0%B8%D0%B6%D0%B8%D0%B1%D0%B8%D1%81-%D0%B4%D0%B5%D0%B3%D0%B5%D0%BD-%D1%82%D1%83%D1%88%D1%82%D0%B0%D0%B6%D1%83%D0%BD%D1%8B%D2%A5-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7%D0%B8-2024-%D1%98%D1%8B%D0%BB-%D0%BA%D1%83%D1%80%D0%B0%D0%BD-%D0%B0%D0%B9-12-18/" />
<link rel="alternate" type="text/html" title="12-18 de agost" hreflang="zpa" href="https://www.jw.org/zpa/biblioteca/jw-ni-gonyno-lo-reunion/july-agost-2024-mwb/Mod-nabanyno-n%C3%A9-mod-ronyno-Xchiin-Dios-12-a-18-de-agost-%C3%ADz-2024/" />
<link rel="alternate" type="text/html" title="Utu 12-18" hreflang="bci" href="https://www.jw.org/bci/fluwa-mun/jw-a%C9%B2ia-fluwa/2024-zuie-utu-mwb/Afu%C9%9B-2024-Utu-12-18-nun-Klisifu%C9%9B-mun-nin-be-junmann-a%C9%B2ian-i-siesiel%C9%9B/" />
<link rel="alternate" type="text/html" title="12-18 Auguste" hreflang="ng" href="https://www.jw.org/ng/iinima-mbyoka-ya-nyanyangidhwa/okafo-kokugongala-koonzapo-dhajehova/juli-auguste-2024-mwb/Elandulathano-lyokugongala-li-li-mokafo-Onkalamwenyo-yopaKriste-niilonga-yetu-yokuuvitha-lyomasiku-12-18-Auguste-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="pt-ao" href="https://www.jw.org/pt-ao/biblioteca/jw-programa-da-reuni%C3%A3o/julho-agosto-2024-mwb/Programa-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-de-12-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 a Agosto" hreflang="vmk" href="https://www.jw.org/vmk/ebiblioteka/jw-ekadernu-ya-vamwerini/julho-agosto-2024-mwb/Eprograma-ya-mithukumano-sa-ekumi-ni-mutekwaahu-wa-makristau-ya-12-18-a-Agosto-a-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="meu" href="https://www.jw.org/meu/pablikeisin/jw-hebou-pepana/july-august-2024-mwb/Mauri-Bona-Hesiai-%E1%B8%A0aukara-Ena-Sediul-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Agustus" hreflang="jv" href="https://www.jw.org/jv/perpustakaan/jw-jadwal-kagiyatan/mwb-juli-agustus-2024/Jadwal-Pertemuan-Ibadah-Urip-lan-Nginjil-12-18-Agustus-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="quw" href="https://www.jw.org/quw/publicacionguna/jw-tandarinai-tarbana-quillca/julio-agosto-2024-mwb/Jes%C3%BAs-cuinta-yachachisha-causasha-catishunchi-12-al-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="gur" href="https://www.jw.org/gur/G%C9%94n%C9%94-Zaale%C5%8Ba/jw-zameseg%C9%94-g%C9%94%C5%8B%C9%94/july-august-2024-mwb/Vom-La-Naam-Tuuma-Zameseg%C9%94-Maase%C5%8B%C9%94-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Agusito 12-18" hreflang="lg" href="https://www.jw.org/lg/layibulale/jw-akatabo-kenku%C5%8B%C5%8Baana/jjulaayi-agusito-2024-mwb/Obulamu-bwEkikristaayo-nObuweereza-Bwaffe-Enteekateeka-yEnku%C5%8B%C5%8Baana-eya-Agusito-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ss" href="https://www.jw.org/ss/luhla-lwetintfo-letitfolakalako/jw-incwajana-yekubhalela/july-august-2024-mwb/Luhlelo-LweKuphila-KwemaKhristu-Nemsebenti-Wawo-Lwa-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Awst 12-18" hreflang="cy" href="https://www.jw.org/cy/llyfrgell/gweithlyfr-cyfarfod-jw/gorffennaf-awst-2024-mwb/Rhaglen-Ein-Bywyd-an-Gweinidogaeth-Gristnogol-ar-gyfer-Awst-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="dga" href="https://www.jw.org/dga/boma-binzie/jw-lammo-yels%C9%9Bgree-gane/july-august-2024-mwb/Te-Zemmo-Ane-Te-Naa%C5%8B-Mo%C9%94loo-Lammo-Yels%C9%9Bgraa-a-ko-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Ɔgɔst 12-18" hreflang="kri" href="https://www.jw.org/kri/buk-%C9%9Bn-%C9%94da-tin-d%C9%9Bn/jw-mitin-buk/july-august-2024-mwb/Wi-Kristian-Layf-%C9%9Bn-Prichin-Wok-Mitin-Buk-f%C9%94-%C6%86g%C9%94st-12-18-2024/" />
<link rel="alternate" type="text/html" title="Tarehe 12-18/8" hreflang="swc" href="https://www.jw.org/swc/maktaba/jw-buku-mukutano/mwezi-wa-7-na-wa-8-2024-mwb/Programu-ya-Mukutano-Utumishi-na-Maisha-ya-Tarehe-12-188-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ts" href="https://www.jw.org/ts/layiburari/xiyimiso-xa-minhlangano-jw/july-august-2024-mwb/Mahanyelo-Ni-Ntirho-Wa-Hina-Wo-Chumayela-Xiyimiso-Xa-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 t’Awwissu" hreflang="mt" href="https://www.jw.org/mt/librerija/programm-fuljett-noti-xhieda-gehova/lulju-awwissu-2024-mwb/Programm-tal-%C4%A6ajja-u-l-Ministeru-Tag%C4%A7na-li-se-ji%C4%A1i-studjat-bejn-it-12-u-t-18-tAwwissu-2024/" />
<link rel="alternate" type="text/html" title="12—18 август" hreflang="ug-cyrl" href="https://www.jw.org/ug-cyrl/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/%D0%B9%D3%99%D2%BB%D0%B2%D0%B0-%D0%B3%D1%83%D0%B2%D0%B0%D1%87%D0%B8%D0%BB%D0%B8%D1%80%D0%B8%D0%BD%D0%B8%D2%A3-%D0%B8%D1%88-%D0%B4%D3%99%D0%BF%D1%82%D0%B8%D1%80%D0%B8/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D2%BA%D0%B0%D1%8F%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D0%B2%D3%99-%D1%85%D0%B8%D0%B7%D0%BC%D0%B8%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D1%83%D1%87%D1%80%D0%B8%D1%88%D0%B8%D1%88%D0%B8%D0%BD%D0%B8%D2%A3-%D2%97%D3%99%D0%B4%D0%B2%D0%B8%D0%BB%D0%B8-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="nso-x-spl" href="https://www.jw.org/nso-x-spl/layibhrari/jw-mogahlano-sepukwane/july-august-2024-mwb/Letheto-la-Mogahlano-wa-Maphelelo-le-Mat%C5%A1homayelelo-la-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Ka Agoxto" hreflang="rng" href="https://www.jw.org/rng/bibliyoteka/jw-ntlhanganu-xipapelana/julhu-agoxto-wa-2024-mwb/Xiyimiso-Xa-Ntlhanganu-Wa-Wutomi-Ni-Wutizreli-Xa-12-18-Ka-Agoxto-Wa-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="bem" href="https://www.jw.org/bem/impapulo/jw-akatabo-ka-kubomfya-pa-kulongana/july-august-2024-mwb/Umutande-wa-Ukulongana-kwa-Imikalile-no-Mulimo-Tubomba-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="Sumana 12-18 ya Agosto" hreflang="seh" href="https://www.jw.org/seh/bhibhliyoteka/programu-ya-misonkhano-ya-mboni-za-yahova/julho-agosto-2024-mwb/Programu-ya-Misonkhano-ya-Umaso-na-Utumiki-ya-Sumana-12-18-ya-Agosto-ya-2024/" />
<link rel="alternate" type="text/html" title="12–18 августы" hreflang="os" href="https://www.jw.org/os/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D3%95/%D0%B9%D0%B5%D0%B3%D1%8A%D0%BE%D0%B2%D3%95%D0%B9%D1%8B-%D3%95%D0%B2%D0%B4%D0%B8%D1%81%D3%95%D0%BD%D1%82%D3%95-%D0%BA%D1%83%D1%81%D3%95%D0%BD-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B0%D0%B7%D1%8B-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D1%8B-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D3%95-%D1%84%D0%B5%D0%BC%D0%B1%D3%95%D0%BB%D0%B4%D3%95%D0%BD-%D0%9D%D3%95-%D1%86%D0%B0%D1%80%D0%B4-%D3%95%D0%BC%D3%95-%D0%BD%D3%95-%D0%BB%D3%95%D0%B3%D0%B3%D0%B0%D0%B4/" />
<link rel="alternate" type="text/html" title="Rugpjūčio 12–18 d." hreflang="lt" href="https://www.jw.org/lt/biblioteka/jw-sueigu-programos-biuleteniai/2024%C2%AD-liepa-rugpjutis-sueigu-programa/M%C5%ABs%C5%B3-tarnyba-ir-gyvenimas-Tvarkara%C5%A1tis-2024-m-rugpj%C5%AB%C4%8Dio-12-18-d/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="tiv" href="https://www.jw.org/tiv/ityakerada/antakerada-u-mkombo-u-mbashiada-mba-yehova/julai-agusutu-2024-mwb/Aaven-a-Mkombo-u-Uma-Wase-man-Tom-Wase-Agusutu-12-18-2024/" />
<link rel="alternate" type="text/html" title="Ọya Ọhaneku 12-18" hreflang="ige" href="https://www.jw.org/ige/ang-ile-ki-ho/%E1%BB%A5pw%E1%BB%A5-%E1%BB%8D-kpa-j%C3%A9%CC%A3-ang-nya-jw/%E1%BB%8Dya-%E1%BB%8Dharwiye-%E1%BB%8Dya-%E1%BB%8Dhaneku-2024-mwb/%E1%BB%8Cj%E1%BB%8Bra-j%E1%BB%8Bra-nya-%E1%BB%8Ch%E1%BB%8Bh%E1%BB%8B-bala-%E1%BB%A4k%E1%BB%A5rw%E1%BB%8D-Nyah%E1%BB%8B-%E1%BB%8Dl%E1%BA%B9-k%C3%AD%CC%A3-nw%E1%BB%A5lan%E1%BB%8D-la-epwihi-nya-%E1%BB%8Cya-%E1%BB%8Chaneku-%E1%BB%8Cya-%E1%BB%8Chaneku-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 ga Agusta" hreflang="ha" href="https://www.jw.org/ha/laburare/littafin-taro-na-jw/yuli-agusta-2024-mwb/Tsarin-Ayyukan-Taron-Rayuwa-ta-Kirista-da-Hidimarmu-na-12-18-ga-Agusta-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="nso" href="https://www.jw.org/nso/laeprari/pukwana-ya-seboka-ya-jw/july-august-2024-mwb/Lenaneo-la-Seboka-sa-Bophelo-le-Bodiredi-la-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="nya" href="https://www.jw.org/nya/laibulale/jw-misonkhano-kabuku/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Umoyo-na-Utumiki-ya-August-12-18-2024/" />
<link rel="alternate" type="text/html" title="12-18 Hikañ" hreflang="bas" href="https://www.jw.org/bas/bikaat/jw-kaat-makoda-ma-nem-sonde/njeba-hikan-2024-mwb/Ni%C3%B1-y%C3%A9s-ni-nson-w%C3%A9s-ntjega-inyu-12-18-Hika%C3%B1-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="fat" href="https://www.jw.org/fat/nwoma-nye-dza-%C9%94ka-ho/jw-nhyiamu-dwumadzi-nwoma/july-august-2024-mwb/August-12-18-2024-As%C9%9Bnka-Nye-Christianfo-Asetsena-Nhyiamu-No-Ho-Nhyehy%C9%9B%C9%9B/" />
<link rel="alternate" type="text/html" title="12 Ku Ya Ka 18 Ka Agosto" hreflang="tso-mz" href="https://www.jw.org/tso-mz/bibliyoteka/jw-swibukwana-mintlhanganu/mwb-wa-julho-ku-ya-ka-agosto-wa-2024/Xiyimiso-Xa-Mintlhanganu-Ya-Mahanyelo-Ni-Ntirho-Wa-Hina-Wa-Wukreste-Xa-12-Ku-Ya-Ka-18-Ka-Agosto-Wa-2024/" />
<link rel="alternate" type="text/html" title="12.⁠—⁠18. augusts" hreflang="lv" href="https://www.jw.org/lv/bibliot%C4%93ka/jehovas-liecinieku-sapul%C4%8Du-darba-burtn%C4%ABca/j%C5%ABlijs-augusts-2024-darba-burtn%C4%ABca/Krist%C4%ABg%C4%81s-dz%C4%ABves-un-kalpo%C5%A1anas-sapulces-programma-2024-gada-12%E2%81%A0-%E2%81%A018-augustam/" />
<link rel="alternate" type="text/html" title="12-18 tiʼ agosto" hreflang="yua" href="https://www.jw.org/yua/publicacionoob/juunil-xook-muchtaambal/julio-agosto-2024-mwb/Ba%CA%BCax-kun-ilbil-12-tak-18-ti%CA%BC-agosto-ti%CA%BC-2024-te%CA%BC-much%CA%BCt%C3%A1ambal-Kuxtal-y%C3%A9etel-Meyajo%CA%BC/" />
<link rel="alternate" type="text/html" title="12–18 августи" hreflang="os-x-dgr" href="https://www.jw.org/os-x-dgr/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D3%95/jw-%D0%BA%D0%BE%D1%81%D3%95%D0%BD-%D1%82%D1%8A%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9D%D3%95-%D0%BA%D0%B8%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BD-%D1%86%D0%B0%D1%80%D0%B4-%D3%95%D0%BC%D0%B0-%D0%BB%D3%95%D0%B3%D0%B3%D0%B0%D0%B4%D3%95-%D1%84%D0%B5%D0%BC%D0%B1%D3%95%D0%BB%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D3%95-2024-%D0%B0%D0%BD%D0%B7-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8/" />
<link rel="alternate" type="text/html" title="လါအီကူး ၁၂-၁၈" hreflang="ksw" href="https://www.jw.org/ksw/%E1%80%9C%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%9C%E1%80%B2%E1%81%A2%E1%80%BA%E1%80%90%E1%80%96%E1%81%A3%E1%80%BA/jw-%E1%80%90%E1%80%A1%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%9B%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA-%E1%80%80%E1%81%A0%E1%80%AD%E1%80%96%E1%80%AD%E1%80%9C%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%90%E1%81%A2%E1%80%BA%E1%80%99%E1%81%A4%E1%80%9C%E1%80%AD/%E1%80%9C%E1%80%AB%E1%80%9A%E1%80%B0%E1%81%A4%E1%80%9C%E1%80%B6-%E1%80%9C%E1%80%AB%E1%80%A1%E1%80%AE%E1%80%80%E1%80%B0%E1%80%B8-%E1%81%82%E1%81%80%E1%81%82%E1%81%84-mwb/%E1%80%81%E1%80%9B%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%96%E1%80%AD%E1%80%A1%E1%80%90%E1%81%A2%E1%80%BA%E1%80%A1%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%99%E1%80%B0%E1%80%92%E1%80%AE%E1%80%B8-%E1%80%90%E1%81%A2%E1%80%BA%E1%80%85%E1%80%B6%E1%81%A3%E1%80%BA%E1%80%90%E1%80%B2%E1%81%A4%E1%80%90%E1%80%B2%E1%80%9C%E1%80%AE%E1%81%A4%E1%80%90%E1%81%A2%E1%80%BA%E1%80%80%E1%81%A0%E1%80%AD-%E1%80%90%E1%81%A2%E1%80%BA%E1%80%A1%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%9B%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA-%E1%80%A1%E1%80%90%E1%81%A2%E1%80%BA%E1%80%9B%E1%80%B2%E1%81%A3%E1%80%BA%E1%80%90%E1%81%A2%E1%80%BA%E1%80%80%E1%80%BB%E1%80%B2%E1%81%A4%E1%80%9C%E1%81%A2-%E1%80%9C%E1%80%AB%E1%80%A1%E1%80%AE%E1%80%80%E1%80%B0%E1%80%B8-%E1%81%81%E1%81%82-%E1%81%81%E1%81%88-%E1%81%82%E1%81%80%E1%81%82%E1%81%84/" />
<link rel="alternate" type="text/html" title="Agasti 12-18" hreflang="xh" href="https://www.jw.org/xh/ILayibrari/amangqina-kayehova-incwadi-yeentlanganiso/julayi-agasti-2024-mwb/Ucwangciso-Lobomi-BamaKristu-Nomsebenzi-Wokushumayela-LwangoAgasti-12-18-2024/" />
<link rel="alternate" type="text/html" title="Onyan̄ Jeeta 12-18" hreflang="ann" href="https://www.jw.org/ann/inu-kiji/jw-meeting-workbook/onyan%CC%84-jaaba-onyan%CC%84-jeeta-2024-mwb/Onineen%CC%84-Inu-Ebekween%CC%84-me-Nkween%CC%84mkp%E1%BB%8D-Ugwem-m%C3%A8-Ikwaan%CC%84-Kiji-eyi-Onyan%CC%84-Jeeta-12-18-2024/" />
<link rel="alternate" type="text/html" title="August 12-18" hreflang="ho" href="https://www.jw.org/ho/laibri/jw-hebou-pepana/july-august-2024-mwb/Haroro-Bona-Mauri-Dalana-Hebou-Sediual-August-12-18-2024-totona/" />
<link rel="alternate" type="text/html" title="Августӑн 12—18" hreflang="cv" href="https://www.jw.org/cv/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0-%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D3%97%D1%81%D0%B5%D0%BD-%D3%97%D2%AB-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D1%87%D3%97/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%83%D1%80%D0%BD%D3%91%D2%AB%D0%BF%D0%B0-%D1%81%D3%91%D0%B2%D0%B0%D0%BF%D0%BB%D3%91-%D3%97%D2%AB-%D1%82%D3%97%D0%BB%D0%BF%D1%83%D0%BB%D3%91%D0%B2%D3%91%D0%BD-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B9%D3%97-2024-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D3%91%D0%BD-12-18/" />
<link rel="alternate" type="text/html" title="12.–18. August" hreflang="lb" href="https://www.jw.org/lb/bibliotheik/jw-zesummekommen-aarbechtsheft/juli-august-2024-mwb/Programm-fir-dLiewen-an-D%C3%A9ngscht-Versammlung-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="12-18 Тʹәбахе" hreflang="kmr-cyrl" href="https://www.jw.org/kmr-cyrl/%D0%BA%D1%8C%D1%82%D0%B5%D0%B1%D1%85%D0%B0%D0%BD%D3%99/jw-%D1%89%D1%8C%D0%B2%D0%B8%D0%BD-%D0%B1%D3%99%D1%80%D0%BD%D0%B0%D0%BC%D0%B0-%D1%89%D1%8C%D0%B2%D0%B8%D0%BD%D0%B5/%D1%82%D1%8C%D1%80%D0%BC%D3%99%D2%BB-%D1%82%D3%99%D0%B1%D0%B0%D1%85-2024-%D0%BC%D4%9D%D0%B1/%D0%91%D1%8C%D0%B6%D0%B8%D0%BD-%D1%83-%D0%A5%D1%8C%D0%B7%D0%BC%D3%99%D1%82-%D0%BA%D1%8C%D0%BD-%D0%91%D3%99%D1%80%D0%BD%D0%B0%D0%BC%D0%B0-%D0%A9%D1%8C%D0%B2%D0%B8%D0%BD%D0%B5-%D0%B1%D0%BE%D0%BD%D0%B0-12-18-%D0%A2%CA%B9%D3%99%D0%B1%D0%B0%D1%85%D0%B5-2024/" />
<link rel="alternate" type="text/html" title="12.–18. August" hreflang="rmo" href="https://www.jw.org/rmo/bibliotheka/jw-ketenepen-program/juli-august-2024-mwb/Mari-programma-an-o-Khetnepen-Djipen-un-Budi-ap-o-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="12 al 18 de agosto" hreflang="qu" href="https://www.jw.org/qu/publicaciones/jw-tantakuypaj/julio-agosto-2024-mwb/Cristiano-Kausayninchej-tantakuypaj-wakichikusqan-12-al-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="12-18 de agosto" hreflang="nhk" href="https://www.jw.org/nhk/tanextilismej/jw-ama-yej-kinextia-tanechkolis/julio-agosto-2024-mwb/Matinemikan-wan-Matitajto%CC%B1lmoya%CC%B1wakan-ken-Cristo-12-a-18-de-agosto-de-2024/" />
<link rel="alternate" type="text/html" title="La 12-18 August" hreflang="st-za" href="https://www.jw.org/st-za/laebrari/jw-bukana-seboka/july-august-2024-mwb/Lenanetsamaiso-la-Seboka-sa-Bophelo-le-Tshebeletso-la-la-12-18-August-2024/" />
<link rel="alternate" type="text/html" title="12-18 ya Agosto" hreflang="vmw" href="https://www.jw.org/vmw/Ebibilioteka/jw-ekaderno-enirumeeliwa-omuthukumanoni/julho-agosto-2024-mwb/Okumi-ni-Orummwa-Ahu-eprokrama-ya-mithukumano-ya-12-18-ya-Agosto-2024/" />
<link rel="alternate" type="text/html" title="12-18 август" hreflang="rmn-x-rmb" href="https://www.jw.org/rmn-x-rmb/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%BE-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%BA%D0%B0/%D1%8E%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%B5-%D1%81%D1%8A%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B5%D1%81%D0%BA%D0%B5-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D0%BA%D0%BE-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BE%D1%81-%D1%82%D0%B0%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B5-%D0%BA%D1%83%D1%80%D0%BA%D0%B5%D1%81%D0%BA%D0%B5-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%D0%B3/" />
<link rel="alternate" type="text/html" title="12-18 di Ougùstùs" hreflang="pap" href="https://www.jw.org/pap/biblioteka/jw-material-tarea/yuli-ougustus-2024-mwb/Programa-di-Reunion-Nos-Bida-i-Sirbishi-Kristian-di-12-18-di-Oug%C3%B9st%C3%B9s-2024/" />
<link rel="alternate" type="text/html" title="12-18 Ngoan muom" hreflang="fan" href="https://www.jw.org/fan/eberga/jw-kalare-esulan/ngoan-zangbwa-ngoan-muom-ye-mbu-2024-mwb/%C3%89ning-moan-kristen-ye-%C3%A9s%C3%A8%C3%B1-minkanghle-ntaane-mam-ye-sono-12-18-Ngoan-muom-ye-mbu-2024/" />
<link rel="alternate" type="text/html" title="12–18 август" hreflang="uz-cyrl" href="https://www.jw.org/uz-cyrl/%D0%BA%D1%83%D1%82%D1%83%D0%B1%D1%85%D0%BE%D0%BD%D0%B0/%D1%8F%D2%B3%D0%BE%D0%B2%D0%B0-%D1%88%D0%BE%D2%B3%D0%B8%D0%B4%D0%BB%D0%B0%D1%80%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3-%D1%82%D0%B0%D1%8A%D0%BB%D0%B8%D0%BC-%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80%D0%B8/2024-%D0%B9%D0%B8%D0%BB-%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-mwb/2024-%D0%B9%D0%B8%D0%BB-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D2%B3%D0%B0%D1%84%D1%82%D0%B0%D1%81%D0%B8-%D1%83%D1%87%D1%83%D0%BD-%D2%B2%D0%B0%D1%91%D1%82-%D1%82%D0%B0%D1%80%D0%B7%D0%B8%D0%BC%D0%B8%D0%B7-%D0%B2%D0%B0-%D1%85%D0%B8%D0%B7%D0%BC%D0%B0%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D1%83%D1%87%D1%80%D0%B0%D1%88%D1%83%D0%B2%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3-%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80%D0%B8/" />
<link rel="alternate" type="text/html" title="12–18-avgust" hreflang="uz-latn" href="https://www.jw.org/uz-latn/kutubxona/yahova-shohidlarining-talim-dasturi/2024-yil-iyul-avgust-mwb/2024-yil-12-18-avgust-haftasi-uchun-Hayot-tarzimiz-va-xizmatimiz-uchrashuvining-dasturi/" />
<link rel="alternate" type="text/html" title="Uti tile 12-18" hreflang="dyu" href="https://www.jw.org/dyu/biblot%C9%9Bki/jw-laj%C9%9Bn-s%C9%9Bb%C9%9B/zuwe-uti-2024-mwb/%C6%9D%C9%9Bnamaya-ni-waajuli-baara-Saan-2024-uti-tile-12-18-ka-laj%C9%9Bn-porogramu/" />
<link rel="alternate" type="text/html" title="12—18 август" hreflang="mhr" href="https://www.jw.org/mhr/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B5/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD-%D1%82%D0%B0%D0%BD%D1%8B%D0%BA%D1%88%D0%B5-%D0%B2%D0%BB%D0%B0%D0%BA-%D0%B2%D0%B0%D1%88%D0%BB%D0%B8%D0%B9%D0%BC%D0%B0%D1%88-%D0%BF%D0%B0%D1%88%D0%B0-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B8%D0%B9-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D0%B8%D0%BB%D1%8B%D1%88-%D0%B4%D0%B5%D0%BD-%D1%81%D0%BB%D1%83%D0%B6%D1%8B%D0%BC%D0%B0%D1%88%D0%BD%D0%B0-%D0%B2%D0%B0%D1%88%D0%BB%D0%B8%D0%B9%D0%BC%D0%B0%D1%88-%D1%80%D0%B0%D0%B4%D0%B0%D0%BC/" />
<link rel="alternate" type="text/html" title="aagast 12-18" hreflang="ta-x-tlr" href="https://www.jw.org/ta-x-tlr/Laibrari/yeg%C5%8Dvaavin-saatchigal-k%C5%ABttam-payircchi-putthagam/j%C5%ABlai-aagast-2024-mwb/aagast-12-18-2024-vaalkkaiyum-%C5%ABliyamum-k%C5%ABttatthukkaana-attavanai/" />
<link rel="alternate" type="text/html" title="12—18-тӥ гудырикошкон" hreflang="udm" href="https://www.jw.org/udm/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BB%D1%8D%D0%BD-%D0%B0%D0%B4%D3%9F%D0%B8%D1%81%D1%8C-%D0%B8%D0%B2%D0%BE%D1%80%D1%82%D3%A5%D1%81%D1%8C%D1%91%D1%81%D1%8B%D0%B7%D0%BB%D1%8D%D0%BD-%D0%BF%D1%83%D0%BC%D0%B8%D1%81%D1%8C%D0%BA%D0%BE%D0%BD%D0%B7%D1%8B-%D1%83%D0%B6%D0%B0%D0%BD-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%BF%D3%A7%D1%81%D1%8C%D1%82%D0%BE%D0%BB%D1%8D%D0%B7%D1%8C-%D0%B3%D1%83%D0%B4%D1%8B%D1%80%D0%B8%D0%BA%D0%BE%D1%88%D0%BA%D0%BE%D0%BD-2024-mwb/%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%83%D0%BB%D0%BE%D0%BD%D0%BC%D1%8B-%D0%BD%D0%BE-%D1%83%D0%B6%D0%B0%D0%BD-%D1%82%D1%8B%D1%80%D1%88%D0%BE%D0%BD%D0%BC%D1%8B-%D0%BF%D1%83%D0%BC%D0%B8%D1%81%D1%8C%D0%BA%D0%BE%D0%BD%D0%BB%D1%8D%D0%BD-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7-12-18-%D1%82%D3%A5-%D0%B3%D1%83%D0%B4%D1%8B%D1%80%D0%B8%D0%BA%D0%BE%D1%88%D0%BA%D0%BE%D0%BD-2024-%D1%82%D3%A5-%D0%B0%D1%80/" />
<link rel="alternate" type="text/html" title="12-18/08" hreflang="ln" href="https://www.jw.org/ln/Biblioteke/jw-mokanda-ya-likita/07-08-2024-mwb/Program%C9%9B-ya-Likita-Bomoi-mpe-mosala-mpo-na-p%C9%94s%C9%94-ya-12-18082024/" />
<link rel="alternate" type="text/html" title="Ngone muamô 12-18" hreflang="bum" href="https://www.jw.org/bum/bekalate/jw-esulan-kalate-esae/ngone-zangbwale-ngone-muamo-mbu-2024-mwb/Ntaane-mam-asu-%C3%A9sulane-ya-sond%C3%B4-atat%C3%A9-Ngone-muam%C3%B4-12-%E2%81%A018-mbu-2024/" />
<link rel="alternate" type="text/html" title="12—18 август" hreflang="ba" href="https://www.jw.org/ba/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/%D0%B9%D3%99%D2%BB%D2%AF%D3%99-%D1%88%D0%B0%D2%BB%D0%B8%D1%82%D1%82%D0%B0%D1%80%D1%8B-%D0%BE%D1%81%D1%80%D0%B0%D1%88%D1%8B%D1%83-%D1%8D%D1%88-%D0%B4%D3%99%D1%84%D1%82%D3%99%D1%80%D0%B5/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B9%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%B0%D2%99%D0%BD%D0%B0%D2%BB%D1%8B-%D3%A9%D1%81%D3%A9%D0%BD-%D0%9C%D3%99%D1%81%D0%B8%D1%85%D1%81%D0%B5%D0%BB%D3%99%D1%80-%D1%82%D0%BE%D1%80%D0%BC%D0%BE%D1%88%D0%BE-%D2%BB%D3%99%D0%BC-%D1%85%D0%B5%D2%99%D0%BC%D3%99%D1%82%D0%B5-%D0%BE%D1%81%D1%80%D0%B0%D1%88%D1%8B%D1%83%D1%8B%D0%BD%D1%8B%D2%A3-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D2%BB%D1%8B/" />
<link rel="alternate" type="text/html" title="12-18 август" hreflang="rmn-cyrl" href="https://www.jw.org/rmn-cyrl/biblioteka/zhivoto-hem-sluzhba-listija-spremibaske/%D1%98%D1%83%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D0%B5%D0%B4-%D0%B1%D0%B0%D1%88%D0%BE-%D0%90%D0%BC%D0%B0%D1%80%D0%BE-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BE-%D1%85%D0%B5%D0%BC-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B1%D0%B0%D1%88%D0%BE-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/" />
<link rel="alternate" type="text/html" title="12—18 awgust" hreflang="tk" href="https://www.jw.org/tk/edebi%C3%BDatlar/jw-okuw-depderi/i%C3%BDul-awgust-2024-mwb/Durmu%C5%9F-we-wagyz-du%C5%9Fu%C5%9Fygyny%C5%88-me%C3%BDilnamasy-12-18-awgust-2024/" />
<link rel="alternate" type="text/html" title="12-18 Tebaxê" hreflang="kmr-x-rdu" href="https://www.jw.org/kmr-x-rdu/kit%C3%AAbxane/jw-civ%C3%AEn-bernama-civ%C3%AEn%C3%AA/tirmeh-tebax-2024-mwb/Bij%C3%AEn-%C3%BB-Xizmet-kin-Bernama-Civ%C3%AEn%C3%AA-bona-12-18-Tebax%C3%AA-2024/" />
<link rel="alternate" type="text/html" title="١٢-‏١٨ آب (‏أغسطس)‏" hreflang="arz" href="https://www.jw.org/arz/%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%B4%D9%87%D9%88%D8%AF-%D9%8A%D9%87%D9%88%D9%87/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%AA%D9%85%D9%88%D8%B2-%D8%A2%D8%A8-%D9%A2%D9%A0%D9%A2%D9%A4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%AD%D9%8A%D8%A9-%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D9%A1%D9%A2-%D9%A1%D9%A8-%D8%A2%D8%A8-%D8%A3%D8%BA%D8%B3%D8%B7%D8%B3-%D9%A2%D9%A0%D9%A2%D9%A4/" />

      <meta name="google" content="notranslate" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/icon_homeButton.png" />
      <link rel="icon" href="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/icon_favicon.gif" />
      
         <link rel="canonical" href="https://www.jw.org/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/" />
      

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      
      
         <meta name="format-detection" content="telephone=no" />
      

      
         <meta name="robots" content="max-image-preview:large" />
      

      
      <meta name="application-name" content="JW.ORG" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-square70x70logo" content="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/tile_squareSmall.png" />
      <meta name="msapplication-square150x150logo" content="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/tile_squareMedium.png" />
      <meta name="msapplication-wide310x150logo" content="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/tile_landscape.png" />
      <meta name="msapplication-square310x310logo" content="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/tile_squareLarge.png" />
      
      
         <meta property="og:image" content="https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_lsr_lg.jpg" />
         <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="600" />
      
      <meta property="og:title" content="Vida y Ministerio Cristianos: 12 a 18 de agosto de 2024" />
      <meta property="og:url" content="https://www.jw.org/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/" />
      <meta property="og:site_name" content="JW.ORG"/>
      <meta property="og:description" content=""/>
      <meta property="og:type" content="article" />

      <script type="text/javascript" src="/es/i18n.js?v=2552828400"></script>
   <link rel="stylesheet" type="text/css" href="https://b.jw-cdn.org/code/media-player/v3.1.0/css/media-player.css" />
<link rel="stylesheet" type="text/css" href="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/collector.css" />
</head>

   <body id="mid202024247" lang="es" dir="ltr" xml:lang="es" data-insight-context-id="pa-202024247" class="noJS publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle">
      
<script type="text/javascript">
   document.body.className = document.body.className.replace(/\bnoJS\b/, 'yesJS');
</script>

      
<script type="text/javascript">
   var theme;

   try {
      function canUseFunctionalCookies() {
         return (document.cookie || '').indexOf('cookieConsent-FUNCTIONAL=true') !== -1;
      }

      theme = canUseFunctionalCookies() ? localStorage.getItem('userPref-appearance') : undefined;

      if (typeof theme === 'string') {
         theme = JSON.parse(theme);
      }

      if (theme === 'dark' || theme === 'light') {
         document.body.classList.add('cc-theme--' + theme);
         document.body.classList.add('mediaPlayer-theme--' + theme);
      }
   } catch(e) {}
</script>

      <div id="screenReaderNavLinkTop">
   <p class="noPrint">
      <a class="primaryButton jsSkipToContentLink" href='/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/#content' data-anchor='#content'>
         <span class="buttonText">Ir al contenido</span>
      </a>
   </p>
   
      
         <p class="noPrint"><a href='/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/#sidebar' data-anchor='#sidebar'>Ir al índice</a></p>
      
   
</div>

      <div id="pageConfig"
   data-content_lang="es"
   data-content_lang_direction="ltr"
   data-content_lang_script="ROMAN"
   data-wt_lang="S"
   data-is_sign_language=""
   data-menu_default_collapsed="true"
   data-base_path="/"
   data-assets_base_url="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f"
   data-finder_base_link="https://www.jw.org/finder?"
   data-open_base_link="https://www.jw.org/open?"
   data-pubmedia_url="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS"
   data-wol_link_api_url="https://b.jw-cdn.org/apis/wol-link"
   data-page_id="mid202024247"
   data-body_classes="publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle"
   data-jwt_location="https://b.jw-cdn.org/tokens/jworg.jwt"
   data-mediator_url="https://b.jw-cdn.org/apis/mediator"
   data-insight_events_url="https://b.jw-cdn.org/apis/insight/events"
   data-i18n_api_url="https://b.jw-cdn.org/apis/i18n"
   data-language_api="/es/languages"
   
      
         
            data-bible_html_api="/es/biblioteca/biblia/biblia-estudio/libros/json/html/"
         
            data-bible_data_api="/es/biblioteca/biblia/biblia-estudio/libros/json/data/"
         
            data-bible_multimedia_api="/es/biblioteca/biblia/biblia-estudio/libros/json/multimedia/"
         
            data-bible_translations_api="/es/biblioteca/biblia/biblia-estudio/libros/json/translations/"
         
            data-bible_translations-html_api="/es/biblioteca/biblia/biblia-estudio/libros/json/translations-html/"
         
         data-preferred_bible="nwtsty"
         data-preferred_bible_available_verses="1001001-66022021"
         
            data-bible_audio_data_api="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?output=json&amp;pub=nwtsty&amp;fileformat=MP3&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
         

         
            data-bible_html_api_nwtsty="/es/biblioteca/biblia/biblia-estudio/libros/json/html/"
         
            data-bible_data_api_nwtsty="/es/biblioteca/biblia/biblia-estudio/libros/json/data/"
         
            data-bible_multimedia_api_nwtsty="/es/biblioteca/biblia/biblia-estudio/libros/json/multimedia/"
         
            data-bible_translations_api_nwtsty="/es/biblioteca/biblia/biblia-estudio/libros/json/translations/"
         
            data-bible_translations-html_api_nwtsty="/es/biblioteca/biblia/biblia-estudio/libros/json/translations-html/"
         
            data-bible_html_api_nwt="/es/biblioteca/biblia/nwt/libros/json/html/"
         
            data-bible_data_api_nwt="/es/biblioteca/biblia/nwt/libros/json/data/"
         
            data-bible_multimedia_api_nwt="/es/biblioteca/biblia/nwt/libros/json/multimedia/"
         
            data-bible_translations_api_nwt="/es/biblioteca/biblia/nwt/libros/json/translations/"
         
            data-bible_translations-html_api_nwt="/es/biblioteca/biblia/nwt/libros/json/translations-html/"
         
            data-bible_html_api_bi12="/es/biblioteca/biblia/bi12/libros/json/html/"
         
            data-bible_data_api_bi12="/es/biblioteca/biblia/bi12/libros/json/data/"
         
            data-bible_multimedia_api_bi12="/es/biblioteca/biblia/bi12/libros/json/multimedia/"
         
            data-bible_translations_api_bi12="/es/biblioteca/biblia/bi12/libros/json/translations/"
         
            data-bible_translations-html_api_bi12="/es/biblioteca/biblia/bi12/libros/json/translations-html/"
         

         

         data-bible_editions_api="/es/biblioteca/biblia/json/"
      
   
   

   
   style="display:none;"></div>

      
   
      <div style="display:none;" class="jsVideoPoster mid202024247" data-src="https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_lsr_xl.jpg" data-alt="Una adolescente Testigo observa con envidia a sus compañeras de clase mientras hablan entre ellas y miran sus teléfonos."></div>
   



      
         


<div id="mobileNavTopBar">
   <header class="cms-clearfix">
      
         
         <a href="/es/" class="mobileLogo" title="Ir a la página de inicio de JW.ORG">
            <span class="srText">JW.ORG</span>
         </a>
      

      
      <div class="navBarControls">
         
         <button type="button" id="mobileLangOpen" class="navBarButton mobileLang" aria-expanded="false">
            <span class="navBarButton-icon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-language"></i>
            </span>
            <span class="navBarButton-text srText">Cambiar idioma del sitio</span>
         </button>
         <div id="mobileLang" class="cms-clearfix rightPanel loading">
         </div>
         <div id="mobileLangShelf" class="rightPanel loading">
            <button type="button" id="mobileLangClose" class="closePanel" aria-labelledby="mobileLangOpen mobileLangClose">
               <span class="closePanel-text srText">CERRAR</span>
               <span class="closePanel-icon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-x"></i>
               </span>
            </button>
         </div>

         
         <a href='https://hub.jw.org/home/es' class="srText" target='_blank' rel='noreferrer noopener'>
            Iniciar sesión
            (abre una nueva ventana)
         </a>

         
         
            
               
               <div role="search">
                  <a href="/es/b%C3%BAsquedas/" class="navBarButton mobileSearch">
                     <span class="navBarButton-icon" aria-hidden="true">
                        <i class="jwf-jw-icons-external jwi-magnifying-glass"></i>
                     </span>
                     <span class="navBarButton-text srText">Búsquedas en jw.org</span>
                  </a>
               </div>
            
         

         
         <nav role="navigation" aria-label="Primario">
            <button type="button" id="mobileNavOpen" class="navBarButton mobileMenu" aria-expanded="false">
               <span class="navBarButton-icon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-menu"></i>
               </span>
               <span class="navBarButton-text srText">MOSTRAR MENÚ</span>
            </button>
            <div id="mobileNav" class="cms-clearfix rightPanel publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle">
               
               
                  <div class="mobileNavLink lvl1 link pub-ijw dir-ltr ml-S ms-ROMAN docId-1011200 docClass-130 HomePage">
                     <a class="siteSectionTitle navTitleWrapper cms-clearfix" href="/es/">
                        <span class="jwIcon mid1011200" aria-hidden="true"></span>
                        <span class="navTitle">
                           INICIO
                        </span>
                     </a>
                  </div>
               

               
               
               
                  
                  
                     
                     
                  
                     
                     
                        <div class="mobileNavLink lvl1 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011201 docClass-130 BibleTeachings">
   <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/">
      <span class="jwIcon mid1011201" aria-hidden="true"></span>
      <span class="navTitle" id="navTitle1011201">
         ENSEÑANZAS BÍBLICAS
      </span>
   </a>
   
      <button type="button" id="navTitleExpand1011201" class="secondaryButton expandButton jsExpandNav "
         aria-expanded="false"
         aria-labelledby="navTitle1011201 navTitleExpand1011201">
         <span class="expandButton-border">
            <span class="expandButton-icon buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-chevron-down"></i>
            </span>
            <span class="srText">Mostrar más</span>
         </span>
      </button>
   
</div>



   <div class="jsCollapsableBlock" role="list">
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011202 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/">
               <span class="jwIcon mid1011202" aria-hidden="true"></span>
               <span class="navTitle">
                  Preguntas sobre la Biblia
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011703 docClass-130 SimpleCollectionPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/textos-biblicos/">
               <span class="jwIcon mid1011703" aria-hidden="true"></span>
               <span class="navTitle">
                  Textos bíblicos explicados
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011722 docClass-130 ArticleOnlyLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/programa-clases-particulares-biblia/">
               <span class="jwIcon mid1011722" aria-hidden="true"></span>
               <span class="navTitle">
                  Curso de la Biblia
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011539 docClass-130 BibleStudyToolsV2" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/ayudas-estudiar-biblia/">
               <span class="jwIcon mid1011539" aria-hidden="true"></span>
               <span class="navTitle">
                  Ayudas para estudiar la Biblia
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011556 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/felicidad-paz-interior/">
               <span class="jwIcon mid1011556" aria-hidden="true"></span>
               <span class="navTitle">
                  Felicidad y paz interior
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011205 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/familia/">
               <span class="jwIcon mid1011205" aria-hidden="true"></span>
               <span class="navTitle">
                  El matrimonio y la familia
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011206 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/j%C3%B3venes/">
               <span class="jwIcon mid1011206" aria-hidden="true"></span>
               <span class="navTitle">
                  Adolescentes y jóvenes adultos
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011204 docClass-130 ChildrenLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/ni%C3%B1os/">
               <span class="jwIcon mid1011204" aria-hidden="true"></span>
               <span class="navTitle">
                  Niños
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011580 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/fe-en-dios/">
               <span class="jwIcon mid1011580" aria-hidden="true"></span>
               <span class="navTitle">
                  Fe en Dios
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011552 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/ciencia/">
               <span class="jwIcon mid1011552" aria-hidden="true"></span>
               <span class="navTitle">
                  La Biblia y la ciencia
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011569 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/ense%C3%B1anzas-b%C3%ADblicas/historia-biblia/">
               <span class="jwIcon mid1011569" aria-hidden="true"></span>
               <span class="navTitle">
                  La Biblia y la historia
               </span>
            </a>
         </div>
      
      
      
      
   </div>


                     
                  
                     
                     
                        <div class="mobileNavLink lvl1 section publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011207 docClass-130 PublicationsFeaturedLandingPage">
   <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/">
      <span class="jwIcon mid1011207" aria-hidden="true"></span>
      <span class="navTitle" id="navTitle1011207">
         BIBLIOTECA
      </span>
   </a>
   
      <button type="button" id="navTitleExpand1011207" class="secondaryButton expandButton jsExpandNav jsPreExpand"
         aria-expanded="false"
         aria-labelledby="navTitle1011207 navTitleExpand1011207">
         <span class="expandButton-border">
            <span class="expandButton-icon buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-chevron-down"></i>
            </span>
            <span class="srText">Mostrar más</span>
         </span>
      </button>
   
</div>



   <div class="jsCollapsableBlock" role="list">
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011208 docClass-130 BibleLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/biblia/">
               <span class="jwIcon mid1011208" aria-hidden="true"></span>
               <span class="navTitle">
                  Biblia en línea
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011209 docClass-130 PublicationsMagazinesLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/revistas/">
               <span class="jwIcon mid1011209" aria-hidden="true"></span>
               <span class="navTitle">
                  Revistas
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011210 docClass-130 PublicationsDefaultLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/libros/">
               <span class="jwIcon mid1011210" aria-hidden="true"></span>
               <span class="navTitle">
                  Otras publicaciones
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011678 docClass-130 ArticleSeries" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/articulos/">
               <span class="jwIcon mid1011678" aria-hidden="true"></span>
               <span class="navTitle">
                  Catálogo de artículos
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 section publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011529 docClass-130 PublicationsMWBLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/">
               <span class="jwIcon mid1011529" aria-hidden="true"></span>
               <span class="navTitle">
                  Guía de actividades
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011752 docClass-130 PublicationsDefaultLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/pautas/">
               <span class="jwIcon mid1011752" aria-hidden="true"></span>
               <span class="navTitle">
                  Pautas
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications excludeSecondLevelNavFromFooter pub-ijw dir-ltr ml-S ms-ROMAN docId-1013413 docClass-130 PublicationsKMLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/ministerio-del-reino/">
               <span class="jwIcon mid1013413" aria-hidden="true"></span>
               <span class="navTitle">
                  Ministerio del Reino
               </span>
            </a>
         </div>
      
         
         
         
            <div class="mobileNavLink jsVODStudioLink lvl2 publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011214 docClass-130 VideosPage" role="listitem">
               <a href="/es/biblioteca/videos/#es/categories/VODStudio" class="navTitleWrapper">
                  <span class="navTitleIcon" aria-hidden="true">
                     <i class="jwf-jw-icons-external jwi-jw-square"></i>
                  </span>
                  <span class="navTitle">
                     JW Broadcasting<sup>®</sup>
                  </span>
               </a>
            </div>
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011214 docClass-130 VideosPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/videos/">
               <span class="jwIcon mid1011214" aria-hidden="true"></span>
               <span class="navTitle">
                  Videos
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011211 docClass-130 MusicLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/musica-canciones/">
               <span class="jwIcon mid1011211" aria-hidden="true"></span>
               <span class="navTitle">
                  Música
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011212 docClass-130 PublicationsDefaultLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/audio-representaciones-dram%C3%A1ticas/">
               <span class="jwIcon mid1011212" aria-hidden="true"></span>
               <span class="navTitle">
                  Obras teatrales en audio
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011213 docClass-130 PublicationsDefaultLandingPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/biblioteca/lecturas-b%C3%ADblicas-dramatizadas/">
               <span class="jwIcon mid1011213" aria-hidden="true"></span>
               <span class="navTitle">
                  Lecturas dramatizadas de la Biblia
               </span>
            </a>
         </div>
      
      
         <div class="mobileNavLink lvl2 publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011207 docClass-130 PublicationsFeaturedLandingPage" role="listitem">
            <a href='https://wol.jw.org/wol/finder?wtlocale=S' target='_blank' class="navTitleWrapper" rel='noreferrer noopener'>
               <span class="navTitleIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-watchtower-square"></i>
               </span>
               <span class="navTitle">
                  Biblioteca en línea
               </span>
               <span class="srText">(abre una nueva ventana)</span>
            </a>
         </div>
      
      
      
   </div>


                     
                  
                     
                     
                        <div class="mobileNavLink lvl1 link news pub-ijw dir-ltr ml-S ms-ROMAN docId-1011216 docClass-130 PaginatedArticleListPage">
   <a class="siteSectionTitle navTitleWrapper" href="/es/noticias/">
      <span class="jwIcon mid1011216" aria-hidden="true"></span>
      <span class="navTitle" id="navTitle1011216">
         NOTICIAS
      </span>
   </a>
   
</div>




                     
                  
                     
                     
                        <div class="mobileNavLink lvl1 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011228 docClass-130 AboutUsLandingPage">
   <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/">
      <span class="jwIcon mid1011228" aria-hidden="true"></span>
      <span class="navTitle" id="navTitle1011228">
         SOBRE NOSOTROS
      </span>
   </a>
   
      <button type="button" id="navTitleExpand1011228" class="secondaryButton expandButton jsExpandNav "
         aria-expanded="false"
         aria-labelledby="navTitle1011228 navTitleExpand1011228">
         <span class="expandButton-border">
            <span class="expandButton-icon buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-chevron-down"></i>
            </span>
            <span class="srText">Mostrar más</span>
         </span>
      </button>
   
</div>



   <div class="jsCollapsableBlock" role="list">
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011233 docClass-130 AboutUsFAQPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/">
               <span class="jwIcon mid1011233" aria-hidden="true"></span>
               <span class="navTitle">
                  Preguntas frecuentes
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijwau dir-ltr ml-S ms-ROMAN docId-502012232 docClass-141 RequestVisitPage" role="listitem">
            <a href='/es/testigos-de-jehov%C3%A1/solicite-una-visita/' class="siteSectionTitle navTitleWrapper"  target='_blank' rel='noreferrer noopener'>
               <span class="jwIcon mid502012232" aria-hidden="true"></span>
               <span class="navTitle">
                  Solicite una visita
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011231 docClass-130 BranchOfficeInfoPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/datos-de-contacto/">
               <span class="jwIcon mid1011231" aria-hidden="true"></span>
               <span class="navTitle">
                  Contáctenos
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011232 docClass-130 BranchOfficeInfoPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/visitas-a-betel/">
               <span class="jwIcon mid1011232" aria-hidden="true"></span>
               <span class="navTitle">
                  Visitas a Betel
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011229 docClass-130 AppsLinkPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/reuniones/">
               <span class="jwIcon mid1011229" aria-hidden="true"></span>
               <span class="navTitle">
                  Reuniones
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011268 docClass-130 AppsLinkPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/conmemoracion/">
               <span class="jwIcon mid1011268" aria-hidden="true"></span>
               <span class="navTitle">
                  Conmemoración
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011230 docClass-130 AppsLinkPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/asambleas-anuales/">
               <span class="jwIcon mid1011230" aria-hidden="true"></span>
               <span class="navTitle">
                  Asambleas anuales
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011444 docClass-130 AboutUsActivitiesPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/qui%C3%A9nes-somos-y-qu%C3%A9-hacemos/">
               <span class="jwIcon mid1011444" aria-hidden="true"></span>
               <span class="navTitle">
                  Qué hacemos
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011656 docClass-130 CollectionIndexPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/experiencias/">
               <span class="jwIcon mid1011656" aria-hidden="true"></span>
               <span class="navTitle">
                  Experiencias
               </span>
            </a>
         </div>
      
         
         
         
         <div class="mobileNavLink lvl2 link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011537 docClass-130 AroundTheWorldPage" role="listitem">
            <a class="siteSectionTitle navTitleWrapper" href="/es/testigos-de-jehov%C3%A1/por-todo-el-mundo/">
               <span class="jwIcon mid1011537" aria-hidden="true"></span>
               <span class="navTitle">
                  Por todo el mundo
               </span>
            </a>
         </div>
      
      
      
         <div class="mobileNavLink lvl2 aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011228 docClass-130 AboutUsLandingPage" role="listitem">
            <a href='https://apps.jw.org/S_DONATE' target='_blank' class="navTitleWrapper" rel='noreferrer noopener'>
               <span class="navTitleIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-donation"></i>
               </span>
               <span class="navTitle">
                  Donaciones
               </span>
               <span class="srText">(abre una nueva ventana)</span>
            </a>
         </div>
      
      
   </div>


                     
                  
                     
                     
                  
                     
                     
                  
                     
                     
                  
                     
                     
                  
               

               
               <div class="mobileNavLink lvl1 link">
                  <a href='https://hub.jw.org/home/es' class="siteSectionTitle navTitleWrapper cms-clearfix" target='_blank' rel='noreferrer noopener'>
                     <span class="navTitleIcon">
                        <i class="jwf-jw-icons-external jwi-person-circle"></i>
                     </span>
                     <span class="navTitle">
                        INICIAR SESIÓN
                     </span>
                     <span class="srText">(abre una nueva ventana)</span>
                  </a>
               </div>
            </div>
            <div id="mobileNavShelf" class="rightPanel">
               <button type="button" id="mobileNavClose" class="closePanel" aria-labelledby="mobileNavOpen mobileNavClose">
                  <span class="closePanel-text srText">CERRAR</span>
                  <span class="closePanel-icon" aria-hidden="true">
                     <i class="jwf-jw-icons-external jwi-x"></i>
                  </span>
               </button>
            </div>
         </nav>
      </div>
   </header>
</div>


         

<div id="regionHeader" class="jsLockedChrome">
   <div class="wrapper">
      <div class="wrapperShadow">
         <header id="siteHeader">
            
            <div id="siteLogoPrint"><img src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/siteLogo-jworg-print.png" alt="" /></div>
            <div id="siteLogoPrintRTL"><img src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/images/siteLogo-jworg-print-rtl.png" alt="" /></div>
            <a id="siteLogo" href="/es/" title="Ir a la página de inicio de JW.ORG">
               <span class="srText">JW.ORG</span>
            </a>
            <div class="siteNameContainer">
               <h2 id="siteName">Testigos de Jehová</h2>
            </div>
            <div class="siteFeaturesContainer">
               <a class="tertiaryButton siteFeaturesItem jsChooseSiteLanguage" href="/es/choose-language?locale=es&prefer=lang&docid=202024247">
                  <span class="buttonIcon" aria-hidden="true">
                     <i class="jwf-jw-icons-external jwi-language"></i>
                  </span>
                  <span class="srText">Seleccionar idioma</span>
                  <span class="buttonText">español</span>
               </a>
               <a href='https://hub.jw.org/home/es' class="tertiaryButton siteFeaturesItem" target='_blank' rel='noreferrer noopener'>
                  <span class="buttonIcon" aria-hidden="true">
                     <i class="jwf-jw-icons-external jwi-person-circle"></i>
                  </span>
                  <span class="buttonText">Iniciar sesión</span>
                  <span class="srText">(abre una nueva ventana)</span>
               </a>
               
                  
                  <div class="siteSearchContainer siteFeaturesItem" role="search">
                     
<form class="siteSearch" action="/es/b%C3%BAsquedas/" method="GET">

  <input type="text" class="siteSearchKeywords" name="q" placeholder="Buscar" aria-label="Buscar palabra o frase" />
   
   <button type="submit" class="tertiaryButton siteSearchSubmit">
      <span class="buttonIcon" aria-hidden="true">
         <i class="jwf-jw-icons-external jwi-magnifying-glass"></i>
      </span>
      <span class="srText">Buscar</span>
   </button>
</form>


                  </div>
               
            </div>
         </header>
      </div>
   </div>
</div>



         

<div id="regionPrimaryNav" class="jsLockedChrome">
   <div class="wrapper">
      <div class="wrapperShadow cms-clearfix">
         
         
         <div id="primaryNavRegion" class="publications preferHTMLOverSubImg pub-sjj dir-ltr ml-S ms-ROMAN docId-1102016804 docClass-31 PublicationArticle">
            <nav role="navigation" aria-label="Primario" class="primaryNav">
               <ul class="primaryNavMenu jsDropdownNav">
                  
                  
                     <li class="primaryNavItem pub-ijw dir-ltr ml-S ms-ROMAN docId-1011200 docClass-130 HomePage">
                        <a class="iconLink"
                           href="/es/">
                           <span class="iconLink-icon jwIcon mid1011200" aria-hidden="true"></span>
                           <span class="iconLink-text">INICIO</span>
                        </a>
                     </li>
                  

                  
                  
                  
                     
                     
                        
                        
                     
                        
                        
                           
   <li class="primaryNavItem link bibleTeachings pub-ijw dir-ltr ml-S ms-ROMAN docId-1011201 docClass-130 BibleTeachings jsDropdownNavItem">
      <a class="iconLink jsDropdownNavButton"
         role="button"
         href="/es/ense%C3%B1anzas-b%C3%ADblicas/">
         <span class="iconLink-icon jwIcon mid1011201" aria-hidden="true"></span>
         <span class="iconLink-text">ENSEÑANZAS BÍBLICAS</span>
      </a>
      <ul class="subNav jsDropdownSubNav">
   <li class="subNavItem lvl1">
      <a class="iconLink"
         
         href="/es/ense%C3%B1anzas-b%C3%ADblicas/">
         <span class="iconLink-icon jwIcon mid1011201" aria-hidden="true"></span>
         <span class="iconLink-text">Enseñanzas bíblicas</span>
      </a>
   </li>
   <li class="subNavBody">
      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/">
               <span class="iconLink-icon jwIcon mid1011202" aria-hidden="true"></span>
               <span class="iconLink-text">Preguntas sobre la Biblia</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/textos-biblicos/">
               <span class="iconLink-icon jwIcon mid1011703" aria-hidden="true"></span>
               <span class="iconLink-text">Textos bíblicos explicados</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/programa-clases-particulares-biblia/">
               <span class="iconLink-icon jwIcon mid1011722" aria-hidden="true"></span>
               <span class="iconLink-text">Curso de la Biblia</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/ayudas-estudiar-biblia/">
               <span class="iconLink-icon jwIcon mid1011539" aria-hidden="true"></span>
               <span class="iconLink-text">Ayudas para estudiar la Biblia</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/felicidad-paz-interior/">
               <span class="iconLink-icon jwIcon mid1011556" aria-hidden="true"></span>
               <span class="iconLink-text">Felicidad y paz interior</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/familia/">
               <span class="iconLink-icon jwIcon mid1011205" aria-hidden="true"></span>
               <span class="iconLink-text">El matrimonio y la familia</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/j%C3%B3venes/">
               <span class="iconLink-icon jwIcon mid1011206" aria-hidden="true"></span>
               <span class="iconLink-text">Adolescentes y jóvenes adultos</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/ni%C3%B1os/">
               <span class="iconLink-icon jwIcon mid1011204" aria-hidden="true"></span>
               <span class="iconLink-text">Niños</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/fe-en-dios/">
               <span class="iconLink-icon jwIcon mid1011580" aria-hidden="true"></span>
               <span class="iconLink-text">Fe en Dios</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/ciencia/">
               <span class="iconLink-icon jwIcon mid1011552" aria-hidden="true"></span>
               <span class="iconLink-text">La Biblia y la ciencia</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/ense%C3%B1anzas-b%C3%ADblicas/historia-biblia/">
               <span class="iconLink-icon jwIcon mid1011569" aria-hidden="true"></span>
               <span class="iconLink-text">La Biblia y la historia</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      
   </li>
   <li class="subNavClose jsDropdownNavCloseButton">
      



<button type="button" class="">
   
   
   <span class="tertiaryButton  ">
      
         
            <span class="buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-x"></i>
            </span>
         
         
            <span class="srText">CERRAR</span>
         
      
   </span>
</button>



   </li>
</ul>

   </li>


                        
                     
                        
                        
                           
   <li class="primaryNavItem section publications pub-ijw dir-ltr ml-S ms-ROMAN docId-1011207 docClass-130 PublicationsFeaturedLandingPage jsDropdownNavItem">
      <a class="iconLink jsDropdownNavButton"
         role="button"
         href="/es/biblioteca/">
         <span class="iconLink-icon jwIcon mid1011207" aria-hidden="true"></span>
         <span class="iconLink-text">BIBLIOTECA</span>
      </a>
      <ul class="subNav jsDropdownSubNav">
   <li class="subNavItem lvl1">
      <a class="iconLink"
         
         href="/es/biblioteca/">
         <span class="iconLink-icon jwIcon mid1011207" aria-hidden="true"></span>
         <span class="iconLink-text">Biblioteca</span>
      </a>
   </li>
   <li class="subNavBody">
      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/biblia/">
               <span class="iconLink-icon jwIcon mid1011208" aria-hidden="true"></span>
               <span class="iconLink-text">Biblia en línea</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/revistas/">
               <span class="iconLink-icon jwIcon mid1011209" aria-hidden="true"></span>
               <span class="iconLink-text">Revistas</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/libros/">
               <span class="iconLink-icon jwIcon mid1011210" aria-hidden="true"></span>
               <span class="iconLink-text">Otras publicaciones</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/articulos/">
               <span class="iconLink-icon jwIcon mid1011678" aria-hidden="true"></span>
               <span class="iconLink-text">Catálogo de artículos</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
      <li class="subNavItem lvl2">
         <a class="iconLink" href="/es/biblioteca/videos/#es/categories/VODStudio">
            <span class="iconLink-icon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-jw-square"></i>
            </span>
            <span class="iconLink-text">JW Broadcasting<sup>®</sup></span>
         </a>
      </li>
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/videos/">
               <span class="iconLink-icon jwIcon mid1011214" aria-hidden="true"></span>
               <span class="iconLink-text">Videos</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/musica-canciones/">
               <span class="iconLink-icon jwIcon mid1011211" aria-hidden="true"></span>
               <span class="iconLink-text">Música</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/audio-representaciones-dram%C3%A1ticas/">
               <span class="iconLink-icon jwIcon mid1011212" aria-hidden="true"></span>
               <span class="iconLink-text">Obras teatrales en audio</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/lecturas-b%C3%ADblicas-dramatizadas/">
               <span class="iconLink-icon jwIcon mid1011213" aria-hidden="true"></span>
               <span class="iconLink-text">Lecturas dramatizadas de la Biblia</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/">
               <span class="iconLink-icon jwIcon mid1011529" aria-hidden="true"></span>
               <span class="iconLink-text">Guía de actividades</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/pautas/">
               <span class="iconLink-icon jwIcon mid1011752" aria-hidden="true"></span>
               <span class="iconLink-text">Pautas</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/biblioteca/ministerio-del-reino/">
               <span class="iconLink-icon jwIcon mid1013413" aria-hidden="true"></span>
               <span class="iconLink-text">Ministerio del Reino</span>
            </a>
            
         </li>
      
   

   
      <li class="subNavItem lvl2">
         <a href='https://wol.jw.org/wol/finder?wtlocale=S' class="iconLink"
            target='_blank'  rel='noreferrer noopener'>
            <span class="iconLink-icon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-watchtower-square"></i>
            </span>
            <span class="iconLink-text">Biblioteca en línea</span>
            <span class="srText">(abre una nueva ventana)</span>
         </a>
      </li>
   

   

   
</ul>

      
   </li>
   <li class="subNavClose jsDropdownNavCloseButton">
      



<button type="button" class="">
   
   
   <span class="tertiaryButton  ">
      
         
            <span class="buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-x"></i>
            </span>
         
         
            <span class="srText">CERRAR</span>
         
      
   </span>
</button>



   </li>
</ul>

   </li>


                        
                     
                        
                        
                           
   <li class="primaryNavItem link news pub-ijw dir-ltr ml-S ms-ROMAN docId-1011216 docClass-130 PaginatedArticleListPage">
      <a class="iconLink"
         
         href="/es/noticias/">
         <span class="iconLink-icon jwIcon mid1011216" aria-hidden="true"></span>
         <span class="iconLink-text">NOTICIAS</span>
      </a>
   </li>


                        
                     
                        
                        
                           
   <li class="primaryNavItem link aboutUs pub-ijw dir-ltr ml-S ms-ROMAN docId-1011228 docClass-130 AboutUsLandingPage jsDropdownNavItem">
      <a class="iconLink jsDropdownNavButton"
         role="button"
         href="/es/testigos-de-jehov%C3%A1/">
         <span class="iconLink-icon jwIcon mid1011228" aria-hidden="true"></span>
         <span class="iconLink-text">SOBRE NOSOTROS</span>
      </a>
      <ul class="subNav jsDropdownSubNav">
   <li class="subNavItem lvl1">
      <a class="iconLink"
         
         href="/es/testigos-de-jehov%C3%A1/">
         <span class="iconLink-icon jwIcon mid1011228" aria-hidden="true"></span>
         <span class="iconLink-text">Información sobre los testigos de Jehová</span>
      </a>
   </li>
   <li class="subNavBody">
      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/">
               <span class="iconLink-icon jwIcon mid1011233" aria-hidden="true"></span>
               <span class="iconLink-text">Preguntas frecuentes</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a href='/es/testigos-de-jehov%C3%A1/solicite-una-visita/' class="iconLink"  target='_blank' rel='noreferrer noopener'>
               <span class="iconLink-icon jwIcon mid502012232" aria-hidden="true"></span>
               <span class="iconLink-text">Solicite una visita</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/datos-de-contacto/">
               <span class="iconLink-icon jwIcon mid1011231" aria-hidden="true"></span>
               <span class="iconLink-text">Contáctenos</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/visitas-a-betel/">
               <span class="iconLink-icon jwIcon mid1011232" aria-hidden="true"></span>
               <span class="iconLink-text">Visitas a Betel</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/reuniones/">
               <span class="iconLink-icon jwIcon mid1011229" aria-hidden="true"></span>
               <span class="iconLink-text">Reuniones</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/conmemoracion/">
               <span class="iconLink-icon jwIcon mid1011268" aria-hidden="true"></span>
               <span class="iconLink-text">Conmemoración</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/asambleas-anuales/">
               <span class="iconLink-icon jwIcon mid1011230" aria-hidden="true"></span>
               <span class="iconLink-text">Asambleas anuales</span>
            </a>
            
         </li>
      
   

   

   

   
</ul>

      

      
         
<ul class="subNavLvl2Menu">
   
   
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/qui%C3%A9nes-somos-y-qu%C3%A9-hacemos/">
               <span class="iconLink-icon jwIcon mid1011444" aria-hidden="true"></span>
               <span class="iconLink-text">Qué hacemos</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/experiencias/">
               <span class="iconLink-icon jwIcon mid1011656" aria-hidden="true"></span>
               <span class="iconLink-text">Experiencias</span>
            </a>
            
         </li>
      
         <li class="subNavItem lvl2">
            <a class="iconLink"
               
               href="/es/testigos-de-jehov%C3%A1/por-todo-el-mundo/">
               <span class="iconLink-icon jwIcon mid1011537" aria-hidden="true"></span>
               <span class="iconLink-text">Por todo el mundo</span>
            </a>
            
         </li>
      
   

   

   
      <li class="subNavItem lvl2">
         <a href='https://apps.jw.org/S_DONATE' class="iconLink"
            target='_blank'  rel='noreferrer noopener'>
            <span class="iconLink-icon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-donation"></i>
            </span>
            <span class="iconLink-text">Donaciones</span>
            <span class="srText">(abre una nueva ventana)</span>
         </a>
      </li>
   

   
</ul>

      
   </li>
   <li class="subNavClose jsDropdownNavCloseButton">
      



<button type="button" class="">
   
   
   <span class="tertiaryButton  ">
      
         
            <span class="buttonIcon" aria-hidden="true">
               <i class="jwf-jw-icons-external jwi-x"></i>
            </span>
         
         
            <span class="srText">CERRAR</span>
         
      
   </span>
</button>



   </li>
</ul>

   </li>


                        
                     
                        
                        
                     
                        
                        
                     
                        
                        
                     
                        
                        
                     
                  
               </ul>
            </nav>
         </div>
         
      </div>
   </div>
</div>



         <div id="regionMain">
            <div class="wrapper">
               <div class="wrapperShadow cms-clearfix">
                  
<nav role="navigation" aria-label="Migas de pan" class="breadcrumbs jsBreadcrumbs jsScrollStateXAtStart jsScrollStateXAtEnd">
   <ol class="breadcrumbMenu jsScrollState" data-scroll-state-notify=".jsBreadcrumbs">
      
         <li class="breadcrumbItem">
            
               <a href="/es/biblioteca/">Biblioteca</a>
            
         </li>
      
         <li class="breadcrumbItem">
            
               <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/">Guía de actividades</a>
            
         </li>
      
         <li class="breadcrumbItem">
            
               <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/">Guía de actividades  |  Julio y agosto de 2024</a>
            
         </li>
      
   </ol>
</nav>


                  
<div id="otherLangRibbon" style="display: none">
   <p>¿Le gustaría leer este artículo en %%?</p>
   <div class="ribbonButtons">
      



<button type="button" class="jsYes">
   
   
   <span class="secondaryButton  langRibbonButton">
      
         
            
            
               <span class="buttonText">Sí</span>
            
         
      
   </span>
</button>



      



<button type="button" class="jsNo">
   
   
   <span class="secondaryButton  langRibbonButton">
      
         
            
            
               <span class="buttonText">No</span>
            
         
      
   </span>
</button>



   </div>
</div>

<div class="pubTitleBar layout-reading layout-sidebar">
   <div class="pubTitleControls">
      
   
      <div id="otherAvailLangs">
         
            <form action="https://www.jw.org/open" method="GET">
               <div class="form-field-autocomplete inline">
                  <label for="otherAvailLangsChooser">LEER EN</label>

                  
                     
                        <select name="locale"
                                id="otherAvailLangsChooser"
                                class="jsAutoComplete jsShowFeatured"
                                data-autocompleteclass="autoCompleteLanguageChoices"
                                data-max-columns="1"
                                data-featured-items-name="contentLanguageFilter">
                           
                              <option
                                 data-alternative-spellings="аԥсуа  "
                                 
                                 value="ab"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ab/%D0%B0%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0-%D0%B8%D1%88%D0%B0%D2%B3%D0%B0%D2%AD%D1%86%D3%99%D0%B0-%D0%B0%D0%B8%D0%B7%D0%B0%D1%80%D0%B0-%D0%B0%D1%83%D1%81%D1%83%D1%80%D0%B0%D1%82%D3%99-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D0%B8%D1%83%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%90%D0%B8%D0%B7%D0%B0%D1%80%D0%B0-%D2%B2%D2%9B%D1%8C%D1%8B%D1%80%D1%81%D0%B8%D0%B0%D0%BD%D1%82%D3%99-%D4%A5%D1%81%D2%AD%D0%B0%D0%B7%D0%B0%D0%B0%D1%80%D0%B5%D0%B8-%D2%B3%D0%BC%D0%B0%D2%B5%D0%B7%D1%83%D1%80%D0%B5%D0%B8-%D0%B0%D0%B8%D1%85%D1%88%D0%B0%D0%BD%D2%B5%D0%B0-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-12-%D0%B8%D0%BD%D0%B0%D1%80%D0%BA%D0%BD%D1%8B-18-%D0%BD%D3%A1%D0%B0-2024-%D1%82%D3%99%D0%B8-%D0%B0%D1%88%D1%8B%D2%9B%D3%99%D1%81/"
                                 data-lang-code="ABK"
                                 data-locale="ab">abjasio</option>
                           
                              <option
                                 data-alternative-spellings="Abua  "
                                 
                                 value="abn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/abn/arara%E1%BA%A1r-d%E1%BB%8B-omiteom/jw-meeting-workbook-abn/july-august-2024-mwb/Ede%E1%BB%8Dm-arara%E1%BA%A1r-il%E1%BB%8D-Ad%E1%BB%8Dl-Aghu%E1%B8%8Dum-Ony%E1%BB%8D-Akrist%E1%BA%B9n-rOgha%E1%BA%A1ph-Il%E1%BB%8D-Omh%E1%BA%A1r-ph%E1%BB%8D-wiki-August-12-18-2024/"
                                 data-lang-code="AU"
                                 data-locale="abn">abua</option>
                           
                              <option
                                 data-alternative-spellings="Abɛ Abe abe"
                                 
                                 value="aba"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/aba/Nakwafa/jw-dj%C9%9Bm%C9%9Bn-nakwa/agb%CA%8B%CA%8Bn-2024-av%C9%9B-l%C9%94h%CA%8Bn-ar%C9%A9-av%C9%9B-epi%C3%A8-mwb/Bun%C3%AB-eb%C3%A1-ewu-Ooh%CA%8Bn-l%C9%9B-jumandi-l%C9%9B-j%C9%9Bm%C9%9Bnn%C3%AB-eb%C3%A1-eshe-agb%CA%8B%CA%8Bn-2024-Av%C9%9B-epi%C3%A8-mici-12-18-gh%C3%AB/"
                                 data-lang-code="ABB"
                                 data-locale="aba">abé</option>
                           
                              <option
                                 data-alternative-spellings="Acholi  "
                                 
                                 value="ach"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ach/laibrari/jw-yub-me-cokke/julai-agucito-2024-mwb/Yub-me-Cokke-me-Kwowa-ki-Ticwa-pi-Agucito-12-18-2024/"
                                 data-lang-code="AC"
                                 data-locale="ach">acholi</option>
                           
                              <option
                                 data-alternative-spellings="Afrikaans  afrikaans"
                                 
                                 value="af"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/af/biblioteek/vergaderingwerkboek/julie-augustus-2024-mwb/Rooster-vir-die-Lewe-en-Bediening-vergadering-vir-12-18-Augustus-2024/"
                                 data-lang-code="AF"
                                 data-locale="af">afrikáans</option>
                           
                              <option
                                 data-alternative-spellings="Aɣɩnda  "
                                 
                                 value="aha"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/aha/awuuku-n%C9%A9%C9%A9-nninyeni-mv%CA%8Bl%C9%94/jw-D%C9%A9y%C9%9Bzumanl%C9%9B-D%C9%A9y%C9%9Bzumanl%C9%9B-K%C9%9Bl%C9%9Bta/july-august-2024-mwb/Y%C9%9B-Kilisinyian%C9%A9-%C6%90b%C9%A9law%C9%94l%C9%9B-N%C9%A9%C9%A9-Das%C9%A9l%C9%9Blil%C9%9B%E2%80%8B-D%C9%A9y%C9%9Bzumanl%C9%9B-K%C9%9Bl%C9%9Bta-Ma-August-12-18-2024/"
                                 data-lang-code="AHN"
                                 data-locale="aha">ahanta</option>
                           
                              <option
                                 data-alternative-spellings="Aymara  "
                                 
                                 value="ay"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ay/biblioteca/jw-tantach%C3%A4win-yatjjata%C3%B1ataki/julio-agosto-2024-mwb/Cristianjam-Jaka%C3%B1ataki-ukat-Yatiya%C3%B1ataki-12-18-de-agosto-2024/"
                                 data-lang-code="AP"
                                 data-locale="ay">aimara</option>
                           
                              <option
                                 data-alternative-spellings="Akha  "
                                 
                                 value="ahk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ahk/jah-do-ta-eu-je/jw-Baw%CB%ACdza%CB%AC-ngeh-Dzaw-eu-pa%CB%87dm%CB%AC/2024-ko-shi-si-ba-la-yeh-si-ba-la/2024-k%CA%BCo%EA%9E%88-Yeh%EA%9E%88-si%CB%AC-ba-la-12-18-Ka-li-za%CB%ACeu%CB%AC-deh%EA%9E%88-zi%CB%87-haw%CB%87eu-tsa%EA%9E%88-ga%CB%ACeu-ga%CB%87-m%CB%87eu-Baw%CB%AC-dza%CB%ACeu-sah%CB%AC-bo%EA%9E%88-a%CB%87-ta%EA%9E%88/"
                                 data-lang-code="AKA"
                                 data-locale="ahk">akha</option>
                           
                              <option
                                 data-alternative-spellings="Inakeanon  aklanon"
                                 
                                 value="akl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/akl/library/jw-nga-workbook-para-sa-miting/hulyo-agusto-2024-mwb/Iskedyul-it-Pagkabuhi-ag-Ministeryo-nga-Miting-Para-sa-Agusto-12-18-2024/"
                                 data-lang-code="IKN"
                                 data-locale="akl">aklanón</option>
                           
                              <option
                                 data-alternative-spellings="shqip  albanes"
                                 
                                 value="sq"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sq/biblioteke/jw-fletestudimi-per-mbledhje/korrik-gusht-2024-mwb/Programi-Jeta-dhe-sh%C3%ABrbimi-yn%C3%AB-i-krishter%C3%AB-p%C3%ABr-12-18-gusht-2024/"
                                 data-lang-code="AL"
                                 data-locale="sq">albanés</option>
                           
                              <option
                                 data-alternative-spellings="Deutsch  aleman"
                                 
                                 value="de"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/de/bibliothek/jw-arbeitsheft/juli-august-2024-mwb/Programm-f%C3%BCr-die-Leben-und-Dienst-Zusammenkunft-12-18-August-2024/"
                                 data-lang-code="X"
                                 data-locale="de">alemán</option>
                           
                              <option
                                 data-alternative-spellings="Plautdietsch  aleman bajo"
                                 
                                 value="pdt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pdt/bieekja-un-mea/jw-schoolheft/juli-august-2024-mwb/Plon-fa-daut-Toopkomen-fa-L%C3%A4wen-un-Deenst-vom-12-18-August-2024/"
                                 data-lang-code="LWX"
                                 data-locale="pdt">alemán bajo</option>
                           
                              <option
                                 data-alternative-spellings="алтай  "
                                 
                                 value="alt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/alt/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B%D2%A5-%D0%BA%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B8%D2%A5-%D1%82%D1%83%D1%88%D1%82%D0%B0%D0%B6%D1%83-%D0%B8%D1%88%D1%82%D0%B8%D2%A5-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%B8/%D1%98%D0%B0%D0%B0%D0%BD-%D0%B8%D0%B7%D3%B1-%D0%B0%D0%B9-%D0%BA%D1%83%D1%80%D0%B0%D0%BD-%D0%B0%D0%B9-2024-mwb/%D0%91%D0%B8%D1%81%D1%82%D0%B8%D2%A5-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%98%D3%B1%D1%80%D3%B1%D0%BC%D0%B8%D1%81-%D0%BB%D0%B5-%D0%B8%D0%B6%D0%B8%D0%B1%D0%B8%D1%81-%D0%B4%D0%B5%D0%B3%D0%B5%D0%BD-%D1%82%D1%83%D1%88%D1%82%D0%B0%D0%B6%D1%83%D0%BD%D1%8B%D2%A5-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7%D0%B8-2024-%D1%98%D1%8B%D0%BB-%D0%BA%D1%83%D1%80%D0%B0%D0%BD-%D0%B0%D0%B9-12-18/"
                                 data-lang-code="ALT"
                                 data-locale="alt">altaico</option>
                           
                              <option
                                 data-alternative-spellings="Alur  "
                                 
                                 value="alz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/alz/jamtic/jw-buku-coko/dwi-7-dwi-8-2024-mwb/Program-mi-coko-mi-Kwo-man-tic-pi-yenga-mi-nindo-12-18-dwi-mir-8-2024/"
                                 data-lang-code="ALU"
                                 data-locale="alz">aluro</option>
                           
                              <option
                                 data-alternative-spellings="阿美語  "
                                 
                                 value="ami"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ami/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A/saka-7-8-folad-2024-mwb/Mitosilay-ato-Nika%CB%88orip-Rayray-no-Sa%CB%88opo-Saka-8-Folad-12-18-Romi%CB%88ad-2024/"
                                 data-lang-code="AI"
                                 data-locale="ami">amis</option>
                           
                              <option
                                 data-alternative-spellings="አማርኛ  amarico"
                                 
                                 value="am"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/am/%E1%88%8B%E1%8B%AD%E1%89%A5%E1%88%A8%E1%88%AA/jw-%E1%8B%A8%E1%88%B5%E1%89%A5%E1%88%B0%E1%89%A3-%E1%8A%A0%E1%88%B5%E1%89%B0%E1%8B%8B%E1%8C%BD%E1%8A%A6/%E1%88%90%E1%88%9D%E1%88%8C-%E1%8A%90%E1%88%90%E1%88%B4-2024-mwb/%E1%8A%A8%E1%8A%90%E1%88%90%E1%88%B4-12-18-2024-%E1%8B%A8%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%93%E1%8B%8A-%E1%88%95%E1%8B%AD%E1%8B%88%E1%89%B5%E1%8A%93-%E1%8A%A0%E1%8C%88%E1%88%8D%E1%8C%8D%E1%88%8E%E1%89%B5-%E1%88%B5%E1%89%A5%E1%88%B0%E1%89%A3-%E1%8D%95%E1%88%AE%E1%8C%8D%E1%88%AB%E1%88%9D/"
                                 data-lang-code="AM"
                                 data-locale="am">amárico</option>
                           
                              <option
                                 data-alternative-spellings="Հայերեն  "
                                 
                                 value="hy"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hy/%D5%A3%D6%80%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6/jw-%D5%B0%D5%A1%D5%B6%D5%A4%D5%AB%D5%BA%D5%B4%D5%A1%D5%B6-%D5%B1%D5%A5%D5%BC%D5%B6%D5%A1%D6%80%D5%AF/%D5%B0%D5%B8%D6%82%D5%AC%D5%AB%D5%BD-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-2024-%D5%B0%D5%B1/%D5%84%D5%A5%D6%80-%D6%84%D6%80%D5%AB%D5%BD%D5%BF%D5%B8%D5%B6%D5%A5%D5%A1%D5%AF%D5%A1%D5%B6-%D5%AF%D5%B5%D5%A1%D5%B6%D6%84%D5%A8-%D6%87-%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8-%D5%B0%D5%A1%D5%B6%D5%A4%D5%AB%D5%BA%D5%B4%D5%A1%D5%B6-%D5%B1%D5%A5%D5%BC%D5%B6%D5%A1%D6%80%D5%AF-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD%D5%AB-12-18-2024/"
                                 data-lang-code="REA"
                                 data-locale="hy">armenio</option>
                           
                              <option
                                 data-alternative-spellings="Արեւմտահայերէն  "
                                 
                                 value="hyw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hyw/%D5%A3%D6%80%D5%A1%D5%A4%D5%A1%D6%80%D5%A1%D5%B6/%D5%AA%D5%B8%D5%B2%D5%B8%D5%BE%D5%AB-%D5%BF%D5%A5%D5%BF%D6%80/%D5%B5%D5%B8%D6%82%D5%AC%D5%AB%D5%BD-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-2024-%D5%AA%D5%BF/%D4%BF%D5%A5%D5%A1%D5%B6%D6%84-%D5%A5%D6%82-%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%AB%D6%82%D5%B6-%D5%AA%D5%B8%D5%B2%D5%B8%D5%BE%D5%AB-%D5%B5%D5%A1%D5%B5%D5%BF%D5%A1%D5%A3%D5%AB%D6%80-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-12-18-2024/"
                                 data-lang-code="R"
                                 data-locale="hyw">armenio occidental</option>
                           
                              <option
                                 data-alternative-spellings="অসমীয়া  asames"
                                 
                                 value="as"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/as/%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A7%B0%E0%A7%87%E0%A7%B0%E0%A7%80/jw-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A7%B0-%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%86%E0%A6%97%E0%A6%B7%E0%A7%8D%E0%A6%9F-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA-mwb/%E0%A6%9C%E0%A7%80%E0%A7%B1%E0%A6%A8-%E0%A6%86%E0%A7%B0%E0%A7%81-%E0%A6%AA%E0%A7%B0%E0%A6%BF%E0%A6%9A%E0%A7%B0%E0%A7%8D%E0%A6%AF%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A7%B0-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A7%A8%E0%A7%AF-%E0%A6%86%E0%A6%97%E0%A6%B7%E0%A7%8D%E0%A6%9F-%E0%A7%A7%E0%A7%A8-%E0%A7%A7%E0%A7%AE-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA/"
                                 data-lang-code="AE"
                                 data-locale="as">asamés</option>
                           
                              <option
                                 data-alternative-spellings="Ateso  "
                                 
                                 value="teo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/teo/elaiburare/jw-eitabo-loka-airiamununeta/elap-loikanyetaarei-elap-loikanyetauni-2024-mwb/Ainapeta-Nuka-Airiamununeta-Nuka-Aijar-ka-Alimonokin-Elap-Loikanyetauni-12-18-2024/"
                                 data-lang-code="IE"
                                 data-locale="teo">ateso</option>
                           
                              <option
                                 data-alternative-spellings="Akie  atie"
                                 
                                 value="ati"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ati/K%C9%9B-%CB%88k%C9%9B-%CB%88yi-han-t%C3%ABn-bu/jw-ya-lat%C9%94/jue-ut%C3%AB-mwb/%CB%88Gb%C3%B6m%C3%ABn-2024-n%C9%9Bn-Ut%C3%AB-l%C3%AB-12-18-%CB%88la-Sa-Keti%C9%9Bn-kale-%CB%88%CB%88k%C9%9B-nanm%C9%9B-sa-Z%C3%B6-gimaan-%CB%88e-%CB%88ya-%CB%88lab%C9%9Bn-%CB%88%CB%88k%C9%9B/"
                                 data-lang-code="ATI"
                                 data-locale="ati">atié</option>
                           
                              <option
                                 data-alternative-spellings="Okanisitongo  "
                                 
                                 value="djk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/djk/den-buku-anga-taa-sani-di-i-sa-fende/jw-komakandaa-buku/yuli-augustus-2024-mwb/A-libi-fu-wi-enke-Kelesten-anga-a-peleikiwooko-sikeima-fu-12-18-augustus-2024/"
                                 data-lang-code="AKN"
                                 data-locale="djk">aucano</option>
                           
                              <option
                                 data-alternative-spellings="Aja  aya"
                                 
                                 value="ajg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ajg/Wema-Ciwo-y%C3%AD-Li/jw-b%C9%94b%C9%94-nukplawema/juillet-ao%C3%BBt-2024-mwb/Agben%C9%94n%C9%94-ko%C9%96o-Sum%C9%94sum%C9%94d%C9%94-B%C9%94b%C9%94-Toto-12-18-Ao%C3%BBt-2024/"
                                 data-lang-code="AJG"
                                 data-locale="ajg">ayá</option>
                           
                              <option
                                 data-alternative-spellings="Azərbaycan Azarbaycan azeri"
                                 
                                 value="az"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/az/kitabxana/jw-ibadet-gorushu-ish-defteri/iyul-avqust-2024-mwb/M%C9%99sihi-h%C9%99yat%C4%B1-v%C9%99-ibad%C9%99ti-g%C3%B6r%C3%BC%C5%9F%C3%BCn%C3%BCn-2024-c%C3%BC-il-12-18-avqust-c%C9%99dv%C9%99li/"
                                 data-lang-code="AJR"
                                 data-locale="az">azerí</option>
                           
                              <option
                                 data-alternative-spellings="Aзәрбајҹан (кирил әлифбасы) Aзәрбајҹан кирил әлифбасы azeri (alfabeto cirilico) azeri alfabeto cirilico"
                                 
                                 value="az-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/az-cyrl/neshrler/jw-ibadet-gorushu-ish-defteri/iyul-avqust-2024-mwb/%D0%9C%D3%99%D1%81%D0%B8%D2%BB%D0%B8-%D2%BB%D3%99%D1%98%D0%B0%D1%82%D1%8B-%D0%B2%D3%99-%D0%B8%D0%B1%D0%B0%D0%B4%D3%99%D1%82%D0%B8-%D2%9D%D3%A9%D1%80%D2%AF%D1%88%D2%AF%D0%BD%D2%AF%D0%BD-2024-%D2%B9%D2%AF-%D0%B8%D0%BB-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D2%B9%D3%99%D0%B4%D0%B2%D3%99%D0%BB%D0%B8/"
                                 data-lang-code="AJ"
                                 data-locale="az-cyrl">azerí (alfabeto cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="Bamanankan  "
                                 
                                 value="bm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bm/bibiliyot%C9%9Bki/jw-laje-seben/san-2024-zuluyekalo-utikalo-mwb/San-2024-Utikalo-tile-12-18-ka-Krec%C9%9Bnya-ni-waajulibaara-laj%C9%9B-porogaramu/"
                                 data-lang-code="AR"
                                 data-locale="bm">bambara</option>
                           
                              <option
                                 data-alternative-spellings="башҡорт  "
                                 
                                 value="ba"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ba/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/%D0%B9%D3%99%D2%BB%D2%AF%D3%99-%D1%88%D0%B0%D2%BB%D0%B8%D1%82%D1%82%D0%B0%D1%80%D1%8B-%D0%BE%D1%81%D1%80%D0%B0%D1%88%D1%8B%D1%83-%D1%8D%D1%88-%D0%B4%D3%99%D1%84%D1%82%D3%99%D1%80%D0%B5/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B9%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%B0%D2%99%D0%BD%D0%B0%D2%BB%D1%8B-%D3%A9%D1%81%D3%A9%D0%BD-%D0%9C%D3%99%D1%81%D0%B8%D1%85%D1%81%D0%B5%D0%BB%D3%99%D1%80-%D1%82%D0%BE%D1%80%D0%BC%D0%BE%D1%88%D0%BE-%D2%BB%D3%99%D0%BC-%D1%85%D0%B5%D2%99%D0%BC%D3%99%D1%82%D0%B5-%D0%BE%D1%81%D1%80%D0%B0%D1%88%D1%8B%D1%83%D1%8B%D0%BD%D1%8B%D2%A3-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D2%BB%D1%8B/"
                                 data-lang-code="BAK"
                                 data-locale="ba">bashkir</option>
                           
                              <option
                                 data-alternative-spellings="Basaa (Kamerun) Basaa Kamerun bassa de Camerun"
                                 
                                 value="bas"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bas/bikaat/jw-kaat-makoda-ma-nem-sonde/njeba-hikan-2024-mwb/Ni%C3%B1-y%C3%A9s-ni-nson-w%C3%A9s-ntjega-inyu-12-18-Hika%C3%B1-2024/"
                                 data-lang-code="BS"
                                 data-locale="bas">bassa de Camerún</option>
                           
                              <option
                                 data-alternative-spellings="Ɓǎsɔ́ɔ̀ (Ɖàbíɖà) Bǎsóò (Dàbídà) Bǎsóò Dàbídà "
                                 
                                 value="bsq"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bsq/c%C3%A9%C3%A8-d%C9%9B%CC%80-dyi-d%C3%A8%C3%ACn-na%C3%ADn/jw-%C9%96%C9%9B-c%C9%9B%CC%83%CC%81-c%C3%A8%C3%A8-%C9%96%C9%9B%CC%80/k%C3%A1n%C3%A1-dy%C3%B9-w%C3%A8-k%C3%A1n%C3%A1-v%C9%9B%CC%80n%C9%9B%CC%80-2024-mwb/C%C4%A9%CC%81-C%C4%A9%CC%81-K%C3%A8-K%C5%A9%CC%80%C3%A0-Dy%C3%AD-Po%C3%ACn-Po%C3%ACn-Na%C9%93a%C3%A0-C%C3%A8%C3%A8-%C3%90%C9%9B%CC%80-%C6%81%C3%B3-K%C3%A1n%C3%A1-V%C9%9B%CC%80n%C9%9B%CC%80-12-18-2024-B%C3%AC%C3%AC/"
                                 data-lang-code="BA"
                                 data-locale="bsq">bassa de Liberia</option>
                           
                              <option
                                 data-alternative-spellings="Batak (Karo) Batak Karo "
                                 
                                 value="btx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/btx/perpustakan/jw-agenda-perpulungen/mwb-juli-agustus-2024/Jadwal-Perpulungen-Pelayanen-ras-Kegeluhen-Kristen-12-18-Agustus-2024/"
                                 data-lang-code="AK"
                                 data-locale="btx">batako karo</option>
                           
                              <option
                                 data-alternative-spellings="Batak (Toba) Batak Toba "
                                 
                                 value="bbc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bbc/perpustakaan/jw-na-laho-diparsiajari/juli-agustus-2024-mwb/Jadwal-Parpunguan-Hangoluan-dohot-Pangkobasion-12-18-Agustus-2024/"
                                 data-lang-code="BT"
                                 data-locale="bbc">batako toba</option>
                           
                              <option
                                 data-alternative-spellings="Wawle  baule"
                                 
                                 value="bci"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bci/fluwa-mun/jw-a%C9%B2ia-fluwa/2024-zuie-utu-mwb/Afu%C9%9B-2024-Utu-12-18-nun-Klisifu%C9%9B-mun-nin-be-junmann-a%C9%B2ian-i-siesiel%C9%9B/"
                                 data-lang-code="AO"
                                 data-locale="bci">baulé</option>
                           
                              <option
                                 data-alternative-spellings="Bicol  "
                                 
                                 value="bcl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bcl/librarya/jw-workbook-para-sa-pagtiripon/hulyo-agosto-2024-mwb/Iskedyul-sa-Pagtiripon-na-Pamumuhay-Asin-Ministeryo-Para-sa-Agosto-12-18-2024/"
                                 data-lang-code="BI"
                                 data-locale="bcl">becol</option>
                           
                              <option
                                 data-alternative-spellings="বাংলা  bengali"
                                 
                                 value="bn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bn/%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B0%E0%A6%BF/%E0%A6%AF%E0%A6%BF%E0%A6%B9%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%9C%E0%A7%81%E0%A6%B2%E0%A6%BE%E0%A6%87-%E0%A6%86%E0%A6%97%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A6%BE/%E0%A6%96%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8-%E0%A6%93-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%9A%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B8%E0%A6%AD%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-%E0%A6%86%E0%A6%97%E0%A6%B8%E0%A7%8D%E0%A6%9F-%E0%A7%A7%E0%A7%A8-%E0%A7%A7%E0%A7%AE-%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA/"
                                 data-lang-code="BE"
                                 data-locale="bn">bengalí</option>
                           
                              <option
                                 data-alternative-spellings="ˈBhɛtɩgbʋʋ ˈBhetɩgbvv "
                                 
                                 value="btg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/btg/d%C9%9B%C9%9B-lii-y%C9%A9-%CB%88wl%CA%8B%C3%A4-z%C9%9Bm%C3%B6-w%CA%8B%C3%A4/jw-%CB%88wluy%C9%A9bh%C3%A4y%C9%A9bh%CA%8B-%CB%88b%C9%94g%CA%8B/zwie-ut%C9%A9-2024-mwb/Kl%C9%A9t%C9%A9%C9%9Bz%C9%A9kpaa-%CB%88n-lag%C9%94w%C9%9Bl%C9%A9bialibhoo-a-%CB%88wluy%C9%A9bh%C3%A4y%C9%A9bh%CA%8B%CA%8B-a-yl%C9%A9d%C9%A9d%C9%A9%C9%9B-Ut%C9%A9-12-18-2024/"
                                 data-lang-code="ET"
                                 data-locale="btg">bete</option>
                           
                              <option
                                 data-alternative-spellings="မြန်မာ  "
                                 
                                 value="my"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/my/%E1%80%85%E1%80%AC%E1%80%80%E1%80%BC%E1%80%8A%E1%80%B7%E1%80%BA%E1%80%90%E1%80%AD%E1%80%AF%E1%80%80%E1%80%BA/jw-%E1%80%9C%E1%80%B1%E1%80%B7%E1%80%80%E1%80%BB%E1%80%84%E1%80%B7%E1%80%BA%E1%80%81%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%85%E1%80%AC%E1%80%85%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA/%E1%80%87%E1%80%B0%E1%80%9C%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%82%E1%81%80%E1%81%82%E1%81%84-mwb/%E1%81%82%E1%81%80%E1%81%82%E1%81%84-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%81%E1%81%82-%E1%81%81%E1%81%88-%E1%80%A1%E1%80%90%E1%80%BD%E1%80%80%E1%80%BA-%E1%80%A1%E1%80%9E%E1%80%80%E1%80%BA%E1%80%90%E1%80%AC%E1%80%94%E1%80%B2%E1%80%B7-%E1%80%A1%E1%80%99%E1%80%BE%E1%80%AF%E1%80%86%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA%E1%80%9C%E1%80%AF%E1%80%95%E1%80%BA%E1%80%84%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%8A%E1%80%BA%E1%80%B8%E1%80%A1%E1%80%9D%E1%80%B1%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%AE%E1%80%A1%E1%80%85%E1%80%89%E1%80%BA%E1%80%87%E1%80%9A%E1%80%AC%E1%80%B8/"
                                 data-lang-code="BU"
                                 data-locale="my">birmano</option>
                           
                              <option
                                 data-alternative-spellings="Bislama  "
                                 
                                 value="bi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bi/laebri/jw-buk-blong-miting/julae-ogis-2024-mwb/Program-Blong-Kristin-Wok-Mo-Laef-Blong-12-18-Ogis-2024/"
                                 data-lang-code="LM"
                                 data-locale="bi">bislama</option>
                           
                              <option
                                 data-alternative-spellings="Bulu  "
                                 
                                 value="bum"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bum/bekalate/jw-esulan-kalate-esae/ngone-zangbwale-ngone-muamo-mbu-2024-mwb/Ntaane-mam-asu-%C3%A9sulane-ya-sond%C3%B4-atat%C3%A9-Ngone-muam%C3%B4-12-%E2%81%A018-mbu-2024/"
                                 data-lang-code="BO"
                                 data-locale="bum">boulou</option>
                           
                              <option
                                 data-alternative-spellings="български  bulgaro"
                                 
                                 value="bg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bg/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B0-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%BA%D0%B0/%D1%8E%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%B7%D0%B0-%D0%A1%D1%8A%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B5%D1%82%D0%BE-%D0%B7%D0%B0-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D0%BA%D0%B8-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B7%D0%B0-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%D0%B3/"
                                 data-lang-code="BL"
                                 data-locale="bg">búlgaro</option>
                           
                              <option
                                 data-alternative-spellings="Taqbaylit  cabile"
                                 
                                 value="kab"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kab/tamkar%E1%B8%8Dit/jw-tazmamt-tem%C9%9Bict-d-leqdic/mwb-yulyu-%C9%A3uct-2024/Ahil-n-unejmu%C9%9B-Tam%C9%9Bict-d-leqdic-si-12-ar-18-%C9%A3uct-2024/"
                                 data-lang-code="KBY"
                                 data-locale="kab">cabilé</option>
                           
                              <option
                                 data-alternative-spellings="Kabuverdianu  "
                                 
                                 value="kea"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kea/biblioteka/folhetu-di-studu-pa-runion/mwb-julhu-agostu-2024/Prugrama-di-runion-Vida-i-pregason-di-12-ti-18-di-agostu-di-2024/"
                                 data-lang-code="KBV"
                                 data-locale="kea">caboverdiano</option>
                           
                              <option
                                 data-alternative-spellings="ខ្មែរ  "
                                 
                                 value="km"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/km/%E1%9E%94%E1%9E%8E%E1%9F%92%E1%9E%8E%E1%9E%B6%E1%9E%9B%E1%9F%90%E1%9E%99/jw-%E1%9E%80%E1%9F%86%E1%9E%8E%E1%9E%8F%E1%9F%8B-%E1%9E%9F%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%94%E1%9F%8B-%E1%9E%80%E1%9E%B7%E1%9E%85%E1%9F%92%E1%9E%85%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%87%E1%9E%BB%E1%9F%86/%E1%9E%81%E1%9F%82%E1%9E%80%E1%9E%80%E1%9F%92%E1%9E%80%E1%9E%8A%E1%9E%B6-%E1%9E%81%E1%9F%82%E1%9E%9F%E1%9E%B8%E1%9E%A0%E1%9E%B6-%E1%9F%A2%E1%9F%A0%E1%9F%A2%E1%9F%A4-mwb/%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%98%E2%80%8B%E1%9E%9C%E1%9E%B7%E1%9E%92%E1%9E%B8%E2%80%8B%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%87%E1%9E%BB%E1%9F%86%E2%80%8B%E1%9E%9F%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%94%E1%9F%8B%E2%80%8B%E1%9E%80%E1%9E%B7%E1%9E%85%E1%9F%92%E1%9E%85%E2%80%8B%E1%9E%94%E1%9E%98%E1%9F%92%E1%9E%9A%E1%9E%BE%E2%80%8B%E1%9E%93%E1%9E%B7%E1%9E%84%E2%80%8B%E1%9E%87%E1%9E%B8%E1%9E%9C%E1%9E%B7%E1%9E%8F-%E1%9E%90%E1%9F%92%E1%9E%84%E1%9F%83%E2%80%8B%E1%9E%91%E1%9E%B8%E2%80%8B%E1%9F%A1%E1%9F%A2%E2%80%8B-%E2%80%8B%E1%9F%A1%E1%9F%A8-%E1%9E%81%E1%9F%82%E2%80%8B%E1%9E%9F%E1%9E%B8%E1%9E%A0%E1%9E%B6-%E1%9E%86%E1%9F%92%E1%9E%93%E1%9E%B6%E1%9F%86%E2%80%8B%E1%9F%A2%E1%9F%A0%E1%9F%A2%E1%9F%A4/"
                                 data-lang-code="CB"
                                 data-locale="km">camboyano</option>
                           
                              <option
                                 data-alternative-spellings="català catala catalan"
                                 
                                 value="cat"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cat/biblioteca/quadern/juliol-agost-2024-mwb/Programa-per-a-la-reuni%C3%B3-Vida-i-predicaci%C3%B3-12-18-dagost-de-2024/"
                                 data-lang-code="AN"
                                 data-locale="cat">catalán</option>
                           
                              <option
                                 data-alternative-spellings="Cebuano  "
                                 
                                 value="ceb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ceb/librarya/jw-workbook-sa-tigom/hulyo-agosto-2024-mwb/Eskedyul-sa-Tigom-nga-Kinabuhi-ug-Ministeryo-Para-sa-Agosto-12-18-2024/"
                                 data-lang-code="CV"
                                 data-locale="ceb">cebuano</option>
                           
                              <option
                                 data-alternative-spellings="Chavacano  "
                                 
                                 value="cbk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cbk/library/jw-miting-workbook/julio-agosto-2024-mwb/Schedule-de-Vida-y-Ministerio-de-Cristiano-Para-na-Agosto-12-18-2024/"
                                 data-lang-code="CC"
                                 data-locale="cbk">chabacano</option>
                           
                              <option
                                 data-alternative-spellings="xiChangana (Moçambique) xiChangana (Mocambique) xiChangana Mocambique changana mozambique"
                                 
                                 value="tso-mz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tso-mz/bibliyoteka/jw-swibukwana-mintlhanganu/mwb-wa-julho-ku-ya-ka-agosto-wa-2024/Xiyimiso-Xa-Mintlhanganu-Ya-Mahanyelo-Ni-Ntirho-Wa-Hina-Wa-Wukreste-Xa-12-Ku-Ya-Ka-18-Ka-Agosto-Wa-2024/"
                                 data-lang-code="CGM"
                                 data-locale="tso-mz">changana (mozambique)</option>
                           
                              <option
                                 data-alternative-spellings="čeština cestina "
                                 
                                 value="cs"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cs/knihovna/jw-pracovni-sesit/cervenec-srpen-2024-mwb/Program-shrom%C3%A1%C5%BEd%C4%9Bn%C3%AD-N%C3%A1%C5%A1-k%C5%99es%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-v-t%C3%BDdnu-12-18-srpna-2024/"
                                 data-lang-code="B"
                                 data-locale="cs">checo</option>
                           
                              <option
                                 data-alternative-spellings="адыгэбзэ  cherkes kabardino"
                                 
                                 value="kbd"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kbd/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D1%8D/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D1%8D-%D0%B8-%D1%89%D1%8B%D1%85%D1%8C%D1%8D%D1%82%D1%85%D1%8D%D0%BC-%D0%B7%D1%8D%D0%86%D1%83%D1%89%D0%86%D1%8D-%D0%B4%D1%8B%D0%B7%D1%8D%D1%80%D1%8B%D0%BB%D0%B0%D0%B6%D1%8C%D1%8D-%D1%82%D1%85%D1%8B%D0%BB%D1%8A/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%94%D0%B8-%D0%B3%D1%8A%D0%B0%D1%89%D0%86%D1%8D%D0%BC%D1%80%D1%8D-%D0%BB%D1%8D%D0%B6%D1%8C%D1%8B%D0%B3%D1%8A%D1%8D-%D0%BB%D1%8A%D0%B0%D0%BF%D0%86%D1%8D%D0%BC%D1%80%D1%8D-%D0%B6%D1%8B%D1%85%D1%83%D0%B8%D0%86%D1%8D-%D0%B7%D1%8D%D0%86%D1%83%D1%89%D0%86%D1%8D%D0%BC-%D0%B8-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D1%80-%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%D1%8B%D0%BC-%D0%B8-12-18-2024-%D0%B3%D1%8A%D1%8D/"
                                 data-lang-code="KBR"
                                 data-locale="kbd">cherkés kabardino</option>
                           
                              <option
                                 data-alternative-spellings="Chichewa  "
                                 
                                 value="ny"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ny/laibulale/jw-msonkhano-ndandanda/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Utumiki-Komanso-Moyo-Wathu-wa-Chikhristu-ya-August-12-18-2024/"
                                 data-lang-code="CN"
                                 data-locale="ny">chichewa</option>
                           
                              <option
                                 data-alternative-spellings="Tshiluba  "
                                 
                                 value="lua"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lua/tshitekelu-tshia-mikanda/mabeji-a-tshisangilu-ku-jw/mwb-7-8-2024/Programe-wa-tshisangilu-tshia-Nsombelu-ne-mudimu-wetu-bua-lumingu-lua-dia-12-1882024/"
                                 data-lang-code="SH"
                                 data-locale="lua">chiluba</option>
                           
                              <option
                                 data-alternative-spellings="Chin (Hakha) Chin Hakha "
                                 
                                 value="cnh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cnh/library/jw-tuahchunhnak-cauk/july-august-2024-mwb/2024-August-12-18-caah-Nunning-Le-Rian%E1%B9%ADuannak-Program/"
                                 data-lang-code="HK"
                                 data-locale="cnh">chin haka</option>
                           
                              <option
                                 data-alternative-spellings="中文简体（广东话）  chino cantones (simplificado) chino cantones simplificado"
                                 
                                 value="yue-hans"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yue-hans/%E5%A4%9A%E5%AA%92%E4%BD%93%E5%9B%BE%E4%B9%A6%E9%A6%86/%E8%80%B6%E5%92%8C%E5%8D%8E%E8%A7%81%E8%AF%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C/%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E4%BC%A0%E9%81%93%E4%B8%8E%E7%94%9F%E6%B4%BB%E8%81%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CNS"
                                 data-locale="yue-hans">chino cantonés (simplificado)</option>
                           
                              <option
                                 data-alternative-spellings="中文繁體（廣東話）  chino cantones (tradicional) chino cantones tradicional"
                                 
                                 value="yue-hant"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yue-hant/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8C/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CHC"
                                 data-locale="yue-hant">chino cantonés (tradicional)</option>
                           
                              <option
                                 data-alternative-spellings="中文简体（普通话）  chino mandarin (simplificado) chino mandarin simplificado"
                                 
                                 value="cmn-hans"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cmn-hans/%E5%A4%9A%E5%AA%92%E4%BD%93%E5%9B%BE%E4%B9%A6%E9%A6%86/%E8%80%B6%E5%92%8C%E5%8D%8E%E8%A7%81%E8%AF%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C/%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E4%BC%A0%E9%81%93%E4%B8%8E%E7%94%9F%E6%B4%BB%E8%81%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CHS"
                                 data-locale="cmn-hans">chino mandarín (simplificado)</option>
                           
                              <option
                                 data-alternative-spellings="中文繁體（國語）  chino mandarin (tradicional) chino mandarin tradicional"
                                 
                                 value="cmn-hant"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cmn-hant/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CH"
                                 data-locale="cmn-hant">chino mandarín (tradicional)</option>
                           
                              <option
                                 data-alternative-spellings="Chitonga  "
                                 
                                 value="toi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/toi/laibbulali/jw-kabbuku-kamuswaangano/july-august-2024-mwb/Mulongo-wa-Muswaangano-Wabuumi-Amulimo-Wamu-August-12-18-2024/"
                                 data-lang-code="CG"
                                 data-locale="toi">chitonga</option>
                           
                              <option
                                 data-alternative-spellings="Chitonga (Malawi) Chitonga Malawi "
                                 
                                 value="tog"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tog/layibulare/jw-unganu-kabuku/july-august-2024-mwb/Ndondomeku-ya-Unganu-wa-Umoyu-Widu-Ndipuso-Ute%C5%B5eti-ya-August-12-18-2024/"
                                 data-lang-code="CT"
                                 data-locale="tog">chitonga de Malaui</option>
                           
                              <option
                                 data-alternative-spellings="Chitonga (Zimbabwe) Chitonga Zimbabwe "
                                 
                                 value="toi-zw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/toi-zw/mabbuku/kabbuku-kamuswaangano-kajanika-ajw/july-august-2024-mwb/Pulogilamu-yaMuswaangano-waBuumi-Amulimu-Wesu-yamuAugust-12-%E2%80%8B18-2024/"
                                 data-lang-code="CGW"
                                 data-locale="toi-zw">chitonga de Zimbabue</option>
                           
                              <option
                                 data-alternative-spellings="Chitumbuka  "
                                 
                                 value="tum"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tum/layibulare/jw-kabuku-ka-maungano/julayi-ogasiti-2024-mwb/Ndondomeko-ya-Ungano-wa-Ute%C5%B5eti-na-Umoyo-Wachikhristu-ya-Ogasiti-12-18-2024/"
                                 data-lang-code="TB"
                                 data-locale="tum">chitumbuka</option>
                           
                              <option
                                 data-alternative-spellings="Chiyao  "
                                 
                                 value="yao"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yao/mabuku/jw-msongano-yakutendekwa/julayi-ogasiti-2024-mwb/Ndandanda-ja-Utumiki-ni-Umi-Wetu-Wachiklistu-ja-Ogasiti-12-18-2024/"
                                 data-lang-code="YA"
                                 data-locale="yao">chiyao</option>
                           
                              <option
                                 data-alternative-spellings="Chokwe  "
                                 
                                 value="cjk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cjk/utulikilo/jw-mukanda-wakuzachisa-ha-kukunguluka/julho-agosot-2024-mwb/Katalilo-wa-Kukunguluka-cha-Mwono-Wetu-ni-Mulimo-Wetu-ha-12-18-Agosto-2024/"
                                 data-lang-code="CK"
                                 data-locale="cjk">chokue</option>
                           
                              <option
                                 data-alternative-spellings="ch'ol chol "
                                 
                                 value="ctu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ctu/biblioteca/jun-tempa-subtan-melbal-xnoptan/julio-agosto-2024-mwb/I-Subt%CA%BCan-yic%CA%BCot-i-Melbal-ji%C3%B1i-x%C3%91opt%CA%BCan-12-18-cha%CA%BCan-agosto-2024/"
                                 data-lang-code="CHL"
                                 data-locale="ctu">chol</option>
                           
                              <option
                                 data-alternative-spellings="Txitxopi  "
                                 
                                 value="cce"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cce/bhibhiliyoteka/jw-dibhuku-da-mtshangano/julho-agosto-2024-mwb/Mahanyelo-athu-a-Wukristu-ni-mthumo-wo-txhumayela-12-18-ka-Agosto-wa-2024/"
                                 data-lang-code="CPI"
                                 data-locale="cce">chopi</option>
                           
                              <option
                                 data-alternative-spellings="Etxuwabo  "
                                 
                                 value="chw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/chw/bibiliyoteka/jw-nivuru-na-mabasa-a-matugumano/julyu-agosto-2024-mwb/Porogarama-ya-Mabasa-na-Yeddelo-Yehu-ya-Okristu-12-18-ya-Agosto-2024/"
                                 data-lang-code="CO"
                                 data-locale="chw">chuabo</option>
                           
                              <option
                                 data-alternative-spellings="Chuuk  chuukes"
                                 
                                 value="chk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/chk/library/jw-mwich-minen-kae/july-august-2024-mwb/Manawach-me-Ach-Angangen-Afalafal-K%C3%B3kk%C3%B3tun-Mwiich-August-12-18-2024/"
                                 data-lang-code="TE"
                                 data-locale="chk">chuukés</option>
                           
                              <option
                                 data-alternative-spellings="чӑвашла  "
                                 
                                 value="cv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cv/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0-%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D3%97%D1%81%D0%B5%D0%BD-%D3%97%D2%AB-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D1%87%D3%97/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%83%D1%80%D0%BD%D3%91%D2%AB%D0%BF%D0%B0-%D1%81%D3%91%D0%B2%D0%B0%D0%BF%D0%BB%D3%91-%D3%97%D2%AB-%D1%82%D3%97%D0%BB%D0%BF%D1%83%D0%BB%D3%91%D0%B2%D3%91%D0%BD-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B9%D3%97-2024-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D3%91%D0%BD-12-18/"
                                 data-lang-code="CU"
                                 data-locale="cv">chuvash</option>
                           
                              <option
                                 data-alternative-spellings="Cibemba  "
                                 
                                 value="bem"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bem/impapulo/jw-akatabo-ka-kubomfya-pa-kulongana/july-august-2024-mwb/Umutande-wa-Ukulongana-kwa-Imikalile-no-Mulimo-Tubomba-August-12-18-2024/"
                                 data-lang-code="CW"
                                 data-locale="bem">cibemba</option>
                           
                              <option
                                 data-alternative-spellings="Cinamwanga  "
                                 
                                 value="mwn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mwn/amabuku/akalibuku-ka-kuwonvya-pa-kulongana-aka-pa-jw/july-august-2024-mwb/Ukutantika-Ukulongana-kwa-Mikalile-nu-Mulimo-Wuno-Tukawomba-mu-August-12-18-2024/"
                                 data-lang-code="NM"
                                 data-locale="mwn">cinamwanga</option>
                           
                              <option
                                 data-alternative-spellings="සිංහල  cingales"
                                 
                                 value="si"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/si/%E0%B6%BD%E0%B6%BA%E0%B7%92%E0%B6%B6%E0%B7%8A%E2%80%8D%E0%B6%BB%E0%B6%BB%E0%B7%92/jw-%E0%B6%A2%E0%B7%93%E0%B7%80%E0%B7%92%E0%B6%AD%E0%B6%BA-%E0%B7%83%E0%B7%84-%E0%B6%AF%E0%B7%9A%E0%B7%80%E0%B7%83%E0%B7%9A%E0%B7%80%E0%B6%BA-%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B6%B4%E0%B7%9C%E0%B6%AD/%E0%B6%A2%E0%B7%96%E0%B6%BD%E0%B7%92-%E0%B6%85%E0%B6%9C%E0%B7%9D%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B7%94-2024-mwb/%E0%B6%A2%E0%B7%93%E0%B7%80%E0%B7%92%E0%B6%AD%E0%B6%BA-%E0%B7%83%E0%B7%84-%E0%B6%AF%E0%B7%9A%E0%B7%80%E0%B7%83%E0%B7%9A%E0%B7%80%E0%B6%BA-%E0%B7%83%E0%B6%B3%E0%B7%84%E0%B7%8F-%E0%B6%BB%E0%B7%90%E0%B7%83%E0%B7%8A%E0%B7%80%E0%B7%93%E0%B6%B8%E0%B7%9A-%E0%B7%80%E0%B7%90%E0%B6%A9%E0%B7%83%E0%B6%A7%E0%B7%84%E0%B6%B1-2024-%E0%B6%85%E0%B6%9C%E0%B7%9D%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B7%94-12-18/"
                                 data-lang-code="SN"
                                 data-locale="si">cingalés</option>
                           
                              <option
                                 data-alternative-spellings="Kikongo (Rép. dém. du congo) Kikongo (Rep. dem. du congo) Kikongo Rep dem du congo "
                                 
                                 value="kg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kg/biblioteke/jw-mukanda-ya-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Manaka-ya-Lukutakanu-Luzingu-mpi-Kisalu-ya-12-18-Ao%C3%BBt-2024/"
                                 data-lang-code="MK"
                                 data-locale="kg">congo</option>
                           
                              <option
                                 data-alternative-spellings="한국어  "
                                 
                                 value="ko"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ko/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/%EC%97%AC%ED%98%B8%EC%99%80%EC%9D%98-%EC%A6%9D%EC%9D%B8-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/2024%EB%85%84-7%EC%9B%94-8%EC%9B%94-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/%EC%83%9D%ED%99%9C%EA%B3%BC-%EB%B4%89%EC%82%AC-%EC%A7%91%ED%9A%8C-%EA%B3%84%ED%9A%8D%ED%91%9C-2024%EB%85%84-8%EC%9B%94-12-18%EC%9D%BC/"
                                 data-lang-code="KO"
                                 data-locale="ko">coreano</option>
                           
                              <option
                                 data-alternative-spellings="Kréyol Matinik Kreyol Matinik "
                                 
                                 value="gcf-x-mtc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gcf-x-mtc/bibiyotek/jw-kaye-vi-epi-ministe/mwb-juiye-out-2024/Pwogram-pou-r%C3%A9yinion-Lavi-%C3%A9pi-minist%C3%A8-pou-simenn-12-o-18-out-2024/"
                                 data-lang-code="MTC"
                                 data-locale="gcf-x-mtc">criollo de Martinica</option>
                           
                              <option
                                 data-alternative-spellings="Kréol Rénioné Kreol Renione criollo de Reunion"
                                 
                                 value="rcf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rcf/bibliot%C3%A8k/jw-kaye-vi-ek-predikasion/mwb-juli%C3%A9-out-2024/Program-r%C3%A9nion-Nout-vi-%C3%A8k-pr%C3%A9dikasion-pou-lo-12-juska-18-out-2024/"
                                 data-lang-code="RCR"
                                 data-locale="rcf">criollo de Reunión</option>
                           
                              <option
                                 data-alternative-spellings="Kreol Seselwa  "
                                 
                                 value="crs"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/crs/bibliotek/jw-kaye-renyon/zilyet-out-2024-mwb/Progranm-renyon-pour-Nou-minister-ek-lavi-Kretyen-12-18-Out-2024/"
                                 data-lang-code="SC"
                                 data-locale="crs">criollo de las Seychelles</option>
                           
                              <option
                                 data-alternative-spellings="Kréyòl Gwadloup Kreyol Gwadloup criollo guadalupeno"
                                 
                                 value="gcf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gcf/bibliyotek/jw-kaye-vi-e-ministe/mwb-juiye-out-2024/Pwogram-a-r%C3%A9inyon-Vi-%C3%A9-Minist%C3%A8-pou-simenn-ki-kay-di-12-o-18-out-2024/"
                                 data-lang-code="GCR"
                                 data-locale="gcf">criollo guadalupeño</option>
                           
                              <option
                                 data-alternative-spellings="Kriol di Gine-Bisau  "
                                 
                                 value="pov"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pov/biblioteka/jw-manual-pa-runion/juliu-agustu-di-2024-mwb/Programa-di-runion-No-Vida-Kriston-ku-No-Ministeriu-di-12-18-di-Agustu-di-2024/"
                                 data-lang-code="TCR"
                                 data-locale="pov">criollo guineano</option>
                           
                              <option
                                 data-alternative-spellings="Kreyòl ayisyen Kreyol ayisyen "
                                 
                                 value="ht"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ht/bibliyotek/jw-pwogram-reyinyon-ak-kote-pou-n-ekri/jiye-out-2024-mwb/Pwogram-reyinyon-Lavi-nou-ak-travay-nou-f%C3%A8-pou-12-18-out-2024/"
                                 data-lang-code="CR"
                                 data-locale="ht">criollo haitiano</option>
                           
                              <option
                                 data-alternative-spellings="Bileez Kriol  criollo ingles de Belice"
                                 
                                 value="bzj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bzj/laibri-kriol/jw-meetin-werkbuk-kriol/joolai-aagas-2024-mwb-kriol/Laif-ahn-Minischri-Meetin-Skejul-fi-Aagas-12-18-2024/"
                                 data-lang-code="BZK"
                                 data-locale="bzj">criollo inglés de Belice</option>
                           
                              <option
                                 data-alternative-spellings="Patwa  "
                                 
                                 value="jam-x-jcr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/jam-x-jcr/laibri/jw-miitn-stodibuk/julai-aagos-2024-mwb/Ou-Kristiyan-Fi-Liv-An-Priich-Pruogram-Fi-Di-Miitn-Fi-Aagos-12-18-2024/"
                                 data-lang-code="JCR"
                                 data-locale="jam-x-jcr">criollo jamaicano</option>
                           
                              <option
                                 data-alternative-spellings="Kreol Morisien  "
                                 
                                 value="mfe"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mfe/bibliotek/kaye-renion-jw/mwb-ziliet-out-2024/Program-Renion-Lavi-Kretien-ek-Predikasion-pou-12-18-Out-2024/"
                                 data-lang-code="CE"
                                 data-locale="mfe">criollo mauriciano</option>
                           
                              <option
                                 data-alternative-spellings="Kwéyòl (Patwa) Kweyol (Patwa) Kweyol Patwa "
                                 
                                 value="acf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/acf/laybri/jw-mitin-progwanm/jwiyet-awou-2024-mwb/Ti-Liv-Mitin-Nou-pou-Li-12-Li-18-Awou-2024/"
                                 data-lang-code="LUC"
                                 data-locale="acf">criollo santalucense</option>
                           
                              <option
                                 data-alternative-spellings="hrvatski  "
                                 
                                 value="hr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hr/biblioteka/jehovini-svjedoci-zivot-i-sluzba/srpanj-kolovoz-2024-mwb/Program-sastanka-Na%C5%A1-%C5%BEivot-i-slu%C5%BEba-12-18-kolovoza-2024/"
                                 data-lang-code="C"
                                 data-locale="hr">croata</option>
                           
                              <option
                                 data-alternative-spellings="Dagaare  "
                                 
                                 value="dga"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/dga/boma-binzie/jw-lammo-yels%C9%9Bgree-gane/july-august-2024-mwb/Te-Zemmo-Ane-Te-Naa%C5%8B-Mo%C9%94loo-Lammo-Yels%C9%9Bgraa-a-ko-August-12-18-2024/"
                                 data-lang-code="DGA"
                                 data-locale="dga">dagaari</option>
                           
                              <option
                                 data-alternative-spellings="Damara  "
                                 
                                 value="naq-x-dmr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/naq-x-dmr/%C7%82khanin%C7%81g%C3%A2ub/jw-%C7%80haodi-s%C3%AEsen-%C7%82khanib/julib-augustub-2024-mwb/%C3%9Bib-ts%C3%AE-ao%C7%81n%C3%A2-s%C3%AEsenni-%C7%80ape%C7%81guib-Augustub-12-18-2024/"
                                 data-lang-code="DMR"
                                 data-locale="naq-x-dmr">damara</option>
                           
                              <option
                                 data-alternative-spellings="Dangme  "
                                 
                                 value="ada"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ada/nito-he/jw-ni-kasemi-womi/july-august-2024-mwb/Si-Himi-K%C9%9B-S%C9%94m%C9%94mi-N%C3%AD-Tsumi-Kpe-%C9%94-He-Bl%C9%94-Nya-Tomi-K%C9%9B-Ha-August-12-18-2024/"
                                 data-lang-code="DG"
                                 data-locale="ada">dangme</option>
                           
                              <option
                                 data-alternative-spellings="Dansk  danes"
                                 
                                 value="da"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/da/bibliotek/jv-arbejdsh%C3%A6fte/juli-august-2024-mwb/Program-for-Tjenestem%C3%B8det-12-18-august-2024/"
                                 data-lang-code="D"
                                 data-locale="da">danés</option>
                           
                              <option
                                 data-alternative-spellings="Drehu  "
                                 
                                 value="dhv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/dhv/itre-itus/jw-pepa-nyine-huliwan/julai-ogas-2024-mwb/Mel-Me-Huliwa-Ne-Cain%C3%B6j-Ne-La-Keresiano-Porogaram-Ne-12-18-Ogas-2024/"
                                 data-lang-code="LF"
                                 data-locale="dhv">dehu</option>
                           
                              <option
                                 data-alternative-spellings="дигорон  "
                                 
                                 value="os-x-dgr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/os-x-dgr/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D3%95/jw-%D0%BA%D0%BE%D1%81%D3%95%D0%BD-%D1%82%D1%8A%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9D%D3%95-%D0%BA%D0%B8%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BD-%D1%86%D0%B0%D1%80%D0%B4-%D3%95%D0%BC%D0%B0-%D0%BB%D3%95%D0%B3%D0%B3%D0%B0%D0%B4%D3%95-%D1%84%D0%B5%D0%BC%D0%B1%D3%95%D0%BB%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D3%95-2024-%D0%B0%D0%BD%D0%B7-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8/"
                                 data-lang-code="DGR"
                                 data-locale="os-x-dgr">digor</option>
                           
                              <option
                                 data-alternative-spellings="Dinka  "
                                 
                                 value="din"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/din/%C6%94%C3%B6n-Ath%C3%B6r/jw-athor-lu%C9%94i-amat/p%C9%9B%C9%9Bi-%C3%AB-dhorou-p%C9%9B%C9%9Bi-%C3%AB-b%C9%9B%CC%88t-2024-mwb/Agui%C9%9B%C9%9Br-Amat-%C3%AB-Lon-%C3%AB-Pi%C3%B6%C3%B6c-ku-Ci%C9%9B%C9%9B%C5%8B-%C3%AB-K%C3%ABrthiaan-%C3%AB-P%C9%9B%C9%9Bi-%C3%AB-B%C9%9B%CC%88t-12-18-2024/"
                                 data-lang-code="DI"
                                 data-locale="din">dinka</option>
                           
                              <option
                                 data-alternative-spellings="Jula  "
                                 
                                 value="dyu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/dyu/biblot%C9%9Bki/jw-laj%C9%9Bn-s%C9%9Bb%C9%9B/zuwe-uti-2024-mwb/%C6%9D%C9%9Bnamaya-ni-waajuli-baara-Saan-2024-uti-tile-12-18-ka-laj%C9%9Bn-porogramu/"
                                 data-lang-code="JL"
                                 data-locale="dyu">diula</option>
                           
                              <option
                                 data-alternative-spellings="Douala  "
                                 
                                 value="dua"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/dua/kobata-kalati/jw-kalata-ndongamen/madibe%CC%B1dibe%CC%B1-dingindi-2024-mwb/Mudango-ma-ndongame%CC%B1n-a-longe%CC%B1-la-kriste%CC%B1n-nebola-dikalo-o%C5%84ola-Dingindi-12-18-2024/"
                                 data-lang-code="DA"
                                 data-locale="dua">duala</option>
                           
                              <option
                                 data-alternative-spellings="Edo  "
                                 
                                 value="bin"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/bin/aza/ebe-iwinna-na-loo-vbe-iko-%E1%BB%8Dghe-avbe-os%E1%BA%B9e-jehova/july-august-2024-mwb/Emwamwa-%E1%BB%8Cghe-Ne-Iko-Uyinmw%E1%BA%B9-Kevbe-Iwinna-%E1%BB%8Cghe-Ima-Ne-Ivbiotu-E-Kristi-%E1%BB%8Cghe-August-12-18-2024/"
                                 data-lang-code="ED"
                                 data-locale="bin">edo</option>
                           
                              <option
                                 data-alternative-spellings="Efịk  "
                                 
                                 value="efi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/efi/se-edonde/nwed-mbono-esop/july-august-2024-mwb/Ndut%E1%BB%8Bm-Mbono-Esop-Uwem-ye-Utom-Nny%E1%BB%8Bn-Eke-August-12-18-2024/"
                                 data-lang-code="EF"
                                 data-locale="efi">efik</option>
                           
                              <option
                                 data-alternative-spellings="embera katio  embera catio"
                                 
                                 value="cto"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cto/kartara/karta-nekawuabari/julio-agosto-2024-mwb/B%CA%BCaita-Kristianora-k%C4%A9r%C3%A3k%CA%BCa-ak%CA%89za-Trajaita-Daizezeita-K%CA%BC%C3%A3r%E1%BA%BD-%CA%89%CC%83r%CA%89-bed%CA%BCeadaita-12-18-agostobayeda-2024de/"
                                 data-lang-code="EMB"
                                 data-locale="cto">embera catío</option>
                           
                              <option
                                 data-alternative-spellings="Mbunda  "
                                 
                                 value="mck"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mck/laibrali/mukanda-wa-viwano-wa-ha-jw/july-august-2024-mwb/Cinoneko-ca-Biwano-bya-Buyoye-na-Cipangi-Cetu-bya-August-12-18-2024/"
                                 data-lang-code="MBD"
                                 data-locale="mck">embunda</option>
                           
                              <option
                                 data-alternative-spellings="IsiNdebele  "
                                 
                                 value="nr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nr/ilayibhrari/ihlelo-lomhlangano-wabofakazi-bakajehova/julayi-arhostosi-2024-mwb/Ipilo-Nomsebenzi-WobuKrestu-Ihlelo-Lomhlangano-Lango-Arhostosi-12-18-2024/"
                                 data-lang-code="NBL"
                                 data-locale="nr">endebele</option>
                           
                              <option
                                 data-alternative-spellings="Ndebele (Zimbabwe) Ndebele Zimbabwe "
                                 
                                 value="nd"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nd/izinto-ezikhona/jw-ugwalo-lwemihlangano/july-august-2024-mwb/Impilo-Lenkonzo-YamaKhristu-Uhlelo-Luka-August-12-%E2%80%8B18-2024/"
                                 data-lang-code="NBZ"
                                 data-locale="nd">endebele de Zimbabue</option>
                           
                              <option
                                 data-alternative-spellings="Oshindonga  "
                                 
                                 value="ng"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ng/iinima-mbyoka-ya-nyanyangidhwa/okafo-kokugongala-koonzapo-dhajehova/juli-auguste-2024-mwb/Elandulathano-lyokugongala-li-li-mokafo-Onkalamwenyo-yopaKriste-niilonga-yetu-yokuuvitha-lyomasiku-12-18-Auguste-2024/"
                                 data-lang-code="OD"
                                 data-locale="ng">endonga</option>
                           
                              <option
                                 data-alternative-spellings="Cindau  endau"
                                 
                                 value="ndc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ndc/bhibhirioteka/jw-musongano-cokutarira/julho-agosto-wo-2024-mwb/Urongwa-wo-Musongano-Upenyu-no-Mushando-kuitira-njiku-12-18-ja-Agosto-wo-2024/"
                                 data-lang-code="NDA"
                                 data-locale="ndc">endáu</option>
                           
                              <option
                                 data-alternative-spellings="Nzema  "
                                 
                                 value="nzi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nzi/niny%C9%9Bneziel%C9%9Bleka/jw-nyianu-buluku/july-august-2024-mwb/Y%C9%9B-%C6%90b%C9%9Blab%C9%94l%C9%9B-Nee-Y%C9%9B-%C6%90zonlenl%C9%9B-Nyianu-Ngyehy%C9%9Ble%C9%9B-Maa-August-12-18-2024/"
                                 data-lang-code="NZ"
                                 data-locale="nzi">enzema</option>
                           
                              <option
                                 data-alternative-spellings="slovenčina slovencina "
                                 
                                 value="sk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sk/kniznica/pracovny-zosit-na-zhromazdenie/jul-august-2024-mwb/Rozvrh-zhroma%C5%BEdenia-N%C3%A1%C5%A1-kres%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-na-12-18-augusta-2024/"
                                 data-lang-code="V"
                                 data-locale="sk">eslovaco</option>
                           
                              <option
                                 data-alternative-spellings="slovenščina slovenscina "
                                 
                                 value="sl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sl/knjiznica/jehovove-price-delovni-zvezek/julij-avgust-2024-mwb/Razpored-za-shod-%C5%BDivljenje-in-oznanjevanje-za-12-18-avgust-2024/"
                                 data-lang-code="SV"
                                 data-locale="sl">esloveno</option>
                           
                              <option
                                 data-alternative-spellings="español espanol espanol"
                                 selected="selected"
                                 value="es"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="S"
                                 data-locale="es">español</option>
                           
                              <option
                                 data-alternative-spellings="eesti  "
                                 
                                 value="et"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/et/raamatukogu/jehoova-tunnistajate-koosoleku-t%C3%B6%C3%B6vihik/juuli-august-2024-mwb/Kristliku-elu-ja-teenistuse-koosoleku-kava-12-18-august-2024/"
                                 data-lang-code="ST"
                                 data-locale="et">estonio</option>
                           
                              <option
                                 data-alternative-spellings="Euskara  "
                                 
                                 value="eu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/eu/liburutegia/jw-bilerak-lan-koadernoa/uztaila-%E2%80%8Babuztua-2024-mwb/2024%E2%80%8Bko-abuztuaren-12-18%E2%80%8Bko-Kristauon-zerbitzu-eta-bizimodua-bileraren-programa/"
                                 data-lang-code="BQ"
                                 data-locale="eu">euskera</option>
                           
                              <option
                                 data-alternative-spellings="Eʋegbe Evegbe "
                                 
                                 value="ee"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ee/agbal%E1%BA%BDwo-kple-nu-bubuwo/jw-kpekpea-%C6%92e-nusr%C9%94%CC%83gbal%E1%BA%BD/july-august-2024-mwb/Agben%C9%94n%C9%94-Kple-Sub%C9%94sub%C9%94d%C9%94-Kpekpea-%C6%91e-%C3%90o%C9%96ow%C9%94%C9%96i-Na-August-12-18-2024/"
                                 data-lang-code="EW"
                                 data-locale="ee">ewe</option>
                           
                              <option
                                 data-alternative-spellings="Fang  "
                                 
                                 value="fan"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fan/eberga/jw-kalare-esulan/ngoan-zangbwa-ngoan-muom-ye-mbu-2024-mwb/%C3%89ning-moan-kristen-ye-%C3%A9s%C3%A8%C3%B1-minkanghle-ntaane-mam-ye-sono-12-18-Ngoan-muom-ye-mbu-2024/"
                                 data-lang-code="FGN"
                                 data-locale="fan">fang</option>
                           
                              <option
                                 data-alternative-spellings="Mfantse  "
                                 
                                 value="fat"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fat/nwoma-nye-dza-%C9%94ka-ho/jw-nhyiamu-dwumadzi-nwoma/july-august-2024-mwb/August-12-18-2024-As%C9%9Bnka-Nye-Christianfo-Asetsena-Nhyiamu-No-Ho-Nhyehy%C9%9B%C9%9B/"
                                 data-lang-code="FA"
                                 data-locale="fat">fanti</option>
                           
                              <option
                                 data-alternative-spellings="Føroyskt Foroyskt feroes"
                                 
                                 value="fo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fo/b%C3%B3kasavn/jw-arbei%C3%B0shefti/juli-august-2024-mwb/Okkara-kristna-l%C3%ADv-og-t%C3%A6nasta-skr%C3%A1in-12-18-august-2024/"
                                 data-lang-code="FR"
                                 data-locale="fo">feroés</option>
                           
                              <option
                                 data-alternative-spellings="suomi  finlandes"
                                 
                                 value="fi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fi/kirjasto/el%C3%A4m%C3%A4-ja-palvelus-ty%C3%B6kirja/heina-elokuu-2024-tyokirja/El%C3%A4m%C3%A4-ja-palvelus-kokouksen-ohjelma-12-18-elokuuta-2024/"
                                 data-lang-code="FI"
                                 data-locale="fi">finlandés</option>
                           
                              <option
                                 data-alternative-spellings="vakaViti  "
                                 
                                 value="fj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fj/ka-e-vakarautaki/jw-ivola-ni-soqoni/julai-okosita-2024-mwb/iTuvatuva-ni-Soqoni-ni-Bula-vaKarisito-kei-na-Cakacaka-Vakaitalatala-ni-Okosita-12-18-2024/"
                                 data-lang-code="FN"
                                 data-locale="fj">fiyiano</option>
                           
                              <option
                                 data-alternative-spellings="Fɔngbe Fongbe "
                                 
                                 value="fon"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fon/nus%C9%9Bxwet%C9%9Bn/jw-kple-sin-az%C9%94wema/juillet-aout-2024-mwb/Kpl%C3%A9-gb%C9%9Bz%C3%A1n-kp%C3%B3-sins%C9%9Bnz%C9%94%CC%81-kp%C3%B3-t%C9%94n-s%C3%ADn-tuto-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="FO"
                                 data-locale="fon">fon</option>
                           
                              <option
                                 data-alternative-spellings="Farefare  "
                                 
                                 value="gur"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gur/G%C9%94n%C9%94-Zaale%C5%8Ba/jw-zameseg%C9%94-g%C9%94%C5%8B%C9%94/july-august-2024-mwb/Vom-La-Naam-Tuuma-Zameseg%C9%94-Maase%C5%8B%C9%94-August-12-18-2024/"
                                 data-lang-code="FF"
                                 data-locale="gur">frafra</option>
                           
                              <option
                                 data-alternative-spellings="Français Francais frances"
                                 
                                 value="fr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fr/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-juillet-ao%C3%BBt-2024/Programme-pour-la-r%C3%A9union-Vie-et-minist%C3%A8re-du-12-au-18-ao%C3%BBt-2024/"
                                 data-lang-code="F"
                                 data-locale="fr">francés</option>
                           
                              <option
                                 data-alternative-spellings="Ga  "
                                 
                                 value="gaa"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gaa/woji-k%C9%9B-nibii/odasefoi-kpee-nifeem%C9%94-wolo/july-august-2024-mwb/W%C9%94shi%C9%9Bm%C9%94-K%C9%9B-W%C9%94shihil%C9%9B-Kpee-He-Gb%C9%9Bjian%C9%94too-K%C9%9Bh%C3%A3-August-12-18-2024/"
                                 data-lang-code="GA"
                                 data-locale="gaa">ga</option>
                           
                              <option
                                 data-alternative-spellings="Galego  "
                                 
                                 value="gl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gl/biblioteca/jw-caderno-estudo/caderno-estudo-xullo-agosto-2024/Vida-e-Actividades-Cristi%C3%A1s-Programa-do-12-18-de-agosto-de-2024/"
                                 data-lang-code="GLC"
                                 data-locale="gl">gallego</option>
                           
                              <option
                                 data-alternative-spellings="Cymraeg  gales"
                                 
                                 value="cy"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cy/llyfrgell/gweithlyfr-cyfarfod-jw/gorffennaf-awst-2024-mwb/Rhaglen-Ein-Bywyd-an-Gweinidogaeth-Gristnogol-ar-gyfer-Awst-12-18-2024/"
                                 data-lang-code="W"
                                 data-locale="cy">galés</option>
                           
                              <option
                                 data-alternative-spellings="Garifuna  garifuna"
                                 
                                 value="cab"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cab/liburu-agei/le-adugubei-hadamuridagun-gefentina-heowa/sedu-hati-widu-hati-2024-mwb/Habagari-Kristi%C3%A1nugu-luma-Heseriwidun-12-dar%C3%AD-18-lidan-wid%C3%BC-hati-irumu-2024/"
                                 data-lang-code="GRF"
                                 data-locale="cab">garífuna</option>
                           
                              <option
                                 data-alternative-spellings="Gbaya  "
                                 
                                 value="gba"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gba/biblioth%C3%A8que/jw-meeting-workbook-gba/juillet-ao%C3%BBt-2024-mwb/Programme-mo-bungbi-Tom-bo-fin-ne-dungonu-bo-mo-yenga-mo-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="GBA"
                                 data-locale="gba">gbaya</option>
                           
                              <option
                                 data-alternative-spellings="ქართული  "
                                 
                                 value="ka"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ka/%E1%83%91%E1%83%98%E1%83%91%E1%83%9A%E1%83%98%E1%83%9D%E1%83%97%E1%83%94%E1%83%99%E1%83%90/%E1%83%98%E1%83%94%E1%83%B0%E1%83%9D%E1%83%95%E1%83%90%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%AC%E1%83%9B%E1%83%94%E1%83%94%E1%83%91%E1%83%98-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%94%E1%83%93%E1%83%A0%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90-%E1%83%A1%E1%83%90%E1%83%95%E1%83%90%E1%83%A0%E1%83%AF%E1%83%98%E1%83%A8%E1%83%9D%E1%83%94%E1%83%91%E1%83%98%E1%83%97/%E1%83%98%E1%83%95%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%90%E1%83%92%E1%83%95%E1%83%98%E1%83%A1%E1%83%A2%E1%83%9D-2024-mwb/%E1%83%A5%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%98%E1%83%90%E1%83%9C%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%AA%E1%83%AE%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%91%E1%83%90-%E1%83%93%E1%83%90-%E1%83%9B%E1%83%A1%E1%83%90%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%94%E1%83%93%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90-2024-%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1-12-18-%E1%83%90%E1%83%92%E1%83%95%E1%83%98%E1%83%A1%E1%83%A2%E1%83%9D/"
                                 data-lang-code="GE"
                                 data-locale="ka">georgiano</option>
                           
                              <option
                                 data-alternative-spellings="Gitonga  "
                                 
                                 value="toh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/toh/bhibliotekay/jw-gibhukwana-nya-mitshangano/julho-agosto-nya-2024-mwb/Longoloko-nya-thumo-ni-mavbanyelo-yathu-nya-Wukristo-nya-12-18-nya-Agosto-nya-2024/"
                                 data-lang-code="GTN"
                                 data-locale="toh">gitonga</option>
                           
                              <option
                                 data-alternative-spellings="Gokana  "
                                 
                                 value="gkn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gkn/gbo-kpa/jw-kp%C3%A1-b%C3%B5%CC%80%C3%B2nal%C3%B3-s%C3%ACt%C3%B3m/july-august-2024-mwb/N%C3%B2%C3%B2n%C3%B9-Ea-Nyoone-D%C3%B9m-N%C3%A8-S%C3%ACt%C3%B3m-K%C3%B2%CC%A3-Kp%C3%A8%CC%A3a-N%C3%AD%C3%AD-August-12-18-2024/"
                                 data-lang-code="GN"
                                 data-locale="gkn">gokana</option>
                           
                              <option
                                 data-alternative-spellings="Ελληνική  "
                                 
                                 value="el"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/el/%CE%B2%CE%B9%CE%B2%CE%BB%CE%B9%CE%BF%CE%B8%CE%AE%CE%BA%CE%B7/%CF%86%CF%85%CE%BB%CE%BB%CE%AC%CE%B4%CE%B9%CE%BF-%CE%B5%CF%81%CE%B3%CE%B1%CF%83%CE%AF%CE%B1%CF%82-%CE%B3%CE%B9%CE%B1-%CF%84%CE%B7-%CF%83%CF%85%CE%BD%CE%AC%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B7-jw/%CE%B9%CE%BF%CF%8D%CE%BB%CE%B9%CE%BF%CF%82-%CE%B1%CF%8D%CE%B3%CE%BF%CF%85%CF%83%CF%84%CE%BF%CF%82-2024-mwb/%CE%A0%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1-%CE%A3%CF%85%CE%BD%CE%AC%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B7%CF%82-%CE%96%CF%89%CE%AE-%CE%BA%CE%B1%CE%B9-%CE%94%CE%B9%CE%B1%CE%BA%CE%BF%CE%BD%CE%AF%CE%B1-%CF%84%CE%B7%CE%BD-%CE%95%CE%B2%CE%B4%CE%BF%CE%BC%CE%AC%CE%B4%CE%B1-12-18-%CE%91%CF%85%CE%B3%CE%BF%CF%8D%CF%83%CF%84%CE%BF%CF%85-2024/"
                                 data-lang-code="G"
                                 data-locale="el">griego</option>
                           
                              <option
                                 data-alternative-spellings="Kalaallisut  groenlandes"
                                 
                                 value="kl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kl/biibililersaarutit/najoqqutassaq/juuli-aggusti-2024-mwb/Ulluinnarni-ataatsimiinnermi-najoqqutassaq-aggustip-12-18-2024/"
                                 data-lang-code="GL"
                                 data-locale="kl">groenlandés</option>
                           
                              <option
                                 data-alternative-spellings="guarani  guarani"
                                 
                                 value="gug"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gug/Vivliot%C3%A9ka/jw-programa-rreunion/julio-agosto-2024-mwb/Mba%CA%BC%C3%A9ichapa-Jaiko-ha-Japredika-va%CA%BCer%C3%A3-Progr%C3%A1ma-12-18-de-agosto-de-2024-pe-g%CC%83uar%C3%A3/"
                                 data-lang-code="GI"
                                 data-locale="gug">guaraní</option>
                           
                              <option
                                 data-alternative-spellings="wɛ we guere"
                                 
                                 value="gxx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gxx/%CB%88S%C9%9B%C9%A9-%CB%88%CB%88sia%CB%88%CB%88-%CB%88z%C9%94n/jw-%CB%88%CB%88dhruigbo%C9%9B-dh%C9%A9c%C9%A9an-s%C9%9B%C9%9B/%C9%B2%C9%94%C9%94nkpadhebha-gbeec%CA%8B-2024-mwb/%CB%88Km%CA%8Bn-e-bobhladhbho-%C9%94%CB%88-n%C9%94n%CB%88%CB%88-%C9%94n%CB%88-des%CA%8Bn-Gbeec%CA%8B-12-18-2024/"
                                 data-lang-code="GUR"
                                 data-locale="gxx">gueré</option>
                           
                              <option
                                 data-alternative-spellings="ગુજરાતી  gujarati"
                                 
                                 value="gu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gu/%E0%AA%B2%E0%AA%BE%E0%AA%87%E0%AA%AC%E0%AB%8D%E0%AA%B0%E0%AB%87%E0%AA%B0%E0%AB%80/jw-%E0%AA%B8%E0%AA%AD%E0%AA%BE-%E0%AA%AA%E0%AB%81%E0%AA%B8%E0%AB%8D%E0%AA%A4%E0%AA%BF%E0%AA%95%E0%AA%BE/%E0%AA%9C%E0%AB%81%E0%AA%B2%E0%AA%BE%E0%AA%88-%E0%AA%91%E0%AA%97%E0%AA%B8%E0%AB%8D%E0%AA%9F-%E0%AB%A8%E0%AB%A6%E0%AB%A8%E0%AB%AA-mwb/%E0%AA%91%E0%AA%97%E0%AA%B8%E0%AB%8D%E0%AA%9F-%E0%AB%A7%E0%AB%A8-%E0%AB%A7%E0%AB%AE-%E0%AB%A8%E0%AB%A6%E0%AB%A8%E0%AB%AA%E0%AA%A8%E0%AB%81%E0%AA%82-%E0%AA%9C%E0%AB%80%E0%AA%B5%E0%AA%A8-%E0%AA%85%E0%AA%A8%E0%AB%87-%E0%AA%B8%E0%AB%87%E0%AA%B5%E0%AA%BE%E0%AA%95%E0%AA%BE%E0%AA%B0%E0%AB%8D%E0%AA%AF-%E0%AA%B8%E0%AA%AD%E0%AA%BE-%E0%AA%AE%E0%AA%BE%E0%AA%9F%E0%AB%87%E0%AA%A8%E0%AB%81%E0%AA%82-%E0%AA%B6%E0%AB%87%E0%AA%A1%E0%AB%8D%E0%AA%AF%E0%AB%81%E0%AA%B2/"
                                 data-lang-code="GU"
                                 data-locale="gu">gujaratí</option>
                           
                              <option
                                 data-alternative-spellings="Gungbe  "
                                 
                                 value="guw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/guw/Wes%E1%BA%B9dot%E1%BA%B9n/jw-opli-nupl%E1%BB%8Dnwe/juillet-ao%C3%BBt-2024-mwb/Tito-to-Whinnu-Gb%E1%BA%B9zan-po-Liz%E1%BB%8Dnyiz%E1%BB%8Dn-M%C3%ADt%E1%BB%8Dn-po-T%E1%BB%8Dn-Na-12-18-Ao%C3%BBt-2024/"
                                 data-lang-code="EG"
                                 data-locale="guw">gun</option>
                           
                              <option
                                 data-alternative-spellings="համշեներեն (հայերեն) համշեներեն հայերեն hamshen armenio"
                                 
                                 value="hyw-x-hma"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hyw-x-hma/%D5%A2%D5%AB%D5%A2%D5%AC%D5%AB%D5%A1%D5%BF%D5%A5%D5%AF%D5%A8%D5%B6/jw-%D5%BD%D5%B8%D6%80%D5%BE%D5%B8%D6%82%D5%B7%D5%AB-%D5%A4%D5%A5%D5%A4%D5%BC%D5%A1%D5%A3%D5%A8/%D5%B0%D5%B8%D6%82%D5%AC%D5%AB%D5%BD-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD-2024-%E2%81%A0mwb/%D5%84%D5%AB%D6%80-%D5%AD%D6%80%D5%AB%D5%BD%D5%BF%D5%AB%D5%A1%D5%B6%D5%BD%D5%AF%D5%AB-%D5%A3%D5%B5%D5%A1%D5%B6%D5%AF%D5%A8-%D5%B0%D5%A8%D5%B6%D5%B8%D6%82-%D5%B1%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%BF%D5%AB%D5%B6%D5%A8-%D4%BA%D5%B8%D5%B2%D5%B8%D5%BE%D5%AB-%D5%BA%D5%BC%D5%A1%D5%A3%D5%BC%D5%A1%D5%B4%D5%A8%D5%B6-%D6%85%D5%A3%D5%B8%D5%BD%D5%BF%D5%B8%D5%BD%D5%AB-12-18-2024/"
                                 data-lang-code="HMA"
                                 data-locale="hyw-x-hma">hamshen (armenio)</option>
                           
                              <option
                                 data-alternative-spellings="һамшенерен (кирилица) һамшенерен кирилица hamshen (cirilico) hamshen cirilico"
                                 
                                 value="hyw-x-hms"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hyw-x-hms/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%B0%D1%82%D0%B5%D0%BA%D1%8B%D0%BD/jw-%D1%81%D0%BE%D1%80%D0%B2%D1%83%D1%88%D0%B8-%D0%B4%D0%B5%D0%B4%D1%80%CC%84%D0%B0%D0%B3%D1%8B/%D2%BB%D1%83%D0%BB%D0%B8%D1%81-%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D0%BE%D1%81-2024-mwb/%D0%9C%D0%B8%D1%80-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8-%D0%B3%D1%8F%D0%BD%D0%BA%D1%8B-%D2%BB%D1%8B%D0%BD%D1%83-%D0%B4%D0%B7%D0%B0%D1%80%CC%84%D0%B0%D1%8E%D1%82%D0%B8%D0%BD%D1%8B-%D0%96%D0%BE%D2%B3%D0%BE%D0%B2%D0%B8-%D0%BF%D1%80%CC%84%D0%B0%D0%B3%D1%80%CC%84%D0%B0%D0%BC%D1%8B%D0%BD-%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D0%BE%D1%81%D0%B8-12-18-2024/"
                                 data-lang-code="HMS"
                                 data-locale="hyw-x-hms">hamshen (cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="Hausa  "
                                 
                                 value="ha"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ha/laburare/littafin-taro-na-jw/yuli-agusta-2024-mwb/Tsarin-Ayyukan-Taron-Rayuwa-ta-Kirista-da-Hidimarmu-na-12-18-ga-Agusta-2024/"
                                 data-lang-code="HA"
                                 data-locale="ha">hausa</option>
                           
                              <option
                                 data-alternative-spellings="Ekihavu  "
                                 
                                 value="hav"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hav/bubiko/ekaye-lye-ebuganano-jw/mwezi-gwa-7-mwezi-gwa-8-2024-mwb/Programe-yEmbuganano-Akasi-nAkalamo-kOmukristu-ya-Siku-12-18-Mwezi-gwa-8-2024/"
                                 data-lang-code="HVU"
                                 data-locale="hav">havu</option>
                           
                              <option
                                 data-alternative-spellings="עברית  "
                                 
                                 value="he"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/he/%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94/%D7%92%D7%99%D7%9C%D7%99%D7%95%D7%9F-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%94-%D7%A9%D7%9C-%D7%A2%D7%93%D7%99-%D7%99%D7%94%D7%95%D7%94/%D7%99%D7%95%D7%9C%D7%99-%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024-%D7%92%D7%A4%D7%90/%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%AA-%D7%90%D7%95%D7%A8%D7%97-%D7%97%D7%99%D7%99%D7%A0%D7%95-%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%A0%D7%95-%D7%94%D7%9E%D7%A9%D7%99%D7%97%D7%99%D7%99%D7%9D-12-18-%D7%91%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024/"
                                 data-lang-code="Q"
                                 data-locale="he">hebreo</option>
                           
                              <option
                                 data-alternative-spellings="Otjiherero  "
                                 
                                 value="hz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hz/omambo/jw-okambo-komakond%CC%ADononeno/juli-auguste-2024-mwb/Ongongorasaneno-yombongarero-yEhupo-retu-rOukriste-notjiungura-tjetu-tjokuzuvarisa-12-18-ku-Auguste-2024/"
                                 data-lang-code="HR"
                                 data-locale="hz">herero</option>
                           
                              <option
                                 data-alternative-spellings="Hiligaynon  "
                                 
                                 value="hil"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hil/library/saksi-ni-jehova-miting-workbook/hulyo-agosto-2024-mwb/Iskedyul-sang-Pagkabuhi-kag-Pagministeryo-nga-Miting-Para-sa-Agosto-12-18-2024/"
                                 data-lang-code="HV"
                                 data-locale="hil">hiligaynon</option>
                           
                              <option
                                 data-alternative-spellings="हिंदी  "
                                 
                                 value="hi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hi/%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A5%80/%E0%A4%AF%E0%A4%B9%E0%A5%8B%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-2024-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/12-18-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-2024-%E0%A4%95%E0%A5%87-%E0%A4%B2%E0%A4%BF%E0%A4%8F-%E0%A4%AE%E0%A4%B8%E0%A5%80%E0%A4%B9%E0%A5%80-%E0%A4%9C%E0%A4%BC%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A4%97%E0%A5%80-%E0%A4%94%E0%A4%B0-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%95%E0%A4%BE-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%AE/"
                                 data-lang-code="HI"
                                 data-locale="hi">hindi</option>
                           
                              <option
                                 data-alternative-spellings="Hiri Motu  "
                                 
                                 value="ho"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ho/laibri/jw-hebou-pepana/july-august-2024-mwb/Haroro-Bona-Mauri-Dalana-Hebou-Sediual-August-12-18-2024-totona/"
                                 data-lang-code="MO"
                                 data-locale="ho">hiri motu</option>
                           
                              <option
                                 data-alternative-spellings="Hmoob Dawb  hmong blanco"
                                 
                                 value="hmn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hmn/peb-tej-ntaub-ntawv/jw-sib-txoos-phau-kawm/lub-7-hli-lub-8-hli-2024-mwb/Daim-Kom-Tswj-Rau-Lub-Neej-Thiab-Tes-Hauj-Lwm-Khixatia-Lub-8-Hli-Tim-12-18-2024/"
                                 data-lang-code="HM"
                                 data-locale="hmn">hmong (blanco)</option>
                           
                              <option
                                 data-alternative-spellings="Nederlands  holandes"
                                 
                                 value="nl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nl/bibliotheek/werkboek-voor-vergaderingen/juli-augustus-2024-mwb/Schema-leven-en-dienenvergadering-voor-12-18-augustus-2024/"
                                 data-lang-code="O"
                                 data-locale="nl">holandés</option>
                           
                              <option
                                 data-alternative-spellings="wixárika wixarika "
                                 
                                 value="hch"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hch/m%C9%A8tiwautsiets%C3%ADe/jw-taxeuritsikatsie-tita-temutexeiya/julio-meta-agosto-2024-mwb/Xapa-Yu%C3%BAtsi-temayexeiya-tatuukaarits%C3%ADe-met%C3%A1-ta%CA%BC%C9%A8kit%C9%A8arika-xe%C9%A8ritsika-agosto-12-pait%C9%A8-18-2024/"
                                 data-lang-code="HCH"
                                 data-locale="hch">huichol</option>
                           
                              <option
                                 data-alternative-spellings="Hunsrik  "
                                 
                                 value="hrx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hrx/piplyoteek/jw-Xtuutyum-heftche/yuuli-akust-2024-mwb/Unser-kristlich-leepe-un-preetich-prokramatsyoon-fer-12te-18te-akust/"
                                 data-lang-code="HSK"
                                 data-locale="hrx">hunsrik</option>
                           
                              <option
                                 data-alternative-spellings="magyar  hungaro"
                                 
                                 value="hu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hu/konyvtar/jw-munkafuzet/julius-augusztus-2024-mwb/%C3%89let%C3%BCnk-%C3%A9s-szolg%C3%A1latunk-%C3%B6sszej%C3%B6vetel-programterve-2024-augusztus-12-18/"
                                 data-lang-code="H"
                                 data-locale="hu">húngaro</option>
                           
                              <option
                                 data-alternative-spellings="Iban  "
                                 
                                 value="iba"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/iba/librari/bup-kereja-kena-gempuru-jw/julai-ogos-2024-mwb/Jadual-Gempuru-Pengidup-enggau-Pengawa-Kristian-kena-12-18-Ogos-2024/"
                                 data-lang-code="IA"
                                 data-locale="iba">iban</option>
                           
                              <option
                                 data-alternative-spellings="Ibanag  "
                                 
                                 value="ibg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ibg/library/jw-workbook-ta-study/hulio-agosto-2024-mwb/Iskediul-na-Study-nga-Pattolay-Anna-Ministerio-Para-ta-Agosto-12-18-2024/"
                                 data-lang-code="IG"
                                 data-locale="ibg">ibanag</option>
                           
                              <option
                                 data-alternative-spellings="Ibinda  "
                                 
                                 value="yom-x-ibi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yom-x-ibi/Bilongulu/jw-thwadusulu-yi-zikhutukunu/ngonda-yisambuadi-ngonda-yinana-2024-mwb/Nzingulu-ayi-Kisalu-Thuadusulu-yi-Lukutukunu-12-18-Ngonda-Yinana-2024/"
                                 data-lang-code="IBI"
                                 data-locale="yom-x-ibi">ibinda</option>
                           
                              <option
                                 data-alternative-spellings="Igbo  "
                                 
                                 value="ig"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ig/ihe-ndi-anyi-nwere/jw-usoro-ihe-omume-ozi-anyi/julai-ogost-2024-mwb/Usoro-Ihe-Omume-%E1%BB%8Cm%E1%BB%A5m%E1%BB%A5-Ihe-Ozi-Any%E1%BB%8B-na-Ot%C3%BA-Any%E1%BB%8B-Si-Ebi-Nd%E1%BB%A5-Maka-%E1%BB%8Cg%E1%BB%8Dst-12-18-2024/"
                                 data-lang-code="IB"
                                 data-locale="ig">ibo</option>
                           
                              <option
                                 data-alternative-spellings="Idoma  "
                                 
                                 value="idu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/idu/%C6%86kpa-mla-a%C9%94d%C9%94ha/jw-%C9%94kp%C3%A1-ku-%C5%8Djila/%C9%94ya-%C9%94mahaapa-%C9%94ya-%C9%94mahata-2024-mwb/%C5%8Cmiya-ku-%C5%8Cjila-ku-Oyeeyi-mla-Ukl%C9%94-Ku-Al%C9%94-ku-%C6%86ya-%C6%86mahata-12-18-2024/"
                                 data-lang-code="ID"
                                 data-locale="idu">idoma</option>
                           
                              <option
                                 data-alternative-spellings="Igala  "
                                 
                                 value="igl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/igl/am%E1%BA%B9%C3%B1wu-ka-n%E1%BA%B9/%E1%BB%8Dtakada-ujeju-e-jw/july-august-2024-mwb/%E1%BB%8Cna-kUjeju-Ali-kpai-Uch%E1%BA%B9ny%E1%BB%8D-Ej%E1%BA%B9-Ana-D%E1%BA%B9-Efaladi-August-12-18-2024/"
                                 data-lang-code="AA"
                                 data-locale="igl">igala</option>
                           
                              <option
                                 data-alternative-spellings="Igede  "
                                 
                                 value="ige"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ige/ang-ile-ki-ho/%E1%BB%A5pw%E1%BB%A5-%E1%BB%8D-kpa-j%C3%A9%CC%A3-ang-nya-jw/%E1%BB%8Dya-%E1%BB%8Dharwiye-%E1%BB%8Dya-%E1%BB%8Dhaneku-2024-mwb/%E1%BB%8Cj%E1%BB%8Bra-j%E1%BB%8Bra-nya-%E1%BB%8Ch%E1%BB%8Bh%E1%BB%8B-bala-%E1%BB%A4k%E1%BB%A5rw%E1%BB%8D-Nyah%E1%BB%8B-%E1%BB%8Dl%E1%BA%B9-k%C3%AD%CC%A3-nw%E1%BB%A5lan%E1%BB%8D-la-epwihi-nya-%E1%BB%8Cya-%E1%BB%8Chaneku-%E1%BB%8Cya-%E1%BB%8Chaneku-12-18-2024/"
                                 data-lang-code="IGE"
                                 data-locale="ige">igede</option>
                           
                              <option
                                 data-alternative-spellings="Ijaw  "
                                 
                                 value="ijc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ijc/funmo/jw-meeting-workbook-ijc/july-august-2024-mwb/Inyenrinb%E1%BB%A5%E1%BB%8D-m%C3%A1-Egberigbaa-F%E1%BB%8Br%E1%BB%8Bw%E1%BA%B9n%E1%BB%8B-Fun-August-12-18-2024-gh%E1%BB%8D-tolum%E1%BB%8D-m%E1%BB%A5-yeama/"
                                 data-lang-code="IJ"
                                 data-locale="ijc">ijaw</option>
                           
                              <option
                                 data-alternative-spellings="Iloko  "
                                 
                                 value="ilo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ilo/libraria/workbook-iti-gimong/hulio-agosto-2024-mwb/Eskediul-ti-Gimong-a-Panagbiag-ken-Ministerio-iti-Agosto-12-18-2024/"
                                 data-lang-code="IL"
                                 data-locale="ilo">ilocano</option>
                           
                              <option
                                 data-alternative-spellings="Indonesia  "
                                 
                                 value="id"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/id/perpustakaan/jw-lembar-pelajaran/mwb-juli-agustus-2024/Jadwal-Perhimpunan-Pelayanan-dan-Kehidupan-Kristen-untuk-12-18-Agustus-2024/"
                                 data-lang-code="IN"
                                 data-locale="id">indonesio</option>
                           
                              <option
                                 data-alternative-spellings="English  ingles"
                                 
                                 value="en"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/en/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="E"
                                 data-locale="en">inglés</option>
                           
                              <option
                                 data-alternative-spellings="Liberian English  ingles liberiano"
                                 
                                 value="lir"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lir/library/jw-meeting-workbook/july-august-2024-mwb/Live-and-Preach-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="ELI"
                                 data-locale="lir">inglés liberiano</option>
                           
                              <option
                                 data-alternative-spellings="Esan  "
                                 
                                 value="ish"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ish/aza/jw-meeting-workbook/julai-%E1%BB%8Dg%E1%BB%8Dst-2024-mwb/Emhanmhan-%E1%BB%8Csi-Ikolo-Uny%E1%BA%B9nmhin-Bi-Iw%E1%BA%B9nna-Oga-N%E1%BB%8Dns%E1%BA%B9mhan-Bhi-%E1%BB%8Cg%E1%BB%8Dst-12-18-2024/"
                                 data-lang-code="IH"
                                 data-locale="ish">ishan</option>
                           
                              <option
                                 data-alternative-spellings="íslenska islenska islandes"
                                 
                                 value="is"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/is/b%C3%B3kasafn/jw-vinnub%C3%B3k-fyrir-samkomur/juli-agust-2024-mwb/Samkomudagskr%C3%A1-%C3%AD-L%C3%ADf-okkar-og-bo%C3%B0un-fyrir-12-18-%C3%A1g%C3%BAst-2024/"
                                 data-lang-code="IC"
                                 data-locale="is">islandés</option>
                           
                              <option
                                 data-alternative-spellings="Isoko  "
                                 
                                 value="iso"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/iso/ebe-gbe-eware-efa/jw-obe-ewuhre/ahre-aria-2024-mwb/Uzuaz%E1%BB%8D-Oleleikristi-gbe-Usi-Uwoma-Ota-Mai-Omaa-Aria-12-18-2024/"
                                 data-lang-code="IS"
                                 data-locale="iso">isoko</option>
                           
                              <option
                                 data-alternative-spellings="Italiano  "
                                 
                                 value="it"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/it/biblioteca-digitale/guida-attivita-adunanza/mwb-luglio-agosto-2024/Programma-adunanza-Vita-e-ministero-dal-12-al-18-agosto-2024/"
                                 data-lang-code="I"
                                 data-locale="it">italiano</option>
                           
                              <option
                                 data-alternative-spellings="Itsekiri  "
                                 
                                 value="its"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/its/urun-ti-ene-ne/jw-meeting-workbook-its/july-august-2024-mwb/Ij%E1%BB%8Dl%E1%BB%8D%E1%B9%A3i-gb%E1%BA%B9-Ubara-Udo%E1%BA%B9ye-Biri-U%E1%B9%A3%E1%BA%B9-Oye-We-ti-August-12-18-2024/"
                                 data-lang-code="IT"
                                 data-locale="its">itsekiri</option>
                           
                              <option
                                 data-alternative-spellings="日本語  japones"
                                 
                                 value="ja"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/jw-%E9%9B%86%E4%BC%9A%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF/2024%E5%B9%B4-7%E6%9C%88-8%E6%9C%88-mwb/2024%E5%B9%B48%E6%9C%8812-18%E6%97%A5%E3%81%AE%E7%94%9F%E6%B4%BB%E3%81%A8%E5%A5%89%E4%BB%95%E3%81%AE%E9%9B%86%E4%BC%9A%E4%BA%88%E5%AE%9A/"
                                 data-lang-code="J"
                                 data-locale="ja">japonés</option>
                           
                              <option
                                 data-alternative-spellings="Jawa  javanes"
                                 
                                 value="jv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/jv/perpustakaan/jw-jadwal-kagiyatan/mwb-juli-agustus-2024/Jadwal-Pertemuan-Ibadah-Urip-lan-Nginjil-12-18-Agustus-2024/"
                                 data-lang-code="JA"
                                 data-locale="jv">javanés</option>
                           
                              <option
                                 data-alternative-spellings="Kabɩyɛ Kabɩye "
                                 
                                 value="kbp"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kbp/t%C9%94m-susuu-wondu/jw-kp%C9%9Bl%C9%A9k%CA%8B%CA%8B-takaya%C9%A3/juillet-ao%C3%BBt-2024-mwb/%C3%90e-wezuu-ca%C9%A3%CA%8B-n%C9%9B-%C9%96%C9%9B-%C6%90s%C9%94-s%C9%9Bt%CA%8B-Kp%C9%9Bl%C9%A9k%CA%8B%CA%8B-%C9%96%CA%8Bt%CA%8B-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="KAB"
                                 data-locale="kbp">kabiye</option>
                           
                              <option
                                 data-alternative-spellings="Kachin  "
                                 
                                 value="kac"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kac/laika-dum/jw-zuphpawng-shaman-laika-buk/july-august-2024-mwb/2024-August-12-18-a-matu-Prat-Hte-Magam-Zuphpawng-Chyarang/"
                                 data-lang-code="AH"
                                 data-locale="kac">kachin</option>
                           
                              <option
                                 data-alternative-spellings="Kikamba  "
                                 
                                 value="kam"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kam/sy%C4%A9nd%C5%A9-ila-sy%C4%A9-vo/jw-kavuku-ka-kwimanyisya/mwei-wa-7-mwei-wa-8-2024-mwb/Walany%CA%BCo-wa-%C5%A8mbano-wa-Mw%C4%A9kal%C4%A9le-wa-Akl%C4%A9sto-na-W%C4%A9a-wa-K%C5%A9tavany%CA%BCa-wa-Matuk%C5%A9-12-18-Mwei-wa-8-2024/"
                                 data-lang-code="KB"
                                 data-locale="kam">kamba</option>
                           
                              <option
                                 data-alternative-spellings="ಕನ್ನಡ  "
                                 
                                 value="kn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kn/%E0%B2%B2%E0%B3%88%E0%B2%AC%E0%B3%8D%E0%B2%B0%E0%B2%B0%E0%B2%BF/jw-%E0%B2%95%E0%B3%82%E0%B2%9F-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF/%E0%B2%9C%E0%B3%81%E0%B2%B2%E0%B3%88-%E0%B2%86%E0%B2%97%E0%B2%B8%E0%B3%8D%E0%B2%9F%E0%B3%8D%E2%80%8C-2024-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF/%E0%B2%A8%E0%B2%AE%E0%B3%8D%E0%B2%AE-%E0%B2%95%E0%B3%8D%E0%B2%B0%E0%B3%88%E0%B2%B8%E0%B3%8D%E0%B2%A4-%E0%B2%9C%E0%B3%80%E0%B2%B5%E0%B2%A8-%E0%B2%AE%E0%B2%A4%E0%B3%8D%E0%B2%A4%E0%B3%81-%E0%B2%B8%E0%B3%87%E0%B2%B5%E0%B3%86-%E0%B2%95%E0%B3%82%E0%B2%9F%E0%B2%A6-%E0%B2%95%E0%B3%88%E0%B2%AA%E0%B2%BF%E0%B2%A1%E0%B2%BF-%E0%B2%86%E0%B2%97%E0%B2%B8%E0%B3%8D%E0%B2%9F%E0%B3%8D%E2%80%8C-12-18-2024/"
                                 data-lang-code="KA"
                                 data-locale="kn">kannada</option>
                           
                              <option
                                 data-alternative-spellings="Ciin-kanyok  "
                                 
                                 value="kny"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kny/cilamin-cya-mikand/jw-cisangil-mudimw/suuny-a-7-82024-mwb/Program-a-Cisangil-cya-Shikacil-ni-mudimw-iitut-a-bukajaady-a-Luming-lwa-dya-12-1882024/"
                                 data-lang-code="KYK"
                                 data-locale="kny">kanyok</option>
                           
                              <option
                                 data-alternative-spellings="Kikaonde  "
                                 
                                 value="kqn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kqn/mabuku/jw-mutanchi-kupwila/july-august-2024-mwb/Mutanchi-wa-Kupwila-kwa-Bwikalo-ne-Mwingilo-wa-August-12-18-2024/"
                                 data-lang-code="KD"
                                 data-locale="kqn">kaonde</option>
                           
                              <option
                                 data-alternative-spellings="Kaqchikel (Sololá) Kaqchikel (Solola) Kaqchikel Solola kaqchikel (Solola) kaqchikel Solola"
                                 
                                 value="cak"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/cak/publicaciones/wuj-rche-qamoloj-jw/julio-agosto-2024-mwb/Qak%CA%BCasle%C2%ADmal-chq%C3%A4-Qasamaj-r%C3%B6j-ri-Cristianos-12-k%CA%BCa-18-de-agosto-2024/"
                                 data-lang-code="CQ"
                                 data-locale="cak">kaqchikel (Sololá)</option>
                           
                              <option
                                 data-alternative-spellings="ကညီ(စှီၤ)ကျိာ် ကညီစှီၤကျိာ် "
                                 
                                 value="ksw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ksw/%E1%80%9C%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%9C%E1%80%B2%E1%81%A2%E1%80%BA%E1%80%90%E1%80%96%E1%81%A3%E1%80%BA/jw-%E1%80%90%E1%80%A1%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%9B%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA-%E1%80%80%E1%81%A0%E1%80%AD%E1%80%96%E1%80%AD%E1%80%9C%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%90%E1%81%A2%E1%80%BA%E1%80%99%E1%81%A4%E1%80%9C%E1%80%AD/%E1%80%9C%E1%80%AB%E1%80%9A%E1%80%B0%E1%81%A4%E1%80%9C%E1%80%B6-%E1%80%9C%E1%80%AB%E1%80%A1%E1%80%AE%E1%80%80%E1%80%B0%E1%80%B8-%E1%81%82%E1%81%80%E1%81%82%E1%81%84-mwb/%E1%80%81%E1%80%9B%E1%80%B6%E1%80%AC%E1%80%BA%E1%80%96%E1%80%AD%E1%80%A1%E1%80%90%E1%81%A2%E1%80%BA%E1%80%A1%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%99%E1%80%B0%E1%80%92%E1%80%AE%E1%80%B8-%E1%80%90%E1%81%A2%E1%80%BA%E1%80%85%E1%80%B6%E1%81%A3%E1%80%BA%E1%80%90%E1%80%B2%E1%81%A4%E1%80%90%E1%80%B2%E1%80%9C%E1%80%AE%E1%81%A4%E1%80%90%E1%81%A2%E1%80%BA%E1%80%80%E1%81%A0%E1%80%AD-%E1%80%90%E1%81%A2%E1%80%BA%E1%80%A1%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA%E1%80%9B%E1%80%AD%E1%80%96%E1%80%BE%E1%80%AD%E1%81%A3%E1%80%BA-%E1%80%A1%E1%80%90%E1%81%A2%E1%80%BA%E1%80%9B%E1%80%B2%E1%81%A3%E1%80%BA%E1%80%90%E1%81%A2%E1%80%BA%E1%80%80%E1%80%BB%E1%80%B2%E1%81%A4%E1%80%9C%E1%81%A2-%E1%80%9C%E1%80%AB%E1%80%A1%E1%80%AE%E1%80%80%E1%80%B0%E1%80%B8-%E1%81%81%E1%81%82-%E1%81%81%E1%81%88-%E1%81%82%E1%81%80%E1%81%82%E1%81%84/"
                                 data-lang-code="KR"
                                 data-locale="ksw">karen sgaw</option>
                           
                              <option
                                 data-alternative-spellings="қазақ  "
                                 
                                 value="kk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kk/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/jw-%D0%B6%D2%B1%D0%BC%D1%8B%D1%81-%D0%B4%D3%99%D0%BF%D1%82%D0%B5%D1%80%D1%96/%D1%88%D1%96%D0%BB%D0%B4%D0%B5-%D1%82%D0%B0%D0%BC%D1%8B%D0%B7-2024-mwb/2024-%D0%B6%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-12-18-%D1%82%D0%B0%D0%BC%D1%8B%D0%B7-%D0%B0%D1%80%D0%B0%D0%BB%D1%8B%D2%93%D1%8B%D0%BD%D0%B4%D0%B0-%D3%A9%D1%82%D0%B5%D1%82%D1%96%D0%BD-%D3%A8%D0%BC%D1%96%D1%80%D1%96%D0%BC%D1%96%D0%B7-%D0%B1%D0%B5%D0%BD-%D2%9B%D1%8B%D0%B7%D0%BC%D0%B5%D1%82%D1%96%D0%BC%D1%96%D0%B7%D0%B4%D1%96%D2%A3-%D0%BA%D0%B5%D1%81%D1%82%D0%B5%D1%81%D1%96/"
                                 data-lang-code="AZ"
                                 data-locale="kk">kazajo</option>
                           
                              <option
                                 data-alternative-spellings="قازاق ٴتىلى (ارابشا جازۋى) قازاق ٴتىلى ارابشا جازۋى kazajo (alfabeto arabe) kazajo alfabeto arabe"
                                 
                                 value="kk-arab"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kk-arab/%D9%83%D9%89%D8%AA%D8%A7%D9%BE%D8%AD%D8%A7%D9%86%D8%A7/jw-%D8%AC%DB%87%E2%80%8C%D9%85%D9%89%D8%B3-%D8%AF%D8%A7%D9%BE%D8%AA%DB%95%E2%80%8C%D8%B1%D9%89/%D8%B4%D9%89%D9%84%D8%AF%DB%95-%D8%AA%D8%A7%D9%85%D9%89%D8%B2-2024-bwm/2024-%D8%AC%D9%89%D9%84%D8%AF%D9%89%DA%AD-12-18-%D8%AA%D8%A7%D9%85%D9%89%D8%B2-%D8%A7%D8%B1%D8%A7%D9%84%D9%89%D8%B9%D9%89%D9%86%D8%AF%D8%A7-%D9%88%D8%AA%DB%95%E2%80%8C%D8%AA%D9%89%D9%86-%D9%B6%D9%85%D9%89%D8%B1%D9%89%D9%85%D9%89%D8%B2-%D8%A8%DB%95%E2%80%8C%D9%86-%D9%82%D9%89%D8%B2%D9%85%DB%95%E2%80%8C%D8%AA%D9%89%D9%85%D9%89%D8%B2%D8%AF%D9%89%DA%AD-%D9%83%DB%95%E2%80%8C%D8%B3%D8%AA%DB%95%E2%80%8C%D8%B3%D9%89/"
                                 data-lang-code="AZA"
                                 data-locale="kk-arab">kazajo (alfabeto árabe)</option>
                           
                              <option
                                 data-alternative-spellings="q’eqchi’ q'eqchi' qeqchi kekchi"
                                 
                                 value="kek"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kek/tojak/jw-xhuhil-li-qachutam/julio-agosto-2024-mwb/Qayu%CA%BCam-ut-Qak%CA%BCanjel-jo%CA%BC-aj-Paab%CA%BCanel-12-toj-18-re-agosto-2024/"
                                 data-lang-code="GK"
                                 data-locale="kek">kekchí</option>
                           
                              <option
                                 data-alternative-spellings="Khana  "
                                 
                                 value="ogo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ogo/pya-i-kpa/kpa-en%C9%94%C4%81nu-pya-jw/%C9%9Br%C9%9Bba-en%C9%94%C9%94-%C9%9Br%C9%9Btaa-en%C9%94%C9%94-2024-mwb/K%C9%9B%CC%84-En%C9%94%C4%81nu-T%C9%94%C9%94%CC%84dum-Le-Tam-Zue-Ue-Eki%C4%81doo-12-18-%C6%90r%C9%9Btaa-En%C9%94%C9%94%CC%84-2024/"
                                 data-lang-code="OG"
                                 data-locale="ogo">khana</option>
                           
                              <option
                                 data-alternative-spellings="Kikongo  "
                                 
                                 value="kwy"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kwy/lundilu/jw-nkanda-malongi/yuli-agositu-2024-mwb/Programa-ya-Lukutakanu-Zingu-ye-Salu-Kieto-12-18-kia-Agositu-2024/"
                                 data-lang-code="KG"
                                 data-locale="kwy">kikongo</option>
                           
                              <option
                                 data-alternative-spellings="Kikongo ya leta  "
                                 
                                 value="ktu-x-kgl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ktu-x-kgl/bibloteke/jw-mukanda-ya-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Programe-ya-lukutakanu-Luzingu-mpe-kisalu-ya-Baklisto-samu-na-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="KGL"
                                 data-locale="ktu-x-kgl">kikongo ya leta</option>
                           
                              <option
                                 data-alternative-spellings="Gĩkũyũ Gikuyu "
                                 
                                 value="ki"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ki/library/kabuku-ka-mucemanio-ka-jw/jula%C4%A9-agosti-2024-mwb/M%C5%A9taratara-wa-M%C5%A9cemanio-wa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungata-wa-Agosti-12-18-2024/"
                                 data-lang-code="KQ"
                                 data-locale="ki">kikuyu</option>
                           
                              <option
                                 data-alternative-spellings="Kiluba  "
                                 
                                 value="lu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lu/kib%C4%ABko/jw-kabuku-ka-ku-kupwila/kweji-7-kweji-8-2024-mwb/Mpangiko-ya-Kupwila-kwa-B%C5%ABmi-ne-Mwingilo-ya-12-18-Kweji-8-2024/"
                                 data-lang-code="KU"
                                 data-locale="lu">kiluba</option>
                           
                              <option
                                 data-alternative-spellings="Kimbundu  "
                                 
                                 value="kmb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kmb/kididi-kyamadivulu/jw-milongi-phala-ionge/july-august-2024-mwb/Ukexilu-wa-Ukidist%C3%A1-ni-Ukunji-Wetu-Milongi-ya-12-18-ya-Kakwinyi-2024/"
                                 data-lang-code="KIM"
                                 data-locale="kmb">kimbundu</option>
                           
                              <option
                                 data-alternative-spellings="Kinande  "
                                 
                                 value="nnb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nnb/ekibikiro/jw-omuhindano-akatabu/omwisi-7-Omwisi-8-2024-mwb/Eprograme-yomuhindano-Omubiiri-nengebe-eyekiro-12-18-Omwisi-8-2024/"
                                 data-lang-code="KIN"
                                 data-locale="nnb">kinande</option>
                           
                              <option
                                 data-alternative-spellings="Ikinyarwanda  "
                                 
                                 value="rw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rw/isomero/jw-agatabo-iteraniro/nyakanga-kanama-2024-mwb/Porogaramu-yIteraniro-ryUmurimo-tariki-ya-12-18-Kanama-2024/"
                                 data-lang-code="YW"
                                 data-locale="rw">kiniaruanda</option>
                           
                              <option
                                 data-alternative-spellings="Kipende  "
                                 
                                 value="pem"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pem/biblioteke/jw-mukahda-wa-gukalegela-mu-gudibungisa/juillet-aout-2024-mwb/Programe-ya-Gudibungisa-gua-Lujingu-nu-Mudimo-ya-Phoso-ya-12-18-Aout-2024/"
                                 data-lang-code="KIP"
                                 data-locale="pem">kipende</option>
                           
                              <option
                                 data-alternative-spellings="кыргыз  kirguis"
                                 
                                 value="ky"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ky/%D0%9A%D0%B8%D1%82%D0%B5%D0%BF%D0%BA%D0%B0%D0%BD%D0%B0/jw-%D0%BE%D0%BA%D1%83%D1%83-%D0%BA%D1%83%D1%80%D0%B0%D0%BB%D1%8B/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%AB%D0%B9%D1%8B%D0%BA-%D0%BA%D1%8B%D0%B7%D0%BC%D0%B0%D1%82%D1%8B%D0%B1%D1%8B%D0%B7-%D0%B6%D0%B0%D0%BD%D0%B0-%D0%B6%D0%B0%D1%88%D0%BE%D0%BE%D0%B1%D1%83%D0%B7-%D0%B6%D0%BE%D0%BB%D1%83%D0%B3%D1%83%D1%88%D1%83%D1%83%D1%81%D1%83%D0%BD%D1%83%D0%BD-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B3%D0%B8-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/"
                                 data-lang-code="KZ"
                                 data-locale="ky">kirguís</option>
                           
                              <option
                                 data-alternative-spellings="Kiribati  "
                                 
                                 value="gil"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gil/Bwaai-Aika-Kakaongora/jw-te-boki-n-reirei/turai-aokati-2024-mwb/Maiura-ao-Ara-Mwakuri-ni-Minita-Kaetieti-n-te-Botaki-Ibukin-Aokati-12-18-2024/"
                                 data-lang-code="GB"
                                 data-locale="gil">kiribatiano</option>
                           
                              <option
                                 data-alternative-spellings="Ikirundi  "
                                 
                                 value="run"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/run/ivyasohowe/jw-agatabu-k-ikoraniro/mukakaro-myandagaro-2024-mwb/Urutonde-rwikoraniro-ryUbuzima-bwacu-nigikorwa-cacu-rwo-ku-wa-12-18-Myandagaro-2024/"
                                 data-lang-code="RU"
                                 data-locale="run">kirundi</option>
                           
                              <option
                                 data-alternative-spellings="Kisiei  "
                                 
                                 value="kss"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kss/yaula%C5%8B-ny%C9%94%C9%94%C5%8B/jw-yau-wali-b%C9%94%C5%8Ba%C5%8Bndo/su%C9%9B%C9%9Bs%C9%94%C9%94-naand%C9%94%C9%94-2024-mwb/Yoomu-Naa-leKilisi%C9%94%C5%8Bndo-a-Wali-Pollo-a-M%C9%9B%C9%9B-B%C9%94%C5%8Ba%C5%8Bndo-Cho-Wa-Tosa%C5%8B-Ndo-y%C9%9B-Naand%C9%94%C9%94-12-18-2024/"
                                 data-lang-code="KI"
                                 data-locale="kss">kisi</option>
                           
                              <option
                                 data-alternative-spellings="Kisongye  "
                                 
                                 value="sop"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sop/Biblioteke/jw-programe-a-bisangilo/mueshi-wa-musambo-na-wa-muanda-2024-mwb/Programe-a-bisangilo-bia-Buina-Nkidishitu-na-mudimo-wetu-bua-lubingo-lua-12-1882024/"
                                 data-lang-code="KSN"
                                 data-locale="sop">kisonge</option>
                           
                              <option
                                 data-alternative-spellings="Kituba  "
                                 
                                 value="ktu-x-kit"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ktu-x-kit/Bibliotek/jw-mukanda-ya-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Bima-ya-kulongoka-ya-lukutakanu-ya-beto-Luzingu-mpe-kisalu-ya-beto-ya-bukristo-ya-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="KIT"
                                 data-locale="ktu-x-kit">kituba</option>
                           
                              <option
                                 data-alternative-spellings="Kokola  "
                                 
                                 value="kzn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kzn/Laibulale/jw-isibukhu-ya-migumano/julayi-ogaste-2024-mwb/Utumiki-Koma-Teto-Moywi-u-wa-Ikiristu-Ndandanda-ya-Misonkano-ya-Ogaste-12-18-2024/"
                                 data-lang-code="KKL"
                                 data-locale="kzn">kokola</option>
                           
                              <option
                                 data-alternative-spellings="Konkani (Romi) Konkani Romi konkani alfabeto latino"
                                 
                                 value="gom"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gom/library/jw-mitting-pustika/julay-agost-2024-mwb/Jivit-ani-Porgottnni-Mittingechi-Volleri-Agost-12-18-2024/"
                                 data-lang-code="KT"
                                 data-locale="gom">konkani (alfabeto latino)</option>
                           
                              <option
                                 data-alternative-spellings="Kosraean  "
                                 
                                 value="kos"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kos/mwe-rit/jw-oakwuck-ke-toeni-inge/july-august-2024-mwb/Oakwuck-nuhke-Toeni-ke-Moul-ac-Orekma-in-Luti-keAugust-12-18-2024/"
                                 data-lang-code="OS"
                                 data-locale="kos">kosreano</option>
                           
                              <option
                                 data-alternative-spellings="Kpelle  "
                                 
                                 value="xpe"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/xpe/k%C3%BAk%C9%94l%C9%94-%C5%8Bai/jw-koy%C3%A2%C5%8B-su-k%C9%94l%C9%94-kpuai/gb%C9%94%C9%94y%C9%94%C9%94i-manaai-2024-mwb/Dik%C9%9B-%C9%A3eni%C9%9Bi-Da-Di%C9%A3ala-woo-%C9%93o-Tii-Koya%C5%8B-%C5%8A%C9%94t%C3%A3i-Manaai-12-18-2024-m%C9%9Bni-mai/"
                                 data-lang-code="KP"
                                 data-locale="xpe">kpelle</option>
                           
                              <option
                                 data-alternative-spellings="Krio  krio"
                                 
                                 value="kri"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kri/buk-%C9%9Bn-%C9%94da-tin-d%C9%9Bn/jw-mitin-buk/july-august-2024-mwb/Wi-Kristian-Layf-%C9%9Bn-Prichin-Wok-Mitin-Buk-f%C9%94-%C6%86g%C9%94st-12-18-2024/"
                                 data-lang-code="KRI"
                                 data-locale="kri">krío</option>
                           
                              <option
                                 data-alternative-spellings="Kurdî (Kurmancî) Kurdi (Kurmanci) Kurdi Kurmanci kurdo kurmanyi"
                                 
                                 value="kmr-x-rd"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kmr-x-rd/kitebxane/bernameya-civina-sy/t%C3%AErmeh-tebax-2024-mwb/Jiyan-%C3%BB-Xizmet-Bernameya-Civ%C3%AEn%C3%AA-ji-bo-12-18-Tebax-2024/"
                                 data-lang-code="RD"
                                 data-locale="kmr-x-rd">kurdo kurmanyí</option>
                           
                              <option
                                 data-alternative-spellings="К′öрди Кöрманщи (Кирили) К′öрди Кöрманщи Кирили kurdo kurmanyi (alfabeto cirilico) kurdo kurmanyi alfabeto cirilico"
                                 
                                 value="kmr-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kmr-cyrl/%D0%BA%D1%8C%D1%82%D0%B5%D0%B1%D1%85%D0%B0%D0%BD%D3%99/jw-%D1%89%D1%8C%D0%B2%D0%B8%D0%BD-%D0%B1%D3%99%D1%80%D0%BD%D0%B0%D0%BC%D0%B0-%D1%89%D1%8C%D0%B2%D0%B8%D0%BD%D0%B5/%D1%82%D1%8C%D1%80%D0%BC%D3%99%D2%BB-%D1%82%D3%99%D0%B1%D0%B0%D1%85-2024-%D0%BC%D4%9D%D0%B1/%D0%91%D1%8C%D0%B6%D0%B8%D0%BD-%D1%83-%D0%A5%D1%8C%D0%B7%D0%BC%D3%99%D1%82-%D0%BA%D1%8C%D0%BD-%D0%91%D3%99%D1%80%D0%BD%D0%B0%D0%BC%D0%B0-%D0%A9%D1%8C%D0%B2%D0%B8%D0%BD%D0%B5-%D0%B1%D0%BE%D0%BD%D0%B0-12-18-%D0%A2%CA%B9%D3%99%D0%B1%D0%B0%D1%85%D0%B5-2024/"
                                 data-lang-code="RDC"
                                 data-locale="kmr-cyrl">kurdo kurmanyí (alfabeto cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="Kurdî Kurmancî (Kavkazûs) Kurdi Kurmanci (Kavkazus) Kurdi Kurmanci Kavkazus kurdo kurmanyi del Caucaso"
                                 
                                 value="kmr-x-rdu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kmr-x-rdu/kit%C3%AAbxane/jw-civ%C3%AEn-bernama-civ%C3%AEn%C3%AA/tirmeh-tebax-2024-mwb/Bij%C3%AEn-%C3%BB-Xizmet-kin-Bernama-Civ%C3%AEn%C3%AA-bona-12-18-Tebax%C3%AA-2024/"
                                 data-lang-code="RDU"
                                 data-locale="kmr-x-rdu">kurdo kurmanyí del Cáucaso</option>
                           
                              <option
                                 data-alternative-spellings="Rukwangali  kwangali"
                                 
                                 value="kwn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kwn/Yimbapiratjangwa/jw-mbapira-zekepongo/pembankuru-siwogedi-2024-mwb/Elikwamo-lyepongo-Eparu-lyetu-noyirugana-yokuzuvhisa-12-18-Siwogedi-2024/"
                                 data-lang-code="WG"
                                 data-locale="kwn">kwangalí</option>
                           
                              <option
                                 data-alternative-spellings="Oshikwanyama  "
                                 
                                 value="kj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/kj/ongulumambo/okafo-kokulongifwa-pokwoongala-kweendombwedi-dajehova/july-august-2024-mwb/Elandulafano-lokafo-Onghalamwenyo-yopaKriste-noilonga-yokuudifa-mo-12-18-Auguste-2024/"
                                 data-lang-code="KY"
                                 data-locale="kj">kwanyama</option>
                           
                              <option
                                 data-alternative-spellings="Kyangonde  "
                                 
                                 value="nyy-x-nkn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nyy-x-nkn/ilayibulale/jw-imbatiko-ya-ngomano/julayi-ogasiti-2024-mwb/Ukufumusya-nu-Bumi-Imbatiko-ya-Ngomano-Syitu-iya-Ogasiti-12-18-2024/"
                                 data-lang-code="NKN"
                                 data-locale="nyy-x-nkn">kyangonde</option>
                           
                              <option
                                 data-alternative-spellings="Laˇhuˍ hkawˇ  lahu"
                                 
                                 value="lhu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lhu/Ma%CB%8D-la%CB%87-ve-aw%CB%AC-ceu%CB%AC-te%CB%87-hpa%CB%8D/jw-hpawn-da-ve-te-jaw-tu-li-ko/ha-pa-7-ma-ha-pa-8-ma-2024-mwb/A-sha%EA%9E%88-te%EA%9E%88-hk%CA%BCa%CB%87-leh-G%CA%BCui%CB%AC-sha-kan%CB%89-te-ve-hpawn%CB%AC-da%EA%9E%88-ve-te-jaw%CB%AC-tu%CB%AC-li%EA%9E%88-k%CA%BCo%CB%86-Ha-pa-8-ma%CB%AC-12-18-nyi-2024/"
                                 data-lang-code="LAH"
                                 data-locale="lhu">lahú</option>
                           
                              <option
                                 data-alternative-spellings="Chilambya  "
                                 
                                 value="lai"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lai/ilayibulale/jw-akabuku-ka-lukomano/julayi-ogasiti-2024-mwb/Indondomeko-iya-Lukomano-nu-Bulumbilili-iya-Ogasiti-12-18-2024/"
                                 data-lang-code="LMB"
                                 data-locale="lai">lambya</option>
                           
                              <option
                                 data-alternative-spellings="ລາວ  "
                                 
                                 value="lo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lo/%E0%BA%AA%E0%BA%B7%E0%BB%88%E0%BB%81%E0%BA%A5%E0%BA%B0%E0%BA%AA%E0%BA%B4%E0%BB%88%E0%BA%87%E0%BA%9E%E0%BA%B4%E0%BA%A1/jw-%E0%BA%84%E0%BA%B9%E0%BB%88%E0%BA%A1%E0%BA%B7-%E0%BA%81%E0%BA%B2%E0%BA%99%E0%BA%9B%E0%BA%B0%E0%BA%8A%E0%BA%B8%E0%BA%A1/%E0%BA%81%E0%BB%8D%E0%BA%A5%E0%BA%B0%E0%BA%81%E0%BA%BB%E0%BA%94-%E0%BA%AA%E0%BA%B4%E0%BA%87%E0%BA%AB%E0%BA%B2-2024-%E0%BA%84%E0%BA%A1%E0%BA%9B/%E0%BA%95%E0%BA%B2%E0%BA%95%E0%BA%B0%E0%BA%A5%E0%BA%B2%E0%BA%87%E2%80%8B%E0%BA%81%E0%BA%B2%E0%BA%99%E2%80%8B%E0%BA%9B%E0%BA%B0%E0%BA%8A%E0%BA%B8%E0%BA%A1%E2%80%8B%E0%BA%8A%E0%BA%B5%E0%BA%A7%E0%BA%B4%E0%BA%94%E2%80%8B%E0%BB%81%E0%BA%A5%E0%BA%B0%E2%80%8B%E0%BA%A7%E0%BA%BD%E0%BA%81%E2%80%8B%E0%BA%AE%E0%BA%B1%E0%BA%9A%E0%BB%83%E0%BA%8A%E0%BB%89%E2%80%8B%E0%BA%AA%E0%BA%B3%E0%BA%A5%E0%BA%B1%E0%BA%9A%E2%80%8B%E0%BA%A7%E0%BA%B1%E0%BA%99%E2%80%8B%E0%BA%97%E0%BA%B5-12-18-%E0%BA%AA%E0%BA%B4%E0%BA%87%E0%BA%AB%E0%BA%B2-2024/"
                                 data-lang-code="LA"
                                 data-locale="lo">lao</option>
                           
                              <option
                                 data-alternative-spellings="Kilari  "
                                 
                                 value="ldi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ldi/biblioteke/jw-mukanda-wa-lukutakanu/juillet-ao%C3%BBt-2024-mwb/Programe-ya-lukutakanu-lwa-Luzingu-na-tisalu-ya-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="LR"
                                 data-locale="ldi">lari</option>
                           
                              <option
                                 data-alternative-spellings="Baledha  "
                                 
                                 value="led"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/led/bbuku-kpari/jw-meeting-workbook-led/bi-7-bi-8-2024-mwb/Maisha-ndirigoti-lodradha-dhi-nj%C3%AD-dhi-njudha-dhi-programu-Bi-8-ddo-12-ddo-18-2024/"
                                 data-lang-code="LND"
                                 data-locale="led">lendu</option>
                           
                              <option
                                 data-alternative-spellings="Língua angolana de sinais Lingua angolana de sinais lengua de senas angolena"
                                 
                                 value="sgn-ao"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/sgn-ao/biblioteca/jw-manual-de-atividades-do-mes/jullho-agosto-2024-mwb/Programa%C3%A7%C3%A3o-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-para-12-18-de-agosto-de-2024/"
                                 data-lang-code="LAS"
                                 data-locale="sgn-ao">lengua de señas angoleña</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas argentina lengua de senas argentina lengua de senas argentina"
                                 
                                 value="aed"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/aed/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSA"
                                 data-locale="aed">lengua de señas argentina</option>
                           
                              <option
                                 data-alternative-spellings="Auslan (Australian Sign Language) Auslan Australian Sign Language lengua de senas australiana"
                                 
                                 value="asf"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/asf/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="AUS"
                                 data-locale="asf">lengua de señas australiana</option>
                           
                              <option
                                 data-alternative-spellings="မြန်မာ လက်သင်္ကေတပြဘာသာစကား  lengua de senas birmana"
                                 
                                 value="sgn-mm"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/sgn-mm/%E1%80%85%E1%80%AC%E1%80%80%E1%80%BC%E1%80%8A%E1%80%B7%E1%80%BA%E1%80%90%E1%80%AD%E1%80%AF%E1%80%80%E1%80%BA/jw-%E1%80%9C%E1%80%B1%E1%80%B7%E1%80%80%E1%80%BB%E1%80%84%E1%80%B7%E1%80%BA%E1%80%81%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%85%E1%80%AC%E1%80%85%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA/%E1%80%87%E1%80%B0%E1%80%9C%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%82%E1%81%80%E1%81%82%E1%81%84-mwb/%E1%81%82%E1%81%80%E1%81%82%E1%81%84-%E1%80%A9%E1%80%82%E1%80%AF%E1%80%90%E1%80%BA-%E1%81%81%E1%81%82-%E1%81%81%E1%81%88-%E1%80%A1%E1%80%90%E1%80%BD%E1%80%80%E1%80%BA-%E1%80%A1%E1%80%9E%E1%80%80%E1%80%BA%E1%80%90%E1%80%AC%E1%80%94%E1%80%B2%E1%80%B7-%E1%80%A1%E1%80%99%E1%80%BE%E1%80%AF%E1%80%86%E1%80%B1%E1%80%AC%E1%80%84%E1%80%BA%E1%80%9C%E1%80%AF%E1%80%95%E1%80%BA%E1%80%84%E1%80%94%E1%80%BA%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%8A%E1%80%BA%E1%80%B8%E1%80%A1%E1%80%9D%E1%80%B1%E1%80%B8-%E1%80%A1%E1%80%85%E1%80%AE%E1%80%A1%E1%80%85%E1%80%89%E1%80%BA%E1%80%87%E1%80%9A%E1%80%AC%E1%80%B8/"
                                 data-lang-code="BUS"
                                 data-locale="sgn-mm">lengua de señas birmana</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas boliviana lengua de senas boliviana lengua de senas boliviana"
                                 
                                 value="bvl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/bvl/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="BVL"
                                 data-locale="bvl">lengua de señas boliviana</option>
                           
                              <option
                                 data-alternative-spellings="Língua brasileira de sinais (Libras) Lingua brasileira de sinais (Libras) Lingua brasileira de sinais Libras lengua de senas brasilena"
                                 
                                 value="bzs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/bzs/biblioteca/jw-apostila-do-mes/jullho-agosto-2024-mwb/Programa%C3%A7%C3%A3o-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-para-12-18-de-agosto-de-2024/"
                                 data-lang-code="LSB"
                                 data-locale="bzs">lengua de señas brasileña</option>
                           
                              <option
                                 data-alternative-spellings="British Sign Language  lengua de senas britanica"
                                 
                                 value="bfi"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/bfi/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="BSL"
                                 data-locale="bfi">lengua de señas británica</option>
                           
                              <option
                                 data-alternative-spellings="český znakový jazyk cesky znakovy jazyk lengua de senas checa"
                                 
                                 value="cse"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/cse/knihovna/jw-pracovni-sesit/cervenec-srpen-2024-mwb/Program-shrom%C3%A1%C5%BEd%C4%9Bn%C3%AD-N%C3%A1%C5%A1-k%C5%99es%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-v-t%C3%BDdnu-12-18-srpna-2024/"
                                 data-lang-code="CSE"
                                 data-locale="cse">lengua de señas checa</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas chilena lengua de senas chilena lengua de senas chilena"
                                 
                                 value="csg"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/csg/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="SCH"
                                 data-locale="csg">lengua de señas chilena</option>
                           
                              <option
                                 data-alternative-spellings="中国手语  lengua de senas china"
                                 
                                 value="csl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/csl/%E5%A4%9A%E5%AA%92%E4%BD%93%E5%9B%BE%E4%B9%A6%E9%A6%86/%E8%80%B6%E5%92%8C%E5%8D%8E%E8%A7%81%E8%AF%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C/%E8%81%9A%E4%BC%9A%E6%89%8B%E5%86%8C2024%E5%B9%B47-8%E6%9C%88/%E4%BC%A0%E9%81%93%E4%B8%8E%E7%94%9F%E6%B4%BB%E8%81%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CSL"
                                 data-locale="csl">lengua de señas china</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas colombiana lengua de senas colombiana lengua de senas colombiana"
                                 
                                 value="csn"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/csn/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vivir-y-Ense%C3%B1ar-igual-a-Jes%C3%BAs-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSC"
                                 data-locale="csn">lengua de señas colombiana</option>
                           
                              <option
                                 data-alternative-spellings="Langue des signes congolaise  lengua de senas congolena"
                                 
                                 value="sgn-cd"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/sgn-cd/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-juillet-ao%C3%BBt-2024/Programme-pour-la-r%C3%A9union-Vie-et-minist%C3%A8re-du-12-au-18-ao%C3%BBt-2024/"
                                 data-lang-code="CGS"
                                 data-locale="sgn-cd">lengua de señas congoleña</option>
                           
                              <option
                                 data-alternative-spellings="한국 수어  lengua de senas coreana"
                                 
                                 value="kvk"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/kvk/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/%EC%97%AC%ED%98%B8%EC%99%80%EC%9D%98-%EC%A6%9D%EC%9D%B8-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/2024%EB%85%84-7%EC%9B%94-8%EC%9B%94-%EC%A7%91%ED%9A%8C-%EA%B5%90%EC%9E%AC/%EC%83%9D%ED%99%9C%EA%B3%BC-%EB%B4%89%EC%82%AC-%EC%A7%91%ED%9A%8C-%EA%B3%84%ED%9A%8D%ED%91%9C-2024%EB%85%84-8%EC%9B%94-12-18%EC%9D%BC/"
                                 data-lang-code="KSL"
                                 data-locale="kvk">lengua de señas coreana</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas costarricense lengua de senas costarricense lengua de senas costarricense"
                                 
                                 value="csr"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/csr/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="SCR"
                                 data-locale="csr">lengua de señas costarricense</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas cubana lengua de senas cubana lengua de senas cubana"
                                 
                                 value="csf"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/csf/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="CBS"
                                 data-locale="csf">lengua de señas cubana</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas de Guatemala lengua de senas de Guatemala lengua de senas de Guatemala"
                                 
                                 value="gsm"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/gsm/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSG"
                                 data-locale="gsm">lengua de señas de Guatemala</option>
                           
                              <option
                                 data-alternative-spellings="Langue des signes québécoise Langue des signes quebecoise lengua de senas de Quebec"
                                 
                                 value="fcs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/fcs/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-juillet-ao%C3%BBt-2024/Programme-pour-la-r%C3%A9union-Vie-et-minist%C3%A8re-du-12-au-18-ao%C3%BBt-2024/"
                                 data-lang-code="LSQ"
                                 data-locale="fcs">lengua de señas de Quebec</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas ecuatoriana lengua de senas ecuatoriana lengua de senas ecuatoriana"
                                 
                                 value="ecs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ecs/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="SEC"
                                 data-locale="ecs">lengua de señas ecuatoriana</option>
                           
                              <option
                                 data-alternative-spellings="slovenský posunkový jazyk slovensky posunkovy jazyk lengua de senas eslovaca"
                                 
                                 value="svk"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/svk/videa/pracovny-zosit-na-zhromazdenie/jul-august-2024-mwb/Rozvrh-zhroma%C5%BEdenia-N%C3%A1%C5%A1-kres%C5%A5ansk%C3%BD-%C5%BEivot-a-slu%C5%BEba-na-12-18-augusta-2024/"
                                 data-lang-code="VSL"
                                 data-locale="svk">lengua de señas eslovaca</option>
                           
                              <option
                                 data-alternative-spellings="Filipino Sign Language  lengua de senas filipina"
                                 
                                 value="psp"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/psp/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="FSL"
                                 data-locale="psp">lengua de señas filipina</option>
                           
                              <option
                                 data-alternative-spellings="suomalainen viittomakieli  lengua de senas finlandesa"
                                 
                                 value="fse"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/fse/kirjasto/el%C3%A4m%C3%A4-ja-palvelus-ty%C3%B6kirja/heina-elokuu-2024-tyokirja/El%C3%A4m%C3%A4-ja-palvelus-kokouksen-ohjelma-12-18-elokuuta-2024/"
                                 data-lang-code="FID"
                                 data-locale="fse">lengua de señas finlandesa</option>
                           
                              <option
                                 data-alternative-spellings="Langue des signes française Langue des signes francaise lengua de senas francesa"
                                 
                                 value="fsl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/fsl/biblioth%C3%A8que/jw-cahier-vie-et-ministere/mwb-juillet-ao%C3%BBt-2024/Programme-pour-la-r%C3%A9union-Vie-et-minist%C3%A8re-du-12-au-18-ao%C3%BBt-2024/"
                                 data-lang-code="LSF"
                                 data-locale="fsl">lengua de señas francesa</option>
                           
                              <option
                                 data-alternative-spellings="Ghanaian Sign Language  lengua de senas ghanesa"
                                 
                                 value="gse"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/gse/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="GHS"
                                 data-locale="gse">lengua de señas ghanesa</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas hondureña lengua de senas hondurena lengua de senas hondurena"
                                 
                                 value="hds"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/hds/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="SHO"
                                 data-locale="hds">lengua de señas hondureña</option>
                           
                              <option
                                 data-alternative-spellings="magyar jelnyelv  lengua de senas hungara"
                                 
                                 value="hsh"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/hsh/konyvtar/jw-munkafuzet/julius-augusztus-2024-mwb/%C3%89let%C3%BCnk-%C3%A9s-szolg%C3%A1latunk-%C3%B6sszej%C3%B6vetel-programterve-2024-augusztus-12-18/"
                                 data-lang-code="HDF"
                                 data-locale="hsh">lengua de señas húngara</option>
                           
                              <option
                                 data-alternative-spellings="Indian Sign Language  lengua de senas india"
                                 
                                 value="ins"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ins/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="INS"
                                 data-locale="ins">lengua de señas india</option>
                           
                              <option
                                 data-alternative-spellings="Bahasa Isyarat Indonesia  lengua de senas indonesia"
                                 
                                 value="inl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/inl/perpustakaan/jw-lembar-pelajaran/mwb-juli-agustus-2024/Jadwal-Perhimpunan-Pelayanan-dan-Kehidupan-Kristen-untuk-12-18-Agustus-2024/"
                                 data-lang-code="INI"
                                 data-locale="inl">lengua de señas indonesia</option>
                           
                              <option
                                 data-alternative-spellings="שפת סימנים ישראלית  lengua de senas israeli"
                                 
                                 value="isr"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/isr/%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94/%D7%92%D7%99%D7%9C%D7%99%D7%95%D7%9F-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%94-%D7%A9%D7%9C-%D7%A2%D7%93%D7%99-%D7%99%D7%94%D7%95%D7%94/%D7%99%D7%95%D7%9C%D7%99-%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024-%D7%92%D7%A4%D7%90/%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%AA-%D7%9C%D7%90%D7%A1%D7%99%D7%A4%D7%AA-%D7%90%D7%95%D7%A8%D7%97-%D7%97%D7%99%D7%99%D7%A0%D7%95-%D7%95%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%A0%D7%95-%D7%94%D7%9E%D7%A9%D7%99%D7%97%D7%99%D7%99%D7%9D-12-18-%D7%91%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-2024/"
                                 data-lang-code="QSL"
                                 data-locale="isr">lengua de señas israelí</option>
                           
                              <option
                                 data-alternative-spellings="Lingua dei segni italiana  lengua de senas italiana"
                                 
                                 value="ise"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ise/biblioteca-digitale/guida-attivita-adunanza/mwb-luglio-agosto-2024/Programma-adunanza-Vita-e-ministero-dal-12-al-18-agosto-2024/"
                                 data-lang-code="ISL"
                                 data-locale="ise">lengua de señas italiana</option>
                           
                              <option
                                 data-alternative-spellings="日本手話  lengua de senas japonesa"
                                 
                                 value="jsl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/jsl/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/jw-%E9%9B%86%E4%BC%9A%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%96%E3%83%83%E3%82%AF/2024%E5%B9%B4-7%E6%9C%88-8%E6%9C%88-mwb/2024%E5%B9%B48%E6%9C%8812-18%E6%97%A5%E3%81%AE%E7%94%9F%E6%B4%BB%E3%81%A8%E5%A5%89%E4%BB%95%E3%81%AE%E9%9B%86%E4%BC%9A%E4%BA%88%E5%AE%9A/"
                                 data-lang-code="JSL"
                                 data-locale="jsl">lengua de señas japonesa</option>
                           
                              <option
                                 data-alternative-spellings="Kenyan Sign Language  lengua de senas keniana"
                                 
                                 value="xki"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/xki/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="KSI"
                                 data-locale="xki">lengua de señas keniana</option>
                           
                              <option
                                 data-alternative-spellings="Chinenero Chamanja cha ku Malawi  lengua de senas malaui"
                                 
                                 value="sgn-mw"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/sgn-mw/laibulale/jw-msonkhano-ndandanda/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Utumiki-Komanso-Moyo-Wathu-wa-Chikhristu-ya-August-12-18-2024/"
                                 data-lang-code="MSL"
                                 data-locale="sgn-mw">lengua de señas malauí</option>
                           
                              <option
                                 data-alternative-spellings="Tenin’ny Tanana Malagasy Tenin'ny Tanana Malagasy Teninny Tanana Malagasy lengua de senas malgache"
                                 
                                 value="mzc"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/mzc/zavatra-misy/fivoriana-vj-tari-dalana/jolay-aogositra-2024-mwb/Fivoriana-Momba-ny-Fiainantsika-Kristianina-sy-ny-Fanompoana-Fandaharana-ho-Anny-12-18-Aogositra-2024/"
                                 data-lang-code="TTM"
                                 data-locale="mzc">lengua de señas malgache</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas mexicana lengua de senas mexicana lengua de senas mexicana"
                                 
                                 value="mfs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/mfs/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSM"
                                 data-locale="mfs">lengua de señas mexicana</option>
                           
                              <option
                                 data-alternative-spellings="Língua de Sinais Moçambicana Lingua de Sinais Mocambicana lengua de senas mozambiquena"
                                 
                                 value="mzy"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/mzy/biblioteca/jw-apostila-do-mes/jullho-agosto-2024-mwb/Programa%C3%A7%C3%A3o-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-para-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="SLM"
                                 data-locale="mzy">lengua de señas mozambiqueña</option>
                           
                              <option
                                 data-alternative-spellings="Nigerian Sign Language  lengua de senas nigeriana"
                                 
                                 value="nsi"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/nsi/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="NNS"
                                 data-locale="nsi">lengua de señas nigeriana</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas panameñas lengua de senas panamenas lengua de senas panamenas"
                                 
                                 value="lsp"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/lsp/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="PSL"
                                 data-locale="lsp">lengua de señas panameñas</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas paraguaya lengua de senas paraguaya lengua de senas paraguaya"
                                 
                                 value="pys"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/pys/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSP"
                                 data-locale="pys">lengua de señas paraguaya</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas peruana lengua de senas peruana lengua de senas peruana"
                                 
                                 value="prl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/prl/videos/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vivir-y-ense%C3%B1ar-igual-a-Jes%C3%BAs-12-18-agosto-2024/"
                                 data-lang-code="SPE"
                                 data-locale="prl">lengua de señas peruana</option>
                           
                              <option
                                 data-alternative-spellings="polski język migowy polski jezyk migowy lengua de senas polaca"
                                 
                                 value="pso"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/pso/biblioteka/program-zebran-swiadkow-jehowy/lipiec-sierpie%C5%84-2024-mwb/Chrze%C5%9Bcija%C5%84skie-%C5%BCycie-i-s%C5%82u%C5%BCba-12-%E2%80%8B18-sierpnia-2024/"
                                 data-lang-code="PDF"
                                 data-locale="pso">lengua de señas polaca</option>
                           
                              <option
                                 data-alternative-spellings="Limbajul semnelor românesc Limbajul semnelor romanesc lengua de senas rumana"
                                 
                                 value="rms"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/rms/biblioteca/caiet-pentru-intrunire/iulie-august-2024-mwb/Programul-%C3%AEntrunirii-Via%C8%9Ba-cre%C8%99tin%C4%83-%C8%99i-predicarea-12-18-august-2024/"
                                 data-lang-code="LMG"
                                 data-locale="rms">lengua de señas rumana</option>
                           
                              <option
                                 data-alternative-spellings="русский жестовый  lengua de senas rusa"
                                 
                                 value="rsl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/rsl/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B8-%D0%9D%D0%B0%D1%88%D0%B0-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-12-%D0%BF%D0%BE-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0-2024-%D0%B3%D0%BE%D0%B4%D0%B0/"
                                 data-lang-code="RSL"
                                 data-locale="rsl">lengua de señas rusa</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas salvadoreña lengua de senas salvadorena lengua de senas salvadorena"
                                 
                                 value="esn"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/esn/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSS"
                                 data-locale="esn">lengua de señas salvadoreña</option>
                           
                              <option
                                 data-alternative-spellings="South African Sign Language  lengua de senas sudafricana"
                                 
                                 value="sfs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/sfs/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="SAS"
                                 data-locale="sfs">lengua de señas sudafricana</option>
                           
                              <option
                                 data-alternative-spellings="ภาษามือไทย  lengua de senas tailandesa"
                                 
                                 value="tsq"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/tsq/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%86/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1/%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%81%E0%B8%8E%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A12024/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E2%80%8B%E0%B8%81%E0%B8%B2%E0%B8%A3%E2%80%8B%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E2%80%8B%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E2%80%8B%E0%B9%81%E0%B8%A5%E0%B8%B0%E2%80%8B%E0%B8%87%E0%B8%B2%E0%B8%99%E2%80%8B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%8A%E0%B9%89-%E0%B8%A7%E0%B8%B1%E0%B8%99%E2%80%8B%E0%B8%97%E0%B8%B5%E0%B9%88-12-18-%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A1-2024/"
                                 data-lang-code="SIL"
                                 data-locale="tsq">lengua de señas tailandesa</option>
                           
                              <option
                                 data-alternative-spellings="台灣手語  lengua de senas taiwanesa"
                                 
                                 value="tss"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/tss/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="TSL"
                                 data-locale="tss">lengua de señas taiwanesa</option>
                           
                              <option
                                 data-alternative-spellings="lengua de señas venezolana lengua de senas venezolana lengua de senas venezolana"
                                 
                                 value="vsl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/vsl/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSV"
                                 data-locale="vsl">lengua de señas venezolana</option>
                           
                              <option
                                 data-alternative-spellings="Zambian Sign Language  lengua de senas zambiana"
                                 
                                 value="zsl"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/zsl/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="ZAS"
                                 data-locale="zsl">lengua de señas zambiana</option>
                           
                              <option
                                 data-alternative-spellings="Zimbabwe Sign Language  lengua de senas zimbabuense"
                                 
                                 value="zib"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/zib/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="ZSL"
                                 data-locale="zib">lengua de señas zimbabuense</option>
                           
                              <option
                                 data-alternative-spellings="lengua de signos española lengua de signos espanola lengua de signos espanola"
                                 
                                 value="ssp"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ssp/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSE"
                                 data-locale="ssp">lengua de signos española</option>
                           
                              <option
                                 data-alternative-spellings="Deutsche Gebärdensprache Deutsche Gebardensprache lenguaje de senas aleman"
                                 
                                 value="gsg"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/gsg/videos-und-mehr/jw-arbeitsheft/juli-august-2024-mwb/Programm-f%C3%BCr-die-Leben-und-Dienst-Zusammenkunft-12-18-August-2024/"
                                 data-lang-code="DGS"
                                 data-locale="gsg">lenguaje de señas alemán</option>
                           
                              <option
                                 data-alternative-spellings="American Sign Language  lenguaje de senas americano"
                                 
                                 value="ase"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ase/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="ASL"
                                 data-locale="ase">lenguaje de señas americano</option>
                           
                              <option
                                 data-alternative-spellings="lenguaje de señas nicaragüense lenguaje de senas nicaraguense lenguaje de senas nicaraguense"
                                 
                                 value="ncs"
                                 class="signLanguage"
                                 data-input-icon-class="signLanguage"
                                 data-url="/ncs/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="LSN"
                                 data-locale="ncs">lenguaje de señas nicaragüense</option>
                           
                              <option
                                 data-alternative-spellings="Cilenje  "
                                 
                                 value="leh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/leh/mabuku/jw-kabuku-kamabungano/july-august-2024-mwb/Buumi-bwa-Bwineklistu-Anciito-Yesu-Mulongo-wa-Mabungano-Wamu-August-12-18-2024/"
                                 data-lang-code="LJ"
                                 data-locale="leh">lenie</option>
                           
                              <option
                                 data-alternative-spellings="latviešu latviesu leton"
                                 
                                 value="lv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lv/bibliot%C4%93ka/jehovas-liecinieku-sapul%C4%8Du-darba-burtn%C4%ABca/j%C5%ABlijs-augusts-2024-darba-burtn%C4%ABca/Krist%C4%ABg%C4%81s-dz%C4%ABves-un-kalpo%C5%A1anas-sapulces-programma-2024-gada-12%E2%81%A0-%E2%81%A018-augustam/"
                                 data-lang-code="LT"
                                 data-locale="lv">letón</option>
                           
                              <option
                                 data-alternative-spellings="Lhukonzo  "
                                 
                                 value="koo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/koo/lebrale/jw-akatabu-komuhindano/okwomusanju-okwomunani-2024-mwb/Endegheka-yOmuhindano-owEngebe-nOmubiiri-eyOkwomunani-12-18-2024/"
                                 data-lang-code="LHK"
                                 data-locale="koo">lhukonzo</option>
                           
                              <option
                                 data-alternative-spellings="Lingala  "
                                 
                                 value="ln"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ln/Biblioteke/jw-mokanda-ya-likita/07-08-2024-mwb/Program%C9%9B-ya-Likita-Bomoi-mpe-mosala-mpo-na-p%C9%94s%C9%94-ya-12-18082024/"
                                 data-lang-code="LI"
                                 data-locale="ln">lingala</option>
                           
                              <option
                                 data-alternative-spellings="lietuvių lietuviu "
                                 
                                 value="lt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lt/biblioteka/jw-sueigu-programos-biuleteniai/2024%C2%AD-liepa-rugpjutis-sueigu-programa/M%C5%ABs%C5%B3-tarnyba-ir-gyvenimas-Tvarkara%C5%A1tis-2024-m-rugpj%C5%AB%C4%8Dio-12-18-d/"
                                 data-lang-code="L"
                                 data-locale="lt">lituano</option>
                           
                              <option
                                 data-alternative-spellings="Ilolo  "
                                 
                                 value="llb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/llb/bibiliotheka/jw-ixibukhu-ya-migumano/julho-agosto-wa-2024-mwb/Thandha-wa-migumano-ya-ingumi-yi-u-yau-Kristau-na-Urumiwi-12-18-wa-Agosto-wa-2024/"
                                 data-lang-code="LLO"
                                 data-locale="llb">lolo</option>
                           
                              <option
                                 data-alternative-spellings="Lɔɔma Looma "
                                 
                                 value="lom"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lom/k%C9%94l%C9%94-%C9%93ulugi/jw-gaal%C9%9B-ba-k%C9%94l%C9%94/july-august-2024-mwb/Ta-%C5%8Aeteai-E-V%C9%9B%C9%9B-Ta-%C6%94ala-Goo-Wotii-Ma-%C6%94aal%C9%9B-Bai-Ma-%C6%94i-Daa-Wodoi-August-12-18-2024/"
                                 data-lang-code="OM"
                                 data-locale="lom">loma</option>
                           
                              <option
                                 data-alternative-spellings="Elomwe  "
                                 
                                 value="ngl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ngl/epiipliyoteka/jw-yoochariha-mithukumano/yulyu-akostu-2024-mwb/Okumi-ni-Muteko-Ahu-Weekristu%E2%80%8B-Yoochariha-ya-Mithukumano-ya-12-18-a-Akostu-a-2024/"
                                 data-lang-code="LE"
                                 data-locale="ngl">lomue</option>
                           
                              <option
                                 data-alternative-spellings="Luganda  "
                                 
                                 value="lg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lg/layibulale/jw-akatabo-kenku%C5%8B%C5%8Baana/jjulaayi-agusito-2024-mwb/Obulamu-bwEkikristaayo-nObuweereza-Bwaffe-Enteekateeka-yEnku%C5%8B%C5%8Baana-eya-Agusito-12-18-2024/"
                                 data-lang-code="LU"
                                 data-locale="lg">luganda</option>
                           
                              <option
                                 data-alternative-spellings="Lunda  "
                                 
                                 value="lun"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lun/nyikanda-yiduhu/jw-mukanda-wakupompa/july-august-2024-mwb/Chihandilu-niMudimu-Wanetu-akwaKristu-Ndandanda-yaAugust-12-18-2024/"
                                 data-lang-code="LD"
                                 data-locale="lun">lunda</option>
                           
                              <option
                                 data-alternative-spellings="Dholuo  "
                                 
                                 value="luo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/luo/laibrari/jw-chenro-mar-chokruok/julai-agost-2024-mwb/Ngimawa-kod-Tijwa-Kaka-Jokristo-Chenro-mar-Agost-12-18-2024/"
                                 data-lang-code="LO"
                                 data-locale="luo">luo</option>
                           
                              <option
                                 data-alternative-spellings="Luvale  "
                                 
                                 value="lue"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lue/chisete/jw-mukanda-wakukunguluka/july-august-2024-mwb/Kunoneka-chaKukunguluka-chaChiyoyelo-naMulimo-chaAugust-12-18-2024/"
                                 data-lang-code="LV"
                                 data-locale="lue">luvale</option>
                           
                              <option
                                 data-alternative-spellings="Lëtzebuergesch Letzebuergesch luxemburgues"
                                 
                                 value="lb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lb/bibliotheik/jw-zesummekommen-aarbechtsheft/juli-august-2024-mwb/Programm-fir-dLiewen-an-D%C3%A9ngscht-Versammlung-12-18-August-2024/"
                                 data-lang-code="LX"
                                 data-locale="lb">luxemburgués</option>
                           
                              <option
                                 data-alternative-spellings="македонски  "
                                 
                                 value="mk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mk/biblioteka/zhivot-i-sluzhba-rabotni-listovi/%D1%98%D1%83%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9D%D0%B0%D1%88%D0%B8%D0%BE%D1%82-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D0%B5%D0%B4-%D0%B7%D0%B0-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%BA%D0%BE%D1%82-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/"
                                 data-lang-code="MC"
                                 data-locale="mk">macedonio</option>
                           
                              <option
                                 data-alternative-spellings="Emakhuwa  "
                                 
                                 value="vmw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/vmw/Ebibilioteka/jw-ekaderno-enirumeeliwa-omuthukumanoni/julho-agosto-2024-mwb/Okumi-ni-Orummwa-Ahu-eprokrama-ya-mithukumano-ya-12-18-ya-Agosto-2024/"
                                 data-lang-code="MAC"
                                 data-locale="vmw">macua</option>
                           
                              <option
                                 data-alternative-spellings="Emakhuwa Emeetto  "
                                 
                                 value="mgh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mgh/Ibibliyoteka/jw-mwaalivuru-omikutthaano/julho-agosto-2024-mwb/Iporokaraama-yo-Nkutthaano-Makhalelo-ni-Miteko-Ceekrista-12-18-yo-Agosto-2024/"
                                 data-lang-code="MWM"
                                 data-locale="mgh">makua-meeto</option>
                           
                              <option
                                 data-alternative-spellings="Makhuwa-Shirima  "
                                 
                                 value="vmk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/vmk/ebiblioteka/jw-ekadernu-ya-vamwerini/julho-agosto-2024-mwb/Eprograma-ya-mithukumano-sa-ekumi-ni-mutekwaahu-wa-makristau-ya-12-18-a-Agosto-a-2024/"
                                 data-lang-code="MHS"
                                 data-locale="vmk">makua-shirima</option>
                           
                              <option
                                 data-alternative-spellings="Melayu  "
                                 
                                 value="ms"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ms/perpustakaan/lembaran-kerja-saksi-saksi-yehuwa/julai-ogos-2024-mwb/Jadual-Perjumpaan-Kehidupan-dan-Kegiatan-Kristian-Kita-bagi-12-18-Ogos-2024/"
                                 data-lang-code="ML"
                                 data-locale="ms">malayo</option>
                           
                              <option
                                 data-alternative-spellings="മലയാളം  malayalam"
                                 
                                 value="ml"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ml/%E0%B4%B2%E0%B5%88%E0%B4%AC%E0%B5%8D%E0%B4%B0%E0%B4%B1%E0%B4%BF/jw-%E0%B4%AF%E0%B5%8B%E0%B4%97%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%B3%E0%B5%8D%E0%B4%B3-%E0%B4%AA%E0%B4%A0%E0%B4%A8%E0%B4%B8%E2%80%8B%E0%B4%B9%E0%B4%BE%E2%80%8B%E0%B4%AF%E0%B4%BF/%E0%B4%9C%E0%B5%82%E0%B4%B2%E0%B5%88-%E0%B4%86%E0%B4%97%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%E2%80%8C-2024-mwb/%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%BF%E2%80%8B%E0%B4%A4%E2%80%8B%E0%B4%B5%E0%B5%81%E0%B4%82-%E0%B4%B8%E0%B5%87%E0%B4%B5%E0%B4%A8%E2%80%8B%E0%B4%B5%E0%B5%81%E0%B4%82-%E0%B4%AF%E0%B5%8B%E0%B4%97%E2%80%8B%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B4%BF%E2%80%8B%E0%B4%A8%E0%B5%81%E0%B4%B3%E0%B5%8D%E0%B4%B3-%E0%B4%AA%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%95-2024-%E0%B4%86%E0%B4%97%E0%B4%B8%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%E2%80%8C-12-18/"
                                 data-lang-code="MY"
                                 data-locale="ml">malayálam</option>
                           
                              <option
                                 data-alternative-spellings="Malagasy  "
                                 
                                 value="mg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mg/zavatra-misy/fivoriana-vj-tari-dalana/jolay-aogositra-2024-mwb/Fivoriana-Momba-ny-Fiainantsika-Kristianina-sy-ny-Fanompoana-Fandaharana-ho-Anny-12-18-Aogositra-2024/"
                                 data-lang-code="MG"
                                 data-locale="mg">malgache</option>
                           
                              <option
                                 data-alternative-spellings="Malti  maltes"
                                 
                                 value="mt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mt/librerija/programm-fuljett-noti-xhieda-gehova/lulju-awwissu-2024-mwb/Programm-tal-%C4%A6ajja-u-l-Ministeru-Tag%C4%A7na-li-se-ji%C4%A1i-studjat-bejn-it-12-u-t-18-tAwwissu-2024/"
                                 data-lang-code="MT"
                                 data-locale="mt">maltés</option>
                           
                              <option
                                 data-alternative-spellings="mam  "
                                 
                                 value="mam"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mam/kubil-uj/jw-uj-aquntl-toj-chmabil/juilio-agosto-2024-mwb/Tajlal-xnaq%CA%BC%C2%ADtzb%CA%BCil-tku%CA%BCx-toj-u%CA%BCj-Kyanq%CA%BCib%CA%BCil-Okslal-ex-Kypakb%CA%BCab%CA%BCil-te-12-a-18-te-agosto-te-2024/"
                                 data-lang-code="MZ"
                                 data-locale="mam">mam</option>
                           
                              <option
                                 data-alternative-spellings="Cimambwe-Lungu  "
                                 
                                 value="mgr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mgr/laibulale/jw-kabuku-ka-pa-kulongana/julai-ogasiti-2024-mwb/Swe-Ina-Klistu-nu-Mulimo-Witu-Utantiko-Kutandika-Ogasiti-12-18-2024/"
                                 data-lang-code="MWL"
                                 data-locale="mgr">mambue-lungu</option>
                           
                              <option
                                 data-alternative-spellings="Emanyawa  "
                                 
                                 value="mny"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mny/bibliyoteka/mwana-livuru-na-mutugumano-mu-jw/Julho-Agosto-a-2024-mwb/Egumi-ni-mabasa-porogarama-a-mutugumano-a-12-18-Agosto-a-2024/"
                                 data-lang-code="MYW"
                                 data-locale="mny">manyawa</option>
                           
                              <option
                                 data-alternative-spellings="mapudungun  "
                                 
                                 value="arn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/arn/chem-tain-entuel/jw-papel-pepicahuam/julio-agosto-2024-mwb/%C3%91i-ng%C3%BCneduamngeal-trahun-mu-Tai%C3%B1-Mongen-ca-Tai%C3%B1-Amuldunguqueel-12-18-agosto-2024/"
                                 data-lang-code="MPD"
                                 data-locale="arn">mapudungun</option>
                           
                              <option
                                 data-alternative-spellings="मराठी  marati"
                                 
                                 value="mr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mr/%E0%A4%B2%E0%A4%BE%E0%A4%AF%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A4%B0%E0%A5%80/jw-%E0%A4%B8%E0%A4%AD%E0%A5%87%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A5%88-%E0%A4%91%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-mwb/%E0%A5%A7%E0%A5%A8-%E0%A5%A7%E0%A5%AE-%E0%A4%91%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%9F-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A4%A8-%E0%A4%86%E0%A4%A3%E0%A4%BF-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A4%AD%E0%A5%87%E0%A4%9A%E0%A4%BE-%E0%A4%86%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%A1%E0%A4%BE/"
                                 data-lang-code="MR"
                                 data-locale="mr">maratí</option>
                           
                              <option
                                 data-alternative-spellings="марий  "
                                 
                                 value="mhr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mhr/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B5/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD-%D1%82%D0%B0%D0%BD%D1%8B%D0%BA%D1%88%D0%B5-%D0%B2%D0%BB%D0%B0%D0%BA-%D0%B2%D0%B0%D1%88%D0%BB%D0%B8%D0%B9%D0%BC%D0%B0%D1%88-%D0%BF%D0%B0%D1%88%D0%B0-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B8%D0%B9-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D0%B8%D0%BB%D1%8B%D1%88-%D0%B4%D0%B5%D0%BD-%D1%81%D0%BB%D1%83%D0%B6%D1%8B%D0%BC%D0%B0%D1%88%D0%BD%D0%B0-%D0%B2%D0%B0%D1%88%D0%BB%D0%B8%D0%B9%D0%BC%D0%B0%D1%88-%D1%80%D0%B0%D0%B4%D0%B0%D0%BC/"
                                 data-lang-code="MAR"
                                 data-locale="mhr">mari</option>
                           
                              <option
                                 data-alternative-spellings="Kajin M̦ajel̦  marshales"
                                 
                                 value="mh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mh/laibrare/jw-kweilo%CC%A6k-kein-katak/julae-okwoj-2024-mwb/Jikejuul%CC%A6in-Jerbal-eo-Ad-im-W%C3%A3ween-Ad-Mour-ilo-wiik-eo-j%C3%A3n-O%CC%A6kw%C3%B5j-12-18-2024/"
                                 data-lang-code="MH"
                                 data-locale="mh">marshalés</option>
                           
                              <option
                                 data-alternative-spellings="Mashi  "
                                 
                                 value="shr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/shr/ibikiro/jw-ntimanano-ibuku/mwezi-gwa-7-nogwa-8-2024-mwb/Eprograme-yEntimanano-Omukolo-nAkalamo-yomu-Nsiku-12-1882024/"
                                 data-lang-code="MSH"
                                 data-locale="shr">mashi</option>
                           
                              <option
                                 data-alternative-spellings="maaya  "
                                 
                                 value="yua"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yua/publicacionoob/juunil-xook-muchtaambal/julio-agosto-2024-mwb/Ba%CA%BCax-kun-ilbil-12-tak-18-ti%CA%BC-agosto-ti%CA%BC-2024-te%CA%BC-much%CA%BCt%C3%A1ambal-Kuxtal-y%C3%A9etel-Meyajo%CA%BC/"
                                 data-lang-code="MAY"
                                 data-locale="yua">maya</option>
                           
                              <option
                                 data-alternative-spellings="énná enna "
                                 
                                 value="mau"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mau/xon-kao-grabacion/jw-jme-xi-chotaya-ya-kjoajtin/julio-agosto-2024-mwb/T%CA%BCats%CA%BCe-chjotale-Cristo-kao-X%C3%A1le-Nin%C3%A1-Xi-kjoa%CA%BCa-nga-12-%E2%80%8B18-s%C3%A1-agosto-n%C3%B3-2024/"
                                 data-lang-code="MAZ"
                                 data-locale="mau">mazateco de Huautla</option>
                           
                              <option
                                 data-alternative-spellings="Kĩmĩĩrũ Kimiiru "
                                 
                                 value="mer"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mer/Laiburar%C4%A9/gauku-ka-m%C5%A9cemanio-ka-jwMetaTitleGauku-ka-M%C5%A9cemanio-jwa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungat%C4%A9ri-Bwet%C5%A9-bwa-G%C4%A9krist%C5%A9-MWB-JWORG/julai-agasti-2024-mwb/M%C5%A9taratara-jwa-M%C5%A9cemanio-jwa-%C5%A8t%C5%A9%C5%A9ro-na-%C5%A8tungat%C4%A9ri-jwa-Agasti-12-18-2024/"
                                 data-lang-code="UU"
                                 data-locale="mer">meru</option>
                           
                              <option
                                 data-alternative-spellings="მარგალური  "
                                 
                                 value="xmf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/xmf/%E1%83%91%E1%83%98%E1%83%91%E1%83%9A%E1%83%98%E1%83%9D%E1%83%97%E1%83%94%E1%83%99%E1%83%90/%E1%83%98%E1%83%94%E1%83%B0%E1%83%9D%E1%83%95%E1%83%90%E1%83%A8-%E1%83%9B%E1%83%9D%E1%83%AC%E1%83%9B%E1%83%94%E1%83%94%E1%83%A4%E1%83%98%E1%83%A8-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%90%E1%83%9A%E1%83%90%E1%83%9B%E1%83%90-%E1%83%9E%E1%83%A0%E1%83%9D%E1%83%92%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90/%E1%83%99%E1%83%95%E1%83%98%E1%83%A0%E1%83%99%E1%83%95%E1%83%94-%E1%83%90%E1%83%A0%E1%83%92%E1%83%A3%E1%83%A1%E1%83%9D-2024-mwb/%E1%83%AA%E1%83%AE%E1%83%9D%E1%83%95%E1%83%A0%E1%83%94%E1%83%91%E1%83%90-%E1%83%93%E1%83%9D-%E1%83%9B%E1%83%A1%E1%83%90%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%90%E1%83%A8-%E1%83%A8%E1%83%94%E1%83%AE%E1%83%95%E1%83%90%E1%83%9A%E1%83%90%E1%83%9B%E1%83%90%E1%83%A8-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90-12-18-%E1%83%90%E1%83%A0%E1%83%92%E1%83%A3%E1%83%A1%E1%83%9D-2024/"
                                 data-lang-code="MGL"
                                 data-locale="xmf">mingrelio</option>
                           
                              <option
                                 data-alternative-spellings="閩南語（台灣）  minnan de Taiwan"
                                 
                                 value="nan-x-chw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nan-x-chw/%E5%A4%9A%E5%AA%92%E9%AB%94%E5%9C%96%E6%9B%B8%E9%A4%A8/%E8%80%B6%E5%92%8C%E8%8F%AF%E8%A6%8B%E8%AD%89%E4%BA%BA-%E8%81%9A%E6%9C%83-%E5%AD%B8%E7%BF%92%E6%9C%AC/%E8%81%9A%E6%9C%83%E6%89%8B%E5%86%8A2024%E5%B9%B47-8%E6%9C%88/%E5%82%B3%E9%81%93%E8%88%87%E7%94%9F%E6%B4%BB%E8%81%9A%E6%9C%83%E7%AF%80%E7%9B%AE%E8%A1%A82024%E5%B9%B48%E6%9C%8812-18%E6%97%A5/"
                                 data-lang-code="CHW"
                                 data-locale="nan-x-chw">minnán de Taiwán</option>
                           
                              <option
                                 data-alternative-spellings="miskitu  "
                                 
                                 value="miq"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/miq/ulbi-sakanka/jw-ridi-takaia-waukataya/julio-agosto-2024-mwb/Aidrubanka-dukiara-ridi-takaia-wauhkataya-agosto-12-18-2024/"
                                 data-lang-code="MIS"
                                 data-locale="miq">misquito</option>
                           
                              <option
                                 data-alternative-spellings="ayuk  "
                                 
                                 value="mco"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mco/expejkpajn/jw-tijaty-yaexpekaamp-ets-yajtukjayeyaamp/juli%C3%AB-agost%C3%AB-2024-mwb/Wi%CB%88ix-njuky%CB%88%C3%A4jt%C3%ABm-ets-nDiosm%C3%ABdu%CB%88un%C3%ABm-12-axt%C3%AB-18-%C3%A4%C3%A4mb%C3%AB-agost%C3%AB-2024/"
                                 data-lang-code="MX"
                                 data-locale="mco">mixe medio</option>
                           
                              <option
                                 data-alternative-spellings="tu’un sâví tu'un savi tuun savi "
                                 
                                 value="mxv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mxv/nuu-nuu-ndiina/jw-tutu-na-keeyo-reunion/julio-agosto-2024-mwb/%C3%91a%CC%B1-K%C3%A9%CA%BC%C3%A9-na%CC%B1-Nd%C3%A1sak%C3%A1%CA%BCnu-Ndi%C3%B3xi%CC%B1-12-nda%CC%B1a%CC%B1-18-t%C3%AD-agosto-2024/"
                                 data-lang-code="MXG"
                                 data-locale="mxv">mixteco de Guerrero</option>
                           
                              <option
                                 data-alternative-spellings="Mizo  "
                                 
                                 value="lus"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/lus/library/jw-inzirna-lehkhabu/july-august-2024-mwb/Kum-2024-August-12-18-at%C3%A2na-Nun-leh-Rawngb%C3%A2wlna-Inkh%C3%A2wm-Hun-Duan/"
                                 data-lang-code="LS"
                                 data-locale="lus">mizo</option>
                           
                              <option
                                 data-alternative-spellings="монгол  "
                                 
                                 value="mn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mn/%D0%BD%D0%BE%D0%BC%D1%8B%D0%BD-%D1%81%D0%B0%D0%BD/%D0%B5%D1%85%D0%BE%D0%B2%D0%B0%D0%B3%D0%B8%D0%B9%D0%BD-%D0%B3%D1%8D%D1%80%D1%87%D2%AF%D2%AF%D0%B4%D0%B8%D0%B9%D0%BD-%D1%86%D1%83%D0%B3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B0%D0%B0%D1%80-%D2%AF%D0%B7%D1%8D%D1%85-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB/2024-7-8-%D1%86%D2%AF%D0%BC/%D0%90%D0%BC%D1%8C%D0%B4%D1%80%D0%B0%D0%BB-%D2%AF%D0%B9%D0%BB-%D1%85%D1%8D%D1%80%D1%8D%D0%B3-%D1%86%D1%83%D0%B3%D0%BB%D0%B0%D0%B0%D0%BD%D1%8B-2024-%D0%BE%D0%BD%D1%8B-8-%D1%80-%D1%81%D0%B0%D1%80%D1%8B%D0%BD-12-18-%D0%BD%D1%8B-%D1%85%D1%83%D0%B2%D0%B0%D0%B0%D1%80%D1%8C/"
                                 data-lang-code="KHA"
                                 data-locale="mn">mongol</option>
                           
                              <option
                                 data-alternative-spellings="Moore  "
                                 
                                 value="mos"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/mos/d-s%E1%BA%BDn-yiisi/jw-tigiss%C3%A3-na-k%E1%BA%BDndre/2024-s%E1%BA%BDoogo-sa-sika-mwb/Kiris-neb%C3%A3-v%C9%A9%C9%A9m-la-b-t%CA%8B%CA%8Bma-tigiss%C3%A3-na-k%E1%BA%BDndre-2024-Sa-sik-rasem-12-18/"
                                 data-lang-code="MM"
                                 data-locale="mos">more</option>
                           
                              <option
                                 data-alternative-spellings="Motu  "
                                 
                                 value="meu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/meu/pablikeisin/jw-hebou-pepana/july-august-2024-mwb/Mauri-Bona-Hesiai-%E1%B8%A0aukara-Ena-Sediul-August-12-18-2024/"
                                 data-lang-code="MTU"
                                 data-locale="meu">motu</option>
                           
                              <option
                                 data-alternative-spellings="नेपाली  nepales"
                                 
                                 value="ne"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ne/%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%AC%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A5%80/jw-%E0%A4%B8%E0%A4%AD%E0%A4%BE-%E0%A4%85%E0%A4%AD%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B8-%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE/%E0%A4%9C%E0%A5%81%E0%A4%B2%E0%A4%BE%E0%A4%88-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA-mwb/%E0%A4%9C%E0%A5%80%E0%A4%B5%E0%A4%A8-%E0%A4%B0-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%AD%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%95%E0%A4%BE-%E0%A4%85%E0%A4%97%E0%A4%B8%E0%A5%8D%E0%A4%A4-%E0%A5%A7%E0%A5%A8-%E0%A5%A7%E0%A5%AE-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA/"
                                 data-lang-code="NP"
                                 data-locale="ne">nepalés</option>
                           
                              <option
                                 data-alternative-spellings="ngigua de San Marcos Tlacoyalco  "
                                 
                                 value="pls"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pls/xruun-ko-video/guia-actividades-xratheni-testigos-jehova/julio-agosto-2024-mwb/Thi-nthu%CA%BCuna-ko-kexrein-thjiu%CA%BCun%C3%A1-juajna-jian-12-%E2%80%8B18-de-agosto-de-2024/"
                                 data-lang-code="NGM"
                                 data-locale="pls">ngigua de San Marcos Tlacoyalco</option>
                           
                              <option
                                 data-alternative-spellings="ngäbere ngabere ngabere (o guaymi) ngabere o guaymi"
                                 
                                 value="gym"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/gym/biblioteca/jw-ja-jie-ngwankare/julio-agosto-2024-mwb/Nita-Dirire-aune-Ja-Ngwen-%C3%91o-12-nemen-18-agosto-2024/"
                                 data-lang-code="NGB"
                                 data-locale="gym">ngäbere (o guaymí)</option>
                           
                              <option
                                 data-alternative-spellings="Nias  "
                                 
                                 value="nia"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nia/perpustakaan/jw-wao-wao-halowo-ba-gangowuloa/bawa-si-fitu-bawa-si-walu-2024-mwb/Wa%C3%B6-Wa%C3%B6-Hal%C3%B6w%C3%B6-Fa%CA%BCauri-Niha-Keriso-ba-Fanuriaig%C3%B6-12-18-Mba%C5%B5a-si-Walu-2024/"
                                 data-lang-code="NI"
                                 data-locale="nia">nias</option>
                           
                              <option
                                 data-alternative-spellings="Nicobarese  nicobares"
                                 
                                 value="caq"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/caq/l%C4%ABp%C3%B6re/jw-pustika-mumting/chul%C4%81i-%C3%B2k%C3%B6st-2024-mwb/Pr%C5%8Dkr%C4%81m-ngam-M%C4%ABting-Tinr%C4%ABken-h%C4%93k-La-en-ip-12-18-%C3%92k%C3%B6st-2024/"
                                 data-lang-code="NC"
                                 data-locale="caq">nicobarés</option>
                           
                              <option
                                 data-alternative-spellings="Norsk  "
                                 
                                 value="no"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/no/bibliotek/jehovas-vitner-arbeidshefte/juli-august-2024-mwb/Program-for-tjenestem%C3%B8tet-12-18-august-2024/"
                                 data-lang-code="N"
                                 data-locale="no">noruego</option>
                           
                              <option
                                 data-alternative-spellings="Nyaneka  "
                                 
                                 value="nyk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nyk/omikanda/jw-omukanda-wovilinga/kakwenye-kwenye-kunene-2024-mwb/Omwenyo-Wetu-Woukilisitau-Novilinga-Vietu-Ononthele-mambulilongeswa-meliongiyo-mu-12-18-ya-Kwenye-Kunene-yo-2024/"
                                 data-lang-code="NK"
                                 data-locale="nyk">nyaneka</option>
                           
                              <option
                                 data-alternative-spellings="Cinyungwe  "
                                 
                                 value="nyu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nyu/mbuto-ya-mabukhu/jw-kabukhu-kakuphatisa-basa-pa-mitsonkhano/julho-na-agosto-2024-mwb/Ndondomeko-ya-Moyo-Wacikristau-na-Utumiki-ya-12-18-Agosto-2024/"
                                 data-lang-code="NYU"
                                 data-locale="nyu">nyungwe</option>
                           
                              <option
                                 data-alternative-spellings="náhuatl de guerrero nahuatl de guerrero nahuatl de Guerrero"
                                 
                                 value="ngu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ngu/amatlajkuiloltin/jw-tlen-tomachtiskej-niman-tlen-notekitiltis/julio-agosto-2024-mwb/Tlen-nopanoltis-ipan-tlanechikojli-Nemilistli-niman-Tekitl-12-%E2%80%8B18-de-agosto-de-2024/"
                                 data-lang-code="NHG"
                                 data-locale="ngu">náhuatl de Guerrero</option>
                           
                              <option
                                 data-alternative-spellings="náhuatl de Veracruz nahuatl de Veracruz nahuatl de Veracruz"
                                 
                                 value="nhk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nhk/tanextilismej/jw-ama-yej-kinextia-tanechkolis/julio-agosto-2024-mwb/Matinemikan-wan-Matitajto%CC%B1lmoya%CC%B1wakan-ken-Cristo-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="NHV"
                                 data-locale="nhk">náhuatl de Veracruz</option>
                           
                              <option
                                 data-alternative-spellings="náhuatl de la huasteca nahuatl de la huasteca nahuatl de la Huasteca"
                                 
                                 value="nch"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nch/amatlajkuiloli/jehova-itlajtoltemakauaj-tlanechikoli-tlen-tijchiuasej/julio-agosto-2024-mwb/Tlen-timomachtisej-ipan-tlanechikoli-Kej-Timonejnemiltiaj-uan-Titlajtolmoyauaj-ipan-agosto-12-%E2%80%8B18-2024/"
                                 data-lang-code="NHH"
                                 data-locale="nch">náhuatl de la Huasteca</option>
                           
                              <option
                                 data-alternative-spellings="náhuatl del centro nahuatl del centro nahuatl del centro"
                                 
                                 value="ncx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ncx/amatlajkuilolmej/jw-tlen-tiktekitiltiskej-itech-nechikol/julio-agosto-2024-mwb/Toteki-akinmej-tikchiuaj-ken-Cristo-Nin-timomachtiskej-12-%E2%80%8B18-de-agosto-2024/"
                                 data-lang-code="NHC"
                                 data-locale="ncx">náhuatl del centro</option>
                           
                              <option
                                 data-alternative-spellings="náhuatl del norte de Puebla nahuatl del norte de Puebla nahuatl del norte de Puebla"
                                 
                                 value="ncj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ncj/biblioteca/jw-tein-timomachtiaj-itech-nechikol/julio-agosto-2024-mwb/Tein-timomachtiaj-itech-nechikol-Tonemilis-uan-toTanojnotsalis-12-hasta-18-de-agosto-de-2024/"
                                 data-lang-code="NHT"
                                 data-locale="ncj">náhuatl del norte de Puebla</option>
                           
                              <option
                                 data-alternative-spellings="Obolo  "
                                 
                                 value="ann"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ann/inu-kiji/jw-meeting-workbook/onyan%CC%84-jaaba-onyan%CC%84-jeeta-2024-mwb/Onineen%CC%84-Inu-Ebekween%CC%84-me-Nkween%CC%84mkp%E1%BB%8D-Ugwem-m%C3%A8-Ikwaan%CC%84-Kiji-eyi-Onyan%CC%84-Jeeta-12-18-2024/"
                                 data-lang-code="OBL"
                                 data-locale="ann">obolo</option>
                           
                              <option
                                 data-alternative-spellings="Okpe  "
                                 
                                 value="oke"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/oke/ekwakwa-re-fomu-phia/jw-obe-owian-uyono/july-august-2024-mwb/%E1%BB%8Cbe-%E1%BA%B8kwaphi%E1%BA%B9rhot%E1%BB%8Dre-%E1%BB%8Cr%E1%BA%B9-Uyono-Akpenyer%E1%BA%B9n-%E1%BB%8Crh%E1%BA%B9-Iruo-Uvie-na-%E1%BB%8Cr%E1%BA%B9-August-12-18-2024/"
                                 data-lang-code="OKP"
                                 data-locale="oke">okpe</option>
                           
                              <option
                                 data-alternative-spellings="ଓଡ଼ିଆ  "
                                 
                                 value="or"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/or/%E0%AC%B2%E0%AC%BE%E0%AC%87%E0%AC%AC%E0%AD%8D%E0%AC%B0%E0%AD%87%E0%AC%B0%E0%AD%80/jw-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%85%E0%AC%A8%E0%AD%81%E0%AC%B6%E0%AD%80%E0%AC%B3%E0%AC%A8%E0%AD%80-%E0%AC%AA%E0%AD%81%E0%AC%B8%E0%AD%8D%E0%AC%A4%E0%AC%BF%E0%AC%95%E0%AC%BE/%E0%AC%9C%E0%AD%81%E0%AC%B2%E0%AC%BE%E0%AC%87-%E0%AC%85%E0%AC%97%E0%AC%B7%E0%AD%8D%E0%AC%9F-%E0%AD%A8%E0%AD%A6%E0%AD%A8%E0%AD%AA-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%AA%E0%AD%81%E0%AC%B8%E0%AD%8D%E0%AC%A4%E0%AC%BF%E0%AC%95%E0%AC%BE/%E0%AD%A7%E0%AD%A8-%E0%AD%A7%E0%AD%AE-%E0%AC%85%E0%AC%97%E0%AC%B7%E0%AD%8D%E0%AC%9F-%E0%AD%A8%E0%AD%A6%E0%AD%A8%E0%AD%AA-%E0%AC%AA%E0%AC%BE%E0%AC%87%E0%AC%81-%E0%AC%9C%E0%AD%80%E0%AC%AC%E0%AC%A8-%E0%AC%93-%E0%AC%B8%E0%AD%87%E0%AC%AC%E0%AC%BE-%E0%AC%B8%E0%AC%AD%E0%AC%BE-%E0%AC%95%E0%AC%BE%E0%AC%B0%E0%AD%8D%E0%AC%AF%E0%AD%8D%E0%AD%9F%E0%AC%B8%E0%AD%82%E0%AC%9A%E0%AD%80/"
                                 data-lang-code="OI"
                                 data-locale="or">oriya</option>
                           
                              <option
                                 data-alternative-spellings="Afaan Oromoo  "
                                 
                                 value="om"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/om/laayibrarii/jw-barreeffama-qo%CA%BCannaa-walga%CA%BCii/adoolessa-hagayya-2024-mwb/Sagantaa-Walga%CA%BCii-Jireenyaa-fi-Tajaajila-Kiristiyaanaa-Hagayya-12-18-2024/"
                                 data-lang-code="OA"
                                 data-locale="om">oromo</option>
                           
                              <option
                                 data-alternative-spellings="ирон  osetico"
                                 
                                 value="os"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/os/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D3%95/%D0%B9%D0%B5%D0%B3%D1%8A%D0%BE%D0%B2%D3%95%D0%B9%D1%8B-%D3%95%D0%B2%D0%B4%D0%B8%D1%81%D3%95%D0%BD%D1%82%D3%95-%D0%BA%D1%83%D1%81%D3%95%D0%BD-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D0%B0%D0%B7%D1%8B-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D1%8B-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D3%95-%D1%84%D0%B5%D0%BC%D0%B1%D3%95%D0%BB%D0%B4%D3%95%D0%BD-%D0%9D%D3%95-%D1%86%D0%B0%D1%80%D0%B4-%D3%95%D0%BC%D3%95-%D0%BD%D3%95-%D0%BB%D3%95%D0%B3%D0%B3%D0%B0%D0%B4/"
                                 data-lang-code="OSS"
                                 data-locale="os">osético</option>
                           
                              <option
                                 data-alternative-spellings="Ɔtɛtɛla Otetela "
                                 
                                 value="tll"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tll/biblioteke/jw-losanganya-dikatshi/ng%C9%94nd%C9%94-kesambele-ng%C9%94nd%C9%94-kenan%C9%9Bi-2024-mwb/Ekongelo-ka-losanganya-la-L%C9%94s%C9%9Bn%C9%94-ndo-olimu-aso-ka-Ng%C9%94nd%C9%94-kenan%C9%9Bi-12-%E2%80%8B18-2024/"
                                 data-lang-code="OT"
                                 data-locale="tll">otetela</option>
                           
                              <option
                                 data-alternative-spellings="ñätho natho otomi del Estado de Mexico"
                                 
                                 value="ots"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ots/ya-hemi/jw-guia-actividades/julio-agosto-2024-mwb/K%CA%BCa-ma-M%C3%A4hk%C3%AD-%CA%BCBe%CC%B1f%C3%ADhu%CC%B1-nihi-ankja-dra-%CA%BCMu%CC%B1fu%CC%B1-yu%CC%B1-Kristiano-12-ta-k%CA%BCa-18-ga-agosto-ga-2024/"
                                 data-lang-code="OTS"
                                 data-locale="ots">otomí del Estado de México</option>
                           
                              <option
                                 data-alternative-spellings="Ñañu Nanu otomi del valle del Mezquital"
                                 
                                 value="ote"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ote/ra-biblioteca/jw-programa-mhuntsi/julio-agosto-2024-mwb/Program%C3%A4-pa-y%C3%A4-mhunts%EA%9E%8Ci-R%C3%A4-M%EA%9E%8Cu%CC%B1i-%EA%9E%8Cne-y%C3%A4-%EA%9E%8CMe%CC%B1fi-y%C3%A4-Kristianu-12-%E2%80%8B18-de-r%C3%A4-agosto-de-r%C3%A4-2024/"
                                 data-lang-code="OTM"
                                 data-locale="ote">otomí del valle del Mezquital</option>
                           
                              <option
                                 data-alternative-spellings="Palauan  "
                                 
                                 value="pau"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pau/aike-el-ngar-er-ngii/jw-subeled-miting/july-august-2024-mwb/Schedule-er-Sel-Miting-el-Kirel-a-Klengar-er-Kid-a-Rekristiano-me-a-Omesiunged-er-a-August-12-18-2024/"
                                 data-lang-code="PU"
                                 data-locale="pau">palauano</option>
                           
                              <option
                                 data-alternative-spellings="Pangasinan  pangasinan"
                                 
                                 value="pag"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pag/librarya/jw-workbook-ed-aral/hulyo-agosto-2024-mwb/Eskedyul-na-Aral-Parad-Ministeryo-tan-Bilay-na-Kristiano-Diad-Agosto-12-18-2024/"
                                 data-lang-code="PN"
                                 data-locale="pag">pangasinán</option>
                           
                              <option
                                 data-alternative-spellings="Papiamentu (Kòrsou) Papiamentu (Korsou) Papiamentu Korsou "
                                 
                                 value="pap"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pap/biblioteka/jw-material-tarea/yuli-ougustus-2024-mwb/Programa-di-Reunion-Nos-Bida-i-Sirbishi-Kristian-di-12-18-di-Oug%C3%B9st%C3%B9s-2024/"
                                 data-lang-code="PA"
                                 data-locale="pap">papiamento de Curazao</option>
                           
                              <option
                                 data-alternative-spellings="فارسی  "
                                 
                                 value="fa"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/fa/%DA%A9%D8%AA%D8%A7%D8%A8%D8%AE%D8%A7%D9%86%D9%87/%D8%AC%D8%B2%D9%88%D9%87-%D8%B4%D8%A7%D9%87%D8%AF%D8%A7%D9%86-%DB%8C%D9%87%D9%88%D9%87/%D8%AC%D8%B2%D9%88%D9%87-%DA%A9%D8%A7%D8%B1-%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%98%D9%88%D8%A6%DB%8C%D9%87-%D8%A7%D9%88%D8%AA-%DB%B2%DB%B0%DB%B2%DB%B4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87%D9%94-%DB%B1%DB%B2-%DB%B1%DB%B8-%D8%A7%D9%88%D8%AA-%DB%B2%DB%B0%DB%B2%DB%B4-%D8%AC%D8%B2%D9%88%D9%87%D9%94-%DA%A9%D8%A7%D8%B1-%D9%88-%D8%A2%D9%85%D9%88%D8%B2%D8%B4/"
                                 data-lang-code="PR"
                                 data-locale="fa">persa</option>
                           
                              <option
                                 data-alternative-spellings="Chiphimbi  "
                                 
                                 value="phm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/phm/laibulale/jw-ndandanda-ya-misonkhano/julho-agosto-2024-mwb/Ndandanda-ya-utumiki-na-moyo-wathu-wachikhrisitu-ya-12-18-Agosto-2024/"
                                 data-lang-code="PHM"
                                 data-locale="phm">phimbi</option>
                           
                              <option
                                 data-alternative-spellings="Pidgin (West Africa) Pidgin West Africa pidgin (oeste de Africa) pidgin oeste de Africa"
                                 
                                 value="wes-x-pgw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/wes-x-pgw/library/jw-meeting-workbook/july-august-2024-mwb/Life-and-Preaching-Meeting-Workbook-for-August-12-18-2024/"
                                 data-lang-code="PGW"
                                 data-locale="wes-x-pgw">pidgin (oeste de África)</option>
                           
                              <option
                                 data-alternative-spellings="Hawai’i Pidgin Hawai'i Pidgin Hawaii Pidgin pidgin de Hawai"
                                 
                                 value="hwc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hwc/library/jw-meeting-workbook/july-august-2024-mwb/Wat-We-Going-Ova-In-Oua-Live-Preach-An-Teach-Jalike-Jesus-Middo-Of-Da-Week-Meeting-Fo-August-12-18-2024/"
                                 data-lang-code="HWP"
                                 data-locale="hwc">pidgin de Hawái</option>
                           
                              <option
                                 data-alternative-spellings="Solomon Islands Pidgin  pidgin de las islas Salomon"
                                 
                                 value="pis"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pis/library/jw-meeting-buk/july-august-2024-mwb/Laef-and-Ministry-Meeting-Schedule-for-August-12-18-2024/"
                                 data-lang-code="SP"
                                 data-locale="pis">pidgin de las islas Salomón</option>
                           
                              <option
                                 data-alternative-spellings="polski  "
                                 
                                 value="pl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pl/biblioteka/program-zebran-swiadkow-jehowy/lipiec-sierpie%C5%84-2024-mwb/Chrze%C5%9Bcija%C5%84skie-%C5%BCycie-i-s%C5%82u%C5%BCba-12-%E2%80%8B18-sierpnia-2024/"
                                 data-lang-code="P"
                                 data-locale="pl">polaco</option>
                           
                              <option
                                 data-alternative-spellings="Pomerisch  "
                                 
                                 value="nds"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nds/buikerstuuw/jw-dau-leewe-un-inlere-soo-as-jesus-blaarer-taum-dij-lere-helpe/juli-august-2024-mwb/List-fon-Leewe-un-Inl%C3%ABre-fon-12te-bet-18te-august/"
                                 data-lang-code="PMR"
                                 data-locale="nds">pomeranio</option>
                           
                              <option
                                 data-alternative-spellings="Ponapean  ponapes"
                                 
                                 value="pon"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pon/sawasepen-Paipel-kan/jw-doaropwehn-kasukuhl-ong-mihting/july-august-2024-mwb/Koasoandien-Mihting-en-Mour-oh-Kalohk-ong-August-12-18-2024/"
                                 data-lang-code="PP"
                                 data-locale="pon">ponapés</option>
                           
                              <option
                                 data-alternative-spellings="popoluca de la Sierra  "
                                 
                                 value="poi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/poi/akkay%C3%B1eyajtawiip/totjaayi-tankuyujkapaap-antuumaajijom-testigos-jehova/julio-agosto-2024-mwb/Taidyi%C3%B1-y-Tanan%CC%88keji%C3%B1-ju%CA%BCuts-iwat-Jes%C3%BAs-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="PPU"
                                 data-locale="poi">popoluca de la Sierra</option>
                           
                              <option
                                 data-alternative-spellings="Português (Angola) Portugues (Angola) Portugues Angola portugues (angola) portugues angola"
                                 
                                 value="pt-ao"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pt-ao/biblioteca/jw-programa-da-reuni%C3%A3o/julho-agosto-2024-mwb/Programa-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-de-12-18-de-agosto-de-2024/"
                                 data-lang-code="TNG"
                                 data-locale="pt-ao">portugués (angola)</option>
                           
                              <option
                                 data-alternative-spellings="Português (Brasil) Portugues (Brasil) Portugues Brasil portugues de Brasil"
                                 
                                 value="pt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pt/biblioteca/jw-apostila-do-mes/jullho-agosto-2024-mwb/Programa%C3%A7%C3%A3o-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-para-12-18-de-agosto-de-2024/"
                                 data-lang-code="T"
                                 data-locale="pt">portugués de Brasil</option>
                           
                              <option
                                 data-alternative-spellings="Português (Portugal) Portugues (Portugal) Portugues Portugal portugues de Portugal"
                                 
                                 value="pt-pt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pt-pt/biblioteca/jw-manual-de-atividades/jullho-agosto-2024-mwb/Programa-da-Reuni%C3%A3o-Vida-e-Minist%C3%A9rio-de-12-a-18-de-agosto-de-2024/"
                                 data-lang-code="TPO"
                                 data-locale="pt-pt">portugués de Portugal</option>
                           
                              <option
                                 data-alternative-spellings="ਪੰਜਾਬੀ  punyabi"
                                 
                                 value="pa"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pa/%E0%A8%B2%E0%A8%BE%E0%A8%87%E0%A8%AC%E0%A9%8D%E0%A8%B0%E0%A9%87%E0%A8%B0%E0%A9%80/jw-%E0%A8%B8%E0%A8%AD%E0%A8%BE-%E0%A8%AA%E0%A9%81%E0%A8%B8%E0%A8%A4%E0%A8%BF%E0%A8%95%E0%A8%BE/%E0%A8%9C%E0%A9%81%E0%A8%B2%E0%A8%BE%E0%A8%88-%E0%A8%85%E0%A8%97%E0%A8%B8%E0%A8%A4-2024-mwb/12-18-%E0%A8%85%E0%A8%97%E0%A8%B8%E0%A8%A4-2024-%E0%A8%B2%E0%A8%88-%E0%A8%9C%E0%A8%BC%E0%A8%BF%E0%A9%B0%E0%A8%A6%E0%A8%97%E0%A9%80-%E0%A8%85%E0%A8%A4%E0%A9%87-%E0%A8%B8%E0%A9%87%E0%A8%B5%E0%A8%BE-%E0%A8%B8%E0%A8%AD%E0%A8%BE-%E0%A8%B8%E0%A8%BC%E0%A8%A1%E0%A8%BF%E0%A8%89%E0%A8%B2/"
                                 data-lang-code="PJ"
                                 data-locale="pa">punyabí</option>
                           
                              <option
                                 data-alternative-spellings="پنجابی (شاہ مُکھی) پنجابی شاہ مُکھی punyabi (alfabeto shahmuji) punyabi alfabeto shahmuji"
                                 
                                 value="pnb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/pnb/%DA%A9%D8%AA%D8%A7%D8%A8%D8%A7%DA%BA-%D8%AA%DB%92-%D9%88%DB%8C%DA%88%DB%8C%D9%88%D8%B2/%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D9%84%D8%A6%DB%8C-%D9%88%D8%B1%DA%A9-%D8%A8%D9%8F%DA%A9/%D8%AC%D9%88%D9%84%D8%A7%D8%A6%DB%8C-%D8%A7%DA%AF%D8%B3%D8%AA-2024-%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D9%84%D8%A6%DB%8C-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D8%B3%D8%A7%DA%88%DB%8C-%D9%85%D8%B3%DB%8C%D8%AD%DB%8C-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%AA%DB%92-%D8%AE%D8%AF%D9%85%D8%AA-%D9%88%D8%A7%D9%84%DB%8C-%D8%B9%D8%A8%D8%A7%D8%AF%D8%AA-%D8%AF%D8%A7-%D8%B4%DB%8C%DA%88%D9%88%D9%84-12-18-%D8%A7%DA%AF%D8%B3%D8%AA/"
                                 data-lang-code="PJN"
                                 data-locale="pnb">punyabí (alfabeto shahmují)</option>
                           
                              <option
                                 data-alternative-spellings="Purépecha Purepecha purepecha"
                                 
                                 value="tsz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tsz/publikasionicha/programa-para-anchikuarhini-tanguarhikuarhu/juliu-agostu-2024-mwb/Kristianuecheeri-Irekua-ka-Aianhpikua-12-al-18-de-agostu-de-2024/"
                                 data-lang-code="TRS"
                                 data-locale="tsz">purépecha</option>
                           
                              <option
                                 data-alternative-spellings="Quechua (Ancash) Quechua Ancash "
                                 
                                 value="que"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/que/ruray%C3%A4munq%C3%A4kuna/reunionch%C3%B6-yachakunapaq-jehovapa-testigunkuna/juliu-agostu-2024-mwb/Cristi%C3%A4nun%C3%B6-Kawakunapaq-y-Yachatsikunapaq-2024-wata-12-a-18-de-agostuyaq/"
                                 data-lang-code="QUN"
                                 data-locale="que">quechua ancashino</option>
                           
                              <option
                                 data-alternative-spellings="Quechua (Ayacucho) Quechua Ayacucho "
                                 
                                 value="quy"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/quy/qellqakuna/jw-yanapawaqninchik-qillqa/julio-agosto-2024-mwb/Diospa-munayninta-ruwananchikpaq-hu%C3%B1unakuypi-yachachikuykuna-2024-agosto-12-18-kaq-semanapaq/"
                                 data-lang-code="QUA"
                                 data-locale="quy">quechua ayacuchano</option>
                           
                              <option
                                 data-alternative-spellings="Quechua (Bolivia) Quechua Bolivia "
                                 
                                 value="qu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/qu/publicaciones/jw-tantakuypaj/julio-agosto-2024-mwb/Cristiano-Kausayninchej-tantakuypaj-wakichikusqan-12-al-18-de-agosto-de-2024/"
                                 data-lang-code="QUB"
                                 data-locale="qu">quechua boliviano</option>
                           
                              <option
                                 data-alternative-spellings="quechua (Cusco) quechua Cusco quechua cuzqueno"
                                 
                                 value="quz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/quz/Qelqakuna/jw-ju%C3%B1unakuypi-yachanapaq/julio-agosto-2024-mwb/2024-watapi-12-agosto-semanapi-Diospaq-kausasunchis-ju%C3%B1unakuypi-yachanapaq-yachachikuykuna/"
                                 data-lang-code="QU"
                                 data-locale="quz">quechua cuzqueño</option>
                           
                              <option
                                 data-alternative-spellings="Quechua de Huánuco (Huallaga) Quechua de Huanuco (Huallaga) Quechua de Huanuco Huallaga quechua de Huanuco (Huallaga) quechua de Huanuco Huallaga"
                                 
                                 value="qub"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/qub/Imayca-charashganchicuna/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Ali-Cawanapaj-y-Yachachicunapaj-12-18-agostupita-2024/"
                                 data-lang-code="QUL"
                                 data-locale="qub">quechua de Huánuco (Huallaga)</option>
                           
                              <option
                                 data-alternative-spellings="quichua (chimborazo) quichua chimborazo "
                                 
                                 value="qug"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/qug/publicacioncuna/jw-tandanacuipi-yachana-p%CB%88anga/julio-agosto-2024-mwb/Caitaca-12-18-de-agosto-de-2024-%E2%80%8Btami-yachashun/"
                                 data-lang-code="QIC"
                                 data-locale="qug">quichua de Chimborazo</option>
                           
                              <option
                                 data-alternative-spellings="quichua (imbabura) quichua imbabura "
                                 
                                 value="qvi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/qvi/publicacionguna/jw-tandanajuipi-yachajungapaj-hoja/julio-agosto-2024-mwb/Jesuspa-Chaquita-Catishpa-Causashunchi-Yachachishunchi-Tandanajuipi-yachajungapaj-programa-12-18-de-agosto-de-2024/"
                                 data-lang-code="QII"
                                 data-locale="qvi">quichua de Imbabura</option>
                           
                              <option
                                 data-alternative-spellings="quichua (tena) quichua tena "
                                 
                                 value="quw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/quw/publicacionguna/jw-tandarinai-tarbana-quillca/julio-agosto-2024-mwb/Jes%C3%BAs-cuinta-yachachisha-causasha-catishunchi-12-al-18-de-agosto-de-2024/"
                                 data-lang-code="QIT"
                                 data-locale="quw">quichua de Tena</option>
                           
                              <option
                                 data-alternative-spellings="quichua (cotopaxi) quichua cotopaxi "
                                 
                                 value="qug-x-qix"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/qug-x-qix/Biblioteca/jw-tandanajuibi-estudiana-hoja/julio-agosto-2024-mwb/Jes%C3%BAs-shina-causashunchi-y-predicashunchi-12-al-18-de-agosto-de-2024/"
                                 data-lang-code="QIX"
                                 data-locale="qug-x-qix">quichua de cotopaxi</option>
                           
                              <option
                                 data-alternative-spellings="quiché quiche quiche"
                                 
                                 value="quc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/quc/ri-e-wuj/jw-wuj-re-chak/julio-agosto-2024-mwb/Qachak-xuquje%CA%BC-Qak%CA%BCaslemal-ri-oj-Cristianos-12-%E2%80%8B18-re-agosto-2024/"
                                 data-lang-code="QC"
                                 data-locale="quc">quiché</option>
                           
                              <option
                                 data-alternative-spellings="Reo Rarotonga  "
                                 
                                 value="rar"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rar/runanga/jw-puka-angaanga/tiurai-aukute-2024-mwb/Akanoonooanga-no-te-Uipaanga-Oraanga-e-te-Angaanga-Orometua-no-Aukute-12-18-2024/"
                                 data-lang-code="RA"
                                 data-locale="rar">rarotongano</option>
                           
                              <option
                                 data-alternative-spellings="Romanes (Sinti) Romanes Sinti romani de Alemania"
                                 
                                 value="rmo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmo/bibliotheka/jw-ketenepen-program/juli-august-2024-mwb/Mari-programma-an-o-Khetnepen-Djipen-un-Budi-ap-o-12-18-August-2024/"
                                 data-lang-code="RMX"
                                 data-locale="rmo">romaní de Alemania</option>
                           
                              <option
                                 data-alternative-spellings="романи (България) романи България romani de Bulgaria"
                                 
                                 value="rmn-x-rmb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmn-x-rmb/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%BE-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%BA%D0%B0/%D1%8E%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%B5-%D1%81%D1%8A%D0%B1%D1%80%D0%B0%D0%BD%D0%B8%D0%B5%D1%81%D0%BA%D0%B5-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D0%BA%D0%BE-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BE%D1%81-%D1%82%D0%B0%D0%B9-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B5-%D0%BA%D1%83%D1%80%D0%BA%D0%B5%D1%81%D0%BA%D0%B5-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%D0%B3/"
                                 data-lang-code="RMB"
                                 data-locale="rmn-x-rmb">romaní de Bulgaria</option>
                           
                              <option
                                 data-alternative-spellings="romane (Makedonija) romane Makedonija romani de Macedonia"
                                 
                                 value="rmn-x-rm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmn-x-rm/biblioteka/zhivoto-hem-sluzhba-listija-spremibaske/juli-avgust-2024-mwb/Raspored-ba%C5%A1o-Amaro-%C5%BEivoto-hem-slu%C5%BEba-ba%C5%A1o-12-18-avgust-2024/"
                                 data-lang-code="RM"
                                 data-locale="rmn-x-rm">romaní de Macedonia</option>
                           
                              <option
                                 data-alternative-spellings="романе (Македонија) кирилица романе Македонија кирилица romani de Macedonia (alfabeto cirilico) romani de Macedonia alfabeto cirilico"
                                 
                                 value="rmn-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmn-cyrl/biblioteka/zhivoto-hem-sluzhba-listija-spremibaske/%D1%98%D1%83%D0%BB%D0%B8-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D0%B5%D0%B4-%D0%B1%D0%B0%D1%88%D0%BE-%D0%90%D0%BC%D0%B0%D1%80%D0%BE-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BE-%D1%85%D0%B5%D0%BC-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%B1%D0%B0%D1%88%D0%BE-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/"
                                 data-lang-code="RMC"
                                 data-locale="rmn-cyrl">romaní de Macedonia (alfabeto cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="Rromani (România) Rromani (Romania) Rromani Romania romani de Rumania"
                                 
                                 value="rmy"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmy/biblioteca/caieto-andai-intrunirea/iulia-augusto-2024-mwb/Programo-anda-o-Caieto-I-via%C8%9Ba-sar-cre%C8%99tini-hai-i-predicarea-12-18-augusto-2024/"
                                 data-lang-code="RMR"
                                 data-locale="rmy">romaní de Rumania</option>
                           
                              <option
                                 data-alternative-spellings="Romane (Srbija) Romane Srbija romani de Serbia"
                                 
                                 value="rmn-x-rme"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmn-x-rme/biblioteka/jw-radna-sveske/jul-avgust-2024-mwb/Amaro-hri%C5%A1%C4%87ansko-%C4%91ivdipe-hem-slu%C5%BEba-o-program-aso-sastanko-kotar-12-18-avgust-2024/"
                                 data-lang-code="RME"
                                 data-locale="rmn-x-rme">romaní de Serbia</option>
                           
                              <option
                                 data-alternative-spellings="romanes (vichodno Slovačiko) romanes (vichodno Slovaciko) romanes vichodno Slovaciko romani del este de Eslovaquia"
                                 
                                 value="rmc-sk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmc-sk/kniznica/jehovaskere-svedki-zhromazdene-publikacija/julos-augustos-2024-mwb/Bro%C5%BEurka-pro-zhroma%C5%BE%C4%8Fe%C5%88e-12-18-augustos-2024/"
                                 data-lang-code="RMS"
                                 data-locale="rmc-sk">romaní del este de Eslovaquia</option>
                           
                              <option
                                 data-alternative-spellings="Ρομανί (Νότια Ελλάδα) Ρομανί Νότια Ελλάδα romani del sur de Grecia"
                                 
                                 value="rmn-x-rmg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rmn-x-rmg/%CE%B2%CE%B9%CE%B2%CE%BB%CE%B9%CE%BF%CE%B8%CE%AE%CE%BA%CE%B7/%CF%80%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1%CF%82-%CE%B9-%CF%83%CF%85%CE%BD%CE%B1%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B9%CE%AC%CE%BA%CE%B5-jw/%CE%B9%CE%BF%CF%8D%CE%BB%CE%B9%CE%BF%CF%82-%CE%B1%CF%8D%CE%B3%CE%BF%CF%85%CF%83%CF%84%CE%BF%CF%82-2024-mwb/%CE%A0%CF%81%CF%8C%CE%B3%CF%81%CE%B1%CE%BC%CE%BC%CE%B1%CF%82-%CE%B9-%CE%A3%CF%85%CE%BD%CE%B1%CE%B8%CF%81%CE%BF%CE%B9%CF%83%CE%B9%CE%AC%CE%BA%CE%B5-%CE%96%CF%89%CE%AE-%CE%BD%CF%84%CE%B1-%CE%88%CF%81%CE%B3%CE%BF%CF%82-%CE%BA%CE%B9-%CE%95%CE%B2%CE%B4%CE%BF%CE%BC%CE%AC%CE%B4%CE%B1-12-18-%CE%91%CF%85%CE%B3%CE%BF%CF%8D%CF%83%CF%84%CE%BF%CF%85-2024/"
                                 data-lang-code="RMG"
                                 data-locale="rmn-x-rmg">romaní del sur de Grecia</option>
                           
                              <option
                                 data-alternative-spellings="Xironga  "
                                 
                                 value="rng"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rng/bibliyoteka/jw-ntlhanganu-xipapelana/julhu-agoxto-wa-2024-mwb/Xiyimiso-Xa-Ntlhanganu-Wa-Wutomi-Ni-Wutizreli-Xa-12-18-Ka-Agoxto-Wa-2024/"
                                 data-lang-code="RN"
                                 data-locale="rng">ronga</option>
                           
                              <option
                                 data-alternative-spellings="Română Romana "
                                 
                                 value="ro"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ro/biblioteca/caiet-pentru-intrunire/iulie-august-2024-mwb/Programul-%C3%AEntrunirii-Via%C8%9Ba-cre%C8%99tin%C4%83-%C8%99i-predicarea-12-18-august-2024/"
                                 data-lang-code="M"
                                 data-locale="ro">rumano</option>
                           
                              <option
                                 data-alternative-spellings="Runyankore  "
                                 
                                 value="nyn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nyn/Raiburare/jw-oruteerane-akatabo-kOkukoresa/gyuraayi-agusto-2024-mwb/Obuheereza-Bwaitu-Noku-Turikutwaza-Entebeekanisa-yOruteerane-eya-Agusto-12-18-2024/"
                                 data-lang-code="RR"
                                 data-locale="nyn">runyankore</option>
                           
                              <option
                                 data-alternative-spellings="русский  "
                                 
                                 value="ru"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ru/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B8-%D0%9D%D0%B0%D1%88%D0%B0-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B8%D0%B7%D0%BD%D1%8C-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-12-%D0%BF%D0%BE-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0-2024-%D0%B3%D0%BE%D0%B4%D0%B0/"
                                 data-lang-code="U"
                                 data-locale="ru">ruso</option>
                           
                              <option
                                 data-alternative-spellings="Rutoro  "
                                 
                                 value="ttj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ttj/laiburale/jw-orusorokano-akatabu-kensorokano/julaayi-agusto-2024-mwb/Entekaniza-eyOrusorrokano-orwObwomeezi-nObuheereza-Bwaitu-nkAbakristaayo-eya-Agusto-12-18-2024/"
                                 data-lang-code="RT"
                                 data-locale="ttj">rutoro</option>
                           
                              <option
                                 data-alternative-spellings="Faa-Samoa  "
                                 
                                 value="sm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sm/lomiga-ma-isi-mea/jw-sauniga-polokalame/iulai-aokuso-2024-mwb/Faasologa-o-le-Sauniga-o-le-Faiva-ma-le-Olaga-mo-Aokuso-12-18-2024/"
                                 data-lang-code="SM"
                                 data-locale="sm">samoano</option>
                           
                              <option
                                 data-alternative-spellings="Sango  "
                                 
                                 value="sg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sg/biblioth%C3%A8que/jw-mbeti-ti-bungbi/juillet-ao%C3%BBt-2024-mwb/Programme-ti-bungbi-Kusala-ti-e-nga-na-gigi-ti-e-ti-yenga-ti-12-18-ao%C3%BBt-2024/"
                                 data-lang-code="SG"
                                 data-locale="sg">sango</option>
                           
                              <option
                                 data-alternative-spellings="Saamakatöngö Saamakatongo "
                                 
                                 value="srm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/srm/buku-ku-woto-soni/jw-komakandi-buku/baimatu-liba-tanvuuwata-liba-2024-mwb/Skeima-u-Di-libi-ku-di-diniwooko-komakandi-u-12-18-u-tanvuuwata-liba-u-2024/"
                                 data-lang-code="SRM"
                                 data-locale="srm">saramacano</option>
                           
                              <option
                                 data-alternative-spellings="Sehwi  "
                                 
                                 value="sfw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sfw/akorae%C9%9B/ya-nhyiamu-dwumadi%C3%A9-Nwomaa/july-august-2024-mwb/Abrab%C9%94-Ne-As%C9%9Bnga-Nhyiamu-Nwo-Nhyehy%C9%9Be%C9%9B-Ma-August-12-18-2024/"
                                 data-lang-code="SHW"
                                 data-locale="sfw">sehwi</option>
                           
                              <option
                                 data-alternative-spellings="Cisena  "
                                 
                                 value="seh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/seh/bhibhliyoteka/programu-ya-misonkhano-ya-mboni-za-yahova/julho-agosto-2024-mwb/Programu-ya-Misonkhano-ya-Umaso-na-Utumiki-ya-Sumana-12-18-ya-Agosto-ya-2024/"
                                 data-lang-code="SEN"
                                 data-locale="seh">sena</option>
                           
                              <option
                                 data-alternative-spellings="Chinsenga (Mozambique) Chinsenga Mozambique senga mozambique"
                                 
                                 value="nse-mz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nse-mz/laibulale/jw-ndondomeko-ya-misonkhano/djulayi-ogasite-2024-mwb/Moyo-komasoti-utumiki-ndondomeko-ya-misonkhano-ya-Ogasite-12-18-2024/"
                                 data-lang-code="NSM"
                                 data-locale="nse-mz">senga (mozambique)</option>
                           
                              <option
                                 data-alternative-spellings="Cinsenga  senga zambia"
                                 
                                 value="nse"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nse/laibulale/kabuku-ka-misonkhao-ka-jw/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Umoyo-na-Utumiki-ya-August-12-18-2024/"
                                 data-lang-code="NEN"
                                 data-locale="nse">senga (zambia)</option>
                           
                              <option
                                 data-alternative-spellings="Sepedi  "
                                 
                                 value="nso"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nso/laeprari/pukwana-ya-seboka-ya-jw/july-august-2024-mwb/Lenaneo-la-Seboka-sa-Bophelo-le-Bodiredi-la-August-12-18-2024/"
                                 data-lang-code="SE"
                                 data-locale="nso">sepedi</option>
                           
                              <option
                                 data-alternative-spellings="Sepulana  "
                                 
                                 value="nso-x-spl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nso-x-spl/layibhrari/jw-mogahlano-sepukwane/july-august-2024-mwb/Letheto-la-Mogahlano-wa-Maphelelo-le-Mat%C5%A1homayelelo-la-August-12-18-2024/"
                                 data-lang-code="SPL"
                                 data-locale="nso-x-spl">sepulana</option>
                           
                              <option
                                 data-alternative-spellings="српски (ћирилица) српски ћирилица serbio (alfabeto cirilico) serbio alfabeto cirilico"
                                 
                                 value="sr-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sr-cyrl/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D1%98%D0%B5%D1%85%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8-%D1%81%D0%B2%D0%B5%D0%B4%D0%BE%D1%86%D0%B8-%D1%80%D0%B0%D0%B4%D0%BD%D0%B0-%D1%81%D0%B2%D0%B5%D1%81%D0%BA%D0%B0/%D1%98%D1%83%D0%BB-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D0%A5%D1%80%D0%B8%D1%88%D1%9B%D0%B0%D0%BD%D1%81%D0%BA%D0%B8-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D0%B8-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%BF%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%B0%D1%9A%D0%B0-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0-2024/"
                                 data-lang-code="SB"
                                 data-locale="sr-cyrl">serbio (alfabeto cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="srpski (latinica) srpski latinica serbio alfabeto latino"
                                 
                                 value="sr-latn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sr-latn/biblioteka/jehovini-svedoci-radna-sveska/jul-avgust-2024-mwb/Hri%C5%A1%C4%87anski-%C5%BEivot-i-slu%C5%BEba-propovedanja-program-12-18-avgusta-2024/"
                                 data-lang-code="SBO"
                                 data-locale="sr-latn">serbio (alfabeto latino)</option>
                           
                              <option
                                 data-alternative-spellings="Sesotho (Lesotho) Sesotho Lesotho "
                                 
                                 value="st"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/st/laebrari/kemiso-ea-liboka-ea-jw/july-august-2024-mwb/Lenanetsamaiso-la-Seboka-sa-Bophelo-le-T%C5%A1ebeletso-la-la-12-18-August-2024/"
                                 data-lang-code="SU"
                                 data-locale="st">sesoto de Lesoto</option>
                           
                              <option
                                 data-alternative-spellings="Sesotho (South Africa) Sesotho South Africa sesoto de Sudafrica"
                                 
                                 value="st-za"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/st-za/laebrari/jw-bukana-seboka/july-august-2024-mwb/Lenanetsamaiso-la-Seboka-sa-Bophelo-le-Tshebeletso-la-la-12-18-August-2024/"
                                 data-lang-code="SSA"
                                 data-locale="st-za">sesoto de Sudáfrica</option>
                           
                              <option
                                 data-alternative-spellings="Setswana  "
                                 
                                 value="tn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tn/laeborari/pokano-ya-botshelo-le-bodiredi/july-august-2024-mwb/Thulaganyo-ya-Botshelo-le-Bodiredi-ya-August-12-18-2024/"
                                 data-lang-code="TN"
                                 data-locale="tn">setsuana</option>
                           
                              <option
                                 data-alternative-spellings="Shona  "
                                 
                                 value="sn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sn/Raibhurari/jw-musangano-purogiramu/july-august-2024-mwb/Purogiramu-yeUshumiri-Hwedu-Uye-Kurarama-kwechiKristu-yaAugust-12-%E2%80%8B18-2024/"
                                 data-lang-code="CA"
                                 data-locale="sn">shona</option>
                           
                              <option
                                 data-alternative-spellings="shuar  "
                                 
                                 value="jiv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/jiv/irunu-iistin/jw-iruntramunam-unuimiattai-papii/julio-agosto-2024-mwb/Jes%C3%BAs-najanmiania-aitkiasrik-najanawartai-12-18-de-agosto-2024/"
                                 data-lang-code="SHU"
                                 data-locale="jiv">shuar</option>
                           
                              <option
                                 data-alternative-spellings="Sidaamu Afoo  "
                                 
                                 value="sid"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sid/layibirere/jw-xiinxallote-maxaaficho/maaja-woxawaajje-2024-mwb/Kiristaanu-Heeshshonna-Soqqansho-Gambooshshi-Pirogiraame-Woxawaajje-12-18-2024/"
                                 data-lang-code="DM"
                                 data-locale="sid">sidama</option>
                           
                              <option
                                 data-alternative-spellings="Silozi  "
                                 
                                 value="loz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/loz/sifalana/jw-buka-ya-mukopano/july-august-2024-mwb/Tomahanyo-ya-Mukopano-wa-Bupilo-ni-Bukombwa-ya-August-12-18-2024/"
                                 data-lang-code="SK"
                                 data-locale="loz">silozi</option>
                           
                              <option
                                 data-alternative-spellings="Kiswahili  "
                                 
                                 value="sw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sw/maktaba/jw-daftari-la-mkutano/julai-agosti-2024-mwb/Ratiba-ya-Mkutano-wa-Huduma-na-Maisha-ya-Agosti-12-18-2024/"
                                 data-lang-code="SW"
                                 data-locale="sw">suajili</option>
                           
                              <option
                                 data-alternative-spellings="Kiswahili (Congo) Kiswahili Congo "
                                 
                                 value="swc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/swc/maktaba/jw-buku-mukutano/mwezi-wa-7-na-wa-8-2024-mwb/Programu-ya-Mukutano-Utumishi-na-Maisha-ya-Tarehe-12-188-2024/"
                                 data-lang-code="ZS"
                                 data-locale="swc">suajili del Congo</option>
                           
                              <option
                                 data-alternative-spellings="SiSwati  "
                                 
                                 value="ss"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ss/luhla-lwetintfo-letitfolakalako/jw-incwajana-yekubhalela/july-august-2024-mwb/Luhlelo-LweKuphila-KwemaKhristu-Nemsebenti-Wawo-Lwa-August-12-18-2024/"
                                 data-lang-code="SWI"
                                 data-locale="ss">suati</option>
                           
                              <option
                                 data-alternative-spellings="Svenska  "
                                 
                                 value="sv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/sv/bibliotek/jv-arbetsh%C3%A4fte/juli-augusti-2024-mwb/Livet-och-tj%C3%A4nsten-som-kristen-schema-f%C3%B6r-12-18-augusti-2024/"
                                 data-lang-code="Z"
                                 data-locale="sv">sueco</option>
                           
                              <option
                                 data-alternative-spellings="Sranantongo  surinames"
                                 
                                 value="srn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/srn/library/jw-konmakandra-studie-buku/yuli-augustus-2024-mwb/Wi-Kresten-libi-nanga-a-preikiwroko-schema-gi-12-18-augustus-2024/"
                                 data-lang-code="SR"
                                 data-locale="srn">surinamés</option>
                           
                              <option
                                 data-alternative-spellings="Taabwa  "
                                 
                                 value="tap"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tap/mpapulo/jw-kulonghaana-libuku/mwezi-wa-07-mpaka-mwezi-wa-08-2024-mwb/Ntantiko-ya-Kulonghaana-kwa-Miilo-ni-Bwikazi-ya-pa-nsiku-12-18082024/"
                                 data-lang-code="TBW"
                                 data-locale="tap">taabua</option>
                           
                              <option
                                 data-alternative-spellings="Tagalog  "
                                 
                                 value="tl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tl/library/jw-workbook-para-sa-pulong/hulyo-agosto-2024-mwb/Iskedyul-ng-Pulong-Para-sa-Buhay-at-Ministeryo-Para-sa-Agosto-12-18-2024/"
                                 data-lang-code="TG"
                                 data-locale="tl">tagalo</option>
                           
                              <option
                                 data-alternative-spellings="Tahiti  "
                                 
                                 value="ty"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ty/piahia/faaineineraa-putuputuraa-ite-no-iehova/tiurai-atete-2024-mwb/Porotarama-Oraraa-e-taviniraa-Kerisetiano-o-te-12-18-no-Atete-2024/"
                                 data-lang-code="TH"
                                 data-locale="ty">tahitiano</option>
                           
                              <option
                                 data-alternative-spellings="ไทย  "
                                 
                                 value="th"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/th/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%86/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1/%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%81%E0%B8%8E%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A12024/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E2%80%8B%E0%B8%81%E0%B8%B2%E0%B8%A3%E2%80%8B%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E2%80%8B%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E2%80%8B%E0%B9%81%E0%B8%A5%E0%B8%B0%E2%80%8B%E0%B8%87%E0%B8%B2%E0%B8%99%E2%80%8B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%8A%E0%B9%89-%E0%B8%A7%E0%B8%B1%E0%B8%99%E2%80%8B%E0%B8%97%E0%B8%B5%E0%B9%88-12-18-%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A1-2024/"
                                 data-lang-code="SI"
                                 data-locale="th">tai</option>
                           
                              <option
                                 data-alternative-spellings="Talian  "
                                 
                                 value="vec"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/vec/biblioteca/jw-programassion-riunion/lulio-agosto-2024-mwb/Stimana-de-12-18-de-agosto-de-2024-dela-Programassion-dela-Riunion-Vivemo-e-Insegnemo-come-Ges%C3%B9/"
                                 data-lang-code="TAL"
                                 data-locale="vec">talian</option>
                           
                              <option
                                 data-alternative-spellings="தமிழ்  "
                                 
                                 value="ta"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ta/%E0%AE%B2%E0%AF%88%E0%AE%AA%E0%AF%8D%E0%AE%B0%E0%AE%B0%E0%AE%BF/%E0%AE%AF%E0%AF%86%E0%AE%95%E0%AF%8B%E0%AE%B5%E0%AE%BE%E0%AE%B5%E0%AE%BF%E0%AE%A9%E0%AF%8D-%E0%AE%9A%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D-%E0%AE%95%E0%AF%82%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%AE%E0%AF%8D-%E0%AE%AA%E0%AE%AF%E0%AE%BF%E0%AE%B1%E0%AF%8D%E0%AE%9A%E0%AE%BF-%E0%AE%AA%E0%AF%81%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%95%E0%AE%AE%E0%AF%8D/%E0%AE%9C%E0%AF%82%E0%AE%B2%E0%AF%88-%E0%AE%86%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%9F%E0%AF%8D-2024-mwb/%E0%AE%86%E0%AE%95%E0%AE%B8%E0%AF%8D%E0%AE%9F%E0%AF%8D-12-18-2024-%E0%AE%B5%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%88%E0%AE%AF%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%8A%E0%AE%B4%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%81%E0%AE%AE%E0%AF%8D-%E0%AE%95%E0%AF%82%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%A9-%E0%AE%85%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%B5%E0%AE%A3%E0%AF%88/"
                                 data-lang-code="TL"
                                 data-locale="ta">tamil</option>
                           
                              <option
                                 data-alternative-spellings="Thamil (Rōman) Thamil (Roman) Thamil Roman tamil alfabeto latino"
                                 
                                 value="ta-x-tlr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ta-x-tlr/Laibrari/yeg%C5%8Dvaavin-saatchigal-k%C5%ABttam-payircchi-putthagam/j%C5%ABlai-aagast-2024-mwb/aagast-12-18-2024-vaalkkaiyum-%C5%ABliyamum-k%C5%ABttatthukkaana-attavanai/"
                                 data-lang-code="TLR"
                                 data-locale="ta-x-tlr">tamil (alfabeto latino)</option>
                           
                              <option
                                 data-alternative-spellings="Tandroy  "
                                 
                                 value="tdx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tdx/ze-raha-misy/fivoriagne-vj-tari-dalagne/jolay-aogositra-2024-mwb/Fanompoagne-Naho-ty-Fiaignantika-Kristiana-Fandaharagne-12-18-Aogositra-2024/"
                                 data-lang-code="TND"
                                 data-locale="tdx">tandroy</option>
                           
                              <option
                                 data-alternative-spellings="Tankarana  "
                                 
                                 value="xmv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/xmv/raha-misy-ato/jw-boky-fianarana/mwb-zie-aoty-2024/Pr%C3%B4gramonny-Fivorian%CC%88a-Momba-Fiain%CC%88anantsika-Ndreky-Fanompoan%CC%88a-amy-12-18-Aoty-2024/"
                                 data-lang-code="TNK"
                                 data-locale="xmv">tankarana</option>
                           
                              <option
                                 data-alternative-spellings="ralámuli ralamuli "
                                 
                                 value="tar"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tar/oseli-japi-niru/jw-oseli-japi-ta-binepo-echona-napawiliwachi/julio-agosto-2024-mwb/Nokiboa-japi-rik%C3%A1-isili-Cristo-12-%E2%80%8B18-in%C3%A1rachi-agosto-2024/"
                                 data-lang-code="TRH"
                                 data-locale="tar">tarahumara del centro</option>
                           
                              <option
                                 data-alternative-spellings="тоҷикӣ  "
                                 
                                 value="tg"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tg/%D0%BA%D0%B8%D1%82%D0%BE%D0%B1%D1%85%D0%BE%D0%BD%D0%B0/%D0%B4%D0%B0%D1%84%D1%82%D0%B0%D1%80%D0%B8-%D0%B2%D0%BE%D1%85%D3%AF%D1%80%D3%A3/%D0%B8%D1%8E%D0%BB-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8-2024-mwb/%D0%91%D0%B0%D1%80%D0%BD%D0%BE%D0%BC%D0%B0%D0%B8-%D0%B2%D0%BE%D1%85%D3%AF%D1%80%D0%B8%D0%B8-%D2%B2%D0%B0%D1%91%D1%82-%D0%B2%D0%B0-%D1%85%D0%B8%D0%B7%D0%BC%D0%B0%D1%82-%D0%B0%D0%B7-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8-2024/"
                                 data-lang-code="TJ"
                                 data-locale="tg">tayiko</option>
                           
                              <option
                                 data-alternative-spellings="తెలుగు  "
                                 
                                 value="te"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/te/%E0%B0%B2%E0%B1%88%E0%B0%AC%E0%B1%8D%E0%B0%B0%E0%B0%B0%E0%B1%80/%E0%B0%AE%E0%B0%A8-%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B1%88%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B0%B5-%E0%B0%9C%E0%B1%80%E0%B0%B5%E0%B0%BF%E0%B0%A4%E0%B0%82-%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%9A%E0%B0%B0%E0%B1%8D%E0%B0%AF-%E0%B0%AE%E0%B1%80%E0%B0%9F%E0%B0%BF%E0%B0%82%E0%B0%97%E0%B1%8D%E2%80%8C-%E0%B0%B5%E0%B0%B0%E0%B1%8D%E0%B0%95%E0%B1%8D%E2%80%8C%E0%B0%AC%E0%B1%81%E0%B0%95%E0%B1%8D%E2%80%8C/%E0%B0%9C%E0%B1%82%E0%B0%B2%E0%B1%88-%E0%B0%86%E0%B0%97%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%81-2024-mwb/%E0%B0%86%E0%B0%97%E0%B0%B8%E0%B1%8D%E0%B0%9F%E0%B1%81-12-18-2024-%E0%B0%95%E0%B1%8B%E0%B0%B8%E0%B0%82-%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B1%88%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B0%B5-%E0%B0%9C%E0%B1%80%E0%B0%B5%E0%B0%BF%E0%B0%A4%E0%B0%82-%E0%B0%AA%E0%B0%B0%E0%B0%BF%E0%B0%9A%E0%B0%B0%E0%B1%8D%E0%B0%AF-%E0%B0%AE%E0%B1%80%E0%B0%9F%E0%B0%BF%E0%B0%82%E0%B0%97%E0%B1%8D%E2%80%8C-%E0%B0%B7%E0%B1%86%E0%B0%A1%E0%B1%8D%E0%B0%AF%E0%B1%82%E0%B0%B2%E0%B1%8D%E2%80%8C/"
                                 data-lang-code="TU"
                                 data-locale="te">telugu</option>
                           
                              <option
                                 data-alternative-spellings="Tetun Dili  "
                                 
                                 value="tdt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tdt/biblioteka/jw-programa-no-nota/jullu-agostu-2024-mwb/Moris-Kristaun-no-Haklaken-programa-12-18-Agostu-2024/"
                                 data-lang-code="TTP"
                                 data-locale="tdt">tetun dili</option>
                           
                              <option
                                 data-alternative-spellings="Ciutee  "
                                 
                                 value="twx"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/twx/bhibhiriyoteka/jw-urongwa-musangano/Julho-agosto-2024-mwb/Basa-Redu-uye-Kurarama-Urongwa-we-Musangano-we-mwedzi-wa-Agosto-12-18-2024/"
                                 data-lang-code="TEW"
                                 data-locale="twx">tewe</option>
                           
                              <option
                                 data-alternative-spellings="Ticuna  "
                                 
                                 value="tca"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tca/poperagu/jw-ngutaqueearu-nguaru-popera/yuliuaru-agostuaru-2024gu-mwb/Ma%C3%BC%CC%83-r%C3%BC-Purac%C3%BC-Ngutaque%EA%9E%8Cear%C3%BC-ngu%EA%9E%8Car%C3%BC-popera-naca%EA%9E%8C-12-18-agostuar%C3%BC-2024gu/"
                                 data-lang-code="TCN"
                                 data-locale="tca">ticuna</option>
                           
                              <option
                                 data-alternative-spellings="ትግርኛ  tigrina"
                                 
                                 value="ti"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ti/%E1%89%A4%E1%89%B0-%E1%88%98%E1%8C%BB%E1%88%95%E1%8D%8D%E1%89%B2/jw-%E1%8B%B0%E1%89%A5%E1%89%B0%E1%88%AD-%E1%8A%A3%E1%8A%BC%E1%89%A3/%E1%88%93%E1%88%9D%E1%88%88-%E1%8A%90%E1%88%93%E1%88%B0-2024-mwb/%E1%8A%9512-18-%E1%8A%90%E1%88%93%E1%88%B0-2024-%E1%8B%9A%E1%8A%B8%E1%8B%8D%E1%8A%95-%E1%88%98%E1%8B%B0%E1%89%A5-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B5%E1%8B%AB%E1%8A%93%E1%8B%8A-%E1%88%85%E1%8B%AD%E1%8B%88%E1%89%B5%E1%8A%95-%E1%8A%A3%E1%8C%88%E1%88%8D%E1%8C%8D%E1%88%8E%E1%89%B5%E1%8A%95/"
                                 data-lang-code="TI"
                                 data-locale="ti">tigriña</option>
                           
                              <option
                                 data-alternative-spellings="Tiv  "
                                 
                                 value="tiv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tiv/ityakerada/antakerada-u-mkombo-u-mbashiada-mba-yehova/julai-agusutu-2024-mwb/Aaven-a-Mkombo-u-Uma-Wase-man-Tom-Wase-Agusutu-12-18-2024/"
                                 data-lang-code="TV"
                                 data-locale="tiv">tivo</option>
                           
                              <option
                                 data-alternative-spellings="me̱ʼpha̱a̱  "
                                 
                                 value="tcf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tcf/biblioteca/jw-iyi-di-najmulu-reunion/julio-agosto-2024-mwb/X%C3%B3o-k%C3%BAwi%CC%B1i%CC%B1n-ga%CC%B1jma%CC%B1a%CC%B1-x%C3%B3o-Etara%CA%BCa-Cristianos-12-18-%C3%B1ajun%CA%BC-gu%CC%B1n%CA%BC-agosto-2024/"
                                 data-lang-code="TLN"
                                 data-locale="tcf">tlapaneco</option>
                           
                              <option
                                 data-alternative-spellings="tojol-abʼal  "
                                 
                                 value="toj"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/toj/juunik/juun-spaklajel-tsomjelal-taumantiik-jyoba/julio-agosto-2024-mwb/Programa-sb%CA%BCaja-reuni%C3%B3n-Ja-Sak%CA%BCaniltik-soka-Ka%CA%BCteltik-b%CA%BCa-Dyos-12-%E2%80%8B18-b%CA%BCa-agosto-b%CA%BCa-2024/"
                                 data-lang-code="TJO"
                                 data-locale="toj">tojolabal</option>
                           
                              <option
                                 data-alternative-spellings="Tok Pisin  "
                                 
                                 value="tpi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tpi/laibreri/jw-miting-wok-buk/julai-ogas-2024-mwb/Sediul-Bilong-Laip-na-Wok-Autim-Tok-Miting-Bilong-Ogas-12-18-2024/"
                                 data-lang-code="MP"
                                 data-locale="tpi">tok pisin</option>
                           
                              <option
                                 data-alternative-spellings="Faka-Tonga  "
                                 
                                 value="to"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/to/laipeli/jw-polokalama-ng%C4%81ue-ki-he-fakatah%C3%A1/siulai-aokosi-2024-mwb/Taimi-T%C4%93pile-ki-he-Fakataha-Mo%CA%BBu%C3%AD-mo-e-Ng%C4%81ue-Fakafaifeka%C3%BA-ki-%CA%BBAokosi-12-18-2024/"
                                 data-lang-code="TO"
                                 data-locale="to">tongano</option>
                           
                              <option
                                 data-alternative-spellings="totonaco  "
                                 
                                 value="top"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/top/likgalhtawakga-nema-wi/natalikgalhtawakga-tamakxtumit-xtatayananin-jehova/julio-agosto-2024-mwb/Programa-xla-tamakxtumit-xlatamat-chu-xtaskujut-kstalanina-Cristo-12-asta-18-xla-agosto-kata-2024/"
                                 data-lang-code="TOT"
                                 data-locale="top">totonaco</option>
                           
                              <option
                                 data-alternative-spellings="tseltal  "
                                 
                                 value="tzh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tzh/junetik-lokemik-skoplal-biblia/jw-kateltik-swenta-tsoblej/julio-agosto-2024-mwb/Jkuxlejaltik-sok-Ka%CA%BCteltik-ta-swenta-Dios-ta-12-k%CA%BCalal-ta-18-yu%CA%BCun-agosto-2024/"
                                 data-lang-code="TZE"
                                 data-locale="tzh">tseltal</option>
                           
                              <option
                                 data-alternative-spellings="Xitsonga  "
                                 
                                 value="ts"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ts/layiburari/xiyimiso-xa-minhlangano-jw/july-august-2024-mwb/Mahanyelo-Ni-Ntirho-Wa-Hina-Wo-Chumayela-Xiyimiso-Xa-August-12-18-2024/"
                                 data-lang-code="TS"
                                 data-locale="ts">tsonga</option>
                           
                              <option
                                 data-alternative-spellings="tsotsil  "
                                 
                                 value="tzo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tzo/vunetik/jw-programa-xchiuk-chijtsibaj/julio-agosto-2024-mwb/Jkuxlejaltik-xchi%CA%BCuk-Kabteltik-sventa-Dios-12-%E2%80%8B18-yu%CA%BCun-agosto-ta-2024/"
                                 data-lang-code="TZO"
                                 data-locale="tzo">tsotsil</option>
                           
                              <option
                                 data-alternative-spellings="Toupouri  "
                                 
                                 value="tui"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tui/Ngeel-kefder/jw-meeting-workbook-tui/few-gumugi-few-jo%C5%8Bf%E1%BA%BDns%C3%B5%C3%B5rewa-2024-mwb/Program-taygeti-Seele-wo-de-siigi-w%C3%A3%C3%A3re-maa-nen-Few-Jo%C5%8Bf%E1%BA%BDns%C3%B5%C3%B5rewa-12-18-2024/"
                                 data-lang-code="TPR"
                                 data-locale="tui">tupuri</option>
                           
                              <option
                                 data-alternative-spellings="Türkçe Turkce "
                                 
                                 value="tr"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tr/kutuphane/ibadet-kitapcigi/temmuz-agustos-2024-mwb/12-18-A%C4%9Fustos-2024-%C4%B0%C3%A7in-Hayat%C4%B1m%C4%B1z-ve-Hizmetimiz-%C4%B0badeti-Program%C4%B1/"
                                 data-lang-code="TK"
                                 data-locale="tr">turco</option>
                           
                              <option
                                 data-alternative-spellings="türkmen turkmen "
                                 
                                 value="tk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tk/edebi%C3%BDatlar/jw-okuw-depderi/i%C3%BDul-awgust-2024-mwb/Durmu%C5%9F-we-wagyz-du%C5%9Fu%C5%9Fygyny%C5%88-me%C3%BDilnamasy-12-18-awgust-2024/"
                                 data-lang-code="TMR"
                                 data-locale="tk">turcomano</option>
                           
                              <option
                                 data-alternative-spellings="Tuvalu  "
                                 
                                 value="tvl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tvl/tusi/tusi-m%C5%8D-fakatasiga-a-mi/iulai-aokuso-2024-mwb/Fakasologa-o-Fakatasiga-i-te-Olaga-Kelisiano-mo-te-Galuega-Talai-i-a-Aokuso-12-18-2024/"
                                 data-lang-code="VL"
                                 data-locale="tvl">tuvaluano</option>
                           
                              <option
                                 data-alternative-spellings="тыва  "
                                 
                                 value="tyv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tyv/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B%D2%A3-%D1%85%D0%B5%D1%80%D0%B5%D1%87%D0%B8%D0%BB%D0%B5%D1%80%D0%B8%D0%BD%D0%B8%D2%A3-%D1%83%D0%B6%D1%83%D1%80%D0%B0%D0%B6%D1%8B%D0%BB%D0%B3%D0%B0%D0%B7%D1%8B-%D0%B0%D0%B6%D1%8B%D0%BB%D1%87%D1%8B%D0%BD-%D0%BA%D1%8B%D0%B4%D1%8B%D1%80%D0%B0%D0%B0%D1%88/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/2024-%D1%87%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-12-%D0%B4%D0%B5%D0%BD-18-%D0%BA%D0%B5-%D1%87%D0%B5%D0%B4%D0%B8%D1%80-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%87%D1%83%D1%80%D1%82%D1%82%D0%B0%D0%BB%D0%B3%D0%B0%D0%B2%D1%8B%D1%81-%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%88-%D0%B1%D0%B0%D1%80%D0%B0%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%8B%D0%B2%D1%8B%D1%81-%D0%B4%D0%B5%D0%BF-%D1%83%D0%B6%D1%83%D1%80%D0%B0%D0%B6%D1%8B%D0%BB%D0%B3%D0%B0%D0%BD%D1%8B%D2%A3-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7%D0%B8/"
                                 data-lang-code="VI"
                                 data-locale="tyv">tuviniano</option>
                           
                              <option
                                 data-alternative-spellings="Twi  "
                                 
                                 value="tw"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tw/nhomakorabea/jw-adesua-nhoma/july-august-2024-mwb/Abrab%C9%94-Ne-As%C9%9Bnka-Adesua-Nhyehy%C9%9Be-August-12-18-2024/"
                                 data-lang-code="TW"
                                 data-locale="tw">twi</option>
                           
                              <option
                                 data-alternative-spellings="татар  tartaro"
                                 
                                 value="tt"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tt/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D3%99/%D0%B9%D3%99%D2%BB%D0%B2%D3%99-%D1%88%D0%B0%D2%BB%D0%B8%D1%82%D0%BB%D3%99%D1%80%D0%B5-%D1%8D%D1%88-%D0%B4%D3%99%D1%84%D1%82%D3%99%D1%80%D0%B5/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-%E2%81%A0mwb/%D0%A2%D0%BE%D1%80%D0%BC%D1%8B%D1%88%D1%8B%D0%B1%D1%8B%D0%B7-%D2%BB%D3%99%D0%BC-%D1%85%D0%B5%D0%B7%D0%BC%D3%99%D1%82%D0%B5%D0%B1%D0%B5%D0%B7-%D0%BE%D1%87%D1%80%D0%B0%D1%88%D1%83%D1%8B%D0%BD%D1%8B%D2%A3-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B3%D1%8B-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/"
                                 data-lang-code="TAT"
                                 data-locale="tt">tártaro</option>
                           
                              <option
                                 data-alternative-spellings="tének tenek tenek de San Luis Potosi"
                                 
                                 value="hus"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/hus/publicaciones/jw-tolmixtalab-tamkuntalab/julio-agosto-2024-mwb/I-Ejatal-ani-i-T%CA%BCojl%C3%A1bil-tu-Aykol-k%CA%BCal-a-Cristo-12-ma-ti-18-a-agosto-ti-2024/"
                                 data-lang-code="HST"
                                 data-locale="hus">tének de San Luis Potosí</option>
                           
                              <option
                                 data-alternative-spellings="українська  "
                                 
                                 value="uk"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/uk/%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%BF%D0%BE%D1%81%D1%96%D0%B1%D0%BD%D0%B8%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%B7%D1%96%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D1%8F/%D0%BB%D0%B8%D0%BF%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D0%BF%D0%B5%D0%BD%D1%8C-2024-mwb/%D0%A0%D0%BE%D0%B7%D0%BA%D0%BB%D0%B0%D0%B4-%D0%B7%D1%96%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D1%8F-%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B5-%D0%B6%D0%B8%D1%82%D1%82%D1%8F-%D1%96-%D1%81%D0%BB%D1%83%D0%B6%D1%96%D0%BD%D0%BD%D1%8F-%D0%BD%D0%B0-12-18-%D1%81%D0%B5%D1%80%D0%BF%D0%BD%D1%8F-2024-%D1%80%D0%BE%D0%BA%D1%83/"
                                 data-lang-code="K"
                                 data-locale="uk">ucraniano</option>
                           
                              <option
                                 data-alternative-spellings="удмурт  "
                                 
                                 value="udm"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/udm/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/%D0%B8%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D0%BB%D1%8D%D0%BD-%D0%B0%D0%B4%D3%9F%D0%B8%D1%81%D1%8C-%D0%B8%D0%B2%D0%BE%D1%80%D1%82%D3%A5%D1%81%D1%8C%D1%91%D1%81%D1%8B%D0%B7%D0%BB%D1%8D%D0%BD-%D0%BF%D1%83%D0%BC%D0%B8%D1%81%D1%8C%D0%BA%D0%BE%D0%BD%D0%B7%D1%8B-%D1%83%D0%B6%D0%B0%D0%BD-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C/%D0%BF%D3%A7%D1%81%D1%8C%D1%82%D0%BE%D0%BB%D1%8D%D0%B7%D1%8C-%D0%B3%D1%83%D0%B4%D1%8B%D1%80%D0%B8%D0%BA%D0%BE%D1%88%D0%BA%D0%BE%D0%BD-2024-mwb/%D0%A5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D1%83%D0%BB%D0%BE%D0%BD%D0%BC%D1%8B-%D0%BD%D0%BE-%D1%83%D0%B6%D0%B0%D0%BD-%D1%82%D1%8B%D1%80%D1%88%D0%BE%D0%BD%D0%BC%D1%8B-%D0%BF%D1%83%D0%BC%D0%B8%D1%81%D1%8C%D0%BA%D0%BE%D0%BD%D0%BB%D1%8D%D0%BD-%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%B7-12-18-%D1%82%D3%A5-%D0%B3%D1%83%D0%B4%D1%8B%D1%80%D0%B8%D0%BA%D0%BE%D1%88%D0%BA%D0%BE%D0%BD-2024-%D1%82%D3%A5-%D0%B0%D1%80/"
                                 data-lang-code="UM"
                                 data-locale="udm">udmurto</option>
                           
                              <option
                                 data-alternative-spellings="Urhobo  "
                                 
                                 value="urh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/urh/ilaibri/jw-obe-uyono/july-august-2024-mwb/%E1%BB%8Crhu%E1%BA%B9r%E1%BA%B9phiyot%E1%BB%8D-r%E1%BA%B9-Uyono-r%E1%BA%B9-Akpeyeren-Avwanre-v%E1%BA%B9-Iruo-Ruvie-na-vw%E1%BA%B9-August-12-18-2024/"
                                 data-lang-code="UR"
                                 data-locale="urh">uhobo</option>
                           
                              <option
                                 data-alternative-spellings="Уйғур (кирилл йезиғи) Уйғур кирилл йезиғи uigur (alfabeto cirilico) uigur alfabeto cirilico"
                                 
                                 value="ug-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ug-cyrl/%D0%BA%D0%B8%D1%82%D0%B0%D0%BF%D1%85%D0%B0%D0%BD%D0%B0/%D0%B9%D3%99%D2%BB%D0%B2%D0%B0-%D0%B3%D1%83%D0%B2%D0%B0%D1%87%D0%B8%D0%BB%D0%B8%D1%80%D0%B8%D0%BD%D0%B8%D2%A3-%D0%B8%D1%88-%D0%B4%D3%99%D0%BF%D1%82%D0%B8%D1%80%D0%B8/%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024-mwb/%D2%BA%D0%B0%D1%8F%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D0%B2%D3%99-%D1%85%D0%B8%D0%B7%D0%BC%D0%B8%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D1%83%D1%87%D1%80%D0%B8%D1%88%D0%B8%D1%88%D0%B8%D0%BD%D0%B8%D2%A3-%D2%97%D3%99%D0%B4%D0%B2%D0%B8%D0%BB%D0%B8-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-2024/"
                                 data-lang-code="UG"
                                 data-locale="ug-cyrl">uigur (alfabeto cirílico)</option>
                           
                              <option
                                 data-alternative-spellings="Umbundu  umbundu"
                                 
                                 value="umb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/umb/ociseleko-calivulu/o-jw-ovipama-viohongele/evambi-linene-enyenye-2024-mwb/Ekalo-Lietu-Tuakrist%C3%A3o-Kuenda-Oku-Kunda-Ovipama-Viohongele-Osemana-12-18-Yenyenye-2024/"
                                 data-lang-code="UB"
                                 data-locale="umb">umbundú</option>
                           
                              <option
                                 data-alternative-spellings="اُردو  "
                                 
                                 value="ur"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ur/%D9%84%D8%A7%D8%A6%D8%A8%D8%B1%DB%8C%D8%B1%DB%8C/%D8%A7%D9%90%D8%AC%D9%84%D8%A7%D8%B3-%DA%A9%D8%A7-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D8%AC%D9%88%D9%84%D8%A7%D8%A6%DB%8C-%D8%A7%DA%AF%D8%B3%D8%AA-2024%D8%A1-%D9%82%D8%A7%D8%B9%D8%AF%DB%81/%D9%85%D8%B3%DB%8C%D8%AD%DB%8C-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%A7%D9%88%D8%B1-%D8%AE%D8%AF%D9%85%D8%AA-%DA%A9%DB%92-%D9%84%DB%8C%DB%92-12-18-%D8%A7%DA%AF%D8%B3%D8%AA-2024%D8%A1-%DA%A9%D8%A7-%D8%B4%DB%8C%DA%88%D9%88%D9%84/"
                                 data-lang-code="UD"
                                 data-locale="ur">urdu</option>
                           
                              <option
                                 data-alternative-spellings="Uruund  "
                                 
                                 value="rnd"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/rnd/bibiliyotek/jw-mukand-wa-chikumangan/ngond-wa-7-ngond-wa-8-2024-mwb/Program-wa-Mudimu-ni-Mashakamin-ma-In-Kristu-wa-rubing-ra-12-18-Ngond-wa-8-2024/"
                                 data-lang-code="DR"
                                 data-locale="rnd">uruund</option>
                           
                              <option
                                 data-alternative-spellings="ўзбекча  "
                                 
                                 value="uz-cyrl"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/uz-cyrl/%D0%BA%D1%83%D1%82%D1%83%D0%B1%D1%85%D0%BE%D0%BD%D0%B0/%D1%8F%D2%B3%D0%BE%D0%B2%D0%B0-%D1%88%D0%BE%D2%B3%D0%B8%D0%B4%D0%BB%D0%B0%D1%80%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3-%D1%82%D0%B0%D1%8A%D0%BB%D0%B8%D0%BC-%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80%D0%B8/2024-%D0%B9%D0%B8%D0%BB-%D0%B8%D1%8E%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-mwb/2024-%D0%B9%D0%B8%D0%BB-12-18-%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D2%B3%D0%B0%D1%84%D1%82%D0%B0%D1%81%D0%B8-%D1%83%D1%87%D1%83%D0%BD-%D2%B2%D0%B0%D1%91%D1%82-%D1%82%D0%B0%D1%80%D0%B7%D0%B8%D0%BC%D0%B8%D0%B7-%D0%B2%D0%B0-%D1%85%D0%B8%D0%B7%D0%BC%D0%B0%D1%82%D0%B8%D0%BC%D0%B8%D0%B7-%D1%83%D1%87%D1%80%D0%B0%D1%88%D1%83%D0%B2%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3-%D0%B4%D0%B0%D1%81%D1%82%D1%83%D1%80%D0%B8/"
                                 data-lang-code="UZ"
                                 data-locale="uz-cyrl">uzbeko</option>
                           
                              <option
                                 data-alternative-spellings="o‘zbekcha (lotincha) o'zbekcha (lotincha) ozbekcha lotincha uzbeko alfabeto latino"
                                 
                                 value="uz-latn"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/uz-latn/kutubxona/yahova-shohidlarining-talim-dasturi/2024-yil-iyul-avgust-mwb/2024-yil-12-18-avgust-haftasi-uchun-Hayot-tarzimiz-va-xizmatimiz-uchrashuvining-dasturi/"
                                 data-lang-code="UZR"
                                 data-locale="uz-latn">uzbeko (alfabeto latino)</option>
                           
                              <option
                                 data-alternative-spellings="valencià valencia "
                                 
                                 value="ca-x-vlc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ca-x-vlc/biblioteca/jw-quadern-activitats/juliol-agost-2024-mwb/Programa-dEl-viure-cristi%C3%A0-i-la-predicaci%C3%B3-del-12-al-18-dagost-de-2024/"
                                 data-lang-code="VLC"
                                 data-locale="ca-x-vlc">valenciano</option>
                           
                              <option
                                 data-alternative-spellings="Luvenda  "
                                 
                                 value="ve"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ve/l%CC%ADaiburari/tshibugwana-tsha-mu%E1%B9%B1angano-tsha-%E1%B9%B1hanzi-dza-yehova/july-august-2024-mwb/Mbekanyo-Ya-Mu%E1%B9%B1angano-Wa-Vhutshilo-Na-Vhud%CC%ADind%CC%ADa-Hashu-Ya-12-18-August-2024/"
                                 data-lang-code="VE"
                                 data-locale="ve">vendal</option>
                           
                              <option
                                 data-alternative-spellings="Vezo  "
                                 
                                 value="skg-x-vz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/skg-x-vz/raha-fa-misy/jw-kahiem-pivoria/zie-ooh-2024-mwb/Fandaharam-pivoria-amy-Fiaina-noho-Fanompoa-12-18-O%C3%B2h-2024/"
                                 data-lang-code="VZ"
                                 data-locale="skg-x-vz">vezo</option>
                           
                              <option
                                 data-alternative-spellings="Việt Viet "
                                 
                                 value="vi"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/vi/thu-vien/chuong-trinh-nhom-hop/loi-song-thanh-chuc-thang7-thang8-2024/Ch%C6%B0%C6%A1ng-tr%C3%ACnh-L%E1%BB%91i-s%E1%BB%91ng-v%C3%A0-th%C3%A1nh-ch%E1%BB%A9c-cho-ng%C3%A0y-12-%E2%80%8B18-th%C3%A1ng-8-n%C4%83m-2024/"
                                 data-lang-code="VT"
                                 data-locale="vi">vietnamita</option>
                           
                              <option
                                 data-alternative-spellings="Faka'uvea Fakauvea "
                                 
                                 value="wls"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/wls/te-%CA%BCu-tohi-ne%CA%BCe-filifili/jw-fono-kaupepa-ako/sulio-aukusito-2024-mwb/Polokalama-Fono-%CA%BCo-Te-Ma%CA%BCuli-Fakakilisitiano-Mo-Te-Faifakamafola-%CA%BCo-Te-%CA%BCAho-12-18-%CA%BCo-%CA%BCAukusito-2024/"
                                 data-lang-code="WA"
                                 data-locale="wls">wallisiano</option>
                           
                              <option
                                 data-alternative-spellings="Waray-Waray  "
                                 
                                 value="war"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/war/librarya/jw-workbook-para-ha-katirok/hulyo-agosto-2024-mwb/Eskedyol-han-Pagkinabuhi-Ngan-Ministeryo-nga-Katirok-Para-ha-Agosto-12-18-2024/"
                                 data-lang-code="SA"
                                 data-locale="war">waray-waray</option>
                           
                              <option
                                 data-alternative-spellings="Wayuunaiki  wayuunaiki"
                                 
                                 value="guc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/guc/karaloutairua/jw-wekirajaayainjatu-sunain-tu-outkajawaakat/juuliou-akoosutou-2024-mwb/Wakuwa%CA%BCipa-otta-Wa%CA%BCyataain-n%C3%BCm%C3%BCin-Maleiwa-akoos%C3%BCto%CA%BCu-12-18-2024/"
                                 data-lang-code="WY"
                                 data-locale="guc">wayúunaiki</option>
                           
                              <option
                                 data-alternative-spellings="wichi  "
                                 
                                 value="wlv"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/wlv/mayhay-toj-iche/papel-nochumyenlhi-reunion-heowa-lakawos/julio-agosto-2024-mwb/Programa-toj-ihi-reuni%C3%B3n-M%CA%BCak-toj-Dios-Lakawos-ihi-wet-Lechumet-toj-12-18-agosto-toj-2024/"
                                 data-lang-code="WCH"
                                 data-locale="wlv">wichi</option>
                           
                              <option
                                 data-alternative-spellings="Wolayttattuwa  "
                                 
                                 value="wal"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/wal/laybreriyaa/jw-xanna%CB%88iyo-xuufiyaa/isiine-naase-2024-mwb/De%CB%88uwanne-Haggaazuwa-Shiiquwa-Prograamiya-Naase-12-18-2024/"
                                 data-lang-code="WL"
                                 data-locale="wal">wolaita</option>
                           
                              <option
                                 data-alternative-spellings="IsiXhosa  "
                                 
                                 value="xh"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/xh/ILayibrari/amangqina-kayehova-incwadi-yeentlanganiso/julayi-agasti-2024-mwb/Ucwangciso-Lobomi-BamaKristu-Nomsebenzi-Wokushumayela-LwangoAgasti-12-18-2024/"
                                 data-lang-code="XO"
                                 data-locale="xh">xhosa</option>
                           
                              <option
                                 data-alternative-spellings="ciTshwa  "
                                 
                                 value="tsc"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/tsc/bhiblioteka/jw-cibhukwana-ca-mutlhangano/julho-agosto-wa-2024-mwb/Longoloko-wa-Mutlhangano-wa-Ntiro-ni-Mahanyela-wa-12-18-ka-Agosto-wa-2024/"
                                 data-lang-code="AW"
                                 data-locale="tsc">xitshwa</option>
                           
                              <option
                                 data-alternative-spellings="Yaoba  "
                                 
                                 value="daf"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/daf/s%C3%AB%C3%ABdh%C9%9B-lo-dh%C9%9B/jw-bh%C9%94kw%C3%AB%C3%AB-s%C3%AB%C3%ABdh%C9%9B/%CA%92ue-ut%C3%B6-2024-mwb/K%C3%AB-kleti%C9%9Bn-%CB%88ka-s%C3%BC-waa-zlanwop%C3%B6-y%C3%B6-bh%C9%94kw%C3%AB%C3%AB-%CB%88g%C3%BCw%C9%94n-%CB%88%C3%B6-kw%C9%9B-2024-%CB%88Ut%C3%B6-12-18-%CB%88g%C3%BC/"
                                 data-lang-code="YCB"
                                 data-locale="daf">yacouba</option>
                           
                              <option
                                 data-alternative-spellings="Waab  yapes"
                                 
                                 value="yap"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yap/gin-bay-boch-banen-riy/jw-babyor-ni-fan-ko-muulung/july-august-2024-mwb/Schedule-ko-Fare-Muulung-ni-Tin-Gad-Ma-Rin-nge-Machib-Rodad-ko-August-12-18-2024/"
                                 data-lang-code="YP"
                                 data-locale="yap">yapés</option>
                           
                              <option
                                 data-alternative-spellings="Kiyombe  "
                                 
                                 value="yom-x-ymb"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yom-x-ymb/minkanda/jw-nkanda-yi-zikhuntukunu/juillet-ao%C3%BBt-2024-mwb/Programi-yi-lukutukunu-lu-Luzingu-ayi-kisalu-yi-12-18-Ao%C3%BBt-2024/"
                                 data-lang-code="YMB"
                                 data-locale="yom-x-ymb">yombe</option>
                           
                              <option
                                 data-alternative-spellings="Yorùbá Yoruba "
                                 
                                 value="yo"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/yo/Ohun-T%C3%A1-A-N%C3%AD/iwe-ipade-jw/july-august-2024-mwb/%C3%8Ct%C3%B2l%C3%A9%CC%A3s%E1%BA%B9%E1%BA%B9s%E1%BA%B9-%C3%8Cp%C3%A0d%C3%A9-%C3%8Cgb%C3%A9s%C3%AD-Ay%C3%A9-%C3%A0ti-I%E1%B9%A3%C3%A9%CC%A3-%C3%92j%C3%AD%E1%B9%A3%C3%A9%CC%A3-ti-August-12-18-2024/"
                                 data-lang-code="YR"
                                 data-locale="yo">yoruba</option>
                           
                              <option
                                 data-alternative-spellings="Zande  zande"
                                 
                                 value="zne"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/zne/agu-ahe-duho/jw-waraga-dunguratise/bamburu-buza-2024-mwb/Gaani-Raka-Nga-ga-aKristano-na-Gaani-Sunge-Ringbisa-Regbo-Dunguratise-Nga-ga-Buza-12-18-2024/"
                                 data-lang-code="ZN"
                                 data-locale="zne">zandé</option>
                           
                              <option
                                 data-alternative-spellings="diitza  "
                                 
                                 value="zpa"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/zpa/biblioteca/jw-ni-gonyno-lo-reunion/july-agost-2024-mwb/Mod-nabanyno-n%C3%A9-mod-ronyno-Xchiin-Dios-12-a-18-de-agost-%C3%ADz-2024/"
                                 data-lang-code="ZPL"
                                 data-locale="zpa">zapoteco de Lachiguiri</option>
                           
                              <option
                                 data-alternative-spellings="didza xhidza  "
                                 
                                 value="zav"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/zav/publicaciones/guia-actividades-reunion/julio-agosto-2024-mwb/Ka%CA%BC-rzordarha-lhen-ka%CA%BC-rtzalajrha-ki-Dios-12-18-ki-agosto-yiza-2024/"
                                 data-lang-code="ZPV"
                                 data-locale="zav">zapoteco de Villa Alta</option>
                           
                              <option
                                 data-alternative-spellings="diidxazá diidxaza "
                                 
                                 value="zai"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/zai/libru-ne-revista/jw-ni-chigaca-lu-reunion/julio-agosto-2024-mwb/Xhii%C3%B1a%CA%BC-Dios-ne-modo-nab%C3%A1ninu-12-hasta-18-de-agosto-de-2024/"
                                 data-lang-code="ZPI"
                                 data-locale="zai">zapoteco del Istmo</option>
                           
                              <option
                                 data-alternative-spellings="IsiZulu  zulu"
                                 
                                 value="zu"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/zu/umtapo/incwajana-yomhlangano-wofakazi/julayi-agasti-2024-mwb/Isimiso-SoMhlangano-Wokuphila-Nenkonzo-Sika-Agasti-12-18-2024/"
                                 data-lang-code="ZU"
                                 data-locale="zu">zulú</option>
                           
                              <option
                                 data-alternative-spellings="العربية  arabe"
                                 
                                 value="ar"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/ar/%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%B4%D9%87%D9%88%D8%AF-%D9%8A%D9%87%D9%88%D9%87/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%AA%D9%85%D9%88%D8%B2-%D8%A2%D8%A8-%D9%A2%D9%A0%D9%A2%D9%A4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%AD%D9%8A%D8%A9-%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D9%A1%D9%A2-%D9%A1%D9%A8-%D8%A2%D8%A8-%D8%A3%D8%BA%D8%B3%D8%B7%D8%B3-%D9%A2%D9%A0%D9%A2%D9%A4/"
                                 data-lang-code="A"
                                 data-locale="ar">árabe</option>
                           
                              <option
                                 data-alternative-spellings="العربية (اللهجة المصرية) العربية اللهجة المصرية arabe de Egipto"
                                 
                                 value="arz"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/arz/%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%B4%D9%87%D9%88%D8%AF-%D9%8A%D9%87%D9%88%D9%87/%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%AA%D9%85%D9%88%D8%B2-%D8%A2%D8%A8-%D9%A2%D9%A0%D9%A2%D9%A4/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9-%D9%88%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%8A%D8%AD%D9%8A%D8%A9-%D9%84%D8%A3%D8%B3%D8%A8%D9%88%D8%B9-%D9%A1%D9%A2-%D9%A1%D9%A8-%D8%A2%D8%A8-%D8%A3%D8%BA%D8%B3%D8%B7%D8%B3-%D9%A2%D9%A0%D9%A2%D9%A4/"
                                 data-lang-code="AEY"
                                 data-locale="arz">árabe de Egipto</option>
                           
                              <option
                                 data-alternative-spellings="Cinyanja  nanya"
                                 
                                 value="nya"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nya/laibulale/jw-misonkhano-kabuku/july-august-2024-mwb/Ndandanda-ya-Msonkhano-wa-Umoyo-na-Utumiki-ya-August-12-18-2024/"
                                 data-lang-code="CIN"
                                 data-locale="nya">ñanya</option>
                           
                              <option
                                 data-alternative-spellings="Ngangela  nemba"
                                 
                                 value="nba"
                                 class=""
                                 data-input-icon-class=""
                                 data-url="/nba/mikanda/jw-mukanda-ua-viuano/julho-agosto-ya-2024-mwb/Programa-ya-Ciuano-ca-Muono-Uetu-na-Vipanga-Vietu-ya-12-18-ya-Agosto-ya-2024/"
                                 data-lang-code="NGL"
                                 data-locale="nba">ñemba</option>
                           
                        </select>
                     
                  
                     
                        <input type="hidden" name="prefer" value="lang" />
                     
                  
                     
                        <input type="hidden" name="docid" value="202024247" />
                     
                  

                  <noscript>
                     <input type="submit" value="Elegir idioma" />
                  </noscript>
               </div>
            </form>
         
      </div>
   


      <div class="rubyControl">
   <div class="form-field-checkbox">
      <input type="checkbox" id="displayRubyCheckbox" name="displayRubyCheckbox" />
      <label for="displayRubyCheckbox" class="rubyCheckboxLabel">
         <span class="rubyCheckboxText"></span>
      </label>
   </div>
</div>

   </div>
</div>



   <main role="main" id="content" class="grid-layout--pub-sidebar">


   <div class="main-wrapper">
      

      <article id="article" class="jwac docClass-106 docId-202024247 ms-ROMAN ml-S dir-ltr iss-202407 pub-mwb layout-reading layout-sidebar" lang="es" dir="ltr" xml:lang="es">
         
            
   <div class="textSizeIncrement">
      

      <header>
<h1 class="du-fontSize--basePlus2 du-color--textSubdued" id="p1" data-pid="1">12-18 de agosto</h1>
<h2 class="du-fontSize--base du-margin-top--2 du-margin-top-desktopOnly--4" id="p2" data-pid="2"><a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19073000-19073028' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/73/#v19073001-v19073028' target='_blank'><strong>SALMOS 73,</strong></a><a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19074000-19074023' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/74/#v19074001-v19074023' target='_blank'> <strong>74</strong></a></h2>
</header>
   </div>


         

         

   <div class="jsViewportPin noJShide jsAudioPlayerWrapper jsHideForDocSubVideo">
      

   
      
   <div class="jsAudioPlayer jsMarkersEnabled excludePin jsAlwaysIncludeForPinHeight" id="streamingAudio" data-highlighter_target="#article">
      <label class="jsPlayUppCaseLabel hideObj">REPRODUCIR EN</label>
      
         <a href='https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?docid=202024247&output=html&fileformat=MP3&alllangs=0&langwritten=S&txtCMSLang=S' class="streaming noJSHide hideObj jsMediaPlayer jsDownload"
            data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?docid=202024247&amp;output=json&amp;fileformat=MP3&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
            data-issuedate="Julio y agosto de 2024" title="Reproducir o descargar" target='_blank' rel='noopener'></a>
      
   </div>


   


   </div>




   <div class="cvr relatedImage hideObj" data-src="https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_xs.jpg" data-alt=""></div>




   <div class="onPageTitle hideObj">12-18 de agosto</div>







         
<div class="docSubContent">
   
<div class="jsEmbeddedContentPosterSearchBoundary ">
   
   
      <div style="display:none;" class="jsVideoPoster mid202024247" data-src="https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_lsr_xl.jpg" data-alt="Una adolescente Testigo observa con envidia a sus compañeras de clase mientras hablan entre ellas y miran sus teléfonos."></div>
   


   
      
      <div class="contentBody">
         

         
   
   <div class="textSizeIncrement">
      <div class="  " >
         
            

<div class="bodyTxt">
<h3 class="dc-icon--music dc-icon-size--basePlus1 dc-icon-margin-horizontal--8 du-fontSize--base du-borderStyle-top--solid du-borderColor--borderDefault du-borderWidth--2 du-padding-top--4 du-padding-top-desktopOnly--5" id="p3" data-pid="3"><a class='pub-sjj' data-page-id="mid1102016836" href='/es/biblioteca/musica-canciones/cantemos-con-gozo/36-cuidemos-nuestro-corazon/'><strong>Canción 36</strong></a> <strong>y oración | Palabras de introducción</strong> <span class="du-fontWeight--normal">(1 min.)</span></h3>
<div id="tt6" class="du-fontSize--basePlus2 dc-icon--gem dc-icon-layout--top dc-icon-bgColor--teal-600 dc-icon-color--white dc-icon-margin-inlineEnd--8 dc-icon-padding--5 dc-icon-size--baseMinus1 du-margin-top--8 du-margin-bottom--2">
<h2 class="du-fontSize--base du-color--teal-700 du-margin-vertical--0" id="p4" data-pid="4">TESOROS DE LA BIBLIA</h2>
</div>
<div id="tt8" class="dc-bleedToArticleEdge dc-paddingToContentEdge du-bgColor--bgSecondary du-margin-top--8 du-padding-top--8 du-padding-bottom--1">
<h3 class="du-fontSize--base du-color--teal-700 du-margin-vertical--0" id="p5" data-pid="5">1. ¿Les tenemos envidia a quienes no sirven a Dios?</h3>
<div id="tt10" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt11" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p6" data-pid="6" class="p6">(10 mins.)</p>
</div>
<p id="p7" data-pid="7" class="p7">Todos podríamos llegar a tenerles envidia a quienes no sirven a Dios (<a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19073003-19073005' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/73/#v19073003-v19073005' target='_blank'>Sl 73:3-5</a>; <a class='pub-w20' data-highlightrange='p22' data-page-id="mid2020682" href='/es/biblioteca/revistas/atalaya-estudio-diciembre-2020/Jehov%C3%A1-salva-a-los-que-est%C3%A1n-hundidos-en-el-des%C3%A1nimo/#p22'><em>w20.12</em> 19 párr. 14</a>).</p>
<p id="p8" data-pid="8" class="p8">Adorar a Jehová con nuestros hermanos en vez de aislarnos nos ayuda a recuperar el punto de vista correcto (<a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19073017' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/73/#v19073017' target='_blank'>Sl 73:17;</a><a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='20018001' href='/es/biblioteca/biblia/biblia-estudio/libros/proverbios/18/#v20018001' target='_blank'> Pr 18:1</a>; <a class='pub-w20' data-highlightrange='p23-p24' data-page-id="mid2020682" href='/es/biblioteca/revistas/atalaya-estudio-diciembre-2020/Jehov%C3%A1-salva-a-los-que-est%C3%A1n-hundidos-en-el-des%C3%A1nimo/#p23'><em>w20.12</em> 19, 20 párrs. 15, 16</a>).</p>
<p id="p9" data-pid="9" class="p9">Quienes no sirven a Dios están “en suelo resbaladizo”, pero Jehová lleva “a la gloria” a quienes le sirven (<a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19073018-19073019' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/73/#v19073018-v19073019' target='_blank'>Sl 73:18, 19,</a><a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19073024' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/73/#v19073024' target='_blank'> 24</a>; <a class='pub-w14' data-highlightrange='p12' data-page-id="mid2014282" href='/es/biblioteca/revistas/w20140415/fe-de-mois%C3%A9s/#p12'><em>w14</em> 15/4 4 párr. 5;</a> <a class='pub-w13' data-highlightrange='p9-p11' data-page-id="mid2013125" href='/es/biblioteca/revistas/w20130215/nada-impida-recibir-gloria-de-dios/#p9'><em>w13</em> 15/2 25, 26 párrs. 3-5</a>).</p>
</div>
<div id="f1" class="south_center">
<figure>
<span class='jsRespImg' data-img-type='cnt' data-img-att-class='south_center' data-img-att-alt='Una adolescente Testigo observa con envidia a sus compañeras de clase mientras hablan entre ellas y miran sus teléfonos.' data-img-size-xs='https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_cnt_1_xs.jpg' data-img-size-sm='https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_cnt_1_sm.jpg' data-img-size-md='https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_cnt_1_md.jpg' data-img-size-lg='https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_cnt_1_lg.jpg' data-zoom='https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_cnt_1_xl.jpg'><noscript><img src='https://assetsnffrgf-a.akamaihd.net/assets/m/202024247/univ/wpub/202024247_univ_cnt_1_xs.jpg' alt="Una adolescente Testigo observa con envidia a sus compañeras de clase mientras hablan entre ellas y miran sus teléfonos." class="south_center"/></noscript></span>
</figure>
</div>
</div>
<h3 class="du-fontSize--base du-color--teal-700 du-margin-top--8 du-margin-bottom--0" id="p10" data-pid="10">2. Busquemos perlas escondidas</h3>
<div id="tt13" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt14" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p11" data-pid="11" class="p11">(10 mins.)</p>
</div>
<ul class="du-listStyleType--none du-padding-inlineStart--0"><li><p id="p12" data-pid="12" class="p12"><a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19074013-19074014' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/74/#v19074013-v19074014' target='_blank'>Sl 74:13, 14</a>. En este caso, ¿a qué debe referirse la expresión “Leviatán”? (<a class='pub-it' data-highlightrange='p6' data-page-id="mid1200002728" href='/es/biblioteca/libros/Perspicacia-para-comprender-las-Escrituras/Leviat%C3%A1n/#p6'><em>it</em>-2 213</a>).</p>
<div class="gen-field" id="p13" data-pid="13">
<label for="tt19" id="tt17" class="dc-screenReaderText">Respuesta</label>
<textarea id="tt19" name="textarea-1"></textarea>
</div>
</li>
<li class="du-margin-top--8"><p id="p14" data-pid="14" class="p14">¿Qué perlas espirituales ha encontrado en la lectura bíblica de esta semana?</p>
<div class="gen-field" id="p15" data-pid="15">
<label for="tt24" id="tt22" class="dc-screenReaderText">Respuesta</label>
<textarea id="tt24" name="textarea-2"></textarea>
</div>
</li>
</ul>
</div>
<h3 class="du-fontSize--base du-color--teal-700 du-margin-top--8 du-margin-bottom--0" id="p16" data-pid="16">3. Lectura de la Biblia</h3>
<div id="tt27" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt28" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p17" data-pid="17" class="p17">(4 mins.) <a class=' jsBibleLink' data-bible='nwtsty' data-requested-bible='' data-targetverses='19074001-19074023' href='/es/biblioteca/biblia/biblia-estudio/libros/salmos/74/#v19074001-v19074023' target='_blank'>Sl 74:1-23</a> (<a class='pub-th' data-page-id="mid1102018450" href='/es/biblioteca/libros/lectores-y-maestros/10-modular-voz/'><em>th</em> lección 10</a>).</p>
</div>
</div>
<div id="tt29" class="dc-icon--wheat dc-icon-layout--top dc-icon-bgColor--gold-600 dc-icon-color--white dc-icon-margin-inlineEnd--8 dc-icon-padding--5 dc-icon-size--baseMinus1 du-fontSize--basePlus2 du-borderStyle-bottom--solid du-borderColor--borderDefault du-borderWidth--1 du-margin-top--12 du-margin-bottom--2 du-padding-bottom--2">
<h2 class="du-fontSize--base du-color--gold-700 du-margin-vertical--0" id="p18" data-pid="18">SEAMOS MEJORES MAESTROS</h2>
</div>
<h3 class="du-fontSize--base du-color--gold-700 du-margin-top--8 du-margin-bottom--0" id="p19" data-pid="19">4. Empiece conversaciones</h3>
<div id="tt32" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt33" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p20" data-pid="20" class="p20">(3 mins.) PREDICACIÓN INFORMAL. Aproveche un momento oportuno para contarle a un conocido algo que aprendió recientemente en una reunión (<a class='pub-lmd' data-highlightrange='p14' data-page-id="mid1102023302" href='/es/biblioteca/libros/hacer-discipulos-obra-amor/leccion-2/#p14'><em>lmd</em> lección 2 punto 4</a>).</p>
</div>
</div>
<h3 class="du-fontSize--base du-color--gold-700 du-margin-top--8 du-margin-bottom--0" id="p21" data-pid="21">5. Haga revisitas</h3>
<div id="tt35" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt36" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p22" data-pid="22" class="p22">(4 mins.) PREDICACIÓN PÚBLICA. Ofrézcale a la persona un curso de la Biblia y muéstrele cómo son nuestras clases (<a class='pub-lmd' data-highlightrange='p13' data-page-id="mid1102023308" href='/es/biblioteca/libros/hacer-discipulos-obra-amor/leccion-8/#p13'><em>lmd</em> lección 8 punto 3</a>).</p>
</div>
</div>
<h3 class="du-fontSize--base du-color--gold-700 du-margin-top--8 du-margin-bottom--0" id="p23" data-pid="23">6. Explique sus creencias</h3>
<div id="tt38" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt39" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p24" data-pid="24" class="p24">(5 mins.) Discurso. <a class='pub-ijwbq' data-page-id="mid502015150" href='/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/no-todas-religiones-acercan-a-dios/'><em>ijwbq</em> 89</a>. Título: ¿Son buenas todas las religiones? (<a class='pub-th' data-page-id="mid1102018454" href='/es/biblioteca/libros/lectores-y-maestros/14-destacar-puntos-principales/'><em>th</em> lección 14</a>).</p>
</div>
</div>
<div id="tt40" class="dc-icon--sheep dc-icon-layout--top dc-icon-bgColor--red-600 dc-icon-color--white dc-icon-margin-inlineEnd--8 dc-icon-padding--5 dc-icon-size--baseMinus1 du-fontSize--basePlus2 du-borderStyle-bottom--solid du-borderColor--borderDefault du-borderWidth--1 du-margin-top--12 du-margin-bottom--2 du-padding-bottom--2">
<h2 class="du-fontSize--base du-color--maroon-600 du-margin-vertical--0" id="p25" data-pid="25">NUESTRA VIDA CRISTIANA</h2>
</div>
<h3 class="dc-icon--music dc-icon-size--basePlus1 dc-icon-margin-horizontal--8 du-fontSize--base" id="p26" data-pid="26"><a class='pub-sjj' data-page-id="mid1102016872" href='/es/biblioteca/musica-canciones/cantemos-con-gozo/72-anunciare-verdad-del-reino/'><strong>Canción 72</strong></a></h3>
<h3 class="du-fontSize--base du-color--maroon-600 du-margin-top--8 du-margin-bottom--0" id="p27" data-pid="27">7. Necesidades de la congregación</h3>
<div id="tt44" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt45" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p28" data-pid="28" class="p28">(15 mins.)</p>
</div>
</div>
<h3 class="du-fontSize--base du-color--maroon-600 du-margin-top--8 du-margin-bottom--0" id="p29" data-pid="29">8. Estudio bíblico de la congregación</h3>
<div id="tt47" class="du-margin-inlineStart--5 du-margin-inlineStart-desktopOnly--6">
<div id="tt48" class="du-color--textSubdued du-margin-top--1 du-margin-children-vertical--0">
<p id="p30" data-pid="30" class="p30">(30 mins.) <a class='pub-bt' data-highlightrange='p5-p11' data-page-id="mid1102009057" href='/es/biblioteca/libros/testimonio-completo/cuerpo-gobernante/decision-unanime/#p5'><em>bt</em> cap. 14 párrs. 1-6</a> y <a class='pub-bt' data-highlightrange='p59-p64' data-page-id="mid1102009057" href='/es/biblioteca/libros/testimonio-completo/cuerpo-gobernante/decision-unanime/#p59'>recuadro de la pág. 112</a>.</p>
</div>
</div>
<h3 class="du-fontSize--base du-borderStyle-top--solid du-borderColor--borderDefault du-borderWidth--2 du-margin-top--12 du-padding-top--4 du-padding-top-desktopOnly--5" id="p31" data-pid="31">Palabras de conclusión <span class="du-fontWeight--normal">(3 mins.)</span> | <span class="dc-icon--music dc-icon-size--basePlus1 dc-icon-margin-inlineStart--2 dc-icon-margin-inlineEnd--8"><a class='pub-sjj' data-page-id="mid1102016898" href='/es/biblioteca/musica-canciones/cantemos-con-gozo/98-escrituras-inspiradas-por-dios/'>Canción 98</a> y oración</span></h3>
</div>

         

         
         

         
         

         
         

         
         
      </div>
   </div>


      </div>
   
</div>

</div>


         






















         



<div class="articleFooterLinks">
   
      
      
         <nav aria-label="Contenido">
            
   <div class="articleNavLinks">

   
      <div class="navLinkPrev">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-5-a-11-de-agosto-de-2024/"
            
               title="5-11 de agosto"
            

            
               data-page-id="mid202024246"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024246 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-left"></i>
               </span>
               <span class="buttonText">Anterior</span>
            
         </a>
      </div>
   

   

   
      <div class="navLinkNext">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-19-a-25-de-agosto-de-2024/"
            
               title="19-25 de agosto"
            

            
               data-page-id="mid202024248"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024248 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="buttonText">Siguiente</span>
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-right"></i>
               </span>
            
         </a>
      </div>
   

   </div>


         </nav>
      

      


      
      
         

      

      
         

      

   

   
   

   <div class="articleShareLinks">
      
         



<button type="button" class="jsPrint">
   
   
   <span class="secondaryButton  articlePrintButton">
      
         
            
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-printer"></i>
               </span>
            
            
               <span class="buttonText">Imprimir</span>
            
         
      
   </span>
</button>



      
      
<div class="shareButtonWrapper">
   <button type="button" class="jsShare " title="Compartir">
      <span class="secondaryButton articleShareButton">
         <span class="buttonIcon" aria-hidden="true">
            <i class="jwf-jw-icons-external jwi-share"></i>
         </span>
         
         
            <span class="buttonText" aria-hidden="true">Compartir</span>
         
         <span class="srText">
            Compartir
            
   
   12-18 de agosto


         </span>
      </span>
   </button>
   <div class="data" data-is-current-page="1">
      
         

   
   
   <div class="synopsis   textOnly first last currentPage publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle">

      
         
      

      <div class="syn-body   textOnly ">

   


   

<p class="contextTitle">
   
      GUÍA DE ACTIVIDADES
   
</p>




   
   <h3>




   <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/">
      
         Vida y Ministerio Cristianos (12 a 18 de agosto de 2024)
      
   </a>




   </h3>



   


   
   

   



   
   

</div>


      
   </div>


      
      <div class="link" data-docid="202024247" data-wtlocale="S" >
      </div>
      <div class="language" data-use-default-language-name="">
         español
      </div>
      <div class="emailSubject">
         Vida y Ministerio Cristianos (12 a 18 de agosto de 2024)
      </div>
      <div class="image">https://cms-imgp.jw-cdn.org/img/p/202024247/univ/art/202024247_univ_sqr_xl.jpg</div>
   </div>
</div>



      
         <span class="articleCitation">mwb24 julio pág. 12</span>
      

   </div>


</div>

      </article>
   </div>

   
      
   

      
       
         
             
               
                  <nav role="navigation" aria-label="Índice" id="mobileTOCNav">
                     <button type="button" id="mobileTOCHandle" class="mobilePaneControl" aria-expanded="false" aria-controls="#mobileTOC">
                        <span class="mobilePaneControl-icon" aria-hidden="true">
                           <i class="jwf-jw-icons-external jwi-arrow-to-bar-left"></i>
                        </span>
                        <span class="srText mobilePaneControl-text">Mostrar índice</span>
                     </button>
                     <div id="mobileTOC" class="cms-clearfix rightPanel">
                        <div id="sidebarTOC" class="publication cms-clearfix">
                           
   <div class="articleNavLinks">

   
      <div class="navLinkPrev">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-5-a-11-de-agosto-de-2024/"
            
               title="5-11 de agosto"
            

            
               data-page-id="mid202024246"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024246 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-left"></i>
               </span>
               <span class="srText">Anterior</span>
            
         </a>
      </div>
   

   
      
      <h5 class="TOCTitle"><a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/" title="Julio y agosto de 2024">ÍNDICE</a></h5>
   

   
      <div class="navLinkNext">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-19-a-25-de-agosto-de-2024/"
            
               title="19-25 de agosto"
            

            
               data-page-id="mid202024248"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024248 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="srText">Siguiente</span>
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-right"></i>
               </span>
            
         </a>
      </div>
   

   </div>


                           
                              
   <ul class="tableOfContents">
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024241 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-1-a-7-de-julio-de-2024/">
                  
                  1-7 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024242 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-8-a-14-de-julio-de-2024/">
                  
                  8-14 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024243 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-15-a-21-de-julio-de-2024/">
                  
                  15-21 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024244 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-22-a-28-de-julio-de-2024/">
                  
                  22-28 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024245 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-29-de-julio-a-4-de-agosto-de-2024/">
                  
                  29 de julio a 4 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024246 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-5-a-11-de-agosto-de-2024/">
                  
                  5-11 de agosto
               </a>
            

         </li>
      
         <li class="current publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/">
                  
                  12-18 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024248 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-19-a-25-de-agosto-de-2024/">
                  
                  19-25 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024249 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-26-de-agosto-a-1-de-septiembre-de-2024/">
                  
                  26 de agosto a 1 de septiembre
               </a>
            

         </li>
      
   </ul>




                           
                        </div>
                     </div>
                  </nav>
               
            
         
      

   




<div id="sidebar" class="grid-layout--secondary">

   
   
      
         

   
   <div class="sidebar-pubCover">
      
         <span class='jsRespImg' data-img-type='cvr' data-img-att-alt='Julio y agosto de 2024' data-img-size-xs='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_xs.jpg' data-img-size-md='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_md.jpg' data-img-size-lg='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_lg.jpg'><noscript><img src='https://assetsnffrgf-a.akamaihd.net/assets/a/mwb/S/202407/wpub/mwb_S_202407_xs.jpg' alt="Julio y agosto de 2024"/></noscript></span>
      
   </div>


      
      <div class="sidebar-wrapper">
         
   

      
         <div class="downloadOptionsWrapper gridView dir-ltr">
      

      
   <div class="pubCvrImage">
      <div class="cvr">
         
            <span class='jsRespImg' data-img-type='cvr' data-img-att-alt='Julio y agosto de 2024' data-img-size-xs='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_xs.jpg' data-img-size-md='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_md.jpg' data-img-size-lg='https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_lg.jpg'><noscript><img src='https://assetsnffrgf-a.akamaihd.net/assets/a/mwb/S/202407/wpub/mwb_S_202407_xs.jpg' alt="Julio y agosto de 2024"/></noscript></span>
         
      </div>
   </div>


      
         <div class="downloadOptions cms-clearfix">
            
               <h5>OPCIONES DE DESCARGA</h5>
               

   <div class="downloadLinks cms-clearfix">
      
   <div class="cvr relatedImage hideObj" data-src="https://cms-imgp.jw-cdn.org/img/p/mwb/202407/S/pt/mwb_S_202407_xs.jpg" data-alt=""></div>




   <div class="onPageTitle hideObj">12-18 de agosto</div>


      

      
         <div class="digitalPubFormat jsWrittenFormat">
            
               <a href='https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&output=html&pub=mwb&fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&alllangs=0&langwritten=S&txtCMSLang=S' class="jsToolTipTrigger secondaryButton fileTypeIcon jsDownload"
                  data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                  data-issuedate="Julio y agosto de 2024"
                  data-cover=""  target='_blank' rel='noopener'>
                     <span class="buttonIcon">
                        <i class="jwf-jw-icons-external jwi-document"></i>
                     </span>
                     <span class="buttonText" aria-hidden="true">Texto</span>
                     <span class="srText">
                        Opciones de descarga de publicaciones
                        
   
   GUÍA DE ACTIVIDADES Julio y agosto de 2024


                     </span>
               </a>
            

            <div class="jsToolTip fileLinks cms-clearfix">
               <ul class="arrowTop">
                  
                     
                        <li>
                           <a
                              
                                 class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover=""
                                 href="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=html&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 title="Descargar"
                              
                              data-preselect="pdf">
                              <span class="buttonText">PDF</span>
                           </a>
                        </li>
                     
                  
                     
                        <li>
                           <a
                              
                                 class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover=""
                                 href="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=html&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 title="Descargar"
                              
                              data-preselect="epub">
                              <span class="buttonText">EPUB</span>
                           </a>
                        </li>
                     
                  
                     
                        <li>
                           <a
                              
                                 class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover=""
                                 href="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=html&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 title="Descargar"
                              
                              data-preselect="jwpub">
                              <span class="buttonText">JWPUB</span>
                           </a>
                        </li>
                     
                  
                     
                        <li>
                           <a
                              
                                 class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover=""
                                 href="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=html&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 title="Descargar"
                              
                              data-preselect="rtf">
                              <span class="buttonText">Lector de pantalla (RTF)</span>
                           </a>
                        </li>
                     
                  
                     
                  
                     
                        <li>
                           <a
                              
                                 class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover=""
                                 href="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=html&amp;pub=mwb&amp;fileformat=PDF%2CEPUB%2CJWPUB%2CRTF%2CTXT%2CBRL%2CBES%2CDAISY&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 title="Descargar"
                              
                              data-preselect="brl">
                              <span class="buttonText">Anotador (BRL)</span>
                           </a>
                        </li>
                     
                  
                     
                  
                     
                  
               </ul>
            </div>
         </div>
      

      
         <div class="audioFormat jsAudioFormat">
            
               <a href='https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&output=html&pub=mwb&fileformat=MP3%2CAAC&alllangs=0&langwritten=S&txtCMSLang=S' class="jsToolTipTrigger secondaryButton fileTypeIcon jsDownload"
                  data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=MP3%2CAAC&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                  data-issuedate="Julio y agosto de 2024"
                  data-cover=""  target='_blank' rel='noopener'>
                     <span class="buttonIcon">
                        <i class="jwf-jw-icons-external jwi-headphones"></i>
                     </span>
                     <span class="buttonText" aria-hidden="true">Audio</span>
                     <span class="srText">
                        Opciones de descarga de audio
                        
   
   GUÍA DE ACTIVIDADES Julio y agosto de 2024


                     </span>
               </a>
            

            <div class="jsToolTip fileLinks cms-clearfix">
               <ul class="arrowTop">
                  
                     
                        <li>
                           
                              <a href='https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&output=html&pub=mwb&fileformat=MP3%2CAAC&alllangs=0&langwritten=S&txtCMSLang=S' class="jsDownload"
                                 data-jsonurl="https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?issue=202407&amp;output=json&amp;pub=mwb&amp;fileformat=MP3%2CAAC&amp;alllangs=0&amp;langwritten=S&amp;txtCMSLang=S"
                                 data-issuedate="Julio y agosto de 2024"
                                 data-cover="" title="Descargar"
                           
                                 data-preselect="mp3" target='_blank' rel='noopener'>
                              <span class="buttonText">MP3</span>
                           </a>
                        </li>
                     
                  
                     
                  
               </ul>
            </div>
         </div>
      

      
      



   </div>
   



            
            
         </div>
      
      </div>

   


         
   

      
         
            <div id="sidebarTOC" class="publication cms-clearfix">
               <nav role="navigation" aria-label="Índice">
                  
   <div class="articleNavLinks">

   
      <div class="navLinkPrev">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-5-a-11-de-agosto-de-2024/"
            
               title="5-11 de agosto"
            

            
               data-page-id="mid202024246"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024246 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-left"></i>
               </span>
               <span class="srText">Anterior</span>
            
         </a>
      </div>
   

   
      
      <h5 class="TOCTitle"><a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/" title="Julio y agosto de 2024">ÍNDICE</a></h5>
   

   
      <div class="navLinkNext">
         
         <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-19-a-25-de-agosto-de-2024/"
            
               title="19-25 de agosto"
            

            
               data-page-id="mid202024248"
               class="primaryButton articleNavButton publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024248 docClass-106 PublicationArticle jsBibleNavigation"
            >

            
               <span class="srText">Siguiente</span>
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-chevron-right"></i>
               </span>
            
         </a>
      </div>
   

   </div>


                  
                     
   <ul class="tableOfContents">
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024241 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-1-a-7-de-julio-de-2024/">
                  
                  1-7 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024242 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-8-a-14-de-julio-de-2024/">
                  
                  8-14 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024243 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-15-a-21-de-julio-de-2024/">
                  
                  15-21 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024244 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-22-a-28-de-julio-de-2024/">
                  
                  22-28 de julio
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024245 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-29-de-julio-a-4-de-agosto-de-2024/">
                  
                  29 de julio a 4 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024246 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-5-a-11-de-agosto-de-2024/">
                  
                  5-11 de agosto
               </a>
            

         </li>
      
         <li class="current publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024247 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-12-a-18-de-agosto-de-2024/">
                  
                  12-18 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024248 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-19-a-25-de-agosto-de-2024/">
                  
                  19-25 de agosto
               </a>
            

         </li>
      
         <li class="link publications pub-mwb iss-202407 dir-ltr ml-S ms-ROMAN docId-202024249 docClass-106 PublicationArticle cms-clearfix">
            
               <a class="pubSectionTitle" href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/julio-agosto-2024-mwb/Vida-y-Ministerio-Cristianos-26-de-agosto-a-1-de-septiembre-de-2024/">
                  
                  26 de agosto a 1 de septiembre
               </a>
            

         </li>
      
   </ul>




                  
               </nav>
            </div>
         
      

   


         

         






         
         
      </div>

   
   

</div>

   
</main>




                  
   

      <footer role="contentinfo">
         
            
            <div id="footer" class="jsLockedChrome">
               <div class="footerTagRow">
                  <h5 class="tagline"><span class="ml-E" dir="ltr">JW.ORG<sup>®</sup></span><strong>&nbsp;/ SITIO OFICIAL DE LOS TESTIGOS DE JEHOVÁ</strong></h5>
                  



<button type="button" class="jsShowAppearanceSettings">
   
   
   <span class="secondaryButton  ">
      
         
            
               <span class="buttonIcon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-sun-half-fill"></i>
               </span>
            
            
               <span class="buttonText">Configuración de la apariencia</span>
            
         
      
   </span>
</button>



               </div>
               <div class="sitemapLinks">
   
      <div class="sitemapLinksGroup">
         
            <h6 class="sectionHdr"><a href="/es/ense%C3%B1anzas-b%C3%ADblicas/">Enseñanzas bíblicas</a></h6>
            <ul>
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/">Preguntas sobre la Biblia</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/textos-biblicos/">Textos bíblicos explicados</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/programa-clases-particulares-biblia/">Curso de la Biblia</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/ayudas-estudiar-biblia/">Ayudas para estudiar la Biblia</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/felicidad-paz-interior/">Felicidad y paz interior</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/familia/">El matrimonio y la familia</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/j%C3%B3venes/">Adolescentes y jóvenes adultos</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/ni%C3%B1os/">Niños</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/fe-en-dios/">Fe en Dios</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/ciencia/">La Biblia y la ciencia</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/ense%C3%B1anzas-b%C3%ADblicas/historia-biblia/">La Biblia y la historia</a>
                     </li>
                  
               
            </ul>
         
      </div>
   
      <div class="sitemapLinksGroup">
         
            <h6 class="sectionHdr"><a href="/es/biblioteca/">Biblioteca</a></h6>
            <ul>
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/biblia/">Biblia en línea</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/revistas/">Revistas</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/libros/">Otras publicaciones</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/articulos/">Catálogo de artículos</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/guia-actividades-reunion-testigos-jehova/">Guía de actividades</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/pautas/">Pautas</a>
                     </li>
                  
               
                  
               
                  
                     
                     
                        <li>
                           <a href="/es/biblioteca/videos/#es/categories/VODStudio">JW Broadcasting<sup>®</sup></a>
                        </li>
                     
                     <li>
                        <a href="/es/biblioteca/videos/">Videos</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/musica-canciones/">Música</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/audio-representaciones-dram%C3%A1ticas/">Obras teatrales en audio</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/biblioteca/lecturas-b%C3%ADblicas-dramatizadas/">Lecturas dramatizadas de la Biblia</a>
                     </li>
                  
               
            </ul>
         
      </div>
   
      <div class="sitemapLinksGroup">
         
            <h6 class="sectionHdr"><a href="/es/noticias/">Noticias</a></h6>
            <ul>
               
            </ul>
         
            <h6 class="sectionHdr"><a href="/es/testigos-de-jehov%C3%A1/">Sobre nosotros</a></h6>
            <ul>
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/">Preguntas frecuentes</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href='/es/testigos-de-jehov%C3%A1/solicite-una-visita/' target='_blank' rel='noreferrer noopener'>Solicite una visita</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/datos-de-contacto/">Contáctenos</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/visitas-a-betel/">Visitas a Betel</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/reuniones/">Reuniones</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/conmemoracion/">Conmemoración</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/asambleas-anuales/">Asambleas anuales</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/qui%C3%A9nes-somos-y-qu%C3%A9-hacemos/">Qué hacemos</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/experiencias/">Experiencias</a>
                     </li>
                  
               
                  
                     
                     
                     <li>
                        <a href="/es/testigos-de-jehov%C3%A1/por-todo-el-mundo/">Por todo el mundo</a>
                     </li>
                  
               
            </ul>
         
      </div>
   
</div>

               <div class="quickLinks">
   <h6 class="sectionHdr">Enlaces directos</h6>
   
      <ul>
         
            
               <li><a href='/es/testigos-de-jehov%C3%A1/solicite-una-visita/' target='_blank' rel='noreferrer noopener'>Solicite una visita</a></li>
            
         
            
               <li><a href='https://apps.jw.org/S_SRCHMTGMAPS' target='_blank' rel='noreferrer noopener'>
                     Buscar una reunión
                     <span class="srText">(abre una nueva ventana)</span>
                   </a>
               </li>
            
         
            
               <li><a href='https://apps.jw.org/S_SEARCHCONV' target='_blank' rel='noreferrer noopener'>
                     Buscar una asamblea regional
                     <span class="srText">(abre una nueva ventana)</span>
                   </a>
               </li>
            
         
            
               <li><a href="/es/lo-nuevo/">Lo nuevo</a></li>
            
         
            
               <li><a href="/es/biblioteca/videos/">Videos</a></li>
            
         
            
               <li><a href="/es/b%C3%BAsquedas/">Buscar</a></li>
            
         
            
               <li><a href="/es/ayuda-en-l%C3%ADnea/">Ayuda</a></li>
            
         
            
               <li><a href="/es/informacion-medica/">Información médica para profesionales de la salud</a></li>
            
         
            
               <li><a href="/es/informacion-para-periodistas/">Información para periodistas</a></li>
            
         
            
               <li><a href="/es/legal/">Información para funcionarios del Gobierno</a></li>
            
         
      </ul>
   
   
      <ul>
         <li>
            <a href='https://apps.jw.org/S_DONATE' class="iconLink"
               target='_blank' rel='noreferrer noopener'>
               <span class="iconLink-icon jwIcon donations" aria-hidden="true"></span>
               <span class="iconLink-text">Donaciones</span>
               <span class="srText">(abre una nueva ventana)</span>
            </a>
         </li>
      </ul>
   
   <ul>
      <li>
         <a href='https://wol.jw.org/wol/finder?wtlocale=S' class="iconLink"
            target='_blank' rel='noreferrer noopener'>
            <span class="iconLink-icon jwIcon wol" aria-hidden="true"></span>
            <span class="iconLink-text">BIBLIOTECA EN LÍNEA Watchtower™</span>
            <span class="srText">(abre una nueva ventana)</span>
         </a>
      </li>
      <li>
         <a href='https://hub.jw.org/home/es' class="iconLink"
            target='_blank' rel='noreferrer noopener'>
            <span class="iconLink-icon jwIcon jwhub" aria-hidden="true"></span>
            <span class="iconLink-text">JW Hub<sup>®</sup></span>
            <span class="srText">(abre una nueva ventana)</span>
         </a>
      </li>
      
         
            <li>
               <a href="/es/ayuda-en-l%C3%ADnea/jw-library/"
                  class="iconLink">
                  <span class="iconLink-icon jwIcon mid802013025" aria-hidden="true"></span>
                  <span class="iconLink-text">JW Library<sup>®</sup>
</span>
               </a>
            </li>
         
            <li>
               <a href="/es/ayuda-en-l%C3%ADnea/jw-library-sign-language/"
                  class="iconLink">
                  <span class="iconLink-icon jwIcon mid802013000" aria-hidden="true"></span>
                  <span class="iconLink-text">JW Library Sign Language<sup>®</sup>
</span>
               </a>
            </li>
         
            <li>
               <a href="/es/ayuda-en-l%C3%ADnea/watchtower-library/"
                  class="iconLink">
                  <span class="iconLink-icon jwIcon mid802013291" aria-hidden="true"></span>
                  <span class="iconLink-text">Watchtower Library</span>
               </a>
            </li>
         
            <li>
               <a href="/es/ayuda-en-l%C3%ADnea/jw-language/"
                  class="iconLink">
                  <span class="iconLink-icon jwIcon mid802013067" aria-hidden="true"></span>
                  <span class="iconLink-text">JW Language<sup>®</sup>
</span>
               </a>
            </li>
         
      
   </ul>
</div>

            </div>
            
         

         
         <div id="copyright" class="copyrightSiteFooter">
   
      
<p class="ml-E" dir="ltr">
   <a href="https://www.jw.org/open?docid=1011511&amp;prefer=content">Copyright</a> © 2024 Watch Tower Bible and Tract Society of Pennsylvania.
   <span class="termsLinks ml-S">
      <a href="https://www.jw.org/open?docid=1011511&amp;prefer=content">CONDICIONES DE USO</a>
      &nbsp;|&nbsp;
      <a href="https://www.jw.org/open?docid=1011512&amp;prefer=content">POLÍTICA DE PRIVACIDAD</a>
      &nbsp;|&nbsp;
      <a href="https://www.jw.org/open?docid=1011512&amp;prefer=content" class="jsPrivacySettings noJSHide">CONFIGURACIÓN DE PRIVACIDAD</a>
   </span>
</p>

   
</div>

      </footer>
   


               </div>
            </div>
         </div>
         <div id="templates" style="display:none;">

   <div class="template languagePicker">
      <div class="jsAutoFocusAutoComplete standardModal languagePicker loading">
         <div class="standardModal-toolbar">
            <h1>Seleccione un idioma</h1>
            <p class="jsLanguageCount">
               Cantidad de idiomas:
               <span rv-html="state.numLanguages"></span>
            </p>
            <button type="button" class="jsCloseModal closeModal modalToolbarButton">
               <span class="srText" rv-html="literals.CMSPUBS.LnkCloseUppCase"></span>
               <span class="closeModal-icon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-x"></i>
               </span>
            </button>
         </div>

         <div class="standardModal-contentContainer">
            <div class="standardModal-content">
               


   <form action="https://www.jw.org/open" method="GET">
      <label rv-for="controller.id | strfmt lang-picker-language-%s" class="languagePicker-label">IDIOMA</label>
      <div class="lang-picker-controls">
         <div class="site-language">
            
               
                  <select rv-id="controller.id | strfmt lang-picker-language-%s"
                          name="locale"
                          data-autocompleteclass="jsSiteLangAutoComplete"
                          rv-html="state.optionHTML"
                          placeholder="Escriba o elija un idioma"
                          data-featured-items-name="contentLanguageFilter">
                  </select>
               
            
               
                  <input type="hidden" name="prefer" value="lang" />
               
            
               
                  <input type="hidden" name="docid" value="202024247" />
               
            
         </div>

         <div class="lang-picker-filter-group">
            <div rv-if="state.hasSL" class="form-field-checkbox">
               
               <input rv-id="controller.id | strfmt lang-picker-sl-only-%s" type="checkbox" rv-checked="state.onlySL" rv-on-click="controller.onLanguageFilterClick" />
               <label class="filter-name" rv-for="controller.id | strfmt lang-picker-sl-only-%s">
                  <span class="filter-icon">
                     <i class="jwf-jw-icons-external jwi-sign-language"></i>
                  </span>
                  Mostrar solo lenguajes de señas
               </label>
            </div>

            <div class="site-available">
               <span class="filter-icon">
                  <i class="jwf-jw-icons-external jwi-jworg-logo--fill"></i>
               </span>
               <span class="filter-name">Sitio jw.org disponible en ese idioma</span>
            </div>

            <div class="download-only">
               <span class="filter-icon">
                  <i class="jwf-jw-icons-external jwi-square-stack"></i>
               </span>
               <span class="filter-name">Solo hay publicaciones en ese idioma</span>
            </div>
         </div>
      </div>
      <input type="hidden" name="srcid" value="langpicker">
   </form>




               <div class="loadingIndicator"></div>
            </div>
         </div>
      </div>
   </div>

   <div class="template shareModal">
      <div class="standardModal shareModal">
         <div class="standardModal-toolbar">
            <h1>Compartir</h1>
            <button type="button" class="jsCloseModal closeModal modalToolbarButton">
               <span class="srText" rv-html="literals.CMSPUBS.LnkCloseUppCase"></span>
               <span class="closeModal modalToolbarButton-icon" aria-hidden="true">
                  <i class="jwf-jw-icons-external jwi-x"></i>
               </span>
            </button>
         </div>

         <div class="standardModal-contentContainer">
            <div class="standardModal-content">
               <div class="headerContainer">
                  <div class="itemImage">
                     <img rv-src="state.imageSource" alt="">
                  </div>
                  <div class="titleContainer">
                     <p rv-html="state.itemContextTitle" class="itemContextTitle"></p>
                     <div class="itemNameContainer">
                        <h3 rv-html="state.itemName" class="itemName"></h3>
                     </div>
                     <p rv-text="state.itemLanguage" class="itemLanguage"></p>
                  </div>
               </div>
               <input type="text" class="shareLink" rv-value="state.shareURL">
               <div class="shareOptions">
                  <div class="shareButtonContainer">
                     <div class="shareButton form-field-text">
                        <div class="shareLinkCopyWrapper">
                           <div class="copyToolTip">
                              <span>Copiado</span>
                           </div>
                           <button type="button" class="tertiaryButton" rv-if="controller.canCopyToClipboard" rv-on-click="controller.copyToClipboard">
                              <span class="buttonIcon" aria-hidden="true">
                                 <i class="jwf-jw-icons-external jwi-document-stack"></i>
                              </span>
                              <span class="buttonText">Copiar enlace</span>
                           </button>
                        </div>
                     </div>
                     <div class="shareButton">
                        <a rv-href="state.shareEmailURL" class="tertiaryButton emailLink">
                           <span class="buttonIcon" aria-hidden="true">
                              <i class="jwf-jw-icons-external jwi-envelope"></i>
                           </span>
                           <span class="buttonText">Compartir por e-mail</span>
                        </a>
                     </div>
                  </div>
                  <div rv-html="state.shareQR" class="shareQR"></div>
               </div>
            </div>
         </div>
      </div>
   </div>

   
   

</div>

      

      <div class="legal-notices-client--config"
     data-language-code="S"
     data-language-classes-template="ml-&lt;%= languageCode %&gt; dir-&lt;%= direction %&gt;"
     data-site="www"
     data-policy-document-domain="www.jw.org">
</div>

   <script type="text/javascript" src="https://b.jw-cdn.org/code/media-player/v3.1.0/js/media-player.min.js"></script><script type="text/javascript" src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script><script type="text/javascript" src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/thirdparty.js"></script><script type="text/javascript" src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/legal-notices-client.umd.js"></script><script type="text/javascript" src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/cms.js"></script><script type="text/javascript" src="https://assetsnffrgf-a.akamaihd.net/assets/ct/e781f8601f/all-videos.js"></script></body>
</html>

    `;
    editor.setValue(code); // Establece el valor del editor con el código
    editor.gotoLine(1); // Coloca el cursor en la primera línea
  });

  const importBtn = document.getElementById('import-btn');
  const htmlFileInput = document.getElementById('html-file-input');
  const editorDiv = document.getElementById('editor');

  importBtn.addEventListener('click', () => {
    htmlFileInput.click();
  });

  htmlFileInput.addEventListener('change', () => {
    const file = htmlFileInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContentBase64 = reader.result;
      const fileContent = atob(fileContentBase64.split(',')[1]);
      const aceEditor = ace.edit("editor");
      aceEditor.session.setValue(fileContent);
      aceEditor.session.setMode("ace/mode/html");
    };

    reader.readAsDataURL(file);
  });

document.getElementById('loadwol-code-btn').addEventListener('click', function() {
    var editor = ace.edit("editor"); // Asigna el editor a una variable
    var code = `

      <!-- HTML -->



<!DOCTYPE html>
<html dir="ltr" lang="es">
<head>
    <title>BIBLIOTECA EN LÍNEA Watchtower</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="description" content="Esta es una página web oficial de los testigos de Jehová. Es una herramienta que le permitirá consultar las publicaciones de los testigos de Jehová en varios idiomas."/>
        <meta name="keywords" content="testigos de jehová, jehová, testigo, watchtower, biblioteca, en línea, publicaciones, online"/>
      <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
  
    <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="120x120"
          href="/icon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152"
          href="/icon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180"
          href="/icon/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png">
    <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#799FCC">
    <link rel="shortcut icon" href="/icon/favicon.ico">
    <meta name="msapplication-config" content="/icon/browserconfig.xml">
    <meta name="apple-mobile-web-app-title" content="WOL">
    <meta name="application-name" content="WOL">
    <meta name="theme-color" content="#799fcc">
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-capable" content="no"/>
  <link rel="stylesheet" type="text/css" href="https://b.jw-cdn.org/code/media-player/v3.0.0/css/media-player.css"/><link rel="stylesheet" type="text/css" href="https://wol.jw.org/assets/css/+0+974f270baf9554651558d525c4fb9b2bbaba7049.css"/><link rel="stylesheet" type="text/css" href="https://wol.jw.org/assets/css/+1+eda9e25e8d65b8146f2068ea6cf0d4486172ce3d.css"/><link rel="stylesheet" type="text/css" href="https://wol.jw.org/assets/css/+2+6ce19a260aa5f120cd7b7d57260e2d4293db7ce0.css"/><link rel="stylesheet" type="text/css" href="https://wol.jw.org/assets/css/+3+89e08fdabc6548003d4cd93c1c885553d3865a32.css"/>
            <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="mio" href="/mio/wol/h/r996/lp-mxc" />
          <link rel="alternate" type="text/html" title="IBIBLIYOTEKA YO MWINTERNETINI yo Watchtower
" hreflang="mgh" href="/mgh/wol/h/r993/lp-mwm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARYA" hreflang="mrw" href="/mrw/wol/h/r992/lp-mw" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARYA" hreflang="mdh" href="/mdh/wol/h/r991/lp-mu" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA ONLINE Watchtower" hreflang="pap" href="/pap/wol/h/r99/lp-pa" />
          <link rel="alternate" type="text/html" title="Watchtower MAKITABA MU NTANDAU" hreflang="mgv" href="/mgv/wol/h/r988/lp-mtn" />
          <link rel="alternate" type="text/html" title="BIBIYOTÈK ASOU ENTÈNÈT 
Watchtower" hreflang="gcf-x-mtc" href="/gcf-x-mtc/wol/h/r986/lp-mtc" />
          <link rel="alternate" type="text/html" title="IBIKIRO LY'OKU ENTERNETE Watchtower" hreflang="shr" href="/shr/wol/h/r983/lp-msh" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="mas" href="/mas/wol/h/r982/lp-ms" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="mrj" href="/mrj/wol/h/r980/lp-mrh" />
          <link rel="alternate" type="text/html" title="Watchtower
BIBLIOTECA ITECH TEPOS " hreflang="ncj" href="/ncj/wol/h/r98/lp-nht" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="mdf" href="/mdf/wol/h/r973/lp-mok" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="cnr" href="/cnr/wol/h/r972/lp-mnt" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sgn-PG" href="/sgn-PG/wol/h/r971/lp-mns" />
          <link rel="alternate" type="text/html" title="Wɔ̃lagɛ̃kama FÃÃLA KIIKAAPIA" hreflang="mev" href="/mev/wol/h/r970/lp-mno" />
          <link rel="alternate" type="text/html" title="Хъахъхъӕнӕн мӕсыджы ОНЛАЙН-БИБЛИОТЕКӔ" hreflang="os" href="/os/wol/h/r97/lp-oss" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mnk" href="/mnk/wol/h/r967/lp-mnk" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="mns" href="/mns/wol/h/r966/lp-mni" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKA ONLINE" hreflang="mgm-x-mme" href="/mgm-x-mme/wol/h/r961/lp-mme" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA Watchtower" hreflang="mau" href="/mau/wol/h/r96/lp-maz" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="mln" href="/mln/wol/h/r955/lp-mlg" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKA ONLINE" hreflang="mkz-x-mks" href="/mkz-x-mks/wol/h/r953/lp-mks" />
          <link rel="alternate" type="text/html" title="ŨTHUTHURIA INTANETI-INĨ" hreflang="ki" href="/ki/wol/h/r95/lp-kq" />
          <link rel="alternate" type="text/html" title="IBIBLIYOTEKA yapa Inteleneti" hreflang="kde" href="/kde/wol/h/r948/lp-mkd" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEK DI INTERNET " hreflang="mfv" href="/mfv/wol/h/r947/lp-mjk" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="vmk" href="/vmk/wol/h/r945/lp-mhs" />
          <link rel="alternate" type="text/html" title="Watchtower EBIIBILIYOTEKA ONLINE" hreflang="xmc" href="/xmc/wol/h/r944/lp-mhm" />
          <link rel="alternate" type="text/html" title="प्रहरीधरहरा अनलाइन लाइब्रेरी" hreflang="mai" href="/mai/wol/h/r943/lp-mhl" />
          <link rel="alternate" type="text/html" title="Watchtower KANONʼWARÁ꞉KE TSI IEWENNAHNOTÁHKWA" hreflang="moh" href="/moh/wol/h/r942/lp-mhk" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARY" hreflang="hil" href="/hil/wol/h/r94/lp-hv" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mhi" href="/mhi/wol/h/r939/lp-mdi" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="nan-x-mdh" href="/nan-x-mdh/wol/h/r938/lp-mdh" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBRALI YA HA INTANETI " hreflang="mck" href="/mck/wol/h/r932/lp-mbd" />
          <link rel="alternate" type="text/html" title="Watchtower KADAAD N TAAN G BE NAAN ƐNTƐRNƐT PO" hreflang="mfq" href="/mfq/wol/h/r931/lp-mba" />
          <link rel="alternate" type="text/html" title="የመጠበቂያ ግንብ የኢንተርኔት ቤተ መጻሕፍት" hreflang="am" href="/am/wol/h/r93/lp-am" />
          <link rel="alternate" type="text/html" title="Watchtower YANOOʼ ICH INTERNET" hreflang="mop" href="/mop/wol/h/r928/lp-map" />
          <link rel="alternate" type="text/html" title="PUNA TUIHONO Watchtower" hreflang="mi" href="/mi/wol/h/r923/lp-ma" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="lez" href="/lez/wol/h/r922/lp-lz" />
          <link rel="alternate" type="text/html" title="OCISELEKO CALIVULU VO INTERNET Colombangi Via Yehova" hreflang="umb" href="/umb/wol/h/r92/lp-ub" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="lwg" href="/lwg/wol/h/r919/lp-lw" />
          <link rel="alternate" type="text/html" title="Gad-la LAYBRI ASOU INTANNÈT-LA " hreflang="acf" href="/acf/wol/h/r918/lp-luc" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKE YA MU INTERNET" hreflang="ldi" href="/ldi/wol/h/r916/lp-lr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="tnl" href="/tnl/wol/h/r913/lp-lnk" />
          <link rel="alternate" type="text/html" title="ETERNET djó kʉ ná Watchtower LIBRARY" hreflang="led" href="/led/wol/h/r911/lp-lnd" />
          <link rel="alternate" type="text/html" title="Wi pem i LAIBRARI ME INTANET" hreflang="laj" href="/laj/wol/h/r910/lp-ln" />
          <link rel="alternate" type="text/html" title="VIVLIOTEKA TA INTERNET yuʼun Watchtower" hreflang="tzo" href="/tzo/wol/h/r91/lp-tzo" />
          <link rel="alternate" type="text/html" title="ILAYIBULALE IYA PA INTANETI" hreflang="lai" href="/lai/wol/h/r908/lp-lmb" />
          <link rel="alternate" type="text/html" title="BIBILIOTHEKA ONLINE la Nsanja ya Namaing'anela" hreflang="llb" href="/llb/wol/h/r907/lp-llo" />
          <link rel="alternate" type="text/html" title="BIBLIYOTEK GO DA INTERNET NI go Watchtower" hreflang="lln" href="/lln/wol/h/r905/lp-ll" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="bxk" href="/bxk/wol/h/r904/lp-lk" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBULALI YAPA INTANETI" hreflang="leh" href="/leh/wol/h/r903/lp-lj" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA KʼINTERNET" hreflang="top" href="/top/wol/h/r90/lp-tot" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="da" href="/da/wol/h/r9/lp-d" />
          <link rel="alternate" type="text/html" title="KABATI KA BIKETELWA KA KU ENTERNETE Watchtower" hreflang="lea" href="/lea/wol/h/r898/lp-lga" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lgg" href="/lgg/wol/h/r897/lp-lg" />
          <link rel="alternate" type="text/html" title="CHISETE CHAMIKANDA CHAHAINTERNET chaKaposhi Kakutalila" hreflang="lch" href="/lch/wol/h/r894/lp-lc" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="lbe" href="/lbe/wol/h/r890/lp-lak" />
          <link rel="alternate" type="text/html" title="Varðturninn VEFBÓKASAFN" hreflang="is" href="/is/wol/h/r89/lp-ic" />
          <link rel="alternate" type="text/html" title="Shaw nyi kuiˬ Taꞈ yehˬ liꞈ teh kuiˬ bawehˇ in˗teu˗neꞈ" hreflang="lhu" href="/lhu/wol/h/r889/lp-lah" />
          <link rel="alternate" type="text/html" title="BIBLIOTECH ONLINE Watchtower" hreflang="lld-x-lad" href="/lld-x-lad/wol/h/r888/lp-lad" />
          <link rel="alternate" type="text/html" title="CILAMIN CYA MIKAND CYA KU ENTERNET Watchtower" hreflang="kny" href="/kny/wol/h/r887/lp-kyk" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="kwd" href="/kwd/wol/h/r883/lp-kwa" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="kwf" href="/kwf/wol/h/r882/lp-kw" />
          <link rel="alternate" type="text/html" title="I-Watchtower ONLINE LIBRARY" hreflang="ss" href="/ss/wol/h/r88/lp-swi" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="kus" href="/kus/wol/h/r879/lp-kus" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="kuj" href="/kuj/wol/h/r878/lp-kur" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="xsm" href="/xsm/wol/h/r873/lp-ksm" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETOWA Strażnicy" hreflang="csb" href="/csb/wol/h/r872/lp-ksh" />
          <link rel="alternate" type="text/html" title="Күзәтү манарасының ОНЛАЙН-КИТАПХАНӘСЕ" hreflang="tt-x-kry" href="/tt-x-kry/wol/h/r871/lp-kry" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE NA NDÖ TI INTERNET Watchtower" hreflang="sg" href="/sg/wol/h/r87/lp-sg" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="kaa" href="/kaa/wol/h/r869/lp-krk" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="hy-x-krb" href="/hy-x-krb/wol/h/r867/lp-krb" />
          <link rel="alternate" type="text/html" title="워치타워 온라인 라이브러리" hreflang="ko-cn" href="/ko-cn/wol/h/r862/lp-koc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE A LIBRARIA" hreflang="kne" href="/kne/wol/h/r861/lp-kny" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="krj" href="/krj/wol/h/r860/lp-knr" />
          <link rel="alternate" type="text/html" title="IBULUNGELO-THUNGELELWANO LesiThala" hreflang="nr" href="/nr/wol/h/r86/lp-nbl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="en" href="/en/wol/h/r858/lp-knm" />
          <link rel="alternate" type="text/html" title="ವಾಚ್‌ಟವರ್ ಆನ್‌ಲೈನ್ ಲೈಬ್ರರಿ" hreflang="knn" href="/knn/wol/h/r855/lp-kn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARYA" hreflang="kyk" href="/kyk/wol/h/r854/lp-kmy" />
          <link rel="alternate" type="text/html" title="Watchtower LABURARE NA INTANE" hreflang="hig" href="/hig/wol/h/r853/lp-kmw" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="koi" href="/koi/wol/h/r852/lp-kmp" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="kum" href="/kum/wol/h/r850/lp-kmk" />
          <link rel="alternate" type="text/html" title="LIBRERIJA ONLAJN tat-Torri tal-Għassa" hreflang="mt" href="/mt/wol/h/r85/lp-mt" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="xbr" href="/xbr/wol/h/r849/lp-kmb" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="kpv" href="/kpv/wol/h/r848/lp-km" />
          <link rel="alternate" type="text/html" title="DULA LEDZIWALO LIMUINTHANETHI leWatchtower" hreflang="kck-x-klz" href="/kck-x-klz/wol/h/r847/lp-klz" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="xal" href="/xal/wol/h/r845/lp-klk" />
          <link rel="alternate" type="text/html" title="Sanja ya Namaing'anela LAIBULALE YA VA INTERNETI" hreflang="kzn" href="/kzn/wol/h/r840/lp-kkl" />
          <link rel="alternate" type="text/html" title="Watchtower LAYIBURARI YA LE KA WEB SITE" hreflang="ts" href="/ts/wol/h/r84/lp-ts" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nyy-x-kk" href="/nyy-x-kk/wol/h/r838/lp-kk" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="kln" href="/kln/wol/h/r837/lp-kj" />
          <link rel="alternate" type="text/html" title="BIBLIOTEK Watchtower NA INTERNET" hreflang="ktu-x-kit" href="/ktu-x-kit/wol/h/r836/lp-kit" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLOTEKI YA INTERNET" hreflang="ktu-x-kgl" href="/ktu-x-kgl/wol/h/r832/lp-kgl" />
          <link rel="alternate" type="text/html" title="Torre de Vigia VẼNH RÁ VINVEN FÃ ON-LINE" hreflang="kgp" href="/kgp/wol/h/r831/lp-kgg" />
          <link rel="alternate" type="text/html" title="LAIPELI Taua Le‘o ‘I HE ‘INITANETÍ" hreflang="to" href="/to/wol/h/r83/lp-to" />
          <link rel="alternate" type="text/html" title="ХъумакІуэ чэщанэм и ОНЛАЙН-БИБЛИОТЕКЭ" hreflang="kbd" href="/kbd/wol/h/r825/lp-kbr" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN DALAM TALIAN Watchtower" hreflang="kzj" href="/kzj/wol/h/r823/lp-kaz" />
          <link rel="alternate" type="text/html" title="Wastaua
INTENET LAIBRERI" hreflang="whg" href="/whg/wol/h/r820/lp-jwk" />
          <link rel="alternate" type="text/html" title="ICEGERANYO C'IBITABU CO KURI INTERNET ca Watchtower" hreflang="run" href="/run/wol/h/r82/lp-ru" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pga" href="/pga/wol/h/r819/lp-ju" />
          <link rel="alternate" type="text/html" title="Wachtowa LAIBRI PANLAIN" hreflang="jam-x-jcr" href="/jam-x-jcr/wol/h/r817/lp-jcr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ivv" href="/ivv/wol/h/r813/lp-iv" />
          <link rel="alternate" type="text/html" title="Watchtower QARASAUJAKKUT UQALIMAAGAQARVIK" hreflang="iu-Latn" href="/iu-Latn/wol/h/r812/lp-iur" />
          <link rel="alternate" type="text/html" title="Watchtower ᖃᕋᓴᐅᔭᒃᑯᑦ ᐅᖃᓕᒫᕐᕕᒃ" hreflang="iu" href="/iu/wol/h/r811/lp-iu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="itv" href="/itv/wol/h/r810/lp-itw" />
          <link rel="alternate" type="text/html" title="Gözətçi qülləsinin ONLAYN KİTABXANASI" hreflang="az" href="/az/wol/h/r81/lp-ajr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="its" href="/its/wol/h/r809/lp-it" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARY" hreflang="akl" href="/akl/wol/h/r804/lp-ikn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ijc" href="/ijc/wol/h/r803/lp-ij" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="guz" href="/guz/wol/h/r802/lp-ii" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ifk" href="/ifk/wol/h/r800/lp-if" />
          <link rel="alternate" type="text/html" title="LLAPAN LEYINA KAQ Watchtower" hreflang="que" href="/que/wol/h/r80/lp-qun" />
          <link rel="alternate" type="text/html" title="워치타워 온라인 라이브러리" hreflang="ko" href="/ko/wol/h/r8/lp-ko" />
          <link rel="alternate" type="text/html" title="Watchtower ELAIBURARE LOKA OLAGO" hreflang="teo" href="/teo/wol/h/r799/lp-ie" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ibl" href="/ibl/wol/h/r798/lp-ibl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="hay" href="/hay/wol/h/r796/lp-hy" />
          <link rel="alternate" type="text/html" title="Da Watchtower LIBRARY ONLINE" hreflang="hwc" href="/hwc/wol/h/r794/lp-hwp" />
          <link rel="alternate" type="text/html" title="EBIBLIYOTEKE Y'OKU ENTERNETE ya W" hreflang="hav" href="/hav/wol/h/r792/lp-hvu" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="huv" href="/huv/wol/h/r791/lp-huv" />
          <link rel="alternate" type="text/html" title="ਵਾਚਟਾਵਰ ਆਨ-ਲਾਈਨ ਲਾਇਬ੍ਰੇਰੀ" hreflang="pa" href="/pa/wol/h/r79/lp-pj" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA TI INTERNET Watchtower" hreflang="hus-x-hsv" href="/hus-x-hsv/wol/h/r788/lp-hsv" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="bgc" href="/bgc/wol/h/r787/lp-hrv" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="aji" href="/aji/wol/h/r786/lp-ho" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lml" href="/lml/wol/h/r785/lp-hno" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="hla" href="/hla/wol/h/r784/lp-hla" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="hak-ID" href="/hak-ID/wol/h/r783/lp-hki" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="heh" href="/heh/wol/h/r782/lp-hh" />
          <link rel="alternate" type="text/html" title="ONLAYN-BİBLİOTEKA Siiretmäk kuläsinin" hreflang="gag-x-gzr" href="/gag-x-gzr/wol/h/r780/lp-gzr" />
          <link rel="alternate" type="text/html" title="Watchtower LUB VEJ XAIJ TSHAWB NRHIAV VAJLUGKUB" hreflang="hmn" href="/hmn/wol/h/r78/lp-hm" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сииретмӓк кулӓсинин" hreflang="gag-x-gz" href="/gag-x-gz/wol/h/r779/lp-gz" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="nyf" href="/nyf/wol/h/r778/lp-gy" />
          <link rel="alternate" type="text/html" title="HƐƁƐƓAA LAAKƐI GWƐLI YƐLI ƁA Taa maakpɛmun" hreflang="gkp" href="/gkp/wol/h/r777/lp-grz" />
          <link rel="alternate" type="text/html" title="watchtower TILA LINGIMA KAANU" hreflang="gux" href="/gux/wol/h/r774/lp-grc" />
          <link rel="alternate" type="text/html" title="WESẸDOTẸN INTẸNẸT JI TỌN Watchtower Tọn" hreflang="guw-bj" href="/guw-bj/wol/h/r770/lp-gnb" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-КИТОБХОНАИ Бурҷи дидбонӣ" hreflang="tg" href="/tg/wol/h/r77/lp-tj" />
          <link rel="alternate" type="text/html" title="Watchtower PEBAJ̈UTOJAWANÜ INTERNET-JAWATA" hreflang="guh" href="/guh/wol/h/r761/lp-ghb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="gog" href="/gog/wol/h/r760/lp-gg" />
          <link rel="alternate" type="text/html" title="کتابخانهٔ آنلاین نشریات شاهدان یَهُوَه" hreflang="fa" href="/fa/wol/h/r76/lp-pr" />
          <link rel="alternate" type="text/html" title="Watchtower LEABHARLANN AIR LOIDHNE " hreflang="gd" href="/gd/wol/h/r759/lp-gcs" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE HA ZU INTERNET Watchtower" hreflang="gba" href="/gba/wol/h/r756/lp-gba" />
          <link rel="alternate" type="text/html" title="ওয়াচটাওয়ার অনলাইন লাইব্রেরি" hreflang="grt-x-gar" href="/grt-x-gar/wol/h/r755/lp-gar" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKA ONLINE" hreflang="ddg" href="/ddg/wol/h/r752/lp-ftl" />
          <link rel="alternate" type="text/html" title="Watchtower TANAKIʼAGA TOHI ʼI TE NETI" hreflang="fud" href="/fud/wol/h/r750/lp-ft" />
          <link rel="alternate" type="text/html" title="Wastaua INTENET LAIBRERI" hreflang="tpi" href="/tpi/wol/h/r75/lp-mp" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="fuv" href="/fuv/wol/h/r747/lp-fln" />
          <link rel="alternate" type="text/html" title="ThlirnakInnsang ONLINE CABU HMUN" hreflang="cfm" href="/cfm/wol/h/r746/lp-flm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sgn-FJ" href="/sgn-FJ/wol/h/r745/lp-fjs" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="myv" href="/myv/wol/h/r741/lp-ez" />
          <link rel="alternate" type="text/html" title="Watchtower ME A SAFE KE NDEFNA NA INTERNET " hreflang="srr" href="/srr/wol/h/r740/lp-er" />
          <link rel="alternate" type="text/html" title="Gima Kohorona INTANET LAIBRI" hreflang="ho" href="/ho/wol/h/r74/lp-mo" />
          <link rel="alternate" type="text/html" title="Watchtower KARTARÃ INTERNEƊE DUANUU" hreflang="cmi" href="/cmi/wol/h/r738/lp-emc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lir" href="/lir/wol/h/r737/lp-eli" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="etu" href="/etu/wol/h/r736/lp-ejh" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="erk" href="/erk/wol/h/r734/lp-efs" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="llp" href="/llp/wol/h/r733/lp-efn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="igb" href="/igb/wol/h/r731/lp-eba" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="enq" href="/enq/wol/h/r730/lp-ea" />
          <link rel="alternate" type="text/html" title="વૉચટાવર ઓનલાઇન લાઇબ્રેરી" hreflang="gu" href="/gu/wol/h/r73/lp-gu" />
          <link rel="alternate" type="text/html" title="SIFALANA SA FA INTANETI sa Watchtower" hreflang="loz" href="/loz/wol/h/r72/lp-sk" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="dar" href="/dar/wol/h/r719/lp-drg" />
          <link rel="alternate" type="text/html" title="Watchtower SÍLIIBAR DI SÍWIDEO SAMMI DI INTERNET" hreflang="dyo" href="/dyo/wol/h/r718/lp-do" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="din" href="/din/wol/h/r713/lp-di" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE ᐊᔭᒥᐦᒋᑫᐃᐧᑲᒥᐠ" hreflang="crk-x-cys" href="/crk-x-cys/wol/h/r710/lp-cys" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKA ONLINE" hreflang="tdt" href="/tdt/wol/h/r71/lp-ttp" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="cho" href="/cho/wol/h/r709/lp-ctw" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="crt" href="/crt/wol/h/r707/lp-cti" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="cmn-x-csn" href="/cmn-x-csn/wol/h/r705/lp-csn" />
          <link rel="alternate" type="text/html" title="BIBLIUTECA IN LIGNA Watchtower" hreflang="co" href="/co/wol/h/r704/lp-csc" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sgn-cf" href="/sgn-cf/wol/h/r701/lp-crs" />
          <link rel="alternate" type="text/html" title="LAIBBULALI YAA INTANETI ya Watchower" hreflang="toi" href="/toi/wol/h/r70/lp-cg" />
          <link rel="alternate" type="text/html" title="ものみの塔 オンライン・ライブラリー" hreflang="ja" href="/ja/wol/h/r7/lp-j" />
          <link rel="alternate" type="text/html" title="YAKBʼÄL WUJ PA INTERNET Watchtower" hreflang="cak-x-cqc" href="/cak-x-cqc/wol/h/r696/lp-cqc" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNETSHA PILLA TSUNUNU" hreflang="cbi" href="/cbi/wol/h/r695/lp-cpl" />
          <link rel="alternate" type="text/html" title="Watchtower
LAYIBULALI YAHAINTANETI" hreflang="lun" href="/lun/wol/h/r69/lp-ld" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="cfg" href="/cfg/wol/h/r686/lp-cmk" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="chd" href="/chd/wol/h/r683/lp-clx" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="chr" href="/chr/wol/h/r682/lp-cke" />
          <link rel="alternate" type="text/html" title="守望台線上書庫" hreflang="nan-x-chw" href="/nan-x-chw/wol/h/r681/lp-chw" />
          <link rel="alternate" type="text/html" title="BUTALA BWA MABUKU BWA PA INTANETI" hreflang="kqn" href="/kqn/wol/h/r68/lp-kd" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="nan-x-chn" href="/nan-x-chn/wol/h/r677/lp-chn" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="wuu-x-chg" href="/wuu-x-chg/wol/h/r673/lp-chg" />
          <link rel="alternate" type="text/html" title="CHISETE CHAMIKANDA CHAHAINTERNET chaKaposhi Kakutalila" hreflang="lue" href="/lue/wol/h/r67/lp-lv" />
          <link rel="alternate" type="text/html" title="ISHOMERO RY'AHARI INTANETI rya Watchtower" hreflang="cgg" href="/cgg/wol/h/r668/lp-cgg" />
          <link rel="alternate" type="text/html" title="Watchtower LAYIBURARI YA LE KA WEB SITE" hreflang="tso-ZW" href="/tso-ZW/wol/h/r667/lp-cga" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="cbk" href="/cbk/wol/h/r661/lp-cc" />
          <link rel="alternate" type="text/html" title="Watchtower PAPERA INTERNÉI KƗE" hreflang="cub" href="/cub/wol/h/r660/lp-cbe" />
          <link rel="alternate" type="text/html" title="LAIBULALI YA PA INTANETI ya Watchtower" hreflang="nya" href="/nya/wol/h/r66/lp-cin" />
          <link rel="alternate" type="text/html" title="ÄYËKJUÄ JUÍ INTERNET SKA Watchtower" hreflang="cjp" href="/cjp/wol/h/r659/lp-cab" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="bwr" href="/bwr/wol/h/r657/lp-bur" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="bom" href="/bom/wol/h/r651/lp-brm" />
          <link rel="alternate" type="text/html" title="BÍBLIOTECA ÍNTERNET KI̱ Watchtower" hreflang="bzd" href="/bzd/wol/h/r650/lp-bri" />
          <link rel="alternate" type="text/html" title="LAIBLALI YA PA INTANETI IYA Watchtower" hreflang="lam" href="/lam/wol/h/r65/lp-ab" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="bwi" href="/bwi/wol/h/r649/lp-bnw" />
          <link rel="alternate" type="text/html" title=" Watchtower MSÙMBÉCO WA BITABO Ù ENTELENETE" hreflang="bmb" href="/bmb/wol/h/r644/lp-bmb" />
          <link rel="alternate" type="text/html" title="Watchtowerjeva SPLETNA KNJIŽNICA" hreflang="sl" href="/sl/wol/h/r64/lp-sv" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="bho" href="/bho/wol/h/r639/lp-bhj" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="bfa" href="/bfa/wol/h/r638/lp-bh" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="be" href="/be/wol/h/r635/lp-bel" />
          <link rel="alternate" type="text/html" title="Őrtorony ONLINE KÖNYVTÁR" hreflang="ron-x-bea" href="/ron-x-bea/wol/h/r634/lp-bea" />
          <link rel="alternate" type="text/html" title="vaatchtavar aanlain laibrari" hreflang="ta-x-tlr" href="/ta-x-tlr/wol/h/r1188/lp-tlr" />
          <link rel="alternate" type="text/html" title="ONLINE LAIBRI wa watchtower" hreflang="yaz" href="/yaz/wol/h/r1334/lp-lka" />
          <link rel="alternate" type="text/html" title="உவாட்ச்டவர் ஆன்லைன் லைப்ரரி" hreflang="bfq" href="/bfq/wol/h/r632/lp-bdg" />
          <link rel="alternate" type="text/html" title="WESẸDOTẸN INTẸNẸT JI TỌN Watchtower Tọn" hreflang="guw" href="/guw/wol/h/r63/lp-eg" />
          <link rel="alternate" type="text/html" title="Watchtowern TIRE GBABURU INTƐƐNƐTI SƆƆ" hreflang="bba" href="/bba/wol/h/r628/lp-bb" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="bxa" href="/bxa/wol/h/r627/lp-bau" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="nfl" href="/nfl/wol/h/r625/lp-ayw" />
          <link rel="alternate" type="text/html" title="TÉERE YI AM CI SUÑU PALAAS CI INTERNET" hreflang="wo" href="/wo/wol/h/r1240/lp-wo" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="any-CI" href="/any-CI/wol/h/r623/lp-ayi" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="av" href="/av/wol/h/r621/lp-av" />
          <link rel="alternate" type="text/html" title="INTERNETPI QELQANCHISKUNA Watchtower" hreflang="quz" href="/quz/wol/h/r62/lp-qu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="abn" href="/abn/wol/h/r619/lp-au" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="aia" href="/aia/wol/h/r613/lp-aro" />
          <link rel="alternate" type="text/html" title="SANDUK MAKƏTUBƏ Watchtower" hreflang="mwm" href="/mwm/wol/h/r1128/lp-sar" />
          <link rel="alternate" type="text/html" title="KONA KIMI PUKA o te Watchtower " hreflang="rap" href="/rap/wol/h/r1121/lp-rpn" />
          <link rel="alternate" type="text/html" title="Watchtower BIBILIYOTƐKI INTƐRINƐTI KAN" hreflang="bm" href="/bm/wol/h/r612/lp-ar" />
          <link rel="alternate" type="text/html" title="Watchtower BUT EZGODE TE SIKO ONLINE" hreflang="rmy-CL" href="/rmy-CL/wol/h/r1111/lp-rmh" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="app" href="/app/wol/h/r611/lp-apm" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBRARE YA PA INTANETI" hreflang="bem" href="/bem/wol/h/r61/lp-cw" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="mqj" href="/mqj/wol/h/r609/lp-ama" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="alq" href="/alq/wol/h/r608/lp-alq" />
          <link rel="alternate" type="text/html" title="Watchtower BILLQUE PAPIL INTERNET MU" hreflang="arn-x-phn" href="/arn-x-phn/wol/h/r1071/lp-phn" />
          <link rel="alternate" type="text/html" title="Loꞈ˗eu nymˇgoˇ Awˆlai Sahˬ boꞈ taˬ duˬ" hreflang="ahk" href="/ahk/wol/h/r604/lp-aka" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nsi" href="/nsi/wol/h/r1036/lp-nns" />
          <link rel="alternate" type="text/html" title="SANKENARENTSIPEE INTERINEKI Watchtower" hreflang="cni" href="/cni/wol/h/r601/lp-ahk" />
          <link rel="alternate" type="text/html" title="Apajuí chichame INTERNETNUM PAPÍ AIDAU" hreflang="agr" href="/agr/wol/h/r600/lp-agr" />
          <link rel="alternate" type="text/html" title="BIBLIYOTÈK SOU ENTÈNÈT Watchtower" hreflang="ht" href="/ht/wol/h/r60/lp-cr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE Watchtower" hreflang="it" href="/it/wol/h/r6/lp-i" />
          <link rel="alternate" type="text/html" title="مكتبة برج المراقبة الإلكترونية" hreflang="arz" href="/arz/wol/h/r598/lp-aey" />
          <link rel="alternate" type="text/html" title="مكتبة برج المراقبة الالكترونية" hreflang="arq" href="/arq/wol/h/r597/lp-adz" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="adh" href="/adh/wol/h/r595/lp-adh" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="abx" href="/abx/wol/h/r592/lp-abn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="omb" href="/omb/wol/h/r590/lp-abe" />
          <link rel="alternate" type="text/html" title="LLYFRGELL AR-LEIN y Tŵr Gwylio" hreflang="cy" href="/cy/wol/h/r59/lp-w" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="igl" href="/igl/wol/h/r589/lp-aa" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NGAI INTERNET Watchtower" hreflang="pls" href="/pls/wol/h/r588/lp-ngm" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="nzb" href="/nzb/wol/h/r587/lp-njb" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN DALAM TALIAN Watchtower" hreflang="sdo" href="/sdo/wol/h/r586/lp-bdy" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lnu" href="/lnu/wol/h/r585/lp-lgd" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKI AN INTERNET Watchtower" hreflang="buc" href="/buc/wol/h/r584/lp-bsh" />
          <link rel="alternate" type="text/html" title="БИБЛИОТЕКА АНДО ИНТЭРНЭТО Сторожевая Башня" hreflang="rmy-x-rmk" href="/rmy-x-rmk/wol/h/r583/lp-rmk" />
          <link rel="alternate" type="text/html" title="THƯ VIỆN TRỰC TUYẾN Tháp Canh" hreflang="hab" href="/hab/wol/h/r582/lp-slv" />
          <link rel="alternate" type="text/html" title="ƉÚÚ-KƆ̃ DYÍ-GMƆ̀ÌN-GBÒ-CÈÈ-ÐƐ̀-DYI-DÈÌN-NAÍN" hreflang="bsq" href="/bsq/wol/h/r581/lp-ba" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="haw" href="/haw/wol/h/r580/lp-hw" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNETANKIR BIBLIOTECA" hreflang="ay" href="/ay/wol/h/r58/lp-ap" />
          <link rel="alternate" type="text/html" title="کتابخانهٔ آنلاین نشریات شاهدان یَهُوَه" hreflang="prs" href="/prs/wol/h/r579/lp-dar" />
          <link rel="alternate" type="text/html" title="Watchtower KARETAKON TA WÒTUPICHOPO INTANET TA" hreflang="car-x-crb" href="/car-x-crb/wol/h/r578/lp-crb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mbm" href="/mbm/wol/h/r577/lp-omb" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LÍNEA DAU Watchtower" hreflang="aoc" href="/aoc/wol/h/r576/lp-pmn" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NI NUʼ LO INTERNET Watchtower" hreflang="zab" href="/zab/wol/h/r575/lp-zpd" />
          <link rel="alternate" type="text/html" title="المكتبة الالكترونية متاع برج المراقبة" hreflang="aeb" href="/aeb/wol/h/r574/lp-atn" />
          <link rel="alternate" type="text/html" title="GU BA AWARAGA DU ROGO INTERNET nga ga Ngbaõbambu Sinziri" hreflang="zne" href="/zne/wol/h/r573/lp-zn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="meu" href="/meu/wol/h/r572/lp-mtu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ann" href="/ann/wol/h/r571/lp-obl" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="ce" href="/ce/wol/h/r570/lp-he" />
          <link rel="alternate" type="text/html" title="INTERNETPI QILLQAKUNA Watchtower" hreflang="quy" href="/quy/wol/h/r57/lp-qua" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="krc" href="/krc/wol/h/r569/lp-bal" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="yrk" href="/yrk/wol/h/r568/lp-nnt" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="yrk-x-nnf" href="/yrk-x-nnf/wol/h/r567/lp-nnf" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNETNÄ CUYÄRU OʼTÄ KU̧NÄ̧HUO̧MȨ" hreflang="pid" href="/pid/wol/h/r566/lp-pra" />
          <link rel="alternate" type="text/html" title="BHIBLIYOTEKA NYA SAYITI ya Torre de Vigia" hreflang="toh" href="/toh/wol/h/r565/lp-gtn" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН БИБЛИОТЕКА „Стражева кула“" hreflang="bqn" href="/bqn/wol/h/r564/lp-bls" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="rml-RU" href="/rml-RU/wol/h/r563/lp-rmp" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="wba" href="/wba/wol/h/r562/lp-wro" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="chj" href="/chj/wol/h/r561/lp-cno" />
          <link rel="alternate" type="text/html" title="كۇزەت مۇناراسىنىڭ تورداعى كىتاپحاناسى" hreflang="kk-Arab" href="/kk-Arab/wol/h/r560/lp-aza" />
          <link rel="alternate" type="text/html" title="प्रहरीधरहरा अनलाइन लाइब्रेरी " hreflang="ne" href="/ne/wol/h/r56/lp-np" />
          <link rel="alternate" type="text/html" title="ৱাটচতাৱর ওনলাইন লাইব্রেরী" hreflang="mni" href="/mni/wol/h/r559/lp-mi" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mni-Latn" href="/mni-Latn/wol/h/r558/lp-mir" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="kha" href="/kha/wol/h/r557/lp-ks" />
          <link rel="alternate" type="text/html" title="Watchtower INTANƐT SO NWOMAA AKORAEƐ" hreflang="sfw" href="/sfw/wol/h/r556/lp-shw" />
          <link rel="alternate" type="text/html" title="Lomiga Faale-Tusi Paia I LE INITANETI" hreflang="sgn-WS" href="/sgn-WS/wol/h/r555/lp-sms" />
          <link rel="alternate" type="text/html" title="Watchtower INTANƐT ZU GAMA BINZIE" hreflang="dga" href="/dga/wol/h/r547/lp-dga" />
          <link rel="alternate" type="text/html" title="Харабыл башнятын ОНЛАЙН-БИБЛИОТЕКАТА" hreflang="sah" href="/sah/wol/h/r554/lp-yk" />
          <link rel="alternate" type="text/html" title="Орол башньын ОНЛАЙН-БИБЛИОТЕКЕ" hreflang="mhr" href="/mhr/wol/h/r553/lp-mar" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="crh-x-ctc" href="/crh-x-ctc/wol/h/r552/lp-ctc" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="bxr" href="/bxr/wol/h/r551/lp-by" />
          <link rel="alternate" type="text/html" title="Watchtower tɛ INTƐRNƐƐTƖ YƆƆ TAKAYƖSƖ ƉƖZƖYƐ" hreflang="kbp" href="/kbp/wol/h/r508/lp-kab" />
          <link rel="alternate" type="text/html" title="Watchtower
RUK'OLIB'AAL WUUJ CHPAAM INTERNET" hreflang="tzj" href="/tzj/wol/h/r550/lp-tzu" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNIA Watchtower" hreflang="cat" href="/cat/wol/h/r55/lp-an" />
          <link rel="alternate" type="text/html" title="ଓ୍ଵାଚଟାଓ୍ଵର ଅନଲାଇନ୍ ଲାଇବ୍ରେରୀ" hreflang="or" href="/or/wol/h/r497/lp-oi" />
          <link rel="alternate" type="text/html" title="Watchtower – BIBLIOTECA ONLINE" hreflang="rmy" href="/rmy/wol/h/r493/lp-rmr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="gse" href="/gse/wol/h/r492/lp-ghs" />
          <link rel="alternate" type="text/html" title="د کتونکی برج انټرنېټي کتابتون" hreflang="ps" href="/ps/wol/h/r549/lp-ph" />
          <link rel="alternate" type="text/html" title="Watchtower INTANƐTƖ ZƲ AWUUKUZIYELƐDƖKA" hreflang="aha" href="/aha/wol/h/r481/lp-ahn" />
          <link rel="alternate" type="text/html" title="Tiŋguligooni INTANƐT ZUƔU NEMA VAABU" hreflang="dag" href="/dag/wol/h/r548/lp-dgb" />
          <link rel="alternate" type="text/html" title="Харуулын цамхаг ОНЛАЙН НОМЫН САН" hreflang="msr" href="/msr/wol/h/r546/lp-msr" />
          <link rel="alternate" type="text/html" title="BIBLIOTÉKA NA INTERNET di Tori di Vijia" hreflang="kea" href="/kea/wol/h/r455/lp-kbv" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA NA INTERNET di Watchtower " hreflang="pov" href="/pov/wol/h/r451/lp-tcr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LINEA YANA Watchtower " hreflang="yup" href="/yup/wol/h/r545/lp-ykp" />
          <link rel="alternate" type="text/html" title="Pigera Zontua INTANƐT TUUMA ZƐ'AN GƆNƆ ZAALEŊA" hreflang="gur" href="/gur/wol/h/r447/lp-ff" />
          <link rel="alternate" type="text/html" title="Watchtower – BIBLIOTECĂ ONLINE" hreflang="rms" href="/rms/wol/h/r445/lp-lmg" />
          <link rel="alternate" type="text/html" title="ƐNTƐNƐTI JI WEMADADOXU Watchtower Tɔ" hreflang="ajg" href="/ajg/wol/h/r544/lp-ajg" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="hds" href="/hds/wol/h/r434/lp-sho" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBURARI I MU INTERNET" hreflang="kck-x-kl" href="/kck-x-kl/wol/h/r543/lp-kl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="wes-x-pgw" href="/wes-x-pgw/wol/h/r429/lp-pgw" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="rsl" href="/rsl/wol/h/r422/lp-rsl" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHEK " hreflang="gsg" href="/gsg/wol/h/r420/lp-dgs" />
          <link rel="alternate" type="text/html" title="Vennak Innsang ONLINE LIBRARY" hreflang="cnh" href="/cnh/wol/h/r542/lp-hk" />
          <link rel="alternate" type="text/html" title="FITEHIRIZAM-BOKIN’NY Vavolombelon'i Jehovah" hreflang="mzc" href="/mzc/wol/h/r416/lp-ttm" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKI HA INTERNET Watchtower" hreflang="swb-x-orr" href="/swb-x-orr/wol/h/r541/lp-orr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="psp" href="/psp/wol/h/r404/lp-fsl" />
          <link rel="alternate" type="text/html" title="ONLINE KNIHOVNA Strážné věže" hreflang="cse" href="/cse/wol/h/r401/lp-cse" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="bkh" href="/bkh/wol/h/r540/lp-bkk" />
          <link rel="alternate" type="text/html" title="ОНЛАЈН БИБЛИОТЕКА Watchtower" hreflang="sr-Cyrl" href="/sr-Cyrl/wol/h/r54/lp-sb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="bfi" href="/bfi/wol/h/r399/lp-bsl" />
          <link rel="alternate" type="text/html" title="워치타워 온라인 라이브러리" hreflang="kvk" href="/kvk/wol/h/r391/lp-ksl" />
          <link rel="alternate" type="text/html" title="Sin Langchyi ONLINE LAIKA DUM" hreflang="kac" href="/kac/wol/h/r539/lp-ah" />
          <link rel="alternate" type="text/html" title="INTERNETOVÁ KNIŽNICA Strážnej veže" hreflang="svk" href="/svk/wol/h/r389/lp-vsl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="aed" href="/aed/wol/h/r386/lp-lsa" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="prl" href="/prl/wol/h/r380/lp-spe" />
          <link rel="alternate" type="text/html" title="Watchtower EKIBIKIRO KY'EBITABU EKIRI OKO ENTERNETE" hreflang="nnb" href="/nnb/wol/h/r538/lp-kin" />
          <link rel="alternate" type="text/html" title="LAEBRARI E INTHANETENG" hreflang="st-ZA" href="/st-ZA/wol/h/r374/lp-ssa" />
          <link rel="alternate" type="text/html" title="ONLINE KŇIŽŇICA - E Stražno veža" hreflang="rmc-sk" href="/rmc-sk/wol/h/r370/lp-rms" />
          <link rel="alternate" type="text/html" title="Vilnatausang ONLINE LAIBUSAAL" hreflang="ctd" href="/ctd/wol/h/r537/lp-ci" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="ecs" href="/ecs/wol/h/r367/lp-sec" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="ady" href="/ady/wol/h/r536/lp-ad" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="sr-Latn" href="/sr-Latn/wol/h/r353/lp-sbo" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA YIN INTERNET" hreflang="kjb" href="/kjb/wol/h/r535/lp-qnj" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="yue-Hans" href="/yue-Hans/wol/h/r348/lp-cns" />
          <link rel="alternate" type="text/html" title="BIBLIYOTEKA KA INTERNETI la Watchtower" hreflang="tso-MZ" href="/tso-MZ/wol/h/r534/lp-cgm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ibg" href="/ibg/wol/h/r336/lp-ig" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHÉIK" hreflang="lb" href="/lb/wol/h/r533/lp-lx" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="ewo" href="/ewo/wol/h/r325/lp-ewn" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LOH INTERNET Watchtower" hreflang="zpf" href="/zpf/wol/h/r532/lp-zpt" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBRARI ỌRẸ ITANẸTI" hreflang="oke" href="/oke/wol/h/r314/lp-okp" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="bbj" href="/bbj/wol/h/r313/lp-ghm" />
          <link rel="alternate" type="text/html" title="Watchtower AZA-EBE NỌN RIBHI INTANẸT" hreflang="ish" href="/ish/wol/h/r312/lp-ih" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE L̦ÃIBRÃRE" hreflang="mh" href="/mh/wol/h/r311/lp-mh" />
          <link rel="alternate" type="text/html" title="پەڕتووکخانەی سەرھێڵی شاھیدانی یەھوە" hreflang="ckb" href="/ckb/wol/h/r531/lp-rda" />
          <link rel="alternate" type="text/html" title="ẸGA KÁ APWỤ ỊHYẸ KAA JI I-INTANẸTỊ nya ị-Watchtower" hreflang="ige" href="/ige/wol/h/r309/lp-ige" />
          <link rel="alternate" type="text/html" title="ANGUN YA NDEN Watchtower" hreflang="fan" href="/fan/wol/h/r308/lp-fgn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="idu" href="/idu/wol/h/r302/lp-id" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="gkn" href="/gkn/wol/h/r301/lp-gn" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA ONLINE Watchtower" hreflang="rmy-AL" href="/rmy-AL/wol/h/r530/lp-rml" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTECA Watchtower" hreflang="qu" href="/qu/wol/h/r53/lp-qub" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE da Torre de Vigia" hreflang="pt-PT" href="/pt-PT/wol/h/r296/lp-tpo" />
          <link rel="alternate" type="text/html" title="ILAIBRI RỌHẸ INTANẸTI " hreflang="urh" href="/urh/wol/h/r295/lp-ur" />
          <link rel="alternate" type="text/html" title="AZA EBE ỌGHE Watchtower NỌ RRE INTANẸT " hreflang="bin" href="/bin/wol/h/r292/lp-ed" />
          <link rel="alternate" type="text/html" title="Таңныыл суургазының ОНЛАЙН-БИБЛИОТЕКАЗЫ" hreflang="tyv" href="/tyv/wol/h/r529/lp-vi" />
          <link rel="alternate" type="text/html" title="RUNANGA PUKA I RUNGA I TE INITANETI Punanga Tiaki" hreflang="rar" href="/rar/wol/h/r528/lp-ra" />
          <link rel="alternate" type="text/html" title="Watchtower CARTARA INTERNENE" hreflang="emp" href="/emp/wol/h/r527/lp-emp" />
          <link rel="alternate" type="text/html" title="Դիտարանի ՕՆԼԱՅՆ ԳՐԱԴԱՐԱՆ" hreflang="aen" href="/aen/wol/h/r526/lp-ars" />
          <link rel="alternate" type="text/html" title="Watchtower LUB VEJ XAIJ TSHAWB NRHIAV VAJLUGKUB" hreflang="hnj" href="/hnj/wol/h/r525/lp-hmn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="gom" href="/gom/wol/h/r244/lp-kt" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBURALE EYA HA MUKURA " hreflang="ttj" href="/ttj/wol/h/r524/lp-rt" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="nnh" href="/nnh/wol/h/r238/lp-nmb" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LIÑA Watchtower" hreflang="gl" href="/gl/wol/h/r231/lp-glc" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNETGI GARDAMAR NANAID" hreflang="cuk" href="/cuk/wol/h/r523/lp-un" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNIA Watchtower" hreflang="ca-x-vlc" href="/ca-x-vlc/wol/h/r226/lp-vlc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBURUTEGIA" hreflang="eu" href="/eu/wol/h/r223/lp-bq" />
          <link rel="alternate" type="text/html" title="Watchtower LABURARE NA INTANE" hreflang="ha" href="/ha/wol/h/r220/lp-ha" />
          <link rel="alternate" type="text/html" title="Kivenna Innsang ONLINE LIBRARY" hreflang="tcz" href="/tcz/wol/h/r522/lp-kuk" />
          <link rel="alternate" type="text/html" title="Hwɔɔmi Mɔ INTANƐTI NƆ NITO HE" hreflang="ada" href="/ada/wol/h/r217/lp-dg" />
          <link rel="alternate" type="text/html" title="IJIIR I Watchtower a KOSON ITYAKERADA SHA INTANET YÔ" hreflang="tiv" href="/tiv/wol/h/r216/lp-tv" />
          <link rel="alternate" type="text/html" title="UWOU-EBE ITANẸTE Uwou-Eroro" hreflang="iso" href="/iso/wol/h/r215/lp-is" />
          <link rel="alternate" type="text/html" title="守望台線上書庫" hreflang="yue-Hant" href="/yue-Hant/wol/h/r214/lp-chc" />
          <link rel="alternate" type="text/html" title="BIBLIOTEK Udia pa Kapend" hreflang="rnd" href="/rnd/wol/h/r521/lp-dr" />
          <link rel="alternate" type="text/html" title="ৱাচটাৱাৰ অনলাইন লাইব্রেৰী " hreflang="as" href="/as/wol/h/r206/lp-ae" />
          <link rel="alternate" type="text/html" title="FANAJARIA BOKY ahi-ty Vavolombeloni-Jehovah" hreflang="skg-x-vz" href="/skg-x-vz/wol/h/r205/lp-vz" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNET MÜLEYECHI LIFRU" hreflang="arn" href="/arn/wol/h/r203/lp-mpd" />
          <link rel="alternate" type="text/html" title="YO XISKUAMA KJA IN SITIOGØJME-Watchtower" hreflang="maz" href="/maz/wol/h/r520/lp-mzh" />
          <link rel="alternate" type="text/html" title="Wagtoring – AANLYN BIBLIOTEEK" hreflang="af" href="/af/wol/h/r52/lp-af" />
          <link rel="alternate" type="text/html" title="FAGNAJARIAM-BOKE TY Vavolombelo i Jehovah" hreflang="tdx" href="/tdx/wol/h/r194/lp-tnd" />
          <link rel="alternate" type="text/html" title="FIKAJIAN̈A BOKIN'NY Vavolombelon̈on'i Jehovah" hreflang="xmv" href="/xmv/wol/h/r190/lp-tnk" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="hyw-x-hms" href="/hyw-x-hms/wol/h/r519/lp-hms" />
          <link rel="alternate" type="text/html" title="Njongo a Betatedi-KO̠BAT'A KALATI O MUSINGA" hreflang="dua" href="/dua/wol/h/r184/lp-da" />
          <link rel="alternate" type="text/html" title="Watchtower KOBOT BIKAAT I INTERNET" hreflang="bas" href="/bas/wol/h/r181/lp-bs" />
          <link rel="alternate" type="text/html" title="NDA BEKALATE watchtower ya nkol" hreflang="bum" href="/bum/wol/h/r180/lp-bo" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTEKA Watchtower" hreflang="inb" href="/inb/wol/h/r518/lp-inb" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लायब्ररी" hreflang="mr" href="/mr/wol/h/r171/lp-mr" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBULALE YA PA INTANETI" hreflang="mwn" href="/mwn/wol/h/r517/lp-nm" />
          <link rel="alternate" type="text/html" title="ವಾಚ್‌ಟವರ್ ಆನ್‌ಲೈನ್ ಲೈಬ್ರರಿ" hreflang="kn" href="/kn/wol/h/r167/lp-ka" />
          <link rel="alternate" type="text/html" title="വാച്ച്ടവര്‍
ഓണ്‍ലൈന്‍ ലൈബ്രറി" hreflang="ml" href="/ml/wol/h/r162/lp-my" />
          <link rel="alternate" type="text/html" title="ABU̱ I ʼBU̱I YÄ HE̱ʼMI HA INTERNET Watchtower" hreflang="ots" href="/ots/wol/h/r516/lp-ots" />
          <link rel="alternate" type="text/html" title="Харуулын цамхаг ОНЛАЙН НОМЫН САН" hreflang="mn" href="/mn/wol/h/r159/lp-kha" />
          <link rel="alternate" type="text/html" title="Դիտարանի ՕՆԼԱՅՆ ԳՐԱԴԱՐԱՆ" hreflang="hyw-x-hma" href="/hyw-x-hma/wol/h/r515/lp-hma" />
          <link rel="alternate" type="text/html" title="కావలికోట ఆన్‌లైన్‌ లైబ్రరీ" hreflang="te" href="/te/wol/h/r146/lp-tu" />
          <link rel="alternate" type="text/html" title="INTERNETIKKUT ATUAGAATEQARFIK Watchtower " hreflang="kl" href="/kl/wol/h/r140/lp-gl" />
          <link rel="alternate" type="text/html" title="THƯ VIỆN TRỰC TUYẾN Tháp Canh" hreflang="cmo" href="/cmo/wol/h/r514/lp-mnc" />
          <link rel="alternate" type="text/html" title="ওয়াচটাওয়ার অনলাইন লাইব্রেরি" hreflang="bn" href="/bn/wol/h/r137/lp-be" />
          <link rel="alternate" type="text/html" title="Ɛzinzalɛ Arane YINTANƐTE ZO MBULUKUZIELƐLEKA" hreflang="nzi" href="/nzi/wol/h/r130/lp-nz" />
          <link rel="alternate" type="text/html" title="ܒܹܝܬ ـ ܐܲܪ̈ܟܹܐ ܕܒܘܼܪܓ̰ܵܐ ܕܢܛܘܿܪܬܵܐ ܥܲܢܠܵܝܢ " hreflang="aii" href="/aii/wol/h/r513/lp-as" />
          <link rel="alternate" type="text/html" title="បណ្ណាល័យអ៊ីនធឺណិតរបស់ប៉មយាម" hreflang="km" href="/km/wol/h/r124/lp-cb" />
          <link rel="alternate" type="text/html" title="உவாட்ச்டவர் ஆன்லைன் லைப்ரரி" hreflang="ta" href="/ta/wol/h/r122/lp-tl" />
          <link rel="alternate" type="text/html" title="Buu-Mɔɔ INTANƐT NƆ WOJIATOOHE" hreflang="gaa" href="/gaa/wol/h/r121/lp-ga" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mgo" href="/mgo/wol/h/r512/lp-mta" />
          <link rel="alternate" type="text/html" title="ቤተ መጻሕፍቲ ኢንተርነት ግምቢ ዘብዐኛ" hreflang="ti" href="/ti/wol/h/r119/lp-ti" />
          <link rel="alternate" type="text/html" title="Wachtawur ONLAYN LAYBREERIYAA" hreflang="wal" href="/wal/wol/h/r117/lp-wl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE YA LIBRARYA" hreflang="pag" href="/pag/wol/h/r116/lp-pn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE A LIBRARIA" hreflang="ilo" href="/ilo/wol/h/r115/lp-il" />
          <link rel="alternate" type="text/html" title="INTERNET DZI AGBALẼDZRAƉOƑE" hreflang="ee" href="/ee/wol/h/r114/lp-ew" />
          <link rel="alternate" type="text/html" title="LAAYIBRARII INTARNEETIIRRAA" hreflang="om" href="/om/wol/h/r112/lp-oa" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARYA" hreflang="war" href="/war/wol/h/r110/lp-sa" />
          <link rel="alternate" type="text/html" title="ĨHÖIWAROBO UBUMRODZÉ ON-LINE Roꞌmadöꞌöꞌwa te hã" hreflang="xav" href="/xav/wol/h/r511/lp-xv" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="hi" href="/hi/wol/h/r108/lp-hi" />
          <link rel="alternate" type="text/html" title="Agarooshshu Shaeta INTERNEETETE LAYIBIRERE" hreflang="sid" href="/sid/wol/h/r105/lp-dm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NA LIBRARYA" hreflang="bcl" href="/bcl/wol/h/r104/lp-bi" />
          <link rel="alternate" type="text/html" title="ОНЛАЈН БИБЛИОТЕКА Watchtower" hreflang="mk" href="/mk/wol/h/r102/lp-mc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE NGA LIBRARYA" hreflang="ceb" href="/ceb/wol/h/r101/lp-cv" />
          <link rel="alternate" type="text/html" title="BUIKERSTUUW IN INTERNET fon Torre de Vigia" hreflang="nds" href="/nds/wol/h/r510/lp-pmr" />
          <link rel="alternate" type="text/html" title="Күзөт мунарасынын ОНЛАЙН КИТЕПКАНАСЫ" hreflang="ky" href="/ky/wol/h/r51/lp-kz" />
          <link rel="alternate" type="text/html" title="Watchtowerta LÍBROM INTERNETPO ÉRIARIM" hreflang="mfy" href="/mfy/wol/h/r509/lp-myo" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="crn" href="/crn/wol/h/r507/lp-cor" />
          <link rel="alternate" type="text/html" title="Qoʻriqchi minorasining ONLAYN KUTUBXONASI" hreflang="uz-Latn" href="/uz-Latn/wol/h/r506/lp-uzr" />
          <link rel="alternate" type="text/html" title="守望台線上書庫" hreflang="hks" href="/hks/wol/h/r505/lp-hsl" />
          <link rel="alternate" type="text/html" title="Sargtorņa TIEŠSAISTES BIBLIOTĒKA" hreflang="lv" href="/lv/wol/h/r49/lp-lt" />
          <link rel="alternate" type="text/html" title="THƯ VIỆN TRỰC TUYẾN Tháp Canh" hreflang="vi" href="/vi/wol/h/r47/lp-vt" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН БИБЛИОТЕКА „Стражева кула“" hreflang="bg" href="/bg/wol/h/r46/lp-bl" />
          <link rel="alternate" type="text/html" title="Դիտարանի ՕՆԼԱՅՆ ԳՐԱԴԱՐԱՆ" hreflang="hy" href="/hy/wol/h/r44/lp-rea" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA ONLINE Watchtower" hreflang="sq" href="/sq/wol/h/r41/lp-al" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA INTERNETSÍE 
Watchtower" hreflang="hch" href="/hch/wol/h/r504/lp-hch" />
          <link rel="alternate" type="text/html" title="مكتبة برج المراقبة الإلكترونية" hreflang="ar" href="/ar/wol/h/r39/lp-a" />
          <link rel="alternate" type="text/html" title="INTERNETOVÁ KNIŽNICA Strážnej veže" hreflang="sk" href="/sk/wol/h/r38/lp-v" />
          <link rel="alternate" type="text/html" title="Vahitorni VEEBIRAAMATUKOGU" hreflang="et" href="/et/wol/h/r37/lp-st" />
          <link rel="alternate" type="text/html" title="ÀKÁ ÌWÉ ORÍ ÍNTÁNẸ́Ẹ̀TÌ ti Watchtower" hreflang="yo" href="/yo/wol/h/r36/lp-yr" />
          <link rel="alternate" type="text/html" title="Watchtower LIBRARY EKE INTANET" hreflang="efi" href="/efi/wol/h/r35/lp-ef" />
          <link rel="alternate" type="text/html" title="Watchtower – BIBLIOTECĂ ONLINE" hreflang="ro" href="/ro/wol/h/r34/lp-m" />
          <link rel="alternate" type="text/html" title="Ɔwɛn-Aban INTANƐT SO NHOMAKORABEA" hreflang="tw" href="/tw/wol/h/r33/lp-tw" />
          <link rel="alternate" type="text/html" title="Sargybos bokšto INTERNETINĖ BIBLIOTEKA" hreflang="lt" href="/lt/wol/h/r32/lp-l" />
          <link rel="alternate" type="text/html" title="Ọ́bá Akwụkwọ Anyị NKE DỊ N'ỊNTANET" hreflang="ig" href="/ig/wol/h/r31/lp-ib" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="fr" href="/fr/wol/h/r30/lp-f" />
          <link rel="alternate" type="text/html" title="Torre de Vigia KAARETAKON INTERNET YA" hreflang="mbc" href="/mbc/wol/h/r503/lp-mcs" />
          <link rel="alternate" type="text/html" title="ONLINE KNIHOVNA Strážné věže" hreflang="cs" href="/cs/wol/h/r29/lp-b" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="tl" href="/tl/wol/h/r27/lp-tg" />
          <link rel="alternate" type="text/html" title="FITEHIRIZAM-BOKIN’NY Vavolombelon'i Jehovah" hreflang="mg" href="/mg/wol/h/r26/lp-mg" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="id" href="/id/wol/h/r25/lp-in" />
          <link rel="alternate" type="text/html" title="守望台線上書庫" hreflang="cmn-Hant" href="/cmn-Hant/wol/h/r24/lp-ch" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="cmn-Hans" href="/cmn-Hans/wol/h/r23/lp-chs" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="st" href="/st/wol/h/r21/lp-su" />
          <link rel="alternate" type="text/html" title="საგუშაგო კოშკის ᲝᲜᲚᲐᲘᲜ ᲑᲘᲑᲚᲘᲝᲗᲔᲙᲐ" hreflang="ka" href="/ka/wol/h/r20/lp-ge" />
          <link rel="alternate" type="text/html" title="Watchtower ˗bha 'SËËDHƐ ˗LO ˗DHƐ 'Ö ƐNTƐNƐTÖ ˗TA" hreflang="daf" href="/daf/wol/h/r502/lp-ycb" />
          <link rel="alternate" type="text/html" title="INTERNETSKA BIBLIOTEKA Watchtower" hreflang="hr" href="/hr/wol/h/r19/lp-c" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nl" href="/nl/wol/h/r18/lp-o" />
          <link rel="alternate" type="text/html" title="Őrtorony ONLINE KÖNYVTÁR" hreflang="hu" href="/hu/wol/h/r17/lp-h" />
          <link rel="alternate" type="text/html" title="Vartiotornin VERKKOKIRJASTO" hreflang="fi" href="/fi/wol/h/r16/lp-fi" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БІБЛІОТЕКА Товариства «Вартова башта»" hreflang="uk" href="/uk/wol/h/r15/lp-k" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sv" href="/sv/wol/h/r14/lp-z" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETOWA Strażnicy" hreflang="pl" href="/pl/wol/h/r12/lp-p" />
          <link rel="alternate" type="text/html" title="ΔΙΑΔΙΚΤΥΑΚΗ ΒΙΒΛΙΟΘΗΚΗ της Σκοπιάς" hreflang="el" href="/el/wol/h/r11/lp-g" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHEK " hreflang="de" href="/de/wol/h/r10/lp-x" />
          <link rel="alternate" type="text/html" title="የመጠበቂያ ግንብ የኢንተርኔት ቤተ መጻሕፍት" hreflang="eth" href="/eth/wol/h/r501/lp-esl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="pt" href="/pt/wol/h/r5/lp-t" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="es" href="/es/wol/h/r4/lp-s" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="no" href="/no/wol/h/r3/lp-n" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="en" href="/en/wol/h/r1/lp-e" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="ugy" href="/ugy/wol/h/r500/lp-lsu" />
          <link rel="alternate" type="text/html" title="Waktitoren LIBRARY TAPU INTERNET" hreflang="srn" href="/srn/wol/h/r50/lp-sr" />
          <link rel="alternate" type="text/html" title="CIFALANA HE INTANETI ce Ntawala" hreflang="sbs" href="/sbs/wol/h/r499/lp-khn" />
          <link rel="alternate" type="text/html" title="VATQU'ISJAYANJAVAT YISHI' NA INTERNET Watchtower" hreflang="cag" href="/cag/wol/h/r498/lp-nvc" />
          <link rel="alternate" type="text/html" title="Watchtower KƆLƆ-KPULU-ŊAI VÃAI ŊAI" hreflang="xpe" href="/xpe/wol/h/r496/lp-kp" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mbo" href="/mbo/wol/h/r495/lp-mbo" />
          <link rel="alternate" type="text/html" title="Watchtower Biblioteca internet lico" hreflang="kpc" href="/kpc/wol/h/r494/lp-cpc" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTECA Watchtower" hreflang="quw" href="/quw/wol/h/r491/lp-qit" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ugn" href="/ugn/wol/h/r490/lp-usl" />
          <link rel="alternate" type="text/html" title="INTERNETSKA BIBLIOTEKA Watchtower" hreflang="csq" href="/csq/wol/h/r489/lp-hzj" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE KÜTÜPHANE" hreflang="tsm" href="/tsm/wol/h/r488/lp-tkl" />
          <link rel="alternate" type="text/html" title="Դիտարանի ԱՌՑԱՆՑ ԳՐԱԴԱՐԱՆ" hreflang="hyw" href="/hyw/wol/h/r487/lp-r" />
          <link rel="alternate" type="text/html" title="המצפה ‏‎—‎‏ ספרייה אונליין " hreflang="isr" href="/isr/wol/h/r486/lp-qsl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="vgt" href="/vgt/wol/h/r485/lp-vgt" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sfb" href="/sfb/wol/h/r484/lp-sbf" />
          <link rel="alternate" type="text/html" title="Watchtower ƐNTƐRINƐ́TIẀ BIIBILOTƐ́KÍ" hreflang="sef" href="/sef/wol/h/r483/lp-sfc" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="pmf" href="/pmf/wol/h/r482/lp-pmo" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИАТЕКА Сторожэвой башни" hreflang="rmy-x-rmv" href="/rmy-x-rmv/wol/h/r480/lp-rmv" />
          <link rel="alternate" type="text/html" title="VIVLIOTÉKA OĨVA INTERNÉTPE Watchtower" hreflang="gug" href="/gug/wol/h/r48/lp-gi" />
          <link rel="alternate" type="text/html" title="ඔන්ලයින් ලයිබ්‍රරි" hreflang="sqs" href="/sqs/wol/h/r479/lp-sls" />
          <link rel="alternate" type="text/html" title="Makengwero GHOMAMBAPIRA" hreflang="mhw" href="/mhw/wol/h/r478/lp-mbk" />
          <link rel="alternate" type="text/html" title="TSHIBUTSHILU TSHIA MIKANDA TSHIA KU ENTERNETE tshia Watchtower" hreflang="lua" href="/lua/wol/h/r477/lp-sh" />
          <link rel="alternate" type="text/html" title="Mikecolay 線上書庫" hreflang="ami" href="/ami/wol/h/r476/lp-ai" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="sgn-RS" href="/sgn-RS/wol/h/r475/lp-sbs" />
          <link rel="alternate" type="text/html" title="BIBILIYOTEKA YA KUINTANETI " hreflang="diu" href="/diu/wol/h/r474/lp-rny" />
          <link rel="alternate" type="text/html" title="ILAYIBULALE YA PA INTANETI iya Watchtower" hreflang="nyy-x-nkn" href="/nyy-x-nkn/wol/h/r473/lp-nkn" />
          <link rel="alternate" type="text/html" title="प्रहरीधरहरा अनलाइन पुस्तकालय" hreflang="nsp" href="/nsp/wol/h/r472/lp-nsl" />
          <link rel="alternate" type="text/html" title="ကင်းမျှော်စင် အွန်လိုင်း စာကြည့်တိုက်" hreflang="sgn-MM" href="/sgn-MM/wol/h/r471/lp-bus" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA YINH INTERNET Watchtower " hreflang="jac-x-jc" href="/jac-x-jc/wol/h/r470/lp-jc" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="amu" href="/amu/wol/h/r469/lp-amg" />
          <link rel="alternate" type="text/html" title="Каруулчы шибеениҥ ОНЛАЙН-БИБЛИОТЕКАЗЫ" hreflang="alt" href="/alt/wol/h/r468/lp-alt" />
          <link rel="alternate" type="text/html" title="Watchtower CISETE CA MIKANDA CA MU INTERNETE" hreflang="nba" href="/nba/wol/h/r467/lp-ngl" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHEK " hreflang="sgg" href="/sgg/wol/h/r466/lp-sgs" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHEK " hreflang="asq" href="/asq/wol/h/r465/lp-ogs" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="csf" href="/csf/wol/h/r464/lp-cbs" />
          <link rel="alternate" type="text/html" title="បណ្ណាល័យអ៊ីនធឺណិតរបស់ប៉មយាម" hreflang="sgn-KH" href="/sgn-KH/wol/h/r463/lp-cbl" />
          <link rel="alternate" type="text/html" title="Возьмаськон башнялэн ОНЛАЙН-БИБЛИОТЕКАЕЗ" hreflang="udm" href="/udm/wol/h/r462/lp-um" />
          <link rel="alternate" type="text/html" title="UTULIKILO WA MIKANDA HA INTERNET wa Watchtower" hreflang="cjk" href="/cjk/wol/h/r461/lp-ck" />
          <link rel="alternate" type="text/html" title="Watchtower ƲÃGA-WƆLƆI MA WƆLƆ ƁULUGI" hreflang="lom" href="/lom/wol/h/r460/lp-om" />
          <link rel="alternate" type="text/html" title="Watchtower NUKAP PAPII INTERNETNUM IISTIN" hreflang="jiv" href="/jiv/wol/h/r459/lp-shu" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTECA Watchtower" hreflang="qvz" href="/qvz/wol/h/r458/lp-qip" />
          <link rel="alternate" type="text/html" title="INTERNETBI DIOSBUJ SHIMI Watchtower" hreflang="qu-x-qxl" href="/qu-x-qxl/wol/h/r457/lp-qcs" />
          <link rel="alternate" type="text/html" title="Watchtower INTERNETPI BIBLIOTECA" hreflang="qu-x-qib" href="/qu-x-qib/wol/h/r456/lp-qib" />
          <link rel="alternate" type="text/html" title="INTERNETPI CHURASHCA BIBLIOTECA Watchtower" hreflang="qxr" href="/qxr/wol/h/r454/lp-qcc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nzs" href="/nzs/wol/h/r453/lp-nzs" />
          <link rel="alternate" type="text/html" title="Watchtower RIBRU KWɄN NUGɄN INTERNETSEʼ
" hreflang="arh" href="/arh/wol/h/r452/lp-arh" />
          <link rel="alternate" type="text/html" title="Сторожевой башняның ОНЛАЙН-БИБЛИОТЕКАЗЫ" hreflang="kjh" href="/kjh/wol/h/r450/lp-khk" />
          <link rel="alternate" type="text/html" title="RAIBHURARI YEPAINDANETI yeWatchtower" hreflang="sn" href="/sn/wol/h/r45/lp-ca" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA TʼA INTERNET Watchtower
" hreflang="cac" href="/cac/wol/h/r449/lp-chj" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA TU INTERNET" hreflang="ixl" href="/ixl/wol/h/r448/lp-ixl" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA ONLINE Watchtower" hreflang="sqk" href="/sqk/wol/h/r446/lp-als" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="gsm" href="/gsm/wol/h/r444/lp-lsg" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sfs" href="/sfs/wol/h/r443/lp-sas" />
          <link rel="alternate" type="text/html" title="مكتبة برج المراقبة الإلكترونية" hreflang="ary" href="/ary/wol/h/r442/lp-amo" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nsl" href="/nsl/wol/h/r441/lp-ndf" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="swl" href="/swl/wol/h/r440/lp-ssl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="lsp" href="/lsp/wol/h/r439/lp-psl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="csr" href="/csr/wol/h/r438/lp-scr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="ncs" href="/ncs/wol/h/r437/lp-lsn" />
          <link rel="alternate" type="text/html" title="ǃKhē xu ǂgōmmi INTERNETS AI HÂ ǂKHANINǁGÂUB" hreflang="naq-x-na" href="/naq-x-na/wol/h/r436/lp-na" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="esn" href="/esn/wol/h/r435/lp-lss" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="xki" href="/xki/wol/h/r433/lp-ksi" />
          <link rel="alternate" type="text/html" title="守望台线上书库" hreflang="csl" href="/csl/wol/h/r432/lp-csl" />
          <link rel="alternate" type="text/html" title="გინაჯინალ კოშკიშ ონლაინ ბიბლიოთეკა" hreflang="xmf" href="/xmf/wol/h/r431/lp-mgl" />
          <link rel="alternate" type="text/html" title="CHISHTELØ ASIN KILKAMERA INTERNETYU Watchtower" hreflang="gum" href="/gum/wol/h/r430/lp-gbm" />
          <link rel="alternate" type="text/html" title="Күзет мұнарасының ОНЛАЙН КІТАПХАНАСЫ" hreflang="kk" href="/kk/wol/h/r43/lp-az" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="asf" href="/asf/wol/h/r428/lp-aus" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="azo" href="/azo/wol/h/r427/lp-awn" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sgn-CD" href="/sgn-CD/wol/h/r426/lp-cgs" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="sgn-AO" href="/sgn-AO/wol/h/r425/lp-las" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sgn-SR" href="/sgn-SR/wol/h/r424/lp-ssu" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN DALAM TALIAN Watchtower" hreflang="xml" href="/xml/wol/h/r423/lp-bim" />
          <link rel="alternate" type="text/html" title="Sargybos bokšto INTERNETINĖ BIBLIOTEKA" hreflang="lls" href="/lls/wol/h/r421/lp-lts" />
          <link rel="alternate" type="text/html" title="Қўриқчи минорасининг ОНЛАЙН КУТУБХОНАСИ" hreflang="uz-Cyrl" href="/uz-Cyrl/wol/h/r42/lp-uz" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="inl" href="/inl/wol/h/r419/lp-ini" />
          <link rel="alternate" type="text/html" title="Sargtorņa TIEŠSAISTES BIBLIOTĒKA" hreflang="lsl" href="/lsl/wol/h/r418/lp-lsl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="dse" href="/dse/wol/h/r417/lp-ngt" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="dsl" href="/dsl/wol/h/r415/lp-dsl" />
          <link rel="alternate" type="text/html" title="ห้องสมุดออนไลน์ของวอชเทาเวอร์" hreflang="tsq" href="/tsq/wol/h/r414/lp-sil" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sgn-CI" href="/sgn-CI/wol/h/r413/lp-lsi" />
          <link rel="alternate" type="text/html" title="守望台線上書庫" hreflang="tss" href="/tss/wol/h/r412/lp-tsl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="mzy" href="/mzy/wol/h/r411/lp-slm" />
          <link rel="alternate" type="text/html" title="Rakhwárikilá ONLINE LIBRARY" hreflang="hns" href="/hns/wol/h/r410/lp-sri" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="fmp" href="/fmp/wol/h/r409/lp-ffe" />
          <link rel="alternate" type="text/html" title="Watchtower
WÓWAPI OTHÍ WÓWAPI KAȞWÓGYA
" hreflang="lkt" href="/lkt/wol/h/r408/lp-lkt" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="vsl" href="/vsl/wol/h/r407/lp-lsv" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="pys" href="/pys/wol/h/r406/lp-lsp" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="fcs" href="/fcs/wol/h/r405/lp-lsq" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="zib" href="/zib/wol/h/r403/lp-zsl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="bzs" href="/bzs/wol/h/r402/lp-lsb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="zsl" href="/zsl/wol/h/r400/lp-zas" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ICH INTERNET tiʼ le Watchtoweroʼ" hreflang="yua" href="/yua/wol/h/r40/lp-may" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="bvl" href="/bvl/wol/h/r398/lp-bvl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="isg" href="/isg/wol/h/r397/lp-isg" />
          <link rel="alternate" type="text/html" title="Őrtorony ONLINE KÖNYVTÁR" hreflang="hsh" href="/hsh/wol/h/r396/lp-hdf" />
          <link rel="alternate" type="text/html" title="Watchtowerjeva SPLETNA KNJIŽNICA" hreflang="sgn-SI" href="/sgn-SI/wol/h/r395/lp-szj" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBULALE YA PA
INTANETI" hreflang="sgn-MW" href="/sgn-MW/wol/h/r394/lp-msl" />
          <link rel="alternate" type="text/html" title="ものみの塔 オンライン・ライブラリー" hreflang="jsl" href="/jsl/wol/h/r393/lp-jsl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ins" href="/ins/wol/h/r392/lp-ins" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="jls" href="/jls/wol/h/r390/lp-jml" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="ssp" href="/ssp/wol/h/r388/lp-lse" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="mfs" href="/mfs/wol/h/r387/lp-lsm" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETOWA Strażnicy" hreflang="pso" href="/pso/wol/h/r385/lp-pdf" />
          <link rel="alternate" type="text/html" title="Vahitorni VEEBIRAAMATUKOGU" hreflang="eso" href="/eso/wol/h/r384/lp-std" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="fsl" href="/fsl/wol/h/r383/lp-lsf" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE Watchtower" hreflang="ise" href="/ise/wol/h/r382/lp-isl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE da Torre de Vigia" hreflang="psr" href="/psr/wol/h/r381/lp-lgp" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="csn" href="/csn/wol/h/r379/lp-lsc" />
          <link rel="alternate" type="text/html" title="ΔΙΑΔΙΚΤΥΑΚΗ ΒΙΒΛΙΟΘΗΚΗ της Σκοπιάς" hreflang="gss" href="/gss/wol/h/r378/lp-gsl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="csg" href="/csg/wol/h/r377/lp-sch" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lmp" href="/lmp/wol/h/r376/lp-lbm" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="rmn-x-rm" href="/rmn-x-rm/wol/h/r375/lp-rm" />
          <link rel="alternate" type="text/html" title="A̱MATAJKUILO̱LMEJ PAN INTERNET Watchtower" hreflang="nhk" href="/nhk/wol/h/r373/lp-nhv" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKE YA MU INTERNET" hreflang="pem" href="/pem/wol/h/r372/lp-kip" />
          <link rel="alternate" type="text/html" title="Kolo Toko he FATATOHI INITANETE" hreflang="niu" href="/niu/wol/h/r371/lp-nn" />
          <link rel="alternate" type="text/html" title="Wastaua ONLAIN LAIBRI" hreflang="tcs" href="/tcs/wol/h/r369/lp-tsc" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="kei" href="/kei/wol/h/r368/lp-kei" />
          <link rel="alternate" type="text/html" title="Vartiotornin VERKKOKIRJASTO" hreflang="fse" href="/fse/wol/h/r366/lp-fid" />
          <link rel="alternate" type="text/html" title="Күҙәтеү манараһының ОНЛАЙН КИТАПХАНАҺЫ" hreflang="ba" href="/ba/wol/h/r365/lp-bak" />
          <link rel="alternate" type="text/html" title="Watchtower ka BIBLOTƐKI ƐNTƐRƐNƐTI KAN" hreflang="dyu" href="/dyu/wol/h/r364/lp-jl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="yaq" href="/yaq/wol/h/r363/lp-yq" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="zpg" href="/zpg/wol/h/r362/lp-zpg" />
          <link rel="alternate" type="text/html" title="KITÊBXANEYA ELEKTRONÎK a Birca Çavdêriyê" hreflang="kmr-x-rd" href="/kmr-x-rd/wol/h/r361/lp-rd" />
          <link rel="alternate" type="text/html" title="Watchtower KIBĪKO PA ENTELENETE" hreflang="lu" href="/lu/wol/h/r360/lp-ku" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="nla" href="/nla/wol/h/r359/lp-nml" />
          <link rel="alternate" type="text/html" title="Ахьчаратә бааш ОНЛАИН-АБИБЛИОТЕКА" hreflang="ab" href="/ab/wol/h/r358/lp-abk" />
          <link rel="alternate" type="text/html" title="ISIPHALA SEZINGWALO ESIKU-INTHANETHI seWatchtower" hreflang="nd" href="/nd/wol/h/r357/lp-nbz" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBULALE UWA PA INTANETI" hreflang="mgr" href="/mgr/wol/h/r356/lp-mwl" />
          <link rel="alternate" type="text/html" title="Bukui kɛ Haiŋ Yekanga LAMAGBATƐMI INTANƐTI HU" hreflang="men" href="/men/wol/h/r355/lp-me" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NÁA INTERNET Watchtower" hreflang="tcf" href="/tcf/wol/h/r354/lp-tln" />
          <link rel="alternate" type="text/html" title="Vênnainsâng ONLINE LIBRARY" hreflang="lus" href="/lus/wol/h/r352/lp-ls" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="ksf" href="/ksf/wol/h/r351/lp-bfi" />
          <link rel="alternate" type="text/html" title="တၢးထီခိးတၢ် online လံာ်ရိဒၢး" hreflang="ksw" href="/ksw/wol/h/r350/lp-kr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NU̱Ú INTERNET Watchtower" hreflang="mxv" href="/mxv/wol/h/r349/lp-mxg" />
          <link rel="alternate" type="text/html" title="KƐ̄ KPOOGE pio Watchtower ONLINE" hreflang="ogo" href="/ogo/wol/h/r347/lp-og" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LO INTERNET Watchtower" hreflang="zav" href="/zav/wol/h/r346/lp-zpv" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA EN LÍNEA Watchtower" hreflang="pbb" href="/pbb/wol/h/r345/lp-paz" />
          <link rel="alternate" type="text/html" title="Гъӕуайгӕнӕн мӕсуги ОНЛАЙН-БИБЛИОТЕКӔ" hreflang="os-x-dgr" href="/os-x-dgr/wol/h/r344/lp-dgr" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA INTERNET YAKAT" hreflang="yan" href="/yan/wol/h/r343/lp-myg" />
          <link rel="alternate" type="text/html" title="KARTARARABɄ INTERNET'NE Watchtower" hreflang="cto" href="/cto/wol/h/r342/lp-emb" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIYOTÈK ANLÈ SIT-A" hreflang="gcr" href="/gcr/wol/h/r341/lp-gnc" />
          <link rel="alternate" type="text/html" title="BIBLIƆTƐKƐ WA LO ƐTƐRNƐTƐ wa Watchtower " hreflang="tll" href="/tll/wol/h/r340/lp-ot" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="tet" href="/tet/wol/h/r339/lp-ttb" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA INTERNETPE Watchtower" hreflang="gui" href="/gui/wol/h/r338/lp-gib" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTHÈQUE EN LIGNE" hreflang="eto" href="/eto/wol/h/r337/lp-etn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE MAZINAʼIGANIIGAMIG" hreflang="ojb-x-nor" href="/ojb-x-nor/wol/h/r335/lp-nor" />
          <link rel="alternate" type="text/html" title="LAYIBBULALI IJANIKA A-INTANETI yaWatchtower" hreflang="toi-zw" href="/toi-zw/wol/h/r334/lp-cgw" />
          <link rel="alternate" type="text/html" title="Watchtower BIBILIOTEKA ONLINE" hreflang="chw" href="/chw/wol/h/r333/lp-co" />
          <link rel="alternate" type="text/html" title="EPIIPILIYOTEKA ya Watchtower" hreflang="ngl" href="/ngl/wol/h/r332/lp-le" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA PO INTERNET Watchtower" hreflang="rmy-AR" href="/rmy-AR/wol/h/r331/lp-rma" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA TƗ INTERNET Watchtower" hreflang="chf" href="/chf/wol/h/r330/lp-clt" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE BIBLIOTHEKA" hreflang="rmo" href="/rmo/wol/h/r329/lp-rmx" />
          <link rel="alternate" type="text/html" title="Watchtower WAN JUUN YIN INTERNET" hreflang="knj" href="/knj/wol/h/r328/lp-kan" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="mcp" href="/mcp/wol/h/r327/lp-mka" />
          <link rel="alternate" type="text/html" title="Wachtowa ONLAIN LAIBRI" hreflang="bzj" href="/bzj/wol/h/r326/lp-bzk" />
          <link rel="alternate" type="text/html" title="Bhibhiliyoteka ya Site ya Watchtower" hreflang="cce" href="/cce/wol/h/r324/lp-cpi" />
          <link rel="alternate" type="text/html" title="Watchtower IITÁÓHKOOKSTAKIOʼPI IITÁÓHKOONIIʼPA IIHTÁÍKKAMSSINAAKIOʼPI" hreflang="bla" href="/bla/wol/h/r323/lp-blf" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="byv" href="/byv/wol/h/r322/lp-du" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NELA INTERNET dela Tore de Vigia" hreflang="vec" href="/vec/wol/h/r321/lp-tal" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Watchtower " hreflang="sxn" href="/sxn/wol/h/r320/lp-sgr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LINEAPI Watchtower" hreflang="qus" href="/qus/wol/h/r319/lp-qis" />
          <link rel="alternate" type="text/html" title="ОНЛАЈН БИБЛИОТЕКА Watchtower" hreflang="rmn-cyrl" href="/rmn-cyrl/wol/h/r318/lp-rmc" />
          <link rel="alternate" type="text/html" title="Ɔwɛn-Aban INTANƐT SO NWOMAKORABEA" hreflang="tw-x-tws" href="/tw-x-tws/wol/h/r317/lp-tws" />
          <link rel="alternate" type="text/html" title="LIBRARY U ONLINE ni fan ko Wulyang ko Damit" hreflang="yap" href="/yap/wol/h/r316/lp-yp" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="xdy" href="/xdy/wol/h/r315/lp-dyt" />
          <link rel="alternate" type="text/html" title="Watchtower Online ayamihcikēwikamik" hreflang="crk-latn" href="/crk-latn/wol/h/r310/lp-cy" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE PIPLYOTEEK" hreflang="hrx" href="/hrx/wol/h/r307/lp-hsk" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="mwv" href="/mwv/wol/h/r306/lp-mwi" />
          <link rel="alternate" type="text/html" title="Naa Bandu Mɛŋgɛlaa KƐSI YAULAŊ O INTANƐITIIYO WA" hreflang="kss" href="/kss/wol/h/r305/lp-ki" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="bjn" href="/bjn/wol/h/r304/lp-bnj" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="chk" href="/chk/wol/h/r303/lp-te" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="btd" href="/btd/wol/h/r300/lp-btd" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="mrv" href="/mrv/wol/h/r299/lp-mgr" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="mrq" href="/mrq/wol/h/r298/lp-mqn" />
          <link rel="alternate" type="text/html" title="KISUEKULU KI ZIBUKU MU KHONDI MAYO" hreflang="yom-x-ibi" href="/yom-x-ibi/wol/h/r297/lp-ibi" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="knx" href="/knx/wol/h/r294/lp-dka" />
          <link rel="alternate" type="text/html" title="Watchtower ƐNTƐRNƐTË GHË NAKWAFA" hreflang="aba" href="/aba/wol/h/r293/lp-abb" />
          <link rel="alternate" type="text/html" title="Fáktadoardna NEAHTTAGIRJERÁDJU" hreflang="se" href="/se/wol/h/r291/lp-lp" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Ambilan na Madear" hreflang="bts" href="/bts/wol/h/r290/lp-btk" />
          <link rel="alternate" type="text/html" title="Watchtower KʼOLIBʼAL WUUJ PA INTERNET
" hreflang="acr" href="/acr/wol/h/r289/lp-ach" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="nij" href="/nij/wol/h/r288/lp-dk" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="mad" href="/mad/wol/h/r287/lp-mdr" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="aoz" href="/aoz/wol/h/r286/lp-ubm" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="sda" href="/sda/wol/h/r285/lp-tor" />
          <link rel="alternate" type="text/html" title="Ɔweɔn-Aban INTANƐT DO NWOMAKORABEA" hreflang="fat" href="/fat/wol/h/r284/lp-fa" />
          <link rel="alternate" type="text/html" title="LIBRARI ONLINE Watchtower" hreflang="iba" href="/iba/wol/h/r283/lp-ia" />
          <link rel="alternate" type="text/html" title="ROSASER SYAP ONLINE Baryas" hreflang="bhw" href="/bhw/wol/h/r282/lp-ik" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Warta Hadé" hreflang="su" href="/su/wol/h/r281/lp-sd" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE SOU-LAMZ" hreflang="ium" href="/ium/wol/h/r280/lp-imn" />
          <link rel="alternate" type="text/html" title="I-ONLINE LIBRARY YeBhayibheli" hreflang="zu" href="/zu/wol/h/r28/lp-zu" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEKI YILIO HARUMWA INTERNET" hreflang="zdj" href="/zdj/wol/h/r279/lp-cmg" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="abz" href="/abz/wol/h/r278/lp-abu" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="ban" href="/ban/wol/h/r277/lp-bln" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="hvn" href="/hvn/wol/h/r276/lp-hwu" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="txq" href="/txq/wol/h/r275/lp-tii" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="wew" href="/wew/wol/h/r274/lp-wjw" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBRI SID INTERNET" hreflang="drg" href="/drg/wol/h/r273/lp-rgs" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAN ONLINE Sora Ermomo" hreflang="btx" href="/btx/wol/h/r272/lp-ak" />
          <link rel="alternate" type="text/html" title="Watchtower MIKANDA YA KE NA INTERNET" hreflang="kg" href="/kg/wol/h/r271/lp-mk" />
          <link rel="alternate" type="text/html" title="LAIPRI 'E INTERNET TA" hreflang="rtm" href="/rtm/wol/h/r270/lp-ro" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="jav" href="/jav/wol/h/r269/lp-jvn" />
          <link rel="alternate" type="text/html" title="Vatshtavvah ONLINE LIBRARY" hreflang="pdc" href="/pdc/wol/h/r268/lp-xpa" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="fy" href="/fy/wol/h/r267/lp-fs" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ase" href="/ase/wol/h/r266/lp-asl" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Manuriaigö" hreflang="nia" href="/nia/wol/h/r265/lp-ni" />
          <link rel="alternate" type="text/html" title="Күзитиш мунариниң ОНЛАЙН КИТАПХАНИСИ" hreflang="ug-cyrl" href="/ug-cyrl/wol/h/r264/lp-ug" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="dak" href="/dak/wol/h/r263/lp-dt" />
          <link rel="alternate" type="text/html" title="WĚMASƐXWETƐN ƐNTƐNƐ́TI JÍ TƆN Watchtower tɔn" hreflang="fon" href="/fon/wol/h/r262/lp-fo" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pcm" href="/pcm/wol/h/r261/lp-ngp" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="ybb" href="/ybb/wol/h/r260/lp-bm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="hop" href="/hop/wol/h/r259/lp-hpi" />
          <link rel="alternate" type="text/html" title="BIBLIYOTÈK ANLÈ ENTÈWNÈT a Lawatchtower" hreflang="gcf" href="/gcf/wol/h/r258/lp-gcr" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लायब्ररी" hreflang="kex" href="/kex/wol/h/r257/lp-knd" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Joujou Paboahon" hreflang="bbc" href="/bbc/wol/h/r256/lp-bt" />
          <link rel="alternate" type="text/html" title="Watchtower EBIBLIOTEKA ONLAINE" hreflang="vmw" href="/vmw/wol/h/r255/lp-mac" />
          <link rel="alternate" type="text/html" title="Watchtower LAYIBHRARI YA INTHANETENG" hreflang="nso-x-spl" href="/nso-x-spl/wol/h/r254/lp-spl" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Warta Penting" hreflang="jv" href="/jv/wol/h/r253/lp-ja" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE-AMI LIBRARY-IQ" hreflang="esu" href="/esu/wol/h/r252/lp-yu" />
          <link rel="alternate" type="text/html" title="ǃKhē xu ǂgōmmi INTERNETS AI HÂ ǂKHANINǁGÂUB " hreflang="naq-x-dmr" href="/naq-x-dmr/wol/h/r251/lp-dmr" />
          <link rel="alternate" type="text/html" title="Watchtower LIBRARY A INTERNET" hreflang="srm" href="/srm/wol/h/r250/lp-srm" />
          <link rel="alternate" type="text/html" title="Watchtower TÄRÄ JÖKRÄ INTERNETE" hreflang="gym" href="/gym/wol/h/r249/lp-ngb" />
          <link rel="alternate" type="text/html" title="BHIBHIRIOTEKA RO MU INTERNETI ro Torre de Vigia" hreflang="ndc" href="/ndc/wol/h/r248/lp-nda" />
          <link rel="alternate" type="text/html" title="Wakititolen LIBRARY A INTERNET" hreflang="djk" href="/djk/wol/h/r247/lp-akn" />
          <link rel="alternate" type="text/html" title="BIBLIYOTEKA YA PA INTERNETI ya Watchtower" hreflang="nyu" href="/nyu/wol/h/r246/lp-nyu" />
          <link rel="alternate" type="text/html" title="BHIBLIOTEKA YA SAITE ya Watchtower" hreflang="tsc" href="/tsc/wol/h/r245/lp-aw" />
          <link rel="alternate" type="text/html" title="BHIBHLIYOTEKA MU INTERNETI ya Torre de Vigia" hreflang="seh" href="/seh/wol/h/r243/lp-sen" />
          <link rel="alternate" type="text/html" title="Sama Lel ONLINE GINADYA" hreflang="rmy-x-lva" href="/rmy-x-lva/wol/h/r242/lp-lva" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="fo" href="/fo/wol/h/r241/lp-fr" />
          <link rel="alternate" type="text/html" title="Sorgtūrņa TĪŠSAISTIS BIBLIOTEKA" hreflang="ltg" href="/ltg/wol/h/r240/lp-ltg" />
          <link rel="alternate" type="text/html" title="Хурал башнин ОНЛАЙН БИБЛИОТЕКИ" hreflang="cv" href="/cv/wol/h/r239/lp-cu" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NUU̱ INTERNET Watchtower" hreflang="jmx" href="/jmx/wol/h/r237/lp-mxo" />
          <link rel="alternate" type="text/html" title="Garawul diňiniň ONLAÝN KITAPHANASY" hreflang="tk" href="/tk/wol/h/r236/lp-tmr" />
          <link rel="alternate" type="text/html" title="Ҝөзәтчи гүлләсинин ОНЛАЈН КИТАБХАНАСЫ" hreflang="az-Cyrl" href="/az-Cyrl/wol/h/r235/lp-aj" />
          <link rel="alternate" type="text/html" title="Watchtower LAỸAMAQTAXAQUI ANA NEREPI YE INTERNET" hreflang="tob" href="/tob/wol/h/r234/lp-tob" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA INTERNET CHUKÚAMI Watchtower" hreflang="tar" href="/tar/wol/h/r233/lp-trh" />
          <link rel="alternate" type="text/html" title="NECʼATENAPI LAIʼT NAʼ INTERNET Watchtower" hreflang="plg" href="/plg/wol/h/r232/lp-plg" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA HA INTERNET" hreflang="ote" href="/ote/wol/h/r230/lp-otm" />
          <link rel="alternate" type="text/html" title="KAPANG BUKU YAMU Watchtower" hreflang="alz" href="/alz/wol/h/r229/lp-alu" />
          <link rel="alternate" type="text/html" title="TAMKARḌIT DI INTERNET Watchtower" hreflang="kab" href="/kab/wol/h/r228/lp-kby" />
          <link rel="alternate" type="text/html" title="NGEEL KEFDER Ngeel gor ti jare ɓil INTERNED" hreflang="tui" href="/tui/wol/h/r227/lp-tpr" />
          <link rel="alternate" type="text/html" title="Σκοπιά—ΒΙΒΛΙΟΘΗΚΗ ΚΑΪ Ο ΙΝΤΕΡΝΕΤ" hreflang="rmn-x-rmn" href="/rmn-x-rmn/wol/h/r225/lp-rmn" />
          <link rel="alternate" type="text/html" title="Σκοπιά—ΒΙΒΛΙΟΘΗΚΗ ΚΟ ΙΝΤΕΡΝΕΤ" hreflang="rmn-x-rmg" href="/rmn-x-rmg/wol/h/r224/lp-rmg" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA TI INTERNET Watchtower" hreflang="hus" href="/hus/wol/h/r222/lp-hst" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEK LOR INTERNET" hreflang="mfe" href="/mfe/wol/h/r221/lp-ce" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE KÜTÜPHANE" hreflang="tr" href="/tr/wol/h/r22/lp-tk" />
          <link rel="alternate" type="text/html" title="Watchtower PORPUSTAKAAN ID LAMAN WEB" hreflang="dtp" href="/dtp/wol/h/r219/lp-kad" />
          <link rel="alternate" type="text/html" title="К′ЬТЕБХАНӘЙА ОНЛАЙН йа Бьрща Qәрәwьлийе" hreflang="kmr-Cyrl" href="/kmr-Cyrl/wol/h/r218/lp-rdc" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETIRHU Watchtower" hreflang="tsz" href="/tsz/wol/h/r213/lp-trs" />
          <link rel="alternate" type="text/html" title="BIBLIOTÈK AN LIGN Watchtower" hreflang="rcf" href="/rcf/wol/h/r212/lp-rcr" />
          <link rel="alternate" type="text/html" title="یہوواہ دے گواہواں دی آن لائن لائبریری" hreflang="pnb" href="/pnb/wol/h/r211/lp-pjn" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTEK LO ENTERNET" hreflang="crs" href="/crs/wol/h/r210/lp-sc" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA B'A INTERNET Watchtower" hreflang="toj" href="/toj/wol/h/r209/lp-tjo" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="fub" href="/fub/wol/h/r208/lp-fd" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTECA Watchtower" hreflang="qug" href="/qug/wol/h/r207/lp-qic" />
          <link rel="alternate" type="text/html" title="Watchtower LEABHARLANN AR LÍNE " hreflang="ga" href="/ga/wol/h/r204/lp-gc" />
          <link rel="alternate" type="text/html" title="ƐTƐNƐTƖ A DƐ WA -ZƲÄ ˈBƆGWƖ Watchtower " hreflang="btg" href="/btg/wol/h/r202/lp-et" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA LÓ INTERNET" hreflang="zpa" href="/zpa/wol/h/r201/lp-zpl" />
          <link rel="alternate" type="text/html" title="LAYIBULARE YA PA INTANETI" hreflang="tog" href="/tog/wol/h/r200/lp-ct" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="ru" href="/ru/wol/h/r2/lp-u" />
          <link rel="alternate" type="text/html" title="Watchtower ˈSƐƖGBU- NƖAN ˈO ƐNTƐƐNƐTƖ ˈˈkpe" hreflang="gxx" href="/gxx/wol/h/r199/lp-gur" />
          <link rel="alternate" type="text/html" title="Watchtower LE SƐBHƐPANAN ƐNTƐNƐTI ƝƆƆN" hreflang="goa" href="/goa/wol/h/r198/lp-go" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTHEEK ONLINE" hreflang="pap-x-paa" href="/pap-x-paa/wol/h/r197/lp-paa" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA IPAN INTERNET Watchtower" hreflang="ngu" href="/ngu/wol/h/r196/lp-nhg" />
          <link rel="alternate" type="text/html" title="Watchtower LATƆBONƐN ƐNTƐNƐTË FƐN" hreflang="ati" href="/ati/wol/h/r195/lp-ati" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA TI INTERNET Watchtower" hreflang="ctu" href="/ctu/wol/h/r193/lp-chl" />
          <link rel="alternate" type="text/html" title="INTERNETPI BIBLIOTECA Watchtower" hreflang="qvi" href="/qvi/wol/h/r192/lp-qii" />
          <link rel="alternate" type="text/html" title="LAYIBULARE YA PA INTANETI ya Watchtower" hreflang="tum" href="/tum/wol/h/r191/lp-tb" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA TA INTERNET yuʼun Watchtower" hreflang="tzh" href="/tzh/wol/h/r189/lp-tze" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="wes" href="/wes/wol/h/r188/lp-pcm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nv" href="/nv/wol/h/r187/lp-nv" />
          <link rel="alternate" type="text/html" title="LIBROS LEW'ET TOJ IHI INTERNET Watchtower " hreflang="wlv" href="/wlv/wol/h/r186/lp-wch" />
          <link rel="alternate" type="text/html" title="Watchtower SƐB VAEESG ZĨIGA" hreflang="mos" href="/mos/wol/h/r185/lp-mm" />
          <link rel="alternate" type="text/html" title="AMATLAJKUILOLI IPAN INTERNET
Watchtower" hreflang="nch" href="/nch/wol/h/r183/lp-nhh" />
          <link rel="alternate" type="text/html" title="ONLINE LAYBREERIGA Watchtower" hreflang="so" href="/so/wol/h/r182/lp-so" />
          <link rel="alternate" type="text/html" title="Woaktorm ONLINE-BIBLIOTÄKJ" hreflang="pdt" href="/pdt/wol/h/r179/lp-lwx" />
          <link rel="alternate" type="text/html" title="RAIBURARI N TE INTANETE ibukin Te Taua-n-Tantani" hreflang="gil" href="/gil/wol/h/r178/lp-gb" />
          <link rel="alternate" type="text/html" title="ONLINE BIBLIOTEKA Watchtower" hreflang="bs" href="/bs/wol/h/r177/lp-bsn" />
          <link rel="alternate" type="text/html" title="KITÊBXANEYA ONLAYN ya Birca Qerewiliyê" hreflang="kmr-x-rdu" href="/kmr-x-rdu/wol/h/r176/lp-rdu" />
          <link rel="alternate" type="text/html" title="Watchtower AMATLAJKUILOLMEJ ITECH INTERNET" hreflang="ncx" href="/ncx/wol/h/r175/lp-nhc" />
          <link rel="alternate" type="text/html" title="Watchtower MIKANDA I MU INTERNETE" hreflang="sop" href="/sop/wol/h/r174/lp-ksn" />
          <link rel="alternate" type="text/html" title="Lomiga Faale-Tusi Paia I LE INITANETI" hreflang="sm" href="/sm/wol/h/r173/lp-sm" />
          <link rel="alternate" type="text/html" title="LAIBULALE JA PA INTANETI ja Watchtower" hreflang="yao" href="/yao/wol/h/r172/lp-ya" />
          <link rel="alternate" type="text/html" title="ONGULUMAMBO MOINTANETA yiileshomwa yopaMbiimbeli" hreflang="ng" href="/ng/wol/h/r170/lp-od" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBRI ENA INTERNET" hreflang="fj" href="/fj/wol/h/r169/lp-fn" />
          <link rel="alternate" type="text/html" title="O-Watchtower LIBRARY MORUNGOVI" hreflang="hz" href="/hz/wol/h/r168/lp-hr" />
          <link rel="alternate" type="text/html" title="ONGULUMAMBO YOKOINTANETA" hreflang="kj" href="/kj/wol/h/r166/lp-ky" />
          <link rel="alternate" type="text/html" title="LAEPRARI YA INTHANETENG" hreflang="nso" href="/nso/wol/h/r165/lp-se" />
          <link rel="alternate" type="text/html" title="ḼAIBURARI Ya Watchtower Kha INTHANETHE" hreflang="ve" href="/ve/wol/h/r164/lp-ve" />
          <link rel="alternate" type="text/html" title="IWatchtower LAYBRARI EKWI-INTANETHI" hreflang="xh" href="/xh/wol/h/r163/lp-xo" />
          <link rel="alternate" type="text/html" title="ຫ້ອງສະໝຸດອອນລາຍຂອງວັອດສ໌ທາວເວີ້" hreflang="lo" href="/lo/wol/h/r161/lp-la" />
          <link rel="alternate" type="text/html" title="KʼUBʼIL UʼJ TOJ INTERNET Watchtower" hreflang="mam" href="/mam/wol/h/r160/lp-mz" />
          <link rel="alternate" type="text/html" title="Tani Watchtower LÍBURU-AGEI LIDAN INTERNET" hreflang="cab" href="/cab/wol/h/r158/lp-grf" />
          <link rel="alternate" type="text/html" title="RE TATRUUQ CHI TZOLOK Watchtower" hreflang="kek" href="/kek/wol/h/r157/lp-gk" />
          <link rel="alternate" type="text/html" title="UK'OLB'AL WUJ PA INTERNET Watchtower" hreflang="quc" href="/quc/wol/h/r156/lp-qc" />
          <link rel="alternate" type="text/html" title="KIKʼOJLIBʼÄL WUJ PA INTERNET Watchtower" hreflang="cak" href="/cak/wol/h/r155/lp-cq" />
          <link rel="alternate" type="text/html" title="VAIRAA PAPAI NATIRARA Watchtower" hreflang="ty" href="/ty/wol/h/r154/lp-th" />
          <link rel="alternate" type="text/html" title="FATATUSI I TE ITANETI a te Faleleoleo Maluga" hreflang="tvl" href="/tvl/wol/h/r153/lp-vl" />
          <link rel="alternate" type="text/html" title="INTERNET RA ULBI SAKANKA NANI Watchtower" hreflang="miq" href="/miq/wol/h/r152/lp-mis" />
          <link rel="alternate" type="text/html" title="Wachtawa LAYBRI NA DI INTANƐT" hreflang="kri" href="/kri/wol/h/r151/lp-kri" />
          <link rel="alternate" type="text/html" title="BIBILIYOTEKA ZOKOINTANETA" hreflang="kwn" href="/kwn/wol/h/r150/lp-wg" />
          <link rel="alternate" type="text/html" title="Mulangidi KIDIDI KYA KUBHAKA MADIVULU MU INTERNETE" hreflang="kmb" href="/kmb/wol/h/r149/lp-kim" />
          <link rel="alternate" type="text/html" title="Watchtower LIBRARY INDANETINĨ" hreflang="kam" href="/kam/wol/h/r148/lp-kb" />
          <link rel="alternate" type="text/html" title="PÜTCHIPÜLEE SULU'UKA INTERNET sutuma Watchtower" hreflang="guc" href="/guc/wol/h/r147/lp-wy" />
          <link rel="alternate" type="text/html" title="המצפה ‏‎—‎‏ ספרייה אונליין " hreflang="he" href="/he/wol/h/r145/lp-q" />
          <link rel="alternate" type="text/html" title="ကင်းမျှော်စင် အွန်လိုင်း စာကြည့်တိုက်" hreflang="my" href="/my/wol/h/r144/lp-bu" />
          <link rel="alternate" type="text/html" title="Watchtower—MAKTABA KU ENTERNETE" hreflang="swc" href="/swc/wol/h/r143/lp-zs" />
          <link rel="alternate" type="text/html" title="Wi Lubele ma i LAIBRARI ME INTANET" hreflang="ach" href="/ach/wol/h/r142/lp-ac" />
          <link rel="alternate" type="text/html" title="Watchtower OMBIMBILIYOTEKA" hreflang="nyk" href="/nyk/wol/h/r141/lp-nk" />
          <link rel="alternate" type="text/html" title="Watchtower LEBRALE OKWA INTANETI" hreflang="koo" href="/koo/wol/h/r139/lp-lhk" />
          <link rel="alternate" type="text/html" title="LAYIBULALE EY'OKU MUKUTU GWAFFE ogwa Intaneeti" hreflang="lg" href="/lg/wol/h/r138/lp-lu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pon" href="/pon/wol/h/r136/lp-pp" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="maf" href="/maf/wol/h/r1352/lp-maf" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="mbp" href="/mbp/wol/h/r1351/lp-mly" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="guo" href="/guo/wol/h/r1350/lp-gbr" />
          <link rel="alternate" type="text/html" title="Wajtaoa LAEBRI LONG INTENET" hreflang="bi" href="/bi/wol/h/r135/lp-lm" />
          <link rel="alternate" type="text/html" title="प्रहरीधरहरा अनलाइन लाइब्रेरी" hreflang="taj" href="/taj/wol/h/r1349/lp-tme" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE NA NDÖ TI INTERNET Watchtower" hreflang="mzv" href="/mzv/wol/h/r1348/lp-mnj" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE NA NDÖ TI INTERNET Watchtower" hreflang="bjo" href="/bjo/wol/h/r1347/lp-bnm" />
          <link rel="alternate" type="text/html" title="AMAKTABA KU ENTERNETE" hreflang="flr" href="/flr/wol/h/r1346/lp-kfl" />
          <link rel="alternate" type="text/html" title="የመጠበቂያ ግንብ የኢንተርኔት ቤተ መጻሕፍት" hreflang="hdy" href="/hdy/wol/h/r1345/lp-hdy" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA U ENTERNETE" hreflang="hem" href="/hem/wol/h/r1344/lp-khb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ood" href="/ood/wol/h/r1343/lp-ppg" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="pt-AO" href="/pt-AO/wol/h/r1342/lp-tng" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="trp" href="/trp/wol/h/r1341/lp-kbk" />
          <link rel="alternate" type="text/html" title="RAIBHURARI YO MU INTERNETI YO
Watchtower" hreflang="ndc-x-ndw" href="/ndc-x-ndw/wol/h/r1340/lp-ndw" />
          <link rel="alternate" type="text/html" title="Watchtower TANAKIʼAGA TOHI ʼI TE NETI" hreflang="wls" href="/wls/wol/h/r134/lp-wa" />
          <link rel="alternate" type="text/html" title="TXISUEKELU TXA MIKANDA TXA Torre de Vigia" hreflang="mxg" href="/mxg/wol/h/r1339/lp-mbn" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="rmo-FR" href="/rmo-FR/wol/h/r1338/lp-rmf" />
          <link rel="alternate" type="text/html" title="OMBANDU TUKOZA IKANDA ya Torre de Vigia" hreflang="blv" href="/blv/wol/h/r1337/lp-kbl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lst" href="/lst/wol/h/r1336/lp-tts" />
          <link rel="alternate" type="text/html" title="Watchtower KIRIHKARU’SA INARAN VIDEORU’SA INTERNETKE" hreflang="cbt" href="/cbt/wol/h/r1335/lp-hwi" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sgn-CM" href="/sgn-CM/wol/h/r1333/lp-cml" />
          <link rel="alternate" type="text/html" title="watchtower online library" hreflang="gu-Latn" href="/gu-Latn/wol/h/r1332/lp-grm" />
          <link rel="alternate" type="text/html" title="உவாட்ச்டவர் ஆன்லைன் லைப்ரரி" hreflang="ta-x-tls" href="/ta-x-tls/wol/h/r1331/lp-tls" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="grb" href="/grb/wol/h/r1330/lp-grb" />
          <link rel="alternate" type="text/html" title="Ohinga mar Jarito LAIBRARI E INTANET" hreflang="luo" href="/luo/wol/h/r133/lp-lo" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="sd-Deva" href="/sd-Deva/wol/h/r1329/lp-ndv" />
          <link rel="alternate" type="text/html" title="Watchtower KʼOLIBʼAL RE RI TAQ WUUJ PA INTERNET" hreflang="acr-x-acr" href="/acr-x-acr/wol/h/r1328/lp-acr" />
          <link rel="alternate" type="text/html" title="KʼOLBʼAL WUJ PA INTERNET Watchtower" hreflang="acr-x-acc" href="/acr-x-acc/wol/h/r1327/lp-acc" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="ro-x-rnk" href="/ro-x-rnk/wol/h/r1326/lp-rnk" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKE U MBOKO NDJA BIAMU Watchtower" hreflang="lel" href="/lel/wol/h/r1325/lp-bhl" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nag" href="/nag/wol/h/r1324/lp-ngd" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="lsy" href="/lsy/wol/h/r1323/lp-mts" />
          <link rel="alternate" type="text/html" title="THƯ VIỆN TRỰC TUYẾN Tháp Canh" hreflang="jra" href="/jra/wol/h/r1322/lp-jar" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="kn-x-kbb" href="/kn-x-kbb/wol/h/r1321/lp-kbb" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="dzo-Tibt" href="/dzo-Tibt/wol/h/r1320/lp-dz" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="dhv" href="/dhv/wol/h/r132/lp-lf" />
          <link rel="alternate" type="text/html" title="watchtower online library" hreflang="pa-Latn" href="/pa-Latn/wol/h/r1319/lp-pjr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sls" href="/sls/wol/h/r1318/lp-sgl" />
          <link rel="alternate" type="text/html" title="Watchtower Online Library" hreflang="hi-Latn" href="/hi-Latn/wol/h/r1317/lp-hrm" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="anm" href="/anm/wol/h/r1316/lp-anm" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="gbm" href="/gbm/wol/h/r1315/lp-grw" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="hne-Deva" href="/hne-Deva/wol/h/r1314/lp-cgd" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nbu" href="/nbu/wol/h/r1313/lp-ngr" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="awa" href="/awa/wol/h/r1312/lp-awd" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="xnr" href="/xnr/wol/h/r1311/lp-kgh" />
          <link rel="alternate" type="text/html" title="वॉचटावर ऑनलाइन लाइब्रेरी" hreflang="sck-Deva" href="/sck-Deva/wol/h/r1310/lp-sdd" />
          <link rel="alternate" type="text/html" title="Гаравул диңиниң ОНЛАЙН КИТАПХАНАСЫ" hreflang="tk-Cyrl" href="/tk-Cyrl/wol/h/r131/lp-tm" />
          <link rel="alternate" type="text/html" title="વૉચટાવર ઓનલાઇન લાઇબ્રેરી" hreflang="kfr" href="/kfr/wol/h/r1309/lp-kcc" />
          <link rel="alternate" type="text/html" title="ལྟ་སྲུང་སྟེགས་བུའི་དྲྭ་ཐོག་དཔེ་མཛོད།" hreflang="bo" href="/bo/wol/h/r1302/lp-tbt" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE da Torre de Vigia" hreflang="nsx" href="/nsx/wol/h/r1300/lp-sgo" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="sw" href="/sw/wol/h/r13/lp-sw" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БІБЛІОТЕКА Товариства «Вартова башта»" hreflang="rue" href="/rue/wol/h/r1299/lp-rsc" />
          <link rel="alternate" type="text/html" title="مكتبة برج المراقبة الإلكترونية" hreflang="sgn-LB" href="/sgn-LB/wol/h/r1290/lp-lbs" />
          <link rel="alternate" type="text/html" title="LAEBORARI YA MO INTERNET" hreflang="tn" href="/tn/wol/h/r129/lp-tn" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE da Torre de Vigia" hreflang="olu" href="/olu/wol/h/r1289/lp-kvm" />
          <link rel="alternate" type="text/html" title="KUATIAÑEꞌẼ RENDA ON-LINE Torre de Vigiape" hreflang="kgk" href="/kgk/wol/h/r1284/lp-kaa" />
          <link rel="alternate" type="text/html" title="KUAXIA PARA RYRU Torre de Vigia regua" hreflang="gun" href="/gun/wol/h/r1281/lp-gim" />
          <link rel="alternate" type="text/html" title="የመጠበቂያ ግንብ የኢንተርኔት ቤተ መጻሕፍት" hreflang="jw-gde" href="/jw-gde/wol/h/r1280/lp-gde" />
          <link rel="alternate" type="text/html" title="LUNDILU DIA NKANDA MU INTERNETE - dia Mbangi za Yave" hreflang="kwy" href="/kwy/wol/h/r128/lp-kg" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="crj-Latn" href="/crj-Latn/wol/h/r1276/lp-csr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="bho-MU" href="/bho-MU/wol/h/r1271/lp-bhm" />
          <link rel="alternate" type="text/html" title="ISOMERO RYO KURI INTERINETI rya Watchtower" hreflang="rw" href="/rw/wol/h/r127/lp-yw" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="acu" href="/acu/wol/h/r1269/lp-ahw" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sgn-BI" href="/sgn-BI/wol/h/r1268/lp-brs" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE KÜTÜPHANE" hreflang="kiu" href="/kiu/wol/h/r1267/lp-zzn" />
          <link rel="alternate" type="text/html" title="BIBLIOTHEQUE EN LIGNE Watchtower" hreflang="dje" href="/dje/wol/h/r1266/lp-zr" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA LU INTERNET Watchtower" hreflang="zpd" href="/zpd/wol/h/r1264/lp-zpx" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="zpj" href="/zpj/wol/h/r1261/lp-zpc" />
          <link rel="alternate" type="text/html" title="Watchtower MIKANDA OYO EZALI NA INTERNET" hreflang="ln" href="/ln/wol/h/r126/lp-li" />
          <link rel="alternate" type="text/html" title="Rawvianaw ONLINE LIBRARY" hreflang="czt" href="/czt/wol/h/r1259/lp-zo" />
          <link rel="alternate" type="text/html" title="BIBILOTEK yi Watchtower MU NZILA NSINGA" hreflang="yom-x-ymb" href="/yom-x-ymb/wol/h/r1252/lp-ymb" />
          <link rel="alternate" type="text/html" title="ඔන්ලයින් ලයිබ්‍රරි " hreflang="si" href="/si/wol/h/r125/lp-sn" />
          <link rel="alternate" type="text/html" title="Watchtower LABURARE NA INTANE" hreflang="yer" href="/yer/wol/h/r1249/lp-yg" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="csw-x-ycs" href="/csw-x-ycs/wol/h/r1248/lp-ycs" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="csw-x-yc" href="/csw-x-yc/wol/h/r1247/lp-yc" />
          <link rel="alternate" type="text/html" title="Wachtturm ONLINE-BIBLIOTHEK " hreflang="gsw" href="/gsw/wol/h/r1244/lp-xsw" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sgn-bw" href="/sgn-bw/wol/h/r1242/lp-wsl" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ON-LINE da Torre de Vigia" hreflang="wap" href="/wap/wol/h/r1241/lp-wph" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="cwd-x-wcs" href="/cwd-x-wcs/wol/h/r1230/lp-wcs" />
          <link rel="alternate" type="text/html" title="RAIBURARE Y'AHA INTANEETI eya Watchtower" hreflang="nyn" href="/nyn/wol/h/r123/lp-rr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="cwd-x-wc" href="/cwd-x-wc/wol/h/r1229/lp-wc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="prk" href="/prk/wol/h/r1227/lp-wam" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="mer" href="/mer/wol/h/r1223/lp-uu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="upv" href="/upv/wol/h/r1221/lp-urp" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="suk" href="/suk/wol/h/r1219/lp-uk" />
          <link rel="alternate" type="text/html" title="كۈزىتىش مۇنارى تور كۈتۈپخانىسى" hreflang="ug-x-uga" href="/ug-x-uga/wol/h/r1218/lp-uga" />
          <link rel="alternate" type="text/html" title="Watchtower GUA̱A̱TH BUƆKNI KÄ INTƐRNƐT" hreflang="nus" href="/nus/wol/h/r1217/lp-ue" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="tza" href="/tza/wol/h/r1216/lp-tzl" />
          <link rel="alternate" type="text/html" title="KARETA JENY INTERNET TA
Kawo auto ta tuwaro aino" hreflang="car-x-tyw" href="/car-x-tyw/wol/h/r1215/lp-tyw" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="nan-x-twd" href="/nan-x-twd/wol/h/r1210/lp-twd" />
          <link rel="alternate" type="text/html" title="NIPEꞌTISE PAPERA PŨRĨ TURI ON-LINE ye Torre Vigiare" hreflang="tuo" href="/tuo/wol/h/r1208/lp-tuo" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="tac" href="/tac/wol/h/r1202/lp-trw" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="tuv" href="/tuv/wol/h/r1201/lp-trn" />
          <link rel="alternate" type="text/html" title="ƐNTƐNƐTI SU FLUWA SIEWLƐ Watchtower " hreflang="bci" href="/bci/wol/h/r120/lp-ao" />
          <link rel="alternate" type="text/html" title="Минораи посбони ОНЛАЙН КИТОБХОНА" hreflang="tg-UZ" href="/tg-UZ/wol/h/r1182/lp-tju" />
          <link rel="alternate" type="text/html" title="BHIBHIRIOTEKA RE MU INTERNETI re Torre dhe Vhijiya" hreflang="twx" href="/twx/wol/h/r1180/lp-tew" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN DALAM TALIAN Watchtower" hreflang="ms" href="/ms/wol/h/r118/lp-ml" />
          <link rel="alternate" type="text/html" title="MBIBLIOTEKA ON-LINE ra Torre ya Vigia" hreflang="ter" href="/ter/wol/h/r1179/lp-ter" />
          <link rel="alternate" type="text/html" title="POPERAPATAÜ̃ ONLINE Dauü̃taecü " hreflang="tca" href="/tca/wol/h/r1174/lp-tcn" />
          <link rel="alternate" type="text/html" title="BIBILIOTEKE YA MU ENTERNETE Watchtower" hreflang="tap" href="/tap/wol/h/r1172/lp-tbw" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="tab" href="/tab/wol/h/r1170/lp-tbn" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="tsg" href="/tsg/wol/h/r1169/lp-ta" />
          <link rel="alternate" type="text/html" title="ওয়াচটাওয়ার অনলাইন লাইব্রেরি" hreflang="syl-x-syl" href="/syl-x-syl/wol/h/r1167/lp-syl" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="sus" href="/sus/wol/h/r1161/lp-sus" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE da Torre de Vigia" hreflang="cri" href="/cri/wol/h/r1160/lp-stn" />
          <link rel="alternate" type="text/html" title="Ieuwa Ehay Enoi Haria e POPERA KOꞌI" hreflang="mav" href="/mav/wol/h/r1159/lp-stm" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETOWA
Strażnicy" hreflang="szl" href="/szl/wol/h/r1156/lp-ssn" />
          <link rel="alternate" type="text/html" title="LAIBULALI YA PA INTANETI ya Watchtower" hreflang="sby" href="/sby/wol/h/r1154/lp-sol" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nbs" href="/nbs/wol/h/r1150/lp-sln" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sat" href="/sat/wol/h/r1140/lp-shr" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sat-Deva" href="/sat-Deva/wol/h/r1138/lp-shd" />
          <link rel="alternate" type="text/html" title="Bibliaki axetibo INTERNETHAIN DIOSSEN JOIKI IKÁBO" hreflang="shp" href="/shp/wol/h/r1137/lp-shc" />
          <link rel="alternate" type="text/html" title="BIBLIƆTƐKƐ DJELÁ ƐNTƐRNƐTƐ djɛ Watchtower" hreflang="soe" href="/soe/wol/h/r1135/lp-sgm" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-КИТОБХӮНАИ Бурҷи дидбони" hreflang="sgh" href="/sgh/wol/h/r1134/lp-sgh" />
          <link rel="alternate" type="text/html" title="Watchtower KIBĪKO PA ENTERNETE" hreflang="sng" href="/sng/wol/h/r1133/lp-sga" />
          <link rel="alternate" type="text/html" title="ห้องสมุดออนไลน์ของวอชเทาเวอร์" hreflang="th" href="/th/wol/h/r113/lp-si" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="saq" href="/saq/wol/h/r1129/lp-sbr" />
          <link rel="alternate" type="text/html" title="PERPUSTAKAAN ONLINE Menara Pengawal" hreflang="loe" href="/loe/wol/h/r1127/lp-sal" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="sgn-RW" href="/sgn-RW/wol/h/r1126/lp-rws" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БИБЛИОТЕКА Сторожевой башни" hreflang="rmy-x-rvc" href="/rmy-x-rvc/wol/h/r1123/lp-rvc" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="rug" href="/rug/wol/h/r1122/lp-rv" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="ro-x-rnn" href="/ro-x-rnn/wol/h/r1120/lp-rnn" />
          <link rel="alternate" type="text/html" title="BIBLIYOTEKA Dzra Watchtower Ka Internet" hreflang="rng" href="/rng/wol/h/r1117/lp-rn" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН-БІБЛІОТЕКА Товариства «Вартова башта»" hreflang="rmy-UA" href="/rmy-UA/wol/h/r1116/lp-rmu" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKA INTERNETOWA Strażnicy" hreflang="rml" href="/rml/wol/h/r1115/lp-rmt" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NI NUU LU INTERNET Watchtower" hreflang="zai" href="/zai/wol/h/r111/lp-zpi" />
          <link rel="alternate" type="text/html" title="ONLAJN BIBLIOTEKA Watchtower" hreflang="rmn-x-rme" href="/rmn-x-rme/wol/h/r1109/lp-rme" />
          <link rel="alternate" type="text/html" title="ОНЛАЙН БИБЛИОТЕКА „Стражева кула“" hreflang="rmn-x-rmb" href="/rmn-x-rmb/wol/h/r1108/lp-rmb" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA-ONLINE Tuor da guardia" hreflang="rm-x-rhs" href="/rm-x-rhs/wol/h/r1105/lp-rhs" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA ONLINE Tuor da Guardgia" hreflang="rm-x-rh" href="/rm-x-rh/wol/h/r1103/lp-rh" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="nen" href="/nen/wol/h/r1102/lp-re" />
          <link rel="alternate" type="text/html" title="Biblyamanta INTERNETPI YAĈAKUNAPAQ" hreflang="quf" href="/quf/wol/h/r1099/lp-qum" />
          <link rel="alternate" type="text/html" title="Bibliapita INTERNETCHO PUBLICACIUNNINCHICUNA" hreflang="qub" href="/qub/wol/h/r1098/lp-qul" />
          <link rel="alternate" type="text/html" title="YANAPAYCUNA YAĆHACHINAPÄ INTERNETĆHU Bibliapita" hreflang="qvw" href="/qvw/wol/h/r1097/lp-quh" />
          <link rel="alternate" type="text/html" title="INTERNETBI BIBLIOTECA Watchtower" hreflang="qug-x-qix" href="/qug-x-qix/wol/h/r1095/lp-qix" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pau" href="/pau/wol/h/r1091/lp-pu" />
          <link rel="alternate" type="text/html" title="یہوواہ کے گواہوں کی آن لائن لائبریری" hreflang="ur" href="/ur/wol/h/r109/lp-ud" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pjt" href="/pjt/wol/h/r1089/lp-ptj" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA PAN INTERNET Watchtower " hreflang="poh" href="/poh/wol/h/r1086/lp-pqm" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="poi" href="/poi/wol/h/r1085/lp-ppu" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="pma" href="/pma/wol/h/r1079/lp-pma" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="fuf" href="/fuf/wol/h/r1077/lp-plr" />
          <link rel="alternate" type="text/html" title="Avuriwket MADIKTE UKAGTAN AMUN INTERNET" hreflang="plu" href="/plu/wol/h/r1076/lp-plk" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE EN LIGNE Watchtower" hreflang="pri" href="/pri/wol/h/r1072/lp-pic" />
          <link rel="alternate" type="text/html" title="LAYIBULALE YA PAINTANETI ya Watchtower" hreflang="phm" href="/phm/wol/h/r1070/lp-phm" />
          <link rel="alternate" type="text/html" title="Watchtower LAIBULALE YA PA
INTANETI" hreflang="ny" href="/ny/wol/h/r107/lp-cn" />
          <link rel="alternate" type="text/html" title="Cok rak fan ŋwǝǝ MA Pǝ INTERNETmǝǝ Watchtower " hreflang="mua" href="/mua/wol/h/r1066/lp-ou" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA NUUA INTERNET Watchtower" hreflang="otm" href="/otm/wol/h/r1065/lp-ote" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="kos" href="/kos/wol/h/r1062/lp-os" />
          <link rel="alternate" type="text/html" title="BIBLIOTEKË MÄ INTERNET Watchtower" hreflang="mco" href="/mco/wol/h/r106/lp-mx" />
          <link rel="alternate" type="text/html" title="Watchtower MAKTABA KWENYE MTANDAO" hreflang="rag" href="/rag/wol/h/r1057/lp-ol" />
          <link rel="alternate" type="text/html" title="FALETUHI INITANETI a te Olomatamata" hreflang="tkl" href="/tkl/wol/h/r1055/lp-oe" />
          <link rel="alternate" type="text/html" title="Watchtower BIIYAABKOONSING MZINʼIGNAN MAAWNJICHGEWIN" hreflang="otw" href="/otw/wol/h/r1054/lp-odw" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="crm-x-oc" href="/crm-x-oc/wol/h/r1051/lp-oc" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="mlu" href="/mlu/wol/h/r1049/lp-ob" />
          <link rel="alternate" type="text/html" title="प्रहरीधरहरा अनलाइन लाइब्रेरी " hreflang="new" href="/new/wol/h/r1046/lp-nw" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="ntu" href="/ntu/wol/h/r1044/lp-ntu" />
          <link rel="alternate" type="text/html" title="LAIBULALE YA PA INTANETI ya Watchtower" hreflang="nse-mz" href="/nse-mz/wol/h/r1042/lp-nsm" />
          <link rel="alternate" type="text/html" title="ᐗᒡᑕᐎᕒ ​ ᐃᓐᑎᕒᓀᑦ ​ ᒪᓯᓇᐃᑲᓃᑲᒥᒃ " hreflang="ojb-x-nos" href="/ojb-x-nos/wol/h/r1037/lp-nos" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nmk" href="/nmk/wol/h/r1032/lp-nmk" />
          <link rel="alternate" type="text/html" title="SIFALANA SA FA INTANETI sa Watchtower" hreflang="nka" href="/nka/wol/h/r1030/lp-nky" />
          <link rel="alternate" type="text/html" title="Wastaoa ONLINE LIBRARY" hreflang="pis" href="/pis/wol/h/r103/lp-sp" />
          <link rel="alternate" type="text/html" title="Torre de Vigia PAPERAITÁ INTERNET UPÉ" hreflang="yrl" href="/yrl/wol/h/r1025/lp-ngu" />
          <link rel="alternate" type="text/html" title="BIBLIOTƐKƐ TI YA INTERNET Watchtower" hreflang="ngb" href="/ngb/wol/h/r1022/lp-ngn" />
          <link rel="alternate" type="text/html" title="BIBLIOTHÈQUE GE INTERNET’G Watchtower" hreflang="sba" href="/sba/wol/h/r1019/lp-ng" />
          <link rel="alternate" type="text/html" title="LAIBULALE YA PA INTANETI ya Watchtower " hreflang="nse" href="/nse/wol/h/r1017/lp-nen" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="ndh" href="/ndh/wol/h/r1014/lp-ndl" />
          <link rel="alternate" type="text/html" title="Vòchtavör ÒNLĀIN LAËPRËRĪ" hreflang="caq" href="/caq/wol/h/r1010/lp-nc" />
          <link rel="alternate" type="text/html" title="Watchtower ONLINE LIBRARY" hreflang="nmq" href="/nmq/wol/h/r1009/lp-nb" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIYOTEKA ONLAYINI" hreflang="mny" href="/mny/wol/h/r1006/lp-myw" />
          <link rel="alternate" type="text/html" title="Watchtower BIBLIOTECA EN LÍNEA" hreflang="meh" href="/meh/wol/h/r1003/lp-mxt" />
          <link rel="alternate" type="text/html" title="BIBLIOTECA EN LÍNEA Watchtower" hreflang="xtd" href="/xtd/wol/h/r1001/lp-mxn" />
          <link rel="alternate" type="text/html" title="Күзәтү манарасының ОНЛАЙН-КИТАПХАНӘСЕ" hreflang="tt" href="/tt/wol/h/r100/lp-tat" />
      
          <script>
      var localizedNumbers = ["0","1"];
      window.VIDEOJS_NO_DYNAMIC_STYLE = true;
        </script>
  
  
  <input id="insightApi" type="hidden" value="https://b.jw-cdn.org/apis/insight/events" />

  <script src="/assets/js/+0+3b23965c032d57f4d3f2965f87b3740e2c650208.js"></script>

  </head>
<body class="showRuby cc-theme--light DynamicLayout">
<style id="scalableui"></style>
<script>
    if (window.Cookies != null) {
      // Apply user preferred font size
        // Doesn't apply to static pages, all of which don't scale text
      var fontScale = Cookies.get('fontScale');

      if (fontScale) {
        var scalableuiStyleContainer = document.getElementById('scalableui');
        var scalableuiStyleSheet = scalableuiStyleContainer.sheet;

        scalableuiStyleSheet.insertRule(
          '.scalableui{font-size:' + fontScale * 100 + '%;}',
          scalableuiStyleSheet.cssRules.length
        );
      }
    }
</script>
<div id="wrapper" class="dropShadow50">
  <input id="locale" type="hidden" value="es" />
<input id="tooltipContentErrorMessage" type="hidden" value="Por favor, haga clic aquí para abrir el documento." />
<input id="rsconf" type="hidden" value="r4" />
<input id="lib" type="hidden" value="lp-s" />
<input id="libLang" type="hidden" value="Español" />
<input id="libTitle" type="hidden" value="Publicaciones en español (1950-2024)" />
<input id="libDir" type="hidden" value="ltr" />
<input id="libLangSym" type="hidden" value="S" />
<input id="libLangScript" type="hidden" value="ROMAN" />
<input id="libLangIsSignLanguage" type="hidden" value="" />
<input id="libraryLocale" type="hidden" value="es" />
<input id="contentLocale" type="hidden" value="es" />
<input id="contentRsconf" type="hidden" value="r4" />
<input id="contentLib" type="hidden" value="lp-s" />
<input id="contentLibLang" type="hidden" value="Español" />
<input id="contentLibTitle" type="hidden" value="Publicaciones en español (1950-2024)" />
<input id="rubyAvailable" type="hidden" value="false" />
<input id="contentLibDir" type="hidden" value="ltr" />
<input id="contentLibLangSym" type="hidden" value="S" />
<input id="contentLibLangScript" type="hidden" value="ROMAN" />
<input id="contentLibLangIsSignLanguage" type="hidden" value="false" />
<input id="siteCookieDomain" type="hidden" value="wol.jw.org" />
<input id="audioMultiselect" type="hidden" value="" />
<input id="site" type="hidden" value="unified" />
<input id="updatedMediaPlayer" type="hidden" value="1" />

    <div id="regionHeader" class="chrome showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
    <div id="siteBanner">
    <div class="title">
        <a href="/es/wol/h/r4/lp-s">
            <span class="logo"><span class="icon"></span></span>
            <div class="ellipsized label">
                <span class="ellipsized titleBig">BIBLIOTECA EN LÍNEA Watchtower</span>
                <div class="ellipsized titleLittle siteTitleLine1">Watchtower</div>
                <div class="ellipsized titleLittle siteTitleLine2">BIBLIOTECA EN LÍNEA</div>
            </div>
        </a>
    </div>
          <div class="language">
            <a class="chrome librarySelectionLink spriteLink"
               data-lang="S" href="/es/wol/li/r4/lp-s">
                <span class="icon"></span>
                <span class="label">Español</span>
            </a>
        </div>
  </div>
    <div id="toolbarFrame">
    <div id="standardSearch" class="searchControl">
          <form class="searchForm" role="search" method="GET" action="/es/wol/qt/r4/lp-s">
  <div class="searchFieldContainer">
  <input type="hidden" id="st" name="st" />
  <input class="searchField"
           name="q"
           accept-charset="utf-8"
           type="text"
           title="Operadores de búsqueda: * = uno o más caracteres; ? = un carácter; &quot;&nbsp;&quot; = frase exacta; & = y; | = o; ! = no; () = agrupa combinaciones de palabras"
           aria-label="búsqueda de palabras o texto bíblico"
           placeholder="Introducir búsqueda"
           autocomplete="off"
           autocapitalize="off"
           autocorrect="off"
               autofocus="autofocus"
           spellcheck="false"
           maxlength="256"
           value=""/>
        <span class="searchFieldCancel"><span class="icon"></span></span>
      </div>
  <div class="searchControlContainer">
    <input type="hidden"
           name="p"
           value="par"/>
        <input type="hidden"
               name="r"
               value="occ"/>
        <input class="searchButton" type="submit" value="BUSCAR"/>
  </div>
  <div class="searchControlButtons">
    <button class="searchIcon menuButton" type="button" aria-label="buscar"><span class="icon"></span></button>
    <button class="closeIcon menuButton" type="button" aria-label="cancelar"><span class="icon"></span></button>
  </div>
    <div class="suggestions hidden"></div>
</form>
        </div>
    <div id="toolbarMenu">
        <ul class="menu" role="menu">
                      <li id="menuToolsPreferences" class="menuButton iconOnly menuRight" role="menuitem"
                    aria-label="configuración">
                    <a href="/es/wol/pref/r4/lp-s?url=%2Fes%2Fwol%2Fh%2Fr4%2Flp-s"
                       rel="nofollow"><span class="icon"></span>
                    </a>
                </li>
                        <li id="menuToolsShare" class="menuButton iconOnly menuRight"
              role="menuitem"
              aria-label="compartir">
            <a id="shareButton" class="shareButtonIcon hidden" href="#">
              <span class="icon"></span>
            </a>
          </li>
                      </ul>
    </div>
    <div id="menuHome" role="menuitem" class="showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
        <a href="/es/wol/h/r4/lp-s" aria-label="inicio">
            <span class="icon"></span>
        </a>
    </div>
    <div id="menuFrame">
        <ul id="menuBar" class="menu" role="menubar">
                                  <li id="menuBible" class="chrome menuButton showRuby ml-S ms-ROMAN dir-ltr" role="menuitem"
                        aria-label="Biblia" lang="es" data-lang="S" dir="ltr">
                        <a href="/es/wol/binav/r4/lp-s" role="menuitem"
                            aria-label="Biblia"><span class="icon"></span><span
                                    class="label">BIBLIA</span></a>
                    </li>
        
                <li id="menuPublications" class="chrome menuButton showRuby ml-S ms-ROMAN dir-ltr" role="menuitem"
                    aria-label="publicaciones" lang="es" data-lang="S" dir="ltr">
                    <a href="/es/wol/library/r4/lp-s/biblioteca" role="menuitem" 
                        aria-label="publicaciones"><span class="icon"></span>
                            <span class="label">PUBLICACIONES</span></a>
                </li>

                            <li id="menuToday" class="chrome menuButton showRuby ml-S ms-ROMAN dir-ltr" role="menuitem"
                        aria-label="reuniones" lang="es" data-lang="S" dir="ltr">
                        <a class="todayNav" href="/es/wol/meetings/r4/lp-s" role="menuitem"
                            aria-label="reuniones"><span class="icon"></span><span
                                    class="label">REUNIONES</span></a>
                    </li>
                                <li id="menuSearchHitNext"
                    class="chrome menuButton iconOnly menuRight hidden showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
                    <a href="#"><span class="icon"></span></a></li>
              </ul>
    </div>
</div>
            <input id="returnToLibrary" type="hidden" value="Regresar a {LibraryName}" />
    <div id="userStatus" class="hidden" data-library-color="">
        <div class="ellipsized currentLibrary">
            <a class="chrome librarySelectionLink spriteLink" data-lang="S"
               href="/es/wol/li/r4/lp-s">
                <span class="icon"></span>
                <span class="label ellipsized showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">Publicaciones en español (1950-2024)</span>
            </a>
            <div id="cookieLibrary">

            </div>
        </div>
        <div class="currentUser ellipsized">
            <a id="userStatusLabel" class="statusLabel" href="#">
                <span class="userName ellipsized"></span>
            </a>
            <div id="userControls" class="userControls hidden">
                                <span id="headerLogout" class="hidden">
              <a class="statusItem userLogoutLink" href="#">Cerrar sesión</a>                </span>
            </div>
        </div>
        <div id="headerLogin" class="hidden">
      <a class="statusButton userLoginLink" href="#">Iniciar sesión</a>        </div>
    </div>
          </div>

    <div id="regionMain" class="unified navLeft hasUserStatus showRuby ml-S ms-ROMAN dir-ltr " lang="es" data-lang="S" dir="ltr" >
              
<div id="documentCitationInformation">
    <div></div>
    <div></div>
</div>

<div id="content" class="content">
          <div id="banner" class="siteBanner showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
              </div>
        <article id="article" class="article home html5 jwac showRuby ml-S ms-ROMAN dir-ltr contentOnly" lang="es" data-lang="S" dir="ltr"             role="article">
      <div id="home" class="clearfix">
        <div id="welcome" class="noTooltips">
        <div class="welcomeContainer">
            <div class="siteTitle">BIBLIOTECA EN LÍNEA Watchtower</div>
            <div class="siteTitleLine1 light">Watchtower</div>
            <div class="siteTitleLine2 dark">BIBLIOTECA EN LÍNEA</div>
            <div class="siteGreeting">¡Bienvenido!</div>
            <div class="siteAbout">En esta página podrá consultar publicaciones de los testigos de Jehová en varios idiomas.</div>
            <div
                class="siteParentLink ">Para descargar publicaciones, visite <a href='https://www.jw.org/finder?wtlocale=S&docid=1011200' target='_blank'>jw.org</a>.</div>
        </div>
            </div>
    <div id="dailyText" class="scalableui dailyText docClass-4 ">
          <div id="todayNav" class="forwardBackNavControls" role="navigation">
        <nav>
              <div class="resultNavControls">
        <ul>
            <li  id="footerPrevDay" class="resultNavLeft  "><a href="/es/wol/h/r4/lp-s/2024/8/11" aria-label="día anterior"><span class="icon navContent"></span></a></li><li  id="navigationDailyTextToday" class="todayNav  "><a href="/es/wol/h/r4/lp-s"><span class="navContent">Hoy</span></a></li><li  id="footerNextDay" class="resultNavRight  "><a href="/es/wol/h/r4/lp-s/2024/8/13" aria-label="día siguiente"><span class="icon navContent"></span></a></li>        </ul>
    </div>
        </nav>
      </div>
           <div class="articlePositioner">
                <div class="tabContent" data-date="2024-08-11T00:00:00.000Z">
                      <header>
<h2 id="p32" data-pid="32">Domingo 11 de agosto</h2>
</header>
<p id="p33" data-pid="33" class="themeScrp"><em>Todas las naciones los odiarán por causa de mi nombre (</em><a href="/es/wol/bc/r4/lp-s/1102024207/43/0" data-bid="44-1" class="b"><em>Mat. 24:9</em></a><em>).</em></p>
<div class="bodyTxt">
<div id="section1" class="section">
<div class="pGroup">
<p id="p34" data-pid="34" class="sb">Ese odio demuestra que seguimos el ejemplo de Jesús y tenemos la aprobación de Jehová (<a href="/es/wol/bc/r4/lp-s/1102024207/44/0" data-bid="45-1" class="b">Mat. 5:11, 12</a>). El Diablo está detrás de toda esta oposición, pero él no es rival para Jesús. Con el apoyo de Cristo, el mensaje del Reino está llegando a personas de todas las naciones. Otro obstáculo que afrontamos en la predicación es la gran cantidad de idiomas que hay. En la visión que Jesús le dio al apóstol Juan, dio a entender que eso no impediría que se anunciaran las buenas noticias (<a href="/es/wol/bc/r4/lp-s/1102024207/45/0" data-bid="46-1" class="b">Apoc. 14:6, 7</a>). ¿Cómo hemos conseguido superar ese obstáculo? Poniendo a disposición del público en nuestro sitio web, jw.org, información bíblica en más de 1.000 idiomas. Además, el Cuerpo Gobernante ha dado permiso para que se traduzca a más de 700 idiomas nuestro principal manual para dar cursos bíblicos, el libro <em>Disfrute de la vida.</em> De este modo, más personas que nunca antes tienen la oportunidad de aceptar el mensaje del Reino. <a href="/es/wol/pc/r4/lp-s/1102024207/10/0"><em>w22.07</em> 9 párrs. 6, 7</a></p>
</div>
</div>
</div>
              <a href="/es/wol/d/r4/lp-s/1102024207?#h=32:0-35:0">Examinemos las Escrituras todos los días 2024</a>
              </div>
                        <div class="tabContent" data-date="2024-08-12T00:00:00.000Z">
                      <header>
<h2 id="p35" data-pid="35">Lunes 12 de agosto</h2>
</header>
<p id="p36" data-pid="36" class="themeScrp"><em>Con muchos consejeros las cosas salen bien (</em><a href="/es/wol/bc/r4/lp-s/1102024207/46/0" data-bid="47-1" class="b"><em>Prov. 11:14</em></a><em>).</em></p>
<div class="bodyTxt">
<div id="section1" class="section">
<div class="pGroup">
<p id="p37" data-pid="37" class="sb">Jesús se compadecía de la gente. El apóstol Mateo nos cuenta: “Cuando veía a las multitudes, se conmovía profundamente, porque estaban maltratadas y abandonadas como ovejas sin pastor” (<a href="/es/wol/bc/r4/lp-s/1102024207/47/0" data-bid="48-1" class="b">Mat. 9:36</a>). ¿Y cómo ve Jehová a las personas? Hablando de su Padre, Jesús dijo: “Él no desea que ni uno solo de estos pequeños se pierda” (<a href="/es/wol/bc/r4/lp-s/1102024207/48/0" data-bid="49-1" class="b">Mat. 18:14</a>). ¡Qué alegría nos da saber que Jehová nos quiere tanto! Cuando conocemos más a Jesús, nuestro amor por Jehová se hace más grande. Joven, hay algo más que puedes hacer para que tu amor por Jehová crezca y progreses espiritualmente. ¿Qué es? Hacerte amigo de hermanos y hermanas maduros de tu congregación. Fíjate en que estos hermanos siempre están contentos. No se arrepienten de haber decidido servirle a Jehová. Pídeles que te cuenten algunas experiencias que han tenido. Y, cuando tengas que tomar una decisión importante, habla con ellos para que te den algún consejo. Con razón dice la Biblia: “Con muchos consejeros las cosas salen bien”. <a href="/es/wol/pc/r4/lp-s/1102024207/11/0"><em>w22.08</em> 3 párrs. 6, 7</a></p>
</div>
</div>
</div>
              <a href="/es/wol/d/r4/lp-s/1102024207?#h=35:0-38:0">Examinemos las Escrituras todos los días 2024</a>
              </div>
                        <div class="tabContent" data-date="2024-08-13T00:00:00.000Z">
                      <header>
<h2 id="p38" data-pid="38"><span id="page82" class="pageNum" aria-hidden="true" data-no="82" data-before-text="82"></span>Martes 13 de agosto</h2>
</header>
<p id="p39" data-pid="39" class="themeScrp"><em>Los ojos de Jehová están puestos en los justos (</em><a href="/es/wol/bc/r4/lp-s/1102024207/49/0" data-bid="50-1" class="b"><em>1 Ped. 3:12</em></a><em>).</em></p>
<div class="bodyTxt">
<div id="section1" class="section">
<div class="pGroup">
<p id="p40" data-pid="40" class="sb">Todos afrontaremos alguna prueba. Pero jamás tendremos que hacerlo solos. Igual que un padre cariñoso, Jehová siempre está pendiente de nosotros. Él está a nuestro lado, listo para escucharnos cuando le rogamos que nos ayude y para darnos su apoyo (<a href="/es/wol/bc/r4/lp-s/1102024207/50/0" data-bid="51-1" class="b">Is. 43:2</a>). Estamos convencidos de que podemos afrontar las dificultades porque Jehová nos da a manos llenas todo lo que necesitamos para aguantar: la oración, la Biblia, abundante alimento espiritual y una hermandad que nos trata con amor. Estamos muy agradecidos de tener un Padre celestial que está atento a nosotros. “Él es la alegría de nuestro corazón” (<a href="/es/wol/bc/r4/lp-s/1102024207/51/0" data-bid="52-1" class="b">Sal. 33:21</a>). ¿Cómo podemos demostrarle a Jehová que agradecemos que nos cuide con cariño? Aprovechando al máximo todas las ayudas que nos da. Para que Jehová nos siga cuidando, también tenemos que poner de nuestra parte. Debemos esforzarnos siempre por obedecerle y por hacer lo que él considera que está bien. Si lo hacemos, él estará pendiente de nosotros por toda la eternidad. <a href="/es/wol/pc/r4/lp-s/1102024207/12/0"><em>w22.08</em> 13 párrs. 15, 16</a></p>
</div>
</div>
</div>
              <a href="/es/wol/d/r4/lp-s/1102024207?#h=38:0-41:0">Examinemos las Escrituras todos los días 2024</a>
              </div>
               </div>
    </div>
    <div id="noDailyText">
            <div class="welcomeContainer">
                <div class="siteGreeting">¡Bienvenido!</div>
                <div class="siteAbout">En esta página podrá consultar publicaciones de los testigos de Jehová en varios idiomas.</div>
                <div class="siteParentLink">Para descargar publicaciones, visite <a href='https://www.jw.org/finder?wtlocale=S&docid=1011200' target='_blank'>jw.org</a>.</div>
            </div>
    </div>
</div>
<input type="hidden" id="hasRuby" value="false" />
<input type="hidden" id="isRuby" value="false" />
<input type="hidden" id="shareBaseUrl" value="https://www.jw.org/finder?wtlocale=S&alias=daily-text&date=2024-08-12&srctype=wol&srcid=share"/>
<input type="hidden" id="shareType" value="daily-text"/>
<input type="hidden" id="contentTitle" value="Programa semanal" />
<input type="hidden" id="contentThumbnail" value="/wol/publication/r4/lp-s/es24/thumbnail" />
<input type="hidden" id="todayDate" value=""/>
<input type="hidden" id="availableData" value="2024-08-10,2024-08-11,2024-08-12,2024-08-13,2024-08-14"/>
        </article>
    </div>
    </div>

    <div id="regionFooter" class="chrome showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
            <div id="contentFooterNavigation" role="navigation"
         class=" showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
        <ul class="contentFooterIcons" role="menubar" class="chrome">
            <li id="libraryTitle"
                class="chrome"
                role="menuitem"
        lang="es" data-lang="S" dir="ltr">
                <a class="spriteLink"
                   data-lang="S"
                   href="/es/wol/li/r4/lp-s">
                    <span class="icon"></span>
                    <span class="label">Español</span>
                </a>
            </li>

                      <li id="contentFooterShare" role="menuitem" aria-label="compartir">
              <a id="shareButtonFooter" class="shareButtonFooterIcon spriteLink hidden" href="#">
                <span class="icon"></span>
                <span class="label">Compartir</span>
              </a>
            </li>
          
            <li id="contentFooterPreferences" role="menuitem" aria-label="configuración">
                <a class="spriteLink" href="/es/wol/pref/r4/lp-s?url=%2Fes%2Fwol%2Fh%2Fr4%2Flp-s" rel="nofollow">
                    <span class="icon"></span>
                    <span class="label">Configuración</span>
                </a>
            </li>
        </ul>
    </div>

<div id="contentFooterLegal" class=" showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
    <ul class="contentFooterList" role="menubar">
        <li class="showRuby ml-E ms-ROMAN dir-ltr" lang="en" data-lang="E" dir="ltr">
                      <a href="https://www.jw.org/finder?prefer=content&wtlocale=S&docid=1011511"
                   target="_blank">Copyright</a>
                  &copy;&nbsp;2024&nbsp;Watch Tower Bible and Tract Society of Pennsylvania        </li>
                    <li>
                <a href="https://www.jw.org/finder?prefer=content&wtlocale=S&docid=1011511"
                   target="_blank">Condiciones de uso</a>
            </li>
            <li>
                <a href="https://www.jw.org/finder?prefer=content&wtlocale=S&docid=1011512"
                   target="_blank">Política de privacidad</a>
            </li>
                    <li>
                <a href="https://www.jw.org/finder?prefer=content&wtlocale=S&docid=1011512"
                   id="privacySettingsButton"
                   class="hidden"
                   target="_blank">Configuración de privacidad</a>
            </li>
                    <li id="jworg" role="menuitem" aria-label="jw.org">
                <a id="jworgLogo" class="spriteLink" target="_blank" href="https://www.jw.org/finder?wtlocale=S&docid=1011200">
                    <span class="icon"></span>
                    <span class="label">JW.ORG</span>
                </a>
            </li>
                        <li id="footerLogin" class="clickable hidden">
        <a class="statusButton userLoginLink" href="#">Iniciar sesión</a>            </li>
                        </ul>
    </div>
    </div>

    <div id="dialogContainer" class=" showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr"></div>
    <div id="modalUnderlayContainer" class="underlay" tabindex="-1"></div>
    <div id="underlayContainer" class="underlay" touch-action="none"></div>

  <!-- share dialog -->
  <input type="hidden" id="mobileNativeShare" value=""/>
  <div class="jwac showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
    <div id="shareForm" class="hidden">
      <div>
        <div class="header chrome">
          Compartir         <div class="closeBtn" aria-label="cerrar" onclick="app.modal.removeModals();">
            <span class="icon"></span>
          </div>
        </div>
        <form class="content">
          <div class="shareFormWrapper">
            <div>
              <img class="sharePublicationImage" />
            </div>
            <div class="shareInfoContainer">
              <div class="jwac showRuby ml-S ms-ROMAN dir-ltr" lang="es" data-lang="S" dir="ltr">
                <div class="shareContentParentTitle"></div>
                <div class="shareContentTitle"></div>
              </div>
              <input id="shareLink" class="shareLink" type="text" readonly
                   dir="ltr" />
              <button type="button" class="grayButton small shareCopyButton"
                  aria-label="copiar"
                  onClick="app.utilities.copyToClipboard(document.getElementById('shareLink').value)">
                <span class="icon"></span>
              </button>
              <div class="shareButtonContainer">
                <button type="button" class="grayButton shareMailButton" onClick="app.share.sendEmail();">
                  <span class="icon"></span>
                  Compartir por e-mail                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- end share dialog -->
</div>

<input type="hidden" id="newMeetingsPage" value="yes"/>


<script src="https://b.jw-cdn.org/code/media-player/v3.0.0/js/media-player.min.js"></script>
<script src="https://wol.jw.org/assets/js/+1+32b2df3c1e53018e83d7dccb491a6767060086eb.js"></script>
<script src="https://wol.jw.org/assets/js/+2+65fd71e30875e1cca0aa8be60ee106d65c415d9a.js"></script>

</body>
</html>

   `;
    editor.setValue(code); // Establece el valor del editor con el código
    editor.gotoLine(1); // Coloca el cursor en la primera línea
  });

document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});


