function App() {
  const browser = utools.ubrowser

  const goToLogin = async () => {
    const result = await browser
      .goto('https://www.huya.com/')
      .devTools('detach')
      .click(
        document.cookie.includes('username')
          ? '#player-sound-btn'
          : '#J_duyaHeaderRight > div > div.Login--2TRWvaH25E5NUhZJ1I69uE > a > span'
      )
      .evaluate(() => {
        console.log(document.cookie, document.cookie.includes('username'))
        return document.cookie.includes('username')
      })
      .run({ width: 1000, height: 600 })

    let cookie
    if (result.length > 0) {
      cookie = result[0]

      utools.showNotification('蓝奏云登陆成功')

      browser.hide()
    }

    console.log('登陆成功', cookie)

    return cookie
  }

  const sendMessage = async () => {
    console.log('🚀~ 34 sendMessage sendMessage', sendMessage)
    const result = await browser
      .goto('https://www.huya.com/383417')
      .devTools('detach')
      .wait(60000)
      .value('#pub_msg_input', '好厉害呀！')
      .click('#msg_send_bt')
      .evaluate(() => {
        console.log(document.cookie, document.cookie.includes('username'))
        return document.cookie.includes('username')
      })
      .run({ width: 1000, height: 600 })
    console.log('🚀~ 44 sendMessage result', result)
  }
  return (
    <div className="card bg-yellow-200 shadow-xl lg:card-side">
      <figure className="my-10">
        <img
          src="https://a.msstatic.com/huya/main3/static/img/logo2.png"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">请先登录</h2>
        <p>目前仅支持虎牙弹幕发送</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn-warning btn" onClick={goToLogin}>
            登录
          </button>
          <button className="btn-primary btn-warning btn" onClick={sendMessage}>
            发送测试信息
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
