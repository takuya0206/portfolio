import gantt_chart_generator from '../assets/img/gantt_chart_generator.png'
import PDM from '../assets/img/PDM.png'
import Wasabi from '../assets/img/Wasabi.png'
import Qubena from '../assets/img/qubena_highSchool.png'
import NewsPaper_Wasabi from '../assets/img/NewsPaper_Wasabi.JPG'
import NewsPaper_Wasabi_FMShimabara from '../assets/img/NewsPaper_ Wasabi_FMShimabara.JPG'
import vaccine from '../assets/img/vaccine.png'

export const skills = {
  'Project Management': {
    ja: ['中規模（15~300人月）', '小規模（~15人月）', 'ウォーターフォール', 'アジャイル'],
    en: ['Medium (15~300 man-month)', 'Small (~15 man-month)', 'Waterhall', 'Agile'],
  },
  'Software Engineering': {
    ja: ['Google Apps Script', 'React', 'Redux', 'React Native', 'Node.js'],
    en: ['Google Apps Script', 'React', 'Redux', 'React Native', 'Node.js'],
  },
  'Entrepreneurship': {
    ja: ['マーケティング戦略', 'プロダクトマネジメント', '事業開発', '経営管理'],
    en: ['Marketing Strategy', 'Product Management', 'BizDev', 'Administration'],
  },
}

export const introduction = {
  'Project Management': {
    ja: 'ソフトウェア、ウェブアプリケーションのプロジェクトマネジメントが専門です。特に、EdTech業界での経験が長いため、システムだけでなく、大量のコンテンツ制作を含めたプロジェクトが得意です。',
    en: 'I am specialized for software and web application. I am especially strong in projects to create a huge quantity of contents along with system development because of the experience in Edtech filed.',
  },
  'Software Engineering': {
    ja: 'プロジェクトマネジメントを促進するために、必要な情報の収集や、コミュニケーションを円滑にする為のツールを開発しています。また、空いた時間を見つけて個人でアプリケーションの開発もしています。',
    en: 'In order to accelerate project management, I develop useful tools whereby collect necessary information and facilitate communication. Also, I love to develop apps in my spare time.',
  },
  'Entrepreneurship': {
    ja: '起業と事業売却の経験が二回あります。会社経営は年商3000万程度の規模までで、ゼロイチ・フェーズの方が得意です。また、ビジネスだけではなく、財務・法務・労務などの知識と経験もあります。',
    en: 'I have started my own business several times and two of them were acquired. I am strong in "Zero to One" rather than management of a company. In addition to BizDev, I have experience of finance, HR, and legal.',
  },
}

export const titles = {
  'Achievement': {
    ja: '実績',
    en: 'Achievement'
  },
  'Media Exposure': {
    ja: 'メディア掲載',
    en: 'Media Exposure'
  },
  'Publication': {
    ja: '出版',
    en: 'Publication'
  },
}


export const achievement = {
  'Vaccine': {
    imagePath: vaccine,
    title: 'バクシン',
    role: {
      ja: '役割: Developer',
      en: 'Role: Developer',
    },
    description: {
      ja: '海外旅行の予防接種を管理するiOSアプリ。「予防接種を記録する」「予防接種が無効になる前にお知らせ」「渡航先で推奨される予防接種を調べる」などの機能があります。',
      en: 'iOS app which manages vaccination for oversea trips. There are main three features which are "record," "notice," and "search" necessary vaccinations'
    },
    URL: 'https://itunes.apple.com/us/app/%E3%83%90%E3%82%AF%E3%82%B7%E3%83%B3/id1437060257?l=ja&ls=1&mt=8',
  },
  'Qubena 高校版': {
    imagePath: Qubena,
    title: 'Qubena 高校版',
    role: {
      ja: '役割: Project Manager',
      en: 'Role: Project Manager',
    },
    description: {
      ja: '世界初の人工知能型教材 "Qubena(キュビナ)"。Qubenaは、生徒それぞれの間違い方の原因を人工知能が解析し、原因を解決するためにその生徒が解くべき問題へと誘導します。',
      en: 'AI-Programmed Learning Tool "Qubena". Qubena produces a productive learning best fit for the student, allowing students to keep moving forward onto new concepts.'
    },
    URL: 'https://itunes.apple.com/jp/app/qubena-%E9%AB%98%E6%A0%A1%E7%89%88/id1321405084?mt=8',
  },
  'Gantt Chart Generator': {
    imagePath: gantt_chart_generator,
    title: 'Gantt Chart Generator',
    role: {
      ja: '役割: Developer',
      en: 'Role: Developer',
    },
    description: {
      ja: 'ガントチャートを自動生成するスプレッドシートのアドオン。小規模から中規模のプロジェクトの進行管理や、大規模プロジェクトの叩き台のスケジュールを引くときなどに活用可能。',
      en: 'Google spreadsheet add-on in which you can automatically create a gantt chart. This is suitable to manage a small or a medium size of projects.',
    },
    URL: 'https://gsuite.google.com/marketplace/app/gantt_chart_generator/1037080664457',
  },
  'Precedence Diagram Maker': {
    imagePath: PDM,
    title: 'Precedence Diagram Maker',
    role: {
      ja: '役割: Developer',
      en: 'Role: Developer',
    },
    description: {
      ja: 'Precedence Diagram Methodでネットワーク図を自動生成するスプレッドシートのアドオン。各工程の依存関係を整理し、スケジュールに落とし込むときなどに活用可能。',
      en: 'Google spreadsheet add-on in which you can automatically a network chart in Precedence Diagram Method and measure total duration of projects.',
    },
    URL: 'https://gsuite.google.com/marketplace/app/precedence_diagram_maker/1091965070131',
  },
  'Wasabi - Learn Japanese Oneline': {
    imagePath: Wasabi,
    title: 'Wasabi - Learn Japanese Oneline',
    role: {
      ja: '役割: Founder',
      en: 'Role: Founder',
    },
    description: {
      ja: 'スピーキングの練習に特化したオンライン日本語学習サービス。ネイティブスピーカーとのプライベートレッスンの提供に合わせて、様々な学習教材を無料で公開しています。',
      en: 'Website which is specialized for Japanese in speaking practice. Along with private lessons with native speakers, there are various free learning materials. ',
    },
    URL: 'https://wasabi-jpn.com/',
  }
}

export const exposure = {
  'Wasabi with FMShimabara': {
    title: {
      ja: '島原新聞 - ラジオ音源を日本語教材に（2015年10月）',
      en: 'Japanese local newspaper "Shimabara Shinbun" (2015 October)'
    },
    image: NewsPaper_Wasabi_FMShimabara,
    icon: 'file'
  },
  'Wasabi': {
    title: {
      ja: '島原新聞 - 紙学余話（2015年7月）',
      en: 'Japanese local newspaper "Shimabara Shinbun" (2015 July)'
    },
    image: NewsPaper_Wasabi,
    icon: 'file'
  },
  '東洋経済': {
    title: {
      ja: '東洋経済 ONLINE - 世界の募集要項（2015年1月）',
      en: 'Japanese economic news site "Toyo Keizai" (2015 January)'
    },
    URL: 'https://toyokeizai.net/articles/-/58076',
    icon: 'mobile-alt'
  },
}

export const publication = {
  'Wasabi\'s Japanese grammar Reference' : {
    title: {
      ja: 'Wasabi\'s Japanese grammar Reference（2017年2月）',
      en: 'Wasabi\'s Japanese grammar Reference (2017 February)',
    },
    URL: 'https://www.amazon.com/Wasabis-Japanese-Grammar-Reference-Audio-ebook/dp/B06XBC9Q52',
    icon: 'book',
  },
  'takuya0206\'s diary': {
    title: {
      ja: 'takuya0206\'s diary（Blog）',
      en: 'takuya0206\'s diary（Blog written in Japanese）',
    },
    URL: 'http://takuya0206.hateblo.jp',
    icon: 'mobile-alt',
  }
}
