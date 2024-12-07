import PropTypes from "prop-types";
import { LoadingInitial, Logo, Container } from "./LoadingComponent.styles";
import { RingLoader } from 'react-spinners';

const LoadingComponentInitial = ({ isLoading }) => {
    return (
        <>
      {isLoading && (
        <LoadingInitial>
          <Logo>CYBER</Logo>
        </LoadingInitial>
      )}
    </>
  );
};

LoadingComponentInitial.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export const LoadingSpin = () => {
    return (
      <Container>
        <RingLoader color="#007BFF" size={150} />
      </Container>
    );
  };

export default LoadingComponentInitial;
