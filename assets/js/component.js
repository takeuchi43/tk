window.TEMPLATE = {};
var loader = '<div id="loader"><div><p></p><p class="bg"></p></div></div>';
var scroll = '<div id="scroll"><ul><li>SCROLL</li><li><div></div></li></ul></div>';
var modal = '<div data-type="modal"><div><ul><li class="header"><span></span><a></a></li><li class="body"></li></ul></div></div>';

var ja = {};
header = '\
<ul class="wrap">\
  <li class="main">\
    <div data-type="header-frame">\
      <a class="thumb">\
        <span></span>\
        <span></span>\
        <span></span>\
      </a>\
      <a class="logo" href="./"></a>\
      <nav>\
        <a data-category="train">車内のご紹介</a>\
        <a data-category="course">旅の行程のご紹介</a>\
        <a data-category="application">資料請求・旅のお申し込み</a>\
        <a href="./goods001.html">オリジナル商品のご案内</a>\
        <a data-category="story">連載コラム</a>\
        <a data-category="omotenashi" href="./omotenashi.html">地域をつなぐ懸け橋に。</a>\
      </nav>\
      <ul class="font">\
        <li>\
          <a data-font-size="m">A</a>\
          <a data-font-size="l">A</a>\
        </li>\
      </ul>\
      <ul class="lang">\
        <li>\
          <a href="/shiki-shima/">\
            <span data-view="pc">JP</span>\
            <span data-view="sp">JP</span>\
          </a>\
          <a href="/shiki-shima/en">\
            <span data-view="pc">EN</span>\
            <span data-view="sp">EN</span>\
          </a>\
        </li>\
      </ul>\
    </div>\
  </li>\
  <li class="sub">\
    <div data-type="frame">\
      <h3 data-view="sp" class="link"><a href="./">HOME</a></h3>\
      <h3>車内のご紹介</h3>\
      <nav data-category="train">\
        <a href="./train.html">車内のご紹介トップ</a>\
        <ul>\
          <li><a href="./lounge.html">LOUNGE こもれび（５号車）</a><br /></li>\
          <li><a href="./dining.html">DINING しきしま（６号車）</a><br /></li>\
          <li><a href="./shikishima_suite.html">四季島スイート（７号車）</a><br /></li>\
          <li><a href="./dx_suite.html">デラックススイート（７号車）</a><br /></li>\
          <li><a href="./suite.html">スイート（２・３・４・８・９号車）</a><br /></li>\
          <li><a href="./view_terrace.html">VIEW TERRACE きざし・いぶき（１・１０号車）</a><br /></li>\
          <li><a href="./craft.html">Feel SHIKI-SHIMA<br /><font size="2">〜車内搭載工芸品のご紹介〜</font></a><br /></li>\
          <li><a href="./crew.html">｢TRAIN SUITE 四季島｣スタッフ</a><br /></li>\
        </ul>\
      </nav>\
      <h3>旅の行程のご紹介</h3>\
      <nav data-category="course">\
        <a href="./course.html">旅の行程のご紹介トップ</a>\
        <ul>\
          <li>\
            <a href="./prologue.html">PROLOGUE 四季島</a><br />\
          </li>\
          <li>\
            <h4>2024年度のコースのご紹介</h4>\
            <a href="./2024course1201.html">1泊2日コース（山梨）/春（4〜6月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./2024course1202.html">1泊2日コース（長野）/秋（10・11月出発）&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" /></a><br />\
            <a href="./2024course34.html">3泊4日コース/春・秋（4・5月、9〜11月出発）&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" /></a><br />\
            <h4>2023年度運行中のコースのご紹介</h4>\
            <a href="./2022course1201.html">1泊2日コース（山梨）/春〜秋（4・5・10・11月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./2022course1202.html">1泊2日コース（長野）/春〜秋（6〜9月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./2022course34.html">3泊4日コース/春〜秋（4〜11月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./course12new.html">1泊2日コース/冬<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./course23new.html">2泊3日コース/冬<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
            <a href="./pdf/course_sp2024spring.pdf" target="_blank">「東日本の旬」コース（早春の2泊3日）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" />--></a><br />\
          </li>\
          <li>\
            <h4>これまで運行したコースのご紹介</h4>\
            <a href="./pdf/5thcourse.pdf" target="_blank">「TRAIN SUITE 四季島」運行5周年・<br />鉄道開業150年記念2泊3日コース</a><br />\
            <a href="./course12.html">1泊2日コース/春～秋</a><br />\
            <a href="./course3401.html">3泊4日コース/春〜夏</a><br />\
            <a href="./course3402.html">3泊4日コース/秋</a><br />\
            <a href="./course23.html">2泊3日コース/冬</a><br />\
            <a href="./course_higashinihon.html">｢東日本の旬｣コース</a><br />\
          </li>\
        </ul>\
      </nav>\
      <h3>資料請求・旅のお申し込み</h3>\
      <nav data-category="application">\
        <ul>\
          <li>\
            <a href="./request.html">資料請求</a><br />\
          </li>\
          <li>\
            <a href="/shiki-shima/application.html">旅のお申し込み&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /><img src="./img/icon_recruiting_jps.png" data-view="sp" /></a><br />\
          </li>\
        </ul>\
      </nav>\
      <h3 class="link"><a href="./goods001.html">オリジナル商品のご案内</a></h3>\
      <h3>連載コラム</h3>\
      <nav data-category="story">\
        <a>連載コラム</a>\
        <ul>\
          <li>\
            <a href="./story.html">｢TRAIN SUITE 四季島｣を支える想い</a><br />\
          </li>\
          <li>\
            <a href="./diary.html">四季島ダイアリー</a><br />\
          </li>\
          <li></li>\
        </ul>\
      </nav>\
      <h3 class="link"><a href="./omotenashi.html">地域をつなぐ懸け橋に。</a>\</h3>\
      <div class="other">\
        <a href="./concept.html">コンセプト</a>\
        <a href="./member.html">プロジェクトメンバー</a>\
        <a href="./topics.html">トピックス</a>\
        <a href="./faq.html">よくあるお問い合わせ</a>\
        <br /><br /><a href="./archive.html">アーカイブ</a>\<a href="./safe.html">「TRAIN SUITE 四季島」に安心してご乗車いただくために</a>\<a href="https://instagram.com/shikishima_official?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">公式ソーシャルメディア｜<img src="./img/icon_insta_k.png" height="12" data-view="sp" />&nbsp;Instagram</a>\
        <a class="close">閉じる</a>\
      </div>\
    </div>\
  </li>\
  <li class="wall"></li>\
