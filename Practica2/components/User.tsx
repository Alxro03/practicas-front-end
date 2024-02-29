import { FunctionComponent } from "preact";

type UserProps = {
  name: string;
  sex: string;
  email: string;
  address: string;
};

const User: FunctionComponent<UserProps> = (props) => {
  const { name, sex, email, address } = props;
  return (
    <div class="elementContainer">
      <p>
      <h2 class="text-overflow">{name}</h2>
      <strong>----------------------------------------------</strong>
        <strong>email:</strong> {email} <br></br>
        <strong>sex:</strong> {sex}<br></br>
        <strong>address:</strong> {address}
      </p>
    </div>
  );
};

export default User;