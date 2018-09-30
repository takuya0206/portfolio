import gantt_chart_generator from '../assets/img/gantt_chart_generator.png'
import PDM from '../assets/img/PDM.png'
import Wasabi from '../assets/img/Wasabi.png'
import Qubena from '../assets/img/qubena_highSchool.png'


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
    ja: 'プロジェクトマネジメントを促進するために、必要な情報の収集や、コミュニケーションを円滑にする為のツールを開発しています。また、空いた時間を見つけて個人用のアプリケーションも開発しています。',
    en: 'In order to accelerate project management, I develop useful tools whereby collect necessary information and facilitate communication. Also, I love to develop personal apps in my spare time.',
  },
  'Entrepreneurship': {
    ja: '起業と事業売却の経験が二回あります。会社経営は年商3000万程度の規模までで、ゼロイチ・フェーズの方が得意です。また、ビジネスだけではなく、財務・法務・労務などの知識と経験もあります。',
    en: 'I have started my own business twice and both of them were acquired. I am strong in "Zero to One" rather than management of a company. In addition to BizDev, I have experience of finance, HR, and legal.',
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
  }
}


export const achievement = {
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
    link: 'https://itunes.apple.com/jp/app/qubena-%E9%AB%98%E6%A0%A1%E7%89%88/id1321405084?mt=8',
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
    link: 'https://chrome.google.com/webstore/detail/gantt-chart-generator/bnaicalmdphddkedcgchnfbjohmhdgni?utm_source=permalink',
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
    link: 'https://chrome.google.com/webstore/detail/precedence-diagram-maker/mapjdikjkobbpmhaeeahjeobhllacjkb?utm_source=permalink',
  },
  'Wasabi - Learn Japanese Oneline': {
    imagePath: Wasabi,
    title: 'Wasabi - Learn Japanese Oneline',
    role: {
      ja: '役割: Founder',
      en: 'Role: Founder',
    },
    description: {
      ja: 'スピーキングの練習に特化したオンライン日本語学習サービス。ネイティブスピーカーとのプライベートレッスンの提供に合わせて、様々な学習教材を無料で公開している。',
      en: 'Website which is specialized for Japanese in speaking practice. Along with private lessons with native speakers, there are various free learning materials. ',
    },
    link: 'https://wasabi-jpn.com/',
  }
}
