import React from 'react';
import { connect } from 'react-redux';
import { selectCertificate } from '../store/actions';

interface CertificateListProps {
  certificates: any[];
  selectCertificate: (certificate: any) => void;
}

class CertificateList extends React.Component<CertificateListProps> {
  render() {
    return (
      <div>
        <h2>Доступные сертификаты</h2>
        <ul>
          {this.props.certificates.map((cert, index) => (
            <li key={index} onClick={() => this.props.selectCertificate(cert)}>
              {cert.subject} (действителен до: {cert.validTo})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  certificates: state.certificates,
});

const mapDispatchToProps = {
  selectCertificate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateList);