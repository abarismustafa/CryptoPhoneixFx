import axiosInstancee from "../../axiosServiseFactory/aesEncription/AesEncripition";
import { baseUr2, baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";
import { validateYupSchema } from "formik";

const token = window.localStorage.getItem("userIdToken")

/**
 * userType function use for getting userType list
 * @param {*} data 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const userType = (data) => {
  return axiosInstance.get(`${baseUrl}usertype/public/list`);
};

/**
 * isMobileExits function use for checking mobile number is already exist or not 
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const isMobileExits = (value) => {
  return axiosInstance.get(`${baseUrl}auth/isMobileNoExist/${value}`);
};

/**
 * isEmailExits function use for checking email is already exist or not.
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const isEmailExits = (value) => {
  return axiosInstance.get(`${baseUrl}auth/isEmailexist/${value}`);
};

/**
 * isEmailExits2 function use for checking email is already exist or not.
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const isEmailExits2 = (value) => {
  return axiosInstance.get(`${baseUrl}auth/isEmailexist/${value}`);
};

/**
 * mobileGenerateOtp function use for OTP genreate
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const mobileGenerateOtp = (value) => {
  return axios.post(`${baseUrl}auth/forgotPassInitiateByMobile`, value);
};

/**
 * emailGenerateOtp function use for email OTP genreate
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const emailGenerateOtp = (value) => {
  return axios.post(`${baseUrl}auth/forgotPassInitiateByEmail`, value);
};

/**
 * fogotPassVerifyByEmail verify email
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const fogotPassVerifyByEmail = (value) => {
  return axios.post(`${baseUrl}auth/fogotPassVerifyByEmail`, value);
};

/**
 * fogotPassVerifyByMobile verify mobile
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const fogotPassVerifyByMobile = (value) => {
  return axios.post(`${baseUrl}auth/fogotPassVerifyByMobile`, value);
};

/**
 * resetApi function use reset password
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const resetApi = (value) => {


  return axios.put(`${baseUrl}auth/v1/resetPassword`, value);
};

/**
 * sinupApi function use create users
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const sinupApi = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNo`, value);
};

/**
 * EmailGenerateOtp frunction use for genrate email otp
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const EmailGenerateOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmail`, value);
};

/**
 * isVerifiedMobileOtp frunction use for OTP verify according to mobile number
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const isVerifiedMobileOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNoOtp`, value);
};

/**
 * isVerifiedEmailOtp frunction use for OTP verify according to email
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const isVerifiedEmailOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmailOtp`, value);
};

/**
 * registerUser frunction use for create user
 * @param {object} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
// export const registerUser = (value) => {
//   return axiosInstance.post(`${baseUrl}auth/mb/register`, value);
// };
// export const registerUser = (value) => {
//   return axiosInstance.post(`${baseUrl}auth/refer/user/register`, value);
// };

// export const registerUser = (value) => {
//   return axiosInstance.post(`${baseUrl}mlm/register`, value);
// };

export const registerUser = (value) => {
  return axiosInstance.post(`${baseUrl}auth/mb/register`, value);
};

/**
 * panNumberVarify frunction use for verify pan number
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const panNumberVarify = (value) => {
  return axios.post(`${baseUrl}verification/pan/verifypanOtp`, value);
};

/**
 * adharGenerateOtp frunction use adhar genrate OTP
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const adharGenerateOtp = (value) => {
  return axios.post(`${baseUrl}verification/adhaar/otp`, value);
};

/**
 * subOtp frunction use for adhar otp verify
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const subOtp = (value) => {
  return axios.post(`${baseUrl}verification/adhaar/verify`, value);
};

/**
 * personalDetails frunction use for store persnal details
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const personalDetails = (value) => {
  return axios.post(`${baseUrl}verification/personalDetails`, value);
};

/**
 * GstBusiness frunction use for getting business details
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const GstBusiness = (value) => {
  return axios.post(`${baseUrl}verification/gstno`, value,);
};

/**
 * GstBusinessAfterVerifide frunction use for verifyed
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const GstBusinessAfterVerifide = (value) => {
  return axios.post(`${baseUrl}verification/gstNoSave`, value);
};

/**
 * getDetailByPin frunction use for getting detail by Pin
 * @param {string} value 
 * @returns Json
 * @author Parimal <from PayPanda>
 * @email primal.srivastav@paypanda.in
 * @since 06/08/2024
 */
export const getDetailByPin = (value) => {
  return axios.get(`${baseUrl}pin/pincode/${value}`);
};

export const userLogin = (value) => {
  console.log("value", value)
  return axiosInstance.post(`${baseUrl}auth/mb/login`, value);
};
export const userLoginOtp = (value) => {

  return axiosInstance.post(`${baseUrl}auth/mb/verifyLoginOtp`, value);
};

export const bankAccount = (value) => {
  return axios.post(`${baseUrl}verification/bankAccount`, value);
};
export const bankAccountSave = (value) => {
  return axios.post(`${baseUrl}verification/bankAccountSave`, value);
};
export const videoKycUpload = (value) => {
  return axios.post(`${baseUrl}verification/kycUpload`, value);
};

export const userValidate = (value) => {
  return axiosInstance.get(`${baseUrl}auth/userValidate`);
};
export const userValidateAllData = (value) => {
  return axiosInstance.get(`${baseUrl}user/onBoard`);
};

export const cloudImage = (value) => {
  return axios.post(`${baseUrl}cloudinary/addImage`, value);
};
export const uploadDocument = (value) => {
  return axios.post(`${baseUrl}userdocument/add_doc`, value);
};
export const CountryList = (value) => {
  return axiosInstance.get(`${baseUrl}country/public/list`);
};

export const getCountry = (value) => {
  return axios.get(`${baseUrl}country/public/list`);
};

export const getPersionDetail = (value) => {
  return axios.get(`${baseUrl}deliveryaddress/permanentAdd`, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getState = (value) => {
  return axios.get(`${baseUrl}state/mb/public`);
};

export const declarationSub = (value) => {
  return axios.post(`${baseUrl}verification/docSave`, value);
};
export const sendShipping = (value) => {
  return axios.post(`${baseUrl}deliveryaddress/user/addDeliveryaddress`, value);
};
// profileUpdate

export const updateProfilee = (value) => {
  return axios.put(`${baseUrl}auth/mb/update/profile`, value);
};

export const countryGet = (value) => {
  return axios.get(`${baseUrl}country/mb/public`);
};
export const languageGet = () => {
  return axios.get(`${baseUrl}language/lang/list`);
};
export const Getprofile = () => {
  return axios.get(`${baseUrl}auth/mb/get/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// profileUpdate



export const sendShippingUpdate = ({ value, id }) => {
  return axios.put(`${baseUrl}deliveryaddress/user/updatedeliveryaddress/${id}`, value);
};

export const getShippingAddress = (value) => {
  return axios.get(`${baseUrl}deliveryaddress/user/shipping`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getShippingAddressById = (id) => {
  return axios.get(`${baseUrl}deliveryaddress/user/detail/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getShippingAddressDelete = (id) => {
  return axios.delete(`${baseUrl}deliveryaddress/user/deletedeliveryaddress/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getBillingAddress = (value) => {
  return axios.get(`${baseUrl}deliveryaddress/user/billing`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};





// dmt

export const CustomerInfo = (value) => {
  return axios.get(`${baseUrl}eko/customerProfile?mobileNo=${value.mobile}&api_id=${value.api_id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const createCustomer = (value) => {
  return axios.post(`${baseUrl}eko/createCustomer`, value);
};
export const ekoVeryfyCustomer = (value) => {
  console.log("valuesverfy", value)
  return axios.post(`${baseUrl}eko/verifyCustomer`, value);
};
export const verifybank3otp = (value) => {
  // console.log("valuesverfy",value)
  return axios.post(`${baseUrl}dmt/onboardingOtpValidate`, value);
};
export const resendOtpsCustomer = (value) => {
  return axios.post(`${baseUrl}eko/resendCustomerOtp`, value);
};
export const resendbank3otp = (value) => {
  return axios.post(`${baseUrl}dmt/onboardingOtpValidate`, value);
};
export const reciptList = (value) => {
  console.log(value);
  return axios.get(`${baseUrl}eko/recipientList?mobileNo=${value.mobile}&api_id=${value.api_id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const bankListApi = () => {
  return axios.get(`${baseUrl}dmt_bank/public/list`);
};

export const bankListApiwithid = (api_id) => {
  return axios.get(`${baseUrl}dmt_bank/public/list`, {
    params: { api_id }
  });
};

// export const BENEFICIARYAdd = (value) => {
//   return axios.post(`${baseUrl}eko/recipientAdd`, value, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };
// export const BENEFICIARYDelete = (value) => {
//   return axios.post(`${baseUrl}eko/recipientDelete`, value);
// };

// export const sendMoneyTrans = (value) => {
//   console.log(value);
//   return axios.post(`${baseUrl}dmt_txn/trans`, value);
// };

// export const dmtTransiList = (value) => {
//   return axios.post(`${baseUrl}dmt_txn/report`, value);
// };

export const walletsREports = (value) => {
  return axios.post(`${baseUrl}mainwallet/public/filter`, value);
};

export const contestPyamentRports = (value) => {
  // console.log('contest', value);

  return axios.post(`${baseUrl}transaction/public`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const planPyamentRports = (value) => {
  // console.log('contest', value);
  return axios.post(`${baseUrl}MlmPackagePurchase/public`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
// export const walletsREportscomission = (filterData) => {
//   let url = `${baseUrl}mainwallet/public/filter?`;

//   if (filterData.userId) url += `userId=${encodeURIComponent(filterData.userId)}&`;
//   if (filterData.name) url += `name=${encodeURIComponent(filterData.name)}&`;
//   if (filterData.email) url += `email=${encodeURIComponent(filterData.email)}&`;
//   if (filterData.mobile) url += `mobile=${encodeURIComponent(filterData.mobile)}&`;
//   if (filterData.is_approved !== '') url += `is_approved=${filterData.is_approved}&`;
//   if (filterData.refer_id) url += `refer_id=${encodeURIComponent(filterData.refer_id)}&`;
//   if (filterData.startDate) url += `startDate=${encodeURIComponent(filterData.startDate)}&`;
//   if (filterData.endDate) url += `endDate=${encodeURIComponent(filterData.endDate)}&`;
//   if (filterData.transactionType) url += `transactionType=${encodeURIComponent(filterData.transactionType)}&`;

//   // Remove trailing '&' if present
//   url = url.endsWith('&') ? url.slice(0, -1) : url;

//   return axios.get(url, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };


// export const walletsReportsCommission = (value) => {
//   console.log(value);
//   return axios.post(`${baseUrl}mainwallet/public/filter`, value, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };



// export const aepsPayoutReport = (value) => {
//   console.log(value);
//   return axios.get(`${baseUrl}payout/public?start_date=${value?.start_date}&end_date=${value?.end_date}&txn_id=${value?.txn_id}&page=${value?.page}&count=${value?.count}`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };


// export const allDataDmt = (value) => {
//   return axios.post(`${baseUrl}dmt_txn/report/all`, value);
// };
// export const allDataPayment = (value) => {
//   return axios.post(`${baseUrl}paymentrequest/user/all`, value);
// };
export const allDataPayment = (value) => {
  return axios.post(`${baseUrl}paymentrequest/user/all`, value);
};
export const allDataWallets = (value) => {
  return axios.post(`${baseUrl}mainwallet/public/filter/all`, value);
};

// export const payoutAllData = (value) => {
//   return axios.get(`${baseUrl}payout/public/all`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };



export const bankPublic = (value) => {
  return axios.get(`${baseUrl}bank/public`);
};




// dmt

export const WalletsShow = () => {
  return axios.get(`${baseUrl}auth/userValidate`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




export const addPaymentRequest = (value) => {
  return axios.post(`${baseUrl}paymentRequest/addRequest`, value);
};

export const paymentRequest = (value) => {
  console.log(value);
  return axios.post(`${baseUrl}paymentRequest/user`, value);
};

export const paymentEnquiry = (id) => {
  return axios.get(`${baseUrl}dmt_txn/trans/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
}

export const trasferTo = () => {
  return axios.get(`${baseUrl}paymentRequestToUser/permit`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
}

export const paymentRequestToUser = (value) => {
  return axios.post(`${baseUrl}paymentRequestTouser/user`, value);
};
// export const sendOtpRef = (value) => {
//   return axios.post(`${baseUrl}dmt_txn/refund/initialize`, value);
// };
// export const subOtpRef = (value) => {
//   return axios.post(`${baseUrl}dmt_txn/refund/verify`, value);
// };
export const paymentRequestToUserAll = (value) => {
  return axios.post(`${baseUrl}paymentRequestToUser/user/all`, value);
};


export const paymentRequestToUseradmin = (value) => {
  return axios.post(`${baseUrl}paymentRequestToUser/user`, value);
};
export const paymentRequestToUseradminAll = (value) => {
  return axios.post(`${baseUrl}paymentRequestToUser/user/all`, value);
};

export const paymentRequestMemberHistoryUpdate = (value) => {
  return axios.put(`${baseUrl}paymentrequesttouser/transfer`, value);
};

export const changePassword = (value) => {
  return axios.put(`${baseUrl}auth/passwordChange`, value);
};

export const pinChange = (value) => {
  return axios.put(`${baseUrl}auth/pinChange`, value);
};


export const dateGet = (value) => {
  return axios.get(`${baseUrl}dashboard/public?date=${value}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
}

// export const dmtDtails = (value) => {
//   return axios.get(`${baseUrl}dmt_txn/batchId/${value}`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// }

// export const chargeBeneficiay = (value) => {
//   return axios.get(`${baseUrl}setting/bankVerify`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// }

export const verificationBank = (value) => {
  return axios.post(`${baseUrl}verification/bankVerification`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  })
}






export const settingBank = () => {
  return axios.get(`${baseUrl}setting/dmtType`);
};


export const aepsWallets = (value) => {
  return axios.post(`${baseUrl}aepswallet/public/filter`, value);
};
export const aepsWalletsAll = (value) => {
  return axios.post(`${baseUrl}aepswallet/public/filter/all`, value);
}
export const issueDisputeList = () => {
  return axios.get(`${baseUrl}dmtdisputeReasons/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const issueDisputeListSumit = (value) => {
  return axios.post(`${baseUrl}dmtdisputes/add_dispute`, value);
};

export const ForgotPinGet = () => {
  return axios.get(`${baseUrl}auth/forgotPinSendOtp`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const ForgotPinOtp = (value) => {
  return axios.put(`${baseUrl}auth/forgotPinVerifyOtp`, value);
};

export const emailSinup = (value) => {
  // console.log(value);
  return axios.post(`${baseUrl}auth/mb/verifyEmail`, value);
};
export const emailSinupOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmailOtp`, value);
};


export const getPincodeDetails = (value) => {
  return axios.get(`${baseUrl}pin/pinCode/${value}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const notifications = (count, page) => {
  return axios.get(`${baseUrl}notification/summary/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const notificationsList = (count, page, read) => {
  return axios.get(`${baseUrl}notification/filter/public?count=${count}&page=${page}&readed=${read}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// onBoadingPart









// onBoadingPart



///Health and Support

export const department = () => {
  return axios.get(`${baseUrl}department/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const dmtDisputePriority = () => {
  return axios.get(`${baseUrl}dmtDisputePriority/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const dmtDisputeStatus = () => {
  return axios.get(`${baseUrl}dmtstatus/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedService = () => {
  return axios.get(`${baseUrl}course/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const addTicket = (value) => {
  return axios.post(`${baseUrl}dmtDisputes/add_dispute`, value);
};

export const listTicket = (value) => {
  return axios.post(`${baseUrl}dmtDisputes/public`, value);
};

export const dmtdisputechat = (value) => {

  return axios.get(`${baseUrl}dmtdisputechat/public?dispute_id=${value.id}&count=${value.count}&page=${value.page}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const repayTicket = (value) => {
  return axios.post(`${baseUrl}dmtdisputeChat/add_dispute/public`, value);
};


export const packList = () => {
  return axios.get(`${baseUrl}package/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const pacDetails = (id) => {
  return axios.get(`${baseUrl}package/public/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const packageBuy = (value) => {
  return axios.post(`${baseUrl}packagePayment/pay`, value);
};



export const packageHistory = (value) => {
  console.log('fdgdgf', value);
  return axios.get(`${baseUrl}packagePayment/history?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&package_id=${value?.package_id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

///Health and Support

// bbbps



// bbbps

//tpin
export const generateOtpForTpin = () => {
  return axios.get(`${baseUrl}auth/generateOtpForTpin`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const generateOtpForResendTpin = () => {
  return axios.get(`${baseUrl}auth/resendOtpForTpin`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const verifyOtpForTpin = (value) => {

  return axios.post(`${baseUrl}auth/varifyOtpForTpin`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const generatenewTpin = (value) => {

  return axios.post(`${baseUrl}auth/genNewTpin`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const authCertificate = () => {
  return axios.get(`${baseUrl}user/certificate`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// export const aepsAdd = (value) => {
//   return axiosInstancee.post(`${baseUrl}payout/addAccount`, value);
// };

// export const payoutBenefiaries = () => {
//   return axios.get(`${baseUrl}payout/Benefiaries`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };

// export const payoutAccountEnquiry = (value) => {
//   return axios.get(`${baseUrl}payout/account/enquiry/${value}`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };

// export const payoutBankDelete = (value) => {
//   return axios.delete(`${baseUrl}payout/bank/${value}`, {
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };

export const payoutDoTransaction = (value) => {
  return axiosInstancee.post(`${baseUrl}payout/doTransaction`, value);
};
export const postNotification = (value) => {
  // console.log(value, "------------value");
  return axios.post(`${baseUrl}fcm/save`, value);
};


//referid
export const onboardingRequest = (value) => {

  return axios.post(`${baseUrl}auth/onboardingRequest`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

//loginresendotp

export const resendOtpsloginForm = (value) => {
  return axiosInstance.post(`${baseUrl}auth/mb/login/resendOtp`, value);
};
export const resendOtpslogin = (value) => {
  return axios.post(`${baseUrl}auth/resendOtp`, value);
};
export const resendOtpsforgetPassword = (value) => {
  console.log("value", value)
  return axios.post(`${baseUrl}auth/resentOtpForgotPass`, value);
};
export const resendOtpsTpin = (value) => {
  return axios.post(`${baseUrl}auth/resendOtpForgotPass`, value);
};





export const getDownstreamList = (page, count, id = '', filterData = {}) => {
  let url = `${baseUrl}user/referTo?page=${page}&count=${count}`;

  if (id) {
    console.log("id", id)
    url += `&id=${id}`;
  }

  // Add filter parameters to the URL
  if (filterData.userId) url += `&userId=${encodeURIComponent(filterData.userId)}`;
  if (filterData.name) url += `&name=${encodeURIComponent(filterData.name)}`;
  if (filterData.email) url += `&email=${encodeURIComponent(filterData.email)}`;
  if (filterData.mobile) url += `&mobile=${encodeURIComponent(filterData.mobile)}`;
  if (filterData.is_approved) url += `&is_approved=${filterData.is_approved}`;
  if (filterData.refer_id) url += `&refer_id=${encodeURIComponent(filterData.refer_id)}`;

  return axios.get(url, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getDownstreamListReport = (page, count, id = '') => {
  let url = `${baseUrl}report/fundtransfer?page=${page}&count=${count}&to=${id}`;

  // if (id) {
  //   url += `&id=${id}`;
  // }

  return axios.get(url, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getEarnings = (page, count, id = '') => {
  let url = `${baseUrl}report/fundtransfer?page=${page}&count=${count}&to=${id}`;
  if (id) {
    url += `&id=${id}`;
  }
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const fundtransferToRefer = (value) => {
  return axios.post(`${baseUrl}user/fundTransferToRefer`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
// export const reversefundTransction = (value) => {
//   return axios.post(`${baseUrl}/user/fundReverseVerify`, value, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };

export const confirmReverseTransfer = async (data) => {
  return await axios.post(`${baseUrl}user/fundReverseVerify`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`
    }
  });
};

export const cassDepositApi = (value) => {
  return axios.get(`${baseUrl}aeps/cashDepositBankList`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const refersSet = (value) => {
  return axios.get(`${baseUrl}mlm/refer?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&position=${value?.position}&plan_id=${value?.plan_id}&parent_position=${value?.parent_position}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// 67923cde59c17b91855ad1cc
export const binerytreeGet = (value) => {
  return axios.get(`${baseUrl}mlm/graph?id=${value ? value : ""}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const downlineGet = (value) => {
  return axios.get(`${baseUrl}mlm/downline?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&position=${value?.position}&plan_id=${value?.plan_id}&parent_position=${value?.parent_position}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const lavelIncomeGet = (value) => {
  return axios.get(`${baseUrl}mlm_level_record/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const referal_recordGet = (value) => {
  return axios.get(`${baseUrl}mlm_referal_record/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const mlm_reward_recordGet = (value) => {
  return axios.get(`${baseUrl}mlm_reward_record/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// export const ledgerReport = async (page, count, startDate, endDate) => {
//   try {
//     let url = `${baseUrl}dashboard/ledgerReport`;

//     const params = new URLSearchParams({
//       page: page.toString(),
//       count: count.toString()
//     });

//     if (startDate) {
//       params.append('start_date', startDate);
//     }

//     if (endDate) {
//       params.append('end_date', endDate);
//     }

//     url += `?${params.toString()}`;

//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching ledger report:', error);
//     throw error;
//   }
// };
// export const ledgerReportAll = async ( startDate, endDate) => {
//   try {
//     let url = `${baseUrl}dashboard/ledgerReport/all`;

//     const params = new URLSearchParams({

//     });

//     if (startDate) {
//       params.append('start_date', startDate);
//     }

//     if (endDate) {
//       params.append('end_date', endDate);
//     }

//     url += `?${params.toString()}`;

//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching ledger report:', error);
//     throw error;
//   }
// };



export const commissionServiceByReport = async (startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/commisionReportByServicesForMerchantPanel?`;

    const params = new URLSearchParams();

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    // Retrieve the Bearer token from localStorage
    const token = localStorage.getItem('userToken');

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const tdsServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/tdsReportByServicesForMerchan?`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};

export const chargeServiceByReport = async (startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/chargeReportByServicesForMerchant?`;

    const params = new URLSearchParams();

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    // Retrieve the Bearer token from localStorage
    const token = localStorage.getItem('userToken');

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
// Usage:
export const demoapiCheck = async () => {
  return await axios.get(`${baseUrl}service_user_permission/service/list`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`
    }
  });
};
export const aepsInvoice = (id) => {
  return axios.get(`${baseUrl}aepstxn/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const aadharpayInvoice = (id) => {
  return axios.get(`${baseUrl}adhaarPay/invoice/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const cmdInvoice = (id) => {
  return axios.get(`${baseUrl}cms/invoice/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const payoutInvoice = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}payout/invoice/${id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching package invoice:', error);
    throw error;
  }
};


export const getapyoutinenqury = (params) => {
  return axios.get(`${baseUrl}payout/trans/enquiry/${params}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const getServiceCategoryid = () => {
  return axios.get(`${baseUrl}course/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// export const currencyAdd = (data) => {
//   return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
// };
// export const currencyList = (data) => {
//   return axiosInstance.get(`${baseUrl}currency`);
// };
// export const currencyDelete = (id) => {
//   return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
// };


// travelApiIntigrate

export const currencyListMain = (data) => {
  return axiosInstance.get(`${baseUrl}currency/public`);
};




// travelApiIntigrate

export const markettype = (value) => {
  // console.log(value);

  return axios.get(`${baseUr2}markettype/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  }
  );
};

export const contextType = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}contest/filter`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const rozarPayApi = (value) => {
  // console.log(value);
  return axios.post(`${baseUr2}paymentGateway/payment`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const paymentgatewaycheckout = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}paymentgateway/checkout`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const add_participateContestant = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}contestParticipate/add_participateContestant`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const contestPublic = (value) => {
  // console.log(value);

  return axios.get(`${baseUr2}contest/public/${value}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const contestParticipate = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}contestParticipate/public`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const contestParticipateAll = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}contestParticipate/public/all`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const contestTypes = (value) => {
  // console.log(value);

  return axios.get(`${baseUr2}contestType/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const checkoutContestParticipate = (value) => {
  // console.log(value);
  return axios.post(`${baseUr2}paymentgateway/checkout/contest`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




export const contestAllDeatilsRank = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}contestParticipate/ListByContestRank/public?page=${value?.page}&id=${value?.id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const contestSelfDeatilsRank = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}contestParticipate/ListByContestRankByUserSelf?page=${value?.page}&id=${value?.id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const dashboardPublic = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}mlm_dashboard/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const newContest = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}contest/newContest`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const addStaffKycDoc = (value) => {

  // console.log(value);

  return axios.put(`${baseUr2}staff_document/public/add_Doc`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const staffKycDocGet = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}staff_document/public/kycView`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const marqueGet = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}news/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const marqueDetails = (value) => {

  // console.log(value);

  return axios.get(`${baseUr2}news/public/${value?.id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const slelectPaymetSet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}paymentGatewayCredentials/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const blogCategory = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}blogCategory/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const blogCategoryID = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}blog/public?blog_id=${value}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const blogCategoryDetails = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}blog/public/${value}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const withdrawPost = (value) => {
  // console.log(value);
  return axios.post(`${baseUr2}withdraw/addType`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const withdrowRports = (value) => {
  // console.log('contest', value);

  return axios.post(`${baseUrl}withdraw/public`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
// console.log(window.localStorage.getItem('userToken'));


export const plan = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}Mlm_Plan/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const referVerifyPost = (value) => {
  // console.log('contest', value);

  return axios.post(`${baseUrl}auth/referVerify`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const addPlanPurchage = (value) => {
  // console.log(value);

  return axios.post(`${baseUr2}MlmPackagePurchase/pay`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const fundTrasferGet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}report/fundtransfer/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const depositGetMaster = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_deposit/public`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const addDeposit = (value) => {
  // console.log(value);
  return axios.post(`${baseUr2}mlm_deposit_request/addType`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const depositReportGet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_deposit_request/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const matchingBonousGet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_matching/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const achievementBonousGet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_achievementIncome/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const achievemenActivationGet = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_achievementActivated/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const depositInvesmentGet = (value) => {
  return axios.post(`${baseUrl}deposit_wallet/public/filter`, value);
};
// shoib Akhtar
export const getDepositTradingData = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_deposit_trading/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getDepositearningCycleData = (value) => {
  // console.log(value);
  return axios.get(`${baseUr2}mlm_Deposit_earning_cycle/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getRoiIncomeRepots = (value) => {
  return axios.get(`${baseUr2}mlm_roi_income_report/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const geSocietyIncomeRepots = (value) => {
  return axios.get(`${baseUr2}mlm_society_income_report/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const tipinRequestPost = (value) => {
  // console.log(value);
  return axios.post(`${baseUr2}tpinRequest/add/public`, value, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getpinRequestRepot = (value) => {
  return axios.get(`${baseUr2}tpinRequest/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getmlm_tpin_transferRepot = (value) => {
  return axios.get(`${baseUr2}mlm_tpin_transfer/public?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



