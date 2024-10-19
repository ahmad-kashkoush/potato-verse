import styled from "styled-components";

const StyledFormRow = styled.div``;

type FormRowProps = {
  errorMessage: string;
  children: React.ReactNode;
};
function FormRow({ errorMessage = "", children }: FormRowProps) {
  return (
    <StyledFormRow>
      {children}
      {errorMessage && <Error>{errorMessage}</Error>}
    </StyledFormRow>
  );
}

const Error = styled.p`
  font-weight: 600;
  color: red;
  font-size:18px;
`;
export default FormRow;
