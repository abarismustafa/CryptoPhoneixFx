import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./assets/css/media.css";
import "./assets/css/style.css";

import "./asesets/main.css";
import "./asesets/css/bootstap2.css";
import "./asesets/css/caltmine.css";
import "./asesets/css/fontAwesom.css";
// import './asesets/css/mixin.scss'

import "./asesets/css/customAdmin.css";
import "./asesets/css/selectMin.css";
import "./asesets/css/responsive.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

// import PaymentGateWayPage from './pages/admin/paymentGateWay';

// ---------------------------------------------------
import PasswordChagePage from "./pages/admin/settings/passwordChage";
import CreatePinPage from "./pages/admin/settings/createPin/CreatePinPage";
// import OtpSecurityPage from './pages/admin/settings/otpSecurity';
import TdsCertificatePage from "./pages/admin/tdsCertificate";
import MerchantLoginAreaPage from "./pages/merchantLoginArea/Index";
import SinUpMerchantPage from "./pages/merchantLoginArea/sinupMerchant";
// import CompeleteRegister from './pages/merchantLoginArea/compeleteRegister';
import "react-toastify/dist/ReactToastify.css";
// import Shipping_Address from './pages/admin/shipping_Address';
// import FormBillAdd from './pages/admin/shipping_Address/FormBillAdd';
import BillingAddress from "./pages/admin/billingAddress";
import ProfilePage from "./pages/admin/profilePage";
import WalletReportPage from "./pages/admin/walletReport";
import PaymentRequestViewPage from "./pages/admin/payment/paymentRequestView/PaymentRequestView";
import AddPaymentRequestPage from "./pages/admin/payment/addPaymentRequest";
// import PaymentRequestPage from './pages/admin/payment/paymentRequest';
// import PaymentRequestByMemberPage from './pages/admin/payment/paymentRequestByMember';
// import DaseboardCheckPage from './pages/admin/daseboardCheck';
// import ActivityLogPage from './pages/admin/activityLg';
// import DtmReportDetails from './components/admin/dtmReportSearch/dtmReportDetails/DtmReportsDetails';
import DeclearPage from "./common/declearPage/DeclearPage";
// import AepsWalletsPage from './pages/admin/aepsWallets';
// import TransactionReportPage from './pages/admin/tranactionReports';
// import AepsWalletsTrasferPage from './pages/admin/aepsWalletTransfer';
// import QucickDhanPage from './pages/admin/quickDhan';
import CompanyBankDetailsPage from "./pages/admin/companyBankdetails";
// import AepsOnBoardingPage from './pages/admin/aepsOnboarding';
import PrivateRoute from "./pages/privateRoute/PrivateRoute";

import OpenDisputPage from "./pages/admin/disput/openDisput";
// import ClossingDisputPage from './pages/admin/disput/clossingDisput';
import AddTicketPage from "./pages/admin/disput/AddTicket";
import ListTicketsPage from "./pages/admin/disput/listTickets";
import ListTicketUser from "./components/admin/disput/listTickets/listTicketUser/ListTicketUser";
import PackageListPage from "./pages/admin/package/packagelist";

import TdsCertificatee from "./components/admin/tdsCentificate/TdsCertificate";
// import IdCard from './components/admin/idCard/IdCard';
import Certificate from "./components/admin/cartificate/cartificate";
// import BcAuthorization from './components/admin/bcAuthorizse/tCertificate';

import PackageDetails from "./components/admin/package/packageDetails/PackageDetails";
// import Commission from './components/admin/commission/Commission';
// import Balance from './components/admin/balance/Balance';
import Status from "./components/admin/status/Status";
import PackageHistory from "./components/admin/package/packageHistory/PackageHistory";

// import Loan from './components/loan/Loan';
// import Loanform1 from './components/loan/Loanform1';

import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";
import { getNotiToken } from "./components/admin/notificationSide/NotificationSide";

import Invoice from "./components/admin/package/packageDetails/Invoice";
// import AepsDipositPurchge from './pages/admin/cashDiposit/aepsDipositPurchage/AepsDipositPurchage';
import {
  bpbsAllServiceList,
  UserPermissionAeps,
  UserPermissionAeps2,
  WalletsShow,
} from "./api/login/Login";

// import Userlist from './pages/admin/userlist/Userlist';

// import UserReport from './pages/admin/userlist/Userreport';
// import Earningreport from './pages/admin/userlist/Earningreport';
// import InvoiceBill from './pages/admin/userlist/Invoice';

// import ServiceSlider from './pages/admin/userlist/ServiceSlider';
// import ServiceSlidernew from './pages/admin/userlist/ServiceSlider';
// import BPBSService from './pages/admin/userlist/BPBSService';
// import LedgerReport from './pages/admin/userlist/LedgerReport';
// import BusinessReport from './pages/admin/userlist/BusinessReport';
// import AepsInvoice from './pages/admin/userlist/AepsInvoice';
// import PayoutInvoice from './pages/admin/userlist/Payoutinvoice';
// import CmsInvoice from './pages/admin/userlist/CmdInvoice';

// import UserManegmentPage from './pages/admin/userManegement';
// import { AddStaff } from './components/admin/userManegement/addStaff/AddStaff';
// import MakePaymentPage from './pages/admin/makePayment';

import PlayNif50Page from "./pages/playNif50";
import { SelectPlayers } from "./components/playNif50/Nifty50/nifty50Slide/nifty50HourlyContest/selectPlayers/SelectPlayers";
import { SelectStock } from "./components/playNif50/Nifty50/nifty50Slide/nifty50HourlyContest/selectPlayers/selectStock/SelectStock";
import AllContestListPage from "./pages/admin/allContestList";

import PaymentGateWayPage from "./pages/admin/payment/paymentGatway";
import { AllContestRankDetails } from "./components/admin/allContestList/allContestRankDetails/AllContestRankDetails";
import { SelfContestRankDetails } from "./components/admin/allContestList/selfContestRankDetails/SelfContestRankDetails";
import DashboardPalyNifPage from "./pages/admin/dashboardPalyNif";

import StaffKycPage from "./pages/admin/staffKyc";
import HowToplayPage from "./pages/admin/howToPlay";
import DetailsNewsPage from "./pages/admin/deatilsNews";
import ContestPaymentReportPage from "./pages/admin/contestPaymentReport";
import BlogPage from "./pages/admin/blog";
import BlogDetails from "./components/admin/blog/blogDetails/BlogDetails";

import AddWithdrawRequestPage from "./pages/admin/withDraw/addWithdrawRequest";
import ListWithdrawRequestsPage from "./pages/admin/withDraw/listWithdrawRequests";
import MyReferedMemberPage from "./pages/admin/myReferedMember";

import LevelIncome from "./pages/income/levelincome";
import MatchingIncome from "./pages/income/matchingincome";
import IbIncome from "./pages/income/ibincome";
import AchivementIncome from "./pages/income/achivement";
import CompoundingIncome from "./pages/income/compoundingIncome";
import RewardIncome from "./pages/income/reward";
import ClubIncome from "./pages/income/clubincome";
import StakingMatchingIncome from "./pages/income/stakingMatchingincome";
import TradingProfitIncome from "./pages/income/tradingProfitIncome";
import DirectTeamPage from "./pages/network/directTeam";
import AllTeamPage from "./pages/network/allTeam";
import UnilevelPage from "./pages/network/unilevel";
import BusinessHistoryPage from "./pages/network/businessHistory";
import TradingLevelIncomePage from "./pages/income/tradingLevelIncome";
import CompoundingProfitIncomePage from "./pages/income/compoundingProfitIncome";
import GiftTlcProfitPage from "./pages/income/giftTLCProfit";
import GiftDirectTLCProfitPage from "./pages/income/giftDirectTLCProfit";
import TradingRobotReport from "./pages/robot/tradingRobot";
import TradingRobotForm from "./components/robot/tradingRobot/tradingRobotForm/TradingRobotForm";
import RenewalTradingReports from "./pages/robot/renewalTrading";
import RenewalTradingForm from "./components/robot/renewaltradingRobot/renewalTradingForm/RenewalTradingForm";
import InvestmentRobotForm from "./components/robot/investRobot/investmentRobotForm/InvestmentRobotForm";
import IvestmentRobotReports from "./pages/robot/investmentrobotReports";
import PortfolioReports from "./pages/robot/portfolio";
import StakingTLCReports from "./pages/staking/stakingTLC";
import StakingTLCForm from "./components/staking/stakingTLC/stakingTLCForm/StakingTLCForm";
import StakingIncomeReports from "./pages/staking/stakingTLC/stakingIncome";
import Tlc2isoPage from "./pages/TLC2.0/TLC2.0ICO";
import TLC20ICOAdd from "./pages/TLC2.0/TLC2.0ICO/TLC2.0ICOAdd/TLC2.0ICOAdd";
import TLC20ICOLevelIncomePage from "./pages/TLC2.0/TLC2.0 ICOLevelIncome";
import TLC20LevelIncomePage from "./pages/TLC2.0/TLC2.0LevelIncome";
import TLC20ProfitPage from "./pages/TLC2.0/TLC2.0Profit";
import DepositviaGatewayPage from "./pages/deposit/depositviaGateway";
import DepositInvoicePage from "./pages/deposit/depositInvoices";
import DepositINRPackagePage from "./pages/deposit/depositINRPackage";
import DepositINRStakingPage from "./pages/deposit/depositINRStaking";
import DepositInvoicesINRPage from "./pages/deposit/depositInvoicesINR";
import TransfertoPackageWalletPage from "./pages/transfer/transfertoPackageWallet";
import BuyAibot from "./pages/buySell/aibotReport";
import SellAibotReports from "./pages/buySell/sellAibot/SellAibot";
import BuySellReports from "./pages/buySell/buySellReports";
import DepositePayment from "./components/deposit/depositINRPackage/depositPayment/DepositePayment";
import WithdrawalAmountReports from "./pages/financial/withdrawalAmount/Index";
import WithdrawalForm from "./components/financial/withdrawalamount/withdrawalAmountForm/WithdrawalAmountForm";
import WithdrawalAmountINRReports from "./pages/financial/withdrawalAmountINR";
import WithdrawalINRForm from "./components/financial/withdrawalamountINR/withdrawalAmountINRForm/WithdrawalAmountINRForm";
import TransferAIBOTGiftNewPage from "./pages/transfer/transferAIBOTGiftNew";
import { TransferAIBOTGiftNewAdd } from "./components/transfer/transferAIBOTGiftNew/transferAIBOTGiftNewAdd/TransferAIBOTGiftNewAdd";
import TransferAIBOTRedeemWalletPage from "./pages/transfer/transferAIBOTRedeemWallet/TransferAIBOTRedeemWallet";
import TransferAIBOTRedeemWalletAdd from "./components/transfer/transferAIBOTRedeemWallet/transferAIBOTRedeemWalletAdd/TransferAIBOTRedeemWalletAdd";
import WhdrawalTradingINRReports from "./pages/financial/withdrawalTradingINR";
import WithdrawalTradingINRForm from "./components/financial/withdrawalTradingINR/withdrawalTradingINRForm/WithdrawalTradingINRForm";
import WithdrawalTradingUSDTReports from "./pages/financial/withdrawalTradingUSDTReport";
import WithdrawalReport from "./pages/financial/withdrawalReports";
import AccountStatementReports from "./pages/financial/accountStatements";
import IncomeSummaryReports from "./pages/financial/incomeSummary/IncomeSummary";
import WalletHaistoryReporyts from "./pages/financial/wallethistory";
import RewardsReports from "./pages/reward/rewards";
import SupportsReports from "./pages/support/supports";
import SupportsForm from "./components/supports/supportsForm/SupportsForm";
import BalanceTransfer from "./pages/balancetransfer";
import Plans from "./pages/aiplans";
import MyTree from "./pages/mytree";
import DepositMethod from "./pages/depositmethord";
// import ReferralCommissions from './pages/referralcommissions';
import BinaryCommission from "./pages/binarycommission";
import { Transactions } from "./pages/transactions";
import Investment from "./pages/investment";
import RequestEPinPage from "./pages/manageEpIn/requestEpin";
import RequestEpinAdd from "./components/manageEpIn/requestEpin/requestEpinAdd/RequestEpinAdd";
import AvialbleEpinPage from "./pages/manageEpIn/avialbleEpin";
import AvialbleEpinRecharge from "./components/manageEpIn/avialbleEpin/avialbleEpinRecharge/AvialbleEpinRecharge";
import UsedEpinPage from "./pages/manageEpIn/usedEpin";

