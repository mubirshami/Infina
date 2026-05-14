import React from "react";
import "./index.css";
import TermsImage from "../../assets/nenja-logo.png";
import { useNavigate } from "react-router-dom";
const Terms = () => {

    const navigate = useNavigate();
  return (
    <div className="terms-container">
      <div className="terms-image">
        <img src={TermsImage} alt="Infiina Logo" className="terms-img" onClick={()=> navigate("/")} />
      </div>
      <h1 className="terms-h2">Terms of Use</h1>
      <div className="terms-content">
        <div className="terms-content-heading">Introduction</div>
        <div className="terms-content-text">
          Welcome to Infiina.ai ("Infiina", "we", "our", or "us"). By using our
          website / Mobile Application/APIs , services, and products
          ("Services"), you agree to comply with and be bound by the following
          terms and conditions ("Terms"). Please review them carefully as these
          terms form a contract between you and Infiina (Infiina.ai).
        </div>
        <div className="terms-content-heading">Acceptance of Terms</div>
        <div className="terms-content-text">
          <p className="bolded-description">
            <span className="bold-text">
              By accepting these Terms electronically (for example, clicking “I
              Agree”)
            </span>
            ”), accessing, using, or registering for our Services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and our Privacy Policy. If you do not agree to these
            Terms, you may not use our Services.
          </p>
        </div>
        <div className="terms-content-heading">Description of Services </div>
        <div className="terms-content-text">
          Infiina provides various services, including access to our website,
          APIs, mobile applications, and other software services. These services
          may include, but are not limited to, content such as software, data,
          text, audio, video, images, photos, graphics, or other materials
          ("Content").
        </div>
        <div className="terms-content-heading">Eligibility</div>
        <div className="terms-content-text">
          To use our Services, you must be at least 18 years old and have the
          legal capacity to enter into these Terms. By using our Services, you
          represent and warrant that you meet these requirements.
        </div>
        <div className="terms-content-heading">Account Registration</div>
        <div className="terms-content-text">
          To access certain features of our Services, you may need to create an
          account. You agree to provide accurate and complete information during
          the registration process and to update such information to keep it
          accurate and complete. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </div>
        <div className="terms-content-heading">Modifications to Terms</div>
        <div className="terms-content-text">
          We may modify these Terms at any time. Any changes will be effective
          immediately upon posting on our website or through other
          notifications. Your continued use of the Services after any such
          changes constitutes your acceptance of the new Terms.
        </div>
        <div className="terms-content-heading">Risk Disclosure Statement</div>
        <div className="terms-content-text">
          <p>
            This provides you with information about the risks associated with
            investment products, in which you may invest, through services
            provided to you by Infiina (Infiina.ai).
            <br />
            The cryptocurrency market is extremely volatile and unpredictable.
            Cryptocurrency prices can experience significant fluctuations over
            short periods, resulting in substantial financial gains or losses.
            Due to this high volatility, trading cryptocurrencies carries a
            considerable risk. You should be aware that you may lose your entire
            investment.
            <br />
            Before you open an account with us, you need to evaluate whether the
            products and/or services you have selected are suitable for you. If
            you choose to proceed with opening an account, you acknowledge that
            you understand and are aware of the associated risks.
          </p>

          <h3 className="bold-text">
            Risks Involved in Cryptocurrency Trading
          </h3>
          <ul className="risks-list">
            <li>
              <strong>Volatility</strong>
              <p>
                Cryptocurrency markets are highly volatile. Prices can fluctuate
                dramatically within short periods, leading to significant gains
                or losses. This volatility can result in the complete loss of
                your investment.
              </p>
            </li>
            <li>
              <strong>Market Risk</strong>
              <p>
                The value of cryptocurrencies is determined by supply and
                demand. Factors such as market sentiment, regulatory news, and
                technological advancements can significantly impact prices.
              </p>
            </li>
            <li>
              <strong>Regulatory Risk</strong>
              <p>
                The regulatory environment for cryptocurrencies is constantly
                evolving and can vary greatly between jurisdictions. Changes in
                laws and regulations can impact the value, legality, and use of
                cryptocurrencies.
              </p>
            </li>
            <li>
              <strong>Security Risk</strong>
              <p>
                Cryptocurrencies are traded in Exchanges and stored in wallets,
                which can be vulnerable to hacking and other cyber threats. If
                any exchange or wallet is compromised, you may lose all your
                cryptocurrency holdings.
              </p>
            </li>
            <li>
              <strong>Liquidity Risk</strong>
              <p>
                Some cryptocurrencies may have low liquidity, meaning they can
                be difficult to buy or sell quickly without significantly
                affecting the price. This can make it challenging to enter or
                exit positions at desired prices.
              </p>
            </li>
            <li>
              <strong>Technological Risk</strong>
              <p>
                The technology underlying cryptocurrencies, including
                blockchain, is complex and may contain vulnerabilities. Issues
                such as network forks, software bugs, or failures can affect the
                value and functionality of cryptocurrencies.
              </p>
            </li>
            <li>
              <strong>Operational Risk</strong>
              <p>
                Risks associated with the operational aspects of trading
                platforms, such as system failures, outages, and errors, can
                impact your ability to trade and access your funds.
              </p>
            </li>
          </ul>
        </div>
        <div className="terms-content-heading">Total Loss of Capital</div>
        <div className="terms-content-text">
          <p>
            It is crucial to understand that trading cryptocurrencies involves
            the risk of losing your entire investment.
            <span className="bold-text">
              You can lose 100% of your capital.
            </span>
            If you cannot afford to lose 100% of your investment, we strongly
            advise you not to use our website or application for trading
            cryptocurrencies.
          </p>
        </div>
        <div className="terms-content-heading">Warning</div>
        <div className="terms-content-text">
          Trading cryptocurrencies is not suitable for everyone. You should
          carefully consider your investment objectives, level of experience,
          and risk appetite before deciding to trade. If you are uncertain about
          any aspect of cryptocurrency trading or its associated risks, you
          should seek professional advice. <br />
          By using our website or application, you acknowledge that you
          understand the risks involved in cryptocurrency trading and accept the
          potential for total loss of your capital. If you do not agree with
          these terms, please refrain from using our services.
        </div>
        <div className="terms-content-heading">Limitation of Liability</div>
        <div className="terms-content-text">
          Infiina, its affiliates, and service providers, as well as their
          respective officers, directors, agents, employees, or representatives,
          will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses, resulting from (a)
          your use or inability to use the Services; (b) any unauthorized access
          to or use of our servers and/or any personal information stored
          therein; (c) any interruption or cessation of transmission to or from
          the Services; (d) any bugs, viruses, trojan horses, or the like that
          may be transmitted to or through our Services by any third party; (e)
          any errors or omissions in any content; and (f) any loss or damage
          incurred as a result of the use of any content posted, emailed,
          transmitted, or otherwise made available through the Services, whether
          based on warranty, contract, tort (including negligence), or any other
          legal theory, whether or not we have been informed of the possibility
          of such damage.
        </div>
        <div className="terms-content-heading">Indemnification</div>
        <div className="terms-content-text">
          You agree to indemnify and hold harmless Infiina, its affiliates, and
          their respective officers, directors, employees, affiliates and agents
          from and against any and all claims, liabilities, damages, losses, or
          expenses, including reasonable attorneys' fees and costs, arising out
          of or in any way connected with your access to or use of the Services,
          your violation of these Terms, or your infringement of any third-party
          rights.
        </div>
        <div className="terms-content-heading">Governing Law</div>
        <div className="terms-content-text">
          These Terms and any disputes arising out of or related to these Terms
          or the Services will be governed by and construed in accordance with
          the laws of the jurisdiction in which Infiina is located, without regard
          to its conflict of law principles.
        </div>
        <div className="terms-content-heading">Contact Information</div>
        <div className="terms-content-text">
          If you have any questions about these Terms, please contact us at
          support@Infiina.ai. <br />
          By using our Services, you agree to these Terms. If you do not agree,
          please do not use our Services.
        </div>
      </div>
    </div>
  );
};

export default Terms;
