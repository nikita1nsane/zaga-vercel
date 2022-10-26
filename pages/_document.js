import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <Script src='../site.app/js/script.js' />
      <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css" />
      <script  src="https://cdn.envybox.io/widget/cbk.js?wcb_code=28a0edc6c810daeee957d810ee8c11d7" />
      <script dangerouslySetInnerHTML={{ __html: `   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(88105763, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
        });` }} />
       <script dangerouslySetInnerHTML={{ __html: `    (function(w, d, u, i, o, s, p) {
                if (d.getElementById(i)) { return; } w['MangoObject'] = o;
                w[o] = w[o] || function() { (w[o].q = w[o].q || []).push(arguments) }; w[o].u = u; w[o].t = 1 * new Date();
                s = d.createElement('script'); s.async = 1; s.id = i; s.src = u;
                p = d.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
            }(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo'));
            mgo({calltracking: {id: 25928, elements: [{"numberText":"78005004017"}], domain: 'zaga-game.ru'}});` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w, d, s, h, id) {
                w.roistatProjectId = id; w.roistatHost = h;
                var p = d.location.protocol == "https:" ? "https://" : "http://";
                var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
            })(window, document, 'script', 'cloud.roistat.com', 'e93195711029017594b103c04e93e963');` }} />
        <script type="bogus" class="js-whatsapp-message-container" dangerouslySetInnerHTML={{ __html: `Обязательно отправьте это сообщение и получите коммерческое предложение. Ваш номер: {roistat_visit}` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function() {
    if (window.roistat !== undefined) {
        handler();
    } else {
        var pastCallback = typeof window.onRoistatAllModulesLoaded === "function" ? window.onRoistatAllModulesLoaded : null;
        window.onRoistatAllModulesLoaded = function () {
            if (pastCallback !== null) {
                pastCallback();
            }
            handler();
        };
    }

    function handler() {
        function init() {
            appendMessageToLinks();

            var delays = [1000, 5000, 15000];
            setTimeout(function func(i) {
                if (i === undefined) {
                    i = 0;
                }
                appendMessageToLinks();
                i++;
                if (typeof delays[i] !== 'undefined') {
                    setTimeout(func, delays[i], i);
                }
            }, delays[0]);
        }

        function replaceQueryParam(url, param, value) {
            var explodedUrl = url.split('?');
            var baseUrl = explodedUrl[0] || '';
            var query = '?' + (explodedUrl[1] || '');
            var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
            var queryWithoutParameter = query.replace(regex, "$1").replace(/&$/, '');
            return baseUrl + (queryWithoutParameter.length > 2 ? queryWithoutParameter  + '&' : '?') + (value ? param + "=" + value : '');
        }

        function appendMessageToLinks() {
            var message = document.querySelector('.js-whatsapp-message-container').text;
            var text = message.replace(/{roistat_visit}/g, window.roistatGetCookie('roistat_visit'));
            text = encodeURI(text);
            var linkElements = document.querySelectorAll('[href*="//wa.me"], [href*="//api.whatsapp.com/send"], [href*="//web.whatsapp.com/send"], [href^="whatsapp://send"]');
            for (var elementKey in linkElements) {
                if (linkElements.hasOwnProperty(elementKey)) {
                    var element = linkElements[elementKey];
                    element.href = replaceQueryParam(element.href, 'text', text);
                }
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    };
})();` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}