</ul>\
';

ja.footer = '\
<ul class="wrap">\
  <li class="free">\
    <div data-type="frame">\
      <a class="qa" href="./faq.html">よくあるお問い合わせ</a><br /><br /><div style="text-align:center;"><a href="#">PAGE TOP　&#9653;</a></div>\
    </div>\
  </li>\
  <li class="breadcrumb">\
    <div data-type="frame">\
    </div>\
  </li>\
  <li class="main">\
    <div data-type="frame">\
      <ul>\
        <li>\
          <a href="./train.html" data-type="title-link">車内のご紹介</a><br />\
          <a href="./lounge.html">LOUNGE こもれび（５号車）</a><br />\
          <a href="./dining.html">DINING しきしま（６号車）</a><br />\
          <a href="./shikishima_suite.html">四季島スイート（７号車）</a><br />\
          <a href="./dx_suite.html">デラックススイート（７号車）</a><br />\
          <a href="./suite.html">スイート（２・３・４・８・９号車）</a><br />\
          <a href="./view_terrace.html">VIEW TERRACE きざし・いぶき（１・１０号車）</a><br />\
          <a href="./craft.html">Feel SHIKI-SHIMA 〜車内搭載工芸品のご紹介〜</a><br />\
          <a href="./crew.html">｢TRAIN SUITE 四季島｣スタッフ</a><br />\
        </li>\
        <li>\
          <a href="./course.html" data-type="title-link">旅の行程のご紹介</a><br />\
          <a href="./prologue.html">PROLOGUE 四季島</a><br />\
          <div>\
            <h4>2024年度のコースのご紹介</h4>\
            <a href="./2024course1201.html">1泊2日コース（山梨）/春（4〜6月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./2024course1202.html">1泊2日コース（長野）/秋（10・11月出発）&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /></a><br />\
            <a href="./2024course34.html">3泊4日コース/春・秋（4・5月、9〜11月出発）&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" /></a><br />\
          </div>\
          <div>\
            <h4>2023年度運行中のコースのご紹介</h4>\
            <a href="./2022course1201.html">1泊2日コース（山梨）/春〜秋（4・5・10・11月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./2022course1202.html">1泊2日コース（長野）/春〜秋（6〜9月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./2022course34.html">3泊4日コース/春〜秋（4〜11月出発）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./course12new.html">1泊2日コース/冬<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./course23new.html">2泊3日コース/冬<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
            <a href="./pdf/course_sp2024spring.pdf" target="new">「東日本の旬」コース（早春の2泊3日）<!--&nbsp;&nbsp;<img src="./img/icon_recruiting_jps.png" data-view="pc" />--></a><br />\
          </div>\
        </li>\
        <li>\
          <h3>資料請求・旅のお申し込み</h3>\
          <a data-type="box" href="./request.html">資料請求</a>\
          <a data-type="box" href="./application.html">旅のお申し込み</a>\
        </li>\
      </ul>\
      <ul>\
        <li>\
          <a href="./goods001.html" data-type="title-link">オリジナル商品のご案内</a><br />\
        </li>\
        <li>\
          <h3>連載コラム</h3>\
          <a href="./story.html">｢TRAIN SUITE 四季島｣を支える想い</a><br />\
          <a href="./diary.html">四季島ダイアリー</a>\
        </li>\
        <li>\
          <a href="./omotenashi.html" data-type="title-link">地域をつなぐ懸け橋に。</a>\
        </li>\
      </ul>\
      <div class="other">\
        <a href="./concept.html">コンセプト</a>\
        <a href="./member.html">プロジェクトメンバー</a>\
        <a href="./topics.html">トピックス</a>\
        <a href="./faq.html">よくあるお問い合わせ</a>\
        <br /><br /><a href="./archive.html">アーカイブ</a>\<a href="./safe.html">「TRAIN SUITE 四季島」に安心してご乗車いただくために</a>\<a href="https://instagram.com/shikishima_official?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">公式ソーシャルメディア｜<img src="./img/icon_insta_w.png" height="12" data-view="pc" />&nbsp;Instagram</a>\
      </div>\
      <div class="banner" id="tourdesk">\
          <img data-view="pc" src="./img/footerbanner.jpg" />\
          <a href="tel:0570-00-7216" data-view="sp"><img src="./img/footerbannersp.jpg" /></a>\
      </div>\
    </div>\
  </li>\
  <li class="copyright">\
    <div data-type="frame">\
      <span>Copyright © East Japan Railway Company All Rights Reserved.</span>\
    </div>\
  </li>\
