import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
// import { LoginReducer } from './pages/LoginPage/Reducers/reducers';
import {
        // ActiveReservation
        reducerActiveReservation,

        //ReservationEnquiry
        reducerReservationEnquiry,

        reducerAvailableAreas,
        selectedAreasFromReducer,
        getSeatingsFromReducer,

        reducermenuPackages,
        selectedmenuPackagesReducer,

        reducerServices,
        reducerVendorsServiceId,
        // selectedServicesReducer,

        getFunctionsFromReducer,
        getFunctionDetailsFromReducer,
        getFunctionByIdFromReducer,
        getOrganizationsFromReducer,
        getCustomersByOrgFromReducer,
        getReservationStatusFromReducer,
        reservationByIdFromReducer

        // reducerByIdVendor
} from './pages/Reservation/reducers/ReservationReducers';
import {
        contactPersonReducer,
        editContactPersonReducer,
        reducerEditContactPerson,
        reducerDepartmentContactPerson,
        reducerDesignationContactPerson,

} from './pages/Reservation/ReservationContactPerson/ReservationContactPersonReducer/contactPersonReducer';

import {
        LoginSuccess,
        LoginFail,
        ForgotRequestSuccess,
        ForgotRequestFail,
        PermissionRequestSuccess,
        PermissionRequestFail,
        RegistrationRequestSuccess,
        RegistrationRequestFail
} from 'pages/LoginPage/Reducers';


import {
        reducerByIdAreaBooking,
        reducerListAreaBooking,
        reducerSaveAreaBooking,
        reducerDeleteAreaBooking,
        reducerExistsAreaBooking
} from './pages/masters/AreaBooking/reducers/AreaBookingReducers'
import {
        reducerByIdBanks,
        reducerListBanks,
        reducerSaveBanks,
        reducerDeleteBanks,
        reducerExistsBanks
} from './pages/masters/Banks/reducers/BanksReducers'

import {
        reducerByIdBlockingType,
        reducerListBlockingType,
        reducerSaveBlockingType,
        reducerDeleteBlockingType,
        reducerExistsBlockingType
} from './pages/masters/BlockingType/reducers/BlockingTypeReducers';
import {
        reducerByIdBlockReasons,
        reducerListBlockReasons,
        reducerSaveBlockReasons,
        reducerDeleteBlockReasons,
        reducerExistsBlockReasons
} from './pages/masters/BlockReasons/reducers/BlockReasonsReducers';
import {
        reducerByIdDiscountTypes,
        reducerListDiscountTypes,
        reducerSaveDiscountTypes,
        reducerDeleteDiscountTypes,
        reducerExistsDiscountTypes
} from './pages/masters/DiscountTypes/reducers/DiscountTypesReducers';
import {
        reducerByIdDepartment,
        reducerListDepartment,
        reducerSaveDepartment,
        reducerDeleteDepartment,
        reducerExistsDepartment
} from './pages/masters/Department/reducers/departmentReducers';
import {
        reducerByIdIndustryTypes,
        reducerListIndustryTypes,
        reducerSaveIndustryTypes,
        reducerDeleteIndustryTypes,
        reducerExistsIndustryTypes
} from './pages/masters/IndustryTypes/reducers/IndustryTypesReducers';
import {
        reducerByIdInstructionTypes,
        reducerListInstructionTypes,
        reducerSaveInstructionTypes,
        reducerDeleteInstructionTypes,
        reducerExistsInstructionTypes
} from './pages/masters/InstructionTypes/reducers/InstructionTypesReducers';
import {
        reducerByIdInvoiceStatus,
        reducerListInvoiceStatus,
        reducerSaveInvoiceStatus,
        reducerDeleteInvoiceStatus,
        reducerExistsInvoiceStatus
} from './pages/masters/InvoiceStatus/reducers/InvoiceStatusReducers';
import {
        reducerByIdInvoiceVoidReasons,
        reducerListInvoiceVoidReasons,
        reducerSaveInvoiceVoidReasons,
        reducerDeleteInvoiceVoidReasons,
        reducerExistsInvoiceVoidReasons
} from './pages/masters/InvoiceVoidReasons/reducers/InvoiceVoidReasonsReducers';
import {
        reducerByIdPhoneNumberType,
        reducerListPhoneNumberType,
        reducerSavePhoneNumberType,
        reducerDeletePhoneNumberType
} from './pages/masters/PhoneNumberTypes/reducers/phoneNumberTypereducers';