import WelcomeLetter from "./components/vedaantaurved/userPanel/UserPanel";
import GetIdCard from "./components/vedaantaurved/getIdCard/GetIdCard";
import Bainarytree from "./pages/vedantayurveda/bainaryTree";
import FundTrasferReportPage from "./pages/fundTrasferReport";
import PerformanceBonusPage from "./pages/performanceBonus";
import MyDownlineTeamPage from "./pages/myTeam/myDownlineTeam";
import ReferalIncomePage from "./pages/income/referalIncome";
import SocityIncomePage from "./pages/income/socityIncome";
import EarningCycleBounusPage from "./pages/income/earningCycleBounus";
import BinaryTree from "./components/binerytree/BinaryTree";
import DepositReportPage from "./pages/depositReport";
import AchivementActivationPage from "./pages/income/achivementActivation";
import DepositInvesmentPage from "./pages/depositInvesment";
import DepositeTradingPage from "./pages/depositeTrading";
import DepositEarningCycles from "./pages/deposit/depositEarningCycle";
import DashboardHyip from "./components/dashboardHyip/DashboardHyip";
import PlanListrepo from "./pages/planList";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Header from "./common/header-comp/Header";
import Footer from "./common/footer-comp/Footer";
import PartnershipPage from "./pages/partnership";
import ArbitragePage from "./pages/arbitrage";

