import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component *3,
    marginBottom: theme.spacing.component *5,
    padding: theme.padding.component,
  },
  para: {
    marginBottom: theme.spacing.para
  }
})

class PrivacyPolicy extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render () {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'
    if (lang === 'ja'){

      return (
        <div className={classes.root}>
          <div className={classes.para}>
            <Typography variant="display2" component="h2" gutterBottom >プライバシーポリシー</Typography>
            <Typography component="p" gutterBottom >
              私はあなたの個人情報を尊重し安全に取り扱いたします。また、許可なく、第三者に個人情報を提供することはありません。
            </Typography>
          </div>
          <div className={classes.para}>
            <Typography variant="title" component="h3" gutterBottom >取得する個人情報について</Typography>
          </div>
          <div className={classes.para}>
            <Typography component="p" gutterBottom >
              アプリケーションを運営するうえで、下記の情報を取得することがあります。
            </Typography>
          </div>
          <div className={classes.para}>
            <Typography component="p" paragraph>
              1. アプリケーションへの訪問、各種リソースへのアクセスの際の詳細情報。トラフィックデータ、位置情報、Webログ、その他コミュニケーションデータ。
            </Typography>
            <Typography component="p" paragraph>
              2. アプリケーション内のフォームに入力した情報。ユーザー登録や課金の入力情報など。
            </Typography>
            <Typography component="p" paragraph>
              3. お問い合わせの際に提供された各種情報
            </Typography>
          </div>
          <Typography component="p" paragraph>常盤 卓也</Typography>
        </div>
      )
    }

    return (
      <div className={classes.root}>
        <div className={classes.para}>
          <Typography variant="display2" component="h2" gutterBottom >Privacy Policy</Typography>
          <Typography component="p" gutterBottom >
            I treat your privacy with respect and it is secured and will never be sold, shared or rented to third parties.
          </Typography>
        </div>
        <div className={classes.para}>
          <Typography variant="title" component="h3" gutterBottom >Information I Collect</Typography>
        </div>
        <div className={classes.para}>
          <Typography component="p" gutterBottom >
            In operating my application, I may collect and process the following data about you:
          </Typography>
        </div>
        <div className={classes.para}>
          <Typography component="p" paragraph>
            1. Details of your visits to my applications and the resources that you access, including, but not limited to, traffic data, location data, weblogs and other communication data
          </Typography>
          <Typography component="p" paragraph>
            2. Information that you provide by filling in forms on my applications, such as when you registered for information or make a purchase
          </Typography>
          <Typography component="p" paragraph>
            3. Information provided to us when you communicate with me for any reason
          </Typography>
        </div>
        <Typography component="p" paragraph>Takuya Tokiwa</Typography>
      </div>
    )
  }
}


export default withStyles(styles)(PrivacyPolicy)