</ul>\
';


ja.banner = '\
<aside id="banner" style="border-left: solid 3px #897400; background-color: #F7F6F0;">\
  <a href="/shiki-shima/application.html">\
    <div data-view="pc" style="background-color: #F7F6F0;"><figure data-preload="true" style="background-image: url(./img/bannerpc.jpg);"></figure></div>\
    <div data-view="sp" style="background-color: #897400;"><figure data-preload="true" style="background-image: url(./img/bannersp.jpg);"></figure></div>\
  </a>\
</aside>\
';

ja.loader = loader;
ja.scroll = scroll;
ja.modal = modal;
ja.top = {
/*
  banner: {
//    from: '2020-05-14 16:15',
//    to: '2022-05-14 18:30',
    target: '_blank',
    link: '/shiki-shima/pdf/tohoku2021.pdf',
    pc: ['./img/top/modalpc.png'],
    sp: ['./img/top/modalsp.png'],
  },
*/
};

ja.course = {
/*
  annotation: {
    show: ['course12new.html', 'course23new.html'],
    html: '\
<section data-type="annotation">\
  <div data-type="frame">\
    <small>ただいまの時期は、お申し込み受け付けは行っておりません。</small>\
  </div>\
</section>\
'
  },
*/
};


var en = {};
en.header = '\
<ul class="wrap">\
  <li class="main">\
    <div data-type="header-frame">\
      <a class="thumb">\
        <span></span>\
        <span></span>\
        <span></span>\
      </a>\
      <a class="logo" href="./"></a>\
      <nav>\
        <a data-category="train">Train</a>\
        <a data-category="course">Your journey on TRAIN SUITE SHIKI-SHIMA</a>\
        <a data-category="application" href="./application.html">Trip Application</a>\
      </nav>\
      <ul class="font">\
        <li>\
          <a data-font-size="m">A</a>\
          <a data-font-size="l">A</a>\
        </li>\
      </ul>\
      <ul class="lang">\
        <li>\
          <a href="/shiki-shima/">\
            <span data-view="pc">JP</span>\
            <span data-view="sp">JP</span>\
          </a>\
          <a href="/shiki-shima/en">\
            <span data-view="pc">EN</span>\
            <span data-view="sp">EN</span>\
          </a>\
        </li>\
      </ul>\
    </div>\
  </li>\
  <li class="sub">\
    <div data-type="frame">\
      <h3 data-view="sp" class="link"><a href="./">HOME</a></h3>\
      <h3>Train</h3>\
      <nav data-category="train">\
        <a href="./train.html">Train</a>\
        <ul>\
          <li><a href="./lounge.html">Lounge Komorebi [Car 5]</a><br /></li>\
          <li><a href="./dining.html">Dining SHIKI-SHIMA [Car 6]</a><br /></li>\
          <li><a href="./shikishima_suite.html">SHIKI-SHIMA Suite Room [Car 7]</a><br /></li>\
          <li><a href="./dx_suite.html">Deluxe Suite Room [Car 7]</a><br /></li>\
          <li><a href="./suite.html">Suite Room [Car 2, 3, 4, 8, 9]</a><br /></li>\
          <li><a href="./view_terrace.html">View Terrace Kizashi/Ibuki [Car 1, 10]</a><br /></li>\
          <li><a href="./craft.html">Feel SHIKI-SHIMA</a><br /></li>\
          <li><a href="./crew.html">Staff of SHIKI-SHIMA</a><br /></li>\
        </ul>\
      </nav>\
      <h3>Your journey on TRAIN SUITE SHIKI-SHIMA</h3>\
      <nav data-category="course">\
        <a href="./course.html">Your journey on TRAIN SUITE SHIKI-SHIMA</a>\
        <ul>\
          <li>\
            <a href="./prologue.html">Prologue SHIKI-SHIMA</a><br />\
          </li>\
          <li>\
            <h4>Courses in 2024</h4>\
            <a href="./2024course1201.html">2-Day/1-Night Trip (Yamanashi), Spring<br />(departing from April through June)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
            <a href="./2024course1202.html">2-Day/1-Night Trip (Nagano), Autumn<br />(departing in Oct. and Nov.)&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" /></a><br />\
            <a href="./2024course34.html">4-Day/3-Night Trip Spring, Autumn<br />(departing in Apr. and May, Sep. to Nov.)&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" /></a><br />\
            <h4>Courses in operation in 2023</h4>\
            <a href="./2022course1201.html">2-Day/1-Night Trip (Yamanashi), Spring - Autumn<br />(departing in April, May, October and Nobember)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
            <a href="./2022course1202.html">2-Day/1-Night Trip (Nagano), Spring-Autumn<br />(departing from April through September)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
            <a href="./2022course34.html">4-Day/3-Night Trip Spring-Autumn<br />(departing from April through November)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
            <a href="./course12new.html">2-Day/1-Night Trip Winter<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
            <a href="./course23new.html">3-Day/2-Night Trip Winter<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /><img src="../img/icon_recruiting_ens.png" data-view="sp" />--></a><br />\
          </li>\
          <li>\
            <h4>Previous courses</h4>\
            <a href="./course12.html">2-Day/1-Night Trip Spring - Autumn</a><br />\
            <a href="./course3401.html">4-Day/3-Night Trip Spring-Summer</a><br />\
            <a href="./course3402.html">4-Day/3-Night Trip Autumn</a><br />\
            <a href="./course23.html">3-Day/2-Night Trip Winter</a><br />\
            <a href="./course_higashinihon.html">“Seasons of Eastern Japan” Trip</a><br />\
          </li>\
        </ul>\
      </nav>\
      <h3 class="link"><a href="./application.html">Trip Application</a></h3>\
      <div class="other">\
        <a href="./concept.html">Concept</a>\
        <a href="./member.html">Project Member</a>\
        <a href="./topics.html">News</a>\
        <a href="./safe.html">For your safety</a>\
        <a class="close">Close</a>\
      </div>\
    </div>\
  </li>\
  <li class="wall"></li>\