import {
        reducerSavePaymentTerms,
        reducerListPaymentTerms,
        reducerByIdPaymentTerms,
        reducerDeletePaymentTerms
} from './pages/masters/PaymentTerms/reducers/PaymentTermsReducers';
import {
        reducerByIdPricingType,
        reducerListPricingType,
        reducerSavePricingType,
        reducerDeletePricingType,
        reducerExistsPricingType
} from './pages/masters/PricingType/reducers/PricingTypeReducers'
import {
        reducerByIdPaymentModes,
        reducerListPaymentModes,
        reducerSavePaymentModes,
        reducerDeletePaymentModes,
        reducerExistsPaymentModes
} from './pages/masters/PaymentModes/reducers/PaymentModesReducers'
import {
        reducerByIdPaymentGateway,
        reducerListPaymentGateway,
        reducerSavePaymentGateway,
        reducerDeletePaymentGateway,
        reducerExistsPaymentGateway
} from './pages/masters/PaymentGateway/reducers/PaymentGatewayReducers'
import {
        reducerByIdReservationStatus,
        reducerListReservationStatus,
        reducerSaveReservationStatus,
        reducerDeleteReservationStatus,
        reducerExistsReservationStatus
} from './pages/masters/ReservationStatus/reducers/ReservationStatusReducers'

import {
        reducerByIdSeating,
        reducerListSeating,
        reducerSaveSeating,
        reducerDeleteSeating,
        reducerExistsSeating
} from './pages/masters/SeatingType/reducers/SeatingReducers'
import {
        reducerByIdStaffCategory,
        reducerListStaffCategory,
        reducerSaveStaffCategory,
        reducerDeleteStaffCategory,
        reducerExistsStaffCategory
} from './pages/masters/StaffCategory/reducers/StaffCategoryReducers'

import {
        reducerByIdTaxCategory,
        reducerListTaxCategory,
        reducerSaveTaxCategory,
        reducerDeleteTaxCategory,
        reducerExistsTaxCategory
} from './pages/Masters/TaxCategory/reducers/TaxCategoryReducers';

// Initial routing state
const routeInitialState = fromJS({
        location: null,
});

