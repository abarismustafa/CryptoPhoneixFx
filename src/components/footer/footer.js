import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Modal, Button } from 'react-bootstrap';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767 || window.innerWidth > 991);

  const handleModalShow = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767 || window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <footer className={`bg-dark text-light py-1 footerlasssign ${isDesktop ? 'fixed-bottom' : ''}`}>
      <Container>
        <Row className="align-items-center footerrowsignclass m-0">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <small>&copy; 2025 AIBOT - All Rights Reserved.</small>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Item>
                {/* <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow('Terms & Conditions', termsAndConditions)}>
                  Terms & Conditions
                </Button> */}
              </Nav.Item>
              <Nav.Item className="mx-2">|</Nav.Item>
              <Nav.Item>
                <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow(true)}>
                  Privacy Policy
                </Button>
              </Nav.Item>
              {/* <Nav.Item className="mx-2">|</Nav.Item>
              <Nav.Item>
                <Button variant="link" className="text-light p-0 border-0" onClick={() => handleModalShow('Refund Policy', refundPolicy)}>
                  Refund Policy
                </Button>
              </Nav.Item> */}
            </Nav>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton className="bg-primary text-white modalheaderpolicy">
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <div className="policy-content p-3 rounded" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <div className=''>
              <h2>Who collects the data?
              </h2>
              <p>While accessing this website, certain personal information about the users, such as name, address etc. can or may be used for statistical and/or other purposes. Also, other information like Internet Protocol (IP) addresses, navigation paths on the website, the systems and programs used to access the site and the time spent on the site, along with other similar information, may be stored on our servers and may be subsequently used for analytical purposes. We do not sell or rent our customers’ personal information to third parties.</p>
              <p>We encourage the users of the website to review our Privacy Policy and become familiar with it. <strong>We will not disclose, sell, share or reveal user information to any other third party</strong>.</p>
              <p>We are committed to protecting the information we collect through the website and implemented appropriate administrative, technical, and physical security procedures to help protect the personal information our users provide to us. We employ Internet security methods and technologies that are industry standards to prevent unauthorized access, maintain data accuracy, and ensure the correct use of information.</p>

              <p>We will advise our users to bookmark this page and periodically review it for updates. We keep revisiting our Privacy Policy from time to time, and we may make periodic changes to the policy in connection with that review.</p>
              <p>Regardless of the latest updates, we assure our users of our total commitment to the privacy practices described to them in this Privacy Policy at the time when they provide their personal information on the website.</p>
              <h2>What kind of data do we collect?</h2>

              <p>We may collect, store, and use the following personal data, which includes but not limited to:</p>
              <p><strong>Identity data:</strong>your first/middle/last name, username or any other identifier created by you when using our services, proof of your identity in a form of a numeric image, date and place of birth, gender, country of residence and citizenship.</p>
              <p><strong>Contact data:</strong>your address of residence including the proof of this address in a form of a numeric image, your phone number, e-mail address.</p>
              <p><strong>Professional data:</strong>education level, occupation, employer name, experience in online trading, knowledge about online trading and the risks involved in it, including all the relevant proofs of this data.</p>
              <p><strong>Technical usage data:</strong> your IP address and location, browser type and version, device type and model, operating system and any other data related to the characteristics of the device you’re using to access and use our websites.</p>
              <p><strong>Behavioral data:</strong>all the data related to your behavior on our websites – clicks on links, downloads, scrolls, etc.</p>
              <p><strong>Marketing data:</strong>consents to receive marketing and advertising materials from us as well as the type of communication channel and the language of the message.</p>
              <h2>Cookies policy</h2>
              <p>Cookies are files containing the information that websites use to register traffic. This information from the website server is temporarily saved on the hard disk of your computer or mobile device when you visit the website for the first time and, subsequently, allows the website to recognize your browser.</p>
              <p>BotBro uses cookies to define what services are the most interesting ones for its clients and measure visitors’ activity on the Company’s websites. Using cookies, we also identify the most requested advertisements and estimate the popularity of resources related to the attracting of the potential clients.</p>
              <h2>What types of cookies do we use?
              </h2>
              <p>Session cookies: this type of cookies is used only during your session on our website (when you use our website) and is stored only until you close your browser.</p>
              <p>Analytical cookies: this type of cookies collects the behavioral information on how you use our website and transfers it to our analytical software where it can be stored up to 6 months. The information stored doesn’t contain your name, e-mail address or any other personal information, thus is anonymous. We use it to track users’ activity on our web pages, which allows us to provide the seamless user experience across all our platforms and keep track of potential inaccuracies.</p>

              <p>Promotional cookies: this type of cookies is used to provide the relevant advertising to any of our website’s visitors at the moment when they are not using one of our platforms. They may include third-party cookies of one or more of our advertising partners.</p>
              <p>Preferences and functionality cookies: this type of cookies determines the choices you make while using our website, whether it is the website language or the closing of a pop-up window.</p>
              <h2>How to manage cookies preferences</h2>
              <p>You can delete the cookies placed on your computer when visiting our websites using your browser settings. The instruction of managing cookies in the most popular browsers can be found below:</p>
              <ul>
                <li aria-level={1}>
                  <span >Google Chrome – </span>
                  <Link to="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en" className="text-decoration-none">
                    <span >
                      https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en
                    </span>
                  </Link>
                </li>
                <li aria-level={1}>
                  <span >Microsoft Edge – </span>
                  <Link to="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" className="text-decoration-none">
                    <span >
                      https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
                    </span>
                  </Link>
                </li>
                <li aria-level={1}>
                  <span >Mozilla Firefox – </span>
                  <Link to="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-decoration-none">
                    <span >
                      https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                    </span>
                  </Link>
                </li>
                <li aria-level={1}>
                  <span >Microsoft Internet Explorer – </span>
                  <Link to="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-decoration-none">
                    <span >
                      https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                    </span>
                  </Link>
                </li>
                <li aria-level={1}>
                  <span >Opera – </span>
                  <Link to="https://www.opera.com/help/tutorials/security/privacy/" className="text-decoration-none">
                    <span >
                      https://www.opera.com/help/tutorials/security/privacy/
                    </span>
                  </Link>
                </li>
                <li aria-level={1}>
                  <span >Apple Safari – </span>
                  <Link to="https://support.apple.com/guide/safari/sfri11471/mac" className="text-decoration-none">
                    <span >
                      https://support.apple.com/guide/safari/sfri11471/mac
                    </span>
                  </Link>
                </li>
              </ul>
              <p>Make sure that you fully acknowledge that deleting cookies may affect the functionality you use on our and other websites.</p>
              <h2>What do we collect and process your personal data for?
              </h2>
              <p>The main reasons and purposes of collecting personal data in accordance with the legislation are described below:

              </p>
              <p>Contract obligations: in order to on-board you as a Client, we have to request and verify your personal information according to our Client Agreement.

              </p>
              <p><strong>Legal obligations:</strong>BotBro is subject to a number of various laws, which apply to financial organizations (e.g. anti-money laundering laws, financial services laws, corporation laws, privacy laws and tax laws). These laws and directives oblige the Company to collect and store personal data requested in their texts.</p>
              <p><strong>Complaints’ enquiries:</strong>to perform an enquiry concerning your complaints, we may use the data you’ve provided upon enquiry.</p>
              <p><strong>Data analysis:</strong> we use various tools to gather behavioral and quantitative data about the users of our websites and subscribers to our emails in order to provide them with ultimate user experience and relevant content.</p>
              <p><strong>Marketing purposes:</strong>if you consent to receive our marketing communication materials, we will use the personal data you’ve provided to send you information about our products, services, and upcoming events.</p>
              <p><strong>Legal Notifications:</strong>we are obliged by the Law to advise you of changes to our products, services and/or agreements, therefore we may use your personal data.
              </p>
              <p><strong>Legal Notifications:</strong>we are obliged by the Law to advise you of changes to our products, services and/or agreements, therefore we may use your personal data.
              </p>
              <h2>Who may we disclose your personal data to?</h2>
              <p>Please, be advised that your personal data can never be disclosed to any third parties unknown to the Company and with which it doesn’t have an appropriate agreement.</p>
              <p>In any case, the Client will be informed about this and should give prior consent for these activities in accordance with the GDPR.</p>
              <p>According to the Law, you have the following rights regarding your personal data we store and process:</p>
              <ol>
                <li>
                  <span >
                    The right to be informed about the fact that we’re processing your
                    personal data and which data exactly we are processing.
                  </span>
                </li>
                <li>
                  <span >
                    The right of access to your personal data.
                  </span>
                </li>
                <li>
                  <span >
                    The right to rectify your personal data in case it is not accurate or not
                    up-to-date.
                  </span>
                </li>
                <li>
                  <span >
                    The right to erase your personal data from our servers upon your justified
                    request.
                  </span>
                </li>
                <li>
                  <span >
                    The right to restrict processing of your personal data (which does not
                    imply its storage).
                  </span>
                </li>
                <li>
                  <span >
                    The right to data portability. In certain circumstances, you have the
                    right to obtain all your personal data we store in a machine readable
                    format.
                  </span>
                </li>
                <li>
                  <span >
                    The right to object to the processing of your personal data.
                  </span>
                </li>
                <li>
                  <span >
                    The right not to be subject to automated decision-making including
                    profiling if it doesn’t intervene in performing the contract between you
                    and BotBro.
                  </span>
                </li>
              </ol>
              <p>In respect of the Client’s rights, the Company informs you that you are able to exercise the above-mentioned rights if this does not contradict the legal requirements in relation to the Prevention of Money Laundering and Terrorist Financing Laws, Record Keeping obligations of the Company etc.</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='modalfooterpolicy'>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;