import { Dispatch } from 'redux';
import { getUserCertificates, Certificate, createAttachedSignature } from 'crypto-pro'; 

export const GET_CERTIFICATES_REQUEST = 'GET_CERTIFICATES_REQUEST';
export const GET_CERTIFICATES_SUCCESS = 'GET_CERTIFICATES_SUCCESS';
export const GET_CERTIFICATES_FAILURE = 'GET_CERTIFICATES_FAILURE';
export const SELECT_CERTIFICATE = 'SELECT_CERTIFICATE';
export const SIGN_DOCUMENT_REQUEST = 'SIGN_DOCUMENT_REQUEST';
export const SIGN_DOCUMENT_SUCCESS = 'SIGN_DOCUMENT_SUCCESS';
export const SIGN_DOCUMENT_FAILURE = 'SIGN_DOCUMENT_FAILURE';

export const getCertificatesRequest = () => ({
  type: GET_CERTIFICATES_REQUEST,
});

export const getCertificatesSuccess = (certificates: Certificate[]) => ({
  type: GET_CERTIFICATES_SUCCESS,
  payload: certificates,
});

export const getCertificatesFailure = (error: string) => ({
  type: GET_CERTIFICATES_FAILURE,
  payload: error,
});

export const selectCertificate = (certificate: any) => ({
  type: SELECT_CERTIFICATE,
  payload: certificate,
});

export const signDocumentRequest = () => ({
  type: SIGN_DOCUMENT_REQUEST,
});

export const signDocumentSuccess = (signature: string) => ({
  type: SIGN_DOCUMENT_SUCCESS,
  payload: signature,
});

export const signDocumentFailure = (error: string) => ({
  type: SIGN_DOCUMENT_FAILURE,
  payload: error,
});

export const getCertificates = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getCertificatesRequest());
    try {
      const certificates = await getUserCertificates(); 
      dispatch(getCertificatesSuccess(certificates));
    } catch (error) {
      dispatch(getCertificatesFailure((error as Error).message));
    }
  };
};

export const signDocument = (file: File, certificate: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(signDocumentRequest());
    try {
      const fileReader = new FileReader();
      fileReader.onload = async (event) => {
        const fileContent = event.target?.result as string;
        const signature = await createAttachedSignature(fileContent, certificate);
        dispatch(signDocumentSuccess(signature));
      };
      fileReader.onerror = (event) => {
        const errorMessage = (event.target as FileReader)?.error?.message || 'File reading error';
        dispatch(signDocumentFailure(errorMessage));
      };
      fileReader.readAsText(file);
    } catch (error) {
      dispatch(signDocumentFailure((error as Error).message));
    }
  };
};