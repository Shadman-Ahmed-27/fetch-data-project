import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault}>
        <Button buttonText="Users" reqType={reqType} setReqType={setReqType} />
        <Button buttonText="Posts" reqType={reqType} setReqType={setReqType} />
        <Button
          buttonText="Comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </form>
    </div>
  );
};

export default Form;
