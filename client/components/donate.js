import React from 'react'

const Donate = () => (
  <div id="donate-container">
    <div id="main-donate">

      <div className="donate-package">
        <div className='donate-content'>
          <div className="donate-package-header">Donor (1 month)</div>
          <div className="usd">
            <img className="usd-symbol" src="usd.png" />
            <div className="usd-text">10</div>
          </div>
          <div className="donate-package-rewards">
            <div>2 supply signals</div>
            <div>150 high quality metal</div>
            <div>1 M249</div>
            <div>1 LR-300</div>
            <div>1 L96</div>
            <div>250 scrap</div>
            <div>In-game title</div>
            <div>Discord title</div>
          </div>
        </div>
        <div className='donate-buttons'>
          <img src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg' />
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="T888Q6GNL2TCJ" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>

      <div className="donate-package">
        <div className='donate-content'>
          <div className="donate-package-header">VIP (1 month)</div>
          <div className="usd">
            <img className="usd-symbol" src="usd.png" />
            <div className="usd-text">25</div>
          </div>
          <div className="donate-package-rewards">
            <div>4 supply signals</div>
            <div>300 high quality metal</div>
            <div>2 M249</div>
            <div>2 LR-300</div>
            <div>2 L96</div>
            <div>500 scrap</div>
            <div>In-game title</div>
            <div>Discord title</div>
          </div>
        </div>
        <div className='donate-buttons'>
          <img src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg' />
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="MV7M5L8ZHGZ4J" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>

      <div className="donate-package">
        <div className='donate-content'>
          <div className="donate-package-header">Elite (Lifetime)</div>
          <div className="usd">
            <img className="usd-symbol" src="usd.png" />
            <div className="usd-text">50</div>
          </div>
          <div className="donate-package-rewards">
            <div>6 supply signals</div>
            <div>500 high quality metal</div>
            <div>3 M249</div>
            <div>3 LR-300</div>
            <div>3 L96</div>
            <div>750 scrap</div>
            <div>32 explosive rifle rounds</div>
            <div>In-game title</div>
            <div>Discord title</div>
          </div>
        </div>
        <div className='donate-buttons'>
          <img src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg' />
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="HBDPMYJDATRE2" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>

      <div className="donate-package">
        <div className='donate-content'>
          <div className="donate-package-header">Legend (Lifetime)</div>
          <div className="usd">
            <img className="usd-symbol" src="usd.png" />
            <div className="usd-text">100</div>
          </div>
          <div className="donate-package-rewards">
            <div>8 supply signals</div>
            <div>750 high quality metal</div>
            <div>5 M249</div>
            <div>5 LR-300</div>
            <div>5 L96</div>
            <div>1000 scrap</div>
            <div>64 explosive rifle rounds</div>
            <div>In-game title</div>
            <div>Discord title</div>
          </div>
        </div>
        <div className='donate-buttons'>
          <img src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg' />
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="YVQN2FA3SCQJ4" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Donate
