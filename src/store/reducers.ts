import {
    GET_CERTIFICATES_REQUEST,
    GET_CERTIFICATES_SUCCESS,
    GET_CERTIFICATES_FAILURE,
    SELECT_CERTIFICATE,
    SIGN_DOCUMENT_REQUEST,
    SIGN_DOCUMENT_SUCCESS,
    SIGN_DOCUMENT_FAILURE,
  } from './actions';
  
  const initialState = {
    certificates: [],
    selectedCertificate: null,
    signature: '',
    loading: false,
    error: null,
  };
  
  const certificatesReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_CERTIFICATES_REQUEST:
        return { ...state, loading: true, error: null };
      case GET_CERTIFICATES_SUCCESS:
        return { ...state, loading: false, certificates: action.payload };
      case GET_CERTIFICATES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SELECT_CERTIFICATE:
        return { ...state, selectedCertificate: action.payload };
      case SIGN_DOCUMENT_REQUEST:
        return { ...state, loading: true, error: null };
      case SIGN_DOCUMENT_SUCCESS:
        return { ...state, loading: false, signature: action.payload };
      case SIGN_DOCUMENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default certificatesReducer;