function App() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [isLogin, setislogin] = useState(window.localStorage.getItem("login"));

  const [isLoginHeader, setisloginHeader] = useState(
    window.localStorage.getItem("userToken")
  );

  const token1 = localStorage.getItem('userToken'); // First Token
  const token2 = localStorage.getItem('userIdToken'); // Second Token

  useEffect(() => {
    const token1 = localStorage.getItem('userToken');
    const token2 = localStorage.getItem('userIdToken');

    if (token1 && token2) {

      navigate('/dashboard');
    }
  }, []);

  // const [tokenStorage, setTokenStorage] = useState({
  //   userIdToken: localStorage.getItem("userIdToken"),
  //   userToken: localStorage.getItem("userToken"),
  // });

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setTokenStorage({
  //       userIdToken: localStorage.getItem("userIdToken"),
  //       userToken: localStorage.getItem("userToken"),
  //     });
  //   };

  //   window.addEventListener("storage", handleStorageChange);
  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);
  const handleLogout = () => { }
  // const handleLogout = () => {
  //   localStorage.removeItem("userIdToken");
  //   localStorage.removeItem("userToken");

  //   setTokenStorage({
  //     userIdToken: null,
  //     userToken: null,
  //   });

  //   navigate("/");
  // };

  const [walletData, setWalletData] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    window.localStorage.setItem("login", false);
  }, []);

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  // console.log('position', position);
  const [tokenNoti, setokenNoti] = useState();

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4",
      });
      setokenNoti(token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // requestPermission();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  }, []);
  // console.log("position", position)

  const walletShowHeader = async () => {
    try {
      const res = await WalletsShow();
      setWalletData(res?.data?.data);
      console.log(res?.data?.data?.main_wallet);
    } catch (error) { }
  };

  useEffect(() => {
    // dthPermission()
    // mobileRechargePermission()
    // mobileRechargePospaidPermission()
    // electricityPermission()
    // gasPermission()
    // fastagPermission()
    // bordBandPermission()
    // landLinePermission()
    // waterPermission()
    // creditCartPermission()
    // addPayoutPermission()
    walletShowHeader();
  }, []);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // const response = await bpbsAllServiceList();
        // setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      {/* {isLogin == 'false' && <Header setislogin={setislogin} />} */}
      {/* <Header />  */}

      {/* {tokenStorage.userIdToken && tokenStorage.userToken ? "" : <Header />} */}
      {!(token1 || token2) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/arbitrage" element={<ArbitragePage />} />

        <Route path="login-area" element={<MerchantLoginAreaPage />} />
        <Route
          path="Signup"
          element={<SinUpMerchantPage position={position} />}
        />
        <Route
          path="signup/:id"
          element={<SinUpMerchantPage position={position} />}
        />
        {/* <Route path="/" element={<Navigate to="/login-area" />} /> */}
        <Route path="/login-area" element={<MerchantLoginAreaPage />} />
        {/* <Route path='/registrationComplete' element={<CompeleteRegister />} /> */}
        <Route path="/is_self_declare" element={<DeclearPage />} />

        <Route
          path="/"
          element={
            <PrivateRoute
              handleLogout={handleLogout}
              tokenNoti={tokenNoti}
              walletData={walletData}
              services={services}
            />
          }
        >
          {/* <Route path="" element={<DasBoardPage />} > */}
          {/* <Route path='/Dashboard' element={<DaseboardCheckPage walletData={walletData} services={services} />} /> */}
          <Route path="/home/playNif50" element={<PlayNif50Page />} />
          <Route path="dashboard" element={<DashboardPalyNifPage />} />

          <Route path="wallet-report" element={<WalletReportPage />} />
          <Route
            path="package-payment-report"
            element={<ContestPaymentReportPage />}
          />

          <Route
            path="payment-request-to-company"
            element={<PaymentRequestViewPage />}
          />
          <Route
            path="add-payment-request"
            element={<AddPaymentRequestPage />}
          />

          <Route path="change_password" element={<PasswordChagePage />} />

          <Route path="change_txnpassword" element={<CreatePinPage />} />

          <Route path="tds_certificate" element={<TdsCertificatePage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="billing_Address" element={<BillingAddress />} />
          <Route path="open-dispute" element={<OpenDisputPage />} />
          <Route
            path="company-bank-details"
            element={<CompanyBankDetailsPage />}
          />
          <Route path="add-ticket/:id" element={<AddTicketPage />} />
          <Route path="add-ticket" element={<AddTicketPage />} />
          <Route path="list-tickets" element={<ListTicketsPage />} />
          <Route path="list-ticket-user/:id" element={<ListTicketUser />} />
          <Route path="package-list" element={<PackageListPage />} />
          {/* <Route path='loan' element={<Loan />} /> */}
          <Route
            path="package-details/:id"
            element={
              <PackageDetails
                walletShowHeader={walletShowHeader}
                walletData2={walletData}
              />
            }
          />
          <Route path="package-history" element={<PackageHistory />} />
          <Route path="TDS-Certificate" element={<TdsCertificatee />} />
          {/* <Route path='id-card' element={<IdCard />} /> */}
          <Route path="certificate" element={<Certificate />} />

          <Route path="status" element={<Status />} />
          {/* <Route path='loan-form' element={<Loanform1 />} /> */}
          <Route path="invoice" element={<Invoice />} />

          {/* <Route path="hourly-contest" element={<Nifty50HourlyContest />} /> */}
          <Route
            path="select-palyers/:id"
            element={
              <SelectPlayers
                walletShowHeader={walletShowHeader}
                walletData={walletData}
              />
            }
          />
          <Route path="select-stock" element={<SelectStock />} />
          <Route
            path="all-contest-list/:name"
            element={<AllContestListPage nameHeading="ALL CONTEST LIST" />}
          />
          <Route
            path="my-win-contest-list/:name"
            element={<AllContestListPage nameHeading="My WIN CONTEST LIST" />}
          />
          <Route
            path="upcomming-Contests-List/:name"
            element={
              <AllContestListPage nameHeading="Upcomming CONTEST LIST" />
            }
          />
          <Route
            path="live-Contests-List/:name"
            element={<AllContestListPage nameHeading="Live CONTEST LIST" />}
          />
          <Route path="all/deatils/:id" element={<AllContestRankDetails />} />
          <Route path="self/deatils/:id" element={<SelfContestRankDetails />} />
          <Route
            path="payment-getway"
            element={<PaymentGateWayPage walletShowHeader={walletShowHeader} />}
          />
          <Route path="how-to-play" element={<HowToplayPage />} />

          <Route path="my_kyc" element={<StaffKycPage />} />
          <Route path="news_deatils/:id" element={<DetailsNewsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog_news_deatils/:id" element={<BlogDetails />} />
          <Route
            path="add-withdraw-request"
            element={<AddWithdrawRequestPage />}
          />
          <Route
            path="pending-list-withdraw-request/:name"
            element={
              <ListWithdrawRequestsPage
                nameHeading={"LIST WITHDRAW REQUESTED PENDING"}
              />
            }
          />
          <Route
            path="approved-list-withdraw-request/:name"
            element={
              <ListWithdrawRequestsPage
                nameHeading={"LIST WITHDRAW REQUESTED Approved"}
              />
            }
          />
          <Route
            path="rejected-list-withdraw-request/:name"
            element={
              <ListWithdrawRequestsPage
                nameHeading={"LIST WITHDRAW REQUESTED Rejected"}
              />
            }
          />
          <Route
            path="all-list-withdraw-request/:name"
            element={
              <ListWithdrawRequestsPage
                nameHeading={"LIST WITHDRAW REQUESTED All"}
              />
            }
          />
          <Route path="my-referred-member" element={<MyReferedMemberPage />} />
          {/* New Route */}
          <Route path="aibot/level-income" element={<LevelIncome />} />
          <Route path="aibot/matching-income" element={<MatchingIncome />} />
          <Route
            path="aibot/staking-matching-income"
            element={<StakingMatchingIncome />}
          />
          <Route path="aibot/ib-income" element={<IbIncome />} />
          <Route
            path="aibot/achivement-income"
            element={<AchivementIncome />}
          />
          <Route
            path="aibot/compounding-income"
            element={<CompoundingIncome />}
          />
          <Route path="aibot/reward-income" element={<RewardIncome />} />
          <Route path="aibot/club-income" element={<ClubIncome />} />
          <Route
            path="aibot/trading-income"
            element={<TradingProfitIncome />}
          />
          <Route path="direct-team" element={<DirectTeamPage />} />
          <Route path="all-team" element={<AllTeamPage />} />
          <Route path="unilevel" element={<UnilevelPage />} />
          <Route path="business-histroy" element={<BusinessHistoryPage />} />
          <Route
            path="trading-level-income"
            element={<TradingLevelIncomePage />}
          />
          <Route
            path="Compounding-profit-income"
            element={<CompoundingProfitIncomePage />}
          />
          <Route path="TLC-profit" element={<GiftTlcProfitPage />} />
          <Route
            path="direct-TLC-profit"
            element={<GiftDirectTLCProfitPage />}
          />
          <Route
            path="aibot/trading-robot-reports"
            element={<TradingRobotReport />}
          />
          <Route
            path="aibot/trading-robot-create"
            element={<TradingRobotForm />}
          />
          <Route
            path="aibot/renewal-trading-reports"
            element={<RenewalTradingReports />}
          />
          <Route
            path="aibot/renewal-trading-create"
            element={<RenewalTradingForm />}
          />
          <Route
            path="aibot/investment-robot-reports"
            element={<IvestmentRobotReports />}
          />
          <Route
            path="aibot/investment-robot-create"
            element={<InvestmentRobotForm />}
          />
          <Route path="aibot/portfolio" element={<PortfolioReports />} />
          <Route
            path="aibot/staking-tlc-reports"
            element={<StakingTLCReports />}
          />
          <Route path="aibot/staking-tlc-create" element={<StakingTLCForm />} />
          <Route
            path="aibot/staking-income-reports"
            element={<StakingIncomeReports />}
          />
          <Route path="AIBOT-ICO" element={<Tlc2isoPage />} />
          <Route path="buy-Aibot-ICO" element={<TLC20ICOAdd />} />
          <Route
            path="AIBOT20-ICO-level-income"
            element={<TLC20ICOLevelIncomePage />}
          />
          <Route
            path="AIBOT20-level-income"
            element={<TLC20LevelIncomePage />}
          />
          <Route path="AIBOT20-profit" element={<TLC20ProfitPage />} />
          <Route path="deposit" element={<DepositviaGatewayPage />} />
          <Route path="invoices" element={<DepositInvoicePage />} />
          <Route path="deposit-INR" element={<DepositINRPackagePage />} />
          <Route
            path="deposit-INR-Staking"
            element={<DepositINRStakingPage />}
          />
          <Route path="invoices-INR" element={<DepositInvoicesINRPage />} />
          <Route
            path="transfer-fund"
            element={
              <TransfertoPackageWalletPage
                walletShowHeader={walletShowHeader}
                walletData={walletData}
              />
            }
          />
          <Route
            path="transfer-fund-report"
            element={<FundTrasferReportPage />}
          />
          <Route path="aibot/buy-aibot" element={<BuyAibot />} />
          <Route
            path="aibot/sell-aibot-reports"
            element={<SellAibotReports />}
          />
          <Route path="aibot/buy-sell-reports" element={<BuySellReports />} />
          <Route
            path="aibot/payment/paymentId=CPJA39DSO335NVJQ5XKXZSGDNN"
            element={<DepositePayment />}
          />
          <Route
            path="aibot/finance/withdrawal-amount"
            element={<WithdrawalAmountReports />}
          />
          <Route
            path="aibot/finance/withdrawal-amount-create"
            element={<WithdrawalForm />}
          />
          <Route
            path="aibot/finance/withdrawal-amount-INR"
            element={<WithdrawalAmountINRReports />}
          />
          <Route
            path="aibot/finance/withdrawal-amount-INR-create"
            element={<WithdrawalINRForm />}
          />
          <Route
            path="transfer-fund-AIBOT-Gift"
            element={<TransferAIBOTGiftNewPage />}
          />
          <Route
            path="transfer-fund-AIBOT-Gift-add"
            element={<TransferAIBOTGiftNewAdd />}
          />
          <Route
            path="transfer-fund-AIBOT-redeemable"
            element={<TransferAIBOTRedeemWalletPage />}
          />
          <Route
            path="transfer-fund-AIBOT-redeemable-add"
            element={<TransferAIBOTRedeemWalletAdd />}
          />
          <Route
            path="aibot/withdrawal-trading-wallet"
            element={<WhdrawalTradingINRReports />}
          />
          <Route
            path="aibot/withdrawal-trading-wallet-create"
            element={<WithdrawalTradingINRForm />}
          />
          <Route
            path="aibot/withdrawal-trading-usdt-reports"
            element={<WithdrawalTradingUSDTReports />}
          />
          <Route
            path="aibot/withdrawal-statements-reports"
            element={<WithdrawalReport />}
          />
          <Route
            path="aibot/account-statements-reports"
            element={<AccountStatementReports />}
          />
          <Route
            path="aibot/income-summary-reports"
            element={<IncomeSummaryReports />}
          />
          <Route
            path="aibot/account-statements-reports"
            element={<AccountStatementReports />}
          />
          <Route
            path="aibot/wallet-history-reports"
            element={<WalletHaistoryReporyts />}
          />
          <Route path="aibot/rewards-reports" element={<RewardsReports />} />
          <Route path="aibot/supports-reports" element={<SupportsReports />} />
          <Route path="aibot/supports-create" element={<SupportsForm />} />
          <Route path="performance-bonus" element={<PerformanceBonusPage />} />
          <Route
            path="achievement-activated"
            element={<AchivementActivationPage />}
          />

          <Route path="RequestEpin" element={<RequestEPinPage />} />
          <Route path="RequestEpin-add" element={<RequestEpinAdd />} />
          <Route path="remaining-epin" element={<AvialbleEpinPage />} />
          <Route path="epin-recharge-add" element={<AvialbleEpinRecharge />} />
          <Route path="user-total-epin" element={<UsedEpinPage />} />

          <Route path="my-downline-team" element={<MyDownlineTeamPage />} />
          <Route path="referal-income" element={<ReferalIncomePage />} />
          <Route path="society-income" element={<SocityIncomePage />} />
          <Route
            path="earning-cycle-bounus"
            element={<EarningCycleBounusPage />}
          />

          {/* .................. Atif ................ */}
          <Route path="balancetransfer" element={<BalanceTransfer />} />
          <Route
            path="plan"
            element={
              <Plans
                walletShowHeader={walletShowHeader}
                walletData={walletData}
              />
            }
          />
          <Route path="mytree" element={<MyTree />} />
          <Route path="depositmethod" element={<DepositMethod />} />
          {/* <Route path="referralcommissions" element={<ReferralCommissions />} /> */}
          <Route path="binarycommission" element={<BinaryCommission />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="investment" element={<Investment />} />

          <Route path="deposit-report" element={<DepositReportPage />} />
          <Route
            path="deposit-invesment-report"
            element={<DepositInvesmentPage />}
          />

          {/* neRoute */}
          {/* suhaib */}
          <Route
            path="aibot/User-Panel/Member/welcomeletter"
            element={<WelcomeLetter />}
          />
          <Route
            path="aibot/User-Panel/Member/getIDcard"
            element={<GetIdCard />}
          />
          <Route
            path="aibot/User-Panel/Member/binarytree"
            element={<Bainarytree />}
          />

          <Route path="binarytree" element={<BinaryTree />} />
          <Route path="deposit-trading" element={<DepositeTradingPage />} />
          <Route
            path="deposit-earning-cycle"
            element={<DepositEarningCycles />}
          />
          <Route path="india-world-dashboard" element={<DashboardHyip />} />
          <Route path="plan-list" element={<PlanListrepo />} />

          {/* suhaib */}
        </Route>
        {/* <Route /> */}
      </Routes>
      {/* {tokenStorage.userIdToken && tokenStorage.userToken ? "" : <Footer />} */}
      {!(token1 || token2) && <Footer />}


      {/* {isLogin == 'false' && <Footer />} */}
      {/* <div className='LayoutMain'>
      </div> */}
    </>
  );
}

export default App;