export function routeReducer(state = routeInitialState, action) {
        switch (action.type) {
                /* istanbul ignore next */
                case LOCATION_CHANGE:
                        return state.merge({
                                location: action.payload,
                        });
                default:
                        return state;
        }
}
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
        return combineReducers({
                form: formReducer,
                route: routeReducer,
                //  // login reducers
                //  LoginReducer,


                // Login
                LoginSuccess,
                LoginFail,
                ForgotRequestSuccess,
                ForgotRequestFail,
                PermissionRequestSuccess,
                PermissionRequestFail,
                RegistrationRequestSuccess,
                RegistrationRequestFail,

                //AreaBooking
                reducerByIdAreaBooking,
                reducerListAreaBooking,
                reducerSaveAreaBooking,
                reducerDeleteAreaBooking,
                reducerExistsAreaBooking,

                // ActiveReservation
                reducerActiveReservation,

                //ReservationEnquiry
                reducerReservationEnquiry,

                //reservation
                reservationByIdFromReducer,

                // ReservationAvialbleAreas
                reducerAvailableAreas,
                selectedAreasFromReducer,
                getSeatingsFromReducer,

                getFunctionsFromReducer,
                getFunctionDetailsFromReducer,
                getFunctionByIdFromReducer,
                getOrganizationsFromReducer,
                getCustomersByOrgFromReducer,
                getReservationStatusFromReducer,

                reducermenuPackages,
                selectedmenuPackagesReducer,

                reducerServices,
                reducerVendorsServiceId,
                // selectedServicesReducer,

                //eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                // reducerByIdVendor,

                //contactPersonReducer
                contactPersonReducer,

                // editContactPersonReducer,
                reducerEditContactPerson,
                reducerDepartmentContactPerson,
                reducerDesignationContactPerson,

                //Banks
                reducerByIdBanks,
                reducerListBanks,
                reducerSaveBanks,
                reducerDeleteBanks,
                reducerExistsBanks,

                // BlockingType
                reducerByIdBlockingType,
                reducerListBlockingType,
                reducerSaveBlockingType,
                reducerDeleteBlockingType,
                reducerExistsBlockingType,

                // BlockReasons
                reducerByIdBlockReasons,
                reducerListBlockReasons,
                reducerSaveBlockReasons,
                reducerDeleteBlockReasons,
                reducerExistsBlockReasons,

                // DiscountTypes
                reducerByIdDiscountTypes,
                reducerListDiscountTypes,
                reducerSaveDiscountTypes,
                reducerDeleteDiscountTypes,
                reducerExistsDiscountTypes,
                // Department Master
                reducerByIdDepartment,
                reducerListDepartment,
                reducerSaveDepartment,
                reducerDeleteDepartment,
                reducerExistsDepartment,



                // IndustryTypes
                reducerByIdIndustryTypes,
                reducerListIndustryTypes,
                reducerSaveIndustryTypes,
                reducerDeleteIndustryTypes,
                reducerExistsIndustryTypes,

                // InstructionTypes
                reducerByIdInstructionTypes,
                reducerListInstructionTypes,
                reducerSaveInstructionTypes,
                reducerDeleteInstructionTypes,
                reducerExistsInstructionTypes,

                // InvoiceStatus
                reducerByIdInvoiceStatus,
                reducerListInvoiceStatus,
                reducerSaveInvoiceStatus,
                reducerDeleteInvoiceStatus,
                reducerExistsInvoiceStatus,

                // InvoiceVoidReasons
                reducerByIdInvoiceVoidReasons,
                reducerListInvoiceVoidReasons,
                reducerSaveInvoiceVoidReasons,
                reducerDeleteInvoiceVoidReasons,
                reducerExistsInvoiceVoidReasons,

                // Phone Number Types
                reducerByIdPhoneNumberType,
                reducerListPhoneNumberType,
                reducerSavePhoneNumberType,
                reducerDeletePhoneNumberType,

                //PaymentGateway
                reducerByIdPaymentGateway,
                reducerListPaymentGateway,
                reducerSavePaymentGateway,
                reducerDeletePaymentGateway,
                reducerExistsPaymentGateway,

                //PaymentModes
                reducerByIdPaymentModes,
                reducerListPaymentModes,
                reducerSavePaymentModes,
                reducerDeletePaymentModes,
                reducerExistsPaymentModes,

                // Payment Terms
                reducerSavePaymentTerms,
                reducerListPaymentTerms,
                reducerByIdPaymentTerms,
                reducerDeletePaymentTerms,

                // PricingType
                reducerByIdPricingType,
                reducerListPricingType,
                reducerSavePricingType,
                reducerDeletePricingType,
                reducerExistsPricingType,

                // ReservationStatus
                reducerByIdReservationStatus,
                reducerListReservationStatus,
                reducerSaveReservationStatus,
                reducerDeleteReservationStatus,
                reducerExistsReservationStatus,

                // SeatingType
                reducerByIdSeating,
                reducerListSeating,
                reducerSaveSeating,
                reducerDeleteSeating,
                reducerExistsSeating,

                //StaffCategory
                reducerByIdStaffCategory,
                reducerListStaffCategory,
                reducerSaveStaffCategory,
                reducerDeleteStaffCategory,
                reducerExistsStaffCategory,

                //TaxCategory
                reducerByIdTaxCategory,
                reducerListTaxCategory,
                reducerSaveTaxCategory,
                reducerDeleteTaxCategory,
                reducerExistsTaxCategory,

                form: formReducer,
                ...injectedReducers,
        });
}