</ul>\
';
en.footer = '\
<ul class="wrap">\
  <li class="free">\
      <div style="text-align:center;"><a href="#">PAGE TOP　&#9653;</a></div>\
  </li>\
  <li class="breadcrumb">\
    <div data-type="frame">\
    </div>\
  </li>\
  <li class="main">\
    <div data-type="frame">\
      <ul>\
        <li>\
          <a href="./train.html" data-type="title-link">Train</a><br />\
          <a href="./lounge.html">Lounge Komorebi [Car 5]</a><br />\
          <a href="dining.html">Dining SHIKI-SHIMA [Car 6]</a><br />\
          <a href="./shikishima_suite.html">SHIKI-SHIMA Suite Room [Car 7]</a><br />\
          <a href="./dx_suite.html">Deluxe Suite Room [Car 7]</a><br />\
          <a href="./suite.html">Suite Room [Car 2, 3, 4, 8, 9]</a><br />\
          <a href="./view_terrace.html">View Terrace Kizashi/Ibuki [Car 1, 10]</a><br />\
          <a href="./craft.html">Feel SHIKI-SHIMA</a><br />\
          <a href="./crew.html">Staff of SHIKI-SHIMA</a><br />\
        </li>\
        <li>\
          <a href="./course.html" data-type="title-link">Your Journey on TRAIN SUITE SHIKI-SHIMA</a><br />\
          <a href="./prologue.html">Prologue SHIKI-SHIMA</a><br />\
          <div>\
            <h4>Courses in 2024</h4>\
            <a href="./2024course1201.html">2-Day/1-Night Trip (Yamanashi), Spring<br />(departing from April through June)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
            <a href="./2024course1202.html">2-Day/1-Night Trip (Nagano), Autumn<br />(departing in Oct. and Nov.)&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /></a><br />\
            <a href="./2024course34.html">4-Day/3-Night Trip Spring, Autumn<br />(departing in Apr. and May, Sep. to Nov.)&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" /></a><br />\
          </div>\
          <div>\
            <h4>Courses in operation in 2023</h4>\
            <a href="./2022course1201.html">2-Day/1-Night Trip (Yamanashi), Spring - Autumn<br />(departing in April, May, October and Nobember)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
            <a href="./2022course1202.html">2-Day/1-Night Trip (Nagano), Spring-Autumn<br />(departing from April through September)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
            <a href="./2022course34.html">4-Day/3-Night Trip Spring-Autumn<br />(departing from April through November)<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
            <a href="./course12new.html">2-Day/1-Night Trip Winter<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
            <a href="./course23new.html">3-Day/2-Night Trip Winter<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
          </div>\
          <div>\
            <h4>Previous courses</h4>\
            <a href="./course12.html">2-Day/1-Night Trip Spring - Autumn</a><br />\
            <a href="./course3401.html">4-Day/3-Night Trip Spring-Summer</a><br />\
            <a href="./course3402.html">4-Day/3-Night Trip Autumn</a><br />\
            <a href="./course23.html">3-Day/2-Night Trip Winter</a><br />\
            <a href="./course_higashinihon.html">“Seasons of Eastern Japan” Trip</a><br />\
          </div>\
        </li>\
        <li>\
          <div>\
          <a href="./application.html" data-type="title-link">Trip Application<!--&nbsp;&nbsp;<img src="../img/icon_recruiting_ens.png" data-view="pc" />--></a><br />\
          </div>\
        </li>\
      </ul>\
      <div class="other">\
        <a href="./concept.html">Concept</a>\
        <a href="./member.html">Project Member</a>\
        <a href="./topics.html">News</a>\
        <a href="./safe.html">For your safety</a>\
      </div>\
    </div>\
  </li>\
  <li class="copyright">\
    <div data-type="frame">\
      <span>Copyright © East Japan Railway Company All Rights Reserved.</span>\
    </div>\
  </li>\
