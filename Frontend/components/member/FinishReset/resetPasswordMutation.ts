import { gql } from '@apollo/client';

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $code: String!
    $password: String!
  ) {
    redeemMemberPasswordResetToken(
      email: $email
      token: $code
      password: $password
    ) {
      code
      message
    }
  }
`;
export default RESET_PASSWORD_MUTATION;