</ul>\
';

en.banner = '\
<aside id="banner" style="border-left: solid 3px #897400; background-color: #F7F6F0;">\
  <a href="./application.html">\
    <div data-view="pc" style="background-color: #F7F6F0;"><figure data-preload="true" style="background-image: url(../img/bannerpcen.jpg);"></figure></div>\
    <div data-view="sp" style="background-color: #897400;"><figure data-preload="true" style="background-image: url(../img/bannerspen.jpg);"></figure></div>\
  </a>\
</aside>\
';

en.loader = loader;
en.scroll = scroll;
en.modal = modal;
en.top = {
/*
  banner: {
//    from: '2020-05-14 16:15',
//    to: '2020-05-14 18:00',
    target: '_blank',
    link: '/shiki-shima/pdf/tohoku2021en.pdf',
    pc: ['/shiki-shima/img/top/modalpcen.png'],
    sp: ['/shiki-shima/img/top/modalspen.png'],
  },
*/
};

en.course = {
/*
  annotation: {
    show: ['course12new.html', 'course23new.html'],
    html: '\
<section data-type="annotation">\
  <div data-type="frame">\
    <small>Currently, we are not accepting applications for Train Suite Shikishima.</small>\
  </div>\
</section>\
'
  },
*/
};

window.TEMPLATE.ja = ja;
window.TEMPLATE.en = en;


window.BREADCRUMB = {
  ja: {
    top: [['HOME']],
    train: [['HOME', './'], ['車内のご紹介']],
    lounge: [['HOME', './'], ['車内のご紹介', './train.html'], ['LOUNGE こもれび（5号車）']],
    dining: [['HOME', './'], ['車内のご紹介', './train.html'], ['DINING しきしま（6号車）']],
    shikishima_suite: [['HOME', './'], ['車内のご紹介', './train.html'], ['四季島スイート（7号車）']],
    dx_suite: [['HOME', './'], ['車内のご紹介', './train.html'], ['デラックススイート（7号車）']],
    suite: [['HOME', './'], ['車内のご紹介', './train.html'], ['スイート（2･3･4･8･9号車）']],
    view_terrace: [['HOME', './'], ['車内のご紹介', './train.html'], ['VIEW TERRACE きざし・いぶき（1･10号車）']],
    crew: [['HOME', './'], ['車内のご紹介', './train.html'], ['｢TRAIN SUITE 四季島｣スタッフ']],
    course: [['HOME', './'], ['旅の行程のご紹介']],
    prologue: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['PROLOGUE 四季島']],
    course12new: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['1泊2日コース/冬']],
    course23new: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['2泊3日コース/冬']],
    course34_1: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['3泊4日コース/春〜夏']],
    course34_2: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['3泊4日コース/秋']],
    course12: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['1泊2日コース/春〜秋']],
    course23: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['2泊3日コース/冬']],
    season: [['HOME', './'], ['旅の行程のご紹介', './course.html'], ['｢東日本の旬｣コース']],
    story: [['HOME', './'], ['｢TRAIN SUITE 四季島｣を支える想い']],
    diary: [['HOME', './'], ['四季島ダイアリー']],
    concept: [['HOME', './'], ['コンセプト']],
    omotenashi: [['HOME', './'], ['地域をつなぐ懸け橋に。']],
    member: [['HOME', './'], ['プロジェクトメンバー']],
/*    topics: [['HOME', './'], ['トピックス']],*/
    faq: [['HOME', './'], ['よくあるお問い合わせ']],
    request: [['HOME', './'], ['資料請求']],
    galerie: [['HOME', './'], ['コンシェルジュにご相談 〜｢GALERIE 四季島｣のご案内〜']],
    application: [['HOME', './'], ['旅のお申し込み']],
  },
  en: {
    top: [['Home']],
    train: [['Home', './'], ['Train']],
    lounge: [['Home', './'], ['Train', './train.html'], ['Lounge Komorebi [Car 5]']],
    dining: [['Home', './'], ['Train', './train.html'], ['Dining SHIKI-SHIMA [Car 6]']],
    shikishima_suite: [['Home', './'], ['Train', './train.html'], ['SHIKI-SHIMA Suite Room [Car 7]']],
    dx_suite: [['Home', './'], ['Train', './train.html'], ['Deluxe Suite Room [Car 7]']],
    suite: [['Home', './'], ['Train', './train.html'], ['Suite Room [Car 2,3,4,8,9]']],
    view_terrace: [['Home', './'], ['Train', './train.html'], ['View Terrace Kizashi/Ibuki [Car 1,10]']],
    crew: [['Home', './'], ['Train', './train.html'], ['Staff of SHIKI-SHIMA']],
    course: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA']],
    prologue: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['Prologue SHIKI-SHIMA']],
    course12new: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['2-Day/1-Night Trip Winter']],
    course23new: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['3-Day/2-Night Trip Winter']],
    course34_1: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['4-Day/3-Night Trip Spring-Summer']],
    course34_2: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['4-Day/3-Night Trip Autumn']],
    course12: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['2-Day/1-Night Trip Spring-Autumn']],
    course23: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['3-Day/2-Night Trip Winter']],
    season: [['Home', './'], ['Your Journey on Train Suite SHIKI-SHIMA', './course.html'], ['"Seasons of Eastern Japan" Trip']],
    concept: [['Home', './'], ['Concept']],
    member: [['Home', './'], ['Project Member']],
    topics: [['Home', './'], ['News']],
    application: [['Home', './'], ['Application']],
  },
};

window.YOUTUBE_ID = 'KuObQBS0aLY';
window.YOUTUBE_PLAYER = null;
window.YOUTUBE_AUTOPLAY = function () {};
window.YOUTUBE_RATIO = [16, 9];
